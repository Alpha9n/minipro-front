import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { Card } from '../components/Card';
import './TopPage.css';

const TopPage = () => {
  const [challengeProjects, setChallengeProjects] = useState([]);
  const [createdProjects, setCreatedProjects] = useState([]);
  const [allProjects, setAllProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true); // データ取得開始
        // ここにAPIエンドポイントのURLを指定
        // 実際のプロジェクトでは、これらを環境変数などから取得すると良いでしょう
        const challengeRes = await fetch('/api/challenge-projects'); // 例: 挑戦できるプロジェクトのAPIエンドポイント
        const createdRes = await fetch('/api/created-projects'); // 例: 作成したプロジェクトのAPIエンドポイント
        const allRes = await fetch('/api/all-projects'); // 例: 全プロジェクトのAPIエンドポイント

        if (!challengeRes.ok || !createdRes.ok || !allRes.ok) {
          throw new Error('Failed to fetch projects');
        }

        const challengeData = await challengeRes.json();
        const createdData = await createdRes.json();
        const allData = await allRes.json();

        setChallengeProjects(challengeData);
        setCreatedProjects(createdData);
        setAllProjects(allData);
      } catch (err) {
        setError(err);
        console.error('Failed to fetch projects:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
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

  return (
    <div className="top-page-container">
      <Header />
      <main className="main-content">
        <div className="left-column">
          <section className="project-section">
            <h2 className="section-title">あなたが挑戦できるプロジェクト</h2>
            <div className="card-grid">
              {challengeProjects.length > 0 ? (
                challengeProjects.map((project) => (
                  <Card
                    key={project.id}
                    img={project.imageUrl}
                    title={project.title}
                    content={project.desc}
                    isLocked={!!project.alert}
                    advice={project.alert}
                  />
                ))
              ) : (
                <p>挑戦できるプロジェクトはありません。</p>
              )}
            </div>
          </section>

          <section className="project-section">
            <h2 className="section-title">作成したプロジェクト</h2>
            <div className="card-grid">
              {createdProjects.length > 0 ? (
                createdProjects.map((project) => (
                  <Card
                    key={project.id}
                    img={project.imageUrl}
                    title={project.title}
                    content={project.desc}
                    isLocked={!!project.alert}
                    advice={project.alert}
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
            <div className="card-grid">
              {allProjects.length > 0 ? (
                allProjects.map((project) => (
                  <Card
                    key={project.id}
                    img={project.imageUrl}
                    title={project.title}
                    content={project.desc}
                    isLocked={!!project.alert}
                    advice={project.alert}
                  />
                ))
              ) : (
                <p>プロジェクトがありません。</p>
              )}
            </div>
          </section>
          <div className="view-all-button-container">
            <button className="view-all-button">
              すべてをプロジェクトを見る →
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TopPage;
