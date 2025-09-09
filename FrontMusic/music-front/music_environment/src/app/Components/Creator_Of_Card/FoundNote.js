import { Input, Button } from 'antd';
import React, { useState } from 'react';
import * as Tone from 'tone';
import './Recognize.css';

const RecognizeNote = () => {
    const [isCardVisible, setIsCardVisible] = useState(false);

    const toggleCard = () => {
      setIsCardVisible(!isCardVisible);
    };
  const [randomNote, setRandomNote] = useState("");
  const [userGuess, setUserGuess] = useState("");

  const notes = ["C4", "D4", "E4", "F4", "G4", "A4", "B4"];

  const playRandomNote = () => {
    const random = notes[Math.floor(Math.random() * notes.length)];
    setRandomNote(random);
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease(random, "8n");
  };

  const checkGuess = () => {
    if (userGuess === randomNote) {
      alert("Correto!");
    } else {
      alert("Tente novamente!");
    }
  };

  return (
    <div>
      <Button onClick={playRandomNote}>Tocar Nota Aleatória</Button>
      <br/>
      <Button className="toggle-btn" onClick={toggleCard}>
        Verify the Note
      </Button><br/><br/><br/>
      <div className={`card ${isCardVisible ? 'show' : ''}`}>
        <Input
            value={userGuess}
            onChange={(e) => setUserGuess(e.target.value)}
            placeholder="Digite a nota (ex: C4)"
        />
        <Button onClick={checkGuess}>Verificar</Button>
      </div>
    </div>
  );
};

export default RecognizeNote;