import React, { useState, useRef } from "react";
import { Button } from "antd";

const ViolaAfin = () => {
  const [isPlaying, setPlaying] = useState(false);
  const Viola_Tuner = '/assets/Mp3Audios/Viola_Tuner.mp3';
  const audioRef = useRef(null);

  const handlePlay = () => {
    audioRef.current.play();
    setPlaying(true);
  };

  const handlePause = () => {
    audioRef.current.pause();
    setPlaying(false);
  };

  return (
    <div style={{ width: '500px', margin: '-30px', backgroundColor: 'dodgerblue', color: 'midnightblue'}}>
      <h2>Viola Tuner</h2>
      <h4>This instrument will start from the string LÁ</h4>
      <center>
      {!isPlaying ? (
        <Button onClick={handlePlay}>Start</Button>
      ) : (
        <Button onClick={handlePause}>Pause</Button>
      )}
      {isPlaying && (
        <audio ref={audioRef} style={{width: '300px', height: '50px'}} controls autoPlay>
          <source src={Viola_Tuner} type="audio/mpeg" />
        </audio>
      )}
      </center>
    </div>
  );
};

export default ViolaAfin;