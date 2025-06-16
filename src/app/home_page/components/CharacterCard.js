import Image from 'next/image';
import styles from '../page.module.css';

const CharacterCard = ({ name, imageUrl }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src={imageUrl}
          alt={`Imagem de ${name}`}
          width={150}
          height={150}
          className={styles.image}
        />
      </div>
      <div className={styles.nameContainer}>
        <p className={styles.name}>{name}</p>
      </div>
    </div>
  );
};

export default CharacterCard;

