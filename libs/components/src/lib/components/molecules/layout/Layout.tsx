import React from 'react';
import styles from './layout.module.scss';

import { CardProps } from '../card/Card';

interface LayoutProps {
  children: React.ReactElement<CardProps>[];
}

export const Layout = ({ children }: LayoutProps) => {
  return <div className={styles.wrapper}>{children}</div>;
};
