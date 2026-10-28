import { Playfair_Display, Noto_Serif_KR } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const notoSerifKr = Noto_Serif_KR({
  variable: "--font-serif-kr",
  weight: ["400", "600", "700"],
  preload: false,
});

const siteUrl = "https://flyjay-phx.github.io";
const basePath = "/dessert-shop";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "Pâtisserie Maison · 수제 디저트 상점",
  description: "케이크, 마들렌, 휘낭시에, 마카롱, 쿠키 — 손으로 구운 수제 디저트 6가지",
  openGraph: {
    title: "Pâtisserie Maison · 수제 디저트 상점",
    description: "케이크, 마들렌, 휘낭시에, 마카롱, 쿠키 — 손으로 구운 수제 디저트 6가지",
    url: `${siteUrl}${basePath}/`,
    images: [{ url: `${basePath}/og.png`, width: 1200, height: 630 }],
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko" className={`${playfair.variable} ${notoSerifKr.variable}`}>
      <body>{children}</body>
    </html>
  );
}
