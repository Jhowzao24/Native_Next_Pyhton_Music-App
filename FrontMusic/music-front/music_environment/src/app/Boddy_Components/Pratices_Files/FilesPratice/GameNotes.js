import React, { useState, useEffect } from "react";

const images = [
  { id: 1, src: "https://th.bing.com/th/id/OIP.8PRIDOdzKNkI-k4NL3UfpgHaF3?pid=ImgDet&rs=1" },
  { id: 2, src: "https://th.bing.com/th/id/OIP.56wo9EsAQSQ95DqZ5JxfEQHaE-?pid=ImgDet&rs=1" },
  { id: 3, src: "https://th.bing.com/th/id/OIP.X3xN6Lq42ng1cB1vNUeNCwHaI2?pid=ImgDet&rs=1" },
  { id: 4, src: "https://th.bing.com/th/id/OIP.8PRIDOdzKNkI-k4NL3UfpgHaF3?pid=ImgDet&rs=1" },
  { id: 5, src: "https://th.bing.com/th/id/OIP.8PRIDOdzKNkI-k4NL3UfpgHaF3?pid=ImgDet&rs=1" },
  { id: 6, src: "https://th.bing.com/th/id/OIP.8PRIDOdzKNkI-k4NL3UfpgHaF3?pid=ImgDet&rs=1" },
  { id: 7, src: "https://th.bing.com/th/id/OIP.8PRIDOdzKNkI-k4NL3UfpgHaF3?pid=ImgDet&rs=1" },
  { id: 8, src: "https://th.bing.com/th/id/OIP.8PRIDOdzKNkI-k4NL3UfpgHaF3?pid=ImgDet&rs=1" }
];

export default function CelloGameApp() {
  const [selectedImages, setSelectedImages] = useState([]);
  const [matchedImages, setMatchedImages] = useState([]);

  const handleImageClick = (image) => {
    setSelectedImages([...selectedImages, image]);

    if (selectedImages.length > 0) {
      if (selectedImages[0].id === image.id) {
        setMatchedImages([...matchedImages, image]);
      }
      setSelectedImages([]);
    }
  };

  const renderImages = () => {
    return images.map((image) => {
      const isImageSelected = selectedImages.find(
        (selectedImage) => selectedImage.id === image.id
      );
      const isImageMatched = matchedImages.find(
        (matchedImage) => matchedImage.id === image.id
      );

      if (isImageSelected || isImageMatched) {
        return (
          <div className="imageWrapper" key={image.id}>
            <img style={{width: '300px', height: '300px'}} src={image.src} alt="instrument" className="selectedImage" />
          </div>
        );
      } else {
        return (
          <div className="imageWrapper" key={image.id}>
            <p style={{width: '15px', height: '15px', backgroundColor: 'blue', borderRadius: '10px'}}
              alt="blank"
              className="blankImage"
              onClick={() => handleImageClick(image)}
            />
          </div>
        );
      }
    });
  };

  useEffect(() => {
    if (matchedImages.length === images.length) {
      alert("Parabéns! Você encontrou todos os pares de instrumentos!");
    }
  }, [matchedImages]);

  return <div className="app">{renderImages()}</div>;
}