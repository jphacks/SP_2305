import bisect
import datetime
import itertools
import time
import pprint

"""
task: {"id": , "can_start": <datetime>, "must_end": <datetime>, "need_time": <timedelta>}
sche: {"id": , "start": <datetime>, "end": <datetime>, "fromtask": <boolean>}
"""

def task2sche(_task, _start):
    return {
        "id": _task["id"], 
        "start": _start, 
        "end": _start + _task["need_time"],
        "fromtask": True
    }

#def overlap_judge(_start1, _end1, _start2, _end2):
#    # Trueなら被り
#    half_len1 = (_end1 - _start1)*0.5
#    half_len2 = (_end2 - _start2)*0.5
#    mid1 = _start1 + half_len1
#    mid2 = _start2 + half_len2
#    return abs(mid2 - mid1) < (half_len1 + half_len2)

def overlap_judge(_start1, _end1, _start2, _end2):
    #return (not (_end1 <= _start2) or (_end2 <= _start1))
    return (_start2 < _end1) and (_start1 < _end2)

def search_insert_datetime(_schelist, _task):
    # schelistのend、taskのcan_startをそれぞれtaskの開始時間にセットしたとき
    # schelistの時間と被らないか、taskの制限期間に収まってるかcheck
    # 収まっているもののうち、最も早いものを返す
    #
    # _schelistはソート済みの前提
    start_candidate = None

    # fromtaskがTrueの要素のうち、一番後ろのインデックスを探す
    schelist_search_start_idx = 0
    for i, sche in enumerate(_schelist[::-1]):
        if sche["fromtask"]:
            schelist_search_start_idx = len(_schelist)-1-i
            break
    
    for i, sche in enumerate(_schelist[schelist_search_start_idx:]):
        # taskの開始をあるscheの終了にしたとき、taskの制限期間を守れるか
        if (sche["end"] < _task["can_start"]) or (_task["must_end"] < sche["end"] + _task["need_time"]):
            continue
        overlap = False
        for check_sche in _schelist[schelist_search_start_idx+i+1:]:
            overlap = overlap_judge(sche["end"], sche["end"] + _task["need_time"], check_sche["start"], check_sche["end"])
            break
        if overlap:
            continue
        start_candidate = sche["end"]
        break
    
    # _taskのcan_startをtaskの開始時刻にしたときschelistと被るか
    # 被るならstart_candidateを結果にする
    for check_sche in _schelist:
        # check_scheが被るか
        overlap = overlap_judge(_task["can_start"], _task["can_start"] + _task["need_time"], check_sche["start"], check_sche["end"])
        if overlap:
            return start_candidate

    if (start_candidate) and (start_candidate < _task["can_start"]):
        return start_candidate
    else:
        return _task["can_start"]

che = 0
# _schelistはソート済み、時間が重複しないのが前提
def search_fastest(_schelist, _tasklist):
    global che
    _tasklist_copy = _tasklist.copy()
    _tasklist_copy.sort(reverse=True, key=lambda x: x["need_time"])
    _tasklist_copy.sort(key=lambda x: x["must_end"])
    fastest_schelist = []
    for tasklist in itertools.permutations(_tasklist_copy):
        che += 1
        challenger_schelist = _schelist.copy()
        uninsertable = False
        for task in tasklist:
            insert_datetime = search_insert_datetime(challenger_schelist, task)
            if not insert_datetime:
                uninsertable = True
                break
            bisect.insort(challenger_schelist, task2sche(task, insert_datetime), key=lambda x: x["end"])
        if uninsertable:
            continue
        if (
            (not fastest_schelist)
            or [x for x in challenger_schelist if x["fromtask"]][-1]["end"] < [x for x in fastest_schelist if x["fromtask"]][-1]["end"]
        ):
            fastest_schelist = challenger_schelist
    return fastest_schelist

if __name__ == "__main__":
    scheli = [
        {"id": 0, "start": datetime.datetime(2023, 10, 27, 23, 00), "end": datetime.datetime(2023, 10, 28,  7, 00), "fromtask": False},
        {"id": 1, "start": datetime.datetime(2023, 10, 28, 23,  0), "end": datetime.datetime(2023, 10, 29,  7, 00), "fromtask": False},
        {"id": 2, "start": datetime.datetime(2023, 10, 29, 23,  0), "end": datetime.datetime(2023, 10, 30,  7, 00), "fromtask": False},
        {"id": 3, "start": datetime.datetime(2023, 10, 30, 23, 00), "end": datetime.datetime(2023, 10, 31,  7, 00), "fromtask": False},
        {"id": 4, "start": datetime.datetime(2023, 10, 31, 23, 00), "end": datetime.datetime(2023, 11,  1,  7, 00), "fromtask": False}
    ]
    taskli = [
        {"id": 101, "can_start": datetime.datetime(2023, 10, 28,  9, 00), "must_end": datetime.datetime(2023, 10, 29, 23, 00), "need_time": datetime.timedelta(hours=10)},
        {"id": 102, "can_start": datetime.datetime(2023, 10, 28,  9, 00), "must_end": datetime.datetime(2023, 10, 28, 23, 00), "need_time": datetime.timedelta(hours=1)},
        {"id": 103, "can_start": datetime.datetime(2023, 10, 28,  9, 00), "must_end": datetime.datetime(2023, 10, 28, 23, 00), "need_time": datetime.timedelta(hours=1)},
        {"id": 104, "can_start": datetime.datetime(2023, 10, 28,  9, 00), "must_end": datetime.datetime(2023, 10, 28, 23, 00), "need_time": datetime.timedelta(hours=1)},
        {"id": 105, "can_start": datetime.datetime(2023, 10, 28,  9, 00), "must_end": datetime.datetime(2023, 10, 28, 23, 00), "need_time": datetime.timedelta(hours=1)},
        {"id": 106, "can_start": datetime.datetime(2023, 10, 28,  9, 00), "must_end": datetime.datetime(2023, 10, 28, 23, 00), "need_time": datetime.timedelta(hours=1)},
        {"id": 107, "can_start": datetime.datetime(2023, 10, 28,  9, 00), "must_end": datetime.datetime(2023, 10, 28, 23, 00), "need_time": datetime.timedelta(hours=1)},
        {"id": 108, "can_start": datetime.datetime(2023, 10, 28,  9, 00), "must_end": datetime.datetime(2023, 10, 28, 23, 00), "need_time": datetime.timedelta(hours=1)},
        {"id": 109, "can_start": datetime.datetime(2023, 10, 28,  9, 00), "must_end": datetime.datetime(2023, 10, 29, 23, 00), "need_time": datetime.timedelta(hours=1)},
    ]
    print(datetime.datetime.now())
    st = time.time()
    result = search_fastest(scheli, taskli)
    sto = time.time()
    pprint.pprint(result)
    print(sto-st)
    print(che)