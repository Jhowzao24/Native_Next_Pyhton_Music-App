/* eslint-disable @next/next/no-img-element */
import React, { Component } from 'react';
import { Card, Grid, Paper, Button, Fab, Divider, AccordionDetails, Typography, FormLabel, Input, Accordion, AccordionSummary } from '@mui/material';
import Popup from 'reactjs-popup';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import { motion } from 'framer-motion';
import ViolinPratice from '../../Phases_Components/First_Pratice/ExacPratice/Violin_Notes_Parts';
import ArcoViolino from '../../Pratices_Files/FilesPratice/BowDemonstration';
import { ContiVioloinLesson } from '../../Pratices_Files/style';
import ViolinAfin from '../../Pratices_Files/FilesPratice/AfinatorViolin';
import Quiz from '../../Avaliation_Files/Pratice_Avaliations/Cello_Quizz/Quizz_Violoncelo';
import SongTrivia from '../../Avaliation_Files/Pratice_Avaliations/ViolinTrivia';
import ViolinQuizz from '../../Avaliation_Files/Pratice_Avaliations/Violin_Quizz/First_Violin_Quizz';
import QuizzViolin from '../../Pratices_Files/QuizzPratices/ViolinQuizz';
import NotesPositions from '../../Pratices_Files/FilesPratice/NotesViolin';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ViolinJumperNotas from '../Violin_Interpretor/Violin_Notes_Pull';
import { Toaster, toast } from 'react-hot-toast';
import SortViolinLesson from '../Violin_Interpretor/Sorting_Violin_Datas';
import StateModify from '../../Notes_ScaleChange/ModificationStates';

function Violin_Player(){
    return(
        <div style={{alignItems: 'center', backgroundColor: 'orange', color: 'white', width: '550px'}}>
            <Card style={{backgroundColor: 'yellow'}}>
                <Paper>
                    <Popup trigger={<Button style={{color: 'midnightblue', fontFamily: 'fantasy', letterSpacing: '2px', backgroundColor: 'cyan', float: 'left'}}>Parts of the Violin</Button>}>
                        <Card style={{width: '700px', height: '625px', backgroundColor: 'midnightblue', borderStyle: 'ridge',
                        borderColor: 'darkcyan'}}>
                            <Grid style={{paddingLeft: '40px', paddingTop: '15px'}} container spacing={0}>
                            <img alt='partsviolin' style={{width: '600px', height: '600px', borderRadius: '20px'}}
                                src='https://static.hayapek.com.br/produtos/10432/2000/1.jpg'/>
                                <Grid style={{paddingLeft: '580px'}} container spacing={73}>
                                    <Popup trigger={<Fab style={{fontSize: '18px', width: '100px', height: '50px'}}>Volute <ArrowRightAltIcon style={{color: 'Highlight', fontSize: '15px', float: 'right'}}/></Fab>}>
                                    <Card style={{width: '200px', height: '120px'}}>
                                    <h2 style={{fontSize: '15px'}}><strong>Volute</strong></h2>
                                    <i>This part of the violin  is the head of the violin, it has the caracol form</i>
                                </Card>
                                    </Popup>
                                </Grid>
                                <Grid style={{paddingLeft: '520px'}} container spacing={60}>
                                    <Popup trigger={<Fab style={{fontSize: '10px', width: '100px', height: '50px'}}>Violins Arm<ArrowRightAltIcon style={{color: 'Highlight', fontSize: '15px', float: 'right'}}/></Fab>}>
                                        <Card style={{width: '360px', height: '90px'}}>
                                            <h2 style={{fontSize: '15px'}}><strong>Arm</strong></h2>
                                            <i>This part is the part that you will put your thumb to support</i>
                                        </Card>
                                    </Popup>
                                </Grid>
                                <Grid style={{paddingLeft: '270px'}} container spacing={30}>
                                    <Popup trigger={<Fab style={{fontSize: '10px', width: '100px', height: '50px'}}>Rear Top<ArrowRightAltIcon style={{color: 'Highlight', fontSize: '15px', float: 'right'}}/></Fab>}>
                                        <Card style={{width: '360px', height: '90px'}}>
                                            <h2 style={{fontSize: '15px'}}><strong>Rear Top</strong></h2>
                                            <i>This part is the back of the violin, so his function is to receive the vibration from the Violins Soul</i>
                                        </Card>
                                    </Popup>
                                </Grid>
                                <Grid style={{paddingLeft: '850px'}} container spacing={70}>
                                    <Popup trigger={<Fab style={{fontSize: '10px', width: '100px', height: '50px'}}>Harpsichords(Cravelhas)<ArrowRightAltIcon style={{color: 'Highlight', fontSize: '15px', float: 'right'}}/></Fab>}>
                                        <Card style={{width: '360px', height: '90px'}}>
                                            <h2 style={{fontSize: '15px'}}><strong>Harpsichords(Cravelhas)</strong></h2>
                                            <i>This part is use to affinated the Violins strings at the superior point</i>
                                        </Card>
                                    </Popup>
                                </Grid>
                                <Grid style={{paddingLeft: '1000px'}} container spacing={68}>
                                    <Popup trigger={<Fab style={{fontSize: '12px', width: '100px', height: '50px'}}><ArrowLeftIcon style={{color: 'Highlight', fontSize: '20px', float: 'left'}}/>Pestana</Fab>}>
                                        <Card style={{width: '160px', height: '300px'}}>
                                            <h2 style={{fontSize: '15px'}}><strong>Strings</strong></h2>
                                            <i>Located at the end of the mirror, this part is so small, you can hardly see it, but this is really important</i><Divider/>
                                            <p>This is the downed of the string</p><Divider/>
                                        </Card>
                                    </Popup>
                                </Grid>
                                <Grid style={{paddingLeft: '880px'}} container spacing={55}>
                                    <Popup trigger={<Fab style={{fontSize: '12px', width: '100px', height: '50px'}}><ArrowLeftIcon style={{color: 'Highlight', fontSize: '20px', float: 'left'}}/>Strings</Fab>}>
                                        <Card style={{width: '160px', height: '300px'}}>
                                            <h2 style={{fontSize: '15px'}}><strong>Strings</strong></h2>
                                            <i>As you are seeing there, the violin has four notes at his strings, This notes is: </i><Divider/>
                                            <p>Side Right: MI, LÁ</p><Divider/>
                                            <p>Side Left: RÉ, SUN</p>
                                        </Card>
                                    </Popup>
                                </Grid>
                                <Grid style={{paddingLeft: '800px'}} container spacing={45}>
                                    <Popup trigger={<Fab style={{fontSize: '12px', width: '100px', height: '50px'}}><ArrowLeftIcon style={{color: 'Highlight', fontSize: '20px', float: 'left'}}/>Mirror</Fab>}>
                                        <Card style={{width: '160px', height: '260px'}}>
                                            <h2 style={{fontSize: '15px'}}><strong>Mirror</strong></h2>
                                            <i>This black table that you are seeing</i><Divider/>
                                            <p>this will reflect sounds from the position of the notes, where you to put your finger, there will be a note</p>
                                        </Card>
                                    </Popup>
                                </Grid>
                                <Grid style={{paddingLeft: '650px'}} container spacing={45}>
                                    <Popup trigger={<Fab style={{fontSize: '12px', width: '100px', height: '50px'}}>Front Top<ArrowRightAltIcon style={{color: 'Highlight', fontSize: '20px', float: 'left'}}/></Fab>}>
                                        <Card style={{width: '160px', height: '300px'}}>
                                            <h2 style={{fontSize: '15px'}}><strong>Front Top</strong></h2>
                                            <i>Important part</i><Divider/>
                                            <p>It will receive more vibrations from the violins soul, if you never knew this, stay knowing, the sound in the violin, will be reflected from de soul, and it will be distributed for the two tops</p>
                                        </Card>
                                    </Popup>
                                </Grid>
                                <Grid style={{paddingLeft: '530px'}} container spacing={30}>
                                    <Popup trigger={<Fab style={{fontSize: '12px', width: '100px', height: '50px'}}>Violins F<ArrowRightAltIcon style={{color: 'Highlight', fontSize: '20px', float: 'left'}}/></Fab>}>
                                        <Card style={{width: '160px', height: '300px'}}>
                                            <h2 style={{fontSize: '15px'}}><strong>Fs</strong></h2>
                                            <i>This two formates is the more important piece at the instrument</i><Divider/>
                                            <p>Because this two F pieces will be the exit of the sounds air, at the case, if this two pieces didnt exist there, the sounds would not exit</p>
                                        </Card>
                                    </Popup>
                                </Grid>
                                <Grid style={{paddingLeft: '690px'}} container spacing={27}>
                                    <Popup trigger={<Fab style={{fontSize: '12px', width: '100px', height: '50px'}}><ArrowLeftIcon style={{color: 'Highlight', fontSize: '20px', float: 'left'}}/>Easel</Fab>}>
                                        <Card style={{width: '160px', height: '300px'}}>
                                            <h2 style={{fontSize: '15px'}}><strong>Easel</strong></h2>
                                            <i>So, all you have been saw until here, receive vibrations sounds!</i><Divider/>
                                            <p>But this instruments piece is the first piece that will receive the all strongs vibrations sounds from the strings</p>
                                        </Card>
                                    </Popup>
                                </Grid>
                                <Grid style={{paddingLeft: '590px'}} container spacing={15}>
                                    <Popup trigger={<Fab style={{fontSize: '12px', width: '100px', height: '50px'}}><ArrowLeftIcon style={{color: 'Highlight', float: 'left', fontSize: '20px'}}/>Estandarte</Fab>}>
                                        <Card style={{width: '160px', height: '300px'}}>
                                            <h2 style={{fontSize: '15px'}}><strong>Estandarte</strong></h2>
                                            <i>This is the other important piece</i><Divider/>
                                            <p>This is the piece that catch the four strings to fine-tune notes in small tones</p>
                                        </Card>
                                    </Popup>
                                </Grid>
                                <Grid style={{paddingLeft: '300px'}} container spacing={8}>
                                    <Popup trigger={<Fab style={{fontSize: '12px', width: '100px', height: '50px'}}>Chin Supporter<ArrowLeftIcon style={{color: 'Highlight', fontSize: '20px', float: 'left'}}/></Fab>}>
                                        <Card style={{width: '160px', height: '300px'}}>
                                            <h2 style={{fontSize: '15px'}}><strong>Queixeira</strong></h2>
                                            <i>Supporting you on instrument</i><Divider/>
                                            <p>You will Support your chin there andplay your instrument with class!!</p>
                                        </Card>
                                    </Popup>
                                </Grid>
                                </Grid>
                            </Card>
                        </Popup>
                </Paper>
            </Card><hr/>
            <Grid container spacing={0}>
                <motion.div
                initial={{x: -150}}
                animate={{x: 1}}
                transition={{duration: 3}}>
                <Card>
                    <ViolinPratice/>
                </Card>
                </motion.div>
            </Grid><br/><br/>
            <Grid style={{float: 'left'}} container spacing={0}>
            <Popup trigger={<Button style={{color: 'cyan', backgroundColor: 'midnightblue', boxShadow: '0 0 5px 5px'}}>
            <Grid container spacing={0} style={{paddingLeft: '4px'}}>
                <img style={{width: '105px', height: '105px', borderRadius: '50px', margin: '-25px', filter: 'brightness(270%)'}} src='https://th.bing.com/th/id/R.fd611207ec7bc7d5cee788062136bca4?rik=z1zFN%2fyJMEZdhw&riu=http%3a%2f%2fi.kinja-img.com%2fgawker-media%2fimage%2fupload%2fs--nS1Ak5qC--%2fx1n1e6clvtdf5hvxaald.gif&ehk=YAj27KdtOCMoZmfNjLVBf2oSYRWcR4UBPFRnikMjOXA%3d&risl=1&pid=ImgRaw&r=0' alt='imagemBow'/>
            </Grid>
            Playing a Bow</Button>}>
                <ContiVioloinLesson>
                    <center>
                        <h1>Play the button below, and hear a sound</h1>
                        <h3>You must to play it by the sequences described below!</h3>
                        <h5>4/4; 3/4; 2/2</h5>
                        <ArcoViolino/>
                    </center>
                </ContiVioloinLesson>
            </Popup>
            </Grid><br/><br/><br/>
            <Grid container spacing={-5} style={{ float: 'left', paddingTop:'40px'}}>
                <Popup trigger={<Button style={{backgroundColor: 'orange', color: 'midnightblue', boxShadow: '0 0 5px 5px', fontFamily: 'serif'}}>
                <Grid container spacing={0} style={{paddingLeft: '4px'}}>
                    <img style={{width: '105px', height: '105px', borderRadius: '50px', margin: '-25px', filter: 'brightness(150%)'}} src='https://i.gifer.com/origin/46/4684444c1779f92677ccfe1336e55a2b_w200.gif' alt='imagemBow'/>
                </Grid>
                Violin Tuner</Button>}>
                    <ViolinAfin/>
                </Popup>
            </Grid>
            <br/><br/><br/><br/><br/><br/>
            <div style={{margin: '30px'}}>
                <fieldset style={{backgroundColor: 'dodgerblue', borderColor: 'midnightblue', boxShadow: '0 0 20px 10px', width: '50px', height: '200px', borderRadius: '500px', textAlign: 'center'}}>
                    <NotesPositions/>
                </fieldset>
                    <Grid style={{paddingLeft: '330px'}} container spacing={30}>
                        <Popup trigger={<Fab style={{backgroundColor: 'orangered', color: 'white', float: 'left', boxShadow: '0 0 5px 5px',}}><strong>Quizz</strong></Fab>}>
                            <QuizzViolin/>
                        </Popup>
                    </Grid>
                    <Grid style={{paddingLeft: '150px', paddingTop: '210px'}} container spacing={6}>
                        <Popup trigger={<Fab style={{backgroundColor: 'yellow', color: 'midnightblue', float: 'right', boxShadow: '0 0 5px 5px',}}><strong>Quizz</strong></Fab>}>
                            <ViolinQuizz/>
                        </Popup>
                    </Grid>
                    <Grid style={{paddingLeft: '350px'}} container spacing={17}>
                        <Popup trigger={<Fab style={{backgroundColor: 'Highlight', color: 'cyan', float: 'right', boxShadow: '0 0 5px 5px',}}><strong>Quizz</strong></Fab>}>
                            <SongTrivia/>
                        </Popup>
                    </Grid>
                    <Grid style={{paddingLeft: '195px', paddingTop: '176px'}} container spacing={30}>
                        <Popup trigger={<Fab style={{backgroundColor: 'darkslateblue', color: 'white', float: 'right', boxShadow: '0 0 5px 5px',}}><strong>Quizz</strong></Fab>}>
                            <Quiz/>
                        </Popup>
                    </Grid>
                </div><br/><br/><br/>
                <StateModify/>
                <br/><br/>
                <ViolinJumperNotas/>
                <br/>
                <SortViolinLesson/>
                <br/><Divider/><br/>
        </div>
    )
}

export default class ViolinDominion extends Component{
    constructor(props) {
        super(props);
        this.state = {
          question1: '',
          question2: '',
          loggedIn: false,
          open: false,
        };
      };
      ShowAccordion = () => {
        this.setState(prevState => ({
          open: !prevState.open
        }));
      }
    
      handleUsernameChange = (event) => {
        this.setState({ question1: event.target.value });
      };
    
      handlePasswordChange = (event) => {
        this.setState({ question2: event.target.value });
      };
    
      submitToast = () => {
        toast.success('acessando ...')
      }
    
      handleLogin = () => {
        const { question1 } = this.state;
        if (question1 === 'soprano') {
          this.setState({ loggedIn: true });
          this.submitToast();
        } else {
          console.log('Login failed');
          toast.error('Login Failed..., Wrong Datas..., Try it again!');
        }
      };
      render(){
        const { question1, loggedIn } = this.state;
        const styles = {
            container: {
                borderRadius: '55px',
                backgroundColor: 'dodgerblue',
                borderColor: 'cyan',
                borderStyle: 'ridge',
                borderWidth: '1px',
                opacity: '0.8',
                width: '330px',
                heigth: '150px'
            },
            title: {
              fontSize: '20px',
              fontFamily: 'serif',
              float: 'right',
              color: 'white'
            },
            imagem: {
                width: '90px', 
                borderRadius: '55px',
                borderColor: 'cyan',
                borderStyle: 'ridge',
                padding: '3px',
                borderWidth: '1px'
            },
            LogButton: {
              width: '300px',
              backgroundColor: 'yellow'
            }
          };
        return(
            <div>
                <Grid container spacing={3} style={{float: 'rigth', paddingLeft: '30px', paddingTop: '50px'}}>
                <Accordion style={styles.container}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{color: 'blue'}}/>}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                  <Typography>
                    <img 
                    style={styles.imagem}
                    src='https://3.bp.blogspot.com/-WVZXRmbW-1w/VsH3FfFP_EI/AAAAAAAAaWI/v_KVVxlwCA4/s1600/Stradivari%2B1.jpg'
                    alt='interrogação'
                    />
                    <h1 style={styles.title}>Lets start to pratice Violin!</h1>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                  <Card style={{width: '300px', backgroundColor: 'transparent', fontFamily: 'serif', opacity: '1.5'}}>
                    <center>
                      <FormLabel style={{color: 'white', fontFamily: 'serif', fontSize: '20px'}}>What part Violin make at an orchestra?</FormLabel><br/>
                      <Input style={{color: 'white', fontFamily: 'serif', fontSize: '20px'}} type="text" placeholder="Question-1" value={question1} onChange={this.handleUsernameChange} /><br/>
                      <Divider/>
                      <Button style={styles.LogButton} onClick={this.handleLogin}>Access</Button><br/>
                      <Toaster/>
                    </center>
                  </Card>
                </Typography>
              </AccordionDetails>
            </Accordion>
        </Grid>
        <br/><Divider/><br/>
        <br/><Divider/><br/>
        <br/>
        {
            loggedIn && <Grid style={{paddingTop: '15px', float: 'left', paddingLeft: '300px'}} container spacing={3}>
                <Button style={{color: 'blue', backgroundColor: 'gold', fontFamily: 'fantasy'}}><details><summary>Violins Pratice!</summary>
                    <Violin_Player/>
                </details>
                </Button>
                </Grid>
        }
            </div>
    )
    }
}