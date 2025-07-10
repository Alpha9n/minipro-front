import React from 'react';
import './asgmtMoreInfo.css';

export const AsgmtMoreInfo: React.FC = () => {
  return (
    <div className="asgmtMoreInfo">
      <h2>詳細設定</h2>
      <p>ここに課題の詳細情報が表示されます。</p>
      {/* 詳細情報のコンテンツを追加 */}
      <ul>
        {/* 詳細情報１ */}
        <li>
          <label htmlFor="">難易度</label>
          <input type="text" />
        </li>
        {/* 詳細情報２ */}
        <li>
          <label htmlFor=""></label>
          <input type="text" />
        </li>
        <li>
          <label htmlFor=""></label>
          <input type="text" />
        </li>
      </ul>

      <div>
        <button>キャンセル</button>
        <button>設定を適用</button>
      </div>
    </div>
  );
};
