/* eslint-disable react/jsx-pascal-case */
import React, {Component} from 'react';
import { Card, Grid, Paper, Button, Fab, Divider, AccordionDetails, Typography, FormLabel, Input, Accordion, AccordionSummary } from '@mui/material';
import Popup from 'reactjs-popup';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import { motion } from 'framer-motion';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ViolaPratice from '../../Phases_Components/First_Pratice/ExacPratice/Viola_Notes_Parts';
import ViolaAfin from '../../Pratices_Files/FilesPratice/AfinatorViola';
import ViolaSents from '../../Avaliation_Files/Pratice_Avaliations/Viola_Quizz/Terc_Viola_Quizz';
import ViolaQuizz from '../../Avaliation_Files/Pratice_Avaliations/Viola_Quizz/Viola_Quizzer';
import NotesViola from '../../Pratices_Files/FilesPratice/NotesViola';
import ViolaQuizzOther from '../../Avaliation_Files/Pratice_Avaliations/Viola_Quizz/Sec_Viola_Quizz';
import ViolaJumpNotes from './ViolaNotesJump';
import { Toaster, toast } from 'react-hot-toast';
import ViolaModify from '../../Notes_ScaleChange/Viola_ScaleChange';

function Viola_Player(){
    return(
        <div>
            <Card style={{backgroundColor: 'violet'}}>
                <Paper>
                    <Popup trigger={<Button style={{color: 'midnightblue', fontFamily: 'fantasy', letterSpacing: '2px', backgroundColor: 'cyan', float: 'left'}}>Parts of the Viola</Button>}>
                        <Card style={{width: '700px', height: '625px', backgroundColor: 'midnightblue', borderStyle: 'ridge',
                        borderColor: 'darkcyan'}}>
                            <Grid style={{paddingLeft: '40px', paddingTop: '15px'}} container spacing={0}>
                            <img alt='partsviolin' style={{width: '600px', height: '600px', borderRadius: '20px'}}
                                src='https://i.ebayimg.com/images/g/uakAAOSwdLpf5vGY/s-l640.jpg'/>
                                <Grid style={{paddingLeft: '580px'}} container spacing={73}>
                                    <Popup trigger={<Fab style={{fontSize: '18px', width: '100px', height: '50px'}}>Volute <ArrowRightAltIcon style={{color: 'Highlight', fontSize: '15px', float: 'right'}}/></Fab>}>
                                    <Card style={{width: '200px', height: '120px'}}>
                                    <h2 style={{fontSize: '15px'}}><strong>Volute</strong></h2>
                                    <i>This part of the violin  is the head of the violin, it has the caracol form</i>
                                </Card>
                                    </Popup>
                                </Grid>
                                <Grid style={{paddingLeft: '520px'}} container spacing={60}>
                                    <Popup trigger={<Fab style={{fontSize: '10px', width: '100px', height: '50px'}}>Violin's Arm<ArrowRightAltIcon style={{color: 'Highlight', fontSize: '15px', float: 'right'}}/></Fab>}>
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
                                            <i>This part is the back of the violin, so his function is to receive the vibration from the Violin's Soul</i>
                                        </Card>
                                    </Popup>
                                </Grid>
                                <Grid style={{paddingLeft: '850px'}} container spacing={70}>
                                    <Popup trigger={<Fab style={{fontSize: '10px', width: '100px', height: '50px'}}>Harpsichords(Cravelhas)<ArrowRightAltIcon style={{color: 'Highlight', fontSize: '15px', float: 'right'}}/></Fab>}>
                                        <Card style={{width: '360px', height: '90px'}}>
                                            <h2 style={{fontSize: '15px'}}><strong>Harpsichords(Cravelhas)</strong></h2>
                                            <i>This part is use to affinated the Violin's strings at the superior point</i>
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
                                            <p>It will receive more vibrations from the violin's soul, if you never knew this, stay knowing, the sound in the violin, will be reflected from de soul, and it will be distributed for the two tops</p>
                                        </Card>
                                    </Popup>
                                </Grid>
                                <Grid style={{paddingLeft: '530px'}} container spacing={30}>
                                    <Popup trigger={<Fab style={{fontSize: '12px', width: '100px', height: '50px'}}>Violin's F<ArrowRightAltIcon style={{color: 'Highlight', fontSize: '20px', float: 'left'}}/></Fab>}>
                                        <Card style={{width: '160px', height: '300px'}}>
                                            <h2 style={{fontSize: '15px'}}><strong>Fs</strong></h2>
                                            <i>This two formates is the more important piece at the instrument</i><Divider/>
                                            <p>Because this two F pieces will be the exit of the sound's air, at the case, if this two pieces didn't exist there, the sounds would not exit</p>
                                        </Card>
                                    </Popup>
                                </Grid>
                                <Grid style={{paddingLeft: '690px'}} container spacing={27}>
                                    <Popup trigger={<Fab style={{fontSize: '12px', width: '100px', height: '50px'}}><ArrowLeftIcon style={{color: 'Highlight', fontSize: '20px', float: 'left'}}/>Easel</Fab>}>
                                        <Card style={{width: '160px', height: '300px'}}>
                                            <h2 style={{fontSize: '15px'}}><strong>Easel</strong></h2>
                                            <i>So, all you have been saw until here, receive vibration's sounds!</i><Divider/>
                                            <p>But this instrument's piece is the first piece that will receive the all strongs vibration's sounds from the strings</p>
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
            </Card><br/><hr/><br/><br/><br/>
            <Grid style={{paddingLeft: '268px'}} container spacing={5}>
                <motion.div
                initial={{x: -130}}
                animate={{x: 0}}
                transition={{duration: 3}}>
                <Card>
                    <ViolaPratice/>
                </Card>
                </motion.div>
            </Grid>
            <br/><br/><br/>
            <Grid container spacing={13.5} style={{ float: 'left', paddingLeft: '275px', paddingTop:'40px'}}>
                <Popup trigger={<Button style={{backgroundColor: 'orange', color: 'midnightblue', boxShadow: '0 0 5px 5px', fontFamily: 'serif'}}>
                <Grid container spacing={0} style={{paddingLeft: '4px'}}>
                    <img style={{width: '105px', height: '105px', borderRadius: '50px', margin: '-25px', filter: 'brightness(100%)'}} src='https://media4.giphy.com/media/5xtDarJ5dhYzsOCYYlW/giphy.gif?cid=ecf05e4735qcscb75464e3kilc8bszc4377nssdle0bour5d&ep=v1_gifs_search&rid=giphy.gif&ct=g' alt='imagemBow'/>
                </Grid>
                Viola Tuner</Button>}>
                    <ViolaAfin/>
                </Popup>
            </Grid><br/><br/><br/><br/>
            <div style={{margin: '50px'}}>
                <fieldset style={{backgroundColor: 'dodgerblue', borderColor: 'midnightblue', boxShadow: '0 0 20px 15px', borderRadius: '300px', width: '100px'}}>
                    <NotesViola/>
                </fieldset>
                <Grid style={{float: 'left', paddingLeft: '330px'}} container spacing={30}>
                        <Popup trigger={<Fab style={{boxShadow: '0 0 5px 5px', backgroundColor: 'orange', color: 'midnightblue'}}>Quizz1</Fab>}>
                            <ViolaQuizz/>
                        </Popup>
                    </Grid>
                    <Grid style={{float: 'left', paddingLeft: '50px'}} container spacing={6.7}>
                        <Popup trigger={<Fab style={{boxShadow: '0 0 5px 5px', backgroundColor: 'orange', color: 'midnightblue'}}>Quizz2</Fab>}>
                            <ViolaSents/>
                        </Popup>
                    </Grid>
                    <Grid style={{float: 'left', paddingLeft: '240px'}} container spacing={6.7}>
                        <Popup trigger={<Fab style={{boxShadow: '0 0 5px 5px', backgroundColor: 'orange', color: 'midnightblue'}}>Quizz3</Fab>}>
                            <ViolaQuizzOther/>
                        </Popup>
                    </Grid>
                </div><hr/><br/><br/>
                <ViolaModify/>
                <br/>
                <ViolaJumpNotes/>
                <br/><br/>
        </div>
    )
}

export default class ViolaDominion extends Component{
    constructor(props) {
        super(props);
        this.state = {
          question1: '',
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
        if (question1 === 'Tenor') {
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
                borderColor: 'cyan',
                borderStyle: 'ridge',
                borderWidth: '1px',
                opacity: '0.8',
                width: '330px',
                heigth: '150px',
                backgroundColor: 'darkblue'
            },
            title: {
              fontSize: '20px',
              fontFamily: 'serif',
              float: 'right',
              color: 'cyan'
            },
            imagem: {
                width: '130px', 
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
                    src='https://www.filarmonica.art.br/wp-content/uploads/2015/01/cordas_viola.jpg'
                    alt='interrogação'
                    />
                    <h1 style={styles.title}>Lets start to pratice Viola!</h1>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                  <Card style={{width: '300px', backgroundColor: 'transparent', fontFamily: 'serif', opacity: '1.5'}}>
                    <center>
                      <FormLabel style={{color: 'gold', fontFamily: 'serif', fontSize: '15px', boxShadow: '0 0 3px 3px'}}>What part of the pentagram the Viola make?</FormLabel><br/>
                      <Input style={{color: 'white', fontFamily: 'serif', fontSize: '20px'}} type="text" placeholder="Question-1" value={question1} onChange={this.handleUsernameChange} /><br/>
                      <Divider/>
                      <Button style={styles.LogButton} onClick={this.handleLogin}>Access</Button><br/>
                    </center>
                  </Card>
                </Typography>
              </AccordionDetails>
            </Accordion>
        </Grid>
        <Toaster/>
        <br/><Divider/><br/>
        {
            loggedIn && <Grid style={{paddingTop: '30px', float: 'left', paddingLeft: '300px'}}>
                <Button style={{color: 'blue', backgroundColor: 'gold', fontFamily: 'fantasy'}}>
                    <details><summary>Pratice Viola</summary>
                        <Viola_Player/>
                    </details>
                </Button></Grid>
        }
        </div>
        )
    }
}