/**
 * 管理テーブル用のテーブルヘッダー
 *
 */
import React from 'react';
import './tableHeader.css';

export interface TableHeaderProps {
  headers: string[];
}

export const TableHeader: React.FC<TableHeaderProps> = ({ headers }) => {
  return (
    <thead className="tableHeader">
      <tr>
        {headers.map((header, index) => (
          <th key={index} className="tableHeaderCell">
            {header}
          </th>
        ))}
      </tr>
    </thead>
  );
};
