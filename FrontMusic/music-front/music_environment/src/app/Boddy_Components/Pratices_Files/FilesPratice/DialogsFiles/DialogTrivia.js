import React, { useState } from 'react';
import { Avatar, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { Button } from 'antd';
import SongTrivia from '../../../Avaliation_Files/Pratice_Avaliations/ViolinTrivia';

function DialogTriviaSong() {
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
        <DialogTitle id="dialog-title"><Avatar style={{width: '150px', height: '150px', borderStyle: 'double', borderColor: 'blue', backgroundColor: 'lightgreen'}} variant='circular' src='https://media.istockphoto.com/vectors/traffic-prohibition-sign-for-smartphones-vector-id1173292895?k=6&m=1173292895&s=612x612&w=0&h=qMWG-ooZ6P7bJRADTT1cf5R3zrjFn_uQrXzZkdi3n_8='/></DialogTitle>
        <DialogContent style={{backgroundColor: 'midnightblue'}}>
          <SongTrivia/>
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

export default DialogTriviaSong;