import React, { useState } from 'react';
import { TableHeader } from '../molecules/TableHeader';
import { Checkbox } from '../atoms/Checkbox';
import { TableMoreActions } from '../molecules/TableMoreActions';
import { DetailModal } from './DetailModal';
import './asgmtTable.css';
import { useNavigate } from 'react-router-dom';
import { Pagination } from './Pagination';
import { Button } from '../../atoms/Button';

export type Assignments = {
  id: number;
  theme: string;
  technologyStack: string;
  description: string;
};

export interface AssignmentTableProps {
  assignments: Assignments[];
}

const ITEMS_PER_PAGE = 10;

export const AsgmtTable: React.FC<AssignmentTableProps> = ({ assignments }) => {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [selectedAsgmt, setSelectedAsgmt] = useState<Assignments | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  // ソート状態
  const [sortKey, setSortKey] = useState<keyof Assignments | null>(null);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const handleSort = (key: keyof Assignments) => {
    if (sortKey === key) {
      setSortOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortKey(key);
      setSortOrder('asc');
    }
    setCurrentPage(1); // ソート時にページをリセット
  };

  // ソート処理
  const sortedAssignments = [...assignments].sort((a, b) => {
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
  const currentAssignments = sortedAssignments.slice(
    indexOfFirstItem,
    indexOfLastItem,
  );
  const totalPages = Math.ceil(assignments.length / ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // 行クリックでモーダル表示
  const handleRowClick = (assignment: Assignments) => {
    setSelectedAsgmt(assignment);
    setIsModalOpen(true);
  };

  // チェックボックスクリック時
  const handleCheckboxClick = (
    event: React.MouseEvent<HTMLTableCellElement, MouseEvent>,
    assignment: Assignments,
  ) => {
    event.stopPropagation();
    setSelectedIds((prev) =>
      prev.includes(assignment.id)
        ? prev.filter((v) => v !== assignment.id) // ← `! ==` → `!==`
        : [...prev, assignment.id],
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
    setSelectedAsgmt(null);
  };

  const handleEditClick = (id: number) => {
    navigate(`/edit/${id}`);
  };
  const handleDeleteClick = (id: number) => {
    console.log('削除:', id);
  };
  const handleDetailClick = (id: number) => {
    navigate(`/admin/asgmt/detail/${id}`);
  };

  // モーダル表示用データ変換
  const getModalData = (assignment: Assignments) => [
    { label: 'テーマ', col: assignment.theme },
    { label: '技術スタック', col: assignment.technologyStack },
    { label: '概要', col: assignment.description },
  ];

  console.log(
    'assignment IDs:',
    assignments.map((a) => a.id),
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

      <table className="asgmtTable">
        <TableHeader
          headers={[
            { label: '', key: undefined },
            { label: 'テーマ', key: 'theme' },
            { label: '技術スタック', key: 'technologyStack' },
            { label: '概要', key: 'description' },
            { label: 'Actions', key: undefined },
          ]}
          sortKey={sortKey}
          sortOrder={sortOrder}
          onSort={handleSort}
        />

        <tbody>
          {currentAssignments.map((assignment) => (
            <tr key={assignment.id} onClick={() => handleRowClick(assignment)}>
              <td onClick={(e) => handleCheckboxClick(e, assignment)}>
                <Checkbox
                  id={`chk-${assignment.id}`}
                  label=""
                  checked={selectedIds.includes(assignment.id)}
                  onChange={() => {}}
                />
              </td>
              <td width={'200px'}>{assignment.theme}</td>
              <td width={'100px'}>{assignment.technologyStack}</td>
              <td width={'400px'}>{assignment.description}</td>
              <td
                className="asgmtActions"
                onClick={(e) => handleActionsClick(e)}>
                <TableMoreActions
                  onEdit={() => handleEditClick(assignment.id)}
                  onDelete={() => handleDeleteClick(assignment.id)}
                  onDetail={() => handleDetailClick(assignment.id)}
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
      {isModalOpen && selectedAsgmt && (
        <div className="modal">
          <DetailModal
            title="課題詳細"
            itemInfo={getModalData(selectedAsgmt)}
            withAnker={false}
            onClose={handleModalClose}
          />
        </div>
      )}
    </>
  );
};
