// 今日を含む1週間を返す関数getWeek(月)
import dayjs from "dayjs";
import { getMonth } from "./util";
import { useState } from "react";


export function getWeek(month = dayjs().month()) {
  // 今日が何週目かを取得
  const week = (dayjs().date + dayjs.startOf('month').day() + 6) / 7;

  const tmpCalledMonth = getMonth();
  const thisWeek = tmpCalledMonth[week - 1];
  // const daysMatrix_week = new Array(1).fill([]).map(() => {
  //   return new Array(7).fill(null).map(() => {
  //     return dayjs(new Date(year, month, currentMonthCount));
  //   });
  // });
  console.log(thisWeek);
  return thisWeek;
}