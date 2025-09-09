import React, { useState } from 'react';
import { Avatar, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { Button } from 'antd';
import AppId from '../../../identifierNotes';


function DialogCelloEx() {
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
          <DialogTitle id="dialog-title"><Avatar style={{width: '150px', height: '150px', borderStyle: 'double', borderColor: 'blue', backgroundColor: 'lightgreen'}} variant='square' src='https://c8.alamy.com/comp/2A29DR5/3d-thief-on-phone-surrounded-by-a-forbidden-sign-illustration-with-isolated-white-background-2A29DR5.jpg'/></DialogTitle>
          <DialogContent style={{backgroundColor: 'midnightblue'}}>
            <AppId/>
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
  
  export default DialogCelloEx;