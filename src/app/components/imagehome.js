// imagehome.js
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function ImageHome() {
  // Récupere les images de la bdd
  const images = await prisma.imageHome.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <section className="imagehome-content">
      <h2 className="title-image-home">
        Que pouvez-vous trouver sur mon site ?
      </h2>
      <p className="text-image-home">
        Sur mon site, vous trouverez un aperçu du lieu où vous serez accueilli,
        ainsi qu'une section dédiée aux événements que j'organise, afin de vous
        offrir une expérience agréable et de créer un lien fort pour vous
        accompagner dans les meilleures conditions.
      </p>
      <div className="carrousel-content">
        <div className="carousel">
          {images.map((image) => (
            <div key={image.id} className="carousel-image">
              <img
                src={`data:image/jpeg;base64,${Buffer.from(
                  image.image
                ).toString("base64")}`}
                alt="Image from gallery"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
