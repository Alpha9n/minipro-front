import React from 'react';
import './dropdown.css';

export interface DropdownProps {
  label?: string;
  options: string[] | { value: string; label: string }[];
  selected?: string;
  onChange?: (value: string) => void;
  warningExists?: boolean;
  warningText?: string;
  withLabel?: boolean;
}

export const Dropdown: React.FC<DropdownProps> = ({
  label,
  options,
  selected,
  onChange,
  warningExists = false,
  warningText,
  withLabel = false,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange?.(event.target.value);
  };

  // 判定関数：オプションがオブジェクトかどうか
  const isObjectOption = (
    opt: string | { value: string; label: string },
  ): opt is { value: string; label: string } =>
    typeof opt === 'object' && 'value' in opt && 'label' in opt;

  return (
    <div className="dropdown">
      {withLabel && label && <label className="dropdownLabel">{label}</label>}
      <select
        className="dropdownSelect"
        value={selected}
        onChange={handleChange}>
        {options.map((option, index) =>
          isObjectOption(option) ? (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ) : (
            <option key={index} value={option}>
              {option}
            </option>
          ),
        )}
      </select>
      {warningExists && warningText && (
        <span className="dropdownAdvice">{warningText}</span>
      )}
    </div>
  );
};
