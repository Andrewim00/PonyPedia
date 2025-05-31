import { Roboto, Cherry_Bomb_One } from "next/font/google";
import "../css-app/globals.css";
import "../css-app/reset.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ['latin'],
});

const cherry_bomb = Cherry_Bomb_One({
  variable: "--font-cherry-bomb-one",
  subsets: ['latin'],
});

export const metadata = {
  title: "PonyPédia",
  description: "Explore o mundo mágico de My Little Pony! Descubra tudo sobre Twilight Sparkle, Rainbow Dash, Pinkie Pie e muito mais.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
