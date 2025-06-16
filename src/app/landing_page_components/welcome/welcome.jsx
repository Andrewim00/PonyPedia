import React from 'react';
import Image from 'next/image'; // Import Image component
import styles from './welcome.module.css'; // Importa os estilos usando CSS Modules

const WelcomeSection = () => {
  return (
    <section className={styles.boasVindasSection}>
      <div className={styles.conteudoCard}>
        <h2 className={styles.tituloPrincipal}>Bem Vindo(s) Ao PonyPedia</h2>
        <div className={styles.containerImagem}>
          <Image 
            src="/sobre_img.webp" 
            alt="Sobre o PonyPedia" 
            width={700} // Adjust width as needed
            height={350} // Adjust height as needed
            className={styles.actualWelcomeImage} /* New class for styling */
            priority
          />
        </div>
        <p className={styles.paragrafoDescricao}>
          Somos uma comunidade de fãs apaixonados dedicada a explorar, documentar e celebrar o
          universo mágico de My Little Pony. Esta wiki foi criada para reunir todas as informações sobre
          personagens, episódios, filmes, quadrinhos, curiosidades e tudo mais que compõe o rico
          mundo das pôneis de Equestria.
        </p>
        <p className={styles.paragrafoDescricao}>
          Nosso objetivo é ser a fonte mais completa e confiável de conteúdo sobre My Little Pony em
          português, acolhendo desde novos admiradores até os fãs mais antigos. Aqui, cada amizade
          importa — e cada contribuição também!
        </p>
        <p className={styles.paragrafoDescricao}>
          Seja você um brony, pegasister ou apenas alguém curioso sobre esse universo encantado,
          sinta-se em casa. Junte-se a nós para compartilhar conhecimento, teorias e muita magia da
          amizade! 🌈
        </p>
      </div>
    </section>
  );
};

export default WelcomeSection;