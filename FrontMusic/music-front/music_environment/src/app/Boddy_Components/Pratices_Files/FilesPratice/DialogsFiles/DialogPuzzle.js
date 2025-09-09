import React, { useState } from 'react';
import { Avatar, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { Button } from 'evergreen-ui';
import SoundAndDraw from '../Interact2d';

function DialogPuzzle() {
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
        Open the sound and draw
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="dialog-title">
        <DialogTitle id="dialog-title"><Avatar style={{width: '150px', height: '150px', borderStyle: 'double', borderColor: 'blue', backgroundColor: 'lightgreen'}} variant='square' src='https://c8.alamy.com/comp/2A29DR5/3d-thief-on-phone-surrounded-by-a-forbidden-sign-illustration-with-isolated-white-background-2A29DR5.jpg'/></DialogTitle>
        <DialogContent style={{backgroundColor: 'midnightblue'}}>
          <SoundAndDraw/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default DialogPuzzle;