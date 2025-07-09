import React, { useState } from 'react';
import './switch.css';

export interface SwitchProps {
  id: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Switch: React.FC<SwitchProps> = ({
  id,
  checked = false,
  onChange,
}) => {
  const [isEnable, setIsEnable] = useState(checked);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsEnable(event.target.checked);
    onChange?.(event);
  };

  return (
    <div className="SwitchArea">
      <label className="switch">
        <input
          type="checkbox"
          id={id}
          checked={isEnable}
          onChange={handleChange}
        />
        <span className="slider"></span>
      </label>
    </div>
  );
};
