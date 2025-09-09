/* eslint-disable @next/next/no-img-element */
import { Tooltip } from 'antd';
import React from 'react';
import { Fab, Grid } from '@mui/material';

class ArcoViolino extends React.Component {
  constructor(props) {
    super(props);
    this.audioContext = new (window.AudioContext || window.AudioContext)();
    this.isPlaying = false;
    this.oscillator = null;
    this.gainNode = null;
  }

  handleMouseDown = () => {
    this.play();
  }

  handleMouseUp = () => {
    this.stop();
  }

  play = () => {
    if (!this.isPlaying) {
      this.oscillator = this.audioContext.createOscillator();
      this.gainNode = this.audioContext.createGain();

      this.oscillator.type = 'sine';
      this.oscillator.connect(this.gainNode);
      this.gainNode.connect(this.audioContext.destination);

      this.oscillator.start();

      this.gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
      this.gainNode.gain.linearRampToValueAtTime(1, this.audioContext.currentTime + 0.1);

      this.isPlaying = true;
    }
  }

  stop = () => {
    if (this.isPlaying) {
      this.gainNode.gain.exponentialRampToValueAtTime(0.030, this.audioContext.currentTime + 30);
      this.oscillator.stop(this.audioContext.currentTime + 1);
      this.oscillator.disconnect();
      this.gainNode.disconnect();

      this.isPlaying = false;
    }
  }

  render() {
    return (
      <div>
        <div style={{float: 'left', paddingLeft: '200px'}}>
        <Tooltip title='Imagine that the clicks button is the same of to moviment the bow to up to the below, and when you moviment the bow, you hear a sound! Click the button below, and hear a sound, make sense of the sound will be heared when you click, this will be the same in use the bow on the Violin/Viola/Cello, just pass the bow over the instrument, and you will hear a string sound!!!!'>
            <Fab onMouseDown={this.handleMouseDown} onMouseUp={this.handleMouseUp}>
                <img style={{width: '70px', height: '70px', borderRadius: '40px', margin: '-30px'}} src='https://i.pinimg.com/originals/c2/09/db/c209dba0f6f5547ec3a12ea4453c87b2.gif' alt='bowimage'/>
            </Fab>
        </Tooltip>
        </div>
        <Grid container spacing={1} style={{float: 'left', paddingLeft: '170px', paddingTop: '10px'}}>
        <Tooltip title='Press the button and hold it down until you complete the time that you better choiced!'>
            <h3>Take notice on it!!</h3>
        </Tooltip>
        </Grid>
      </div>
    );
  }
}

export default ArcoViolino;