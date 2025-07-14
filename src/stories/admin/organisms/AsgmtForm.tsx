import React, { useState } from 'react';
import './asgmtForm.css';
import { TextField } from '../../atoms/TextField';
import { MultiSelectDropdown } from '../molecules/MultiSelectDropdown';
import { TextArea } from '../../atoms/TextArea';
import { Button } from '../../atoms/Button';

export interface FormInput {
  theme: string;
  techStack: string;
  overview: string;
  extra: string;
}

interface Props {
  onSubmit: (data: FormInput) => void;
  loading?: boolean;
}

const languageOptions = [
  'JavaScript',
  'TypeScript',
  'Python',
  'Go',
  'Java',
  'C#',
  'Ruby',
];

export const AsgmtForm: React.FC<Props> = ({ onSubmit, loading = false }) => {
  const [form, setForm] = useState<FormInput>({
    theme: '',
    techStack: '',
    overview: '',
    extra: '',
  });

  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // techStack をカンマ区切りの文字列に変換して送信
    const updatedForm = {
      ...form,
      techStack: selectedLanguages.join(', '),
    };
    onSubmit(updatedForm);
  };

  return (
    <div className="form-container" style={{ marginBottom: 30 }}>
      <TextField
        label="タイトル"
        placeholder="タイトル"
        type="text"
        required={false}
        value={form.theme}
        onChange={handleChange}
      />
      <MultiSelectDropdown
        label="使用言語"
        options={languageOptions}
        selected={selectedLanguages}
        onChange={setSelectedLanguages}
      />

      <TextArea id="overview" label="概要" value={form.overview} />

      <Button
        label={loading ? '生成中...' : '課題を生成'}
        onClick={handleSubmit}
        disabled={loading}
      />
    </div>
  );
};
