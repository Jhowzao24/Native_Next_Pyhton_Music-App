import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { Button } from 'antd';
import avatar from '../ImagesPratices/avatar.png';
import MusicQuiz from '../../../Avaliation_Files/Pratice_Avaliations/Quizz_Games/Test_Music_Quizz';
import {Avatar} from 'evergreen-ui';

function DialogMusicQuizzes() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAlertClose = () => {
    setOpen(false);
    alert(`You got all the answers righted!`);
  }

  return (
    <div>
      <Button type="primary" onClick={handleClickOpen}>
        Abrir diálogo
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="dialog-title">
        <DialogTitle id="dialog-title"><Avatar style={{borderColor: 'blue', borderStyle: 'double', width: '150px', height: '150px', backgroundColor: 'lightgreen'}} variant='circular' src={avatar}/></DialogTitle>
        <DialogContent style={{backgroundColor: 'midnightblue'}}>
          <MusicQuiz/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Fechar
          </Button>
          <Button onClick={handleAlertClose} color="primary" autoFocus>
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default DialogMusicQuizzes;