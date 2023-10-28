import { Routes, Route } from 'react-router-dom';
import MonthPage from './pages/MonthPage';
import TestPage from './pages/TestPage';
import ContextWrapper from './context/ContextWrapper';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MonthPage />} />
        <Route path="/test" element={<TestPage />} />
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
