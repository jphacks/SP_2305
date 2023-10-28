import MonthPage from './pages/MonthPage';
import TestPage from './pages/TestPage';
import Login from './pages/Login';
import Register from './pages/Register';
import ContextWrapper from './context/ContextWrapper';
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MonthPage />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
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
