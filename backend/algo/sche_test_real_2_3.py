import bisect
import datetime
import itertools
import time
import pprint

"""
task: {"uuid": , "can_start": <datetime>, "deadline": <datetime>, "est": <timedelta>}
sche: {"uuid": , "start": <datetime>, "end": <datetime>, "fromtask": <boolean>}
"""

def task2sche(_task, _start):
    return {
        "uuid": _task["uuid"], 
        "start": _start, 
        "end": _start + _task["est"],
        "fromtask": True
    }

def overlap_judge(_start1, _end1, _start2, _end2):
    #return (not (_end1 <= _start2) or (_end2 <= _start1))
    return (_start2 < _end1) and (_start1 < _end2)

def search_insert_datetime(_schelist, _task, _current_time):
    # taskのcan_start、schelistのendをそれぞれtaskの開始時間にセットしたとき
    # taskの締切に収まってる、かつ、schelistの時間と被らないかcheck
    # 収まっているもののうち、最も早いものを返す
    #
    # _schelistはソート済みの前提
    # current_timeはどのscheのendより早い
    # current_time < sche["end"]

    # current_timeをtaskの開始時刻にしたとき締切を守れるか
    if current_time + _task["est"] <= _task["deadline"]:
        # current_timeをtaskの開始時刻にしたときschelistと被るか
        # current_timeと同じかより前に終わるschelistのscheは存在せず、
        # schelistは順に並んでいるので最初の要素と被らなければ被るスケジュールはない
        # 被らなかったらcurrent_timeを結果にする
        overlap = False
        if _schelist:
            overlap = overlap_judge(_current_time, _current_time + _task["est"], _schelist[0]["start"], _schelist[0]["end"])
        if not overlap:
            return _current_time
    
    # fromtaskがTrueの要素のうち、一番後ろのインデックスを探す
    schelist_search_start_idx = 0
    for i, sche in enumerate(_schelist[::-1]):
        if sche["fromtask"]:
            schelist_search_start_idx = len(_schelist)-1-i
            break
    
    # schelistの元taskのうち一番後のものの["end"]から見ていく
    for i, sche in enumerate(_schelist[schelist_search_start_idx:]):
        # taskの開始をあるscheの終了にしたとき、taskの締切を守れるか
        # _schelistは順番に並んでいるので、
        # あるscheの終了をtaskの開始にして締切に間に合わないのなら、
        # その次のscheも間に合わないから考慮しなくてよい
        if (_task["deadline"] < sche["end"] + _task["est"]):
            break
        # _schelistの、taskの開始に設定したscheの次の要素と被らなければ、
        # 次の次の要素と被ることもないのでそれ以上検査しない
        overlap = False
        if len(_schelist) > schelist_search_start_idx+i+1:
            overlap = overlap_judge(
                sche["end"],
                sche["end"] + _task["est"], 
                _schelist[schelist_search_start_idx+i+1]["start"], 
                _schelist[schelist_search_start_idx+i+1]["end"]
            )
        if overlap:
            continue
        return sche["end"]
    return None

# _schelistはソート済み、時間が重複しないのが前提
# 5sルール
def search_fastest(_schelist, _tasklist, _current_time, _interbal):
    """
    Parameters
    ----------
    _schelist : list
        スケジュールのリスト。
        スケジュールどうしの時間の重複がなく、また昇順に並んでいる必要があります
        [
            {"uuid": any, "start": datetime.datetime, "end": datetime.datetime},
            ...
        ]
        
    _tasklist : list
        タスクのリスト。
        [
            {"uuid": any, "deadline": datetime.datetime, "est": datetime.timedelta},
            ...
        ]
    _current_time : datetime.datetime
        この時間以降にタスクを入れます
    _interbal: datetime.timedelta
        タスクの後ろにこの長さの休憩時間を入れます

    Returns
    -------
    list
        タスクをスケジュールに変換して挿入ずみのスケジュールのリストを返します。
        _current_timeと同じかより前に終わるスケジュールは含まれません
        条件を満たすスケジュールが見つからなかった場合、空のリストとなります。
        [
            {"uuid": any, "start": datetime.datetime, "end": datetime.datetime},
            ...
        ]
    """

    # _current_timeと同じかより前に終わるスケジュールを無視
    _schelist_copy = [x for x in _schelist if (_current_time < x["end"])]
    # _schelist_copyにfromtask属性の追加
    for sche in _schelist_copy:
        sche["fromtask"] = False

    _tasklist_copy = _tasklist.copy()
    # tasklistの所要時間にinterbalを追加
    for task in _tasklist_copy:
        task["est"] += _interbal
        task["deadline"] += _interbal
    # tasklistの順を変えて、締め切りの近いものを先頭に、同じ締め切りでも所要時間の長いものを先頭に
    _tasklist_copy.sort(reverse=True, key=lambda x: x["est"])
    _tasklist_copy.sort(key=lambda x: x["deadline"])

    fastest_schelist = []
    che = 0
    timekeeper_start = time.time()
    for i, tasklist in enumerate(itertools.permutations(_tasklist_copy)):
        che += 1
        if i%1000 == 0 and 5.0 < time.time() - timekeeper_start:
            break
        challenger_schelist = _schelist_copy.copy()
        uninsertable = False
        for task in tasklist:
            insert_datetime = search_insert_datetime(challenger_schelist, task, _current_time)
            if not insert_datetime:
                uninsertable = True
                break
            bisect.insort(challenger_schelist, task2sche(task, insert_datetime), key=lambda x: x["end"])
        if uninsertable:
            continue
        # もしfastest_schelistが空か、
        # もしchallenger_schelistがfastest_schelistより短いスケジュールなら更新
        if (
            (not fastest_schelist)
            or [x for x in challenger_schelist if x["fromtask"]][-1]["end"] < [x for x in fastest_schelist if x["fromtask"]][-1]["end"]
        ):
            fastest_schelist = challenger_schelist
    if fastest_schelist:
        for sche in fastest_schelist:
            if sche["fromtask"]:
                sche["end"] -= interbal
            del sche["fromtask"]
    #print(che)
    return fastest_schelist

if __name__ == "__main__":
    scheli = [
        {"uuid": 0, "start": datetime.datetime(2023, 10, 27, 23, 00), "end": datetime.datetime(2023, 10, 28,  7, 00)},
        {"uuid": 1, "start": datetime.datetime(2023, 10, 28, 23,  0), "end": datetime.datetime(2023, 10, 29,  7, 00)},
        {"uuid": 2, "start": datetime.datetime(2023, 10, 29, 23,  0), "end": datetime.datetime(2023, 10, 30,  7, 00)},
        {"uuid": 3, "start": datetime.datetime(2023, 10, 30, 23, 00), "end": datetime.datetime(2023, 10, 31,  7, 00)},
        {"uuid": 4, "start": datetime.datetime(2023, 10, 31, 23, 00), "end": datetime.datetime(2023, 11,  1,  7, 00)},
        {"uuid": 5, "start": datetime.datetime(2023, 11,  1, 23, 00), "end": datetime.datetime(2023, 11,  2,  7, 00)},
        {"uuid": 6, "start": datetime.datetime(2023, 11,  2, 23, 00), "end": datetime.datetime(2023, 11,  3,  7, 00)},
        {"uuid": 7, "start": datetime.datetime(2023, 11,  3, 23, 00), "end": datetime.datetime(2023, 11,  4,  7, 00)},
        {"uuid": 8, "start": datetime.datetime(2023, 11,  4, 23, 00), "end": datetime.datetime(2023, 11,  5,  7, 00)},
        {"uuid": 9, "start": datetime.datetime(2023, 11,  5, 23, 00), "end": datetime.datetime(2023, 11,  6,  7, 00)},
    ]
    taskli = [
        {"uuid": 101, "deadline": datetime.datetime(2023, 10, 29, 23, 00), "est": datetime.timedelta(hours=10)},
        {"uuid": 102, "deadline": datetime.datetime(2023, 10, 29, 23, 00), "est": datetime.timedelta(hours=2)},
        {"uuid": 103, "deadline": datetime.datetime(2023, 10, 29, 23, 00), "est": datetime.timedelta(hours=2)},
        {"uuid": 104, "deadline": datetime.datetime(2023, 10, 29, 23, 00), "est": datetime.timedelta(hours=2)},
        {"uuid": 105, "deadline": datetime.datetime(2023, 10, 29, 23, 00), "est": datetime.timedelta(hours=2)},
        {"uuid": 106, "deadline": datetime.datetime(2023, 10, 29, 23, 00), "est": datetime.timedelta(hours=2)},
        {"uuid": 107, "deadline": datetime.datetime(2023, 10, 29, 23, 00), "est": datetime.timedelta(hours=2)},
        {"uuid": 108, "deadline": datetime.datetime(2023, 10, 29, 23, 00), "est": datetime.timedelta(hours=2)},
        {"uuid": 109, "deadline": datetime.datetime(2023, 10, 30, 23, 00), "est": datetime.timedelta(hours=2)},
    ]
    current_time = datetime.datetime(2023, 10, 28,  9, 00)
    interbal = datetime.timedelta(minutes=30)

    print(datetime.datetime.now())
    st = time.time()
    result = search_fastest(scheli, taskli, current_time, interbal)
    sto = time.time()
    pprint.pprint(result)
    print(sto-st)