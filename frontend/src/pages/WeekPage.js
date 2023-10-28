import '../App.css';
import { getWeekMatrix } from '../util';
import { CalendarHeader } from '../components/CalenderHeader';
import { Sidebar } from "../components/Sidebar";
import { Week } from "../components/Week";
import { useState, useEffect, useContext } from "react";
import GlobalContext from '../context/GlobalContext';
import { ModalTabs } from '../components/ModalTabs';

function WeekPage() {
  const [currentWeek, setCurrentWeek] = useState(getWeekMatrix());
  const { weekStartDay, showModalTabs } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentWeek(getWeekMatrix(weekStartDay));
  }, [weekStartDay]);

  return (
    <>
    {showModalTabs && <ModalTabs />}
      <div className='flex'>
        <Sidebar />
        <div className='flex-1 h-screen flex flex-col'>
          <CalendarHeader />
          <Week week={currentWeek} />
        </div>
      </div>
    </ >
  );
}

export default WeekPage;