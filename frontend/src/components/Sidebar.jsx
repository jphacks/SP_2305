import dayjs from "dayjs";
import { getMonth } from '../util';
import React, { useState, useEffect, useContext } from "react";
import GlobalContext from "../context/GlobalContext";
import { ButtonGroup, Button, IconButton, TagLeftIcon } from "@chakra-ui/react";
import { AddIcon, HamburgerIcon } from "@chakra-ui/icons";
import { MiniMonth } from "./MiniMonth";
import { MiniCalendarHeader } from "./MiniCalenderHeader";
import { TodayTask } from "./TodayTask";



export const Sidebar = () => {
  const [currentMonth, setCurrentMonth, setShowSideBar] = useState(getMonth());
  const { miniMonthIndex, monthIndex, setMiniDaySelected, daySelected } = useContext(GlobalContext);
  const today = dayjs();

  useEffect(() => {
    setCurrentMonth(getMonth(miniMonthIndex));
  }, [miniMonthIndex]);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);


  return (
    <div className="bg-regal-blue px-4 py-2 items-center">
      <div className="flex items-center mt-5">
        <p className="ml-4 text-base text-white">
          today
        </p>
        {/* SideBar隠す未実装 */}
        {/* <ButtonGroup
          size='sm'
          isAttached
          variant='outline'
          marginLeft='auto'
          onClick={() => {
            setShowSideBar(false);
          }}
        >
          <IconButton aria-label='Add to friends' icon={<HamburgerIcon />} />
        </ButtonGroup> */}
      </div>
      <div className="px-4 py-2 flex items-center mt-10">
        <h1 className="text-5xl text-white">
          {dayjs().format("MM/DD")}
        </h1>
        <div className="px-4 py-2 items-center">
          <h2 className="ml-4 text-xl text-white">
            {dayjs().format("YYYY")}
          </h2>
          <h2 className="ml-4 text-xl text-white">
            {dayjs().format("dddd")}
          </h2>
        </div>
      </div >

      <div>
        <p className="ml-4 text-xl text-text-color mt-5">
          Calender
        </p>
        <MiniCalendarHeader />
        <MiniMonth month={currentMonth} />
      </div>
      <p className="ml-4 text-xl text-text-color mt-5 mb-5">shedule & task</p>
      <TodayTask day={today} />
    </div >
  )
}