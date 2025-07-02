import React, { useState } from 'react';

export interface CheckboxProps {
  id: string;
  label: string;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  id,
  label,
  checked = false,
  onChange,
}) => {
  const [check, setCheck] = useState(checked);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheck(event.target.checked);
    onChange?.(event);
  };

  return (
    <div className="checkbox">
      <input type="checkbox" id={id} checked={check} onChange={handleChange} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};
