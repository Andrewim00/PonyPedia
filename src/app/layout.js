import { Roboto, Cherry_Bomb_One } from "next/font/google";
import "../css-app/reset.css";
import "../css-app/globals.css";


const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ['latin'],
});

const cherryBombOne = Cherry_Bomb_One({
  weight: "400",
  variable: "--font-cherry-bomb-one",
  subsets: ['latin'],
});

export const metadata = {
  title: "PonyPédia",
  description: "Explore o mundo mágico de My Little Pony! Descubra tudo sobre Twilight Sparkle, Rainbow Dash, Pinkie Pie e muito mais.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={`${roboto.variable} ${cherryBombOne.variable}`}>
        {children}
      </body>
    </html>
  );
}
