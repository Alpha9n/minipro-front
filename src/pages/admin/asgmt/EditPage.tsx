import React from 'react';

export const AsgmtEditPage = () => {
  return (
    <div>
      <h2>課題内容編集</h2>

      {/* 内容form */}
      <form action="">
        <ul>
          <li>
            <label htmlFor=""></label>
            <input type="text" />
          </li>
          <li>
            <label htmlFor=""></label>
            <input type="text" />
          </li>
          <li>
            <label htmlFor=""></label>
            <input type="text" />
          </li>
          <li>
            <label htmlFor=""></label>
            <input type="text" />
          </li>
          <li>
            <label htmlFor=""></label>
            <input type="text" />
          </li>
          <li>
            <label htmlFor=""></label>
            <input type="text" />
          </li>
        </ul>

        <button>コードの再生成</button>
      </form>

      <div>
        <h3>解答コードの編集</h3>
        {/* コードスペース */}
      </div>

      <div>
        <button>戻る</button>
        <button>確定</button>
      </div>
    </div>
  );
};
