import Image from 'next/image';
import CharacterCard from './CharacterCard';
import styles from '../page.module.css';

const mostReadCharacters = [
  { name: 'Twilight Sparkle', imageUrl: '/homepage/twilight.png', trophy: '/homepage/trofeu1.png' },
  { name: 'Rainbow Dash', imageUrl: '/homepage/rainbowdash.png', trophy: '/homepage/trofeu2.png' },
  { name: 'Pinkie Pie', imageUrl: '/homepage/pinkiepie.png', trophy: '/homepage/trofeu3.png' },
];

const MostReadSection = () => {
  return (
    <section className={styles.mostReadSection}>
      <h2 className={styles.title}>Mais lidos da semana</h2>
      <div className={styles.grid}>
        {mostReadCharacters.map((char) => (
          <div key={char.name} className={styles.rankedItem}>
            <CharacterCard name={char.name} imageUrl={char.imageUrl} />
            <Image 
              src={char.trophy} 
              alt="Troféu" 
              width={50} 
              height={50} 
              className={styles.trophy}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default MostReadSection;