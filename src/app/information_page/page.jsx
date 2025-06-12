import styles from "./page.module.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";


export default function informationPage(){
    return (
        <div>
            <SiteHeader/>
            
            <section>
                <div className={styles.bodySiteContainer}>

                </div>
            </section>

            <SiteFooter/>
        </div>
    );
}