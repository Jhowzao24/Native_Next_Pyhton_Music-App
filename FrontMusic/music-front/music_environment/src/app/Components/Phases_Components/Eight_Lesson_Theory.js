/* eslint-disable @next/next/no-img-element */
import { Divider, Paper, Tooltip, Button, Grid, Fab } from '@mui/material';
import React, { useState } from 'react';
import CircleIcon from '@mui/icons-material/Circle';
import QuizzOito from '../Avaliations_Files/TeoryAvaliationsQuizz/QuizzPhaseEight';
import { motion } from 'framer-motion';

export default function EithFase(){
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
                    <FaseOito/>
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



function FaseOito(){
    const [content, setContent] = useState('');
    const handleAddContent = () => {
        const newContent = prompt('Write anything here:');
        setContent(content + '' +newContent);
    }
    const bequadro = (
        <div style={{backgroundColor: 'cyan', color: 'blue', margin: '-60px'}}>
            <motion.div
            initial={{scale: 0}}
            animate={{scale: 1}}
            transition={{duration: 5}}>
            <h3>Bequadro</h3>
            <h4>The bequadro will annul the effect of all alterations that is putted in the middleof the any each compasso in the music, making the note turn back to the natural state!</h4>
            </motion.div>
        </div>
    )
    const doubleBemol = (
        <div style={{backgroundColor: 'Highlight', color: 'purple', margin: '-60px'}}>
            <motion.div
            initial={{rotateX: -180, rotateY: 180}}
            animate={{rotateX: 0, rotateY: 0}}
            transition={{duration: 5}}
            >
            <h1>Folded Bemol</h1>
            <h2>The folded bemol will fold the note to 2 semitones, but this accidents will alternate the tone sound of the note down, and it will not make like the sustenido the elevate the tone note to up</h2>
            <img style={{width: '300px', height: '70px'}} src='https://th.bing.com/th/id/R.acb87e0ecba1334935386195efb1eb55?rik=ts6lQJjBiXChBg&pid=ImgRaw&r=0' alt='bemolDouble'/>
            </motion.div>
        </div>
    )
    const doubleSuste = (
        <div style={{backgroundColor: 'purple', color: 'Highlght', margin: '-60px'}}>
            <motion.div
            initial={{rotateY: -200, rotateX: -200}}
            animate={{rotateY: 0, rotateX: 0}}
            transition={{duration: 6}}
            >
            <h2>Folded Sharp</h2>
            <p>This will elevate the height of the note to 2(2 semitones= 1 Tone) semitone of the note</p>
            <img style={{width: '300px', height: '50px'}} src='https://keeponplaying.com.br/wp-content/uploads/2020/05/untitled-1024x164.png' alt='dbradosus'/>
            <p>As you can to see here, the note that is alterated is LÁ, but to the next compasso the note with a different name and height, significate the same content that the note that is being alterated to the last compasso</p>
            </motion.div>
        </div>
    )
    const scalesalterSucc = (
        <div style={{width: '350px', backgroundColor: 'WindowFrame', margin: '-60px'}}>
            <motion.div
            initial={{x: 650, rotateX: -180, rotateY: 180}}
            animate={{x: 0, rotateX: 0, rotateY: 0}}
            transition={{duration: 3}}
            >
            <img style={{width: '300px', height: '150px'}} src='https://th.bing.com/th/id/OIP.VZSQksL2oBgObIF7qs9cMQHaCI?pid=ImgDet&rs=1' alt='dosucc'/>
            <p>The above image is the DÓ success scale, and the below scale is the alternative notes but it is based on the DÓ scale</p>
            <img style={{width: '300px', height: '150px'}} src='https://th.bing.com/th/id/OIP.XoBMQtteMRWT7i5wRp8VBQHaD4?pid=ImgDet&rs=1' alt='doaltern'/>
            </motion.div>
        </div>
    )
    return(
        <div style={{borderColor: 'blue', borderStyle: 'double', width: '1300px', backgroundColor: 'black'}}>
            <Paper style={{margin: '20px', backgroundColor: 'dodgerblue', borderStyle: 'double', borderColor: 'blue'}}>
                <center style={{margin: '20px'}}>
                    <h1>Tonality</h1>
                    <fieldset style={{borderColor: 'magenta'}}>
                        <p>This is the organization of musical composition in relation to the principal note of the scale(I - Tonic)</p>
                        <h4>When the musical piece use essentialtly the notes of a specific scale , we say that it is in the tonality of this scale!<br/>Once we know the tonalities, we still know what degrees of this scale will be the tones most important and doninants at that musical piece</h4>
                        <ul style={{paddingLeft: '200px'}}>
                        <div style={{paddingLeft: '10px', backgroundColor: 'blue', color: 'white', margin: '10px'}}>
                            <h5>Look it, by example, thta one tonality of SOL Major, the tonal center is the note SOL, it is, every music turns in torn of this note.<br/>You can percept that, in some  musics the voice of the bass is the tonic because this pass to us the impress that the whole music goes down there</h5>
                        </div>
                        </ul>
                        <ul style={{paddingLeft: '200px'}}>
                            <div style={{backgroundColor: 'blue', color: 'white', margin: '10px'}}>
                                <h5>The  tonalities  can be major or minor. Major Tonality refer to the majores scales, Minor Tonalities refer to the minor scales<br/>and, the tonailities has the same conjunt of notes and accidents the scale, but is not require, necessarily that your notes be successives(As it is thescale), maighting be alternates</h5>
                                <Tooltip arrow placement='right-start' title={scalesalterSucc}>
                                    <p style={{fontFamily: 'serif', color: 'yellow'}}>Alternate and Success scales</p>
                                </Tooltip>
                            </div>
                        </ul>
                    </fieldset>
                    <br/>
                    <Divider style={{borderColor: 'black'}}/>
                    <center><h1>Accidents of precaution</h1></center>
                    <fieldset>
                        <h3>Accidents Occurring</h3>
                        <h4>This accidents are putted to the left side of the notes, and it change this note and all degree of the same note and the same height inside that compasso</h4>
                        <h5>Than the bemol and the sustenido, we have the followed accidents occurred</h5>
                        <Tooltip arrow placement='top-start' title={doubleSuste}>
                            <img style={{width: '50px', height: '50px', float: 'left'}} src='https://th.bing.com/th/id/R.17ce90a1b4839dd69ad403b2edaa4ffd?rik=jdk64ymJ6Ath2g&pid=ImgRaw&r=0' alt='dobradosus'/>
                        </Tooltip>
                        <Tooltip arrow placement='top-start' title={doubleBemol}>
                            <img style={{width: '50px', height: '50px', float: 'right'}} src='https://th.bing.com/th/id/OIP.73mB6eeq5uMOinSdn0nQyQAAAA?rs=1&pid=ImgDetMain' alt='dobradoBemol'/>
                        </Tooltip>
                        <Tooltip arrow placement='top-start' title={bequadro}>
                            <img style={{width: '50px', height: '50px'}} src='https://th.bing.com/th/id/R.9a34876e0fdff1ac8477eafa38d8b479?rik=k%2fx0tFhLUbyrTg&riu=http%3a%2f%2fbequadros.com.br%2fwp-content%2fuploads%2f2015%2f02%2fBequadro1.jpg&ehk=kW5Yc%2fWoA81XU4iYN6NWpZVvmnYkr%2bNn4VtZMc%2byYsg%3d&risl=&pid=ImgRaw&r=0' alt='bequadro'/>
                        </Tooltip>
                        <br/>
                        <Divider/>
                        <h3>Lets pratice some exercises of solfege</h3>
                        <details><summary>A few exercise</summary>
                        <p>Type the #, b, X and bb at a time when you click the button, you will see the side that the element will be putted</p>
                        <Button style={{backgroundColor: 'black', float: 'right'}} onClick={handleAddContent}>Add #</Button>
                        <img style={{width: '400px', height: '110px'}} src='https://th.bing.com/th/id/OIP.9LQllvVcQujQfTq6GnJcPgHaCo?pid=ImgDet&rs=1' alt='pentagram'/>
                        <Grid container spacing={21.5}>
                            <h3 style={{paddingLeft: '700px'}}>{content}<CircleIcon/></h3>
                        </Grid>
                        <p>As you could to see, You added a signal of accident / #, b, X or bb, But you see on where this signalwill appear at the pentagram notes!</p>
                        <h5>Follow the next Quizz bellow to maintain your knowledges!</h5>
                        <QuizzOito/>
                        </details>
                    </fieldset>
                </center>
            </Paper>
        </div>
    )
}