import Image from "next/image";
import Link from "next/link";


export default function informationPage(){
    return (
        <div>
            <header>
                <Image 
                src="/logo.png"
                width={350}
                height={350}
                alt="Logo PoneyPédia"/>
                <nav className="menu">
                    <div>

                    </div>
                    <Link href={'/login'}>

                    </Link>
                </nav>
            </header>
        </div>
    );
}