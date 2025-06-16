import Image from "next/image";
import styles from "../page.module.css";

export default function InfoBox() {
    return (
        <div className={styles.infoBox}>
            <h2 className={styles.title}>Twilight Sparkle</h2>
            <div className={styles.imageWrapper}>
                <Image
                src="/twilightSparkle/twilight_infobox.png"
                alt="Twilight Sparkle"
                width={300}
                height={300}
                className={styles.image}
                />
            </div>

            <div className={styles.infoGroup}>

                <div className={styles.infoItem}>
                <strong>Papel na Série:</strong><br />
                Protagonista
                </div>

                <div className={styles.infoItem}>
                <strong>Local de Origem:</strong><br />
                Canterlot
                </div>
                
                <div className={styles.infoItem}>
                <strong>Espécie:</strong><br />
                Unicórnio / Alicórnio
                </div>
            </div>
        </div>
    );
}