import React, { useState } from 'react';
import { TableHeader } from '../molecules/TableHeader';
import { TableMoreActions } from '../molecules/TableMoreActions';
import { Checkbox } from '../atoms/Checkbox';
import './userTable.css';
import { useNavigate } from 'react-router-dom';
import { DetailModal } from './DetailModal';

export type User = {
  id: number;
  name: string;
  email: string;
};

export interface UserTableProps {
  users: User[];
}

export const UserTable: React.FC<UserTableProps> = ({ users }) => {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  // ソート処理
  const [sortKey, setSortKey] = useState<keyof User | null>(null);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const handleSort = (key: keyof User) => {
    if (sortKey === key) {
      setSortOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortKey(key);
      setSortOrder('asc');
    }
  };

  const handleRowClick = (users: User) => {
    console.log('click Table Row', users);
    setSelectedUser(users);
    setIsModalOpen(true);
  };

  const handleCheckboxClick = (
    event: React.MouseEvent<HTMLTableCellElement, MouseEvent>,
    user: User,
  ) => {
    event.stopPropagation();
    setSelectedIds((prev) =>
      prev.includes(user.id)
        ? prev.filter((v) => v !== user.id) // ← `! ==` → `!==`
        : [...prev, user.id],
    );
  };

  const handleActionsClick = (
    event: React.MouseEvent<HTMLTableCellElement, MouseEvent>,
  ) => {
    event.stopPropagation();
  };

  // 一括削除
  const handleSelectedDelete = () => {
    if (confirm('選択された課題を削除しますか？')) {
      console.log('一括削除対象ID:', selectedIds);
      // 削除ロジックをここに記述
      setSelectedIds([]);
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  const handleDeleteClick = () => {
    // 個別削除処理
  };

  const handleDetailClick = () => {
    navigate('/admin/user/detail');
  };

  const handleEditClick = () => {
    navigate('/admin/user/edit');
  };

  const getModalData = (user: User) => [
    { label: '名前', col: user.name },
    { label: 'メールアドレス', col: user.email },
    // { label: "概要", col: assignment.description },
  ];

  return (
    <>
      <div className="deleteButtonWrapper">
        {selectedIds.length > 0 && (
          <button
            className="deleteButton"
            style={{ height: '50px', visibility: 'visible' }}
            onClick={handleSelectedDelete}>
            DELETE
          </button>
        )}
      </div>
      <table className="userTable">
        <TableHeader
          headers={[
            { label: '', key: undefined }, // チェックボックス列
            { label: 'ID', key: 'id' },
            { label: '名前', key: 'name' },
            { label: 'メールアドレス', key: 'email' },
            { label: 'Actions', key: undefined },
          ]}
          sortKey={sortKey}
          sortOrder={sortOrder}
          onSort={handleSort}
        />

        <tbody>
          {users.map((user) => (
            <tr
              key={user.id}
              onClick={() => {
                handleRowClick(user);
              }}>
              <td onClick={(e) => handleCheckboxClick(e, user)}>
                <Checkbox
                  id={`chk-${user.id}`}
                  label=""
                  checked={selectedIds.includes(user.id)}
                  onChange={() => {}}
                />
              </td>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td onClick={(e) => handleActionsClick(e)}>
                <TableMoreActions
                  onEdit={() => console.log(`Edit user ${user.id}`)}
                  onDelete={() => console.log(`Delete user ${user.id}`)}
                  onDetail={() => console.log(`Detail user ${user.id}`)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* モーダル */}
      {isModalOpen && selectedUser && (
        <div className="modal">
          <DetailModal
            title="課題詳細"
            asgmtInfo={getModalData(selectedUser)}
            withAnker={false}
            onClose={handleModalClose}
          />
        </div>
      )}
    </>
  );
};
