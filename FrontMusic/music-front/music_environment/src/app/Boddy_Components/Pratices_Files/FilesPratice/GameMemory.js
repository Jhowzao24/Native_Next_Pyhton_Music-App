import React, { useState, useEffect } from "react";

const images = [
  { id: 1, src: "https://th.bing.com/th/id/OIP.ZUOEGYESfMgSCBTORgFJIgHaB0?pid=ImgDet&rs=1" },
  { id: 2, src: "https://th.bing.com/th/id/OIP.vJAGGl76JZGiXH2Jxn2mCwHaDf?pid=ImgDet&rs=1" },
  { id: 3, src: "https://th.bing.com/th/id/OIP.gAAE5A97MWqbpd1DbJk-dwHaBk?pid=ImgDet&rs=1" },
];

export default function GameMemory() {
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
            <img style={{width: '500px', height: '250px'}} src={image.src} alt="instrument" className="selectedImage" />
          </div>
        );
      } else {
        return (
          <div className="imageWrapper" key={image.id}>
            <img style={{width: '50px', height: '50px'}}
              src="https://th.bing.com/th/id/OIP.jDtBYxnCfmH5B-UUVtIwcAHaE3?pid=ImgDet&rs=1"
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

  return <div className="app">
    <h3>Please. check this images bellow, emorize it in your mind, and after open the Quizz and answer it!</h3>
    {renderImages()}
    </div>;
}