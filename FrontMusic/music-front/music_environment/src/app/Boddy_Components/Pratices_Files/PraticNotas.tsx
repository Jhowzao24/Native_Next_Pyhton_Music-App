import React, {useState} from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Tooltip } from '@mui/material';
import { Button, Divider } from 'antd';
import { Fab } from '@mui/material';
import { Toaster, toast } from 'react-hot-toast';



const Violin: React.FC = () => {
  const playNote = (frequency: number) => {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    oscillator.type = 'sine'; // Pode experimentar com outros tipos de ondas
    oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
    oscillator.connect(audioContext.destination);
    oscillator.start();
    setTimeout(() => oscillator.stop(), 500); // Ajuste o tempo de duração do som
  };

  const handleClickNote = (frequency: number) => {
    playNote(frequency);
  };

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
            Violin Scales
        </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="dialog-title">
        <DialogTitle id="dialog-title">Violin Scales</DialogTitle>
        <DialogContent style={{backgroundColor: 'midnightblue'}}>
        <div style={{color: 'cyan'}}>
        <h3>Natural notes/ Dó Scale</h3>
        <Divider style={{borderColor: 'Highlight'}}/>
        <details><summary>Loose Violin strings</summary>
            <Tooltip title='Bass violin string loose'>
                <Fab onClick={() => handleClickNote(190.63)}>SOL</Fab>
            </Tooltip>
            <Tooltip title='RÉ, Second string in violin!'>
                <Fab onClick={() => handleClickNote(293.66)}>RÉ</Fab>
            </Tooltip>
            <Tooltip title='LÁ, Third String on the violin'>
                <Fab onClick={() => handleClickNote(440.00)}>LÁ</Fab>
            </Tooltip>
            <Tooltip title='MI, Fourth String on the violin, Higher-pitched string'>
                <Fab onClick={() => handleClickNote(645.63)}>MI</Fab>
            </Tooltip>
        </details>
        <Divider style={{borderColor: 'Highlight'}}/>
        <details><summary>Scale in SOL Major</summary>
        <Tooltip title='Bass violin string loose'>
         <Fab onClick={() => handleClickNote(196.00)}>SOL</Fab>
        </Tooltip>
        <Tooltip title='LÁ, first finger on the SOL string'>
            <Fab onClick={() => handleClickNote(220.00)}>LÁ</Fab>
        </Tooltip>
        <Tooltip title='SI, second finger on the SOL string, away from the first finger'>
            <Fab onClick={() => handleClickNote(246.94)}>SI</Fab>
        </Tooltip>
        <Tooltip title='DÓ, Third finger on the SOL string'>
            <Fab onClick={() => handleClickNote(261.63)}>DÓ</Fab>
        </Tooltip>
        <Tooltip title='RÉ, fourth finger on the SOL string, or the loose next string'>
            <Fab onClick={() => handleClickNote(293.66)}>RÉ</Fab>
        </Tooltip>
        <Tooltip title='MI, first finger on the RÉ string'>
            <Fab onClick={() => handleClickNote(329.63)}>MI</Fab>
        </Tooltip>
        <Tooltip title='FÁ, second finger on the RÉ string'>
            <Fab onClick={() => handleClickNote(369.99)}>FÁ</Fab>
        </Tooltip>
        <Tooltip title='SOL, Third finger on the RÉ string, the last note in the scale'>
            <Fab onClick={() => handleClickNote(392.00)}>SOL</Fab>
        </Tooltip>
        </details>
        <Divider style={{borderColor: 'Highlight'}}/>
        <details><summary>Scale Bass LÁ</summary>
            <Fab onClick={() => handleClickNote(220.00)}>LÁ</Fab>
            <Fab onClick={() => handleClickNote(246.94)}>SI</Fab>
            <Fab onClick={() => handleClickNote(277.18)}>#DÓ</Fab>
            <Fab onClick={() => handleClickNote(293.66)}>RÉ</Fab>
            <Fab onClick={() => handleClickNote(329.63)}>MI</Fab>
            <Fab onClick={() => handleClickNote(369.99)}>#FÁ</Fab>
            <Fab onClick={() => handleClickNote(415.30)}>#SOL</Fab>
            <Fab onClick={() => handleClickNote(440.00)}>LÁ</Fab>
        </details>
        <Divider style={{borderColor: 'Highlight'}}/>
        <details><summary>Scale DÓ</summary>
            <Fab onClick={() => handleClickNote(261.63)}>DÓ</Fab>
            <Fab onClick={() => handleClickNote(293.66)}>RÉ</Fab>
            <Fab onClick={() => handleClickNote(329.63)}>MI</Fab>
            <Fab onClick={() => handleClickNote(349.23)}>FÁ</Fab>
            <Fab onClick={() => handleClickNote(392.00)}>SOL</Fab>
            <Fab onClick={() => handleClickNote(440.00)}>LÁ</Fab>
            <Fab onClick={() => handleClickNote(493.88)}>SI</Fab>
            <Fab onClick={() => handleClickNote(523.25)}>DÓ</Fab>
            <Divider style={{borderColor: 'Highlight'}}/>
            <p>Sharped notes</p>
            <Fab onClick={() => handleClickNote(270.50)}>DÓ#</Fab>
            <Fab onClick={() => handleClickNote(310.66)}>RÉ#</Fab>
            <Fab onClick={() => handleClickNote(329.63)}>MI</Fab>
            <Fab onClick={() => handleClickNote(359.23)}>FÁ#</Fab>
            <Fab onClick={() => handleClickNote(425.00)}>SOL#</Fab>
            <Fab onClick={() => handleClickNote(453.00)}>LÁ#</Fab>
            <Fab onClick={() => handleClickNote(453.00)}>SIb</Fab>
            <Fab onClick={() => handleClickNote(540.25)}>DÓ#</Fab>
        </details>
        <Divider style={{borderColor: 'Highlight'}}/>
        <details><summary>Scale RÉ</summary>
            <Fab onClick={() => handleClickNote(293.66)}>RÉ</Fab>
            <Fab onClick={() => handleClickNote(329.63)}>MI</Fab>
            <Fab onClick={() => handleClickNote(369.99)}>#FÁ</Fab>
            <Fab onClick={() => handleClickNote(392.00)}>SOL</Fab>
            <Fab onClick={() => handleClickNote(440.00)}>LÁ</Fab>
            <Fab onClick={() => handleClickNote(493.88)}>SI</Fab>
            <Fab onClick={() => handleClickNote(554.37)}>#DÓ</Fab>
            <Fab onClick={() => handleClickNote(587.33)}>RÉ</Fab>
        </details>
      </div>
        </DialogContent>
        <DialogActions>
          <Button style={{backgroundColor: 'red', color: 'white'}} onClick={handleClose} color="primary">
            Fechar
          </Button>
          <Button style={{backgroundColor: 'Highlight', color: 'white'}} onClick={ConfirmAlertShow} color="primary" autoFocus>
            Confirmar
          </Button>
        </DialogActions>
        <Toaster/>
      </Dialog>
    </div>
  );
};

export default Violin;