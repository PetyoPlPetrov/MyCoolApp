import styles from './image.module.scss';

export interface ImageProps {
  imageUrl: string;
  alt: string;
}

export const Image = ({ imageUrl, alt }: ImageProps) => {
  return <img src={imageUrl} alt={alt} className={`${styles.image}`} />;
};
