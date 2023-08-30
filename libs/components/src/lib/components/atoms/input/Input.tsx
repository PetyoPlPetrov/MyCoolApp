import { InputHTMLAttributes } from 'react';
import styles from './input.module.scss';

export const Input = (
  props: React.FC<React.InputHTMLAttributes<HTMLInputElement>>
) => {
  return <input className={styles.input} {...props}></input>;
};
