import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Méthode GET
export async function GET(req) {
  try {
    // Récupère toutes les images de la table
    const images = await prisma.imageHome.findMany({
      orderBy: { createdAt: "desc" },
    });

    // Convertit chaque image en base64 pour JSON
    const imagesData = images.map((image) => ({
      id: image.id,
      image: Buffer.from(image.image).toString("base64"), // Conversion en base64
      createdAt: image.createdAt,
    }));

    return new Response(JSON.stringify(imagesData), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response("Erreur lors de la récupération des images", {
      status: 500,
    });
  }
}

// Méthode POST
export async function POST(req) {
  try {
    // Récupere le FormData de la requête
    const formData = await req.formData();
    const imageFile = formData.get("image");

    if (!imageFile) {
      return new Response("Aucune image trouvée dans la requête", {
        status: 400,
      });
    }

    // Lit le fichier en tant que tableau de bytes
    const buffer = await imageFile.arrayBuffer();
    const byteArray = new Uint8Array(buffer); // Convertit en bytes

    // Enregistre l'image dans la base de données
    const imageHome = await prisma.imageHome.create({
      data: {
        image: byteArray, // Enregistrement des bytes dans la base de données
      },
    });

    return new Response(
      JSON.stringify({
        message: "Image téléchargée avec succès",
        data: imageHome,
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    return new Response("Erreur lors de l'enregistrement de l'image", {
      status: 500,
    });
  }
}

// Méthode DELETE
export async function DELETE(req) {
  try {
    const { id } = await req.json(); // Récupère l'id de l'image a supprimer

    // Supprime l'image de la bdd
    const deletedImage = await prisma.imageHome.delete({
      where: { id },
    });

    return new Response(
      JSON.stringify({
        message: "Image supprimée avec succès",
        data: deletedImage,
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    return new Response("Erreur lors de la suppression de l'image", {
      status: 500,
    });
  }
}
