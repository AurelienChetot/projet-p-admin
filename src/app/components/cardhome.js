export default function Cardhome() {
  return (
    <section>
      <div className="text-cardhome-container">
        <h2 className="title-cardhome">Pourquoi me consulter ?</h2>
        <p className="text-cardhome">
          En tant qu'accompagnatrice en développement personnel et
          professionnel, je vous guide vers une meilleure compréhension de
          vous-même et de vos objectifs.
          <br /> Ensemble, nous abordons les défis émotionnels, relationnels, et
          professionnels pour un bien-être global et durable.
        </p>
      </div>
      <div className="card-container">
        <div className="card">
          <div className="front-content">
            <p>
              Épanouissement
              <br />
              personnel
            </p>
          </div>
          <div className="content">
            <p className="heading">Épanouissement</p>
            <p>
              Libérez-vous des blocages qui freinent votre épanouissement,
              explorez votre potentiel, et découvrez des outils pour renforcer
              votre estime de soi. À travers un accompagnement bienveillant, je
              vous aide à reprendre confiance en vos capacités et à aller vers
              une vie plus alignée.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="front-content">
            <p>
              Gestion
              <br />
              émotionnelle
            </p>
          </div>
          <div className="content">
            <p className="heading">Émotionnelle</p>
            <p>
              Apprenez à mieux gérer vos émotions pour éviter qu'elles
              n'impactent votre quotidien de manière négative. Ensemble, nous
              explorons des techniques pour mieux comprendre, accepter, et
              transformer vos émotions, favorisant ainsi un équilibre mental et
              émotionnel.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="front-content">
            <p>
              Évolution
              <br />
              professionnelle
            </p>
          </div>
          <div className="content">
            <p className="heading">Professionnel</p>
            <p>
              Que vous souhaitiez changer de carrière, renforcer vos
              compétences, ou simplement vous sentir plus épanoui(e) au travail,
              je vous accompagne dans la définition et l'accomplissement de vos
              objectifs professionnels. Grâce à des exercices pratiques et des
              échanges personnalisés.
            </p>
          </div>
        </div>
      </div>
      <div className="border-bottom"></div>
    </section>
  );
}
