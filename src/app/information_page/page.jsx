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
                        <div></div>
                    </main>

                    <aside className={styles.asideContent}>

                    </aside>
                </div>
            </section>

            <SiteFooter/>
        </div>
    );
}