import React, { useState } from "react";
import { Button } from "evergreen-ui";

const notes = ["C", "D", "E", "F", "G", "A", "B"];

const AppNote = () => {
  const [currentNote, setCurrentNote] = useState("");
  const [score, setScore] = useState(0);

  const generateRandomNote = () => {
    const randomIndex = Math.floor(Math.random() * notes.length);
    setCurrentNote(notes[randomIndex]);
  };

  const handleClick = (note) => {
    if (note === currentNote) {
      setScore(score + 1);
    } else {
      setScore(0);
    }
    generateRandomNote();
  };

  return (
    <div>
      <h1>Game de Notas Musicais</h1>
      <h2>Nota atual: {currentNote}</h2>
      <h3>Pontuação: {score}</h3>
      <Button onClick={() => handleClick("C")}>C</Button>
      <Button onClick={() => handleClick("D")}>D</Button>
      <Button onClick={() => handleClick("E")}>E</Button>
      <Button onClick={() => handleClick("F")}>F</Button>
      <Button onClick={() => handleClick("G")}>G</Button>
      <Button onClick={() => handleClick("A")}>A</Button>
      <Button onClick={() => handleClick("B")}>B</Button>
    </div>
  );
};

export default AppNote;