import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TopPage } from './pages/TopPage';
import { EditorPage } from './pages/EditorPage';
import { CompletePage } from './pages/CompletePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/top" element={<TopPage />} />
        <Route path="/editor/:stepId" element={<EditorPage />} />
        <Route path="/complete" element={<CompletePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
