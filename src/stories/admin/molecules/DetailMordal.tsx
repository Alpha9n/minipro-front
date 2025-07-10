import React from 'react';
import ReactDOM from 'react-dom';
import './detailMordal.css';

export interface ItemDetail {
  label: string;
  col: string;
}

export interface DetailProps {
  title: string;
  asgmtInfo: ItemDetail[];
  withAnker: boolean;
  ankerUrl?: string;
  onClose: () => void;
}

export const DetailMordal: React.FC<DetailProps> = ({
  title,
  asgmtInfo,
  withAnker,
  ankerUrl,
  onClose,
}) => {
  return ReactDOM.createPortal(
    <div className="modalOverlay" onClick={onClose}>
      <div className="modalContent" onClick={(e) => e.stopPropagation()}>
        <h3>{title}</h3>
        {/* 詳細情報をリストで表示 */}
        <ul>
          {asgmtInfo.map((item, index) => (
            <li key={index}>
              <label>{item.label}</label>: <span>{item.col}</span>
            </li>
          ))}
        </ul>

        {/* 詳細画面があるなら詳細ページへ */}
        {withAnker && (
          <div className="more">
            <a href={ankerUrl || '#'}>詳細画面へ</a>
          </div>
        )}
      </div>
    </div>,
    document.body,
  );
};
