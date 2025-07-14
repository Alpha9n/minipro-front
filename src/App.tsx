import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AsgmtManagementPage } from './pages/admin/asgmt/ManagementPage';
import { CreatePage } from './pages/admin/asgmt/CreatePage';
import { UserManagementPage } from './pages/admin/users/UserManagementPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 管理画面 */}
        <Route path="/admin/asgmt" element={<AsgmtManagementPage />} />
        <Route path="/admin/asgmt/create" element={<CreatePage />} />
        {/* ユーザー管理 */}
        <Route path="/admin/user" element={<UserManagementPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
