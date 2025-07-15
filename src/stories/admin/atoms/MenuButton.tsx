import React from 'react';
import './menuButton.css';

export interface MenuButtonProps {
  label: string;
  onClick: () => void;
}

export const MenuButton: React.FC<MenuButtonProps> = ({ label, onClick }) => {
  return (
    <span className="menuButton" onClick={onClick}>
      {label}
    </span>
  );
};
