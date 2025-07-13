import './textArea.css';
import React, { useEffect, useRef } from 'react';

export interface TextAreaProps {
  /**ラベル */
  label: string;
  /**テキストエリアの値 */
  value: string;
  /**テキストエリアの値が変更されたときのイベントハンドラ */
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  /**ラベルを表示するかどうか */
  showLabel?: boolean;
  /**必須マークを表示するかどうか */
  requiredMark?: boolean;
}

export const TextArea = ({
  label,
  value,
  onChange,
  showLabel,
  requiredMark = true,
}: TextAreaProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  /**スクロール */
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.scrollTop = textareaRef.current.scrollHeight;
    }
  }, [value]);

  return (
    <div className="textarea">
      {showLabel && (
        <div className="textarea-label-group">
          <label className="textarea-label">{label}</label>
          {requiredMark && (
            <span className="textarea-required" role="alert">
              *必須
            </span>
          )}
        </div>
      )}
      <textarea
        ref={textareaRef}
        className="textarea-input"
        id="textarea-input"
        name="textarea-input"
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
};
