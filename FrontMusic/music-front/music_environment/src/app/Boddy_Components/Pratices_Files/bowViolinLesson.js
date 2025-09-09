import React from 'react';
import { ContiVioloinLesson, Diver } from './style';
import { Card, Grid, Tooltip } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { motion } from 'framer-motion';

export default function LessonViolinOne(){
    const talaogif = [
        <ContiVioloinLesson>
            hello
            As you are seeing above at the image, you can to see the first signal on the pentagram, called as Talão, this signal means that the play will must to begin here, at this place at the arco, When you start by here, you will make the moviment from down until the above Ponta
        </ContiVioloinLesson>
    ]
    const pontagif = [
        <ContiVioloinLesson>
            As you are seeing above at the image, you can to see the second signal on the pentagram, called as Ponta, this signal means that the play will must to begin here, at this place at the arco, When this signal appears you will start the music by here, and you will make the moviment to up until come to the Talão
            <img src='https://66.media.tumblr.com/eac289bf2243fdc5266e7a741ffab9a0/tumblr_pridzmC6SZ1v7mb0r_540.gif' alt='pontviolino'/>
        </ContiVioloinLesson>
    ]
    return(
        <ContiVioloinLesson>
            <motion.div
            initial={{scale: 0}}
            animate={{xcale: 1}}
            transition={{duration: 3}}
            >
            <Card>
                <h3>This Lesson reffers a form to play the Strings Instruments, by the signals of arcades</h3>
                <h5>One of this signals is :
                    <ul>
                        <img style={{width: '500px', height: '100px'}} src='https://th.bing.com/th/id/R.58b5b25a4eade3c22bfd9403a8f677cd?rik=LI4pNALACIlTwA&riu=http%3a%2f%2fwww.deficienciavisual.pt%2fIMAGENS%2ftxt-O_ensino_violino_DV_2.png&ehk=A8in9fOv%2f0pgiGl6DH%2fT8DmcdmHcIlFpN%2fHRps111tk%3d&risl=&pid=ImgRaw&r=0' alt='signalsArcade'/>
                    </ul>
                </h5>
                <motion.div
                initial={{rotate: -250}}
                animate={{rotate: 0}}
                transition={{duration: 3}}
                >
                <center style={{margin: '10px'}}>
                    <Diver>
                        <h5>First signal is:(Talão)</h5>
                        <img style={{width: '200px', height: '200px', borderRadius: '50px', float: 'left'}} src='https://th.bing.com/th/id/R.92bb7ed4804ca9ad201c941821677b6d?rik=9Z7EdnQjIqyHug&pid=ImgRaw&r=0' alt='BowViolin'/>
                    </Diver>
                    <Grid style={{float: 'left', paddingLeft: '100px'}} container spacing={2}>
                        <Tooltip style={{position: 'relative'}} title={talaogif}>
                            <ArrowBackIcon style={{fontSize: '40px', position: 'relative'}}/>Talão
                        </Tooltip>
                    </Grid>
                    <Grid style={{float: 'left', paddingLeft: '50px', paddingTop: '10px'}} container spacing={-50}>
                        <Tooltip style={{position: 'relative'}} title={pontagif}>
                            <ArrowBackIcon style={{color: 'black', fontSize: '40px', position: 'relative'}}/>Ponta
                        </Tooltip>
                    </Grid>
                </center>
                </motion.div>
            </Card>
            </motion.div>
        </ContiVioloinLesson>
    )
}