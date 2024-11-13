import { useState, useEffect } from "react";

export default function ImageHomeManager() {
  const [uploading, setUploading] = useState(false);
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [retrievedImages, setRetrievedImages] = useState([]);
  const [showConfirmDelete, setShowConfirmDelete] = useState(false); // Etat poyur confirmer la supression
  const [imageToDelete, setImageToDelete] = useState(null); // Image a supprimer

  // Gère le changement de l'image sélectionnée
  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);

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
        fetchImages(); // Recharge les images après l'upload
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

  // Fonction pour supprimer une image
  const deleteImage = async () => {
    if (!imageToDelete) return;

    try {
      const response = await fetch("/api/upload-imagehome", {
        method: "DELETE",
        body: JSON.stringify({ id: imageToDelete }), // Envoie l'id a supprimer
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        alert("Image supprimée avec succès !");
        fetchImages(); // Recharge les images après suppression
        setShowConfirmDelete(false); // Cache la boîte de confirmation
        setImageToDelete(null); // Réinitialise l'image à supprimer
      } else {
        console.error("Erreur lors de la suppression de l'image");
        alert("Erreur lors de la suppression de l'image");
      }
    } catch (error) {
      console.error("Erreur lors de la suppression de l'image", error);
    }
  };

  // Fonction pour confimrer le delete
  const handleConfirmDelete = (id) => {
    setImageToDelete(id); // Enregistre l'image a delete
    setShowConfirmDelete(true); // Affiche la confirmation
  };

  const handleCancelDelete = () => {
    setShowConfirmDelete(false); // Ferme la confirmation si "non"
    setImageToDelete(null); // Réinitialise l'image supprimer
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <section className="section-imghomeadmin">
      {/* upload une image  */}
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
      {/* Affichage les images de la table  */}
      {retrievedImages.length > 0 ? (
        <div className="imghomeadmin-container">
          <h3 className="img-text-download">
            Images téléchargées :<br />
            (Préférence photo portrait)
          </h3>
          <div className="imgadmin-content">
            {retrievedImages.map((image) => (
              <div key={image.id} style={{ position: "relative" }}>
                <img
                  src={image.url}
                  alt="Image téléchargée"
                  className="imgadmin-upload"
                />
                <p>Date: {new Date(image.createdAt).toLocaleDateString()}</p>
                <button
                  onClick={() => handleConfirmDelete(image.id)} // Affiche la confirmation de supression
                  className="button-admin-delete"
                >
                  X
                </button>
              </div>
            ))}
          </div>
          {/* Notification de confirmation de suppression */}
          {showConfirmDelete && (
            <div className="confirmation-modal">
              <p>Êtes-vous sûr de vouloir supprimer cette image ?</p>
              <button onClick={deleteImage}>Oui</button>
              <button onClick={handleCancelDelete}>Non</button>
            </div>
          )}
        </div>
      ) : (
        <p>Aucune image disponible.</p>
      )}
    </section>
  );
}
