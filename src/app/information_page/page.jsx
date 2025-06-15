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
                            <div>
                                <h2 className={styles.subTitle}>Aparência</h2>
                                <p className={styles.paddingLine}></p>
                                <p>AAAAAAAAAAAAAAAAAAA</p>
                            </div>
                            <aside className={styles.asideContent}>

                            </aside>
                        </div>
                    </main>
                </div>
            </section>

            <SiteFooter/>
        </div>
    );
}