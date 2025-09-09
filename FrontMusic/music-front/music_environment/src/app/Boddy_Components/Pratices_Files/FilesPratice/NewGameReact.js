import { Button, Select } from '@mui/material';
import { Grid } from '@mui/material';
import React, { useState } from 'react';
import { Stage, Layer, Line, Text, Group, Circle } from 'react-konva';

const MusicalScoreApp = () => {
  const [notes, setNotes] = useState([]);
  const [lastPosition, setLastPosition] = useState({ x: 50, y: 150 });
  const [newNoteContent, setNewNoteContent] = useState(""); 

  const handleStageClick = (e) => {
    const newNote = {
      id: notes.length + 1,
      x: e.evt.layerX,
      y: e.evt.layerY,
      content: newNoteContent || "C4", // Exemplo de conteúdo, pode ser dinâmico ou fixo
    };
    setNotes([...notes, newNote]);
    setLastPosition({ x: e.evt.layerX, y: e.evt.layerY });
    setNewNoteContent("");
  };

  const handleNoteDelete = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  const noteOptions = ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4']; // Lista de notas disponíveis

  const handleNoteSelection = (e) => {
    setNewNoteContent(e.target.value); // Atualiza o estado com a nota selecionada
  };

  const renderStaves = () => {
    const staves = [];
    const lines = ['MI', 'SOL', 'LÁ', 'RÉ', 'FÁ']; // Linhas do pentagrama
    for (let i = 0; i < 5; i++) {
      const y = 100 + i * 50;
      staves.push(
        <Group key={i}>
          <Line points={[50, y, 750, y]} stroke="black" strokeWidth={2} />
          <Text text={lines[i]} x={30} y={y - 5} fontSize={20} fontFamily="Arial" />
        </Group>
      );
    }
    return staves;
  };

  const handleClearAll = () => {
    setNotes([]);
  };

  return (
    <div style={{margin: '30px', color: 'gold'}}>
      <h1>Musical Navigation App</h1>
      <fieldset style={{margin: '70px'}}>
      <h3>Here you can to add notes before the line note gaved!!</h3>
      <br/>
      <h4>
        Before you add a note, you must to notice that the name of the line there is a note named that start with (MI, FÁ, SOL, LÁ...) at the sequence of this notes there other notes, please chice first the folowed note that will complete the first name of the sequence!!
      </h4>
      </fieldset>
      <br/>
      <h5>First of all observe the named notes below and after you return here to choice a note to continue the sequence!!</h5>
      <div>
        <label htmlFor="noteSelect">Select Note:</label>
        <Select style={{color: 'gold'}} id="noteSelect" value={newNoteContent} onChange={handleNoteSelection}>
          <option value="">Select a note...</option>
          {noteOptions.map((note, index) => (
            <option key={index} value={note}>{note}</option>
          ))}
        </Select>
      </div>
      <br/>
      <Button style={{backgroundColor: 'white', color: 'blue'}} onClick={handleClearAll}>Clean all</Button>
      <Stage
        width={800}
        height={400}
        onClick={handleStageClick}
        style={{ border: '1px solid black' }}
      >
        <Layer>
          {renderStaves()}
          {notes.map((note) => (
            <Group key={note.id} x={note.x} y={note.y}>
              <Circle
                radius={20}
                fill="white"
                onClick={() => handleNoteDelete(note.id)}
                onTouchStart={() => handleNoteDelete(note.id)}
              />
              <Grid container spacing={7} style={{paddingLeft: '30px'}}>
              <Text
                text={note.content}
                fontSize={16}
                fontFamily="Arial"
                fill="white"
                align="center"
                verticalAlign="middle"
                x={note.x - 10}
                y={note.y - 10}
                width={50}
                height={50}
              />
              </Grid>
            </Group>
          ))}
          <Group>
            <Line
              points={[lastPosition.x, lastPosition.y - 10, lastPosition.x, lastPosition.y + 10]}
              stroke="red"
              strokeWidth={2}
            />
            <Line
              points={[lastPosition.x - 10, lastPosition.y, lastPosition.x + 10, lastPosition.y]}
              stroke="red"
              strokeWidth={2}
            />
          </Group>
        </Layer>
      </Stage>
    </div>
  );
}

export default MusicalScoreApp;