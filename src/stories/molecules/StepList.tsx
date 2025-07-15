import React from 'react';
import './StepList.css';
import { Button } from '../atoms/Button';
import { useNavigate } from 'react-router-dom';

interface Step {
  number: number;
  title: string;
  description: string;
  active?: boolean;
}

export const StepList: React.FC = () => {
  const navigate = useNavigate();

  const steps: Step[] = [
    {
      number: 1,
      title: 'データベースの構築をしてみよう',
      description:
        'このステップではユーザーの身長・体重・BMI・名前を保存するデータベースの設計・構築をします。',
      active: true,
    },
    {
      number: 2,
      title: '計算用の関数を作ってみよう',
      description:
        'このステップでは、身長・体重を受け取ってBMIの値を返す関数を作成します。',
    },
    {
      number: 3,
      title: '画面に表示する部分を作ってみよう',
      description:
        'このステップでは、一般的にフロントエンドと呼ばれる部分の構築をします。',
    },
    {
      number: 4,
      title: '画面のデザインを調整しよう',
      description:
        'このステップでは、CSSを調整して画面上のデザインを調整します。',
    },
  ];

  const handleClick = (step: Step) => {
    navigate(`/editor/${step.number}`, {
      state: step,
    });
  };

  return (
    <div className="step-list-wrapper">
      {steps.map((step) => (
        <div key={step.number} className="step-list-item">
          <div className="step-label">STEP{step.number}</div>
          <div className="step-content">
            <h3 className="step-title">{step.title}</h3>
            <p className="step-description">{step.description}</p>
          </div>
          <div className={`white-scale ${step.active ? '' : 'outline'}`}>
            <Button
              label="作 成"
              color="green"
              variant={step.active ? 'solid' : 'outline'}
              onClick={() => handleClick(step)}
              disabled={!step.active}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
