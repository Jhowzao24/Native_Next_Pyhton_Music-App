import { Divider, Fab, Grid, Tooltip, Paper, Button } from '@mui/material';
import React, { useState } from 'react';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import MouseIcon from '@mui/icons-material/Mouse';
import QuizzSetima from '../Avaliation_Files/Theory_Quizz/Quizz_Phase_Seven';

export default function SetimaFase(){
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
                    <FaseSete/>
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

  function FaseSete(){
    const GetArmor = [
        <div style={{backgroundColor: 'mediumturquoise', width: '700px', color: 'black'}}>
            <h3>Understand it:</h3>
            <Divider style={{borderColor: 'mediumspringgreen', borderWidth: '5px'}}/>
            <h4>This all examples is about that each one of this clave armor will be considered when this goes wroten at the pentagram, so, only one clave armor will be consider at the begin of the pentagram of the all that, that is marked here</h4>
            <img style={{width: '700px', height: '100px'}} src='https://musicclan.com.br/wp-content/uploads/2019/12/Armadura-de-Clave-do-Ciclo-das-Quintas.png' alt='armorssustenid'/>
            <img style={{width: '700px', height: '100px'}} src='https://2.bp.blogspot.com/-PsROLdffYxA/ViVIS2CtHCI/AAAAAAAAAIA/xx4IGx0nDVE/s1600/120413_0041_Nivel04Part4.png' alt='armorBemol'/>
            <Grid style={{paddingLeft: '250px'}} container spacing={27}>
            <Tooltip arrow placement='right' title='SO, when the tonic of the scale be alterated, this alteration still will do part of the name of the scale(ex: FÁ Suatenido Major, and, DÓ Sustenido Major)'>
                <p><CircleNotificationsIcon/> -- # 1</p>
            </Tooltip>
            </Grid>
            <Grid style={{paddingLeft: '250px', paddingTop: '70px'}} container spacing={15}>
            <Tooltip arrow placement='right' title='The Sustenidos that is putted at the notes FÁ, DO, SOL, RÉ, LÁ, MI, SI, at each one of the three claves, they obey the position of the notes at the pentagram, agreed with each clave!!'>
                <p><CircleNotificationsIcon/> -- # 2</p>
            </Tooltip>
            </Grid>
            <Grid style={{paddingTop: '121px', paddingLeft: '100px'}}>
                <Tooltip arrow placement='top' title='When the tonic be alterated, this alteration still will do part of the name of the scale(ex: SI Bemol Major and MI Bemol Major)'>
                    <p><CircleNotificationsIcon/> -- b 1</p>
                </Tooltip>
            </Grid>
            <Grid style={{paddingLeft: '300px'}} container spacing={6}>
                <Tooltip arrow placement='top' title='The bemols putted  at the notes: SI, MI, LA, RÉ, SOL, DÓ, FÁ, on each one of three claves, they obey the notes position on pentagram, agreed with each clave'>
                    <p><CircleNotificationsIcon/> -- b 2</p>
                </Tooltip>
            </Grid>
        </div>
    ]
    const imagesib = [
        <div style={{backgroundColor: 'gold', color: 'blue'}}>
            <p>As you can to see here, this two objects will be instead on at the begin of the pentagram to describe that the height of the music that you will play, this music  is based only on this scale, the significate of the music is based on this notes that is: SI and MI, this two will decrease the half of the note thathas one tone; this notes that will be decreased is SI, MI</p>
            <img style={{width: '300px', height: '200px'}} src='https://th.bing.com/th/id/OIP.X743DEViPaeFGzzbb2RIIwHaEH?pid=ImgDet&rs=1' alt='sibimg'/>
        </div>
    ]
    const ExtraInf = [
        <div style={{backgroundColor: 'khaki', color: 'black', opacity: '70%'}}>
            <h2>When you think about the scales, any escala has an armor of clave, the armor of clave is derivaded from the own scale; Pass the mouse on the image below and understand the content</h2>
            <p>
                <Tooltip title={imagesib}>
                    <img style={{width: '300px'}} src='https://bigunha.files.wordpress.com/2017/09/escala-sib.png' alt='sib'/>
                </Tooltip>
            </p>
        </div>
    ]
    const armorClave = [
        <div style={{width: '400px', height: '240px', backgroundColor: 'dodgerblue'}}>
            <Paper>
                <h2>Clave armor is the name that give the conjunt of the fixed accidents between the clave and the formula de compasso</h2>
            </Paper>
            <img style={{width: '300px', height: '100px'}} src='https://1.bp.blogspot.com/-iPLtB5ZD-F4/VT13bxAN-3I/AAAAAAAAALU/OEpb2rqN6_k/s1600/PENTAGRAMA%2B5.png' alt='armors'/>
            <Grid style={{paddingLeft: '100px'}} container spacing={10}>
                <Tooltip title='This is where the clefs are positioned'>
                    <fieldset style={{width: '30px', color: 'Highlight', fontSize: '13px'}}>SOL,<Divider/> FÁ,<Divider/> DÓ</fieldset>
                </Tooltip>
            </Grid>
            <Divider/>
            <Grid style={{paddingLeft: '140px'}} container spacing={8}>
                <Tooltip title='Here you will have scripted the all # accidents and b accidents too'>
                    <fieldset style={{width: '30px', color: 'Highlight', fontSize: '16px'}}>#,<Divider/>b</fieldset>
                </Tooltip>
            </Grid>
            <Divider/>
            <Grid style={{paddingLeft: '195px'}} container spacing={7}>
                <Tooltip title='Here tha famous Formule of compasso will be positioneted, being theirs like: 2/2, 3/3, 4/4, the simple formula of compasso'>
                    <fieldset style={{width: '30px', color: 'Highlight', fontSize: '16px'}}>Formula<Divider/>Compasso</fieldset>
                </Tooltip>
            </Grid><br/>
            <Divider/>
            <h3>Your finality will be to indicate that all the notes with the equal names to the accidents of the claves armor, it will be ever alterated by then</h3>
        </div>
    ]
    const in9 = [
        <div style={{width: '450px', height: '650px', backgroundColor: 'lightblue', color: 'darkgreen'}}>
            <h3>The formule of compasso in 9 is that on that the superior number has the number 9(9 moviments around of 3 integer moviments derivaded from the compasso of number 3), and the inferior number indicate the musical figure that represent each pulse or moviment.</h3>
            <Divider/>
            <fieldset>
                <p>The formule of compasso 9/8 determine that the compasso will have 9 pulses and that the quaver(figure of number 8) represent each pulse or moviment</p>
                <img style={{width: '400px', height: '170px'}} src='https://th.bing.com/th/id/OIP.PO_m6gJ_CAer8FvIebPEuAAAAA?pid=ImgDet&rs=1' alt='in9'/>
            </fieldset>
            <Divider/>
            <fieldset><legend>9</legend>
                <h3>Moviments of solfege in 9</h3>
                <h4>Maintein the speed of pulsation constantly between every moviments, inependently to be a moviment with a large distance or small distance</h4>
            </fieldset>
            <Divider/>
            <fieldset><legend>12</legend>
                <h3>Formule of compasso in 12</h3>
                <h4>It is that on that the superior number has the number 12, and the inferior number indicate the musical figure that represent the pulse or moviment</h4>
                <p>Look this example: BELOW--</p>
                <img style={{width: '400px', height: '100px'}} src='https://www.primeirosacordes.com.br/images/stories/teoria/compasso-simples-10.jpg' alt='12'/>
            </fieldset>
        </div>
    ]
    return(
        <div style={{width: '1300px', height: '1200px', backgroundColor: 'orangered'}}>
            <center><h1>Armor of the Clave</h1></center>
            <Divider/>
            <Tooltip arrow placement='right-start' title={armorClave}>
                <Fab style={{width: '100px', height: '100px'}}>
                    <p style={{ fontSize: '12px', fontFamily: 'serif'}}>Understand the armor</p>
                </Fab>
            </Tooltip>
            <Divider/>
            <Grid style={{paddingLeft: '250px'}} container spacing={15}>
                <div style={{width: '300px', height: '50px', color: 'white'}}>
                    <p>
                        This accidents, we called it like the fixed accidents too, it product effects in all the pentagram, safed if ti indicate something contrarity at a especific note or if there any change of the tonality in middle of the music
                    </p>
                    <Divider style={{borderColor: 'black'}}/>
                    <p>
                        The clave armor can be formed by one conjunt of Bemols or by a conjunt of the sustenidos, but it never for the simultanity utilization of bemols and sustenidos
                    </p>
                    <Divider style={{borderColor: 'black'}}/>
                </div>
            </Grid>
            <Grid style={{paddingLeft: '5px', paddingTop: '80px'}} container spacing={0.5}>
                <Tooltip arrow placement='right-start' title={ExtraInf}>
                    <Fab style={{width: '100px', height: '100px', fontSize: '12px', fontFamily: 'serif'}}>Extra Information</Fab>
                </Tooltip>
            </Grid>
            <Divider/>
            <Grid style={{paddingLeft: '75px', paddingTop: '80px'}} container spacing={9}>
                <Tooltip arrow placement='right' title={GetArmor}>
                    <Fab style={{width: '100px', height: '100px', fontSize: '12px', fontFamily: 'serif'}}>Armors of Claves</Fab>
                </Tooltip>
            </Grid>
            <br/>
            <hr style={{borderColor: 'deepskyblue'}}/>
            <center>
                <h1>Observation about (#) (b)</h1>
                <Divider style={{borderColor: 'gold', borderRadius: '20px', width: '400px'}}/>
                <ul>
                    <fieldset>
                        <h2 style={{color: 'gold'}}>How to indentify fast the name of the larger scales with sustenidos</h2>
                        <Divider/>
                        <ul>
                            <h4 style={{color: 'darkblue'}}>At the clave armor with Sustenidos, the scale name will be olne note above the last sustenido</h4>
                            <Grid style={{paddingLeft: '40px'}} container spacing={11}>
                                <Tooltip arrow placement='top' title='By example, in a scale with 3 sustenidos(FÀ, DÒ, SOL), one note above the last sustenido will be the note LÁ, So, the scale is Lá Major'>
                                    <p style={{fontSize: '30px'}}><CircleNotificationsIcon style={{fontSize: '30px'}}/>#</p>
                                </Tooltip>
                            </Grid>
                            <Tooltip arrow placement='top' title='Just remember to verify if the tonic still be alterated, so this change the scales name. these is case of the ARMOR WITH 6 SUSTENIDOS, where the last sustenido is MI and, this way, the name of the scale is FÁ, but it is not the FÁ Major and, yes, it is Fá Sustenido Major, because the FÁ still be alterated in the clave armor!'>
                                <span><i>Tonic <MouseIcon/>#</i></span>
                            </Tooltip>
                        </ul><Divider/>
                        <h2 style={{color: 'gold'}}>How to identify fast the name of the large scales with Bemols</h2>
                        <h4 style={{color: 'darkblue'}}>At the clave armor with bemols, the name of scale will be the name of the penultimate bemol.</h4>
                        <Grid style={{paddingLeft: '60px'}} container spacing={7}>
                            <Tooltip arrow placement='top' title='By example, ina a scale with 3 bemols(SI, MI, LÀ), the penultimate bemol will be at the note MI. So, the scale is of MI Bemol major'>
                                <p style={{fontSize: '30px'}}><CircleNotificationsIcon style={{fontSize: '30px'}}/>b</p>
                            </Tooltip>
                        </Grid>
                        <Tooltip arrow placement='top' title='The exection  to this rule is the scale of FÁ Major, that it has only one bemol. For every all others scale with bemol, the rule apply'>
                            <span><i>Tonic <MouseIcon/>b</i></span>
                        </Tooltip>
                    </fieldset>
                    <QuizzSetima/>
                </ul>
                <Grid style={{paddingLeft: '1500px'}} container spacing={120}>
                    <Tooltip arrow placement='right-start' title={in9}>
                        <h3 style={{backgroundColor: 'deepskyblue', opacity: '80%', borderRadius: '20px'}}>Compasso in 9</h3>
                    </Tooltip>
                </Grid>
                <Grid style={{paddingLeft: '1700px'}} container spacing={100}>
                    <Tooltip arrow placement='right-start' title={in9}>
                        <h3 style={{backgroundColor: 'deepskyblue', opacity: '80%', borderRadius: '20px'}}>Compasso in 9</h3>
                    </Tooltip>
                </Grid>
            </center>
        </div>
    )
}