/* eslint-disable @next/next/no-img-element */
import React, {Component, useState} from 'react';
import { Divider, Tooltip, Button, Col, Card, Typography, Collapse, Input } from 'antd';
import Popup from 'reactjs-popup';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Questionario from '../Avaliations_Files/PraticesAvaliations/IALesson';
import { motion } from 'framer-motion';
import VioloncelloPratice from '../Phases_Components/FirstPratice/ExecPratice/Violoncelo_Notes_Parts';
import SoundPlayer from '../Pratice_Files/FilesPratices/CellAfnination';
import MeuCompApp from '../ExercisesCello/PentagramExercise';
import Quiz from '../Avaliations_Files/PraticesAvaliations/CelloQuizz/CelloQuizz';
import ViolaSents from '../Avaliations_Files/PraticesAvaliations/ViolaQuizz';
import ViolaVirtuoso from '../Avaliations_Files/PraticesAvaliations/Virtuoso';
import AutoMoveQueue from './CelloNotesJump';
import { Toaster, toast } from 'react-hot-toast';
import CelloModify from '../NotesScaleChange/CelloModificationScale';

const Title1 = (
  <div style={{margin: -'-30px', backgroundColor: 'gold', color: 'black'}}>
    <h3>This piece at the cello bow will be the place that the musician will start for the 1º time to inity to play a music!</h3>
  </div>
);

const Title2 = (
  <div style={{margin: '-30px', backgroundColor: 'gold', borderColor: 'blue', borderStyle: 'double', color: 'black'}}>
    <h3>This image is a violin, but a cello bow is similar at the violin bow, and this image will be our example</h3>
    <br/>
    <h3>This is the top of the cello bow, and this will be played when the mark at th pentagram mark this signal like: V, and you wil start to play at the top of de cello bow!</h3>
  </div>
);

const Title3 = (
  <div style={{margin: '-30px', backgroundColor: 'gold', borderColor: 'blue', borderStyle: 'double', color: 'black'}}>
    <h3>This image can to help us because the same string is dividing the cello bow in two pieces, and it will be used by us to explan about it, When we talk about the middle of the cello bow, it has two pieces of time in their own spaces time, because we have the 2º and the 3º time ate the description cello bow area!</h3>
  </div>
)

const Layout1 = () => (
  <div>
    <center>
      <h1>All about the bow of the cello</h1>
    </center>
    <details><summary style={{color: 'white'}}>Cello Bow!</summary>
      <Card>
        <Tooltip title={Title1}>
          <img alt='CelloBown' src='https://th.bing.com/th/id/R.4cc3297c99ca2761c0d8b68278915395?rik=025YdTdthsepeA&pid=ImgRaw&r=0' style={{borderRadius: '30px', borderColor: 'blue', borderStyle: 'double', borderWidth: '5px', width: '300px'}} />
        </Tooltip>
      </Card>
      <Card>
        <Tooltip title={Title2}>
          <img alt='CelloBown' src='https://th.bing.com/th/id/R.fd611207ec7bc7d5cee788062136bca4?rik=z1zFN%2fyJMEZdhw&riu=http%3a%2f%2fi.kinja-img.com%2fgawker-media%2fimage%2fupload%2fs--nS1Ak5qC--%2fx1n1e6clvtdf5hvxaald.gif&ehk=YAj27KdtOCMoZmfNjLVBf2oSYRWcR4UBPFRnikMjOXA%3d&risl=1&pid=ImgRaw&r=0' style={{borderRadius: '30px', borderColor: 'blue', borderStyle: 'double', borderWidth: '5px', width: '300px'}} />
        </Tooltip>
      </Card>
      <Card>
        <Tooltip title={Title3}>
          <img alt='CelloBown' src='https://www.equilibriumescola.com.br/wp-content/uploads/2020/12/violoncelo-1536x609.png' style={{borderRadius: '30px', borderColor: 'blue', borderStyle: 'double', borderWidth: '5px', width: '300px'}} />
        </Tooltip>
      </Card>
    </details>
  </div>
);

const HeightCello = (
  <div style={{margin: '-30px', backgroundColor: 'Highlight', color: 'gold'}}>
    <h3>The eventual height of this instrument is biggest than other we have been saw!</h3>
    <br/>
    <h3>And by it we ever will put the cello like the image demonstrates, Its going to be a little bit leaning over our bodies and we will play this instrument like this!!</h3>
    <br/>
    <h3>The unik confortable form to play this instrument will be like that!!</h3>
  </div>
)

const Layout2 = () => (
  <div>
    <h1>All about the cello height!!</h1>
    <details><summary style={{color: 'white'}}>Height of the Cello!</summary>
    <Tooltip title={HeightCello}>
      <img src='https://www.ufsm.br/app/uploads/sites/601/2022/08/Capa_com_cores_corrigidas.jpg' alt='MirrorCello' style={{width: '350px'}}/>
    </Tooltip>
    </details>
  </div>
);

function CelloPlayer(){
  const [useLayout1, setUseLayout1] = useState(true);
    return(
        <div>
            <Card>
              <Card style={{width: '730px'}}>
                  <Popup replacement='center' trigger={<Button style={{color: 'midnightblue', fontFamily: 'fantasy', letterSpacing: '2px'}}>Pieces of the Cello!</Button>}>
                        <Card style={{width: '500px'}}>
                            <Col style={{paddingLeft: '280px', paddingTop: '30px'}}>
                                <img style={{width: '200px', height: '150px'}} src='https://www.encorda.com.br/wp-content/uploads/2020/05/original-0c03b24f38bd4932616d0978d592b3e0.jpg' alt='sentadoviolon'/>
                            </Col>
                            <Questionario/>
                        </Card>
                    </Popup><br/><br/><br/><br/>
                    <Col style={{paddingLeft: '100px'}} container spacing={3}>
                      <motion.div
                      initial={{x: 250}}
                      animate={{x: 0}}
                      transition={{duration: 3}}
                      >
                        <Card>
                          <VioloncelloPratice/>
                        </Card>
                      </motion.div>
                    </Col>
                    <Col container spacing={3} style={{ float: 'left', paddingLeft: '450px'}}>
                      <Popup trigger={<Button style={{backgroundColor: 'orange', color: 'midnightblue', boxShadow: '0 0 5px 5px', fontFamily: 'serif'}}>
                        <Col container spacing={0} style={{paddingLeft: '4px'}}>
                          <img style={{width: '105px', height: '105px', borderRadius: '50px', margin: '-25px', filter: 'brightness(150%)'}} src='https://media1.giphy.com/media/p92Pip4uIcuGY/giphy.gif?cid=ecf05e47t88nqsu4xdr4aabjipqesjkxrwrto90sqmlg378z&ep=v1_gifs_search&rid=giphy.gif&ct=g' alt='imagemBow'/>
                        </Col>
                        Cello Tuner</Button>}>
                          <SoundPlayer/>
                      </Popup>
                      </Col><br/><br/><br/><br/>
                      <div style={{margin: '10px'}}>
                        <div>
                          <MeuCompApp/>
                        </div>
                        <br/>
                        <br/>
                        <br/>
                        <Col container spacing={0} style={{paddingLeft: '30px', paddingTop: '150px'}}>
                          <Col style={{float: 'left', paddingLeft: '660px'}} container spacing={10}>
                            <Popup trigger={<Button style={{boxShadow: '0 0 5px 5px', backgroundColor: 'blue', color: 'white', fontFamily: 'serif'}}>
                              Quizz
                              </Button>}>
                              <Quiz/>
                            </Popup>
                        </Col>
                        <Col style={{float: 'left', paddingLeft: '190px'}} container spacing={10}>
                          <Popup trigger={<Button style={{boxShadow: '0 0 5px 5px', backgroundColor: 'orange', color: 'midnightblue'}}>Quizz</Button>}>
                            <ViolaSents/>
                          </Popup>
                          </Col>
                          <Col style={{float: 'left', paddingLeft: '420px'}} container spacing={10}>
                            <Popup trigger={<Button style={{boxShadow: '0 0 5px 5px', backgroundColor: 'orange', color: 'midnightblue'}}>Quizz</Button>}>
                              <ViolaVirtuoso/>
                            </Popup>
                          </Col>
                        </Col>
                        </div><br/>
                        <header style={{margin: '50px', backgroundColor: 'Highlight', color: 'gold'}}>
                          <h1>Painel de Exercício para Violoncelo</h1>
                          <Button style={{backgroundColor: 'white'}} onClick={() => setUseLayout1(!useLayout1)}>
                            change the Lessons
                          </Button>
      
                          {useLayout1 ? <Layout1 /> : <Layout2 />}
                        </header>
                      <br/>
                      <AutoMoveQueue/>
                    <br/><br/><br/>
                    <CelloModify/>
                </Card>
            </Card><hr/>
        </div>
    )
}

export default class CelloPratice extends Component{
    constructor(props) {
        super(props);
        this.state = {
          question1: '',
          loggedIn: false,
          open: false,
        };
      };
      ShowCollapse = () => {
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
        if (question1 === 'Baixo') {
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
                <Col container spacing={3} style={{float: 'rigth', paddingLeft: '30px', paddingTop: '50px'}}>
                <Collapse style={styles.container}>
                <Collapse
                expandIcon={<ExpandMoreIcon style={{color: 'blue'}}/>}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                  <Typography>
                    <img 
                    style={styles.imagem}
                    src='https://th.bing.com/th/id/R.81d3371a14a5f89c5ad95e0203cf1dbc?rik=%2f%2fKINunvwF%2bfaQ&pid=ImgRaw&r=0'
                    alt='interrogação'
                    />
                    <h1 style={styles.title}>Lets start to pratice Cello!</h1>
                  </Typography>
                </Collapse>
                <Collapse>
                <Typography>
                  <Card style={{width: '300px', backgroundColor: 'transparent', fontFamily: 'serif', opacity: '1.5'}}>
                    <center>
                      <Typography style={{color: 'gold', fontFamily: 'serif', fontSize: '15px', boxShadow: '0 0 3px 3px'}}>What part the Cello make in pentagram?</Typography><br/>
                      <Input style={{color: 'white', fontFamily: 'serif', fontSize: '20px'}} type="text" placeholder="Question-1" value={question1} onChange={this.handleUsernameChange} /><br/>
                      <Divider/>
                      <Button style={styles.LogButton} onClick={this.handleLogin}>Access</Button><br/>
                    </center>
                  </Card>
                </Typography>
              </Collapse>
            </Collapse>
        </Col>
        <br/><Divider/>
        {
             
            loggedIn && <Col style={{paddingTop: '15px', float: 'left', paddingLeft: '300px'}} container spacing={3}>
              <Button style={{color: 'blue', backgroundColor: 'gold', fontFamily: 'fantasy'}}><details><summary>Lets pratie Cello</summary>
                <CelloPlayer/>
              </details>
              </Button>
              </Col>
        }
        <Toaster/>
        </div>
        )
      }
}