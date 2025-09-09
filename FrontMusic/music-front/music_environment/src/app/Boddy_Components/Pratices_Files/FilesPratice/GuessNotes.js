import React, { useState } from 'react';

const AppGame = () => {
  const [guess, setGuess] = useState('');
  const [note, setNote] = useState(Math.floor(Math.random() * 10) + 1);
  const [message, setMessage] = useState('');

  const handleGuess = () => {
    if (guess === '') {
      setMessage('Por favor, insira uma nota');
    } else if (guess < note) {
      setMessage('Tente uma nota mais alta');
    } else if (guess > note) {
      setMessage('Tente uma nota mais baixa');
    } else {
      setMessage('Parabéns! Você acertou a nota!');
    }
    setGuess('');
  };

  return (
    <div>
      <h1>Jogo de Adivinhação de Notas</h1>
      <p>{message}</p>
      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(parseInt(e.target.value))}
      />
      <button onClick={handleGuess}>Adivinhar</button>
    </div>
  );
};

export default AppGame;