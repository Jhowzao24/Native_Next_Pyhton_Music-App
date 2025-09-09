import React, {useState} from 'react';
import {Divider, Button} from '@mui/material';
import { motion } from 'framer-motion';

export default function QuizzTreze(){
    const [status, setStaus] = useState(0);
    const [founded, setFounded] = useState(false);
    const [score, setScore] = useState(0);
    const questionaryTreze = [{
        askingLabel: '1ª) Initial rhythms; where is located the initial rhythms?',
        respOptions:[{
            respLabel: 'At the begin of the pentagram!', corrected: true
        },{
            respLabel: 'at the end of the pentagram!', corrected: false
        },{
            respLabel: 'At the half of the pentagram!', corrected: false
        }]
    },{
        askingLabel: '2ª) Which of the bellow choices is all initial rhythms',
        respOptions:[{
            respLabel: 'Only Tétic', corrected:false
        },{
            respLabel: 'Only Anacrusic', corrected: false
        },{
            respLabel: 'Tétic, Anacrusic & Acephalus', corrected: true
        },{
            respLabel: 'Only Acephalus', corrected: false
        }]
    },{
        askingLabel: '3ª) Which of the choices bellow is the initial rhythm that indicate that the music begin in a strong time?',
        respOptions:[{
            respLabel: 'Tétic', corrected: true
        },{
            respLabel: 'Anacrusic', corrected: false
        },{
            respLabel: 'Acephalus', corrected: false
        }]

    },{
        askingLabel: '4ª) When the music start with the time Pró-Tetic rhythm, what will be the initial rhythms?',
        respOptions:[{
            respLabel: 'Tétic', corrected: false
        },{
            respLabel: 'Acephalus', corrected: false
        },{
            respLabel: 'Anacrusic', corrected: true
        }]
    },{
        askingLabel: '5ª) When th music start with the time Pós-Tetic, Whatwill be the initial rhythms?',
        respOptions:[{
            respLabel: 'Anacrusic', corrected: false
        },{
            respLabel: 'Tético', corrected: false
        },{
            respLabel: 'acephalus', corrected: false
        }]
    }]
    const Handleresponsing = (corrected) => {
        if(corrected){
            setScore(prevScore => prevScore + 1);
        }
        const nextQuest = status + 1;
        if(nextQuest < questionaryTreze.length){
            setStaus(nextQuest);
        }else{
            setFounded(true);
        }
    }
    return(
        <div style={{textAlign: 'center'}}>
            {founded ? (
                <div className='score-section'>
                    <p>You got it right{score} of {questionaryTreze.length}questions</p>
                </div>
            ):(
                <>
                <motion.div
                initial={{x: -500}}
                animate={{x: 0}}
                transition={{duration: 3}}
                >
                    <div className='question-section'>
                        <fieldset style={{borderColor: 'blue', backgroundColor: 'green', color: 'gold'}}><legend>Quizz Phase Thirteen</legend>
                        <div className='question-count'>
                            <span>Question{status + 1}</span> / {questionaryTreze.length}
                        </div>
                        <div>
                            {questionaryTreze[status].askingLabel}
                        </div>
                        <div className='question-text'>
                            {questionaryTreze[status].respOptions.map((respOption, index) => (
                                <>
                                <motion.div
                                initial={{scale: 0}}
                                animate={{scale: 1}}
                                transition={{duration: 5}}
                                >
                                    <Divider/>
                                    <Button style={{backgroundColor: 'black', color: 'white', width: '300px'}} key={index} onClick={() =>Handleresponsing(respOption.correction)}>{respOption.respLabel}</Button>
                                </motion.div>
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