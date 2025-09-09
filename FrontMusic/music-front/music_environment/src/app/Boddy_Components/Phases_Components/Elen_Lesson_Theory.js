import { Divider, Tooltip, Button, Grid, Fab, Paper } from '@mui/material';
import React, {useState} from 'react';
import QuizzOnze from '../Avaliation_Files/Theory_Quizz/Quizz_Phase_Eleven';
import { motion } from 'framer-motion';


export default function ElevenFase(){
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
                    <FaseOnze/>
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



function FaseOnze(){
    const alertF = {
        FEnlish: "Ellement F Added",
        FPortuguese: "Elemento F Adicionado"
    }
    const [content, setContent] = useState([]);
    const handleAddContent = () => {
        const newContent = ['F']
        setContent(content+ [] +newContent);
        alert(JSON.stringify(alertF))
    }
    const [Contente, setContente] = useState([])
    const handleAdMoreCont = () => {
        const newContente = ['f']
        setContente(Contente+ [] +newContente);
        alert("You added the weak f, do not click this element again")
    }
    const [Conteudo, setConteudo] = useState([])
    const handleAdMF = () => {
        const newConteudo = ['mf']
        setConteudo(Conteudo+ [] +newConteudo);
        alert('You added the "mf(litle stronge)", do not click on it again')
    }
    const [Contentinho, setContentinho] = useState([])
    const handleSeminima = () => {
        const newContentinho = ['F']
        setContentinho(Contentinho+ [] +newContentinho)
        alert(JSON.stringify(alertF))
    }
    const [SecondContentinho, setSecondContentinho] = useState([])
    const handleSecondContentinho = () => {
        const newSecond = ['f']
        setSecondContentinho(SecondContentinho+ [] +newSecond)
        alert("You added the weak f, do not click this element again")
    }
    const aboutMetric = [
        <div style={{width: '300px', height: '300px', backgroundColor: 'blue', margin: '-60px'}}>
            <motion.div
            initial={{scale: 0, x: -500}}
            animate={{scale: 1, x: 0}}
            transition={{duration: 5}}
            >
                <h3>Ever what we talk, we use formed words by a lot of syllables. These words have strong accentuations in only one syllable, while the others syllables have one weak accentuation!</h3>
                <Divider/>
                <h3>By example, when we say the word "to lead", we do not say con-DU-zir; instead it, we say, con-du-ZIR, with the acentuation strongest at the thirth syllable</h3>
            </motion.div>
        </div>
    ]
    const consider = [
        <div style={{width: '500px', backgroundColor: 'blue', margin: '-60px'}}>
            <motion.div
            initial={{scale: 0, rotateX: -250, rotateY: 250, rotateZ: 300}}
            animate={{scale: 1, rotateX: 0, rotateY: 0, rotateZ: 0}}
            transition={{duration: 6}}>
            <h4>The Métric Accent varies over with the formule of compasso, and it auxus to indentify it. By this goal, when we ear a musical stretch, we can to say, just earing the metrics accents, what is the formule of the compasso from that stretch(Same we not see the pentagram of te music)</h4>
            <Divider/>
            <h4><strong>The Métric Accent does not must to be literally executed on the music, it is, it is not order that to grow up  the intensity of the sound at the strong time, or that slow down the intensity of the sound of the weak time. The accent is naturaly feelled on the music when it is played in a way that was wrote</strong></h4>
        </motion.div>
        </div>
    ]
    const compass3 = [
        <div style={{backgroundColor: 'yellow', color: 'Highlight', margin: '-60px'}}>
            <motion.div
            initial={{rotateZ: -300, scale: 0}}
            animate={{rotateZ: 0, scale: 1}}
            transition={{duration: 5}}>
            <h3>The compasso 3/4</h3>
            <h4>This compasso wil receive the intensity like this: F- f - f</h4>
            <img style={{width: '400px', height: '100px'}} src='https://4.bp.blogspot.com/-W7kluiUc4_Q/Tp2YeT_BLCI/AAAAAAAAAHs/tTejxeDnX7c/s1600/Imagem2.png' alt='ternarioMetric'/>
            </motion.div>
        </div>
    ]
    return(
        <div style={{width: '1300px', height: '1100px', backgroundColor: 'lime', margin: '40px', paddingLeft: '50px'}}>
            <center><h1>Metric Accent</h1></center>
            <p style={{backgroundColor: 'cornflowerblue', color: 'yellow', fontFamily: 'serif', textAlign: 'center', letterSpacing: '5px'}}>Pass the mouse over to the marked texts below</p>
            <Divider style={{borderColor: 'blue'}}/><br/>
            <center><h4>As you can to see it here, only two clicks you make the metric ccent at this pentagram!!</h4></center>
            <Grid style={{paddingLeft: '100px'}} container spacing={0}>
            <Tooltip title={aboutMetric}>
                <Fab style={{backgroundColor: 'Highlight', color: 'gold', borderRadius: '20px'}}>M/A</Fab>
            </Tooltip>
            </Grid>
            <Grid style={{paddingLeft: '300px'}} container spacing={6.5}>
                <Tooltip title={consider}>
                    <Fab style={{width: '55px', height: '55px', borderRadius: '20PX', backgroundColor: 'darkblue', color: 'slategrey'}}>INF M/A</Fab>
                </Tooltip>
            </Grid>
            <Grid style={{paddingLeft: '450px'}} container spacing={7}>
                <Tooltip title={compass3}>
                    <Fab style={{fontSize: '10px', backgroundColor: 'Highlight', color: 'white'}}>Details of 3/3</Fab>
                </Tooltip>
            </Grid>
            <br/>
            <div style={{margin: '70px'}}>
            <fieldset style={{margin: '5px', height: '180px', borderColor: 'Highlight'}}>
            <Button style={{backgroundColor: 'midnightblue', float: 'right'}} onClick={handleAddContent}>Add <i>F(Strong)</i></Button>
            <br/><br/>
            <Button style={{backgroundColor: 'aliceblue', float: 'right'}} onClick={handleAdMoreCont}>Add <i>f(Weak)</i></Button>
            <br/>
            <img style={{width: '348px', height: '100px'}} src='https://th.bing.com/th/id/R.52ffa5fdd3e555d4e42e8321762fa2aa?rik=NvnaulEhJvGCNQ&riu=http%3a%2f%2fmusica.culturamix.com%2fblog%2fwp-content%2fgallery%2ftipos-de-compasso-musical-3%2fTipos-de-Compasso-Musical-3.jpg&ehk=gSy6KJo14gS3EkxZIdwi1fCUi9J%2f2Hb75jbjnfgLpfo%3d&risl=&pid=ImgRaw&r=0' alt='binaryCompass'/>
            <Grid style={{paddingLeft: '190px'}} container spacing={6}>
                <p>{content}</p>
            </Grid>
            <Grid style={{paddingLeft: '260px'}} container spacing={7}>
                <p>{Contente}</p>
            </Grid>
            <Grid style={{paddingLeft: '350px'}} container spacing={10}>
                <Tooltip title='The metric accent on this copassos formule, it has 2 intensity of the metric, and it seams to the first time will be strong F, the second and the time will be the weak f!'>
                    <Paper style={{backgroundColor: 'gold'}}>INF2/2</Paper>
                </Tooltip>
            </Grid>
            </fieldset></div>
            <div style={{margin: '70px'}}>
            <fieldset style={{height: '150px', borderColor: 'Highlight'}}>
            <Button style={{backgroundColor: 'midnightblue', float: 'right'}} onClick={handleSeminima}>Add <i>F(Strong)</i></Button>
            <br/><br/>
            <Button style={{backgroundColor: 'aliceblue', float: 'right'}} onClick={handleSecondContentinho}>Add <i>f(Weak)</i></Button>
            <br/><br/>
            <Button style={{backgroundColor: 'darkgreen', float: 'right'}} onClick={handleAdMF}>Add<i>mf</i></Button>
            <br/><br/>
            <Divider style={{borderColor: 'blue'}}/>
            <br/>
            </fieldset></div>
            <Grid style={{paddingLeft: '350px', paddingBottom: '100px', paddingTop: '20px'}} container spacing={30}>
            <img style={{width: '300px', height: '100px'}} src='https://musica.culturamix.com/blog/wp-content/gallery/compasso-quaternario-exemplos-3/Compasso-Quatern%C3%A1rio-Exemplos-3.jpg' alt='seminima'/>
            </Grid>
            <Grid style={{paddingLeft: '330px'}} container spacing={20.5}>
                <p>{Contentinho}</p>
            </Grid>
            <Grid style={{paddingLeft: '270px', paddingTop: '28px'}} container spacing={10}>
                <p>{SecondContentinho}</p>
            </Grid>
            <Grid style={{paddingLeft: '297px'}} container spacing={6.5}>
                <p>{SecondContentinho}</p>
            </Grid>
            <Grid style={{paddingLeft: '270px'}} container spacing={7}>
                <p>{Conteudo}</p>
            </Grid>
            <Grid style={{paddingLeft: '300px'}} container spacing={1}>
                <Tooltip title='The metric accent on this copassos formule, it has 4 intensity of the metric, andit seams to the first time will be strong F, the second and the forth time will be the weak f, and the thirth time wil be the(mf=half-strong)'>
                    <Paper style={{backgroundColor: 'gold'}}>INF4/4</Paper>
                </Tooltip>
            </Grid>
            <br/><br/><br/><br/>
            <Grid style={{textAlign: 'center', margin: '30px', paddingTop: '100px'}} container spacing={-5}>
                <fieldset>
                    <QuizzOnze/>
                </fieldset>
            </Grid>
        </div>
    )
}