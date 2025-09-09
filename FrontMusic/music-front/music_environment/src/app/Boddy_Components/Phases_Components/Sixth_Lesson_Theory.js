import { Card, Grid, Paper, Tooltip, Divider, Button, Fab } from '@mui/material';
import React, { Component, useState } from 'react';
import QuizzSixPhase from '../Avaliation_Files/Theory_Quizz/Quizz_Phase_Six';

export default function SextoPH(){
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
                    <SextaPhase/>
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

class SextaPhase extends Component{
    render(){
        const bem = [
            <div style={{width: '500px', height: '500px', backgroundColor: 'Highlight'}}>
                <h2>Scales majores with Bemol</h2>
                <h4>For the formation of this scale major with bemols, we start ever from the scale model: (DÒ Major), weidentify the forth note from this scale to create the next one scale</h4>
                <img style={{width: '400px', height: '200px'}} src='https://th.bing.com/th/id/R.eced820cc858a550a3d248d6755ac9aa?rik=QsrMbcSmA68seQ&pid=ImgRaw&r=0' alt='bemolScale'/>
                <Grid style={{paddingLeft: '335px'}} container spacing={12}>
                    <Tooltip title='As you see it this position is the forth note in this scale uping the form ascendent, from this note it will be used to create the first tonic note of the next scale'>
                        <p style={{backgroundColor: 'blue', width: '12px', borderRadius: '5px'}}>5</p>
                    </Tooltip>
                </Grid><br/><br/><br/><br/><br/><br/><br/>
                <Divider style={{borderColor: 'yellow'}}/>
                <h4>And now is the moment that it become to create the other scale, follow it below</h4>
                <img style={{width: '400px', height: '100px'}} src='https://th.bing.com/th/id/OIP.EGb9mUQzxWA787daeA2IjgHaCo?pid=ImgDet&rs=1' alt='solScale'/>
                <ol>After you will see any exercises on how tocreate the scales like this at the pratice</ol>
            </div>
        ]
        const sust = [
            <div style={{width: '600px', height: '500px', backgroundColor: 'red'}}>
                <h4>For the formation to the major scales with sustenido, <br/> the model scale that will be used is: (Dó Major)</h4>
                <h4>To identify the next tonic note,we will catch the fifth note of the DÓ scale to begin te another scales with the fifth tonic choiceds, Here below we have an example:</h4>
                <img style={{width: '400px', height: '200px'}} src='https://th.bing.com/th/id/R.eced820cc858a550a3d248d6755ac9aa?rik=QsrMbcSmA68seQ&pid=ImgRaw&r=0' alt='scalesDó'/>
                <Grid style={{paddingLeft: '335px'}} container spacing={12}>
                    <Tooltip title='As you see it this position is the fifth note in this scale uping the form ascendent, from this note it will be used to create the first tonic note of the next scale'>
                        <p style={{backgroundColor: 'blue', width: '12px', borderRadius: '5px'}}>5</p>
                    </Tooltip>
                </Grid><br/><br/><br/><br/><br/><br/><br/>
                <Divider style={{borderColor: 'yellow'}}/>
                <h4>And now the moment to become to create the other scale, follow it below</h4>
                <img style={{width: '400px', height: '100px'}} src='https://th.bing.com/th/id/R.3c20189bfc933cbdbd5c7f22bc6970fa?rik=cZQIsnDhAU7mUw&pid=ImgRaw&r=0' alt='solScale'/>
                <ol>After you will see any exercises on how tocreate the scales like this at the pratice</ol>
            </div>
        ]
        const scales = [
            <Grid style={{backgroundColor: 'darkblue'}} container spacing={15}>
                <div style={{margin: '10px'}}>
                    <p>Scales: It is theascendent sequence or descendente sequence of consecutives notes</p>
                    <p>There are very classifications of scales at the musical literature, but here we wil use only two: Cromatic Scale; Diatonic Scale</p>
                    <p>Cromatic scale: 
                        <ul>It is formed by twelve semitones, for the ascendent cromatic it use the sustenidos<br/>
                        <img style={{width: '360px', height: '100px'}} src='https://th.bing.com/th/id/OIP.g-u2fFdzU40JVVz8g4f-YgHaCS?pid=ImgDet&rs=1' alt='ascendentecromatic'/>
                        </ul>
                    </p>
                    <p>Diatonic scale: 
                        <ul>It is a scale formed by eight consecutives sounds of different names, with intervals of tones and semitones. The octave note of the scale repeat the first
                            <img style={{width: '360px', height: '100px'}} src='https://th.bing.com/th/id/R.db58f2ea4c8d005b6d8c762d5ed60d6f?rik=w0uAh%2fIprnZiQg&pid=ImgRaw&r=0' alt='diatonic'/>
                        </ul>
                    </p>
                </div>
            </Grid>
        ]
        const unissono = [
            <Grid style={{backgroundColor: 'darkblue'}} container spacing={5}>
                <div style={{margin: '10px'}}>
                    <fieldset>
                        <h1>UNISON</h1>
                        <h4>When two notes sounds simultanly and at the same height, that is, when both the notes has the same sounds result</h4>
                        <i>The unison can be formed by notes of names equal or different</i>
                        <Tooltip title='Unison of equal names'>
                        <img style={{width: '300px', height: '100px'}} src='https://th.bing.com/th/id/R.24354e4d652092a9e93ef60804eca514?rik=vhxkIAV2Pkzo7A&riu=http%3a%2f%2fcmapspublic2.ihmc.us%2frid%3d1LJDJQNR5-1MHNKHD-1RF4%2fun%c3%adsono.png&ehk=IReEfJAtfvLDc3FWTgDZOlk3Txp9IDtI6Q4Qy%2bixMd8%3d&risl=&pid=ImgRaw&r=0' alt='nomeigual'/>
                        </Tooltip>
                        <Tooltip title='Unison of different name'>
                        <img style={{width: '300px', height: '100px'}} src='https://essaseoutras.com.br/wp-content/uploads/2015/09/aula-de-intervalo-un%C3%ADssono-.jpg' alt='nomeigual'/>
                        </Tooltip>
                    </fieldset>
                </div>
            </Grid>
        ]
        const Cromatic = [
            <Grid style={{backgroundColor: 'darkblue'}} container spacing={5}>
                <ul>
                    <p>This will happen when the interval of a semitone is formed by twonotes of equal names, but it with a different sound</p>
                </ul>
            </Grid>
        ]
        const Diatonic = [
            <Grid style={{backgroundColor: 'darkblue'}} container spacing={5}>
                <ul>
                    <p>This will happen when the interval of a semitone is formed by two notes of different names and different sounds</p>
                </ul>
            </Grid>
        ]
        const Sust = ["Putted at left side of the note, and will increase a semitone at the note"]
        const Bem = ["Putted at the left side of thenote and it will decrease a semitone at the note"]
        const showSusteni = [
            <div style={{width: '300px', height: '150px', backgroundColor: 'Highlight'}}>
                <h3>{Sust}</h3>
                <img style={{width: '250px', height: '100px'}} src='https://th.bing.com/th/id/OIP.Qs2yGH2bgXK-atowWZDidgHaHa?rs=1&pid=ImgDetMain' alt='susteni'/>
            </div>
        ]
        const showBem = [
            <div style={{width: '300px', height: '150px', backgroundColor: 'Highlight'}}>
                <h3>{Bem}</h3>
                <img style={{width: '250px', height: '100px'}} src='https://th.bing.com/th/id/OIP.TsqaYNifoPgDj6bV4IsHTwAAAA?pid=ImgDet&rs=1' alt='susteni'/>
            </div>
        ]
        const TomSemitom = [
            <div>
                <Card style={{width: '450px', height: '350px'}}>
                    <h2>Semitone:
                        <ul>
                            <h4>It is the less interval between two sounds, in the ocidental music</h4>
                        </ul>
                    </h2><Divider/>
                    <h2>Tone:
                        <ul>
                            <h4>It is the interval formaded by two Semitones</h4>
                        </ul>
                    </h2>
                    <Divider/>
                    <Card style={{margin: '20px', backgroundColor: 'lightblue'}}>
                    <h3>Between the MI-FÁ, and, SÍ-DÓ has one semitone</h3><Divider/>
                    <h3>Between the notes, DÓ-RÉ, RÉ-MI, FÁ-SOL, SOL-LÁ nad LÁ-SI, has one Tone</h3>
                    </Card>
                </Card>
            </div>
        ]
        return(
            <div style={{width: '1300px', height: '600px', backgroundColor: 'dodgerblue'}}>
                <Card style={{width: '455px', height: '455px', margin: '30px', backgroundColor: 'AppWorkspace'}}>
                    <Grid>
                        <Paper style={{textAlign: 'center', backgroundColor: 'darkcyan', margin: '15px', color: 'gold', fontFamily: 'serif', fontSize: '20px'}}>
                            Phase 6
                        </Paper>
                        <Paper style={{textAlign: 'center', backgroundColor: 'darkcyan', margin: '15px', color: 'gold', fontFamily: 'serif', fontSize: '20px'}}>
                            <h3>Tone and Semitone</h3>
                            <Grid style={{paddingLeft: '360px'}} container spacing={6}>
                                <Tooltip title={TomSemitom} arrow placement='right'>
                                    <i style={{color: 'blue', backgroundColor: 'dodgerblue'}}>Read it here</i>
                                </Tooltip>
                            </Grid>
                        </Paper>
                        <div style={{margin: '15px', backgroundColor: 'cornflowerblue'}}>
                            <h4>Tone and Semitone scale</h4>
                            <img style={{margin: '10px', width: '400px', height: '70px'}} src='https://1.bp.blogspot.com/-cy-tTXbU30I/WAzn3s8ILiI/AAAAAAAAiZ0/by1PrrxNta0nTbpo4XfY_XihT94R31Z8ACLcB/s1600/Sem%2Bt%25C3%25ADtulo.png' alt='escalatonssemiton'/>
                        </div>
                        <Divider/>
                        <Grid style={{margin: '3px'}}>
                            <Tooltip title='ola'>
                                <div>
                                    <img style={{width: '470px', height: '200px'}} src='https://canone.com.br/images/stories/aplicativos/escala-maior-tom-e-semitom.png' alt='teclado'/>
                                </div>
                            </Tooltip>
                        </Grid>
                    </Grid>
                </Card>
                <Divider/>
                <Grid style={{paddingLeft: '1000px'}} container spacing={60}>
                    <Card style={{backgroundColor: 'gold', width: '450px', height: '450px'}}>
                        <h1>Accidents - Sharp(Sustenido) and Flat(Bemol)</h1>
                        <Paper style={{textAlign: 'center', margin: '30px'}}>
                        <h2>Called like Alterations signal</h2>
                            <Tooltip title={showSusteni}>
                                <h2>Sustenido</h2>
                            </Tooltip>
                            <Divider style={{borderColor: 'blue'}}/>
                            <Tooltip title={showBem}>
                                <h2>Bemol</h2>
                            </Tooltip>
                        </Paper><br/>
                        <Divider/>
                        <h5>About the semitones</h5>
                        <Grid>
                            <Tooltip arrow placement='right' title={Cromatic}><Button style={{fontFamily: 'serif', backgroundColor: 'gainsboro'}}>Cromatics Semitones</Button></Tooltip>
                        </Grid>
                        <Grid style={{paddingLeft: '270px'}} container spacing={4.5}>
                            <Tooltip arrow placement='left' title={Diatonic}><Button style={{fontFamily: 'serif', backgroundColor: 'gainsboro'}}>Diatoniics Semitones</Button></Tooltip>
                        </Grid>
                    </Card>
                </Grid>
                <Tooltip arrow placement='right' title={unissono}>
                    <Button style={{fontFamily: 'serif', backgroundColor: 'gainsboro'}}>Unison</Button>
                </Tooltip>
                <Grid style={{paddingLeft: '200px'}} container spacing={4.5}>
                <Tooltip title={scales}>
                    <Button style={{fontFamily: 'serif', backgroundColor: 'gainsboro'}}>Scale</Button>
                </Tooltip>
                </Grid>
                <Grid style={{paddingLeft: '400px'}} container spacing={4.5}>
                <Tooltip arrow placement='right' title={sust}>
                    <Button style={{fontFamily: 'serif', backgroundColor: 'gainsboro'}}>Sustenido scale</Button>
                </Tooltip>
                </Grid>
                <Grid style={{paddingLeft: '700px'}} container spacing={4.5}>
                <Tooltip arrow placement='left' title={bem}>
                    <Button style={{fontFamily: 'serif', backgroundColor: 'gainsboro'}}>Bemol scale</Button>
                </Tooltip>
                </Grid>
                <QuizzSixPhase/>
            </div>
        )
    }
}