/* eslint-disable @next/next/no-img-element */
import { Card, Grid, Paper, Button, Fab, Divider } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import React from 'react';
import Popup from 'reactjs-popup';
import ViolinPratice from './ExerPratice/ViolinPratice';
import ViolaPratice from './ExerPratice/ViolaPratice';
import VioloncelloPratice from './ExerPratice/VioloncelloPratice';

export default function FirstStud(){
    return(
        <div style={{width: '600px', height: '400px'}}>
            <Card>
                <Paper>
                    <Popup trigger={<Button style={{color: 'midnightblue', fontFamily: 'fantasy', letterSpacing: '2px'}}>Parts of the Violin</Button>}>
                        <Card style={{width: '700px', height: '625px', backgroundColor: 'midnightblue', borderStyle: 'ridge',
                        borderColor: 'darkcyan'}}>
                            <Grid style={{paddingLeft: '40px', paddingTop: '15px'}} container spacing={0}>
                            <img alt='partsviolin' style={{width: '600px', height: '600px', borderRadius: '20px'}}
                                src='https://i.ebayimg.com/images/g/uakAAOSwdLpf5vGY/s-l640.jpg'/>
                                <Grid style={{paddingLeft: '580px'}} container spacing={73}>
                                    <Popup trigger={<Fab style={{fontSize: '18px', width: '100px', height: '50px'}}>Volute <ArrowRightAltIcon style={{color: 'Highlight', fontSize: '15px', float: 'right'}}/></Fab>}>
                                    <Card style={{width: '200px', height: '120px'}}>
                                    <h2 style={{fontSize: '15px'}}><strong>Volute</strong></h2>
                                    <i>This partof the violin  is the head of the violin, it has the caracol form</i>
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
            <Card>
                <Paper>
                    <Popup trigger={<Button style={{color: 'midnightblue', fontFamily: 'fantasy', letterSpacing: '2px'}}>Parts of the Erudit Viola</Button>}>
                        <Card style={{backgroundColor: 'Highlight', width: '600px', height: '600px'}}>
                            <img style={{width: '400px', height: '500px'}} src='https://images.tcdn.com.br/img/img_prod/604952/viola_profissional_4_4_783_2_20200915130944.png' alt='violaerudita'/>
                            <Grid style={{paddingLeft: '780px'}} container spacing={60}>
                                <Paper style={{height: '200px', width: '100px', color: 'blue', fontFamily: 'fantasy', letterSpacing: '3px'}}>
                                    If you view the Violins parts, you will notice that the Violas parts is equal
                                </Paper>
                            </Grid>
                        </Card>
                    </Popup>
                </Paper>
            </Card><hr/>
            <Card>
                <Paper>
                    <Popup trigger={<Button style={{color: 'midnightblue', fontFamily: 'fantasy', letterSpacing: '2px'}}>Parts of the Violoncello</Button>}>
                        <Card style={{width: '700px', height: '320px'}}>
                            <Grid style={{paddingLeft: '280px', paddingTop: '30px'}}>
                                <img style={{width: '200px', height: '150px'}} src='https://th.bing.com/th/id/OIP.JbB95T5mPW_83HqAyNO-iQHaE6?pid=ImgDet&rs=1' alt='sentadoviolon'/>
                            </Grid>
                            <Grid style={{paddingLeft: '140px'}} container spacing={23}>
                                <img style={{width: '300px', height: '300px'}} src='https://th.bing.com/th/id/OIP.1P6YRAkz5IA7ZquDV5cfSwHaHa?pid=ImgDet&rs=1' alt='violoncello'/>
                            </Grid>
                            <Grid style={{paddingLeft: '800px'}} container spacing={37}>
                                <Paper style={{width: '130px', height: '200px', backgroundColor: 'midnightblue', color: 'Highlight'}}>
                                    This instrument has equal parts like Viola and Violin, but, it has a major size, This instrument we have to play sitting
                                </Paper>
                            </Grid>
                        </Card>
                    </Popup>
                </Paper>
            </Card><hr/>
            <Grid container spacing={0}>
                <Card>
                    <ViolinPratice/>
                </Card>
            </Grid>
            <Grid style={{paddingLeft: '260px'}} container spacing={5.3}>
                <Card>
                    <ViolaPratice/>
                </Card>
            </Grid>
            <Grid style={{paddingLeft: '470px'}} container spacing={5.3}>
                <Card>
                    <VioloncelloPratice/>
                </Card>
            </Grid>
        </div>
    )
}