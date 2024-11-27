import { FC, useState } from 'react';
import styles from './input.module.css';

interface InputProps {
  label?: string;
  type: string;
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  placeholder: string;
  error?: string;
}

const Input: FC<InputProps> = ({ label, type, value, onChange, onBlur, placeholder, error }) => {
  const [focused, setFocused] = useState(false);

  return (
    <div className={styles.inputGroup}>
      {label && <label className={styles.label}>{label}</label>}
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={() => {
          setFocused(false);
          if (onBlur) onBlur();
        }}
        onFocus={() => setFocused(true)}
        placeholder={placeholder}
        className={`${styles.input} ${focused ? styles.focused : ''}`}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default Input;
