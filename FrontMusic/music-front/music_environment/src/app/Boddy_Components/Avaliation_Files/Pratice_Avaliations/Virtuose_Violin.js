import React, { useState } from "react";
import { Button } from 'evergreen-ui';

const ViolinVirtuoso = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const playNote = () => {
    setIsPlaying(true);
    // Lógica para tocar uma nota no violino
    setTimeout(() => {
      setIsPlaying(false);
    }, 10000); // Tempo de duração da nota
  };
  const [isPlayied, setIsPlayied] = useState(false);

  const toggleAudio = () => {
    setIsPlayied(!isPlayied);
  };

  return (
    <div>
      <h2>Violin Virtuoso</h2>
      <Button onClick={playNote}>Play Note</Button>
      {isPlaying && <p>Producing beautiful sound...</p>}
      <audio src="audio_file.mp3" controls={true} autoPlay={isPlayied} />
      <Button onClick={toggleAudio}>
        {isPlayied ? 'Pausar' : 'Reproducir'}
      </Button>
    </div>
  );
};

export default ViolinVirtuoso;