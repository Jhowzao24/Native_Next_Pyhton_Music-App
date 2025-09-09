/* eslint-disable react-hooks/exhaustive-deps */
import { Button} from 'antd';
import {Fab} from '@mui/material';
import React, { useState, useEffect } from 'react';

function RhythmGame(){
  const [score, setScore] = useState(0);
  const [currentNote, setCurrentNote] = useState('');
  const [gameStarted, setGameStarted] = useState(false);

  const notes = ['C-DÓ', 'D-RÉ', 'E-MI', 'F-FÁ', 'G-SOL', 'A-LÁ', 'B-SI'];

  useEffect(() => {
    if (gameStarted) {
      const interval = setInterval(() => {
        const randomNote = notes[Math.floor(Math.random() * notes.length)];
        setCurrentNote(randomNote);
      }, 2300);

      return () => {
        clearInterval(interval);
      };
    }
  }, [gameStarted, notes]);

  const handleStartGame = () => {
    setGameStarted(true);
  };

  const handleNoteClick = (note) => {
    if (note === currentNote) {
      setScore(score + 1);
    } else {
      setScore(score - 1);
    }
  };

  return (
    <div style={{backgroundColor: 'darkcyan', color: 'blue', boxShadow: '0 0 10px 10px', borderRadius: '30px', borderStyle: 'double', borderWidth: '3px', borderColor: 'white'}}>
      <h1>Game de Ritmo Musical</h1>
      {!gameStarted && (
        <Button style={{boxShadow: '0 0 10px 7px'}} onClick={handleStartGame}>Iniciar Jogo</Button>
      )}
      {gameStarted && <p style={{color: 'aliceblue', boxShadow: '0 0 10px 7px', width: '100px'}}>Nota atual: {currentNote}</p>}
      <p style={{color: 'gold', boxShadow: '0 0 10px 7px', width: '100px'}}>Pontuação: {score}</p>
      {notes.map((note, index) => (
        <>
          <div style={{float: 'left', paddingLeft: '10px'}}>
            <br/><br/>
          <Fab style={{backgroundColor: 'blue', color: 'white', boxShadow: '0 0 30px 10px', padding: '20px'}}
          key={index}
          disabled={!gameStarted}
          onClick={() => handleNoteClick(note)}
        >
          {note}
        </Fab>
          </div>
        </>
      ))}
    </div>
  );
};

export default RhythmGame;