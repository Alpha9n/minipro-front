import React, { useState } from 'react';
import { TableHeader } from '../molecules/TableHeader';
import { Checkbox } from '../atoms/Checkbox';
import { TableMoreActions } from '../molecules/TableMoreActions';
import { DetailModal } from './DetailModal';
import './userTable.css';
import { useNavigate } from 'react-router-dom';
import { Pagination } from './Pagination';
import { Button } from '../../atoms/Button';

export type User = {
  id: number;
  name: string;
  email: string;
};

export interface UserTableProps {
  users: User[];
}

const ITEMS_PER_PAGE = 10;

export const UserTable: React.FC<UserTableProps> = ({ users }) => {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  // ソート状態
  const [sortKey, setSortKey] = useState<keyof User | null>(null);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const handleSort = (key: keyof User) => {
    if (sortKey === key) {
      setSortOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortKey(key);
      setSortOrder('asc');
    }
    setCurrentPage(1); // ソート時にページをリセット
  };

  // ソート処理
  const sortedusers = [...users].sort((a, b) => {
    if (!sortKey) return 0;
    const valA = a[sortKey]?.toString().toLowerCase() ?? '';
    const valB = b[sortKey]?.toString().toLowerCase() ?? '';
    if (valA < valB) return sortOrder === 'asc' ? -1 : 1;
    if (valA > valB) return sortOrder === 'asc' ? 1 : -1;
    return 0;
  });

  // ページング
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentusers = sortedusers.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(users.length / ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // 行クリックでモーダル表示
  const handleRowClick = (user: User) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  // チェックボックスクリック時
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

  // Actionsエリアクリック時（RowClickを止める）
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

  const handleEditClick = (id: number) => {
    navigate(`/edit/${id}`);
  };
  const handleDeleteClick = (id: number) => {
    console.log('削除:', id);
  };
  const handleDetailClick = (id: number) => {
    navigate(`/admin/User/detail/${id}`);
  };

  // モーダル表示用データ変換
  const getModalData = (user: User) => [
    { label: 'id', col: user.id },
    { label: '名前', col: user.name },
    { label: 'メール', col: user.email },
  ];

  console.log(
    'user IDs:',
    users.map((a) => a.id),
  );

  return (
    <>
      <div className="deleteButtonWrapper">
        {selectedIds.length > 0 && (
          <Button
            label="Delete"
            color="red"
            size="medium"
            onClick={() => handleSelectedDelete()}
          />
        )}
      </div>

      <table className="userTable">
        <TableHeader
          headers={[
            { label: '', key: undefined },
            { label: 'id', key: 'id' },
            { label: '名前', key: 'name' },
            { label: 'メールアドレス', key: 'email' },
            { label: 'Actions', key: undefined },
          ]}
          sortKey={sortKey}
          sortOrder={sortOrder}
          onSort={handleSort}
        />

        <tbody>
          {currentusers.map((user) => (
            <tr key={user.id} onClick={() => handleRowClick(user)}>
              <td onClick={(e) => handleCheckboxClick(e, user)}>
                <Checkbox
                  id={`chk-${user.id}`}
                  label=""
                  checked={selectedIds.includes(user.id)}
                  onChange={() => {}}
                />
              </td>
              <td width={'70px'}>{user.id}</td>
              <td width={'200px'}>{user.name}</td>
              <td width={'400px'}>{user.email}</td>
              <td
                className="userActions"
                onClick={(e) => handleActionsClick(e)}>
                <TableMoreActions
                  onEdit={() => handleEditClick(user.id)}
                  onDelete={() => handleDeleteClick(user.id)}
                  onDetail={() => handleDetailClick(user.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />

      {/* モーダル */}
      {isModalOpen && selectedUser && (
        <div className="modal">
          <DetailModal
            title="課題詳細"
            itemInfo={getModalData(selectedUser)}
            withAnker={false}
            onClose={handleModalClose}
          />
        </div>
      )}
    </>
  );
};
