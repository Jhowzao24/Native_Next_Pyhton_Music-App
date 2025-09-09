import React, { useState, useEffect } from 'react';

const ViolinTutor = () => {
  const [notes, setNotes]= useState([]); 
  const [CurrentNote, setCurrentNote] = useState('');
  const [Score, setScore] = useState();
  const [gameOver, setGameOver] = useState(false);

  // Função para carregar as notas do violino
  const loadNotes = () => {
    // Aqui você pode carregar as notas de um arquivo JSON, banco de dados ou qualquer outra fonte de dados
    const notesData = [
      { note: 'A', frequency: 440 },
      { note: 'B', frequency: 493.88 },
      { note: 'C', frequency: 523.25 },
      { note: 'D', frequency: 630.25 },
      { note: 'E', frequency: 723.25 },
      { note: 'F', frequency: 423.25 },
      { note: 'G', frequency: 223.25 },
      // Adicione outras notas aqui
    ];

    setNotes(notesData);
  };

  useEffect(() => {
    loadNotes();
  }, []);

  // Função para verificar a nota selecionada pelo usuário
  const checkNote = (note) => {
    if (note === CurrentNote) {
      setScore(Score + 1);
    } else {
      setGameOver(true);
    }
  };

  // Função para reiniciar o jogo
  const restartGame = () => {
    setScore(0);
    setGameOver(false);
    setCurrentNote('');
  };

  return (
    <div>
      <h1>Violin Tutor Profissional</h1>
      <p>Pontuação: {Score}</p>
      {gameOver ? (
        <div>
          <p>Game Over!</p>
          <button onClick={restartGame}>Jogar Novamente</button>
        </div>
      ) : (
        <div>
          <p>Qual é a nota atual?</p>
          {notes.map((note) => (
            <button key={note.note} onClick={() => checkNote(note.note)}>
              {note.note}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ViolinTutor;