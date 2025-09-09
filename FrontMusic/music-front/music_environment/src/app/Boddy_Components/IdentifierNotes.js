import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Card, Button } from 'antd';
import { ButtonBase } from '@material-ui/core';

const playNote = (frequency) => {
    const audioContext = new (window.AudioContext || (window).AudioContext)();
    const oscillator = audioContext.createOscillator();
    oscillator.type = 'sine'; // Pode experimentar com outros tipos de ondas
    oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
    oscillator.connect(audioContext.destination);
    oscillator.start();
    setTimeout(() => oscillator.stop(), 500); // Ajuste o tempo de duração do som
  };

const handleClickNote = (frequency) => {
    playNote(frequency);
  };

const notes = [[<Card><ButtonBase onClick={() => handleClickNote(190.63)}>SOL</ButtonBase></Card>],
               [<Card><ButtonBase onClick={() => handleClickNote(293.66)}>RÉ</ButtonBase></Card>],
               [<Card><Button onClick={() => handleClickNote(440.00)}>LÁ</Button></Card>],
               [<Card><Button onClick={() => handleClickNote(645.63)}>MI</Button></Card>],
               [<Card><ButtonBase onClick={() => handleClickNote(190.63)}>SOL</ButtonBase></Card>],
               [<Card><ButtonBase onClick={() => handleClickNote(349.23)}>FÁ</ButtonBase></Card>],
               [<Card><button onClick={() => handleClickNote(261.63)}>DÓ</button></Card>],
               [<Card><button onClick={() => handleClickNote(392.00)}>SOL</button></Card>]]; // Notas musicais

function AppId() {
  const [exerciseNotes, setExerciseNotes] = useState([]); // Estado das notas do exercício
  const [userNotes, setUserNotes] = useState([]); // Estado das notas arrastadas pelo usuário
  const [feedback, setFeedback] = useState('Change the ordering while you click the button, and play the notes on your instrument!'); // Feedback para o usuário

  useEffect(() => {
    generateExercise(); // Gerar um novo exercício quando o componente é montado
  }, []);

  // Função para gerar um novo exercício com notas aleatórias
  const generateExercise = () => {
    const newExercise = [];
    for (let i = 0; i < 4; i++) {
      const randomNote = notes[Math.floor(Math.random() * notes.length)];
      newExercise.push(randomNote);
    }
    setExerciseNotes(newExercise);
    setUserNotes([]); // Limpar as notas do usuário
    setFeedback('Arraste as notas para combinar com o exercício'); // Limpar o feedback
  };

  // Manipulador de evento para arrastar e soltar as notas
  const onDragEnd = (result) => {
    if (!result.destination) return;

    const { source, destination } = result;
    const draggedNote = userNotes[source.index];
    const newNotes = [...userNotes];
    newNotes.splice(source.index, 1);
    newNotes.splice(destination.index, 0, draggedNote);

    setUserNotes(newNotes);

    // Verificar se as notas do usuário correspondem ao exercício
    if (JSON.stringify(newNotes) === JSON.stringify(exerciseNotes)) {
      setFeedback('Parabéns! Você acertou todas as notas!');
    } else {
      setFeedback('Tente novamente. As notas não correspondem ao exercício.');
    }
  };

  return (
    <div style={{width: '600px', backgroundColor: 'Highlight', alignContent: 'center'}}>
      <h1>Exercício Musical Arrojado</h1>
      <h3 style={{color: 'violet'}}>{feedback}</h3>
      <div className="exercise-container">
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppable">
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="exercise"
              >
                {exerciseNotes.map((note, index) => (
                  <div key={index} className="note">
                    {note}
                  </div>
                ))}
              </div>
            )}
          </Droppable>
          <Droppable droppableId="user-notes">
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="user-notes"
              >
                {userNotes.map((note, index) => (
                  <Draggable key={index} draggableId={index.toString()} index={index}>
                    {(provided) => (
                      <div
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        className="note"
                      >
                        {note}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
      <button onClick={generateExercise}>Gerar Novo Exercício</button>
    </div>
  );
}

export default AppId;