import React, { useContext, useEffect, useState } from "react";
import dayjs from "dayjs";
import GlobalContext from "../context/GlobalContext";

export const TimeTable = (props) => {
  const { day, rowId, columnId } = props;
  const [dayEvents, setDayEvents] = useState([]);
  const [dayTasks, setDayTasks] = useState([]);
  const { setDaySelected, savedEvents, setSelectedEvent, savedTasks, setSelectedTask, setShowModalTabs, setActiveTab } = useContext(GlobalContext);

  const getCurrentDayClass = () => {
    return day.add(1, 'd').format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? "bg-blue-600 text-white rounded-full w-7"
      : "";
  };

  // 登録データを日付が一致する日に表示
  useEffect(() => {
    const events = savedEvents.filter((evt) => {
      const eventStartTime = dayjs(evt.startTime);
      const eventEndTime = dayjs(evt.endTime);

      // イベントが日にまたがるかどうかをチェック
      return (
        (eventStartTime.isBefore(day.endOf('hour')) ||
          eventStartTime.isSame(day.endOf('hour'))) && // イベントの開始日時が日の終了前
        (eventEndTime.isAfter(day.startOf('hour')) ||
          eventEndTime.isSame(day.startOf('hour')))  // イベントの終了日時が日の開始後
      );
    });
    setDayEvents(events);
  }, [savedEvents, day]);

  useEffect(() => {
    const tasks = savedTasks.filter(
      (tsk) => dayjs(tsk.day).format("HH-DD-MM-YY") === day.format("HH-DD-MM-YY")
    );
    setDayTasks(tasks);
  }, [savedTasks, day]);

  return (
    <div className="border border-gray-200 flex flex-col">
      {columnId === 0 ? (
        <>
          {rowId === 0 ? (
            <></>
          ) : (
            <>
              <header className="flex flex-col items-center">
                <p className="text-sm p-1 my-1 text-center">
                  {day.format("HH:00")}
                </p>
              </header>
              <div className="flex-1 cursor-pointer"></div>
            </>
          )}
        </>

      ) : (
        <>
          {rowId === 0 ? (
            <header className="flex flex-col items-center">
              <p className="text-sm mt-1">{day.add(1, 'd').format("ddd")}</p>
              <p className={`text-sm p-1 my-1 text-center" ${getCurrentDayClass()}`}>
                {day.add(1, 'd').format("DD")}
              </p>
            </header>
          ) : (
            <>
              <header className="flex flex-col items-center">
              </header>
              <div className="flex-1 cursor-pointer" onClick={() => {
                setDaySelected(day);
                setShowModalTabs(true);
              }}>
                {dayEvents.map((evt, idx) => (
                  <div
                    key={idx}
                    onClick={() => setSelectedEvent(evt)}
                    className={`${evt.color} p-1 mr-3 text-gray-600 text-sm rounded mb-1 truncate`}
                  >
                    {evt.title}
                  </div>
                ))}
                {dayTasks.map((tsk, idx) => (
                  <div
                    key={idx}
                    onClick={() => {
                      setSelectedTask(tsk);
                      setShowModalTabs(true);
                      setActiveTab("task");
                    }}
                    className={`${tsk.color} p-1 mr-3 text-gray-600 text-sm mb-1 truncate border-l-8`}
                  >
                    {tsk.title}
                  </div>
                ))}
              </div>
            </>

          )}

        </>
      )}

    </div>
  );
};