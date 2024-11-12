import Image from "next/image";
import ImgHome from "../app/assets/image/patricia.gif";

export default function Home() {
  return (
    <main>
      <div className="content">
        <div className="img-text-content">
          <Image
            className="img-home"
            src={ImgHome}
            alt={ImgHome}
            width={500}
            height={500}
          />
          <p>
            Je suis ravie de vous accueillir sur mon site. En tant que
            psychopraticienne, je suis dévouée à accompagner mes clients dans
            leur cheminement personnel vers le bien-être et l'équilibre mental.
            Mon approche bienveillante et personnalisée vise à vous aider à
            surmonter les défis émotionnels et psychologiques que vous pouvez
            rencontrer.
          </p>
        </div>

        <p>
          Bataille's analysis of predialectic objectivism holds that culture is
          used in the service of archaic, sexist perceptions of art. A number of
          constructions concerning capitalist objectivism may be found. However,
          the primary theme of von Ludwig's[2] model of pretextual capitalist
          theory is the bridge between society and class. If capitalist
          objectivism holds, we have to choose between predialectic objectivism
          and Lacanist obscurity.
        </p>

        <p>
          Bataille's analysis of predialectic objectivism holds that culture is
          used in the service of archaic, sexist perceptions of art. A number of
          constructions concerning capitalist objectivism may be found. However,
          the primary theme of von Ludwig's[2] model of pretextual capitalist
          theory is the bridge between society and class. If capitalist
          objectivism holds, we have to choose between predialectic objectivism
          and Lacanist obscurity.
        </p>

        <p>
          Bataille's analysis of predialectic objectivism holds that culture is
          used in the service of archaic, sexist perceptions of art. A number of
          constructions concerning capitalist objectivism may be found. However,
          the primary theme of von Ludwig's[2] model of pretextual capitalist
          theory is the bridge between society and class. If capitalist
          objectivism holds, we have to choose between predialectic objectivism
          and Lacanist obscurity.
        </p>
      </div>
    </main>
  );
}
