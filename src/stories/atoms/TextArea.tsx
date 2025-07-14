import './textArea.css';

export interface TextAreaProps {
  /** テキストエリアのID */
  id: string;
  /** ラベル */
  label: string;
  /** テキストエリアの値 */
  value?: string;
}

/** Primary UI component for user interaction */
export const TextArea = ({ label, value, id }: TextAreaProps) => {
  return (
    <div className="textarea">
      <div className="textarea-label-group">
        <label className="textarea-label" htmlFor={id}>
          {label}
        </label>
        <span className="textarea-required" role="alert">
          *必須
        </span>
      </div>
      <textarea
        id={id}
        className="textarea-input"
        name="textarea-input"
        defaultValue={value}
        required
      />
    </div>
  );
};
