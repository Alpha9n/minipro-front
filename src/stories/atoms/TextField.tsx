import React from 'react';
import './TextField.css'; // Assuming you have a CSS file for styling

export interface TextFieldProps {
  label?: string;
  placeholder?: string;
  type?: 'text' | 'email' | 'password';
  required: boolean;
  advice?: string;
  value?: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
}

export const TextField: React.FC<TextFieldProps> = ({
  label,
  required,
  type,
  advice,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className="textField">
      <label>
        {label}
        {required && <span className="required">*必須</span>}
      </label>
      <input
        type={type}
        className="textInput"
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
      />
      {required && <span className="advice">{advice}</span>}
    </div>
  );
};
