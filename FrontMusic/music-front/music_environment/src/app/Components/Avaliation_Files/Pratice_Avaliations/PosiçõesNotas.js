import React, { useState, useEffect } from "react";

const AppPosition = () => {
  const [notes, setNotes] = useState([]);
  const [position, setPosition] = useState(0);

  // Função para adicionar uma nova nota
  const addNote = () => {
    const newNote = {
      id: Date.now(), // Gera um ID único para cada nota
      note: `${Math.floor(Math.random() * 10)}` // Gera um número aleatório de 0 a 9
    };
    setNotes([...notes, newNote]); // Adiciona a nova nota ao array de notas
  };

  // Função para remover a primeira nota da tela
  const removeNote = () => {
    setNotes(notes.slice(1)); // Remove a primeira nota do array de notas
  };

  // Atualiza a posição das notas a cada 1 segundo
  useEffect(() => {
    const interval = setInterval(() => {
      setPosition(position => position + 1);
    }, 1000);
    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, []);

  // Renderiza as notas na tela
  const renderNotes = () => {
    return notes.map(note => (
      <div key={note.id} style={{ top: `${position * 50}px` }}>
        {note.note}
      </div>
    ));
  };

  return (
    <div>
      <button onClick={addNote}>Adicionar Nota</button>
      <button onClick={removeNote}>Remover Nota</button>
      {renderNotes()}
    </div>
  );
};

export default AppPosition;