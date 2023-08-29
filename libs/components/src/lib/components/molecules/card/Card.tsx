import { memo } from 'react';
import { Divider, Image, ImageProps } from '../../atoms';
import { Cell } from '../cell/Cell';
import styles from './card.module.scss';

export interface CardProps {
  imageProps: ImageProps;
  name: string;
  email: string;
  dateOfBirth: string;
  address: string;
  phone: string;
  password: string;
}
const CardInner = ({
  imageProps,
  name,
  email,
  dateOfBirth,
  phone,
  address,
  password,
}: CardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.name}>
        <Image {...imageProps}></Image>
        <Cell headerText={name} footerText={email}></Cell>
      </div>
      <Cell
        className={styles.birth}
        headerText={dateOfBirth}
        footerText="Birth date"
      ></Cell>
      <Cell
        className={styles.address}
        headerText={address}
        footerText="Address"
      ></Cell>
      <Cell
        className={styles.phone}
        headerText={phone}
        footerText="Phone number"
      ></Cell>
      <Cell
        className={styles.password}
        headerText={password}
        footerText="Password"
      ></Cell>
      <Divider className={styles.divider}></Divider>
    </div>
  );
};

export const Card = memo(CardInner);
