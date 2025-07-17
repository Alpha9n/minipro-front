// src/pages/CompletePage.tsx
import React, { useEffect, useState } from 'react';
import './completePage.css';
import { Card } from '../stories/molecules/Card';
import { StepList } from '../stories/molecules/StepList';
import { CardModal } from '../stories/orgnisms/CardModal';
import { Button } from '../stories/atoms/Button';
import type { Step } from '../stories/molecules/StepList';
// import { useNavigate } from 'react-router-dom';

export interface ProjectProps {
  id: number; // id
  title: string; // タイトル
  imageUrl: string; // 画像
  desc: string; // 概要
  alert: string; // 挑戦不可メッセージ
  language: string; // 言語
  material: string; // 受講教材
}

const steps4: Step[] = [
  {
    number: 1,
    title: 'データベースの構築をしてみよう',
    description:
      'このステップではユーザーの身長・体重・BMI・名前を保存するデータベースの設計・構築をします。',
    active: true,
    name: 'STEP1',
  },
  {
    number: 2,
    title: '計算用の関数を作ってみよう',
    description:
      'このステップでは、身長・体重を受け取ってBMIの値を返す関数を作成します。',
    name: 'STEP2',
  },
  {
    number: 3,
    title: '画面に表示する部分を作ってみよう',
    description:
      'このステップでは、一般的にフロントエンドと呼ばれる部分の構築をします。',
    name: 'STEP3',
  },
  {
    number: 4,
    title: '画面のデザインを調整しよう',
    description:
      'このステップでは、CSSを調整して画面上のデザインを調整します。',
    name: 'STEP4',
  },
];

const singleStep: Step[] = [
  {
    number: 1,
    title: 'シフト管理アプリを作ってみよう',
    description: 'シフトの登録・編集・削除が可能な状態にする',
    active: true,
    name: 'タスク',
  },
];

export const CompletePage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectProps | null>(
    null,
  );
  const [recommendProjects, setrecommendProjects] = useState<ProjectProps[]>(
    [],
  );
  // const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const recommendProjects = [
      {
        id: 3,
        imageUrl: '/img/image.png',
        title: 'シフト管理アプリ',
        desc: 'バイトの希望シフト提出。登録、編集可能なアプリケーション',
        alert: '',
        language: 'React, Node.js, MySQL',
        material: 'チーム開発実践：フルスタックアプリ構築',
      },
      {
        id: 4,
        imageUrl: '/img/image.png',
        title: 'カレンダーアプリ',
        desc: '予定の追加・削除ができるフロントエンドアプリケーション。',
        alert: '',
        language: 'Vue, JavaScript',
        material: 'Vue基礎：日程管理アプリを作ろう',
      },
    ];

    setrecommendProjects(recommendProjects);
  }, []);

  // 条件によってどちらを表示するか
  const stepsToShow =
    selectedProject && selectedProject.id % 2 === 0 ? steps4 : singleStep;

  // カードクリックでモーダル表示
  const handleCardClick = (project: ProjectProps) => {
    console.log('CardClick');
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleSubmitClick = () => {
    alert('提出が完了しました！');
  };

  const handlePreview = () => {
    console.log('アプリを実行します');
    setIsOpen(true);
    // navigate(-1); // ← プレビュー用のルートへ遷移
  };

  const html = localStorage.getItem('previewHtml') || '';
  const css = localStorage.getItem('previewCss') || '';
  const js = localStorage.getItem('previewJs') || '';

  const iframeContent = `
    <html>
      <head><style>${css}</style></head>
      <body>${html}<script>${js}<\/script></body>
    </html>
  `;

  return (
    <div className="complete-page">
      <h2 className="page-title">ToDoリスト</h2>

      <div className="preview-area">
        <img
          src="/img/ToDo.png" // public/img に画像を配置する
          alt="完成アプリプレビュー"
          className="preview-image"
        />
        <div className="preview-btn">
          <Button
            label="プレビュー"
            onClick={() => handlePreview()}
            size="medium"
            variant="solid"
            color="blue"
            shape="circle"
          />
        </div>
      </div>

      {isOpen && (
        <div className="preview-modal">
          <div className="preview-content">
            <button onClick={() => setIsOpen(false)}>×</button>
            <iframe srcDoc={iframeContent} title="Preview" />
          </div>
        </div>
      )}

      <div className="submit-btn">
        <Button
          label="提出"
          color="orange"
          onClick={() => handleSubmitClick()}
        />
      </div>

      <div className="recommend-area">
        <h3>おすすめのプロジェクトはこちら</h3>
        <div className="project-list">
          {recommendProjects.length > 0 ? (
            recommendProjects.map((project) => (
              <Card
                key={project.id}
                img={project.imageUrl}
                title={project.title}
                content={project.desc}
                isLocked={!!project.alert}
                advice={project.alert}
                onclick={() => handleCardClick(project)}
              />
            ))
          ) : (
            <p>プロジェクトがありません。</p>
          )}
        </div>
      </div>

      {/* モーダル表示 */}
      <div className="modal">
        {isModalOpen && selectedProject && (
          <CardModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <h2>{selectedProject.title}</h2>
            {/* モーダルの上部 */}
            <div className="modal-content">
              {/* 左の画像部分 */}
              <div className="modal-left">
                <img
                  src={selectedProject.imageUrl}
                  alt={selectedProject.title}
                />
              </div>
              {/* 右側コンテンツ */}
              <div className="modal-right">
                <p>{selectedProject.desc}</p>
                <dl>
                  <dt>使用言語</dt>
                  <dd>{selectedProject.language}</dd>
                </dl>
                <dl>
                  <dt>受講講義</dt>
                  <dd>{selectedProject.material}</dd>
                </dl>
              </div>
            </div>
            {/* 未受講の場合の表示メッセージ */}
            {selectedProject.alert && (
              <p style={{ color: 'red' }}>{selectedProject.alert}</p>
            )}
            {/* ステップリスト表示位置 */}
            <div className="step-section">
              <StepList steps={stepsToShow} />
            </div>
          </CardModal>
        )}
      </div>
    </div>
  );
};
