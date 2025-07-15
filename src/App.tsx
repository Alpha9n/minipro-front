import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { EditorPage } from './pages/EditorPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/editor/:stepId" element={<EditorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
