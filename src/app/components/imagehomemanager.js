import { useState, useEffect } from "react";

export default function ImageHomeManager() {
  const [uploading, setUploading] = useState(false);
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null); // Pour stocker l'URL de prévisualisation
  const [retrievedImages, setRetrievedImages] = useState([]); // tableau pour stocker les images récupérées

  // Gère le changement de l'image sélectionnée
  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);

    // prévisualisation pour l'image ajoutée
    if (selectedImage) {
      const previewUrl = URL.createObjectURL(selectedImage);
      setPreviewUrl(previewUrl);
    }
  };

  // Post pour upload l'image
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      alert("Veuillez sélectionner une image avant de soumettre.");
      return;
    }

    const formData = new FormData();
    formData.append("image", image);

    setUploading(true);

    try {
      const response = await fetch("/api/upload-imagehome", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("Image téléchargée avec succès !");
        setPreviewUrl(null); // Efface l'aperçu après l'upload
        setImage(null); // Réinitialise le fichier sélectionné
        fetchImages(); // Recharge toutes les images après l'upload
      } else {
        const errorText = await response.text();
        alert("Erreur lors du téléchargement de l'image: " + errorText);
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi de l'image :", error);
      alert("Une erreur est survenue lors de l'upload de l'image.");
    } finally {
      setUploading(false);
    }
  };

  // Fonction pour récupérer toutes les images
  const fetchImages = async () => {
    try {
      const response = await fetch("/api/upload-imagehome", {
        method: "GET",
      });

      if (response.ok) {
        const imagesData = await response.json();
        const imageUrls = imagesData.map((image) => ({
          id: image.id,
          url: `data:image/jpeg;base64,${image.image}`,
          createdAt: image.createdAt,
        }));
        setRetrievedImages(imageUrls);
      } else {
        console.error("Erreur lors de la récupération des images.");
      }
    } catch (error) {
      console.error("Erreur lors de la récupération des images:", error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <section className="section-imghomeadmin">
      <form className="form-container" onSubmit={handleSubmit}>
        <label htmlFor="file-upload" className="custom-file-upload">
          Choisir un fichier
        </label>
        <input
          id="file-upload"
          className="button-admin"
          type="file"
          name="image"
          accept="image/*"
          onChange={handleImageChange}
          disabled={uploading}
        />
        {/* Affiche un aperçu de l'image */}
        {previewUrl && (
          <div className="img-admin-preview">
            <h3>Aperçu de l'image sélectionnée :</h3>
            <img
              className="img-preview"
              src={previewUrl}
              alt="Aperçu de l'image sélectionnée"
            />
          </div>
        )}
        <button className="button-upload" type="submit" disabled={uploading}>
          {uploading ? "Téléchargement en cours..." : "Télécharger l'image"}
        </button>
      </form>

      {/* Affiche toutes les images récupérées */}
      {retrievedImages.length > 0 ? (
        <div className="imghomeadmin-container">
          <h3 className="img-text-download">Images téléchargées :</h3>
          <div className="imgadmin-content">
            {retrievedImages.map((image) => (
              <div key={image.id}>
                <img
                  src={image.url}
                  alt="Image téléchargée"
                  style={{ width: "150px", height: "auto" }}
                />
                <p>Date: {new Date(image.createdAt).toLocaleDateString()}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p>Aucune image disponible.</p>
      )}
    </section>
  );
}
