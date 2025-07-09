import React from 'react';
import './TextField.css';

type Props = {
  label: string;
  required?: boolean;
  value: string;
  type?: 'text' | 'password';
  note?: string;
};

const TextField: React.FC<Props> = ({
  label,
  required = false,
  value,
  type = 'text',
  note,
}) => {
  return (
    <div className="text-field">
      <label className="label">
        <strong>{label}</strong>
        {required && <span className="required"> *必須</span>}
      </label>
      <input type={type} className="input" defaultValue={value} />
      {note && <p className="note">※{note}</p>}
    </div>
  );
};

export default TextField;
