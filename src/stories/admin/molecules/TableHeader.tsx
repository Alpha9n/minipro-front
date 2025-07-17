/**
 * 管理テーブル用のテーブルヘッダー
 *
 */
import './tableHeader.css';

export interface TableHeaderProps<T> {
  headers: { label: string; key?: keyof T }[];
  sortKey: keyof T | null;
  sortOrder: 'asc' | 'desc';
  onSort: (key: keyof T) => void;
}

export const TableHeader = <T extends object>({
  headers,
  sortKey,
  sortOrder,
  onSort,
}: TableHeaderProps<T>) => {
  const renderSortArrow = (key?: keyof T) => {
    if (!key || key !== sortKey) return null;
    return sortOrder === 'asc' ? '↑' : '↓';
  };

  return (
    <thead className="tableHeader">
      <tr className="tableHeaderRow">
        {headers.map((header, index) => (
          <th
            key={index}
            className="tableHeaderCell"
            onClick={() => header.key && onSort(header.key)}
            style={{ cursor: header.key ? 'pointer' : 'default' }}>
            {header.label} {renderSortArrow(header.key)}
          </th>
        ))}
      </tr>
    </thead>
  );
};
