import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { TopPage } from './pages/TopPage';
import { EditorPage } from './pages/EditorPage';
import { CompletePage } from './pages/CompletePage';
import { AsgmtManagementPage } from './pages/admin/asgmt/ManagementPage';
import { CreatePage } from './pages/admin/asgmt/CreatePage';
import { UserManagementPage } from './pages/admin/users/UserManagementPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/top" element={<TopPage />} />
        <Route path="/editor/:stepId" element={<EditorPage />} />
        <Route path="/complete" element={<CompletePage />} />
        {/* 管理画面 */}
        <Route path="/admin" element={<AdminRoot />} />
        <Route path="/admin/asgmt" element={<AsgmtManagementPage />} />
        <Route path="/admin/asgmt/create" element={<CreatePage />} />
        {/* ユーザー管理 */}
        <Route path="/admin/user" element={<UserManagementPage />} />
      </Routes>
    </BrowserRouter>
  );
}

function AdminRoot() {
  return <Navigate replace to="/admin/asgmt" />;
}

export default App;
