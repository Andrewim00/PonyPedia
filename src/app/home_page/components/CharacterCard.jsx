import Image from 'next/image';
import Link from 'next/link';
import styles from '../page.module.css';

const CharacterCard = ({ name, imageUrl }) => {
  return (
    <div>
      <Link href={`/information_page?character=${name}`} className={styles.cardLink}>
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
      </Link>
    </div>
  );
};

export default CharacterCard;

