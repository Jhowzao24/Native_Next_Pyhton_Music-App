import { Grid, Tooltip, Button, Fab } from '@mui/material';
import React, { useState } from 'react';
import QuizzTreze from '../Avaliation_Files/Theory_Quizz/Quizz_Phase_Thirteen';
import { Carousel } from 'antd';


export default function Thirteenth(){
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
                    <FaseTreze/>
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



function FaseTreze(){
    return(
        <div style={{margin: '-40px', backgroundColor: 'deepskyblue', borderRadius: '20px', width: '1400px', height: '1300px'}}>
            <center style={{margin: '20px'}}>
                <h1>Early rhythms</h1><hr/>
                <h2>The early rhythms of a music, that is located only at the begin of the musical score!
                    It can be classificated as Tético, Anacrusico, Acefalo
                </h2>
                <hr/>
                <h4>First of all,we will start talking about the Tético rhythmic</h4>
                <h5>For knowing it better, the Tético rhythm is all the starter note in the compasso, where there is a dot, you must to put the mouse under, take notice at the example below</h5>
                <img style={{width: '550px', height: '120px'}} src='https://th.bing.com/th/id/R.5badc83fc770a5f65b5417f9de8b93d7?rik=iwGfrU43UUDfoA&riu=http%3a%2f%2fprimeirosacordes.com.br%2fimages%2fstories%2fteoria%2fcompasso-simples-5.jpg&ehk=Md6Kk6bwHRrCM42qLVl9wExP4Jy6HliOlWwK7AbZKD4%3d&risl=&pid=ImgRaw&r=0' alt='teticoritmo'/>
                <Grid style={{paddingLeft: '635px'}} container spacing={9}>
                    <Tooltip title='This isthe skeptic rhythm, the first note of the compasso, ever that you see a compasso that is completed with the first time of the compasso, you ready must to know, this is the skeptic rhythm compasso'>
                        <p style={{fontFamily: 'fantasy'}}>T</p>
                    </Tooltip>
                </Grid>
                <Grid style={{paddingLeft: '790px'}} container spacing={6.4}>
                    <Tooltip title='This isthe skeptic rhythm, the first note of the compasso, ever that you see a compasso that is completed with the first time of the compasso, you ready must to know, this is the skeptic rhythm compasso'>
                        <p style={{fontFamily: 'fantasy'}}>T</p>
                    </Tooltip>
                </Grid>
            </center>
            <hr/>
            <center style={{margin: '20px', backgroundColor: 'gold'}}>
              <Carousel style={{width: '900px', height: '250px', backgroundColor: 'black', color: 'gold', fontFamily: 'monospace'}}>
                <h2>At the Second time we will get the anacrusico rhythm</h2>
                <h3>This rhythm is based that the first compasso ever will have a note before this compasso, look the image below:</h3>
                <div style={{alignContent: 'center'}}>
                  <img style={{width: '600px', height: '200px'}} src='https://th.bing.com/th/id/OIP.njeLpNS7ZRod8Wxs9yx7dAHaCo?pid=ImgDet&rs=1' alt='anacrusico'/>
                </div>
                <h3><strong>Notice that, the Anacruse is one note before the next compasso, and it means that the last note is not of the next compasso. It is like as this note was be in the zero compasso! By this motive that is not spelled pauses before the anacruse note to complete the compasso</strong></h3>
                <h4>Considering it, the anacrusico rhythm is considered when this earlier notes <strong>cover until the half</strong> of a binary compasso or a quaternary compasso, or when cover both until two-thirds of a ternary compasso</h4>
                <h3>Take any examples of the Anacrusico in the rhythms below:</h3>
                <h1>Compasso Binary</h1>
                <Grid style={{float: 'left', paddingLeft: '50px'}} container spacing={0}>
                    <img style={{width: '300px', height: '150px', paddingTop: '60px'}} src='https://th.bing.com/th/id/R.d4102f1544aba2a8353cb60261d7e388?rik=3sjG4AbL8r0eeA&riu=http%3a%2f%2fprimeirosacordes.com.br%2fimages%2fstories%2fteoria%2fcompasso-simples-2.jpg&ehk=zn3eINDyKKRxdmwGqQW%2f5DnL5iWJftIWl9yiLY6iT8U%3d&risl=&pid=ImgRaw&r=0' alt='binario'/>
                </Grid>
                <h1>Compasso Ternary</h1>
                <Grid style={{paddingLeft: '300px'}} container spacing={0}>
                  <img style={{width: '350px', height: '150px'}} src='https://1.bp.blogspot.com/-rHF9EmsteCk/UIR7hj0PTAI/AAAAAAAAD10/fi-DWiJD0aI/s1600/tern%C3%A1rio+3+-+4.jpg' alt='ternario'/>
                </Grid>
                <h1>Compasso Quaternary</h1>
                <Grid container spacing={0}>
                    <img style={{width: '500px', height: '150px', paddingTop: '70px'}} src='https://th.bing.com/th/id/OIP.wGxjZW9F8Fv_n1fQqacLzgHaDt?w=600&h=300&rs=1&pid=ImgDetMain' alt='qauternario'/>
                </Grid>
              </Carousel>
            </center>
            <br/>
            <center>
                <h3>Acefalo</h3>
                <hr/>
                <h3>This is a rhythm started by a contretemps, it is, when the begin of the first compasso is occuped by pause, be it wrote or not wrote!</h3>
                <hr/>
                <img style={{width: '500px', height: '120px'}} src='https://th.bing.com/th/id/R.4b98ca993c108e5994a39681848eeaa1?rik=NI7aJwdZjR0VPw&pid=ImgRaw&r=0' alt='acefalo'/>
                <h5>You can repair that the score start with a pause, and there is still a score with a acefalo rhythm that start with no pause, and this score start with only a note!</h5>
            </center>
            <QuizzTreze/>
        </div>
    )
}