import React, { useState } from 'react';
import { Avatar, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { Button } from 'antd';
import GameAccerts from '../../../Avaliation_Files/Pratice_Avaliations/Game_Pointer';

function DialogAcerts() {
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
        <DialogTitle id="dialog-title"><Avatar style={{width: '150px', height: '150px', borderStyle: 'double', borderColor: 'blue', backgroundColor: 'lightgreen'}} variant='square' src='https://th.bing.com/th/id/R.d82c05c40349ad6cf9549140837b2dae?rik=qOXrZdZp6Ugd4w&riu=http%3a%2f%2f1.bp.blogspot.com%2f-61KYS77OiCM%2fUABWk1VOczI%2fAAAAAAAAEuQ%2fIsxoxkERm0E%2fs1600%2ftarget(3).jpg&ehk=IFrgHccXPqiXQ4Y8XhKhVOhCgNmpJQGZ0Elgme0lyf8%3d&risl=&pid=ImgRaw&r=0'/></DialogTitle>
        <DialogContent style={{backgroundColor: 'midnightblue'}}>
          <GameAccerts/>
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

export default DialogAcerts;