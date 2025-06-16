import Image from "next/image";
import Link from "next/link";

export default function SiteHeader(){
    return(
        <header>
            <div className="logo-container">
                <Image
                className="logo "
                alt="logo PonyPédia"
                src='/logo.png'
                height={350}
                width={350}
                layout="responsive"/>
            </div>

            <nav className="menu">
                <div className="nav-links">
                    <Link href={'/home_page'} className="nav-item">Home</Link>
                    <Link href={'/'} className="nav-item">O que somos?</Link>
                    <Link href={'/'} className="nav-item">Sobre</Link>
                    <Link href={'/home_page'} className="nav-item">O que somos?</Link>
                    <Link href={'/home_page'} className="nav-item">Sobre</Link>
                </div>
                <Link href={'/login'} className="botao-login">Login</Link>
            </nav>
        </header>
    );
}