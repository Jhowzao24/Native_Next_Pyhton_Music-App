import React, { useState } from "react";
import { Button } from "antd";

const SoundPlayer = () => {
  const [isPlaying, setPlaying] = useState(false);
  const CelloAfin = '/public/assets/Mp3audios/CelloTuner.mp3'

  const handlePlay = () => {
    setPlaying(true);
  };

  const handlePause = () => {
    setPlaying(false);
  };

  return (
    <div style={{ width: '450px', margin: '-30px', backgroundColor: 'dodgerblue', color: 'midnightblue'}}>
      <h2>Cello Tuner</h2>
      <h4>This Instrument will start from the string LÁ</h4>
      <center>
      {!isPlaying ? (
        <Button onClick={handlePlay}>Start</Button>
      ) : (
        <Button onClick={handlePause}>Pause</Button>
      )}
      {isPlaying && (
        <audio style={{width: '300px', height: '50px'}} controls autoPlay>
          <source src={CelloAfin} type="audio/mpeg" />
        </audio>
      )}
      </center>
    </div>
  );
};

export default SoundPlayer;