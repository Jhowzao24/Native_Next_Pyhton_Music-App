import React, { useEffect, useState } from 'react';
import { Button, Paper, Grid, Alert, Card, Fab, Tooltip } from '@mui/material';
import Popup from 'reactjs-popup';
import Timbre from '../Phases_Components/Phase_Image/Timbre.jpg';
import duration from '../Phases_Components/Phase_Image/duration.jpeg';
import AltSound from '../Phases_Components/Phase_Image/AltSound.gif';
import intensit from '../Phases_Components/Phase_Image/intensit.png';
import giphyViolin from '../Phases_Components/Phase_Image/giphyViolin.gif';
import QuizzOneTime from '../Avaliation_Files/Theory_Quizz/Quizz_Phase_One';
import { motion } from 'framer-motion';
import NotesExercise from './PautaExercise/LineLessonPauta';
import { Carousel } from 'antd';

//import { toast, Toaster } from 'react-hot-toast';

const dataMusic = [
    {
        "id": 1,
        "DescriptionMusic": "The Music is the most beautifull form to express our feelings by the coordinated sounds made by voices and instruments!"
    },
    {
        "id": 2,
        "DescriptionMusic2": "Music is the knowledge of the Human that can to find in life, it is the understanding of the soul!",
        "DescMusicAdded1": "the music will be the feelings manifesting for who you can to accert, you have a person goal, to anyone, and you want to play a music, that the letters or the melody can touch their feelings, this is the object of the music!"
    },
    {
        "id": 3,
        "DescriptionMusic3": "You will got the music on the sense this bring, to make others dream and the others smile!!",
        "DescMusicAdded2": "If the sound music that you are playing touch the others feelings, you got it, you made it right! This is what most import for the music world!!"
    },
    {
        "id": 4,
        "DescriptionMusic4": "The lite of you instrument will appear when you play the notes that will form a melody and this will produce any different sounds!!"
    }
  ];

  const dataSound = [
    {
        "id": 1,
        "Description1": "Sound is all we hear, so... The sound is the the propagation of waves in the air"
    },
    {
        "id": 2,
        "Description2": "So, a beat, a duck making noises, a motor's cars making noises, an instrument playing, is sound!!"
    },
    {
        "id": 3,
        "Description3": "Sounds is all you hear!!"
    },
    {
        "id": 4,
        "Description4": "Noise is sound too!!"
    }
  ];

  const dataMelody = [
    {
        "id": 1,
        "DescriptionMelody": "It is the Successive of Sounds productions <b>||</b> <i>Could you remmember the queue"
    },
    {
        "id": 2,
        "DescriptionMelody2": "Melody is beautifull that will full your feelings or your mind"
    },
    {
        "id": 3,
        "DescriptionMelody3": "Melody is all the sequences sounds that make you follow a rithymic feel!!"
    },
    {
        "id": 4,
        "DescriptionMelody4": "Melody light the eyes on every where you go and play a music that will make the difference"
    }
  ];

  const dataHarmony = [
    {
        "id": 1,
        "DescriptionHarmony1": "First of all, it is the musical element that produce very sounds simultanially at the same time!"
    },
    {
        "id": 2,
        "DescriptionHarmony2": "Harmony can be look at when you hear two or three or more sounds than this at the same time ones!!"
    },
    {
        "id": 3,
        "DescriptionHarmony3": "Harmony is all the sequences sounds that made more than one note play simultanially!!",
        "DescHarmony3Complement": "In best words, when you hear a sound with very nstruments playing the different notes at the same time, this is a harmony"
    },
    {
        "id": 4,
        "DescriptionHarmony4": "Harmony, we have examples of harmony, that it demands on when you are walking with other person beside you and your feets are different, but it is toke at the same time, and when you are signing with anyone and this other person is singning other melody together you!"
    }
  ];

  const dataRhythm = [
    {
        "id": 1,
        "DescriptionRhythm1": "First of all, it is the musical element that produce very sounds simultanially at the same time!"
    },
    {
        "id": 2,
        "DescriptionRhythm2": "Rhythm will get you to every place you want to go, because when you make all the things on your rhythm you will well, and this is the enought way to check the best things in your life, at the music this will be the same form!!"
    },
    {
        "id": 3,
        "DescriptionRhythm3": "Harmony is all the sequences sounds that made more than one note play simultanially!!",
        "DescriptionRhythm3Complement": "In best words, when you hear a sound with very nstruments playing the different notes at the same time, this is a harmony"
    },
    {
        "id": 4,
        "DescriptionRhythm4": "Rhythm you can to see it in any where you go, a beat of a palms, heart beats, you have a lots of form to cognize a rhythm!"
    }
  ]

  // eslint-disable-next-line react-hooks/rules-of-hooks


export default function FirstComp(){
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
  return(
    <div>
        <Button onClick={openModal}>Open</Button>
      
        {isOpen && (
            <div style={styles.overlay}>
                <div style={styles.content}>
                    <Fab onClick={closeModal}>x</Fab>
                    <StudyFirst/>
                </div>
            </div>
        )}
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

export function StudyFirst(){
    useEffect(() => {
        /*const timeout = setTimeout(() => {
            setShowModal(true)
        }, 5000)*/
    }, [])
    const [count, setCount] = useState(0)
    useEffect(() => {
        document.createComment = `You clicked ${count} time`
    });
    const [opMusic, setOpMusic] = useState(false);
    const renderMusic = () => {
        if(opMusic === 1){
            return(
                <center>
                    <div style={{backgroundColor: 'black', color: 'cyan', fontSize: '10px', fontFamily: 'serif', borderRadius: '20px'}}>
                        {dataMusic.map(item => (
                            <div key={item.id}>
                                <h1>{item.DescriptionMusic}</h1>
                            </div>
                        ))}
                    </div>
                </center>
            );
        }else if(opMusic === 2){
            return(
                <center>
                    <div style={{backgroundColor: 'black', color: 'cyan', fontSize: '10px', fontFamily: 'serif', borderRadius: '20px'}}>
                        {dataMusic.map(item => (
                            <div key={item.id}>
                                <h1>{item.DescriptionMusic2}</h1>
                                <h3 style={{color: 'gold'}}>{item.DescMusicAdded1}</h3>
                            </div>
                        ))}
                    </div>
                </center>
            );
        }else if(opMusic === 3){
            return(
                <center>
                    <div style={{backgroundColor: 'black', color: 'cyan', fontSize: '10px', fontFamily: 'serif', borderRadius: '20px'}}>
                        {dataMusic.map(item => (
                            <div key={item.id}>
                                <h1>{item.DescriptionMusic3}</h1>
                                <h3>{item.DescMusicAdded2}</h3>
                            </div>
                        ))}
                    </div>
                </center>
            );
        }else if(opMusic === 4){
            return(
                <center>
                    <div style={{backgroundColor: 'black', color: 'cyan', fontSize: '10px', fontFamily: 'serif', borderRadius: '20px'}}>
                        {dataMusic.map(item => (
                            <div key={item.id}>
                                <h1>{item.DescriptionMusic4}</h1>
                            </div>
                        ))}
                    </div>
                </center>
            )
        }
    };
    const [opSound, setOpSound] = useState(false);
    const renderSound = () => {
        if(opSound === 1){
            return(
                <center>
                    <div style={{borderRadius: '30px', backgroundColor: 'black', color: 'gold', fontSize: '16px'}}>
                        {dataSound.map(item => (
                            <h3>{item.Description1}</h3>
                        ))}
                    </div>
                </center>
            )
        }else if(opSound === 2){
            return(
                <center>
                    <div style={{borderRadius: '30px', backgroundColor: 'black', color: 'gold', fontSize: '16px'}}>
                        {dataSound.map(item => (
                            <h3>{item.Description2}</h3>
                        ))}
                    </div>
                </center>
            )
        }else if(opSound === 3){
            return(
                <center>
                    <div style={{borderRadius: '30px', backgroundColor: 'black', color: 'gold', fontSize: '16px'}}>
                        {dataSound.map(item => (
                            <h3>{item.Description3}</h3>
                        ))}
                    </div>
                </center>
            )
        }else if(opSound === 4){
            return(
                <center>
                    <div style={{borderRadius: '30px', backgroundColor: 'black', color: 'gold', fontSize: '16px'}}>
                        {dataSound.map(item => (
                            <h3>{item.Description4}</h3>
                        ))}
                    </div>
                </center>
            )
        }
    };
    const [opMelody, setOpMelody] = useState(false);
    const renderMelody = () => {
        if(opMelody === 1){
            return(
                <center>
                    <div style={{backgroundColor: 'WindowFrame', color: 'Highlight', boxShadow: '0 0 5px 3px'}}>
                        {dataMelody.map(item => (
                            <h3>{item.DescriptionMelody}</h3>
                        ))}
                    </div>
                </center>
            )
        }else if(opMelody === 2){
            return(
                <center>
                    <div style={{backgroundColor: 'WindowFrame', color: 'Highlight', boxShadow: '0 0 5px 3px'}}>
                        {dataMelody.map(item => (
                            <h3>{item.DescriptionMelody2}</h3>
                        ))}
                    </div>
                </center>
            )
        }else if(opMelody === 3){
            return(
                <center>
                    <div style={{backgroundColor: 'WindowFrame', color: 'Highlight', boxShadow: '0 0 5px 3px'}}>
                        {dataMelody.map(item => (
                            <h3>{item.DescriptionMelody3}</h3>
                        ))}
                    </div>
                </center>
            )
        }else if(opMelody === 4){
            return(
                <center>
                    <div style={{backgroundColor: 'WindowFrame', color: 'Highlight', boxShadow: '0 0 5px 3px'}}>
                        {dataMelody.map(item => (
                            <h3>{item.DescriptionMelody4}</h3>
                        ))}
                    </div>
                </center>
            )
        }
    };
    const [opHarmony, setOpHarmony] = useState(false);
    const renderHarmony = () => {
        if(opHarmony === 1){
            return(
                <center>
                    <div style={{backgroundColor: 'WindowFrame', color: 'Highlight', boxShadow: '0 0 5px 3px'}}>
                        {dataHarmony.map(item => (
                            <h3>{item.DescriptionHarmony1}</h3>
                        ))}
                    </div>
                </center>
            )
        }else if(opHarmony === 2){
            return(
                <center>
                    <div style={{backgroundColor: 'WindowFrame', color: 'Highlight', boxShadow: '0 0 5px 3px'}}>
                        {dataHarmony.map(item => (
                            <h3>{item.DescriptionHarmony2}</h3>
                        ))}
                    </div>
                </center>
            )
        }else if(opHarmony === 3){
            return(
                <center>
                    <div style={{backgroundColor: 'WindowFrame', color: 'Highlight', boxShadow: '0 0 5px 3px'}}>
                        {dataHarmony.map(item => (
                            <div key={item.id}>
                                <h3>{item.DescriptionHarmony3}</h3>
                                <h3>{item.DescHarmony3Complement}</h3>
                            </div>
                        ))}
                    </div>
                </center>
            )
        }else if(opHarmony === 4){
            return(
                <center>
                    <div style={{backgroundColor: 'WindowFrame', color: 'Highlight', boxShadow: '0 0 5px 3px'}}>
                        {dataHarmony.map(item => (
                            <h3>{item.DescriptionHarmony4}</h3>
                        ))}
                    </div>
                </center>
            )
        }
    };
    const [opRhythm, setOpRhythm] = useState(false);
    const renderRhythm = () => {
        if(opRhythm === 1){
            return(
                <center>
                    <div style={{backgroundColor: 'WindowFrame', color: 'Highlight', boxShadow: '0 0 5px 3px'}}>
                        {dataRhythm.map(item => (
                            <h3>{item.DescriptionRhythm1}</h3>
                        ))}
                    </div>
                </center>
            )
        }else if(opRhythm === 2){
            return(
                <center>
                    <div style={{backgroundColor: 'WindowFrame', color: 'Highlight', boxShadow: '0 0 5px 3px'}}>
                        {dataRhythm.map(item => (
                            <h3>{item.DescriptionRhythm2}</h3>
                        ))}
                    </div>
                </center>
            )
        }else if(opRhythm === 3){
            return(
                <center>
                    <div style={{backgroundColor: 'WindowFrame', color: 'Highlight', boxShadow: '0 0 5px 3px'}}>
                        {dataRhythm.map(item => (
                            <div key={item.id}>
                                <h3>{item.DescriptionRhythm3}</h3>
                                <h4>{item.DescriptionRhythm3Complement}</h4>
                            </div>
                        ))}
                    </div>
                </center>
            )
        }else if(opRhythm === 4){
            return(
                <center>
                    <div style={{backgroundColor: 'WindowFrame', color: 'Highlight', boxShadow: '0 0 5px 3px'}}>
                        {dataRhythm.map(item => (
                            <h3>{item.DescriptionRhythm4}</h3>
                        ))}
                    </div>
                </center>
            )
        }else if(opRhythm === 5){
            return(
                <div>
                    <Tooltip style={{backgroundColor: 'midnightblue'}} title={count}>
                        <Button style={{fontSize: '12px', fontFamily: 'serif', color: 'lightblue', backgroundColor: 'Highlight'}} onClick={() => setCount(count + 1)}>One beat is like a one click! CLICK</Button>
                    </Tooltip>
                </div>
            )
        }
    };
    return (
        <div style={{nackgroundColor: 'Highlight', width: '800px'}}>
                <center style={{color: 'midnightblue', fontFamily: 'fantasy', letterSpacing: '10px'}}>Music and Sound</center>
                <Card style={{paddingLeft: '20px'}}>
                    <Grid style={{paddingLeft: '35px', paddingTop: '60px'}} container spacing={5}>
                    <Tooltip title='Click for 4 times to learn the content! Enjoy it!'>
                        <Button style={{borderStyle: 'solid', borderColor: 'cyan', borderWidth: '3px'}} onClick={() => setOpMusic((opMusic % 4) + 1)}>What is the Music?</Button>
                    </Tooltip>
                    <Grid container spacing={8} style={{float: 'rigth', paddingLeft: '300px'}}>
                        {renderMusic()}
                    </Grid>
                    </Grid>
                    <hr/>
                    <Grid container spacing={0} style={{float: 'left'}}>
                    <Tooltip title='Click for 4 times to learn the content! Enjoy it!'>
                        <Button style={{borderStyle: 'solid', borderColor: 'cyan', borderWidth: '3px'}} onClick={() => setOpSound((opSound % 4) + 1)}>What is the Sound?</Button>
                    </Tooltip>
                        <Grid style={{paddingLeft: '260px'}}  container spacing={8}>
                            {renderSound()}
                        </Grid>
                    </Grid>
                </Card>
                <hr style={{borderColor: 'Highlight'}}/>
                <center style={{color: 'midnightblue', fontFamily: 'fantasy', letterSpacing: '10px'}}>Musics Elements</center>
                <Card style={{paddingLeft: '20px',height: '350px'}}>
                    <Tooltip title='Click for 4 times to learn the content! Enjoy it!'>
                        <Button style={{borderStyle: 'solid', borderColor: 'cyan', borderWidth: '3px'}} onClick={() => setOpMelody((opMelody % 4) + 1)}>What is Melody?</Button>
                    </Tooltip>
                    <Grid style={{paddingLeft: '200px'}} container spacing={5}>
                        {renderMelody()}
                    </Grid>
                    <br/><br/>
                <div style={{float: 'left', paddingTop: '15px'}}>
                <Tooltip title='Click for 4 times to learn the content! Enjoy it!'>
                    <Button style={{borderStyle: 'solid', borderColor: 'cyan', borderWidth: '3px'}} onClick={() => setOpHarmony((opHarmony % 4) + 1)}>What is Harmony?</Button>
                </Tooltip>
                    <Grid style={{paddingLeft: '250px'}} container spacing={8}>
                        {renderHarmony()}
                    </Grid>
                </div><br/>
                <Grid container spacing={0}>
                <div style={{paddingTop: '20px'}}>
                    <Grid style={{paddingTop: '30px'}} container spacing={0}>
                        <Tooltip title='Click for 5 times to learn the content! Enjoy it!'>
                            <Button style={{borderStyle: 'solid', borderColor: 'cyan', borderWidth: '3px'}} onClick={() => setOpRhythm((opRhythm % 5) + 1)}>What is Rhythm?</Button>
                        </Tooltip>
                        <Grid container spacing={5} style={{paddingLeft: '200px'}}>
                            {renderRhythm()}
                        </Grid>
                    </Grid>
                </div>
                </Grid>
                </Card>
                <br/>
                <hr style={{borderColor: 'midnightblue'}}/>
                <br/>
                <Paper>
                    <Carousel style={{backgroundColor: 'black', color: 'white', padding: '70px', paddingLeft: '150px', borderRadius: '35px', borderStyle: 'double', borderColor: 'darkblue', margin: '30px', boxSizing: 'border-box'}}>
                    <center style={{color: 'midnightblue', fontFamily: 'fantasy', letterSpacing: '10px'}}>
                        <h3 style={{fontSize: '30px'}}>Properties of Sound</h3>
                    </center>
                    <div style={{paddingLeft: '100px', float: 'left'}}>
                    <Popup trigger={<Button style={{backgroundColor: 'aqua', color: 'midnightblue', fontFamily: 'fantasy'}}>Timbre</Button>}>
                        <Card style={{margin: '-10px', backgroundColor: 'gold', width: '650px'}}>
                            <img style={{width: '100px', height: '100px'}} src={Timbre} alt='timbre'/>
                            <i>It is the distinction of producted sounds by different sonorous fonts!<br/>
                            being on the same height and intensity; It's thecolor of sound</i>
                            <Card style={{width: '500px', backgroundColor: 'Highlight', color: 'gold'}}><ul>We can indentify distincts sounds of others</ul>
                                <ul>By example: We can to indentify a sound that is play by violin, and distinct others
                                    different sounds that is played by other instruments, by thisproperty we candifferency the sounds
                                </ul>
                            </Card>
                        </Card>
                    </Popup>
                    </div>
                    <div style={{paddingRight: '150px', float: 'right'}}>
                    <Popup trigger={<Button style={{backgroundColor: 'aqua', color: 'midnightblue', fontFamily: 'fantasy'}}>Duration</Button>}>
                        <Card style={{margin: '-10px', backgroundColor: 'cyan'}}>
                        <img style={{width: '100px', height: '100px'}} src={duration} alt='duracao'/>
                        <i>It is the sustentation of sound in a determined space of time</i>
                        <ul>This will determine if the sound is SHORT or LONG</ul>
                        </Card>
                    </Popup>
                    </div>
                    <div style={{paddingRight: '160px', float: 'right'}}>
                    <Popup trigger={<Fab style={{backgroundColor: 'aqua', color: 'midnightblue', fontFamily: 'fantasy'}}>Height</Fab>}>
                        <Card style={{width: '350px', backgroundColor: 'blueviolet', color: 'gold', fontFamily: 'serif', fontSize: '20px'}}>
                            <img style={{width: '100px', height: '200px', borderRadius: '100px'}} src={AltSound} alt='alturaH'/>
                            <i>It is the properties of waves sounds frequences that permited us to distinct between some
                                sounds, ("Bass, Medium, High-pitched"), How much minor is the sounds frequence,
                                more bass is this sound. How much greatter the frequence, more High-pitched is the sound
                            </i>
                        </Card>
                    </Popup>
                    </div>
                    <div style={{float: 'right', paddingRight: '130px'}}>
                    <Popup trigger={<Button style={{backgroundColor: 'aqua', color: 'midnightblue', fontFamily: 'fantasy'}}>Intensity</Button>}>
                        <Card style={{width: '450px', backgroundColor: 'ThreeDShadow', color: 'white', fontFamily: 'serif'}}>
                            <i>This will help you to distinct the different of weak sounds and the strong sounds</i>
                            <p>Look this two examples below</p>
                            <ul>
                                <img style={{width: '200px', height: '200px'}} src={intensit} alt='sons'/>
                            </ul>
                            <p>As you can look it, the width and the amplitud, how much more width is puted
                                the sound is gonna be weak, and the other way, the sound will turn to
                                the strong
                            </p>
                        </Card>
                    </Popup>
                    </div>
                    </Carousel>
                </Paper><br/><hr/><br/><hr/><br/><br/>
                <center>
                    <Button><details><summary>Exercises of the Elements and Properties! Remember on close this window to continue to the Kizz below!!!</summary>
                    <NotesExercise/>
                    </details></Button>
                </center>
                <br/><hr/><br/><br/><br/><br/>
                <div style={{paddingLeft: '500px', paddingBotton: '70px'}}>
                <Button>
                    <Card style={{float: 'right', width: '500px', height: '500px', paddingBotton: '20px'}}>
                        <h3>This is the start of the whole knowledge that you must to learn</h3>
                        <hr style={{borderColor: 'Highlight'}}/>
                        <img style={{height: '300px'}} src={giphyViolin} alt='violinogif'/>
                    </Card>
                </Button>
                </div>
                <Grid style={{float: 'left', paddingLeft: '500px'}} container spacing={60}>
                    <motion.div
                    initial={{x: 2000, scale: 0, rotateX: 330, rotateY: -350, rotateZ: 50}}
                    animate={{x: 0, scale: 1, rotateX: 0, rotateY: 0, rotateZ: 0}}
                    transition={{duration: 5}}>
                    <fieldset style={{borderColor: 'midnightblue'}}>
                        <h3>So...,<br/> Answer this Quizz,<br/> to see if you learned<br/> all about the First Phase the theory</h3>
                    <Button style={{backgroundColor: 'dodgerblue', color: 'gold', fontFamily: 'serif'}}>
                        <details><summary>Quizz Exercise!</summary>
                            <Alert>
                                <QuizzOneTime/>
                            </Alert>
                        </details>
                    </Button>
                    </fieldset>
                    </motion.div>
                </Grid>
        </div>
    )
}