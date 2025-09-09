import React from 'react';
import { Modal, Box, Button, Paper, Grid, Divider, Fab, Card, CardMedia, StepLabel, Tooltip, CardActionArea } from '@mui/material';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';

export default function ViolaPratice(){
    const click3 = (() => {
        alert('Essas notas para frente serão da altura do violino, então na Viola não se utiliza muito esta área para se tocar, caso queira o aluno se aprofundar nas mudanças de posições!!')
    })
    const click2 = (() => {
        alert('Essa área que voce esta vendo é as notas naturais da viola, aqui se concentra o grave, o médio até o médio alto/Sendo essa posição tida com a 1ª Posição na Viola, assim como no violino e no Violoncello também!!')
    })
    const click1 = (() => {
        return alert('Essa tonalidade é a inicial do Violino, essas notas são as das cordas soltas do Violino!!')
    })
    const AlertaAviso = (() => {
        alert("Nunca desista cara, Voce conseguira tudo oque quiser se esforçando dedicando e lembre-se, voce sera reconhecido por oque faz!! Nunca se envergonhe doque te faz bem na parte musical, sempre tenha orgulho do ótimo músico que voce ja começou a se tornar apartir de agora!!")
    })
    const style = {
        position: 'absolute',
        top: '30%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 900,
        height: 130,
        bgcolor: 'dodgerblue',
        border: '2px solid #000',
        boxShadow: 10,
        p: 1,
    };
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div>
            <Button style={{color: 'midnightblue', fontFamily: 'fantasy', letterSpacing: '2px'}} onClick={handleOpen}>
                <Grid style={{paddingRight: '3px'}}>
                    <img style={{width: '50px', height: '50px', borderRadius: '20px', boxShadow: '0 0 3px 5px', margin: '-15px'}} src='https://th.bing.com/th/id/R.791202813fa359021a96322f1a2d9148?rik=ufvhNbqkb4kFow&pid=ImgRaw&r=0' alt='violinoprati'/>
                </Grid>
                <div style={{paddingLeft: '30px'}}>
                Pratice with Viola
                </div>
                </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                <Box sx={style}>
                    <Paper style={{backgroundColor: 'blue'}}>
                        <center>
                            <h2>First steps with the Viola</h2>
                        </center>
                    </Paper>
                    <Divider/>
                    <Grid style={{paddingLeft: '50px'}}>
                        <StepLabel style={{color: 'aqua'}}>Positions</StepLabel>
                    </Grid><Divider/><br/>
                    <CardMedia style={{paddingLeft: '50PX'}}>
                        <Fab>
                            <details style={{fontSize: '5px'}}><summary><img style={{width: '100px', height: '100px', borderRadius: '50px'}} src='https://consordini.com/wp-content/uploads/2016/01/viola-and-violin.jpg' alt='violadesc'/></summary>
                                <Card style={{width: '600px', height: '270px', fontSize: '12px'}}>
                                    <Paper>
                                        Learning Position at the Viola
                                    </Paper>
                                    <Divider/>
                                    <Grid style={{float: 'left', paddingLeft: '40px'}}>
                                    <Paper style={{backgroundColor: 'blue'}}>
                                        <Tooltip title='This image give to you a simple example that, the position in Viola is a few hard than Violin, because thsi instrument has a width major, and the reach of you arm to the viola arm is a distance more hardly to be reached!!'>
                                        <img style={{width: '150px', height: '150px'}} src='https://th.bing.com/th/id/R.2f696716472e50ef40348cfce08f6bf3?rik=p1iUzx5ED2iu9g&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2fe%2fe8%2fPlaying_viola.jpg&ehk=iBwr43u8xRtxeW%2belydwdo3nVZWeaaAke9Ho4MLPL4I%3d&risl=&pid=ImgRaw&r=0' alt='violarightposit'/>
                                        </Tooltip>
                                    </Paper>
                                    </Grid>
                                    <Grid style={{float: 'left', paddingLeft: '20px'}}>
                                    <Paper style={{backgroundColor: 'blue'}}>
                                        <Tooltip title='Never play the Viola with this position!! Because this position will give to you a lot of backs hurts, and you will never fo come to the right goals that you are determined on coming soon! So, the Viola is a few major than Violin, and the weight of this instruments can push you down, but you must be on focused on try everyday the position again and again!! At each time you try this position, you will get the used to the weight, and you wont down again with it'>
                                        <img style={{width: '150px', height: '150px'}} src='https://zinginstruments.com/wp-content/uploads/2020/02/man-playing-classical-violin.png' alt='violarightposit'/>
                                        </Tooltip>
                                    </Paper>
                                    </Grid>
                                    <Grid style={{float: 'left', paddingLeft: '20px'}}>
                                    <Paper style={{backgroundColor: 'blue'}}>
                                        <Tooltip title='This is the last image that show to you the reality that is play Viola, it is not so easer as we thought before see it for the first time as now, i dont want to desapoint you, but this instrument has a different size than Violin, so this instrument is used to play like Violin is played, so, you are seeing here, that the Viola needs from you more interest and free time to dedicated yourself on it, but i ask to you, please dont be scaryed, it is not the end okay?!! You are knowing the instruments now, you will like this instrument so much after you touch him'>
                                        <img style={{width: '200px', height: '150px'}} src='https://blogs.missouristate.edu/music/files/2017/11/MUS-18084_6915.jpg' alt='violarightposit'/>
                                        </Tooltip>
                                    </Paper><br/>
                                    <Divider/><br/>
                                    </Grid>
                                    <Grid style={{float: 'left', paddingLeft: '150px'}} container spacing={5}>
                                        <Paper style={{backgroundColor: 'gold'}}>
                                            <Button onClick={AlertaAviso}>
                                                <h3>Go Ahead!! Never Give up</h3>
                                            </Button>
                                        </Paper>
                                    </Grid>
                                </Card>
                            </details>
                        </Fab>
                    </CardMedia>
                    <Grid style={{paddingLeft: '750px'}} container spacing={12}>
                        <StepLabel>Note's Positions</StepLabel>
                    </Grid>
                    <Grid style={{paddingLeft: '700px', paddingTop: '30px'}} container spacing={0}>
                    <CardActionArea>
                        <Fab>
                            <details style={{fontSize: '5px'}}><summary><img style={{width: '120px', height: '120px', borderRadius: '100px'}} src='https://th.bing.com/th/id/OIP.YbZ8Xjvn_lsvGabs8ckw0wHaEj?pid=ImgDet&rs=1' alt='notasviola'/></summary>
                                <Card style={{width: '500px', height: '800px'}}>
                                    <Grid>
                                    <Tooltip title='hello again'>
                                        <p style={{backgroundColor: 'blue', color: 'gold', fontSize: '15px'}}>The Viola's Strings</p>
                                    </Tooltip>
                                    </Grid>
                                    <Divider/>
                                    <Paper style={{fontSize: '10px'}}>
                                        First of all we need to understand, lets see all the yellow notes! It will represent the free strings at the viola! The next one notes after the yellow notes will be the played notes atthe Viola's mirror!
                                    </Paper>
                                    <Divider/>
                                    <Grid style={{paddingLeft: '50px'}}>
                                        <Tooltip title='DÓ/Grave/Primeira Corda da esquerda'>
                                            <p style={{backgroundColor: 'yellow', fontFamily: 'fantasy', width: '20px', height: '20px', borderRadius: '20px', fontSize: '10px'}}>DÓ</p>
                                        </Tooltip>
                                    </Grid>
                                    <Grid style={{paddingLeft: '150px'}} container spacing={5}>
                                        <Tooltip title='SOL/Grave/Segunda Corda da esquerda'>
                                            <p style={{backgroundColor: 'yellow', fontFamily: 'fantasy', width: '20px', height: '20px', borderRadius: '20px', fontSize: '10px'}}>SOL</p>
                                        </Tooltip>
                                    </Grid>
                                    <Grid style={{paddingLeft: '205px'}} container spacing={5}>
                                        <Tooltip title='RÉ/Grave/Segunda Corda da direita'>
                                            <p style={{backgroundColor: 'yellow', fontFamily: 'fantasy', width: '20px', height: '20px', borderRadius: '20px', fontSize: '10px'}}>RÉ</p>
                                        </Tooltip>
                                    </Grid>
                                    <Grid style={{paddingLeft: '260px'}} container spacing={5}>
                                        <Tooltip title='LÁ/Grave/Primeira Corda da direita'>
                                            <p style={{backgroundColor: 'yellow', fontFamily: 'fantasy', width: '20px', height: '20px', borderRadius: '20px', fontSize: '10px'}}>LÁ</p>
                                        </Tooltip>
                                    </Grid>
                                    <Tooltip title='Pestana da Viola/Todas as notas subsequentes após essa barra (Pestana), serão as notas que voce dedilhara na Viola!'>
                                        <Divider style={{borderColor: 'dodgerblue', borderWidth: '5px'}}/>
                                    </Tooltip>
                                    <Grid style={{paddingLeft: '70px'}} container spacing={0.8}>
                                        <Tooltip title='DÓ#/Perto da pestana!'>
                                            <p style={{backgroundColor: 'blue', color: 'white', width: '18px', height: '18px', borderRadius: '20px', fontSize: '7px'}}>DÓ#</p>
                                        </Tooltip>
                                    </Grid>
                                    <Grid style={{paddingLeft: '74px'}} container spacing={4}>
                                        <Tooltip title='RÉb/Perto da pestana!'>
                                            <p style={{backgroundColor: 'blue', color: 'white', width: '18px', height: '18px', borderRadius: '20px', fontSize: '7px'}}>RÉb</p>
                                        </Tooltip>
                                    </Grid>
                                    <Grid style={{paddingLeft: '130px'}} container spacing={4}>
                                        <Tooltip title='LÁb/Perto da pestana!'>
                                            <p style={{backgroundColor: 'blue', color: 'white', width: '18px', height: '18px', borderRadius: '20px', fontSize: '7px'}}>LA/b</p>
                                        </Tooltip>
                                    </Grid>
                                    <Grid style={{paddingLeft: '150px'}} container spacing={4}>
                                        <Tooltip title='SOL#/Perto da pestana!'>
                                            <p style={{backgroundColor: 'blue', color: 'white', width: '18px', height: '18px', borderRadius: '20px', fontSize: '7px'}}>SOL#</p>
                                        </Tooltip>
                                    </Grid>
                                    <Grid style={{paddingLeft: '185px'}} container spacing={4}>
                                        <Tooltip title='MIb/Perto da pestana!'>
                                            <p style={{backgroundColor: 'blue', color: 'white', width: '18px', height: '18px', borderRadius: '20px', fontSize: '7px'}}>MIb</p>
                                        </Tooltip>
                                    </Grid>
                                    <Grid style={{paddingLeft: '205px'}} container spacing={4}>
                                        <Tooltip title='RÉ#/Near to the pestana!'>
                                            <p style={{backgroundColor: 'blue', color: 'white', width: '18px', height: '18px', borderRadius: '20px', fontSize: '7px'}}>RÉ#</p>
                                        </Tooltip>
                                    </Grid>
                                    <Grid style={{paddingLeft: '245px'}} container spacing={4}>
                                        <Tooltip title='SIb/Near to the Pestana!'>
                                            <p style={{backgroundColor: 'blue', color: 'white', width: '18px', height: '18px', borderRadius: '20px', fontSize: '7px'}}>SI/b</p>
                                        </Tooltip>
                                    </Grid>
                                    <Grid style={{paddingLeft: '266px'}} container spacing={4}>
                                        <Tooltip title='LÁ#/Near to the pestan!/The less used at the pentagram!!'>
                                            <p style={{backgroundColor: 'blue', color: 'white', width: '18px', height: '18px', borderRadius: '20px', fontSize: '7px'}}>LÁ/#</p>
                                        </Tooltip>
                                    </Grid>
                                    <Divider style={{borderColor: 'darkgreen', width: '270px'}}/>
                                    <Grid style={{paddingLeft: '69px'}} container spacing={2}>
                                        <Tooltip title='RÉ/First finger that you will use to press the string to play the note RÉ'>
                                            <p style={{backgroundColor: 'green', color: 'white', width: '18px', height: '18px', borderRadius: '20px', fontSize: '7px'}}>RÉ</p>
                                        </Tooltip>
                                    </Grid>
                                    <Grid style={{paddingLeft: '140px'}} container spacing={4}>
                                        <Tooltip title='LÁ/First finger that you will use to press the string to play the note LÁ'>
                                            <p style={{backgroundColor: 'green', color: 'white', width: '18px', height: '18px', borderRadius: '20px', fontSize: '7px'}}>LÁ</p>
                                        </Tooltip>
                                    </Grid>
                                    <Grid style={{paddingLeft: '195px'}} container spacing={4}>
                                        <Tooltip title='MI/First finger that you will use to press the string to play the note MI'>
                                            <p style={{backgroundColor: 'green', color: 'white', width: '18px', height: '18px', borderRadius: '20px', fontSize: '7px'}}>MI</p>
                                        </Tooltip>
                                    </Grid>
                                    <Grid style={{paddingLeft: '255px'}} container spacing={4}>
                                        <Tooltip title='SI/First finger that you will use to press the string to play the note SI'>
                                            <p style={{backgroundColor: 'green', color: 'white', width: '18px', height: '18px', borderRadius: '20px', fontSize: '7px'}}>SI</p>
                                        </Tooltip>
                                    </Grid>
                                    <Divider style={{borderColor: 'blue', width: '270px'}}/>
                                    <Grid style={{paddingLeft: '57px'}} container spacing={2}>
                                        <Tooltip title='MIb/Segundo dedo!'>
                                            <p style={{backgroundColor: 'blue', color: 'white', width: '18px', height: '18px', borderRadius: '20px', fontSize: '7px'}}>MI/b</p>
                                        </Tooltip>
                                    </Grid>
                                    <Grid style={{paddingLeft: '95px'}} container spacing={4}>
                                        <Tooltip title='RÉ#/Segundo dedo!'>
                                            <p style={{backgroundColor: 'blue', color: 'white', width: '18px', height: '18px', borderRadius: '20px', fontSize: '7px'}}>RÉ/#</p>
                                        </Tooltip>
                                    </Grid>
                                    <Grid style={{paddingLeft: '128px'}} container spacing={4}>
                                        <Tooltip title='LÁ#/Segundo dedo!'>
                                            <p style={{backgroundColor: 'blue', color: 'white', width: '18px', height: '18px', borderRadius: '20px', fontSize: '7px'}}>LÁ/#</p>
                                        </Tooltip>
                                    </Grid>
                                    <Grid style={{paddingLeft: '150px'}} container spacing={4}>
                                        <Tooltip title='SIb/Segundo dedo!'>
                                            <p style={{backgroundColor: 'blue', color: 'white', width: '18px', height: '18px', borderRadius: '20px', fontSize: '7px'}}>SI/b</p>
                                        </Tooltip>
                                    </Grid>
                                    <Grid style={{paddingLeft: '195px'}} container spacing={4}>
                                        <Tooltip title='FÁ/Segundo dedo!/Entre essas notas MI-FÁ, o espaço entre elas é de 1/2 TOM=Semitom, então que por isso o espaço delas é bem próximo, e a bolinha verde se encontra na mesma linha dos acidentes das outras notas anteriores!!'>
                                            <p style={{backgroundColor: 'green', color: 'white', width: '18px', height: '18px', borderRadius: '20px', fontSize: '7px'}}>FÁ</p>
                                        </Tooltip>
                                    </Grid>
                                    <Grid style={{paddingLeft: '255px'}} container spacing={4}>
                                        <Tooltip title='DÓ/Segundo dedo!/Entre essas notas SI-DÓ, o espaço entre elas é de 1/2 TOM=Semitom, então que por isso o espaço delas é bem próximo, e a bolinha verde se encontra na mesma linha dos acidentes das outras notas anteriores!!'>
                                            <p style={{backgroundColor: 'green', color: 'white', width: '18px', height: '18px', borderRadius: '20px', fontSize: '7px'}}>DÓ</p>
                                        </Tooltip>
                                    </Grid>
                                    <Divider style={{borderColor: 'green', width: '270px'}}/>
                                    <Grid style={{paddingLeft: '67px'}} container spacing={2}>
                                        <Tooltip title='MI/Segundo dedo com espaço de 1 TOM=1 Dedo da nota anterior'>
                                            <p style={{backgroundColor: 'green', color: 'white', width: '18px', height: '18px', borderRadius: '20px', fontSize: '7px'}}>MI</p>
                                        </Tooltip>
                                    </Grid>
                                    <Grid style={{paddingLeft: '140px'}} container spacing={4}>
                                        <Tooltip title='SI/Segundo dedo com espaço de 1 TOM=1 Dedo da nota anterior'>
                                            <p style={{backgroundColor: 'green', color: 'white', width: '18px', height: '18px', borderRadius: '20px', fontSize: '7px'}}>SI</p>
                                        </Tooltip>
                                    </Grid>
                                    <Grid style={{paddingLeft: '185px'}} container spacing={4}>
                                        <Tooltip title='FÁ#/Segundo dedo com espaço de 1/2 tom da nota anterior'>
                                            <p style={{backgroundColor: 'blue', color: 'white', width: '18px', height: '18px', borderRadius: '20px', fontSize: '7px'}}>FÁ#</p>
                                        </Tooltip>
                                    </Grid>
                                    <Grid style={{paddingLeft: '205px'}} container spacing={4}>
                                        <Tooltip title='SOLb/Segundo dedo com espaço de 1/2 tom da nota anterior'>
                                            <p style={{backgroundColor: 'blue', color: 'white', width: '18px', height: '18px', borderRadius: '20px', fontSize: '7px'}}>SOL/b</p>
                                        </Tooltip>
                                    </Grid>
                                    <Grid style={{paddingLeft: '245px'}} container spacing={4}>
                                        <Tooltip title='DÓ#/Segundo dedo com espaço de 1/2 tom da nota anterior'>
                                            <p style={{backgroundColor: 'blue', color: 'white', width: '18px', height: '18px', borderRadius: '20px', fontSize: '7px'}}>DÓ#</p>
                                        </Tooltip>
                                    </Grid>
                                    <Grid style={{paddingLeft: '265px'}} container spacing={4}>
                                        <Tooltip title='RÉb/Segundo dedo com espaço de 1/2 tom da nota anterior'>
                                            <p style={{backgroundColor: 'blue', color: 'white', width: '18px', height: '18px', borderRadius: '20px', fontSize: '7px'}}>RÉ/b</p>
                                        </Tooltip>
                                    </Grid>
                                    <Divider style={{borderColor: 'green', width: '270px'}}/>
                                    <Grid style={{paddingLeft: '67px'}} container spacing={2}>
                                        <Tooltip title='FÁ/Segundo dedo com espaço de 1/2 tom da nota anterior'>
                                            <p style={{backgroundColor: 'green', color: 'white', width: '18px', height: '18px', borderRadius: '20px', fontSize: '7px'}}>FÁ</p>
                                        </Tooltip>
                                    </Grid>
                                    <Grid style={{paddingLeft: '140px'}} container spacing={4}>
                                        <Tooltip title='DÓ/Segundo dedo com espaço de 1/2 tom da nota anterior'>
                                            <p style={{backgroundColor: 'green', color: 'white', width: '18px', height: '18px', borderRadius: '20px', fontSize: '7px'}}>DÓ</p>
                                        </Tooltip>
                                    </Grid>
                                    <Grid style={{paddingLeft: '195px'}} container spacing={4}>
                                        <Tooltip title='SOL/Terceiro dedo com espaço de 1 tom da nota anterior de bloco verde'>
                                            <p style={{backgroundColor: 'green', color: 'white', width: '18px', height: '18px', borderRadius: '20px', fontSize: '7px'}}>SOL</p>
                                        </Tooltip>
                                    </Grid>
                                    <Grid style={{paddingLeft: '255px'}} container spacing={4}>
                                        <Tooltip title='RÉ/Terceiro dedo com espaço de 1 tom da nota anterior de bloco verde'>
                                            <p style={{backgroundColor: 'green', color: 'white', width: '18px', height: '18px', borderRadius: '20px', fontSize: '7px'}}>RÉ</p>
                                        </Tooltip>
                                    </Grid>
                                    <Divider style={{borderColor: 'blue', width: '270px'}}/>
                                    <Grid style={{paddingLeft: '57px'}} container spacing={2}>
                                        <Tooltip title='FÁ#/Quarto dedo com espaço de 1/2 tom da nota anterior'>
                                            <p style={{backgroundColor: 'blue', color: 'white', width: '18px', height: '18px', borderRadius: '20px', fontSize: '7px'}}>FÁ#</p>
                                        </Tooltip>
                                    </Grid>
                                    <Grid style={{paddingLeft: '92px'}} container spacing={4}>
                                        <Tooltip title='SOL/b/Quarto dedo com espaço de 1/2 tom da nota anterior de bloco verde'>
                                            <p style={{backgroundColor: 'blue', color: 'white', width: '18px', height: '18px', borderRadius: '20px', fontSize: '7px'}}>SOL/b</p>
                                        </Tooltip>
                                    </Grid>
                                    <Grid style={{paddingLeft: '130px'}} container spacing={4}>
                                        <Tooltip title='DÓ#/Quarto dedo com espaço de 1/2 tom da nota anterior'>
                                            <p style={{backgroundColor: 'blue', color: 'white', width: '18px', height: '18px', borderRadius: '20px', fontSize: '7px'}}>DÓ#</p>
                                        </Tooltip>
                                    </Grid>
                                    <Grid style={{paddingLeft: '150px'}} container spacing={4}>
                                        <Tooltip title='RÉ/b/Quarto dedo com espaço de 1/2 tom da nota anterior de bloco verde'>
                                            <p style={{backgroundColor: 'blue', color: 'white', width: '18px', height: '18px', borderRadius: '20px', fontSize: '7px'}}>RÉ/b</p>
                                        </Tooltip>
                                    </Grid>
                                    <Grid style={{paddingLeft: '184px'}} container spacing={4}>
                                        <Tooltip title='SOL#/Quarto dedo com espaço de 1/2 tom da nota anterior'>
                                            <p style={{backgroundColor: 'blue', color: 'white', width: '18px', height: '18px', borderRadius: '20px', fontSize: '7px'}}>SOL#</p>
                                        </Tooltip>
                                    </Grid>
                                    <Grid style={{paddingLeft: '204px'}} container spacing={4}>
                                        <Tooltip title='LÁ/b/Quarto dedo com espaço de 1/2 tom da nota anterior de bloco verde'>
                                            <p style={{backgroundColor: 'blue', color: 'white', width: '18px', height: '18px', borderRadius: '20px', fontSize: '7px'}}>LÁ/b</p>
                                        </Tooltip>
                                    </Grid>
                                    <Grid style={{paddingLeft: '245px'}} container spacing={4}>
                                        <Tooltip title='RÉ#/Quarto dedo com espaço de 1/2 tom da nota anterior'>
                                            <p style={{backgroundColor: 'blue', color: 'white', width: '18px', height: '18px', borderRadius: '20px', fontSize: '7px'}}>RÉ#</p>
                                        </Tooltip>
                                    </Grid>
                                    <Grid style={{paddingLeft: '265px'}} container spacing={4}>
                                        <Tooltip title='MI/b/Quarto dedo com espaço de 1/2 tom da nota anterior de bloco verde'>
                                            <p style={{backgroundColor: 'blue', color: 'white', width: '18px', height: '18px', borderRadius: '20px', fontSize: '7px'}}>MI/b</p>
                                        </Tooltip>
                                    </Grid>
                                    <Divider style={{borderColor: 'green', width: '270px'}}/>
                                    <Grid style={{paddingLeft: '67px'}} container spacing={2}>
                                        <Tooltip title='SOL/Natural/Quarto dedo separado do dedo da nota anterior'>
                                            <p style={{backgroundColor: 'green', color: 'white', width: '18px', height: '18px', borderRadius: '20px', fontSize: '7px'}}>SOL</p>
                                        </Tooltip>
                                    </Grid>
                                    <Grid style={{paddingLeft: '140px'}} container spacing={4}>
                                        <Tooltip title='RÉ/Natural/Quarto dedo separado do dedo da nota anterior'>
                                            <p style={{backgroundColor: 'green', color: 'white', width: '18px', height: '18px', borderRadius: '20px', fontSize: '7px'}}>RÉ</p>
                                        </Tooltip>
                                    </Grid>
                                    <Grid style={{paddingLeft: '194px'}} container spacing={4}>
                                        <Tooltip title='LÁ/Natural/Quarto dedo separado do dedo da nota anterior'>
                                            <p style={{backgroundColor: 'green', color: 'white', width: '18px', height: '18px', borderRadius: '20px', fontSize: '7px'}}>LÁ</p>
                                        </Tooltip>
                                    </Grid>
                                    <Grid style={{paddingLeft: '256px'}} container spacing={4}>
                                        <Tooltip title='MI/Natural/Quarto dedo separado do dedo da nota anterior'>
                                            <p style={{backgroundColor: 'green', color: 'white', width: '18px', height: '18px', borderRadius: '20px', fontSize: '7px'}}>MI</p>
                                        </Tooltip>
                                    </Grid>
                                    <Divider style={{borderColor: 'green', width: '270px'}}/>
                                    <Grid style={{paddingLeft: '57px'}} container spacing={2}>
                                        <Tooltip title='SOL#/Quarto dedo separado do dedo da nota anterior'>
                                            <p style={{backgroundColor: 'blue', color: 'white', width: '18px', height: '18px', borderRadius: '20px', fontSize: '7px'}}>SOL#</p>
                                        </Tooltip>
                                    </Grid>
                                    <Grid style={{paddingLeft: '95px'}} container spacing={4}>
                                        <Tooltip title='LÁb/Quarto dedo separado do dedo da nota anterior'>
                                            <p style={{backgroundColor: 'blue', color: 'white', width: '18px', height: '18px', borderRadius: '20px', fontSize: '7px'}}>LA/b</p>
                                        </Tooltip>
                                    </Grid>
                                    <Grid style={{paddingLeft: '130px'}} container spacing={4}>
                                        <Tooltip title='RÉ#/Quarto dedo separado do dedo da nota anterior'>
                                            <p style={{backgroundColor: 'blue', color: 'white', width: '18px', height: '18px', borderRadius: '20px', fontSize: '7px'}}>RÉ#</p>
                                        </Tooltip>
                                    </Grid>
                                    <Grid style={{paddingLeft: '150px'}} container spacing={4}>
                                        <Tooltip title='MIb/Quarto dedo separado do dedo da nota anterior'>
                                            <p style={{backgroundColor: 'blue', color: 'white', width: '18px', height: '18px', borderRadius: '20px', fontSize: '7px'}}>MI/b</p>
                                        </Tooltip>
                                    </Grid>
                                    <Grid style={{paddingLeft: '185px'}} container spacing={4}>
                                        <Tooltip title='MIb/Quarto dedo separado do dedo da nota anterior'>
                                            <p style={{backgroundColor: 'blue', color: 'white', width: '18px', height: '18px', borderRadius: '20px', fontSize: '7px'}}>MI/b</p>
                                        </Tooltip>
                                    </Grid>
                                    <Grid style={{paddingLeft: '205px'}} container spacing={4}>
                                        <Tooltip title='MIb/Quarto dedo separado do dedo da nota anterior'>
                                            <p style={{backgroundColor: 'blue', color: 'white', width: '18px', height: '18px', borderRadius: '20px', fontSize: '7px'}}>MI/b</p>
                                        </Tooltip>
                                    </Grid>
                                    <Grid style={{paddingLeft: '256px'}} container spacing={4}>
                                        <Tooltip title='FÁ/Quarto dedo separado do dedo da nota anterior'>
                                            <p style={{backgroundColor: 'green', color: 'white', width: '18px', height: '18px', borderRadius: '20px', fontSize: '7px'}}>FÁ</p>
                                        </Tooltip>
                                    </Grid>
                                    <Divider style={{borderColor: 'green', width: '270px'}}/>
                                    <Grid style={{paddingLeft: '67px'}} container spacing={2}>
                                        <Tooltip title='LÁ/Primeiro dedo separado do dedo da nota anterior, mudança de Posição para a 5ª Posição na Viola!'>
                                            <p style={{backgroundColor: 'green', color: 'white', width: '18px', height: '18px', borderRadius: '20px', fontSize: '7px'}}>LÁ</p>
                                        </Tooltip>
                                    </Grid>
                                    <Grid style={{paddingLeft: '140px'}} container spacing={4}>
                                        <Tooltip title='MI/Primeiro dedo separado do dedo da nota anterior, mudança de Posição para a 5ª Posição na Viola!'>
                                            <p style={{backgroundColor: 'green', color: 'white', width: '18px', height: '18px', borderRadius: '20px', fontSize: '7px'}}>MI</p>
                                        </Tooltip>
                                    </Grid>
                                    <Grid style={{paddingLeft: '195px'}} container spacing={4}>
                                        <Tooltip title='SI/Primeiro dedo separado do dedo da nota anterior, mudança de Posição para a 5ª Posição na Viola!'>
                                            <p style={{backgroundColor: 'green', color: 'white', width: '18px', height: '18px', borderRadius: '20px', fontSize: '7px'}}>SI</p>
                                        </Tooltip>
                                    </Grid>
                                    <Grid style={{paddingLeft: '245px'}} container spacing={4}>
                                        <Tooltip title='FÁ#/Primeiro dedo separado do dedo da nota anterior, mudança de Posição para a 5ª Posição na Viola!'>
                                            <p style={{backgroundColor: 'blue', color: 'white', width: '18px', height: '18px', borderRadius: '20px', fontSize: '7px'}}>FÁ#</p>
                                        </Tooltip>
                                    </Grid>
                                    <Grid style={{paddingLeft: '265px'}} container spacing={4}>
                                        <Tooltip title='SOLb/Primeiro dedo separado do dedo da nota anterior, mudança de Posição para a 5ª Posição na Viola!'>
                                            <p style={{backgroundColor: 'blue', color: 'white', width: '18px', height: '18px', borderRadius: '20px', fontSize: '7px'}}>SOL/b</p>
                                        </Tooltip>
                                    </Grid>
                                    <Divider style={{borderColor: 'green', width: '270px'}}/>
                                    <Grid style={{paddingLeft: '57px'}} container spacing={2}>
                                        <Tooltip title='LÁ#/Primeiro dedo separado do dedo da nota anterior, mudança de Posição para a 5ª Posição na Viola!'>
                                            <p style={{backgroundColor: 'blue', color: 'white', width: '18px', height: '18px', borderRadius: '20px', fontSize: '7px'}}>LÁ#</p>
                                        </Tooltip>
                                    </Grid>
                                    <Grid style={{paddingLeft: '92px'}} container spacing={4}>
                                        <Tooltip title='SI/b/Primeiro dedo separado do dedo da nota anterior, mudança de Posição para a 5ª Posição na Viola!'>
                                            <p style={{backgroundColor: 'blue', color: 'white', width: '18px', height: '18px', borderRadius: '20px', fontSize: '7px'}}>SI/b</p>
                                        </Tooltip>
                                    </Grid>
                                    <Grid style={{paddingLeft: '140px'}} container spacing={4}>
                                        <Tooltip title='FÁ/Segundo dedo, 5ª Posição na Viola!'>
                                            <p style={{backgroundColor: 'green', color: 'white', width: '18px', height: '18px', borderRadius: '20px', fontSize: '7px'}}>FÁ</p>
                                        </Tooltip>
                                    </Grid>
                                    <Grid style={{paddingLeft: '195px'}} container spacing={4}>
                                        <Tooltip title='DÓ/Segundo dedo, 5ª Posição na Viola!'>
                                            <p style={{backgroundColor: 'green', color: 'white', width: '18px', height: '18px', borderRadius: '20px', fontSize: '7px'}}>DÓ</p>
                                        </Tooltip>
                                    </Grid>
                                    <Grid style={{paddingLeft: '255px'}} container spacing={4}>
                                        <Tooltip title='SOL/Segundo dedo, 5ª Posição na Viola!'>
                                            <p style={{backgroundColor: 'green', color: 'white', width: '18px', height: '18px', borderRadius: '20px', fontSize: '7px'}}>SOL</p>
                                        </Tooltip>
                                    </Grid>
                                    <Divider style={{borderColor: 'green', width: '270px'}}/>
                                    <Grid style={{paddingLeft: '67px'}} container spacing={2}>
                                        <Tooltip title='SI/Segundo dedo, 5ª Posição na Viola!'>
                                            <p style={{backgroundColor: 'green', color: 'white', width: '18px', height: '18px', borderRadius: '20px', fontSize: '7px'}}>SI</p>
                                        </Tooltip>
                                    </Grid>
                                    <Grid style={{paddingLeft: '130px'}} container spacing={4}>
                                        <Tooltip title='FÁ#/Segundo dedo, 5ª Posição na Viola!'>
                                            <p style={{backgroundColor: 'blue', color: 'white', width: '18px', height: '18px', borderRadius: '20px', fontSize: '7px'}}>FÁ#</p>
                                        </Tooltip>
                                    </Grid>
                                    <Grid style={{paddingLeft: '150px'}} container spacing={4}>
                                        <Tooltip title='SOL/b/Segundo dedo, 5ª Posição na Viola!'>
                                            <p style={{backgroundColor: 'blue', color: 'white', width: '18px', height: '18px', borderRadius: '20px', fontSize: '7px'}}>SOL/b</p>
                                        </Tooltip>
                                    </Grid>
                                    <Grid style={{paddingLeft: '185px'}} container spacing={4}>
                                        <Tooltip title='DÓ#/Segundo dedo, 5ª Posição na Viola!'>
                                            <p style={{backgroundColor: 'blue', color: 'white', width: '18px', height: '18px', borderRadius: '20px', fontSize: '7px'}}>DÓ#</p>
                                        </Tooltip>
                                    </Grid>
                                    <Grid style={{paddingLeft: '205px'}} container spacing={4}>
                                        <Tooltip title='RÉ/b/Segundo dedo, 5ª Posição na Viola!'>
                                            <p style={{backgroundColor: 'blue', color: 'white', width: '18px', height: '18px', borderRadius: '20px', fontSize: '7px'}}>RÉ/b</p>
                                        </Tooltip>
                                    </Grid>
                                    <Grid style={{paddingLeft: '245px'}} container spacing={4}>
                                        <Tooltip title='SOL#/Segundo dedo, 5ª Posição na Viola!'>
                                            <p style={{backgroundColor: 'blue', fontFamily: 'fantasy', color: 'white', width: '18px', height: '18px', borderRadius: '20px', fontSize: '7px'}}>SOL#</p>
                                        </Tooltip>
                                    </Grid>
                                    <Grid style={{paddingLeft: '265px'}} container spacing={4}>
                                        <Tooltip title='LÁ/b/Segundo dedo, 5ª Posição na Viola!'>
                                            <p style={{backgroundColor: 'blue', fontFamily: 'fantasy', color: 'white', width: '18px', height: '18px', borderRadius: '20px', fontSize: '7px'}}>LÁ/b</p>
                                        </Tooltip>
                                    </Grid>
                                    <Divider style={{borderColor: 'green', width: '270px'}}/>
                                    <Grid style={{paddingLeft: '67px'}} container spacing={2}>
                                        <Tooltip title='DÓ/Terceiro dedo, 5ª Posição na Viola!'>
                                            <p style={{backgroundColor: 'yellow', fontFamily: 'fantasy', color: 'black', width: '18px', height: '18px', borderRadius: '20px', fontSize: '7px'}}>DÓ</p>
                                        </Tooltip>
                                    </Grid>
                                    <Grid style={{paddingLeft: '140px'}} container spacing={4}>
                                        <Tooltip title='SOL/Terceiro dedo, 5ª Posição na Viola!'>
                                            <p style={{backgroundColor: 'yellow', fontFamily: 'fantasy', color: 'black', width: '18px', height: '18px', borderRadius: '20px', fontSize: '7px'}}>SOL</p>
                                        </Tooltip>
                                    </Grid>
                                    <Grid style={{paddingLeft: '195px'}} container spacing={4}>
                                        <Tooltip title='RÉ/Terceiro dedo, 5ª Posição na Viola!'>
                                            <p style={{backgroundColor: 'yellow', fontFamily: 'fantasy', color: 'black', width: '18px', height: '18px', borderRadius: '20px', fontSize: '7px'}}>RÉ</p>
                                        </Tooltip>
                                    </Grid>
                                    <Grid style={{paddingLeft: '255px'}} container spacing={4}>
                                        <Tooltip title='LÁ/Terceiro dedo, 5ª Posição na Viola!'>
                                            <p style={{backgroundColor: 'yellow', fontFamily: 'fantasy', color: 'black', width: '18px', height: '18px', borderRadius: '20px', fontSize: '7px'}}>LÁ</p>
                                        </Tooltip>
                                    </Grid>
                                    <Divider style={{borderColor: 'green', width: '270px'}}/>
                                    <Grid style={{paddingLeft: '57px'}} container spacing={2}>
                                        <Tooltip title='DÒ#/Terceiro dedo, 5ª Posição na Viola!'>
                                            <p style={{backgroundColor: 'blue', fontFamily: 'fantasy', color: 'white', width: '18px', height: '18px', borderRadius: '20px', fontSize: '7px'}}>DÓ#</p>
                                        </Tooltip>
                                    </Grid>
                                    <Grid style={{paddingLeft: '93px'}} container spacing={4}>
                                        <Tooltip title='RÉ/b/Terceiro dedo, 5ª Posição na Viola!'>
                                            <p style={{backgroundColor: 'blue', fontFamily: 'fantasy', color: 'white', width: '18px', height: '18px', borderRadius: '20px', fontSize: '7px'}}>RÉ/b</p>
                                        </Tooltip>
                                    </Grid>
                                    <Grid style={{paddingLeft: '130px'}} container spacing={4}>
                                        <Tooltip title='SOL#/Terceiro dedo, 5ª Posição na Viola!'>
                                            <p style={{backgroundColor: 'blue', fontFamily: 'fantasy', color: 'white', width: '18px', height: '18px', borderRadius: '20px', fontSize: '7px'}}>SOL#</p>
                                        </Tooltip>
                                    </Grid>
                                    <Grid style={{paddingLeft: '150px'}} container spacing={4}>
                                        <Tooltip title='LÁ/b/Terceiro dedo, 5ª Posição na Viola!'>
                                            <p style={{backgroundColor: 'blue', fontFamily: 'fantasy', color: 'white', width: '18px', height: '18px', borderRadius: '20px', fontSize: '7px'}}>LÁ/b</p>
                                        </Tooltip>
                                    </Grid>
                                    <Grid style={{paddingLeft: '187px'}} container spacing={4}>
                                        <Tooltip title='RÉ#/Terceiro dedo, 5ª Posição na Viola!'>
                                            <p style={{backgroundColor: 'blue', fontFamily: 'fantasy', color: 'white', width: '18px', height: '18px', borderRadius: '20px', fontSize: '7px'}}>RÉ#</p>
                                        </Tooltip>
                                    </Grid>
                                    <Grid style={{paddingLeft: '207px'}} container spacing={4}>
                                        <Tooltip title='MI/b/Terceiro dedo, 5ª Posição na Viola!'>
                                            <p style={{backgroundColor: 'blue', fontFamily: 'fantasy', color: 'white', width: '18px', height: '18px', borderRadius: '20px', fontSize: '7px'}}>MI/b</p>
                                        </Tooltip>
                                    </Grid>
                                    <Grid style={{paddingLeft: '245px'}} container spacing={4}>
                                        <Tooltip title='LÁ#/Terceiro dedo, 5ª Posição na Viola!'>
                                            <p style={{backgroundColor: 'blue', fontFamily: 'fantasy', color: 'white', width: '18px', height: '18px', borderRadius: '20px', fontSize: '7px'}}>LÁ#</p>
                                        </Tooltip>
                                    </Grid>
                                    <Grid style={{paddingLeft: '265px'}} container spacing={4}>
                                        <Tooltip title='SOL/b/Terceiro dedo, 5ª Posição na Viola!'>
                                            <p style={{backgroundColor: 'blue', fontFamily: 'fantasy', color: 'white', width: '18px', height: '18px', borderRadius: '20px', fontSize: '7px'}}>SOL/b</p>
                                        </Tooltip>
                                    </Grid>
                                    <Divider style={{borderColor: 'green', width: '270px'}}/>
                                    <Grid style={{paddingLeft: '67px'}} container spacing={2}>
                                        <Tooltip title='RÉ/Quarto dedo, 5ª Posição na Viola!'>
                                            <p style={{backgroundColor: 'green', color: 'white', width: '18px', height: '18px', borderRadius: '20px', fontSize: '7px'}}>RÉ</p>
                                        </Tooltip>
                                    </Grid>
                                    <Grid style={{paddingLeft: '140px'}} container spacing={4}>
                                        <Tooltip title='LÁ/Quarto dedo, 5ª Posição na Viola!'>
                                            <p style={{backgroundColor: 'green', color: 'white', width: '18px', height: '18px', borderRadius: '20px', fontSize: '7px'}}>LÁ</p>
                                        </Tooltip>
                                    </Grid>
                                    <Grid style={{paddingLeft: '197px'}} container spacing={4}>
                                        <Tooltip title='MI/Quarto dedo, 5ª Posição na Viola!'>
                                            <p style={{backgroundColor: 'green', color: 'white', width: '18px', height: '18px', borderRadius: '20px', fontSize: '7px'}}>MI</p>
                                        </Tooltip>
                                    </Grid>
                                    <Grid style={{paddingLeft: '255px'}} container spacing={4}>
                                        <Tooltip title='SI/Qaurto dedo, 5ª Posição na Viola!'>
                                            <p style={{backgroundColor: 'green', color: 'white', width: '18px', height: '18px', borderRadius: '20px', fontSize: '7px'}}>SI</p>
                                        </Tooltip>
                                    </Grid>
                                    <Divider style={{borderColor: 'green', width: '270px'}}/>
                                    <Grid style={{paddingLeft: '57px'}} container spacing={2}>
                                        <Tooltip title='RÉ#/Quarto dedo, 5ª Posição na Viola!'>
                                            <p style={{backgroundColor: 'blue', fontFamily: 'fantasy', color: 'white', width: '18px', height: '18px', borderRadius: '20px', fontSize: '7px'}}>RÉ#</p>
                                        </Tooltip>
                                    </Grid>
                                    <Grid style={{paddingLeft: '95px'}} container spacing={4}>
                                        <Tooltip title='MI/b/Quarto dedo, 5ª Posição na Viola!'>
                                            <p style={{backgroundColor: 'blue', fontFamily: 'fantasy', color: 'white', width: '18px', height: '18px', borderRadius: '20px', fontSize: '7px'}}>MI/B</p>
                                        </Tooltip>
                                    </Grid>
                                    <Grid style={{paddingLeft: '130px'}} container spacing={4}>
                                        <Tooltip title='LÁ#/Quarto dedo, 5ª Posição na Viola!'>
                                            <p style={{backgroundColor: 'blue', fontFamily: 'fantasy', color: 'white', width: '18px', height: '18px', borderRadius: '20px', fontSize: '7px'}}>LÁ#</p>
                                        </Tooltip>
                                    </Grid>
                                    <Grid style={{paddingLeft: '150px'}} container spacing={4}>
                                        <Tooltip title='SOL/b/Quarto dedo, 5ª Posição na Viola!'>
                                            <p style={{backgroundColor: 'blue', fontFamily: 'fantasy', color: 'white', width: '18px', height: '18px', borderRadius: '20px', fontSize: '7px'}}>SOL/b</p>
                                        </Tooltip>
                                    </Grid>
                                    <Grid style={{paddingLeft: '197px'}} container spacing={4}>
                                        <Tooltip title='FÁ/Quarto dedo, 5ª Posição na Viola!'>
                                            <p style={{backgroundColor: 'green', color: 'white', width: '18px', height: '18px', borderRadius: '20px', fontSize: '7px'}}>FÁ</p>
                                        </Tooltip>
                                    </Grid>
                                    <Grid style={{paddingLeft: '255px'}} container spacing={4}>
                                        <Tooltip title='DÓ/Quarto dedo, 5ª Posição na Viola!'>
                                            <p style={{backgroundColor: 'green', color: 'white', width: '18px', height: '18px', borderRadius: '20px', fontSize: '7px'}}>DÓI</p>
                                        </Tooltip>
                                    </Grid>
                                    <Divider style={{borderColor: 'green', width: '270px'}}/>
                                    <Grid style={{paddingLeft: '67px'}} container spacing={2}>
                                        <Tooltip title='MI/Primeiro dedo, 9ª Posição na Viola!'>
                                            <p style={{backgroundColor: 'green', color: 'white', width: '18px', height: '18px', borderRadius: '20px', fontSize: '7px'}}>MI</p>
                                        </Tooltip>
                                    </Grid>
                                    <Grid style={{paddingLeft: '140px'}} container spacing={4}>
                                        <Tooltip title='SI/Primeiro dedo, 9ª Posição na Viola!'>
                                            <p style={{backgroundColor: 'green', color: 'white', width: '18px', height: '18px', borderRadius: '20px', fontSize: '7px'}}>SI</p>
                                        </Tooltip>
                                    </Grid>
                                    <Grid style={{paddingLeft: '187px'}} container spacing={4}>
                                        <Tooltip title='FÁ#/Primeiro dedo, 9ª Posição na Viola!'>
                                            <p style={{backgroundColor: 'blue', fontFamily: 'fantasy', color: 'white', width: '18px', height: '18px', borderRadius: '20px', fontSize: '7px'}}>FÁ#</p>
                                        </Tooltip>
                                    </Grid>
                                    <Grid style={{paddingLeft: '210px'}} container spacing={4}>
                                        <Tooltip title='SOL/b/Primeiro dedo, 9ª Posição na Viola!'>
                                            <p style={{backgroundColor: 'blue', fontFamily: 'fantasy', color: 'white', width: '18px', height: '18px', borderRadius: '20px', fontSize: '7px'}}>SOL/b</p>
                                        </Tooltip>
                                    </Grid>
                                    <Grid style={{paddingLeft: '245px'}} container spacing={4}>
                                        <Tooltip title='DÓ#/Primeiro dedo, 9ª Posição na Viola!'>
                                            <p style={{backgroundColor: 'blue', fontFamily: 'fantasy', color: 'white', width: '18px', height: '18px', borderRadius: '20px', fontSize: '7px'}}>DÓ#</p>
                                        </Tooltip>
                                    </Grid>
                                    <Grid style={{paddingLeft: '267px'}} container spacing={4}>
                                        <Tooltip title='RÉ/b/Primeiro dedo, 9ª Posição na Viola!'>
                                            <p style={{backgroundColor: 'blue', fontFamily: 'fantasy', color: 'white', width: '18px', height: '18px', borderRadius: '20px', fontSize: '7px'}}>RÉ/b</p>
                                        </Tooltip>
                                    </Grid>
                                    <Divider style={{borderColor: 'green', width: '270px'}}/>
                                    <Grid style={{paddingLeft: '67px'}} container spacing={2}>
                                        <Tooltip title='FÁ/Segundo dedo, 9ª Posição na Viola!'>
                                            <p style={{backgroundColor: 'green', color: 'white', width: '18px', height: '18px', borderRadius: '20px', fontSize: '7px'}}>FÁ</p>
                                        </Tooltip>
                                    </Grid>
                                    <Grid style={{paddingLeft: '140px'}} container spacing={4}>
                                        <Tooltip title='DÓ/Segundo dedo, 9ª Posição na Viola!'>
                                            <p style={{backgroundColor: 'green', color: 'white', width: '18px', height: '18px', borderRadius: '20px', fontSize: '7px'}}>DÓ</p>
                                        </Tooltip>
                                    </Grid>
                                    <Grid style={{paddingLeft: '197px'}} container spacing={4}>
                                        <Tooltip title='SOL/Segundo dedo, 9ª Posição na Viola!'>
                                            <p style={{backgroundColor: 'green', color: 'white', width: '18px', height: '18px', borderRadius: '20px', fontSize: '7px'}}>SOL</p>
                                        </Tooltip>
                                    </Grid>
                                    <Grid style={{paddingLeft: '257px'}} container spacing={4}>
                                        <Tooltip title='RÉ/Primeiro dedo, 9ª Posição na Viola!'>
                                            <p style={{backgroundColor: 'green', color: 'white', width: '18px', height: '18px', borderRadius: '20px', fontSize: '7px'}}>RÉ</p>
                                        </Tooltip>
                                    </Grid>
                                    <Divider style={{borderColor: 'green', width: '270px'}}/>
                                    <Grid style={{paddingLeft: '57px'}} container spacing={2}>
                                        <Tooltip title='FÁ#/Segundo dedo, 9ª Posição na Viola!'>
                                            <p style={{backgroundColor: 'blue', color: 'white', width: '18px', height: '18px', borderRadius: '20px', fontSize: '7px'}}>FÁ#</p>
                                        </Tooltip>
                                    </Grid>
                                    <Grid style={{paddingLeft: '95px'}} container spacing={4}>
                                        <Tooltip title='SOL/b/Segundo dedo, 9ª Posição na Viola!'>
                                            <p style={{backgroundColor: 'blue', color: 'white', width: '18px', height: '18px', borderRadius: '20px', fontSize: '7px'}}>SOL/b</p>
                                        </Tooltip>
                                    </Grid>
                                    <Grid style={{paddingLeft: '130px'}} container spacing={4}>
                                        <Tooltip title='DÓ#/Segundo dedo, 9ª Posição na Viola!'>
                                            <p style={{backgroundColor: 'blue', color: 'white', width: '18px', height: '18px', borderRadius: '20px', fontSize: '7px'}}>DÓ#</p>
                                        </Tooltip>
                                    </Grid>
                                    <Grid style={{paddingLeft: '150px'}} container spacing={4}>
                                        <Tooltip title='RÉ/b/Segundo dedo, 9ª Posição na Viola!'>
                                            <p style={{backgroundColor: 'blue', color: 'white', width: '18px', height: '18px', borderRadius: '20px', fontSize: '7px'}}>RÉ/b</p>
                                        </Tooltip>
                                    </Grid>
                                    <Grid style={{paddingLeft: '187px'}} container spacing={4}>
                                        <Tooltip title='SOL#/Segundo dedo, 9ª Posição na Viola!'>
                                            <p style={{backgroundColor: 'blue', color: 'white', width: '18px', height: '18px', borderRadius: '20px', fontSize: '7px'}}>SOL#</p>
                                        </Tooltip>
                                    </Grid>
                                    <Grid style={{paddingLeft: '207px'}} container spacing={4}>
                                        <Tooltip title='LÁ/b/Segundo dedo, 9ª Posição na Viola!'>
                                            <p style={{backgroundColor: 'blue', color: 'white', width: '18px', height: '18px', borderRadius: '20px', fontSize: '7px'}}>LÁ/b</p>
                                        </Tooltip>
                                    </Grid>
                                    <Grid style={{paddingLeft: '247px'}} container spacing={4}>
                                        <Tooltip title='RÉ#/Segundo dedo, 9ª Posição na Viola!'>
                                            <p style={{backgroundColor: 'blue', color: 'white', width: '18px', height: '18px', borderRadius: '20px', fontSize: '7px'}}>RÉ#</p>
                                        </Tooltip>
                                    </Grid>
                                    <Grid style={{paddingLeft: '267px'}} container spacing={4}>
                                        <Tooltip title='MI/b/Segundo dedo, 9ª Posição na Viola!'>
                                            <p style={{backgroundColor: 'blue', color: 'white', width: '18px', height: '18px', borderRadius: '20px', fontSize: '7px'}}>MI/b</p>
                                        </Tooltip>
                                    </Grid>
                                    <Divider style={{borderColor: 'green', width: '270px'}}/>
                                    <Grid style={{paddingLeft: '67px'}} container spacing={2}>
                                        <Tooltip title='SOL/Segundo dedo, 9ª Posição na Viola!'>
                                            <p style={{backgroundColor: 'green', color: 'white', width: '18px', height: '18px', borderRadius: '20px', fontSize: '7px'}}>SOL</p>
                                        </Tooltip>
                                    </Grid>
                                    <Grid style={{paddingLeft: '140px'}} container spacing={4}>
                                        <Tooltip title='RÉ/Segundo dedo, 9ª Posição na Viola!'>
                                            <p style={{backgroundColor: 'green', color: 'white', width: '18px', height: '18px', borderRadius: '20px', fontSize: '7px'}}>RÉ</p>
                                        </Tooltip>
                                    </Grid>
                                    <Grid style={{paddingLeft: '197px'}} container spacing={4}>
                                        <Tooltip title='LÁ/Segundo dedo, 9ª Posição na Viola!'>
                                            <p style={{backgroundColor: 'green', color: 'white', width: '18px', height: '18px', borderRadius: '20px', fontSize: '7px'}}>LÁ</p>
                                        </Tooltip>
                                    </Grid>
                                    <Grid style={{paddingLeft: '257px'}} container spacing={4}>
                                        <Tooltip title='MI/Primeiro dedo, 9ª Posição na Viola!'>
                                            <p style={{backgroundColor: 'green', color: 'white', width: '18px', height: '18px', borderRadius: '20px', fontSize: '7px'}}>MI</p>
                                        </Tooltip>
                                    </Grid>
                                    <Grid style={{paddingLeft: '590px'}} container spacing={39}>
                                        <Tooltip title='Notes of natural heights!'>
                                            <Button onClick={click2} style={{width: '120px', height: '60px', backgroundColor: 'Highlight', color: 'white'}}><ArrowLeftIcon/>Natural Sounds</Button>
                                        </Tooltip>
                                    </Grid>
                                    <Grid style={{paddingLeft: '280px', paddingTop: '80px'}} container spacing={0}>
                                        <Tooltip title='This all area is the natural notes at the violin tonality, as you can to see, this tonality is a 6nd tom under the Viola Tons'>
                                            <Button onClick={click1} style={{backgroundColor: 'Highlight', color: 'white', width: '150px'}}><ArrowLeftIcon/>Violin's Tonality</Button>
                                        </Tooltip>
                                    </Grid>
                                    <Grid style={{paddingLeft: '80px'}} container spacing={13}>
                                        <Tooltip title='Until here, we have the natural notes at the Viola, after this will be a medium High-pitched-sound at the Viola'>
                                            <hr style={{borderColor: 'cyan', borderWidth: '2px', width: '600px'}}/>
                                        </Tooltip>
                                    </Grid>
                                    <Grid style={{paddingTop: '106px'}} container spacing={0}>
                                        <Tooltip title='Until here, we have the natural notes at the Violin, but this is wrote at the Violas mirror, because the Violas mirror reflects the bass sounds different the Violin, this show to us that, the Violin is more High-pitched-sound, and the Violas mirror content the heights Violin too'>
                                            <hr style={{borderColor: 'cyan', borderWidth: '2px', width: '600px'}}/>
                                        </Tooltip>
                                    </Grid>
                                    <Grid style={{paddingTop: '90px', paddingRight: '170px'}}>
                                        <Tooltip title='Until here the notes at the viola that is used will stop here, because, this four notes group is the tonality of the Violin strings'>
                                            <Button onClick={click3} style={{backgroundColor: 'gold', color: 'dodgerblue'}}>|____SOL___RÉ___LÁ____MI______|</Button>
                                        </Tooltip>
                                    </Grid>
                                </Card>
                            </details>
                        </Fab>
                    </CardActionArea>
                    </Grid>
                </Box>
            </Modal>
        </div>
    )
}