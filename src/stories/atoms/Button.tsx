import './Button.css';

export interface ButtonProps {
  label: string;
  onClick?: () => void;
  size?: 'small' | 'medium' | 'large';
  variant?: 'solid' | 'outline';
  color?:
    | 'green'
    | 'red'
    | 'orange'
    | 'blue'
    | 'gray'
    | 'light'
    | 'none'
    | 'blue_';
  shape?: 'default' | 'circle';
}

export const Button = ({
  label,
  onClick,
  size = 'medium',
  variant = 'solid',
  color = 'green',
  shape = 'default',
}: ButtonProps) => {
  const classes = [
    'custom-button',
    `btn--${size}`,
    `btn--${variant}`,
    `btn--${color}`,
    shape === 'circle' ? 'btn--circle' : '',
  ].join(' ');

  return (
    <button className={classes} onClick={onClick}>
      {label}
    </button>
  );
};
