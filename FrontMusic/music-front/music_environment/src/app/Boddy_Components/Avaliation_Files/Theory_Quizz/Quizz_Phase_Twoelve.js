import React, {useState} from 'react';
import {Divider, Button} from '@mui/material';
import { motion } from 'framer-motion';

export default function QuizzDoze(){
    const [status, setStatus] = useState(0);
    const [founded, setFounded] = useState(false);
    const [score, setScore] = useState(0);
    const questionaryDoze =[{
        askerLabel: '1ª) The syncopation theory when does it happen?',
        respOptions:[{
            respLabel: 'When a sound is articulated from the weak sound or weak part of sound until the strong part of time', correction: true
        },{
            respLabel: 'When a sound egin in a strong part of time only', correction: false
        },{
            respLabel: 'When the sound is ending', correction: false
        }]
    },{
        askerLabel: '2ª) So, the Regular syncopation and the irregular syncopation, what better describe the Regular syncopation at the choices bellow',
        respOptions:[{
            respLabel: 'It is formed by notes that have the same duration!', correction: true
        },{
            respLabel: 'It is formed by notes that have the different duration!', correction: false
        }]
    },{
        askerLabel: '3ª) So What better describe the Irregular syncopation at the choices bellow:',
        respOptions:[{
            respLabel: 'It is formed by notes that have the same duration!', correction: false
        },{
            respLabel: 'It is formed by notes that have the different duration!', correction: true
        }]
    },{
        askerLabel: '4ª) Contretemps, what better describe this style of rhythm?',
        respOptions:[{
            respLabel: 'When the notes are executed in weak time or weak part of time, letting the strong notes or strong part of time filled by pauses!', correction: true
        },{
            respLabel: 'When the notes are executed in strong time or strong part of time, letting the weak time or weak part of time filled by pauses!', correction: false
        },{
            respLabel: 'none of the above!', correction: false
        }]
    },{
        askerLabel: '5ª) The music has the irregular contretemp, mark the choice that better describe this irregular contretemp',
        respOptions:[{
            respLabel: '1º: Pause; 2º_3º_4º: Ponctuated Minima', correction: true
        },{
            respLabel: '1ª: Pause; 2º: Semínima; 3º: Pause; 4º: Seminima', correction: false
        },{
            respLabel: '1ª: Seminima; 2º: Pause; 3º: Seminima; 4º: Pause', correction: false
        },{
            respLabel: '1ª: Pause; 2ª_3ª: Minima; 4ª: Pause', correction: false
        }]
    }];
    const Handleresponse = (correction) => {
        if(correction){
            setScore(prevScore => prevScore + 1);
        }
        const nextAsk = status + 1;
        if(nextAsk < questionaryDoze.length){
            setStatus(nextAsk);
        }else{
            setFounded(true);
        }
    }
    return(
        <div style={{textAlign: 'center'}}>
            {founded ? (
                <div className='score-section'>
                    <p>You got it right{score} of {questionaryDoze.length}questions</p>
                </div>
            ):(
                <>
                <motion.div
                initial={{x: 500, scale: 0}}
                animate={{x: 0, scale: 1}}
                transition={{duration: 7}}
                >
                    <div className='question-section'>
                        <fieldset style={{borderColor: 'blue', backgroundColor: 'green'}}><legend>Quizz Phase Twelve</legend>
                        <div className='question-count'>
                            <span>Question{status + 1}</span> / {questionaryDoze.length}
                        </div>
                        <div>
                            {questionaryDoze[status].askerLabel}
                        </div>
                        <div className='question-text'>
                            {questionaryDoze[status].respOptions.map((respOption, index) => (
                                <>
                                    <Divider/>
                                    <Button style={{backgroundColor: 'black', color: 'white', width: '300px'}} key={index} onClick={() =>Handleresponse(respOption.correction)}>{respOption.respLabel}</Button>
                                </>
                            ))}
                        </div>
                        </fieldset>
                    </div>
                </motion.div>
                </>
            )}
        </div>
    )
}