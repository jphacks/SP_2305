import dayjs from "dayjs";
import React, { useContext } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import GlobalContext from "../context/GlobalContext";
import { ButtonGroup, Button, IconButton } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { Link } from 'react-router-dom';

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
  return (
    <header className="px-4 py-2 flex items-center">
      <h1 className="mr-10 text-xl text-gray-500 fond-bold">Calendar</h1>
      <button onClick={handleReset} className="border rounded py-2 px-4 mr-5">
        Today
      </button>
      <button onClick={handlePrevMonth}>
        <span className="cursor-pointer text-gray-600 mx-2">
          <MdChevronLeft />
        </span>
      </button>
      <button onClick={handelNextMonth}>
        <span className="cursor-pointer text-gray-600 mx-2">
          <MdChevronRight />
        </span>
      </button>
      <h2 className="ml-4 tgixt-xl text-gray-500 font-bold">
        {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
      </h2>
      <Link to="/week">
        <Button colorScheme='teal' variant='solid'>
          WEEK
        </Button>
      </Link>
      <ButtonGroup
        size='sm'
        isAttached
        variant='outline'
        marginLeft='auto'
        onClick={() => {
          setShowModalTabs(true);
        }}
      >
        <Button>Add</Button>
        <IconButton aria-label='Add to friends' icon={<AddIcon />} />
      </ButtonGroup>

    </header>
  );
};