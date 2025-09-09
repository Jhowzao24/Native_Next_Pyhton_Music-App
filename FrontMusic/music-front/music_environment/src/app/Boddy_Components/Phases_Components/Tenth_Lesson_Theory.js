import { Button, Divider, Grid, Paper, Tooltip, Fab } from '@mui/material';
import React, { useState } from 'react';
import intensit from '../Phases_Components/Phase_Image/intensit.png';
import Popup from 'reactjs-popup';
import QuizzDez from '../Avaliation_Files/Theory_Quizz/Quizz_Phase_Ten';


export default function DecimaFase(){
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
    return(
      <div>
        <header>
        <Button onClick={openModal}>Abrir Janela</Button>
        {isOpen && (
            <div style={styles.overlay}>
                <div style={styles.content}>
                    <Fab style={{width: '30px', height: '30px', backgroundColor: 'red', color: 'white', fontFamily: 'fantasy', fontSize: '25px'}} onClick={closeModal}>x</Fab>
                    <FaseDez/>
                </div>
            </div>
        )}
        </header>
      </div>
    )
  }


  const styles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fundo semi-transparente
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000, // Garante que o modal fique acima de outros elementos
    },
    content: {
      width: '100%',
      height: '100%',
      backgroundColor: '#fff',
      padding: '20px',
      boxSizing: 'border-box',
      overflowY: 'auto', // Permite scroll caso o conteúdo ultrapasse a altura da tela
    },
}


function FaseDez(){
    const tip1 = [
        <div>
            <img style={{width: '450px', height: '300px'}} src={intensit} alt='intensidade'/>
        </div>
    ]
    const signalInt = [
        <div>
            <p>When the signal of increassing and decreassing do not have a dinamic espacificate, the interpreter must to grow up only a level or only down a level. By example, if it be sounding <i>"mp"</i>, and appear a signal of increassing, it must to climb to <i>"mf"</i>, and not to <i>"ff"</i> or <i>"fff"</i>. The dinamic is gradual</p>
            <img src='https://th.bing.com/th/id/R.9fb26b37a4786e6e374314673d2e69a3?rik=615VuyO5jUFGRQ&pid=ImgRaw&r=0' alt='sinalIndicate'/>
        </div>
    ]
    const signalsIndication = [
        <div>
            <h3>The signals of indication can to be considered by the followed signals below: 
                <ul>
                    <Divider/>
                    <p>When there is a signal of increassing and deacreassing, a lot times the composithor still indicate what is the begin dinamic and the end dinamic, when the interpreter has to depart of a pianissimo sound and to come a strongest sound to the end of the increassing signal</p>
                    <Divider/>
                    <img src='https://th.bing.com/th/id/R.3a6848628e767dafc65363d8b0764e37?rik=flOnL5j24RZmcg&riu=http%3a%2f%2folivamusic101.weebly.com%2fuploads%2f4%2f0%2f6%2f3%2f40631267%2f701009.jpg%3f487&ehk=1vJNvlti4qhfScbbk02XvcNnqO16GlszTgEX5EJ1D98%3d&risl=&pid=ImgRaw&r=0' alt='increassingDeacreassing'/>
                </ul>
            </h3>
        </div>
    ]
    return(
        <div style={{width: '1300px', height: '700px', backgroundColor: 'cadetblue'}}>
            <h1 style={{textAlign: 'center'}}>Dinamic</h1>
            <h4>What is this on real?
                <ul>
                    <h5>It is the variation of the sounds intensity of a gradual way, both to a strongest intensity both to a weakest intensity</h5>
                    <Divider style={{borderColor: 'blue'}}/>
                    <h5>The graduations of sounds intensity can to be to indicated at the scores, by abreviators from  italian terms, normaly putted at the under part of the pentagram, but it stills can to occur without any indication, of natural model, following the logic sense of the music</h5>
                </ul>
            </h4>
            <center><p>Pass the nouse above the texts to leran more</p></center>
            <Grid style={{paddingLeft: '20px'}}>
                <Tooltip arrow placmente='right-start' title={tip1}>
                    <i style={{width: '400px', backgroundColor: 'blue', borderRadius: '10px', color: 'gold', fontFamily: 'serif'}}>Dinamic Indication</i>
                </Tooltip>
            </Grid>
            <Grid style={{paddingLeft: '300px'}} container spacing={4}>
                <Tooltip title={signalsIndication}>
                    <p style={{backgroundColor: 'blue', color: 'gold', fontFamily: 'serif', borderRadius: '20px'}}>Signs by indication</p>
                </Tooltip>
            </Grid>
            <Grid style={{paddingLeft: '20px'}}>
                <Tooltip title={signalInt}>
                    <p style={{backgroundColor: 'blue', color: 'gold', fontFamily: 'serif', width: '360px', borderRadius: '20px'}}>Understanding of other way the increasssing and decreassing</p>
                </Tooltip>
            </Grid>
            <Popup trigger={<Button style={{backgroundColor: 'midnightblue', color: 'white', paddingLeft: '100px'}}>Increassing & decreassing</Button>}>
                <Paper style={{margin: '10px', backgroundColor: 'midnightblue', color: 'orangered', fontFamily: 'serif'}}>
                    <h3>At the concerts all the musics is organized by the maestors make the signal to grow the sound or to down the sound with their hands, and you musician must to compaing the maestor while he is doing it</h3>
                </Paper>
            </Popup>
            <center>
                <fieldset style={{borderRadius: '30px', margin: '30px', borderColor: 'dodgerblue'}}>
                    <QuizzDez/>
                </fieldset>
            </center>
        </div>
    )
}