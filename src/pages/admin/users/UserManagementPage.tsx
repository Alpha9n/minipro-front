import React from 'react';
import { UserTable } from '../../../stories/admin/organisms/UserTable';
import '../../../styles/userManagementPage.css';
import { AdminHeader } from '../../../stories/admin/organisms/AdminHeader';

export const UserManagementPage: React.FC = () => {
  return (
    <div>
      <AdminHeader />

      <div className="userPage">
        <div className="userPageHeader">
          <h2 className="userTitle">ユーザー管理画面</h2>
          <p className="userDescription">ユーザー管理用のページです</p>
          <div className="createBtnWrapper">
            <button className="createBtn">＋ ユーザーを追加</button>
          </div>
        </div>

        <div className="userTableWrapper">
          <UserTable
            users={[
              { id: 1, name: '山田太郎', email: 'aaa@example.com' },
              { id: 2, name: '佐藤花子', email: 'bbb@example.com' },
              { id: 3, name: '鈴木一郎', email: 'ccc@example.com' },
            ]}
          />
        </div>
      </div>
    </div>
  );
};
