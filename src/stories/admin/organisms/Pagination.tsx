import React from 'react';
import './pagination.css';

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className='"paginationContainer'>
      <button
        className="paginationButton"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}>
        ←
      </button>
      {pages.map((page) => (
        <button
          key={page}
          className={`paginationButton ${currentPage === page ? 'active' : ''}`}
          onClick={() => onPageChange(page)}>
          {page}
        </button>
      ))}
      <button
        className="paginationButton"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}>
        →
      </button>
    </div>
  );
};
