import { useState } from 'react';
import './App.css';
import { ExampleButton } from './stories/atoms/ExampleButton';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AsgmtManagementPage } from './pages/admin/asgmt/ManagementPage';
import { AsgmtDetailPage } from './pages/admin/asgmt/DetailPage';
import { AsgmtEditPage } from './pages/admin/asgmt/EditPage';
import { CreatePage } from './pages/admin/asgmt/CreatePage';
import { UserManagementPage } from './pages/admin/users/UserManagementPage';
import { UserDetailPage } from './pages/admin/users/UserDetailPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 管理画面 */}
        <Route path="/admin/asgmt" element={<AsgmtManagementPage />} />
        <Route path="/admin/asgmt/detail" element={<AsgmtDetailPage />} />
        <Route path="/admin/asgmt/edit" element={<AsgmtEditPage />} />
        <Route path="/admin/asgmt/create" element={<CreatePage />} />
        {/* ユーザー管理 */}
        <Route path="/admin/user" element={<UserManagementPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
