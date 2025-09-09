import React, { useState } from 'react';
import { Card, Paper, Button, Fab, Grid, Alert, Divider } from '@mui/material';
import Popup from 'reactjs-popup';
import Table_Notes from '../Phases_Components/Phase_Image/Table_Notes.png';
import QuizzTwoPhase from '../Avaliation_Files/Theory_Quizz/Quizz_Phase_Two';
import { Carousel } from 'antd';

export default function Smodule(){
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
                    <ModuleSecond/>
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
  

function ModuleSecond(){
    const [finishedTimeout, setFinishedTimeout] = React.useState(false);
    React.useEffect(() => {
      const id = setTimeout(() => {
        setFinishedTimeout(true);
      }, 5000);
  
      return () => clearTimeout(id);
    }, []);
    return(
        <div style={{width: '1400px', height: '900px', backgroundColor: 'midnightblue', color: 'cyan'}}>
            <Carousel style={{width: '1300px', height: '80px', color: 'white'}}>
            <Paper>Musical Figures</Paper>
            <i>Before you start, take notice on to catch this all information, it will be very important for you</i>
            <div style={{paddingLeft: '200px'}}>
            <Popup trigger={<Fab style={{backgroundColor: 'darkgreen', color: 'cyan', fontFamily: 'fantasy'}}>Figures</Fab>}>
                <h4>Opening...</h4>
                {finishedTimeout && <Card style={{width: '400px', height: '400px'}}>
                <img style={{width: '280px', height: '270px'}} src={Table_Notes} alt='notesTable'/><hr/>
                <strong>Musical Notes:</strong><i>It is the figure that represent the sound</i><br/>
                <strong>Musical Pauses:</strong><i>It is the figure that represent the silence</i>
                </Card>}
            </Popup></div>
            <hr/>
            <center><Card>Subdivision of the notes</Card>Click on each one to see the subdivision</center>
            <Grid style={{paddingLeft: '30px'}}>
            <Popup style={{paddingLeft: '50px'}} trigger={<Fab style={{backgroundColor: 'cyan'}}>
                <img style={{width: '50px', height: '50px', borderRadius: '100px'}} src='https://th.bing.com/th/id/R.b1311f4c093e01fca8b4c4734a42f512?rik=%2b2ouovXGzMJGEg&pid=ImgRaw&r=0' alt='semibreve'/>
            </Fab>}>
                <center><Card style={{width: '100px', opacity: '5px'}}>
                    <p>Minim</p>
                    <img style={{width: '50px', height: '50px', borderRadius: '100px'}} src='https://static.dicionariodesimbolos.com.br/upload/9d/cb/notas-musicais-20_xl.jpeg' alt='minima'/>
                    <img style={{width: '50px', height: '50px', borderRadius: '100px'}} src='https://static.dicionariodesimbolos.com.br/upload/9d/cb/notas-musicais-20_xl.jpeg' alt='minima'/>
                </Card></center>
            </Popup></Grid>
            <Grid style={{float: 'right', paddingLeft: '230px'}} container spacing={0.3}>
            <Popup trigger={<Fab style={{backgroundColor: 'cyan'}}>
                <img style={{width: '50px', height: '50px', borderRadius: '100px'}} src='https://static.dicionariodesimbolos.com.br/upload/9d/cb/notas-musicais-20_xl.jpeg' alt='minima'/>
            </Fab>}>
                <center><Card>
                    <p>Quarter Note</p>
                    <img style={{width: '50px', height: '50px', borderRadius: '100px'}}  src='https://th.bing.com/th/id/OIP.ueck1D92bk4ertQ3001hVAAAAA?rs=1&pid=ImgDetMain' alt='seminima'/>
                    <img style={{width: '50px', height: '50px', borderRadius: '100px'}}  src='https://th.bing.com/th/id/OIP.ueck1D92bk4ertQ3001hVAAAAA?rs=1&pid=ImgDetMain' alt='seminima'/>
                </Card></center>
            </Popup></Grid>
            <Grid style={{float: 'right', paddingLeft: '380px'}} container spacing={0.3}>
            <Popup trigger={<Fab style={{backgroundColor: 'cyan'}}>
                <img style={{width: '50px', height: '50px', borderRadius: '100px'}}  src='https://th.bing.com/th/id/OIP.ueck1D92bk4ertQ3001hVAAAAA?rs=1&pid=ImgDetMain' alt='seminima'/>
            </Fab>}>
                <center>
                    <Card>
                    <p>Quaver</p>
                    <img style={{width: '50px', height: '50px', borderRadius: '100px'}} src='https://th.bing.com/th/id/R.acf4852c612324b64a0d5126261f22fd?rik=3bLkoyp6iMzX3Q&pid=ImgRaw&r=0' alt='colcheia'/>
                    <img style={{width: '50px', height: '50px', borderRadius: '100px'}} src='https://th.bing.com/th/id/R.acf4852c612324b64a0d5126261f22fd?rik=3bLkoyp6iMzX3Q&pid=ImgRaw&r=0' alt='colcheia'/>
                    </Card>
                </center>
            </Popup></Grid>
            <Grid style={{float: 'right', paddingLeft: '530px'}} container spacing={0.3}>
                <Popup trigger={<Fab style={{backgroundColor: 'cyan'}}>
                    <img style={{width: '50px', height: '50px', borderRadius: '100px'}} src='https://th.bing.com/th/id/R.acf4852c612324b64a0d5126261f22fd?rik=3bLkoyp6iMzX3Q&pid=ImgRaw&r=0' alt='colcheia'/>
                </Fab>}>
                    <center>
                        <Card>
                            <Alert>
                        <p>Semiquaver</p>
                        <img style={{width: '50px', height: '50px', borderRadius: '100px'}} src='https://th.bing.com/th/id/R.8b819ed7f2a65c884a5ff966d9bf3511?rik=1aEk1PzVdRPqqA&pid=ImgRaw&r=0' alt='semicolcheia'/>
                        <img style={{width: '50px', height: '50px', borderRadius: '100px'}} src='https://th.bing.com/th/id/R.8b819ed7f2a65c884a5ff966d9bf3511?rik=1aEk1PzVdRPqqA&pid=ImgRaw&r=0' alt='semicolcheia'/>
                        </Alert>
                        </Card>
                    </center>
                </Popup>
            </Grid>
            <Grid style={{float: 'right', paddingLeft: '700px'}} container spacing={0.3}>
                <Popup trigger={<Fab style={{backgroundColor: 'cyan'}}>
                    <img style={{width: '50px', height: '50px', borderRadius: '100px'}} src='https://th.bing.com/th/id/R.8b819ed7f2a65c884a5ff966d9bf3511?rik=1aEk1PzVdRPqqA&pid=ImgRaw&r=0' alt='semicolcheia'/>
                </Fab>}>
                    <center>
                        <Card>
                        <p>Demisemiquaver</p>
                        <img style={{width: '50px', height: '50px', borderRadius: '100px'}} src='https://th.bing.com/th/id/R.a8ab373d32864185391486777958a3ba?rik=943ehQPY0THOzA&pid=ImgRaw&r=0' alt='fusa'/>
                        <img style={{width: '50px', height: '50px', borderRadius: '100px'}} src='https://th.bing.com/th/id/R.a8ab373d32864185391486777958a3ba?rik=943ehQPY0THOzA&pid=ImgRaw&r=0' alt='fusa'/>
                        </Card>
                    </center>
                </Popup>
            </Grid>
            <Grid style={{float: 'right', paddingLeft: '860px'}} container spacing={0.3}>
                <Popup trigger={<Fab style={{backgroundColor: 'cyan'}}>
                    <img style={{width: '50px', height: '50px', borderRadius: '100px'}} src='https://th.bing.com/th/id/R.a8ab373d32864185391486777958a3ba?rik=943ehQPY0THOzA&pid=ImgRaw&r=0' alt='fusa'/>
                </Fab>}>
                    <center>
                        <Card>
                        <p>Hemidemisemiquaver</p>
                        <img style={{width: '50px', height: '50px', borderRadius: '100px'}} src='https://th.bing.com/th/id/R.04dddbb4a283a7142fe26933a97368cd?rik=tk503dl%2f1rqjvQ&pid=ImgRaw&r=0' alt='semifusa'/>
                        <img style={{width: '50px', height: '50px', borderRadius: '100px'}} src='https://th.bing.com/th/id/R.04dddbb4a283a7142fe26933a97368cd?rik=tk503dl%2f1rqjvQ&pid=ImgRaw&r=0' alt='semifusa'/>
                        </Card>
                    </center>
                </Popup>
            </Grid>
            <Grid style={{float: 'right', paddingLeft: '1000px'}} container spacing={0.3}>
                <Popup trigger={<Fab style={{backgroundColor: 'cyan'}}>
                    <img style={{width: '50px', height: '50px', borderRadius: '100px'}} src='https://th.bing.com/th/id/R.04dddbb4a283a7142fe26933a97368cd?rik=tk503dl%2f1rqjvQ&pid=ImgRaw&r=0' alt='semifusa'/>
                </Fab>}>
                    <center>
                        <Card>
                            <h4>This note is called like: Hemidemisemiquaver<hr/>
                            SO, THIS NOTE, HAS NO MORE SUBDIVISION ON IT! 
                                THE SUBDIVISON END HERE AT THIS NOTE
                            </h4>
                        </Card>
                    </center>
                </Popup>
            </Grid><hr/>
            <center>
                <Paper>Compass Bar</Paper>
                <Grid style={{float: 'left', paddingLeft: '50px'}}>
                    <Popup trigger={<Button style={{backgroundColor: 'Highlight', color: 'white'}}>Simple Bar</Button>}>
                        <Card style={{width: '300px', height: '250px'}}>
                        <img style={{width: '270px', height: '150px'}} src='https://th.bing.com/th/id/R.ebe2ae8c2f543f926866e20576f553f2?rik=mX%2b4GMlKvmFRfw&pid=ImgRaw&r=0' alt='simplesbar'/>
                        <strong><p>This bar will repeat every division of the each one compasses</p></strong>
                        </Card>
                    </Popup>
                </Grid>
                <Grid style={{float: 'left', paddingLeft: '80px'}}>
                    <Popup trigger={<Button style={{backgroundColor: 'Highlight', color: 'white'}}>Double Bar</Button>}>
                        <Card style={{width: '300px', height: '300px'}}>
                        <img style={{width: '270px', height: '150px'}} src='https://th.bing.com/th/id/R.86413f9c5f3d7fc419a19d7c2b0cccd3?rik=7d%2fIHTa3eM3iEg&riu=http%3a%2f%2f3.bp.blogspot.com%2f-6y8CyU98Vrc%2fT11QW7ZpayI%2fAAAAAAAAAKw%2foJBtMF7AGwM%2fs1600%2fBarra_Dupla.jpg&ehk=cRjEpGiO2aYVyBn1cgMLJo9fLTaxFPm7bdNqllbAszA%3d&risl=&pid=ImgRaw&r=0' alt='duplabar'/>
                        <strong><p>This bar will divid every changer of the rhythm, how you saw at the image, every changing of the 
                            compass in a half of the music, the double bar must to appear
                        </p></strong>
                        </Card>
                    </Popup>
                </Grid>
                <Grid style={{float: 'left', paddingLeft: '110px'}}>
                    <Popup trigger={<Button style={{backgroundColor: 'Highlight', color: 'white'}}>End Bar</Button>}>
                        <Card style={{width: '300px', height: '300px'}}>
                            <img style={{width: '270px', height: '150px'}} src='https://th.bing.com/th/id/R.0c0bc942d8f74413613151d8b75f45af?rik=usTpTEMs%2bG2PBw&riu=http%3a%2f%2f3.bp.blogspot.com%2f-Rhj3P4SdiLE%2fT11RWXHfl3I%2fAAAAAAAAAK4%2fS46hltlNIm4%2fs1600%2fBarra_Final.jpg&ehk=ayFLeMegVFeyc5Rc3eSBbpxldKKSz%2bBS3PIszd1MDRI%3d&risl=&pid=ImgRaw&r=0' alt='finalbar'/>
                            <strong><p>This bar will appear on every end of the pentagram</p></strong>
                        </Card>
                    </Popup>
                </Grid>
                <Grid style={{float: 'left', paddingLeft: '140px'}}>
                    <Popup trigger={<Button style={{backgroundColor: 'Highlight', color: 'white'}}>Ritornelo Bar</Button>}>
                        <Card style={{width: '400px', height: '300px'}}>
                            <img style={{width: '290px', height: '150px'}} src='https://th.bing.com/th/id/OIP.Kg5CBJp1lS8WPsX9qPIkfwHaEL?pid=ImgDet&rs=1' alt='ritornbar'/>
                            <strong><p>This bar will order you to repeat for 3 times for example, The reapeating time will be made by the all notes that is in the middle of this bar,
                                By the way, this bar has no limite number of repeat</p></strong>
                        </Card>
                    </Popup>
                </Grid>
            </center><br/><br/><hr/>
            </Carousel>
            <center>
                <Paper>Compass Simple Formulas</Paper>
                <Grid style={{float: 'left', paddingLeft: '50px'}}>
                    <Popup trigger={<Fab style={{backgroundColor: 'Highlight', color: 'white', fontFamily: 'fantasy'}}>2/2</Fab>}>
                        <Card style={{width: '500px', height: '600px'}}>
                            <img style={{width: '290px', height: '300px'}} src='https://th.bing.com/th/id/OIP.7By3xSlNSL-xCUY8Sr22ZAHaHa?pid=ImgDet&rs=1' alt='2/2'/><hr/><br/>
                            <strong><i>Every inferior notes, will be the figure that will appear once in the compasso!
                                So... course, the superior Number will determined how many time this figure will appear in the any compasso
                                The other way to recognize the compasso formula is: about the signal: Like : C with a bar over the top
                                <img style={{width: '400px', height: '100px'}} src='https://4.bp.blogspot.com/-YWf8yU1focc/U2EnvBL94kI/AAAAAAAAGrA/Yef9dzn7r7Q/s1600/formula-compasso-d.gif' alt='2/2c'/>
                                </i></strong>
                        </Card>
                    </Popup>
                </Grid>
                <Grid style={{float: 'left', paddingLeft: '160px'}}>
                    <Popup trigger={<Fab style={{backgroundColor: 'Highlight', color: 'white', fontFamily: 'fantasy'}}>3/3</Fab>}>
                    <Card style={{width: '350px', height: '500px'}}>
                            <img style={{width: '350px', height: '300px'}} src='https://th.bing.com/th/id/R.99d18029575e631e7bee06b4d15c8e6d?rik=5irJjaxavjVM0A&riu=http%3a%2f%2f4.bp.blogspot.com%2f-z8WrVwfUpj0%2fUeXKEAwFZZI%2fAAAAAAAAC84%2fSzuQ8spH_Ds%2fs1600%2fformula-compasso-b.gif&ehk=ZMXJOv7%2bMXSDV1Ech0TyNyBhgyX1WKT%2fMNrrXjTrX%2bA%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1' alt='2/2'/>
                            <strong><i>Taking a look at the image, that show the last example! Every inferior notes, will be the figure that will appear once in the compasso!
                                So... course, the superior Number will determined how many time this figure will appear in the any compasso</i></strong>
                        </Card>
                    </Popup>
                </Grid>
                <Grid style={{float: 'left', paddingLeft: '190px'}}>
                    <Popup trigger={<Fab style={{backgroundColor: 'Highlight', color: 'white', fontFamily: 'fantasy'}}>4/4</Fab>}>
                    <Card style={{width: '800px', height: '360px'}}>
                            <img style={{width: '700px', height: '200px'}} src='https://th.bing.com/th/id/R.f325897bd41a7aa3f6d03b7634f0d4b8?rik=qisl3iU5URUx1g&riu=http%3a%2f%2ffarm4.static.flickr.com%2f3473%2f3833572422_30fbfc81a2.jpg&ehk=6G9Rj8Oc8Z5%2bm%2bvM3HEh5CAk%2fLmIdz5gjcCUpOZnPY8%3d&risl=&pid=ImgRaw&r=0' alt='2/2'/><hr/>
                            <strong><i>Every inferior notes, will be the figure that will appear once in the compasso!
                                So... course, the superior Number will determined how many time this figure will appear in the any compasso
                                And, we cansee a signal there at the compassos formula place!<br/>
                                This signal identifythe the same context of the formule 4/4! So, if you find a signal like a C at the place of the 4/4
                                please, dont be scaried, it is just the same context!!
                                </i></strong>
                        </Card>
                    </Popup>
                </Grid>
            </center><br/><br/>
            <br/><hr/><br/>
            <center>
                <Card>
                    Exercises
                </Card><br/><Divider/><br/>
                    <Button style={{backgroundColor: 'white', color: 'midnightblue', width: '900px', borderStyle: 'double', borderWidth: '2px', borderColor: 'cyan', borderRadius: '30px'}}>
                        <QuizzTwoPhase/>
                    </Button>
            </center>
        </div>
    )
}