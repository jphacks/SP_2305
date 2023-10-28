import '../App.css';
import { getMonth } from '../util';
import { getWeek } from '../util_for_week';
import { CalendarHeader } from '../components/CalenderHeader';
import { Sidebar } from "../components/Sidebar";
import { Week } from "../components/Week";
import { useState, useEffect, useContext } from "react";
import GlobalContext from '../context/GlobalContext';
import { ModalTabs } from '../components/ModalTabs';
// import dayjs from 'dayjs';

function WeekPage() {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, showModalTabs } = useContext(GlobalContext);

  const [currentWeek, setCurrentWeek] = useState(getWeek());

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);
  return (
    <>
      {showModalTabs && <ModalTabs />}
      <div className='flex'>
        <Sidebar />
        <div className='flex-1 h-screen flex flex-col'>
          <CalendarHeader />
          {/* 現在の日時から作成 */}
          {/* <Week day={dayjs().format('YYYY-MM-DD')} /> */}
          <Week week={currentWeek} />
        </div>
      </div>
    </ >
  );
}

export default WeekPage;
