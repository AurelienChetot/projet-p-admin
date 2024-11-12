import "../app/styles/global.scss";

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
      <body>{children}</body>
    </html>
  );
}
