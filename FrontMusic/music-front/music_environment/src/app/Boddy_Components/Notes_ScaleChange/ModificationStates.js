import { Button } from 'antd';
import React, { useState, useContext, createContext } from 'react';

const ScaleContext = createContext();

export const ScaleProvider = ({ children }) => {
  const [selectedScale, setSelectedScale] = useState([]);
  const [currentNoteIndex, setCurrentNoteIndex] = useState(0);

  const scales = {
    DÓ: ['DÓ', 'RÉ', 'MI', 'FÁ', 'DÓ', 'LA', 'SI'],
    SOL: ['SOL', 'LA', 'SI', 'DÓ', 'RÉ', 'MI', 'FÁ#'],
    RÉ: ['RÉ', 'MI', 'FÁ#', 'SOL', 'LA', 'SI', 'DÓ#'],
  };

  const selectScale = (scale) => {
    setSelectedScale(scales[scale]);
    setCurrentNoteIndex(0);
  };

  const playNote = (note) => {
    if (note === selectedScale[currentNoteIndex]) {
      setCurrentNoteIndex((prevIndex) => prevIndex + 1);
      return true;
    }
    return false;
  };

  return (
    <ScaleContext.Provider
      value={{ selectedScale, selectScale, playNote, currentNoteIndex }}
    >
      {children}
    </ScaleContext.Provider>
  );
};

const useScale = () => useContext(ScaleContext);

const ScaleSelector = () => {
    const { selectScale } = useScale();
  
    return (
      <div>
        <h2>Select a scale:</h2>
        <Button onClick={() => selectScale('DÓ')}>DÓ Maior</Button>
        <Button onClick={() => selectScale('SOL')}>SOL Maior</Button>
        <Button onClick={() => selectScale('RÉ')}>RÉ Maior</Button>
      </div>
    );
  };

  const NoteButtons = () => {
    const { selectedScale, playNote, currentNoteIndex } = useScale();
  
    return (
      <div>
        <h2>Play one note:</h2>
        {selectedScale.map((note, index) => (
          <Button
            key={note}
            onClick={() => playNote(note)}
            style={{
              backgroundColor: index < currentNoteIndex ? 'blue' : 'white',
            }}
          >
            {note}
          </Button>
        ))}
      </div>
    );
  };

  const Feedback = () => {
    const { selectedScale, currentNoteIndex } = useScale();
  
    if (!selectedScale.length) {
      return <p>Choice a scale to start to pratice!</p>;
    }
  
    if (currentNoteIndex === selectedScale.length) {
      return <h3 style={{color: 'cyan', boxShadow: '0 0 3px 3px'}}>Congratulation, you done the scale!</h3>;
    }
  
    return (
      <p>
        Keep up to the next note: <strong>{selectedScale[currentNoteIndex]}</strong>
      </p>
    );
  };

export default function StateModify(){
    return(
        <div>
            <ScaleProvider>
                <div>
                    <h1>Pratice of violin scales</h1>
                    <ScaleSelector />
                    <NoteButtons />
                    <Feedback />
                </div>
            </ScaleProvider>
        </div>
    )
}