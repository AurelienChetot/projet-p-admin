import Image from "next/image";
import ImgHome from "../app/assets/image/patricia.gif";
import Logo from "../app/assets/image/logo.png";
import Header from "@/app/components/header";
import Navbar from "@/app/components/navbar";
import Imagehome from "@/app/components/imagehome";
import Presentation from "@/app/assets/image/presentation.gif";

// import components
import Cardhome from "./components/cardhome";

export default function Home() {
  return (
    <main>
      <Header />
      <Navbar />
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
        <Imagehome />
        <div className="border-bottom"></div>
        <h3 className="title-image-home">
          Pourquoi devriez-vous consulter un psychopraticien ?
        </h3>
        <p className="text-image-home">
          Lorsque vous rencontrez des problèmes au cours de votre vie,
          généralement vous les solutionnez par vous-même ou bien vous
          bénéficiez du soutien de votre famille/amis. Mais parfois, vous aurez
          besoin d’un professionnel qui bénéficie d’une formation et une
          expérience probante pour pouvoir vous aider et surtout sur qui vous
          pouvez compter et qui est objectif. Dans ce cas-là, vous pouvez faire
          appel à un psychopraticien agréé.
        </p>
        <div className="img-presentation-container">
          <Image
            className="img-presentation"
            src={Presentation}
            alt={Presentation}
            width={580}
            height={350}
          />
        </div>
      </section>
    </main>
  );
}
