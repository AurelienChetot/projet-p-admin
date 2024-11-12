import Image from "next/image";
import ImgHome from "../app/assets/image/patricia.gif";
import Logo from "../app/assets/image/logo.png";

// import components
import Cardhome from "./components/cardhome";

export default function Home() {
  return (
    <main>
      <section className="content">
        <div className="logo-container">
          <Image
            className="img-logo"
            src={Logo}
            alt={Logo}
            width={150}
            height={150}
          />
        </div>
        <div className="img-text-content">
          <Image
            className="img-home"
            src={ImgHome}
            alt={ImgHome}
            width={500}
            height={500}
          />
          <p className="text-home">
            Je suis ravie de vous accueillir sur mon site. En tant que
            psychopraticienne, je suis dévouée à accompagner mes clients dans
            leur cheminement personnel vers le bien-être et l'équilibre mental.{" "}
            <br />
            Mon approche bienveillante et personnalisée vise à vous aider à
            surmonter les défis émotionnels et psychologiques que vous pouvez
            rencontrer.
          </p>
        </div>
        <div className="border-bottom"></div>
        <Cardhome />
      </section>
    </main>
  );
}
