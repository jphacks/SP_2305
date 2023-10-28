import MonthPage from './pages/MonthPage';
import Login from './pages/Login';
import Register from './pages/Register';
import WeekPage from './pages/WeekPage';
import ContextWrapper from './context/ContextWrapper';
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MonthPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/week" element={<WeekPage />} />
      </Routes>
    </BrowserRouter>
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
