import React, { useContext, useEffect, useState } from "react";
import dayjs from "dayjs";
import GlobalContext from "../context/GlobalContext";

export const MiniDay = (props) => {
  const { day, rowIdx } = props;
  const { setMiniDaySelected, miniDaySelected } =useContext(GlobalContext);

  // 今日の日付を色付けする
  const getCurrentDayClass = () => {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? "bg-blue-600 text-white rounded-full w-7"
      : "";
  };

  const getSelectedDayClass = () => {
    return day.format("DD-MM-YY") === miniDaySelected.format("DD-MM-YY")
      ? "bg-blue-400 text-white rounded-full w-7"
      : "";
  };

  return (
    <div className="border border-gray-200 flex flex-col">
      <header 
        className="flex flex-col items-center cursor-pointer" 
        onClick={() => {
          setMiniDaySelected(day);
        }}
      >
        {/* 1行目に曜日を表示 */}
        {rowIdx === 0 && <p className="text-sm mt-1">{day.format("ddd")}</p>}
        <p className={`text-sm p-1 my-1 text-center" ${getCurrentDayClass()} ${getSelectedDayClass()}`}>
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