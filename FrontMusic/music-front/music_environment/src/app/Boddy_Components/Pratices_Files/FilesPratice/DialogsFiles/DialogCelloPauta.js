import React, { useState } from 'react';
import { Avatar, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { Button } from 'antd';
import ClaveStudier from '../ClaveStudy';
import { Toaster, toast } from 'react-hot-toast';


function DialogClaves() {
    const [open, setOpen] = useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      toast.success('Getting out the system...');
      setOpen(false);
    };

    const ConfirmAlertShow = () => {
      toast.success('Confirming the datas...');
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
            <ClaveStudier/>
          </DialogContent>
          <DialogActions>
            <Button style={{backgroundColor: 'red', color: 'white'}} onClick={handleClose} color="primary">
              Close
            </Button>
            <Button style={{backgroundColor: 'Highlight', color: 'white'}} onClick={ConfirmAlertShow} color="primary" autoFocus>
              Confirm
            </Button>
          </DialogActions>
          <Toaster/>
        </Dialog>
      </div>
    );
  }
  
  export default DialogClaves;