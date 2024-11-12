import localFont from "next/font/local";
import Header from "@/app/components/header";
import "../app/styles/global.scss";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Patricia Deias",
  description:
    "Patricia Deias, psychopraticienne, vous aide à surmonter vos difficultés émotionnelles et à retrouver l'équilibre personnel ou professionnel grâce à des séances personnalisées.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
