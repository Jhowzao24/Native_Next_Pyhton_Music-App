import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { Button } from 'evergreen-ui';
import NotesAndFigures from '../../../Figures_Lists/List_Of_Figures';
import avatar from '../ImagesPratices/avatar.png';

function DialogNotesFigures() {
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
          Open the Progress
        </Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="dialog-title">
          <DialogTitle id="dialog-title"><img style={{width: '200px'}} src={avatar} alt='avatar'/></DialogTitle>
          <DialogContent style={{backgroundColor: 'dodgerblue'}}>
            <NotesAndFigures/>
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
  
  export default DialogNotesFigures;