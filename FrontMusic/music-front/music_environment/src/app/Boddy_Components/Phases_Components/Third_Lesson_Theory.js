import { CardMedia, Card, Fab, Grid, Paper, Stack, ListItem, Divider, Alert, Button, Box } from '@mui/material';
import React, { useState, useEffect } from 'react';
import Popup from 'reactjs-popup';
import QuizzThreePhase from '../Avaliation_Files/Theory_Quizz/Quizz_Phase_Three';
export default function TerçaFase(){
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
    return(
      <div>
        <Button onClick={openModal}>Abrir Janela</Button>

        {isOpen && (
            <div style={styles.overlay}>
                <div style={styles.content}>
                    <Fab style={{width: '30px', height: '30px', backgroundColor: 'red', color: 'white', fontFamily: 'fantasy', fontSize: '25px'}} onClick={closeModal}>x</Fab>
                    <FaseTres/>
                </div>
            </div>
        )}
      </div>
    )
  };

  const styles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fundo semi-transparente
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000, // Garante que o modal fique acima de outros elementos
    },
    content: {
      width: '100%',
      height: '100%',
      backgroundColor: '#fff',
      padding: '20px',
      boxSizing: 'border-box',
      overflowY: 'auto', // Permite scroll caso o conteúdo ultrapasse a altura da tela
    },
}

  const notesTreble = [
    { id: 1, note: 'C/DÓ' },
    { id: 2, note: 'C#/DÓ#' },
    { id: 3, note: 'D/RÉ' },
    { id: 4, note: 'D#/RÉ#' },
    { id: 5, note: 'E/MI' },
    { id: 6, note: 'F/FÁ' },
    { id: 7, note: 'F#/FÁ#' },
    { id: 8, note: 'G/SOL' },
    { id: 9, note: 'G#/SOL#' },
    { id: 10, note: 'A/LÁ' },
    { id: 11, note: 'A#/LÁ' },
    { id: 12, note: 'B/SI' }
  ];
  const notesBass = [
    { id: 1, note: 'E2/MI' },
    { id: 2, note: 'F2/FÁ' },
    { id: 3, note: 'G2/SOL' },
    { id: 4, note: 'A2/LÁ' },
    { id: 5, note: 'B2/SI' },
    { id: 6, note: 'C3/DÓ' },
    { id: 7, note: 'D3/RÉ' },
    { id: 8, note: 'E3/MI' },
    { id: 9, note: 'F3/FÁ' },
    { id: 10, note: 'G3/SOL' },
    { id: 11, note: 'A3/LÁ' },
    { id: 12, note: 'B3/SI' }
  ];

  const notesBassle = [
    { id: 1, note: 'D1/RÉ' },
    { id: 2, note: 'E1/MI' },
    { id: 3, note: 'F1/FÁ' },
    { id: 4, note: 'G2/SOL' },
    { id: 5, note: 'A2/LÁ' },
    { id: 6, note: 'B2/SI' },
    { id: 7, note: 'C2/DÓ' },
    { id: 8, note: 'D3/RÉ' },
    { id: 9, note: 'E3/MI' },
    { id: 10, note: 'F3/FÁ' },
    { id: 11, note: 'G3/SOL' },
    { id: 12, note: 'A4/LÁ' }
  ];

  const clefs = [
    { id: 'treble', name: 'SOL' },
    { id: 'bass', name: 'FÁ' },
    { id: 'bassle', name: 'DÓ'}
  ];

function FaseTres(){
  const [selectedNote, setSelectedNote] = useState(null);
  const [selectedClef, setSelectedClef] = useState(clefs[0].id);
  const [notes, setNotes] = useState(notesTreble);

  useEffect(() => {
    if (selectedClef === 'treble') {
      setNotes(notesTreble);
    } else if (selectedClef === 'bass') {
      setNotes(notesBass);
    }else if(selectedClef === 'bassle'){
      setNotes(notesBassle)
    }
  }, [selectedClef]);

  const renderClefIcon = (clefId) => {
    switch (clefId) {
      case 'treble':
        return '🎼';
      case 'bass':
        return '🎻';
      case 'bassle':
        return 'DÓ';
      default:
        return null;
    }
  };

  const handleNoteClick = (note) => {
    setSelectedNote(note);
  };
  const handleClefChange = (event) => {
    setSelectedClef(event.target.value);
  };
  const style = {
    position: 'absolute',
    top: '100px',
    left: '100px',
    transform: 'translate(-50%, -50%)',
    width: 500,
    height: 200,
    bgcolor: 'midnightblue',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  return(
    <CardMedia style={{backgroundColor: 'midnightblue', width: '1300px', height: '700px'}}>
      <img alt='music' style={{width:'100px', height: '100px', borderRadius: '30px',
        paddingRight: '10px', backgroundColor: 'yellow', paddingLeft: '10px'}}
        src='https://th.bing.com/th/id/OIP.c_yCvxMR4I_4jYtlSwTH1AHaHa?pid=ImgDet&rs=1'/>
      <h1 style={{float: 'right', paddingRight: '50px', color: 'yellow'}}>Phase 3</h1>
      <br/><hr/>
      <Card style={{backgroundColor: 'gold', height: '200px'}}>
        <center><Paper>Endecagram</Paper></center>
        <h5>On case we wanna to write by example, a note Dó, sounding at the medium region, lets see it in each scale</h5>
        <Grid style={{paddingLeft: '70px'}}>
          <Popup trigger={<Fab>Sun</Fab>}>
            <Card style={{width: '900px', height: '500px'}} >
              <h3>And now... about the Endecagram,</h3>
              <hr/>
              <Stack direction='row' spacing={5}>
                <ListItem>And now... about the Endecagram,</ListItem>
                <ListItem style={{width: '500px'}}><li>The clave is a signal that determine the  wrote note at your referencial line</li></ListItem>
                <ListItem>So the clave determine the height of the sound and the note</ListItem>
              </Stack>
              <h4>The Dó 3nd note at a three different claves, on different positions, but sounds the same sound</h4>
              <Stack direction='row' spacing={5}>
                <ListItem><img style={{width: '200px', height: '200px', borderRadius: '50px'}} src='https://th.bing.com/th/id/R.b3e733934ac1bb403b62dcce5a4759d9?rik=azLGIcZUhlEzzg&pid=ImgRaw&r=0' alt='solclave'/></ListItem>
              </Stack>
            </Card>
          </Popup>
        </Grid>
        <Grid style={{float: 'right', paddingLeft: '410px'}} container spacing={7}>
          <Popup trigger={<Fab>Dó</Fab>}>
            <Card style={{width: '900px', height: '500px'}} >
              <h3>And now... about the Endecagram,</h3>
              <hr/>
              <Stack direction='row' spacing={5}>
                <ListItem>And now... about the Endecagram,</ListItem>
                <ListItem style={{width: '500px'}}><li>The clave is a signal that determine the  wrote note at your referencial line</li></ListItem>
                <ListItem>So the clave determine the height of the sound and the note</ListItem>
              </Stack>
                <h4>The Dó 3nd note at a three different claves, on different positions, but sounds the same sound</h4>
              <Stack direction='row' spacing={5}>
              <ListItem><img style={{width: '270px', height: '200px', borderRadius: '50px'}} src='https://th.bing.com/th/id/OIP.eJq4u_C0QZP891dVUEIb1wHaDt?pid=ImgDet&rs=1' alt='doclave'/></ListItem>
            </Stack>
          </Card>
        </Popup>
      </Grid>
      <Grid style={{float: 'right', paddingLeft: '700px'}} container spacing={7}>
        <Popup trigger={<Fab>Fá</Fab>}>
          <Card style={{width: '900px', height: '500px'}} >
            <h3>And now... about the Endecagram,</h3>
            <hr/>
            <Stack direction='row' spacing={5}>
              <ListItem>And now... about the Endecagram,</ListItem>
              <ListItem style={{width: '500px'}}><li>The clave is a signal that determine the  wrote note at your referencial line</li></ListItem>
              <ListItem>So the clave determine the height of the sound and the note</ListItem>
            </Stack>
            <h4>The Dó 3nd note at a three different claves, on different positions, but sounds the same sound</h4>
            <Stack direction='row' spacing={5}>
              <ListItem><img style={{width: '200px', height: '200px', borderRadius: '50px'}} src='https://th.bing.com/th/id/R.418b702b7049cbc807c21ac397a519f9?rik=zOvnCPyCLpoqvQ&riu=http%3a%2f%2fwww.escribircanciones.com.ar%2fimages%2fteoriamusical%2fClavesMusicales%2fClave-de-fa-3ra-en-el-pentagrama.png&ehk=U6kgtvquE9zZnLeE3F1%2bZncuIGRVhbo2aSO78lhuFBE%3d&risl=&pid=ImgRaw&r=0' alt='faclave'/></ListItem>
            </Stack>
          </Card>
        </Popup>
      </Grid>
      <Divider/>
      <hr/><br/>
      <hr style={{borderColor: 'midnightblue'}}/>
    </Card>
    <div style={{paddingLeft: '300px'}}>
      <Popup placement='top' trigger={<Button style={{backgroundColor: 'cyan', color: 'midnightblue', fontFamily: 'fantasy'}}>Quizz Third Phase</Button>}>
        <Box sx={style}>
          <Alert style={{backgroundColor: 'cyan'}}>
            <QuizzThreePhase/>
          </Alert>
        </Box>
      </Popup>
      </div>
      <Grid container spacing={5} style={{paddingLeft: '550px'}}>
      <div>
        <label style={{color: 'white'}} htmlFor="clef-select">Choice a clave: </label>
        <select id="clef-select" onChange={handleClefChange} value={selectedClef}>
          {clefs.map((clef) => (
            <option key={clef.id} value={clef.id}>
              {renderClefIcon(clef.id)} {clef.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <h1>Musical Endecagrama</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {notes.map((note) => (
            <Button
              key={note.id}
              onClick={() => handleNoteClick(note)}
              style={{
                margin: '10px',
                padding: '20px',
                backgroundColor: selectedNote === note ? 'lightblue' : 'white'
              }}
            >
              {note.note}
            </Button>
          ))}
        </div>
        {selectedNote && (
          <div style={{backgroundColor: 'blue', color: 'white', borderRadius: '30px', margin: '30px'}}>
            <Box sx={{ marginTop: 0.5 }}>
              <h2>Selected note!!</h2>
              <p>{selectedNote.note}</p>
              <p>Clave: {clefs.find((clef) => clef.id === selectedClef).name}</p>
            </Box>
          </div>
        )}
      </div>
      </Grid>
    </CardMedia>
  )
}