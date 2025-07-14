import { useState } from 'react';
import './App.css';
import { Button } from './stories/atoms/Button';
import { StepList } from './stories/molecules/StepList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TopPage from './pages/TopPage';

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/pages" element={<TopPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
