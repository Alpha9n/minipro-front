import React from 'react';
import { AsgmtTable } from '../../../stories/admin/organisms/AsgmtTable';
import '../../../styles/asgmtManagementPage.css';
import { useNavigate } from 'react-router-dom';
import { AdminHeader } from '../../../stories/admin/organisms/AdminHeader';

export type Assignment = {
  id: number;
  theme: string;
  technologyStack: string;
  description: string;
};

export interface AsgmtManagementPageProps {
  assignments?: Assignment[];
}

export const AsgmtManagementPage: React.FC<AsgmtManagementPageProps> = ({
  assignments = [
    {
      id: 1,
      theme: 'Reactの基礎',
      technologyStack: 'React, JavaScript',
      description: 'Reactの基本的な使い方を学ぶ課題です。',
    },
    {
      id: 2,
      theme: 'TypeScriptの導入',
      technologyStack: 'TypeScript, React',
      description: 'TypeScriptを使ったReactアプリケーションの開発課題です。',
    },
    {
      id: 2,
      theme: 'TypeScriptの導入',
      technologyStack: 'TypeScript, React',
      description: 'TypeScriptを使ったReactアプリケーションの開発課題です。',
    },
    {
      id: 2,
      theme: 'TypeScriptの導入',
      technologyStack: 'TypeScript, React',
      description: 'TypeScriptを使ったReactアプリケーションの開発課題です。',
    },
    {
      id: 2,
      theme: 'TypeScriptの導入',
      technologyStack: 'TypeScript, React',
      description: 'TypeScriptを使ったReactアプリケーションの開発課題です。',
    },
    {
      id: 2,
      theme: 'TypeScriptの導入',
      technologyStack: 'TypeScript, React',
      description: 'TypeScriptを使ったReactアプリケーションの開発課題です。',
    },
  ],
}) => {
  const navigate = useNavigate();

  const handleCreateClick = () => {
    navigate('/admin/asgmt/create');
  };

  return (
    <div style={{ width: '100%' }}>
      {/* 管理ヘッダー（必要に応じて追加） */}
      <AdminHeader />

      <div className="asgmtPage">
        <div className="asgmtPageHeader">
          <h2 className="asgmtTitle">課題管理画面</h2>
          <p className="asgmtDescription">課題管理用のページです</p>
          <div className="createBtnWrapper">
            <button className="createBtn" onClick={handleCreateClick}>
              ＋ 課題を作成
            </button>
          </div>
        </div>

        {/* テーブル */}
        <div className="asgmtTableWrapper">
          <AsgmtTable assignments={assignments} />
        </div>
      </div>
    </div>
  );
};
