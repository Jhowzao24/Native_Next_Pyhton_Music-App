import React, { useState } from 'react';
import { Avatar, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { Button } from 'antd';
import GameCompass from '../../../Avaliation_Files/Pratice_Avaliations/Test_CompassTrainer';
import toast, { Toaster } from 'react-hot-toast';

function DialogTestCompass() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    toast.error('Getting out the system...');
    setOpen(false);
  };

  const handleClosing = () => {
    toast.success('Datas confirmed!');
    setOpen(false);
  }

  return (
    <div>
      <Button type="primary" onClick={handleClickOpen}>
        Compass Exercise
      </Button>
      <Dialog open={open} onClose={handleClose} title="My Custom Dialog">
        <DialogTitle id="dialog-title"><Avatar style={{width: '300px'}} src='https://cdn.statically.io/img/www.aprendateclado.com/f=auto&q=90&w=1200/wp-content/uploads/2017/10/3-Na-pauta.jpg' alt='avatares'/></DialogTitle>
        <DialogContent style={{backgroundColor: 'midnightblue'}}>
          <GameCompass/>
        </DialogContent>
        <DialogActions>
          <Button style={{backgroundColor: 'red', color: 'white'}} onClick={handleClose} color="primary">
            Close
          </Button>
          <Button style={{backgroundColor: 'Highlight', color: 'white'}} onClick={handleClosing} color="primary" autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
      <Toaster/>
    </div>
  );
}

export default DialogTestCompass;