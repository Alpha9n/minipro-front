import React, { useState } from 'react';
import { TableHeader } from '../molecules/TableHeader';
import { Checkbox } from '../atoms/Checkbox';
import { TableMoreActions } from '../molecules/TableMoreActions';
import { DetailMordal } from '../molecules/DetailMordal';
import './asgmtTable.css';
import { useNavigate } from 'react-router-dom';

export type Assignments = {
  id: number;
  theme: string;
  technologyStack: string;
  description: string;
};

export interface AssignmentTableProps {
  assignments: Assignments[];
}

export const AsgmtTable: React.FC<AssignmentTableProps> = ({ assignments }) => {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [selectedAsgmt, setSelectedAsgmt] = useState<Assignments | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

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

  const handleDeleteClick = () => {
    // 個別削除処理
  };

  const handleDetailClick = () => {
    navigate('/admin/asgmt/detail');
  };

  const handleEditClick = () => {
    navigate('/edit');
  };

  // モーダル表示用データ変換
  const getModalData = (assignment: Assignments) => [
    { label: 'テーマ', col: assignment.theme },
    { label: '技術スタック', col: assignment.technologyStack },
    { label: '概要', col: assignment.description },
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

      <table className="asgmtTable">
        <TableHeader
          headers={['', 'テーマ', '技術スタック', '概要', 'Actions']}
        />
        <tbody>
          {assignments.map((assignment) => (
            <tr key={assignment.id} onClick={() => handleRowClick(assignment)}>
              <td onClick={(e) => handleCheckboxClick(e, assignment)}>
                <Checkbox
                  id={`chk-${assignment.id}`}
                  label=""
                  checked={selectedIds.includes(assignment.id)}
                  onChange={() => {}}
                />
              </td>
              <td>{assignment.theme}</td>
              <td>{assignment.technologyStack}</td>
              <td>{assignment.description}</td>
              <td
                className="asgmtActions"
                onClick={(e) => handleActionsClick(e)}>
                <TableMoreActions
                  onEdit={handleEditClick}
                  onDelete={handleDeleteClick}
                  onDetail={handleDetailClick}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* モーダル */}
      {isModalOpen && selectedAsgmt && (
        <div className="modal">
          <DetailMordal
            title="課題詳細"
            asgmtInfo={getModalData(selectedAsgmt)}
            withAnker={true}
            onClose={handleModalClose}
          />
        </div>
      )}
    </>
  );
};
