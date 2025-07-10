import React, { useEffect, useRef, useState } from 'react';
import './TableMoreActions.css';
import { MenuButton } from '../atoms/MenuButton';
import { createPortal } from 'react-dom';

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
  const [menuPos, setMenuPos] = useState({ top: 0, left: 0 });
  const buttonRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleOpen = () => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setMenuPos({
        top: rect.bottom + window.scrollY + 4, // 下に少し余白
        left: rect.left + window.scrollX,
      });
    }
    setOpen(!open);
  };

  return (
    <>
      <span className="ActionsIconButton" onClick={handleOpen} ref={buttonRef}>
        ︙
      </span>

      {open &&
        createPortal(
          <ul
            className="ActionsMenuPortal"
            style={{
              top: `${menuPos.top}px`,
              left: `${menuPos.left}px`,
            }}>
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
          </ul>,
          document.body,
        )}
    </>
  );
};
