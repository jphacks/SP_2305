import dayjs from "dayjs";
import { getMonth } from '../util';
import React, { useState, useEffect, useContext } from "react";
import GlobalContext from "../context/GlobalContext";
import { ButtonGroup, Button, IconButton, TagLeftIcon } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { MiniMonth } from "./MiniMonth";
import { MiniCalendarHeader } from "./MiniCalenderHeader";
import { TodayTask } from "./TodayTask";



export const Sidebar = () => {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { miniMonthIndex, monthIndex, setMiniDaySelected, daySelected } = useContext(GlobalContext);
  const today = dayjs();

  useEffect(() => {
    setCurrentMonth(getMonth(miniMonthIndex));
  }, [miniMonthIndex]);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    <div className="px-4 py-2 items-center">
      <p className="ml-4 text-xl text-gray-500 font-bold">
        Today
      </p>
      <div className="px-4 py-2 flex items-center">
        <h1 className="ml-4 text-xl text-gray-500 font-bold">
          {dayjs().format("MM/DD")}
        </h1>
        <div className="px-4 py-2 items-center">
          <h2 className="ml-4 text-xl text-gray-500 font-bold">
            {dayjs().format("YYYY")}
          </h2>
          <h2 className="ml-4 text-xl text-gray-500 font-bold">
            {dayjs().format("dddd")}
          </h2>
        </div>
      </div>

      <div>
        <p className="ml-4 text-xl text-gray-500 font-bold">
          Calender
        </p>
        <MiniCalendarHeader />
        <MiniMonth month={currentMonth} />
      </div>
      <p className="ml-4 text-xl text-gray-500 font-bold">shedule & task</p>
      <TodayTask day={today} />
    </div>
  )
}