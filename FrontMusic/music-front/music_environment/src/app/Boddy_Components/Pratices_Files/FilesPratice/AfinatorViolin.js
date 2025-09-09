import React, { useState } from "react";
import { Button } from "antd";

const ViolinAfin = () => {
  const [isPlaying, setPlaying] = useState(false);
  const Violin_Tuner = 'assets/Mp3Audios/Violin_Tuner.mp3';

  const handlePlay = () => {
    setPlaying(true);
  };

  const handlePause = () => {
    setPlaying(false);
  };

  return (
    <div style={{ width: '450px', margin: '-30px', backgroundColor: 'dodgerblue', color: 'midnightblue'}}>
      <h2>Violin Tuner</h2>
      <h4>This instrument will start from the string MI</h4>
      <center>
      {!isPlaying ? (
        <Button onClick={handlePlay}>Start</Button>
      ) : (
        <Button onClick={handlePause}>Pause</Button>
      )}
      {isPlaying && (
        <audio style={{width: '300px', height: '50px'}} controls autoPlay>
          <source src={Violin_Tuner} type="audio/mpeg" />
        </audio>
      )}
      </center>
    </div>
  );
};

export default ViolinAfin;