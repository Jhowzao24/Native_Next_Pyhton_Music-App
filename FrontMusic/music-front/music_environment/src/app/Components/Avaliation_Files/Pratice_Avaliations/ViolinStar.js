import React from 'react';

const ViolinStars = () => {
  const [stars, setStars] = React.useState([]);

  const addStar = () => {
    setStars([...stars, '★']);
  };

  return (
    <div>
      <button onClick={addStar}>Adicionar uma estrela</button>
      <ul>
        {stars.map((star, index) => (
          <li key={index}>{star}</li>
        ))}
      </ul>
    </div>
  );
};

export default ViolinStars;