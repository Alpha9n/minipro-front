import React from 'react';
import { UserTable } from '../../../stories/admin/organisms/UserTable';
import '../../../styles/userManagementPage.css';
import { AdminHeader } from '../../../stories/admin/organisms/AdminHeader';
import { Button } from '../../../stories/atoms/Button';
import { useNavigate } from 'react-router-dom';

export type User = {
  id: number;
  name: string;
  email: string;
};

export interface UserManagementPageProps {
  users?: User[];
}

export const UserManagementPage: React.FC<UserManagementPageProps> = ({
  users = [
    { id: 1, name: '山田太郎', email: 'aaa@example.com' },
    { id: 2, name: '佐藤花子', email: 'bbb@example.com' },
    { id: 3, name: '鈴木一郎', email: 'ccc@example.com' },
    { id: 4, name: '高橋美咲', email: 'ddd@example.com' },
    { id: 5, name: '田中健太', email: 'eee@example.com' },
    { id: 6, name: '伊藤由美', email: 'fff@example.com' },
    { id: 7, name: '渡辺大輔', email: 'ggg@example.com' },
    { id: 8, name: '中村舞', email: 'hhh@example.com' },
    { id: 9, name: '小林直人', email: 'iii@example.com' },
    { id: 10, name: '加藤理恵', email: 'jjj@example.com' },
    { id: 11, name: '吉田浩', email: 'kkk@example.com' },
    { id: 12, name: '山本咲', email: 'lll@example.com' },
    { id: 13, name: '斎藤翔', email: 'mmm@example.com' },
    { id: 14, name: '清水亜美', email: 'nnn@example.com' },
    { id: 15, name: '林太一', email: 'ooo@example.com' },
    { id: 16, name: '池田萌', email: 'ppp@example.com' },
    { id: 17, name: '橋本拓海', email: 'qqq@example.com' },
    { id: 18, name: '山崎楓', email: 'rrr@example.com' },
    { id: 19, name: '森田優', email: 'sss@example.com' },
    { id: 20, name: '石川遥', email: 'ttt@example.com' },
    { id: 21, name: '岡田陸', email: 'uuu@example.com' },
    { id: 22, name: '松本真央', email: 'vvv@example.com' },
    { id: 23, name: '横山昇', email: 'www@example.com' },
    { id: 24, name: '原田愛', email: 'xxx@example.com' },
    { id: 25, name: '竹内翔太', email: 'yyy@example.com' },
    { id: 26, name: '藤田美優', email: 'zzz@example.com' },
    { id: 27, name: '中川健', email: 'abc@example.com' },
    { id: 28, name: '安藤さくら', email: 'bcd@example.com' },
    { id: 29, name: '福田蒼', email: 'cde@example.com' },
    { id: 30, name: '西村葵', email: 'def@example.com' },
  ],
}) => {
  const navigate = useNavigate();

  const handleCreateClick = () => {
    navigate('/admin/asgmt/create');
  };

  return (
    <div>
      <AdminHeader />

      <div className="userPage">
        <div className="userPageHeader">
          <h2 className="userTitle">ユーザー管理画面</h2>
          <p className="userDescription">ユーザー管理用のページです</p>
          <div className="createBtnWrapper">
            <Button
              label="＋ ユーザーを追加"
              onClick={handleCreateClick}
              color="blue"
              variant="solid"
            />
          </div>
        </div>

        <div className="userTableWrapper">
          <UserTable users={users} />
        </div>
      </div>
    </div>
  );
};
