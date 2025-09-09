import { Button, Input, Card, Tooltip } from 'antd';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Grid, Paper } from '@mui/material';

const FinalBar = () => {
  return (
    <svg width="50" height="100" viewBox="0 0 50 100" xmlns="http://www.w3.org/2000/svg">
      {/* Linha fina */}
      <line x1="10" y1="10" x2="10" y2="90" stroke="black" strokeWidth="2"/>
      {/* Linha grossa */}
      <line x1="20" y1="10" x2="20" y2="90" stroke="black" strokeWidth="6"/>
    </svg>
  );
};

const ViolinFingeringTrainer = () => {

  const Estilos = {
    imageContainer: {
      position: 'relative',
      display: 'inline-block',
      width: '50%',
    },
    image: {
      display: 'block',
      width: '100%', /* Ajuste conforme necessário */
    },
    footerElement: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)', /* Fundo semitransparente */
      color: 'white',
      textAlign: 'center',
      padding: '10px',
      userSelect: 'none', /* Evita seleção de texto ao arrastar */
    }
  }
  // eslint-disable-next-line no-use-before-define
  const [fingering, setFingering] = useState([]);
  const [figureEnd, setFigureEnd] = useState([]);
  const [currentNote, setCurrentNote] = useState('');
  const Fermata = '𝄐';
  const BarraFinal = <FinalBar/>;
  const Minima = '𝅗𝅥';
  const LayoutFermata = [<div>
    <h1 style={{fontSize: '30px'}}>{Fermata}</h1>
    <Grid container spacing={9.5} style={{paddingLeft: '77px'}}>
      <h2>{Minima}</h2>
    </Grid>{currentNote}
  </div>]

  const handleNoteChange = (e) => {
    setCurrentNote(e.target.value);
  };

  const fermDiv = [
    <Paper>
      <h4>Fermata Inserted Successfuly</h4>
      <h5>This note will have an time uninterrupted!</h5>
      <h5>This image below trate the example that how this will appear in a pentagram!</h5>
      <Tooltip content='The fermata can to be positioned under or above the note, only two forms like this is showing!!'>
        <img  src='https://th.bing.com/th/id/R.d7941cb5075b16dfcc70b5df811df716?rik=TSjBv2N6nHDNFQ&pid=ImgRaw&r=0' alt='FermataTela'/>
      </Tooltip>
    </Paper>
  ]

  const handleAddNote = () => {
    if (currentNote !== '') {
      setFingering([...fingering, LayoutFermata]);
      setCurrentNote('');
      toast.success([fermDiv]);
    }
  };

  const AddFinalBar = [
    <div>
      <img style={Estilos.image} src='https://th.bing.com/th/id/OIP.kFH0PoFClEkWmm1wZE1VewHaB2?rs=1&pid=ImgDetMain' alt='FinalBar'/>
      <Grid container spacing={15} style={{paddingLeft: '550px'}}>
        <div>
          {BarraFinal}
        </div>
      </Grid>
    </div>
  ];

  const handleAddEndBar = () => {
    if (currentNote !== figureEnd) {
      setFigureEnd([...figureEnd, AddFinalBar]);
      setCurrentNote('');
      toast.success('This bar will show that the music have been ended!');
    }
  };

  const handleRemoveEndBar = (index) => {
    const newFingering = [...figureEnd];
    newFingering.splice(index, 1);
    setFigureEnd(newFingering);
  };

  const handleRemoveNote = (index) => {
    const newFingering = [...fingering];
    newFingering.splice(index, 1);
    setFingering(newFingering);
  };

  return (
    <div style={{color: 'cyan'}}>
      <h1>Fermata Exercises to Violin, Cello and Viola</h1>
      <Input style={{color: 'lightblue'}} type="text" value={currentNote} onChange={handleNoteChange} />
      <Button onClick={handleAddNote}>Add Note</Button>
      <ul>
        {fingering.map((note, index) => (
          <li key={index}>
            <Card style={{alignItems: 'center', height: '150px', color: 'blue', fontFamily: 'serif', fontSize: '20px', paddingLeft: '30px', width: '200px'}}>
                {note}
              <Grid container spacing={7} style={{paddingLeft: '150px'}}>
              <Button style={{backgroundColor: 'red', color: 'white', float: 'right'}} onClick={() => handleRemoveNote(index)}>Remove</Button><br/>
              </Grid>
            </Card><br/>
          </li>
        ))}
      </ul>
      <Button onClick={handleAddEndBar}>Add Final Bar</Button>
      <div>
      {figureEnd.map((fig, index) => (
        <div key={index}>
          <Card style={{margin: '30px'}}>
            {fig}
            <Button onClick={handleRemoveEndBar}>Remove Bar</Button>
          </Card>
        </div>
      ))}
      </div>
    </div>
  );
};

export default ViolinFingeringTrainer;