import { Routes, Route } from 'react-router-dom';
import MonthPage from './pages/MonthPage';
import WeekPage from './pages/WeekPage';
import ContextWrapper from './context/ContextWrapper';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MonthPage />} />
        <Route path="/week" element={<WeekPage />} />
      </Routes>
    </>
  );
}

const AppContainer = () => {
  return (
    <ChakraProvider>
      <ContextWrapper>
        <App />
      </ContextWrapper>
    </ChakraProvider>
  )
}

export default AppContainer;
