import { useState, useEffect } from 'react';
// import Header from '../components/Header';
import { Card } from '../stories/molecules/Card';
import './topPage.css';
import { CardModal } from '../stories/orgnisms/CardModal';
import { StepList } from '../stories/molecules/StepList';

import type { Step } from '../stories/molecules/StepList';

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
    title: 'ToDoアプリを作ってみよう',
    description: 'タスクの登録・編集・削除ができ、完了未完了の状態管理も行う',
    active: true,
    name: 'タスク',
  },
];

export const TopPage: React.FC = () => {
  const [challengeProjects, setChallengeProjects] = useState<ProjectProps[]>(
    [],
  );
  const [createdProjects, setCreatedProjects] = useState<ProjectProps[]>([]);
  const [allProjects, setAllProjects] = useState<ProjectProps[]>([]);
  const [selectedProject, setSelectedProject] = useState<ProjectProps | null>(
    null,
  );
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error] = useState<Error | undefined>();

  // useEffect(() => {
  //   const fetchProjects = async () => {
  //     try {
  //       setLoading(true); // データ取得開始
  //       // ここにAPIエンドポイントのURLを指定
  //       // 実際のプロジェクトでは、これらを環境変数などから取得すると良いでしょう
  //       const challengeRes = await fetch('/api/challenge-projects'); // 例: 挑戦できるプロジェクトのAPIエンドポイント
  //       const createdRes = await fetch('/api/created-projects'); // 例: 作成したプロジェクトのAPIエンドポイント
  //       const allRes = await fetch('/api/all-projects'); // 例: 全プロジェクトのAPIエンドポイント

  //       if (!challengeRes.ok || !createdRes.ok || !allRes.ok) {
  //         throw new Error('Failed to fetch projects');
  //       }

  //       const challengeData = await challengeRes.json();
  //       const createdData = await createdRes.json();
  //       const allData = await allRes.json();

  //       setChallengeProjects(challengeData);
  //       setCreatedProjects(createdData);
  //       setAllProjects(allData);
  //     } catch (err) {
  //       setError(err as Error);
  //       console.error('Failed to fetch projects:', err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchProjects();
  // }, []);

  // モックデータ挿入用
  useEffect(() => {
    const mockChallengeProjects = [
      {
        id: 1,
        imageUrl: '/img/image.png',
        title: 'ToDoリスト作成',
        desc: 'JavaScriptを使ってTodoアプリを構築する課題です。',
        alert: '',
        language: 'JavaScript',
        material: 'JavaScript入門：ToDoアプリを作ってみよう',
      },
      {
        id: 2,
        imageUrl: '/img/image.png',
        title: 'UIデザイン模写チャレンジ',
        desc: 'Figmaデザインを元に、HTML/CSSでコーディングしてください。',
        alert: '',
        language: 'HTML, CSS',
        material: 'Webデザイン基礎：Figma模写実践',
      },
    ];

    const mockCreatedProjects = [
      {
        id: 3,
        imageUrl: '/img/image.png',
        title: 'グループ開発：シフト管理アプリ',
        desc: 'バイトの希望シフト提出〜LINE通知までを管理するアプリ。',
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

    const mockAllProjects = [
      ...mockChallengeProjects,
      ...mockCreatedProjects,
      {
        id: 5,
        imageUrl: '/img/image.png',
        title: 'AI API活用チャレンジ',
        desc: 'OpenAIのAPIを使ってチャットボットを作成する課題です。',
        alert: '前提スキルチェック未達成',
        language: 'JavaScript, OpenAI API',
        material: 'AI API活用：チャットボット入門',
      },
      {
        id: 6,
        imageUrl: '/img/image.png',
        title: 'データベース設計入門',
        desc: 'ER図からMySQLのテーブル設計を学ぶ基礎課題です。',
        alert: '前提スキルチェック未達成',
        language: 'SQL, MySQL',
        material: 'データベース基礎：設計から実装まで',
      },
    ];

    setChallengeProjects(mockChallengeProjects);
    setCreatedProjects(mockCreatedProjects);
    setAllProjects(mockAllProjects);
    setLoading(false);
  }, []);

  if (loading) {
    return <div className="loading-state">データを読み込み中...</div>;
  }

  if (error) {
    return (
      <div className="error-state">
        データの読み込みに失敗しました: {error.message}
      </div>
    );
  }

  // カードクリックでモーダル表示
  const handleCardClick = (project: ProjectProps) => {
    console.log('CardClick');
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  // 条件によってどちらを表示するか
  const stepsToShow =
    selectedProject && selectedProject.id % 2 === 0 ? steps4 : singleStep;

  return (
    <div className="top-page-container">
      {/* <Header /> */}
      <main className="main-content">
        <div className="left-column">
          <section className="project-section">
            <h2 className="section-title">あなたが挑戦できるプロジェクト</h2>
            <div className="card-grid-1">
              {challengeProjects.length > 0 ? (
                challengeProjects.map((project) => (
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
                <p>挑戦できるプロジェクトはありません。</p>
              )}
            </div>
          </section>

          <section className="project-section">
            <h2 className="section-title">作成したプロジェクト</h2>
            <div className="card-grid-1">
              {createdProjects.length > 0 ? (
                createdProjects.map((project) => (
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
                <p>作成したプロジェクトはありません。</p>
              )}
            </div>
          </section>
        </div>

        <div className="right-column">
          <section className="project-section">
            <h2 className="section-title">プロジェクト一覧</h2>
            <div className="card-grid-2">
              {allProjects.length > 0 ? (
                allProjects.map((project) => (
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
            <div className="view-all-button-container">
              <button className="view-all-button">
                すべてのプロジェクトを見る →
              </button>
            </div>
          </section>
        </div>
      </main>

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
