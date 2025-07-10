import React, { useState } from 'react';
import './asgmtForm.css';

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

export const AsgmtForm: React.FC<Props> = ({ onSubmit, loading = false }) => {
  const [form, setForm] = useState<FormInput>({
    theme: '',
    techStack: '',
    overview: '',
    extra: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onSubmit(form);
  };

  return (
    <div className="form-container" style={{ marginBottom: 30 }}>
      <input
        name="theme"
        placeholder="テーマ"
        value={form.theme}
        onChange={handleChange}
        style={{ display: 'block', width: '100%', marginBottom: 10 }}
      />
      <input
        name="techStack"
        placeholder="技術スタック"
        value={form.techStack}
        onChange={handleChange}
        style={{ display: 'block', width: '100%', marginBottom: 10 }}
      />
      <textarea
        name="overview"
        placeholder="概要"
        value={form.overview}
        onChange={handleChange}
        style={{
          display: 'block',
          width: '100%',
          height: 80,
          marginBottom: 10,
        }}
      />
      <input
        name="extra"
        placeholder="難易度・対象者など（任意）"
        value={form.extra}
        onChange={handleChange}
        style={{ display: 'block', width: '100%', marginBottom: 10 }}
      />
      <button onClick={handleSubmit} disabled={loading}>
        {loading ? '生成中...' : '課題を生成'}
      </button>
    </div>
  );
};
