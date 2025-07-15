import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TopPage } from './pages/TopPage';
import { EditorPage } from './pages/EditorPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/top" element={<TopPage />} />
        <Route path="/editor/:stepId" element={<EditorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
