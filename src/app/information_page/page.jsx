import Image from "next/image";
import styles from "./page.module.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";


export default function informationPage(){
    return (
        <div>
            <SiteHeader/>
            
            <section>
                <div className={styles.bodySiteContainer}>
                    <main className={styles.mainContent}>
                        <h1 className={styles.pageTitle}>Twilight Sparkle</h1>
                        <p className={styles.paddingLine}></p>
                        <p className={styles.paddingLine}></p>
                        <div className={styles.pageContainer}>
                            <div className={styles.content}>
                                <h2 className={styles.subTitle}>Aparência</h2>
                                <p className={styles.paddingLine}></p>
                                <p className={styles.text}>Twilight Sparkle é um alicórnio roxo claro com cabelo azul-marinho e listras rosa e roxas. Suas pontas são retas e seu cabelo lembra um corte chanel. Ela tem olhos roxos e uma marca, que se tornou um símbolo de seu elemento da magia, uma estrela rosa de seis pontas com cinco estrelas brancas menores. </p>
                                <p className={styles.paddingLine}></p>
                                <p className={styles.paddingLine}></p>
                                <h2 className={styles.subTitle}>História</h2>
                                <p className={styles.paddingLine}></p>
                                <p className={styles.text}>Twilight Sparkle vive em uma torre de marfim em Canterlot até que a Princesa Celestia a envia para Ponyville. Acompanhada por Spike, Twilight verifica os preparativos da cidade para a Celebração do Sol de Verão e conhece o resto dos personagens principais. A celebração é interrompida quando Nightmare Moon, o inimigo de Celestia, retorna ao poder e ameaça trazer a noite eterna para Equestria. Twilight e o resto das Mane Six descobrem os Elementos da Harmonia e os usam para transformar Nightmare Moon de volta na Princesa Luna. A Princesa Celestia dá permissão a Twilight para permanecer em Ponyville para estudar a magia da amizade.</p>
                                <p className={styles.paddingLine}></p>
                                <p className={styles.paddingLine}></p>
                                <h2 className={styles.subTitle}>Cutie Mark</h2>
                                <p className={styles.paddingLine}></p>
                                <p className={styles.text}>Twilight conta como conseguiu sua cutie mark em "As Crônicas das Cutie Marks" . Ela estudou magia com grande interesse quando era potranca e tentou se matricular na Escola para Unicórnios Superdotados da Princesa Celestia , mas seu exame de admissão terminou em desastre quando ela não conseguiu chocar magicamente um ovo de dragão. Um momento após desistir, a onda de choque de uma explosão distante fez com que a magia de Twilight saísse do controle e causasse estragos na sala de exames. Depois que a Princesa Celestia apareceu e acalmou a situação, Twilight recobrou os sentidos e descobriu que sua cutie mark havia aparecido.</p>
                            </div>
                            <aside className={styles.asideContent}>
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
                                <div className={styles.asideGroup}>
                                    <div className={styles.wrapper}>
                                        <Image
                                        src="/twilightSparkle/twilight_lendo.png"
                                        alt="Twilight Sparkle"
                                        width={300}
                                        height={300}
                                        className={styles.image}
                                        />
                                    </div>
                                    <div className={styles.wrapper}>
                                        <Image
                                        src="/twilightSparkle/twilight_jovem.png"
                                        alt="Twilight Sparkle"
                                        width={300}
                                        height={300}
                                        className={styles.image}
                                        />
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </main>
                </div>
            </section>

            <SiteFooter/>
        </div>
    );
}