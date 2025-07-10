import React from 'react';
import { TextField } from '../../../stories/atoms/TextField';
import type { User } from '../../../stories/admin/organisms/UserTable';

export interface UserTableProps {
  users: User[];
}

export const UserDetailPage: React.FC<UserTableProps> = ({
  users = [
    {
      id: 1,
      name: '大久保',
      email: 'waaa',
    },
  ],
}) => {
  return (
    <>
      <div className="DetailPage">
        <ul>
          <li>
            <label htmlFor="">名前</label>
            <span>{users[0].id}</span>
          </li>
          <li>
            <label htmlFor=""></label>
            <span>{users[0].name}</span>
          </li>
          <li>
            <label htmlFor="">名前</label>
            <span>{users[0].email}</span>
          </li>
        </ul>
      </div>
    </>
  );
};
