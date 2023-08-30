import React from 'react';
import styles from './cell.module.scss';

export interface CellProps {
  headerText: string;
  footerText: string;
  className?: string;
}
export const Cell = ({ className, headerText, footerText }: CellProps) => {
  return (
    <div className={`${styles.wrapper} ${className}`}>
      <div className={styles.headerText}>{headerText}</div>
      <div className={styles.footerText}>{footerText}</div>
    </div>
  );
};
