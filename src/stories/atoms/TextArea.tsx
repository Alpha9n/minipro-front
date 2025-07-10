import './textArea.css';

/** Textareaコンポーネント */
export interface TextAreaProps {
  /**ラベル */
  label: string;
  /**テキストエリアの値 */
  value?: string;
  /** ラベルを表示するかどうか */
  showLabel?: boolean;
}

/** Primary UI component for user interaction */
export const TextArea = ({ label, value, showLabel = true }: TextAreaProps) => {
  return (
    <div className="textarea">
      {/* ラベル */}
      {showLabel && label && (
        <div className="textarea-label-group">
          <label className="textarea-label">{label}</label>
          {/* 必須 */}
          <span className="textarea-required" role="slert">
            *必須
          </span>
        </div>
      )}
      {/* テキスト入力 */}
      <textarea
        className="textarea-input"
        id="textarea-input"
        name="textarea-input"
        value={value}
        required
      />
    </div>
  );
};
