import React, { useState } from "react";

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
      <button onClick={() => handleClick("C")}>C</button>
      <button onClick={() => handleClick("D")}>D</button>
      <button onClick={() => handleClick("E")}>E</button>
      <button onClick={() => handleClick("F")}>F</button>
      <button onClick={() => handleClick("G")}>G</button>
      <button onClick={() => handleClick("A")}>A</button>
      <button onClick={() => handleClick("B")}>B</button>
    </div>
  );
};

export default AppNote;