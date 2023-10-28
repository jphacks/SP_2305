import dayjs from "dayjs";

export function getMonth(month = dayjs().month()) {
  const year = dayjs().year();
  const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day();
  let currentMonthCount = 0 - firstDayOfTheMonth;
  const daysMatrix = new Array(5).fill([]).map(() => {
    return new Array(7).fill(null).map(() => {
      currentMonthCount++;
      return dayjs(new Date(year, month, currentMonthCount));
    });
  });
  return daysMatrix;
}

export function getWeekMatrix(day = dayjs()) {
  const year = day.year();
  const month = day.month();
  let currentTimeCount = - 2;
  let currentDayCount = day.date() - 2;
  const weekMatrix = new Array(25).fill([]).map(() => {
    currentTimeCount++;
    currentDayCount = day.date() - 2;
    return new Array(8).fill(null).map(() => {
      currentDayCount++;
      return dayjs(new Date(year, month, currentDayCount, currentTimeCount));
    });

  });
  
  return weekMatrix;
}