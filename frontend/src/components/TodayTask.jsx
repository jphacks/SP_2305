import React, { useContext, useEffect, useState } from "react";
import dayjs from "dayjs";
import GlobalContext from "../context/GlobalContext";

export const TodayTask = (props) => {
  const { day } = props;
  const [dayEvents, setDayEvents] = useState([]);
  const [dayTasks, setDayTasks] = useState([]);
  const { savedEvents, setSelectedEvent, savedTasks, setSelectedTask, setShowModalTabs, setActiveTab } = useContext(GlobalContext);

  // 登録データを日付が一致する日に表示
  useEffect(() => {
    const events = savedEvents.filter((evt) => {
      const eventStartTime = dayjs(evt.startTime);
      const eventEndTime = dayjs(evt.endTime);

      // イベントが日にまたがるかどうかをチェック
      return (
        (eventStartTime.isBefore(day.endOf('day')) ||
          eventStartTime.isSame(day.endOf('day'))) && // イベントの開始日時が日の終了前
        (eventEndTime.isAfter(day.startOf('day')) ||
          eventEndTime.isSame(day.startOf('day')))  // イベントの終了日時が日の開始後
      );
    });
    setDayEvents(events);
  }, [savedEvents, day]);

  useEffect(() => {
    const tasks = savedTasks.filter(
      (tsk) => dayjs(tsk.day).format("DD-MM-YY") === day.format("DD-MM-YY")
    );
    setDayTasks(tasks);
  }, [savedTasks, day]);

  return (
    <div className="border border-gray-200 flex flex-col">
      {dayEvents.map((evt, idx) => (
        <div
          key={idx}
          onClick={() => {
            setSelectedEvent(evt);
            setShowModalTabs(true);
            setActiveTab("event");
          }}
          className={`bg-neutral-200 p-1 mr-3 text-gray-600 text-sm rounded mb-1 truncate`}
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
          className={`bg-neutral-400 p-1 mr-3 text-gray-600 text-sm mb-1 truncate`}
        >
          {tsk.title}
        </div>
      ))}
    </div>
  );
};