import React, { useRef, useState } from 'react';
import { Button } from 'evergreen-ui';

const MeuComponente = () => {
  const audioRef = useRef(new Audio('/assets/Mp3Audios/CelloEye.mp3'));
  const [isPlaying, setIsPlaying] = useState(false);

  const tocarSom = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };

  const pausarSom = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };
  
  return (
    <div>
      {isPlaying ? (
        <Button onClick={pausarSom}>Pausar Som</Button>
      ) : (
        <Button onClick={tocarSom}>Tocar Som</Button>
      )}
      <Button onClick={tocarSom}>Tocar Som</Button>
    </div>
  );
};

export default MeuComponente;

//const audio = '/public/assets/Mp3Audios/CelloEye.mp3';