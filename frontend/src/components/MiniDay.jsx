import React, { useContext, useEffect, useState } from "react";
import dayjs from "dayjs";
import GlobalContext from "../context/GlobalContext";

export const MiniDay = (props) => {
  const { day, rowIdx } = props;
  const { setMiniDaySelected, miniDaySelected } = useContext(GlobalContext);

  // 今日の日付を色付けする
  const getCurrentDayClass = () => {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? "bg-white text-regal-blue rounded-full w-7 font-bold"
      : "";
  };


  const getSelectedDayClass = () => {
    return day.format("DD-MM-YY") === miniDaySelected.format("DD-MM-YY")
      ? "bg-blue-400 text-white rounded-full w-7"
      : "";
  };

  return (
    <div className="border border-regal-blue flex flex-col">
      <header
        className="flex flex-col items-center cursor-pointer"
        onClick={() => {
          setMiniDaySelected(day);
        }}
      >
        {/* 1行目に曜日を表示しない */}
        <p className={`text-sm p-1 my-1 text-center ${getCurrentDayClass()} ${getSelectedDayClass()}`}>
          {day.format("DD")}
        </p>
      </header>
      <div
        className="flex-1 cursor-pointer"
        onClick={() => {
          setMiniDaySelected(day);
        }}
      >
      </div>
    </div>
  );
};