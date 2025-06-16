import Image from "next/image";
import styles from "../page.module.css";

export default function VoteSection(){
    return (
            <div className={styles.vote}>
                <p className={styles.voteText}>
                    Gostou da Personagem?<br />
                    Deixe o seu Gostei!
                </p>
                <div className={styles.wrapper}>
                    <Image
                    src="/like_dislike.png"
                    alt="Twilight Sparkle"
                    width={300}
                    height={300}
                    className={styles.image}
                    />
                </div>
            </div>
    );
}