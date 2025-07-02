import React, { useEffect, useRef, useState } from 'react';
import './TableMoreActions.css';
import { Menu } from '@mui/icons-material';
import { MenuButton } from '../atoms/MenuButton';

export type ActionsProps = {
  onEdit?: () => void;
  onDelete?: () => void;
  onDetail?: () => void;
};

export const TableMoreActions: React.FC<ActionsProps> = ({
  onEdit,
  onDelete,
  onDetail,
}) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="ActionsIcon" ref={menuRef}>
      {/* ３点アイコン */}
      <span className="ActionsIconButton" onClick={() => setOpen(!open)}>
        ︙
      </span>

      {/* アイコンクリック時に開く */}
      {open && (
        <ul className="ActionsMenu">
          {onEdit && (
            <li>
              <MenuButton label="Edit" onClick={onEdit} />
            </li>
          )}
          {onDelete && (
            <li>
              <MenuButton label="Delete" onClick={onDelete} />
            </li>
          )}
          {onDetail && (
            <li>
              <MenuButton label="Detail" onClick={onDetail} />
            </li>
          )}
        </ul>
      )}
    </div>
  );
};
