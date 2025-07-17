import React from 'react';
import { AsgmtTable } from '../../../stories/admin/organisms/AsgmtTable';
import '../../../styles/asgmtManagementPage.css';
import { useNavigate } from 'react-router-dom';
import { AdminHeader } from '../../../stories/admin/organisms/AdminHeader';
import { Button } from '../../../stories/atoms/Button';

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
      description:
        'Reactの基本的な使い方を学ぶ課題です。さらに詳しい概要はここに書かれます',
    },
    {
      id: 2,
      theme: 'TypeScriptの導入',
      technologyStack: 'TypeScript, React',
      description: 'TypeScriptを使ったReactアプリケーションの開発課題です。',
    },
    {
      id: 3,
      theme: '状態管理の基本',
      technologyStack: 'React, useState',
      description: 'useStateを使った状態管理の練習課題です。',
    },
    {
      id: 4,
      theme: 'ルーティングの実装',
      technologyStack: 'React Router',
      description: 'React Routerを用いた画面遷移の課題です。',
    },
    {
      id: 5,
      theme: 'API連携',
      technologyStack: 'React, Axios',
      description: '外部APIとの連携を行う課題です。',
    },
    {
      id: 6,
      theme: 'フォーム入力',
      technologyStack: 'React, HTML Forms',
      description: 'フォーム入力とバリデーションの実装課題です。',
    },
    {
      id: 7,
      theme: 'Todoアプリの作成',
      technologyStack: 'React, TypeScript',
      description: '基本的なTodoアプリを作成する課題です。',
    },
    {
      id: 8,
      theme: 'Reduxの導入',
      technologyStack: 'React, Redux Toolkit',
      description: 'Reduxを使った状態管理の課題です。',
    },
    {
      id: 9,
      theme: 'Context APIの使用',
      technologyStack: 'React, Context API',
      description: 'Context APIで状態をグローバルに管理する課題です。',
    },
    {
      id: 10,
      theme: 'カスタムフックの作成',
      technologyStack: 'React, TypeScript',
      description: '再利用可能なカスタムフックを作成する課題です。',
    },
    {
      id: 11,
      theme: 'CSS Modulesの活用',
      technologyStack: 'React, CSS Modules',
      description: 'スタイルをコンポーネント単位で管理する課題です。',
    },
    {
      id: 12,
      theme: 'Emotionを使ったスタイリング',
      technologyStack: 'React, Emotion',
      description: 'Emotionライブラリを使用したスタイリング課題です。',
    },
    {
      id: 13,
      theme: 'ユニットテストの実装',
      technologyStack: 'Jest, Testing Library',
      description: 'Reactコンポーネントのユニットテストを行う課題です。',
    },
    {
      id: 14,
      theme: 'フォームライブラリの活用',
      technologyStack: 'React Hook Form',
      description: 'React Hook Formを用いたフォーム管理課題です。',
    },
    {
      id: 15,
      theme: 'ReactとFirebaseの連携',
      technologyStack: 'React, Firebase',
      description: 'Firebaseを利用したデータの永続化課題です。',
    },
    {
      id: 16,
      theme: 'GraphQLの基礎',
      technologyStack: 'React, Apollo Client',
      description: 'Apollo Clientを使用したGraphQLの課題です。',
    },
    {
      id: 17,
      theme: 'Next.jsの導入',
      technologyStack: 'Next.js, React',
      description: 'Next.jsでSSR対応アプリを構築する課題です。',
    },
    {
      id: 18,
      theme: '認証機能の実装',
      technologyStack: 'React, Firebase Auth',
      description: 'Firebase Authenticationを使ったログイン機能の課題です。',
    },
    {
      id: 19,
      theme: 'レスポンシブデザイン対応',
      technologyStack: 'React, CSS, Media Queries',
      description: 'スマートフォン対応のレスポンシブUIを作る課題です。',
    },
    {
      id: 20,
      theme: '管理画面の構築',
      technologyStack: 'React, TypeScript, Material UI',
      description: 'Material UIを使って管理画面を作る課題です。',
    },
    {
      id: 21,
      theme: 'モーダルの実装',
      technologyStack: 'React',
      description: 'モーダルコンポーネントを作成して再利用性を高める課題です。',
    },
    {
      id: 22,
      theme: '日付ピッカーの導入',
      technologyStack: 'React, MUI DatePicker',
      description: '日付選択UIを実装する課題です。',
    },
    {
      id: 23,
      theme: 'ドラッグ＆ドロップ',
      technologyStack: 'React, react-beautiful-dnd',
      description: 'ドラッグ操作を実装する課題です。',
    },
    {
      id: 24,
      theme: 'ファイルアップロード機能',
      technologyStack: 'React, FormData',
      description: 'ファイルアップロードフォームを作成する課題です。',
    },
    {
      id: 25,
      theme: 'リアルタイムチャット',
      technologyStack: 'React, Firebase, Firestore',
      description:
        'リアルタイムでメッセージを送受信するチャットアプリ課題です。',
    },
    {
      id: 26,
      theme: 'マップ表示機能',
      technologyStack: 'React, Leaflet',
      description: '地図表示とピンの設置機能を持つ課題です。',
    },
    {
      id: 27,
      theme: '外部ライブラリの利用',
      technologyStack: 'React, Chart.js',
      description: 'グラフライブラリを使ったデータ可視化課題です。',
    },
    {
      id: 28,
      theme: 'パフォーマンス最適化',
      technologyStack: 'React, useMemo, useCallback',
      description: '再レンダリングを最小限に抑える課題です。',
    },
    {
      id: 29,
      theme: 'アクセシビリティ対応',
      technologyStack: 'React, ARIA',
      description: '誰でも使いやすいUIを目指す課題です。',
    },
    {
      id: 30,
      theme: 'ダークモードの実装',
      technologyStack: 'React, CSS Variables',
      description: 'ライト・ダークテーマを切り替える課題です。',
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
            <Button
              label="＋ 課題を作成"
              onClick={handleCreateClick}
              color="blue"
              variant="solid"
            />
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
