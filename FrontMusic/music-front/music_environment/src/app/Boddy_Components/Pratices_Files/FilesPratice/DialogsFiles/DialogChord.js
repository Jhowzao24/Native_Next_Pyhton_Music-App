import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { Button } from 'antd';
import avatar from '../ImagesPratices/avatar.png';
import NoteTrainer from '../../../Avaliation_Files/Pratice_Avaliations/Notes_Pratice';

function TrainerNoteDialog() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button type="primary" onClick={handleClickOpen}>
        Abrir diálogo
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="dialog-title">
        <DialogTitle id="dialog-title"><img style={{width: '200px'}} src={avatar} alt='avatar'/></DialogTitle>
        <DialogContent style={{backgroundColor: 'midnightblue'}}>
          <NoteTrainer/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Fechar
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default TrainerNoteDialog;