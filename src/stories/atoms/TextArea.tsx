import './textArea.css';

export interface TextAreaProps {
  /**ラベル */
  label: string;
  /**テキストエリアの値 */
  value?: string;
}

/** Primary UI component for user interaction */
export const TextArea = ({ label, value }: TextAreaProps) => {
  return (
    <div className="textarea">
      <div className="textarea-label-group">
        <label className="textarea-label">{label}</label>
        <span className="textarea-required" role="alert">
          *必須
        </span>
      </div>
      <textarea
        className="textarea-input"
        name="textarea-input"
        value={value}
        required
      />
    </div>
  );
};
