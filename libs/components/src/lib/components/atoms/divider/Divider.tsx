import React from 'react';
import style from './divider.module.scss';

export const Divider = ({className}) => {
  return <div className={`${style.divider} ${className}`}></div>;
};
