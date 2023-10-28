import './App.css';
import { getMonth } from './util';
import { CalendarHeader } from './components/CalenderHeader';
import { Sidebar } from "./components/Sidebar";
import { Month } from "./components/Month";
import { useState, useEffect, useContext } from "react";
import GlobalContext from './context/GlobalContext';
import { ModalTabs } from './components/ModalTabs';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, showModalTabs } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    <ChakraProvider>
    {showModalTabs && <ModalTabs />}
      <div className='flex'>
        <Sidebar />
        <div className='flex-1 h-screen flex flex-col'>
          <CalendarHeader />
          <Month month={currentMonth} />
        </div>
      </div>
    </ChakraProvider >
  );
}

export default App;
