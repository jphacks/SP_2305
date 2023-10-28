import { Routes, Route } from 'react-router-dom';
import MonthPage from './pages/MonthPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MonthPage />} />
      </Routes>
    </div>
  );
}

export default App;
