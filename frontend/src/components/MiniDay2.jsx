import React, { useContext, useEffect, useState } from "react";
import dayjs from "dayjs";
import GlobalContext from "../context/GlobalContext";

export const MiniDay2 = (props) => {
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
        {/* 1行目に曜日を表示 , 日曜日を赤*/}
        {rowIdx === 0 && day == 0 && <p className="text-sm mt-1 text-red-600">{day.format("ddd")}</p>}
        {rowIdx === 0 && day == 6 && <p className="text-sm mt-1 text-blue-600">{day.format("ddd")}</p>}
        {rowIdx === 0 && day != 0 && <p className="text-sm mt-1 text-white">{day.format("ddd")}</p>}
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