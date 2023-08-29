import styles from './image.module.scss';

export interface ImageProps {
  imageUrl: string;
  alt: string;
}

export const Image = ({ imageUrl, alt }: ImageProps) => {
  return <div className={`${styles.image}`}></div>
  return <img src={imageUrl} alt={alt} className={`${styles.image}`} />;
};
