import dayjs from "dayjs";
import React, { useContext } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import GlobalContext from "../context/GlobalContext";
import { ButtonGroup, Button, IconButton } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { Link, useLocation } from 'react-router-dom';

export const CalendarHeader = () => {
  const { monthIndex, setMonthIndex, setShowModalTabs, weekStartDay, setWeekStartDay } = useContext(GlobalContext);
  const handlePrevMonth = () => {
    setMonthIndex(monthIndex - 1);
    setWeekStartDay(weekStartDay.subtract(7, 'd'));
  };
  const handelNextMonth = () => {
    setMonthIndex(monthIndex + 1);
    setWeekStartDay(weekStartDay.add(7, 'd'));
  };
  const handleReset = () => {
    // 現在の月を取得
    setMonthIndex(dayjs().month());
    setWeekStartDay(dayjs());
  };
  const location = useLocation(); // 現在のURLを取得
  const monthButtonStyle = {
    colorScheme: location.pathname === '/' ? 'blue' : 'gray',
    variant: 'solid',
  };
  const weekButtonStyle = {
    colorScheme: location.pathname === '/week' ? 'blue' : 'gray',
    variant: 'solid',
  };

  return (
    <header className="w-900 h-87 px-4 py-2 flex items-center">
      <div className="w-201 h-87 flex items-center">
        <h1 className="ml-4 text-7xl text-gray-500 font-bold">
          {dayjs(new Date(dayjs().year(), monthIndex)).format("MM")}
        </h1>
        <div className='w-98 h-53 flex-col items-center ml-8'>
          <h2 className="ml-8 text-3xl text-gray-500">
            {dayjs(new Date(dayjs().year(), monthIndex)).format("YYYY")}
          </h2>
          <h2 className="ml-9 text-base text-gray-500">
            {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM")}
          </h2>
        </div>
      </div>
      {/* <h1 className="mr-10 text-xl text-gray-500 fond-bold">Calendar</h1> */}
      {/* <button onClick={handleReset} className="border rounded py-2 px-4 mr-5">
        Today
      </button> */}
      {/* <div className="w-50 h-19 ml-20"> */}
      <button onClick={handlePrevMonth}>
        <span className="w-19 h-13 cursor-pointer text-gray-600 mx-2">
          <MdChevronLeft />
        </span>
      </button>
      <button onClick={handelNextMonth}>
        <span className="w-19 h-13 cursor-pointer text-gray-600 mx-2">
          <MdChevronRight />
        </span>
      </button>
      {/* </div> */}
      {/* <h2 className="ml-4 tgixt-xl text-gray-500 font-bold">
        {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
      </h2> */}
      <div className="w-91 h-39 ml-20">
        <Link to="/">
          <Button {...monthButtonStyle}>
            Month
          </Button>
        </Link>
        <Link to="/week">
          <Button className="ml-10" {...weekButtonStyle}>
            Week
          </Button>
        </Link>
      </div>
      <ButtonGroup
        size='sm'
        isAttached
        variant='outline'
        marginLeft='auto'
        onClick={() => {
          setShowModalTabs(true);
        }}
      >
        {/* <Button>Add</Button> */}
        <IconButton aria-label='Add to friends' icon={<AddIcon />} />
      </ButtonGroup>

    </header>
  );
};