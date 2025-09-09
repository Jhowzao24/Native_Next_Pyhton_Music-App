import { Divider, Grid, Tooltip, Button, Paper, Fab } from '@mui/material';
import React, {useState} from 'react';
import QuizzDesesseis from '../Avaliation_Files/Theory_Quizz/Quizz_Phase_Sixteen';



export default function DecimaSestaFase(){
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
                    <FaseDesesseis/>
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



function FaseDesesseis(){
    const solene = [
        <div style={{margin: '-50px', backgroundColor: 'midnightblue', color: 'orange', width: '500px', height: '50px', fontSize: '15px', fontFamily: 'serif', borderRadius: '5px'}}>
            <p>It is the form of to presentn before an authority recognizing your greatness, sounding with majesty, but ina respectfull manner. It is hymns and musics that we adress to God and to our Feelings</p>
        </div>
    ]
    const affettuoso = [
        <div style={{margin: '-50px', backgroundColor: 'midnightblue', color: 'orange', width: '200px', height: '50px', fontSize: '15px', fontFamily: 'serif', borderRadius: '5px'}}>
            <p>With Affection/Andante; Adagio; Largo</p>
        </div>
    ]
    const combrio = [
        <div style={{margin: '-50px', backgroundColor: 'midnightblue', color: 'orange', width: '200px', height: '50px', fontSize: '15px', fontFamily: 'serif', borderRadius: '5px'}}>
            <p>With Vigor/Allegro; Moderato; Andante</p>
        </div>
    ]
    const cantabile = [
        <div style={{margin: '-50px', backgroundColor: 'midnightblue', color: 'orange', width: '200px', height: '50px', fontSize: '15px', fontFamily: 'serif', borderRadius: '5px'}}>
            <p>Singing; Liryc; Soft/Allegro; Moderato; Andante</p>
        </div>
    ]
    const vivace = [
        <div style={{margin: '-50px', backgroundColor: 'midnightblue', color: 'orange', width: '200px', height: '50px', fontSize: '15px', fontFamily: 'serif', borderRadius: '5px'}}>
            <p>Alive(Soft and Fast)/Allegro</p>
        </div>
    ]
    const maestoso = [
        <div style={{margin: '-50px', backgroundColor: 'midnightblue', color: 'orange', width: '200px', height: '50px', fontSize: '15px', fontFamily: 'serif', borderRadius: '5px'}}>
            <p>Majestic(Notes well marked)/Andante; Adagio</p>
        </div>
    ]
    const dolce = [
        <div style={{margin: '-50px', backgroundColor: 'midnightblue', color: 'orange', width: '200px', height: '50px', fontSize: '15px', fontFamily: 'serif', borderRadius: '5px'}}>
            <p>Sweet(Lightweigh and with feellings)/Moderato; Andante; Adágio</p>
        </div>
    ]
    const agitato = [
        <div style={{margin: '-50px', backgroundColor: 'midnightblue', color: 'orange', width: '200px', height: '50px', fontSize: '15px', fontFamily: 'serif', borderRadius: '5px'}}>
            <p>Hectic(Fatsand Dramatic)/Presto; Allegro; Allegreto</p>
        </div>
    ]
    const animato = [
        <div style={{margin: '-50px', backgroundColor: 'midnightblue', color: 'orange', width: '200px', height: '50px', fontSize: '15px', fontFamily: 'serif', borderRadius: '5px'}}>
            <p>Cheerful/Presto; Allegro</p>
        </div>
    ]
    const bruscamente = [
        <div style={{margin: '-50px', backgroundColor: 'midnightblue', color: 'orange', width: '200px', height: '50px', fontSize: '15px', fontFamily: 'serif', borderRadius: '5px'}}>
            <p>Abrupt(Very Marked)/Allegro; Presto</p>
        </div>
    ]
    const comamore = [
        <div style={{margin: '-50px', backgroundColor: 'midnightblue', color: 'orange', width: '200px', height: '50px', fontSize: '15px', fontFamily: 'serif', borderRadius: '5px'}}>
            <p>With Love/Moderato; Andante; Adagio</p>
        </div>
    ]
    const comfuoco = [
        <div style={{margin: '-50px', backgroundColor: 'midnightblue', color: 'orange', width: '200px', height: '50px', fontSize: '15px', fontFamily: 'serif', borderRadius: '5px'}}>
            <p>With fire(Alive, Agressive)/Allegro, Presto</p>
        </div>
    ]
    const scherzando = [
        <div style={{margin: '-50px', backgroundColor: 'midnightblue', color: 'orange', width: '200px', height: '50px', fontSize: '15px', fontFamily: 'serif', borderRadius: '5px'}}>
            <p>Playing/Allegro, Andante</p>
        </div>
    ]
    const molto = [
        <div style={{margin: '-50px', backgroundColor: 'midnightblue', color: 'orange', width: '200px', height: '50px', fontSize: '15px', fontFamily: 'serif', borderRadius: '5px'}}>
            <p>Very/(ex:Allegro molto cantabile = Alegro Very Singned)</p>
        </div>
    ]
    const assai = [
        <div style={{margin: '-50px', backgroundColor: 'midnightblue', color: 'orange', width: '200px', height: '50px', fontSize: '15px', fontFamily: 'serif', borderRadius: '5px'}}>
            <p>Very(ex: Allegro Assai = Very Allegro)</p>
        </div>
    ]
    const poco = [
        <div style={{margin: '-50px', backgroundColor: 'midnightblue', color: 'orange', width: '200px', height: '50px', fontSize: '15px', fontFamily: 'serif', borderRadius: '5px'}}>
            <p>A litlte(ex: Allegro poco agitato = Fast a few hectic)</p>
        </div>
    ]
    const maNonTroppo = [
        <div style={{margin: '-50px', backgroundColor: 'midnightblue', color: 'orange', width: '200px', height: '50px', fontSize: '15px', fontFamily: 'serif', borderRadius: '5px'}}>
            <p>But not very(ex: Allegro Ma non Troppo = Alegro but not very)</p>
        </div>
    ]
    const [Phrase, setPhrase] = useState(false);
    const handleAddPhrase = () => {
        setPhrase(true);
    }
    const [Semiphrase, setSemiPhrase] = useState(false);
    const handleAddSemiphrase = () => {
        setSemiPhrase(true);
    }
    return(
        <div style={{width: '1400px', margin: '-100px', backgroundColor: 'oldlace'}}>
            <center style={{margin: '30px'}}>
                <h1>Phrases and Semiphrases</h1>
                <Divider/>
                <h3>Phrase is a musical unit with conclusions sense; generally it is dividered by two semiphrases</h3>
                <br/>
                <hr/>
                <br/>
                <h4>Click one of the buttons and you will see where is positioned the caracters indicated</h4>
                <div style={{float: 'left', paddingLeft: '180px'}}><Tooltip title='Phrase is all the pentagram completed with all compassos! CLICK TO SEE IT ON THE PENTAGRAM BELOW:!'><Button style={{backgroundColor: 'Highlight', color: 'white'}} onClick={handleAddPhrase}>Phrase</Button></Tooltip></div>
                <div style={{float: 'right', paddingRight: '180px'}}><Tooltip title='SemiPhrase is the half of the full pentagram with the divider of the full number of the compassos'><Button style={{backgroundColor: 'orangered', color: 'white'}} onClick={handleAddSemiphrase}>Semiphrase</Button></Tooltip></div>
                <div>
                    <img style={{width: '500px'}} src='https://4.bp.blogspot.com/-qtcCxw2gU4I/Vd5IvK0dYoI/AAAAAAAAGcU/U23zST5m7Ic/s1600/Minueto%2B-%2BJ.%2BS.%2BBACH.jpg' alt='phrasesemiphrase'/>
                </div>
                <Grid style={{float: 'left', paddingLeft: '1170px'}} container spacing={83}>
                    {Phrase && <p style={{position: 'relative', color: 'blue'}}>|_______________________Phrase_______________________</p>}
                </Grid>
                <Grid style={{float: 'left', paddingLeft: '1010px'}} container spacing={73}>
                    {Phrase && <p style={{position: 'relative', color: 'blue'}}>_____________________________________________________________________</p>}
                </Grid>
                <Grid style={{float: 'left', paddingLeft: '920px'}} container spacing={63}>
                    {Phrase && <p style={{position: 'relative', color: 'blue'}}>_____________________________________________________________________</p>}
                </Grid>
                <Grid style={{float: 'left', paddingLeft: '850px'}} container spacing={53}>
                    {Phrase && <p style={{position: 'relative', color: 'blue'}}>_____________________________________________________________________</p>}
                </Grid>
                <Grid style={{float: 'left', paddingLeft: '760px'}} container spacing={43}>
                    {Phrase && <p style={{position: 'relative', color: 'blue'}}>_____________________________________________________________________</p>}
                </Grid>
                <Grid style={{float: 'left', paddingLeft: '680px'}} container spacing={33}>
                    {Phrase && <p style={{position: 'relative', color: 'blue'}}>_____________________________________________________________________</p>}
                </Grid>
                <Grid style={{float: 'left', paddingLeft: '600px'}} container spacing={23}>
                    {Phrase && <p style={{position: 'relative', color: 'blue'}}>_____________________________________________________________________</p>}
                </Grid>
                <Grid style={{float: 'left', paddingLeft: '1090px'}} container spacing={76}>
                    {Semiphrase && <p style={{position: 'relative', color: 'orangered', fontSize: '11px'}}>|__________________SemiPhrase_________________|</p>}
                </Grid>
                <Grid style={{float: 'left', paddingLeft: '1290px'}} container spacing={76}>
                    {Semiphrase && <p style={{position: 'relative', color: 'orangered', fontSize: '11px'}}>|__________________SemiPhrase_______________</p>}
                </Grid>
                <Grid style={{float: 'left', paddingLeft: '950px'}} container spacing={66}>
                    {Semiphrase && <p style={{position: 'relative', color: 'orangered', fontSize: '11px'}}>|_____________________SemiPhrase___________________|</p>}
                </Grid>
                <Grid style={{float: 'left', paddingLeft: '1180px'}} container spacing={66}>
                    {Semiphrase && <p style={{position: 'relative', color: 'orangered', fontSize: '11px'}}>|______________________SemiPhrase_____________________|</p>}
                </Grid>
                <Grid style={{float: 'left', paddingLeft: '870px'}} container spacing={56}>
                    {Semiphrase && <p style={{position: 'relative', color: 'orangered', fontSize: '11px'}}>|______________________SemiPhrase_____________________|</p>}
                </Grid>
                <Grid style={{float: 'left', paddingLeft: '1100px'}} container spacing={56}>
                    {Semiphrase && <p style={{position: 'relative', color: 'orangered', fontSize: '11px'}}>|______________________SemiPhrase_____________________|</p>}
                </Grid>
                <Grid style={{float: 'left', paddingLeft: '780px'}} container spacing={46}>
                    {Semiphrase && <p style={{position: 'relative', color: 'orangered', fontSize: '11px'}}>|______________________SemiPhrase_____________________|</p>}
                </Grid>
                <Grid style={{float: 'left', paddingLeft: '1020px'}} container spacing={46}>
                    {Semiphrase && <p style={{position: 'relative', color: 'orangered', fontSize: '11px'}}>|_____________________SemiPhrase____________________|</p>}
                </Grid>
                <Grid style={{float: 'left', paddingLeft: '710px'}} container spacing={37}>
                    {Semiphrase && <p style={{position: 'relative', color: 'orangered', fontSize: '11px'}}>|______________________SemiPhrase_____________________|</p>}
                </Grid>
                <Grid style={{float: 'left', paddingLeft: '950px'}} container spacing={37}>
                    {Semiphrase && <p style={{position: 'relative', color: 'orangered', fontSize: '11px'}}>|______________________SemiPhrase_____________________|</p>}
                </Grid>
                <Grid style={{float: 'left', paddingLeft: '630px'}} container spacing={27}>
                    {Semiphrase && <p style={{position: 'relative', color: 'orangered', fontSize: '11px'}}>|______________________SemiPhrase_____________________|</p>}
                </Grid>
                <Grid style={{float: 'left', paddingLeft: '870px'}} container spacing={27}>
                    {Semiphrase && <p style={{position: 'relative', color: 'orangered', fontSize: '11px'}}>|______________________SemiPhrase_____________________|</p>}
                </Grid>
                <Grid style={{float: 'left', paddingLeft: '570px'}} container spacing={18}>
                    {Semiphrase && <p style={{position: 'relative', color: 'orangered', fontSize: '11px'}}>|________________________SemiPhrase_______________________|</p>}
                </Grid>
                <Grid style={{float: 'left', paddingLeft: '830px'}} container spacing={18}>
                    {Semiphrase && <p style={{position: 'relative', color: 'orangered', fontSize: '11px'}}>|____________________SemiPhrase_________________|</p>}
                </Grid>
            </center>
            <hr/>
            <center>
                <h1>Musical Interpretation</h1>
                <Divider/>
                <h4 style={{margin: '20px'}}>The <strong>Musical Interpretation</strong> is the art of compreender the intenptions and the feelings of the composer and transmit it through the sound from the instrument. <strong>It is the Musical Expression</strong></h4>
                <br/>
                <ul>
                    <h5>The interpretation take in consideration the intensity of sound, the execution form of this sound, the speed, etc. The intepretation <strong>doesn't take in consideration</strong> the formula of compasso.</h5>
                    <h5>Asyou see a music with a formule like 2/4, it will not must to be executed fast or with a strong intensity of sound</h5>
                    <hr/>
                    <Paper>
                        <Tooltip title={solene}>
                            <h5>Solene</h5>
                        </Tooltip>
                    </Paper>
                    <Paper>
                        <Tooltip title={affettuoso}>
                            <h5>Affettuoso</h5>
                        </Tooltip>
                    </Paper>
                    <Paper>
                        <Tooltip title={combrio}>
                            <h5>Com Brio</h5>
                        </Tooltip>
                    </Paper>
                    <Paper>
                        <Tooltip title={cantabile}>
                            <h5>Cantabile</h5>
                        </Tooltip>
                    </Paper>
                    <Paper>
                        <Tooltip title={vivace}>
                            <h5>Vivace</h5>
                        </Tooltip>
                    </Paper>
                    <Paper>
                        <Tooltip title={maestoso}>
                            <h5>Maestoso</h5>
                        </Tooltip>
                    </Paper>
                    <Paper>
                        <Tooltip title={dolce}>
                            <h5>Dolce</h5>
                        </Tooltip>
                    </Paper>
                    <Paper>
                        <Tooltip title={agitato}>
                            <h5>Agitato</h5>
                        </Tooltip>
                    </Paper>
                    <Paper>
                        <Tooltip title={animato}>
                            <h5>Animato</h5>
                        </Tooltip>
                    </Paper>
                    <Paper>
                        <Tooltip title={bruscamente}>
                            <h5>Bruscamente</h5>
                        </Tooltip>
                    </Paper>
                    <Paper>
                        <Tooltip title={comamore}>
                            <h5>Com Amore</h5>
                        </Tooltip>
                    </Paper>
                    <Paper>
                        <Tooltip title={comfuoco}>
                            <h5>Com Fuoco</h5>
                        </Tooltip>
                    </Paper>
                    <Paper>
                        <Tooltip title={scherzando}>
                            <h5>Scherzando</h5>
                        </Tooltip>
                    </Paper>
                    <Paper>
                        <Tooltip title={molto}>
                            <h5>Molto</h5>
                        </Tooltip>
                    </Paper>
                    <Paper>
                        <Tooltip title={assai}>
                            <h5>Assai</h5>
                        </Tooltip>
                    </Paper>
                    <Paper>
                        <Tooltip title={poco}>
                            <h5>Poco</h5>
                        </Tooltip>
                    </Paper>
                    <Paper>
                        <Tooltip title={maNonTroppo}>
                            <h5>Ma non troppo</h5>
                        </Tooltip>
                    </Paper>
                </ul>
            </center>
            <br/><br/><br/>
            <QuizzDesesseis/>
        </div>
    )
}