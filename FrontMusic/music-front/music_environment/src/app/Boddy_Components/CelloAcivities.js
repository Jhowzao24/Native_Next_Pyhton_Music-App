import { Button } from 'antd';
import React, {useState} from 'react';


const Exercise = ({ exercise }) => {
    const [isPlaying, setIsPlaying] = useState(false);
  
    const togglePlay = () => {
      const audio = document.getElementById(`audio-${exercise.id}`);
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    };
  
    return (
      <div className="exercise">
        <h2>{exercise.title}</h2>
        <p>{exercise.description}</p>
        <audio id={`audio-${exercise.id}`} src={exercise.audioUrl} />
        <Button onClick={togglePlay}>
          {isPlaying ? 'Parar' : 'Tocar'}
        </Button>
        <div className="sheet-music">
          <img src={exercise.sheetMusicUrl} alt={`${exercise.title} Sheet Music`} />
        </div>
      </div>
    );
  };
  
  export default Exercise;