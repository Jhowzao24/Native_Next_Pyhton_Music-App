import React, { useEffect, useState, /*useRef*/ } from 'react';
import Card from '@mui/material/Card';
import { Alert, Box, Divider, Fab, Grid, Paper, Tooltip, Button } from '@mui/material';
import AutoStoriesTwoToneIcon from '@mui/icons-material/AutoStoriesTwoTone';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Moviment_6 from '../Phases_Components/Phase_Image/Moviment_6.jpg';
import Left_Moviment from '../Phases_Components/Phase_Image/Left_Moviment.jpg';
import QuizzQuinta from '../Avaliation_Files/Theory_Quizz/Quizz_Five_Phase';
import { motion } from 'framer-motion';

export default function Cinco(){
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
                    <QuintaFase/>
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


function QuintaFase(){
    /*const [/*showModal, setShowModal] = useState(false)*/
    //const modalRef = useRef(null);
    //const close = () => setShowModal(false)
    /*useEffect(() => {
        const timeout = setTimeout(() => {
            setShowModal(true)
        }, 3000)
    }, [])*/
    const tulSolfege = [
        <div>
            <motion.div
            initial={{scale: 0}}
            animate={{scale: 1}}
            transition={{duration: 5}}>
            <Card>
                <p>This moviments will extends from center elevating to the left side, and after this will turn to the right side with 2 moviments and the last moviment will be to the up!</p>
            </Card>
            </motion.div>
        </div>
    ]
    const reverseTitle = [
        <div>
            <Card>
                <p>This is made for the Lefties</p>
            </Card>
        </div>
    ]
    const formSolfege = [
        <div>
            <Card>
                <h3>Compound Solfege in 6 Moviments</h3>
                <Divider/>
                <Tooltip title={tulSolfege} arrow placement='right'>
                    <img style={{width: '150px', height: '150px', borderStyle: 'double', borderColor: 'blue'}} src={Moviment_6} alt='movimentSolfege'/>
                </Tooltip>
                <Tooltip title={reverseTitle} arrow placement='right'>
                    <img style={{width: '150px', height: '150px', borderStyle: 'double', borderColor: 'dodgerblue'}} src={Left_Moviment} alt='movimentSolfege'/>
                </Tooltip>
            </Card>
        </div>
    ]
    const tulRead = [
        <div style={{backgroundColor: 'highlight'}}>
            <motion.div
            initial={{scale: 0, rotateX: 550, rotateY: -550, x: 600}}
            animate={{scale: 1, rotateX: -3, rotateY: -3, x: 0}}
            transition={{duration: 6}}>
            <Card style={{backgroundColor: 'Highlight', color: 'gold', width: '200px', height: '150px', fontFamily: 'cursive', fontSize: '15px', }}>
                <Alert style={{backgroundColor: 'blue', color: 'white'}}>
                    <p>Take a look at the MSA!!
                    <br/>
                    <h3>Exercise Page: 47; 49; 51</h3>
                    </p>
                </Alert>
            </Card>
            </motion.div>
        </div>
    ]
    const explanPLan = [
        <div>
            <motion.div
            initial={{scale: 0, rotateX: 550, rotateY: -550, x: 600}}
            animate={{scale: 1, rotateX: -3, rotateY: -3, x: 0}}
            transition={{duration: 6}}>
            <Card style={{width: '500px', height: '570px', backgroundColor: 'darkred', borderRadius: '30px', borderStyle: 'double', borderColor: 'aqua'}}>
                <h1 style={{color: 'darkblue', fontSize: '25px', fontFamily: 'serif'}}>
                    The formule of compasso in 6 is the simple formule of compass in 2 so, this, 2 x 3 = 6 moviments, it is 3 more moviments into the each 2 moviments
                </h1>
                <Divider/>
                <h2>
                    Examples:
                    <ul style={{color: 'cyan'}}>
                        <p>The compasso formule 6/8 determine that compasso will have 6 pulses and that the quaver(Figure of the number 8), represent each pulse</p>
                        <img style={{width: '400px', height: '150px'}} src='https://th.bing.com/th/id/R.d96d435fadc0e1150d1fe0347a609141?rik=hj0p4A5ANbyd9A&riu=http%3a%2f%2f2.bp.blogspot.com%2f-gIXX72oPqqA%2fT1QdjKr0hII%2fAAAAAAAAAIA%2fAEgT9WRc0_c%2fs1600%2f06.jpg&ehk=9MnHGliDMk%2bi9JjQw09uKDLdQFf8wyYoYDiKuITECiY%3d&risl=&pid=ImgRaw&r=0' alt='6/8compass'/>
                    </ul>
                    <ul style={{color: 'lightblue'}}>
                        <p>The formule of compasso 6/4 determine that the compasso will have 6 pulses and that the quarter note(figure of number 4) represent each pulse or moviment</p>
                    </ul>
                </h2>
            </Card>
            </motion.div>
        </div>
    ]
    const explaSe = ["In musical rehearsals, or in a situation that have regences, the candidate must ever to respect the regences signals of the conductor to execute the fermata, independentement of what your duration be more short or long rather than it was explaned here", <br/>, "It must still to realize the sounds intensity of the note, according determined by regence, keeping it sounding until that the conductor give the signal to cut the sound!!"]
    const explaS = ["In the orchestra, during the all music that there is no regences, the musician must to follow the previous determination of execution of the fermata according to instructed"]
    const explaFi= ["Look that, there is not a rule that determine, by example, that all fermata over a minimum scored has the same duration at whatever partitura", <br/>, "for it will depend of the factors, how, progress music, music style, interpretation, etc"]
    const explaFo = ["Take an atenption, that, the execution is similar to the metrificate writing, that is, we only write the metrification for the best comprension of the candidate", <br/>, "The fermata not must to be metrified by the candidate on your execution"]
    const explaT = ["The fermata create a soft extension, and not a note very long that make to lost the senses music", <br/>, "Not very short, or not very long that mischaracterise the effects of the fermata"]
    const explaF = ["The time of fermatas extends is undefined. On saying that the fermata extend the notes half, is overtaken", <br/>, "Today there is a liberty to execute the fermata, but it must to use the good musical wishes", <br/>, "And the cool sense at the extension"]
    const expla = ["Saying about the fermat execution, the prolong note don't must to sound with the same intensity, during the all your duration", <br/>, "As a horn, the correct form is decreasing the sound gradually the intensity of the sound until the silence", <br/>, "Followed by a brief interruption before to return to the music!"]
    const fermata = [
        <div>
            <Box style={{backgroundColor: 'grey', width: '300px', height: '100px'}}>
                <h3>
                The Fermata will under the notes or over the notes, to extand the time undeterminaly, this is the concept of the FERMATA
                </h3><Divider/>
                <AutoStoriesTwoToneIcon style={{fontSize: '50px'}}/>
            </Box>
        </div>]
    const placeferm = [
        <div>
            <Box style={{backgroundColor: 'lime', color: 'blue'}}>
                <h3>
                As you can to see, the fermata is under the note and over the note too
                </h3><Divider/>
                <AutoStoriesTwoToneIcon style={{fontSize: '50px'}}/>
            </Box>
        </div>]
    const [count, setCount] = useState(0)
    useEffect(() => {
        document.createComment = `You clicked ${count} time`
    })
    return(
        <div>
            <Box className='paperoid' style={{width: '1300px', height: '800px'}}>
                <center>
                    <p style={{color: 'gold', fontFamily: 'fantasy', backgroundColor: 'ButtonText'}}>5nd Phase</p>
                    <Grid style={{float: 'left', paddingLeft: '10px', backgroundHeight: '400px', borderColor: 'gold', borderWidth: '5px', borderStyle: 'dashed'}}>
                        <Paper className='paperoid'>
                            <img src='https://www.descomplicandoamusica.com/wp-content/uploads/2014/08/tercina.png' alt='vision'/>
                            <h2 style={{color: 'gold'}}>Tercines</h2>
                            <h5 style={{color: 'gold'}}>All you need to know</h5>
                            <Card style={{opacity: '1.2'}}>
                                <p>Being a group of 3 figures, being puted at place that ajust only two figures of the same value</p>
                            </Card>
                            <Grid style={{backgroundColor: 'Highlight', float: 'left', paddingTop: '10px', paddingLeft: '180px'}} container spacing={0}>
                            <Fab style={{backgroundColor: 'gold'}}>
                                <details><summary style={{opacity: 8, fontSize: '8px', color: 'midnightblue'}}>Notes in Tercines</summary>
                                    <Paper style={{backgroundColor: 'dodgerblue', width: '500', height: '300px'}}>
                                        <motion.div
                                        initial={{x: 300, rotateZ: -300, rotateX: 600}}
                                        animate={{x: 0, rotateZ: 0, rotateX: 5}}
                                        transition={{duration: 5}}>
                                        <img style={{width: '300px', height: '80px'}} src='https://th.bing.com/th/id/R.c3a8e2c9ac97140ab9d4af6a4372a45b?rik=HLVUJ04gUcQiKQ&pid=ImgRaw&r=0' alt='tercinasNotes'/>
                                        <p>As you can to see, at the same moviment of the semitime, there three notes with the same value, that determines the tercine moviment in a one hands moviment!</p>
                                        </motion.div>
                                    </Paper>
                                </details>
                            </Fab>
                            </Grid>
                            <Grid style={{backgroundColor: 'blue', float: 'left', paddingTop: '3px', paddingLeft: '470px'}} container spacing={3}>
                            <Fab style={{backgroundColor: 'gold'}}>
                                <details><summary style={{opacity: 8, fontSize: '8px', color: 'midnightblue'}}>Fermate</summary>
                                    <Box>
                                        <motion.div
                                        initial={{rotateX: 300, rotateY: -300}}
                                        animate={{rotateX: 0, rotateY: 0}}
                                        transition={{duration: 5}}>
                                    <Paper style={{backgroundColor: 'dodgerblue', width: '400px', height: '270px'}}>
                                        <Grid style={{float: 'left'}} container spacing={0}>
                                        <Tooltip data-tooltip='exemplo' title={fermata} id='tultip' arrow placement='right'>
                                        <img style={{width: '150px', height: '130px', borderColor: 'black', borderWidth: '3px', borderStyle: 'double'}} src='https://res.cloudinary.com/teepublic/image/private/s--iR5yJdok--/t_Preview/b_rgb:ffffff,c_lpad,f_jpg,h_630,q_90,w_1200/v1494184470/production/designs/1580300_1.jpg' alt='tercinasNotes'/>
                                        </Tooltip>
                                        </Grid>
                                        <Grid style={{float: 'left', paddingLeft: '200px'}} container spacing={0}>
                                        <Tooltip onClick={() => setCount(count + 1)} title={placeferm} arrow placement='left'>
                                        <img style={{width: '150px', height: '130px', borderWidth: '3px', borderStyle: 'double'}} src='https://th.bing.com/th/id/OIP.bvlAMDQxvBuM2KvlYQYfXwHaJN?rs=1&pid=ImgDetMain' alt='tercinasNotes'/>
                                        </Tooltip>
                                        </Grid>
                                    </Paper>
                                    </motion.div>
                                    </Box>
                                </details>
                            </Fab>
                            </Grid>
                            <Divider style={{backgroundColor: 'blueviolet', borderWidth: '2px', borderRadius: '15px'}}/>
                            <br/>
                            <Grid style={{paddingLeft: '150px'}} container spacing={15}>
                                <Tooltip title={tulRead}>
                                    <Paper style={{ textAlign: 'center', backgroundColor: 'gold', color: 'blueviolet', width: '110px', height: '40px', fontFamily: 'fantasy', letterSpacing: '3px'}}>Exercises Pages</Paper>
                                </Tooltip>
                            </Grid>
                            <Grid style={{paddingLeft: '300px'}} container spacing={5}>
                                <Tooltip title={explanPLan}>
                                    <Paper style={{ textAlign: 'center', backgroundColor: 'gold', color: 'blue', width: '140px', height: '60px', fontFamily: 'fantasy', letterSpacing: '1px', fontSize: '15px'}}>
                                        <img style={{width: '140px', height: '60px'}} src='https://th.bing.com/th/id/R.3d06d1cf066dad02a147c2a34c0ba9e9?rik=15GACMmJa3Bj8Q&riu=http%3a%2f%2f1.bp.blogspot.com%2f-cPf25NpjbOw%2fUiJoL_TSaSI%2fAAAAAAAAAaA%2fw07jzEhwrgs%2fs1600%2f6.PNG&ehk=XiyQiUN%2bANcsXzt5zfYOE74s4GpvnrgVD4V3vwtt2Q4%3d&risl=&pid=ImgRaw&r=0' alt='6'/>
                                    </Paper>
                                </Tooltip>
                            </Grid>
                            <Grid style={{paddingLeft: '600px'}} container spacing={7.5}>
                                <Tooltip title={formSolfege}>
                                    <Paper style={{ textAlign: 'center', backgroundColor: 'gold'}}>
                                        <img style={{width: '110px', height: '80px'}} src='https://th.bing.com/th/id/R.ff38704fbda0b2a389fa4e40f0f24747?rik=oIzN9TMhvDWi8w&riu=http%3a%2f%2f1.bp.blogspot.com%2f-Wk6XCThA9K0%2fWcFiHUvof5I%2fAAAAAAAAAwU%2fAG9JAPVb_6gxSTL_tS8jMIat2BqOrGJ0wCK4BGAYYCw%2fs1600%2f125logo2.JPG&ehk=Fa7skIz7mzS8YbYsmbhbrFrwTxT%2fFQS%2fxW7eIDxCYLQ%3d&risl=&pid=ImgRaw&r=0' alt='solfejor'/>
                                    </Paper>
                                </Tooltip>
                            </Grid>
                            <ArrowUpwardIcon/>
                            <h5>Pass the mouse over the components</h5>
                            <h3>Explanations</h3>
                            <Grid style={{margin: '20px'}}>
                            <Card style={{backgroundColor: 'dodgerblue', color: 'white'}}>
                                <AutoStoriesTwoToneIcon style={{fontSize: '90px'}}/><h4>Fermata's Duration 1</h4>
                                <h4>{expla}</h4>
                            </Card>
                            </Grid>
                            <Divider style={{backgroundColor: 'blueviolet', borderWidth: '2px', borderRadius: '15px'}}/>
                            <br/>
                            <Grid style={{margin: '20px'}}>
                            <Card style={{backgroundColor: 'blue', color: 'gold'}}>
                                <AutoStoriesTwoToneIcon style={{fontSize: '90px'}}/><h4>Fermata's Duration 2</h4>
                                <h4>{explaF}</h4>
                            </Card>
                            </Grid>
                            <Divider style={{backgroundColor: 'blueviolet', borderWidth: '2px', borderRadius: '15px'}}/>
                            <br/>
                            <Grid style={{margin: '20px'}}>
                            <Card style={{backgroundColor: 'orange', color: 'blue'}}>
                                <AutoStoriesTwoToneIcon style={{fontSize: '90px'}}/><h4>Fermata's Duration 3</h4>
                                <h4>{explaT}</h4>
                            </Card>
                            </Grid>
                            <Divider style={{backgroundColor: 'blueviolet', borderWidth: '2px', borderRadius: '15px'}}/>
                            <br/>
                            <Grid style={{margin: '20px'}}>
                            <Card style={{backgroundColor: 'gold', color: 'darkblue'}}>
                                <AutoStoriesTwoToneIcon style={{fontSize: '90px'}}/><h4>Fermata's Duration 4</h4>
                                <h4>{explaFo}</h4>
                            </Card>
                            </Grid>
                            <Divider style={{backgroundColor: 'blueviolet', borderWidth: '2px', borderRadius: '15px'}}/>
                            <br/>
                            <Grid style={{margin: '20px'}}>
                            <Card style={{backgroundColor: 'purple', color: 'yellow'}}>
                                <AutoStoriesTwoToneIcon style={{fontSize: '90px'}}/><h4>Fermata's Duration 5</h4>
                                <h4>{explaFi}</h4>
                            </Card>
                            </Grid>
                            <Divider style={{backgroundColor: 'blueviolet', borderWidth: '2px', borderRadius: '15px'}}/>
                            <br/>
                            <Grid style={{margin: '20px'}}>
                            <Card style={{backgroundColor: 'green', color: 'aqua'}}>
                                <AutoStoriesTwoToneIcon style={{fontSize: '90px'}}/><h4>Fermata's Duration 6</h4>
                                <h4>{explaS}</h4>
                            </Card>
                            </Grid>
                            <Divider style={{backgroundColor: 'blueviolet', borderWidth: '2px', borderRadius: '15px'}}/>
                            <br/>
                            <Grid style={{margin: '20px'}}>
                            <Card style={{backgroundColor: 'aqua', color: 'darkgreen'}}>
                                <AutoStoriesTwoToneIcon style={{fontSize: '90px'}}/><h4>Fermata's Duration 7</h4>
                                <h4>{explaSe}</h4>
                            </Card>
                            </Grid>
                        </Paper>
                        <QuizzQuinta/>
                    </Grid>
                </center>
            </Box>
        </div>
    )
}