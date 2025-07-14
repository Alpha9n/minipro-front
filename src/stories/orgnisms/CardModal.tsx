import React from 'react';
import './cardModal.css';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const CardModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  if (!isOpen) return null;

  return isOpen ? (
    <div className="card-modal-overlay" onClick={onClose}>
      <div className="card-modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
        <button className="card-modal-close" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  ) : null;
};
