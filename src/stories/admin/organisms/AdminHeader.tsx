import React from 'react';
import { useNavigate } from 'react-router-dom';
import './adminHeader.css';

export const AdminHeader: React.FC = () => {
  const navigate = useNavigate();

  const handleAsgmtClick = () => {
    navigate('/admin/asgmt');
  };

  const handleUserClick = () => {
    navigate('/admin/user');
  };

  return (
    <header className="admin-header">
      <div className="admin-header-left">
        <span className="admin-header-title">みにぷろ管理</span>
      </div>
      <nav className="admin-header-right">
        <button onClick={handleAsgmtClick}>課題管理</button>
        <button onClick={handleUserClick}>ユーザー管理</button>
      </nav>
    </header>
  );
};
