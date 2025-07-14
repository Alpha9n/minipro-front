import React from 'react';
import './GenerateAsgmt.css';
import { Button } from '../../atoms/Button';

interface Props {
  result: string;
  onSave: () => void;
  onRegenerate: () => void;
  loading?: boolean;
}

export const GenerateAsgmt: React.FC<Props> = ({
  result,
  onSave,
  onRegenerate,
  loading,
}) => {
  return (
    <div className="asgmtPageContainer">
      <div className="GeneratedAsgmtWrapper">
        <div className="GeneratedAsgmt">
          <h3>生成された課題</h3>
          <pre>{result}</pre>

          {/* <div className="codePreview">
    		    <img src="/sample-code.png" alt="サンプルコード" style={{ width: "100%", maxWidth: 600 }} />
						</div> */}

          <div className="result-buttons">
            <Button
              label={loading ? '再生成中...' : '🔁 再生成'}
              onClick={onRegenerate}
              disabled={loading}
            />
            <Button label="保存" onClick={onSave} />
          </div>
        </div>
      </div>
    </div>
  );
};
