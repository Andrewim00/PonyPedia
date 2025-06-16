'use client'; // Necessário para usar hooks e interatividade do Swiper

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import CharacterCard from './CharacterCard';
import styles from '../page.module.css';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const featuredCharacters = [
  { name: 'Princess Celestia', imageUrl: '/homepage/celestia.png' },
  { name: 'Twilight Sparkle', imageUrl: '/homepage/twilight.png' },
  { name: 'Rainbow Dash', imageUrl: '/homepage/rainbowdash.png' },
  { name: 'Pinkie Pie', imageUrl: '/homepage/pinkiepie.png' },
  { name: 'Fitter', imageUrl: '/homepage/fitter.png'}
];

const FeaturedSection = () => {
  return (
    <section className={styles.featuredSection}>
      <h2 className={styles.title}>Destaques</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className={styles.swiperContainer}
      >
        {featuredCharacters.map((char) => (
          <SwiperSlide key={char.name}>
            <CharacterCard name={char.name} imageUrl={char.imageUrl} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default FeaturedSection;