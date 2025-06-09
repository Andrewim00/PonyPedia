import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";


export default function informationPage(){
    return (
        <div>
            <header>
                <div className={styles.logoContainer}>
                    <Image
                    className="logo"
                    src='/logo.png'
                    width={350}
                    height={350}
                    alt="logo PonyPédia"/>
                </div>

                <nav className="menu">
                    <div></div>
                    <Link href={'/login'}>Login</Link>
                </nav>
            </header>

            <section></section>

            <footer></footer>
        </div>
    );
}