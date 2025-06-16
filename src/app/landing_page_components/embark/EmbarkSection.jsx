"use client"; // Ensure this is a client component

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './EmbarkSection.module.css';

const CLICKS_TO_HAPPY = 5; // Define how many clicks are needed

const EmbarkSection = () => {
  const [clickCount, setClickCount] = useState(0);
  const [hasSwitchedToHappy, setHasSwitchedToHappy] = useState(false);
  const [isPopping, setIsPopping] = useState(false);

  const handleImageClick = () => {
    if (!hasSwitchedToHappy) {
      setClickCount((prevCount) => prevCount + 1);
      setIsPopping(true); // Trigger pop animation

      setTimeout(() => {
        setIsPopping(false);
      }, 150); // Animation duration

      if (clickCount + 1 >= CLICKS_TO_HAPPY) {
        setHasSwitchedToHappy(true);
      }
    }
  };

  return (
    <section className={styles.embarkSection}>
      <div className={styles.contentContainer}>
        <h2 className={styles.mainTitle}>Embarque Nesta Aventura</h2>
        
        <div className={styles.ponyImageContainer}>
          <div className={styles.ponyImage}>
            <Image 
              src={hasSwitchedToHappy ? "/rb_feliz.gif" : "/rb_chorando.gif"} 
              alt={hasSwitchedToHappy ? "Rainbow Dash happy" : "Rainbow Dash crying"} 
              width={300} 
              height={300} 
              className={`${styles.actualPonyImage} ${isPopping ? styles.imagePop : ''}`}
              unoptimized 
              onClick={handleImageClick}
            />
          </div>
        </div>

        <div className={styles.description}>
          <p>
            Prepare-se para uma jornada mágica pelo mundo de My Little Pony! Aqui você encontrará
            um universo repleto de amizade, aventuras e descobertas incríveis. Junte-se a nós e
            explore as maravilhas de Equestria!
          </p>
        </div>

        <Link href={'/login'} className={styles.embarkButton}>
          Embarcar Agora
        </Link>
      </div>
    </section>
  );
};

export default EmbarkSection; 