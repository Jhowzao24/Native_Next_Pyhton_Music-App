import { Button, Card } from 'antd';
import React, { useState, useRef } from 'react';
import { ReactSketchCanvas } from 'react-sketch-canvas';
import { Stage, Layer, Line, Text, Group, Rect, Circle } from 'react-konva';
import * as Tone from 'tone';

const ViolinString = ({ points, notes, onClick }) => (
  <>
    <Line
      points={points}
      stroke="cyan"
      strokeWidth={5}
      lineCap="round"
    />
    {notes.map((note, index) => (
      <Circle
        key={index}
        x={points[0]}
        y={points[1] + (index * 50)} // Distribui os pontos ao longo da corda
        radius={8}
        fill="blue"
        onClick={() => onClick(note)}
      />
    ))}
  </>
);

const VirtualViolin = () => {
  const [currentNote, setCurrentNote] = useState(null);
  const [synth] = useState(new Tone.Synth().toDestination());

  const handleStringClick = (note) => {
    setCurrentNote(note);
    synth.triggerAttackRelease(note, '8n');
  };

  const strings = [
    { 
      notes: ['G3', 'A3', 'B3', 'C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4'], 
      points: [100, 50, 100, 400 + (10 * 30)] 
    },
    { 
      notes: ['D4', 'E4', 'F#4', 'G4', 'A4', 'B4', 'C5', 'D5', 'E5', 'F#5'], 
      points: [150, 50, 150, 400 + (10 * 30)] 
    },
    { 
      notes: ['A4', 'B4', 'C#5', 'D5', 'E5', 'F#5', 'G5', 'A5', 'B5', 'C#6'], 
      points: [200, 50, 200, 400 + (10 * 30)] 
    },
    { 
      notes: ['E5', 'F#5', 'G#5', 'A5', 'B5', 'C#6', 'D6', 'E6', 'F#6', 'G#6'], 
      points: [250, 50, 250, 400 + (10 * 30)] 
    },
  ];


  /*
  const strings = [
    { 
      notes: ['G3', 'A3', 'B3', 'C4', 'D4', 'E4'], 
      points: [100, 50, 100, 350] 
    },
    { 
      notes: ['D4', 'E4', 'F#4', 'G4', 'A4', 'B4'], 
      points: [150, 50, 150, 350] 
    },
    { 
      notes: ['A4', 'B4', 'C#5', 'D5', 'E5', 'F#5'], 
      points: [200, 50, 200, 350] 
    },
    { 
      notes: ['E5', 'F#5', 'G#5', 'A5', 'B5', 'C#6'], 
      points: [250, 50, 250, 350] 
    },
  ];
  */

  return (
    <div>
      <h1>Virtual Violin</h1>
      <br/>
      <h3>Play it by yourself!!, click on at each circle and hear the sound on the violin strings!!</h3>
      <Stage width={400} height={550}>
        <Layer>
          {strings.map((string, index) => (
            <ViolinString
              key={index}
              points={string.points}
              notes={string.notes}
              onClick={handleStringClick}
            />
          ))}
        </Layer>
      </Stage>
      {currentNote && <Text text={`Playing: ${currentNote}`} x={20} y={10} fontSize={20} />}
    </div>
  );
};


const MusicalScoreApp = () => {
  const [notes, setNotes] = useState([]);

  const handleStageClick = (e) => {
    const newNote = {
      id: notes.length + 1,
      x: e.evt.layerX,
      y: e.evt.layerY,
      content: "C4", // Exemplo de conteúdo, pode ser dinâmico ou fixo
    };
    setNotes([...notes, newNote]);
  };

  const renderStaves = () => {
    const staves = [];
    const lines = ['E', 'G', 'B', 'D', 'F']; // Linhas do pentagrama
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

  return (
    <div>
      <h1>Music score guy, please,  put any notes and enjoy!!</h1>
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
              <Rect width={40} height={40} fill="black" />
              <Text
                text={note.content}
                fontSize={25}
                fontFamily="fantasy"
                fill="gold"
                align="center"
                verticalAlign="middle"
                x={note.x - 20}
                y={note.y - 20}
                width={40}
                height={40}
              />
            </Group>
          ))}
        </Layer>
      </Stage>
    </div>
  );
};


const DrawBox = () => {
  const canvasRef = useRef(null);

  const clearCanvas = () => {
    canvasRef.current.clearCanvas();
  };

  const undo = () => {
    canvasRef.current.undo();
  };

  return (
    <div>
      <ReactSketchCanvas
        ref={canvasRef}
        strokeWidth={5}
        strokeColor="blue"
        canvasColor="black"
        width="100%"
        height="500px"
        style={{ borderWidth: '3px', borderRadius: '30px', borderColor: 'cyan' }}
      />
      <Button onClick={clearCanvas}>To clean</Button>
      <Button onClick={undo}>Undo</Button>
    </div>
  );
};


const SoundAndDraw = () => {
  return (
    <div>
      <fieldset style={{margin: '60px'}}>
        <Card style={{backgroundColor: 'purple', color: 'white'}}>
          <VirtualViolin/>
        </Card>
      </fieldset>
      <div style={{margin: '30px', color: 'olive', fontFamily: 'fantasy'}}>
      <h1>Draw a Clave</h1>
      <h3>Your choice, it is up to you!!</h3>
      <DrawBox />
      </div>
      <br/>
      <MusicalScoreApp/>
    </div>
  );
};

export default SoundAndDraw;