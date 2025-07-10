// ファイル: src/components/atoms/Switch/Switch.tsx

import React from 'react';
import styles from './Switch.module.css';

export interface SwitchProps {
  /** ON/OFF の状態 */
  checked: boolean;
  /** 操作禁止フラグ */
  disabled?: boolean;
  /** 切り替え時に呼ばれる */
  onChange: (checked: boolean) => void;
}

/**
 * Switch Atom（純粋 CSS 実装）
 */
export const Switch: React.FC<SwitchProps> = ({
  checked,
  disabled = false,
  onChange,
}) => {
  return (
    <label className={styles.label}>
      <input
        type="checkbox"
        className={styles.input}
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange(e.target.checked)}
        aria-checked={checked}
      />
      <span className={styles.track}>
        <span className={styles.thumb} />
      </span>
    </label>
  );
};

export default Switch;
