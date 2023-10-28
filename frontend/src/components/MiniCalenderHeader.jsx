import dayjs from "dayjs";
import React, { useContext } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import GlobalContext from "../context/GlobalContext";

export const MiniCalendarHeader = () => {
  const { miniMonthIndex, setMiniMonthIndex } = useContext(GlobalContext);
  const handlePrevMonth = () => {
    setMiniMonthIndex(miniMonthIndex - 1);
  };
  const handelNextMonth = () => {
    setMiniMonthIndex(miniMonthIndex + 1);
  };

  return (
    <header className="px-4 py-2 flex items-center">
      <h2 className="ml-4 text-xl text-gray-500 font-bold">
        {dayjs(new Date(dayjs().year(), miniMonthIndex)).format("MM YYYY")}
      </h2>
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
      

    </header>
  );
};