import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import TestPage from './pages/TestPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/test' element={<TestPage />} />
      </Routes>
    </BrowserRouter>
  );
}

const AppContainer = () => {
  return (
    <App />
  )
}

export default AppContainer;