"use client";

import React, { useState } from 'react';
import Image from 'next/image'; // Import Image component
import styles from './FindPlaceSection.module.css';

const characters = [
  {
    id: 0,
    name: "Todos os Personagens!",
    description: "Neste site, você encontrará tudo sobre os personagens de My Little Pony: perfis completos, histórias, curiosidades, relações entre eles e muito mais! Explore o universo de Equestria e conheça cada pônei de perto — dos principais heróis às figuras mais misteriosas.",
    image: "/roxinha.png",
  },
  {
    id: 1,
    name: "Raibow Dash",
    description: "Descubra tudo sobre a personagem Rainbow Dash, suas aventuras e amizades neste universo mágico de My Little Pony.",
    image: "/azulzinha.png",
  },
  // Add more characters here as needed
];

const FindPlaceSection = () => {
  const [currentCharacterIndex, setCurrentCharacterIndex] = useState(0);
  const currentCharacter = characters[currentCharacterIndex];

  const goToNextCharacter = () => {
    setCurrentCharacterIndex((prevIndex) => 
      (prevIndex + 1) % characters.length
    );
  };

  const goToPreviousCharacter = () => {
    setCurrentCharacterIndex((prevIndex) => 
      (prevIndex - 1 + characters.length) % characters.length
    );
  };

  const goToCharacter = (index) => {
    setCurrentCharacterIndex(index);
  };

  return (
    <section className={styles.findPlaceSection}>
      <h2 className={styles.sectionTitle}>Lugar onde você encontrará:</h2>
      
      <div className={styles.characterCard}>
        <div className={styles.characterImage}>
          {/* Image of Twilight Sparkle */}
          <Image 
            src={currentCharacter.image} 
            alt={currentCharacter.name} 
            width={250} 
            height={250} 
            className={styles.actualCharacterImage}
            priority
          />
        </div>
        
        <div className={styles.characterInfo}>
          <h3 className={styles.characterName}>{currentCharacter.name}</h3>
          <p className={styles.characterDescription}>
            {currentCharacter.description}
          </p>
        </div>
      </div>

      <div className={styles.navigationContainer}>
        <button className={styles.arrowButton} onClick={goToPreviousCharacter}>&lt;</button>
        <div className={styles.ponyIconWrapper}>
          {characters.map((_, index) => (
            <div
              key={index}
              className={
                styles.ponyIcon + 
                (index === currentCharacterIndex ? ' ' + styles.activePonyIcon : '')
              }
              onClick={() => goToCharacter(index)}
            ></div>
          ))}
        </div>
        <button className={styles.arrowButton} onClick={goToNextCharacter}>&gt;</button>
      </div>
    </section>
  );
};

export default FindPlaceSection; 