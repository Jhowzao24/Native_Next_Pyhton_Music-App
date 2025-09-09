import React, {useState} from 'react';
import {Divider, ButtonBase} from '@mui/material';
import { motion } from 'framer-motion';

export default function QuizzOnze(){
    const [status, setStatus] = useState(0);
    const [founded, setFounded] = useState(false);
    const [score, setScore] = useState(0);
    const questionEleven = [{
        askLabel: '1ª) Metric accent, at the choices bellow find on where will be the correct metric accent tonic of the word cho-co-la-te?',
        respOptions:[{
            respLabel: 'CHO - co - la - te', respTrue: true
        },{
            respLabel: 'cho - CO - la - te', respTrue: false
        },{
            respLabel: 'cho - co - LA - te', respTrue: false
        },{
            respLabel: 'cho - co - la - TE', respTrue: false
        }]
    },{
        askLabel: '2ª) Where will be the correct metric accent tonic at the choices words bellow?',
        respOptions:[{
            respLabel: 'MÚ - si - ca', respTrue: true
        },{
            respLabel: 'mú - SI - ca', respTrue: false
        },{
            respLabel: 'mú - si - CA', respTrue: false
        }]
    },{
        askLabel: '3ª) Where will be the correct metric accent tonic at the words bellow?',
        respOptions:[{
            respLabel: 'PÁ - tio', respTrue: true
        },{
            respLabel: 'pá - TIO', respTrue: false
        }]
    },{
        askLabel: '4ª) In a compasso 2/2, where will be the metric accent tonic?',
        respOptions:[{
            respLabel: 'First time', respTrue: true
        },{
            respLabel: 'Second time', respTrue: false
        }]
    },{
        askLabel: '5ª) In a compasso 3/3 where will be the metric accent tonic?',
        respOptions:[{
            respLabel: 'First time', respTrue: true
        },{
            respLabel: 'Second time', respTrue: false
        },{
            respLabel: 'Third time', respTrue: false
        }]
    },{
        askLabel: '6ª) In a compasso 4/4 where will be the metric accent tonic?',
        respOptions:[{
            respLabel: 'First time', respTrue: true
        },{
            respLabel: 'Second time', respTrue: false
        },{
            respLabel: 'Third time', respTrue: false
        },{
            respLabel: 'Fourth time', respTrue: false
        }]
    },{
        askLabel: '7ª) As you could see until here, we have the compost compassos, thinking on it, where will be the metric accent tonic in a compasso 6/6?',
        respOptions:[{
            respLabel: 'First time', respTrue: true
        },{
            respLabel: 'Second time', respTrue: false
        },{
            respLabel: 'Third time', respTrue: false
        },{
            respLabel: 'Fourth time', respTrue: false
        },{
            respLabel: 'Fifth time', respTrue: false
        },{
            respLabel: 'Sixth time', respTrue: false
        }]
    },{
        askLabel: '8ª) In a compasso 9/9, where will be the tonic?',
        respOptions:[{
            respLabel: 'First time', respTrue: true
        },{
            respLabel: 'Second time', respTrue: false
        },{
            respLabel: 'Third time', respTrue: false
        },{
            respLabel: 'Fourth time', respTrue: false
        },{
            respLabel: 'Fiveth time', respTrue: false
        },{
            respLabel: 'Sixth time', respTrue: false
        },{
            respLabel: 'Seventh time', respTrue: false
        },{
            respLabel: 'Eighth time', respTrue: false
        },{
            respLabel: 'Nineth time', respTrue: false
        }]
    },{
        askLabel: '9ª) In a compasso 12/12, where will be the tonic?',
        respOptions:[{
            respLabel: 'First time', respTrue: true
        },{
            respLabel: 'Second time', respTrue: false
        },{
            respLabel: 'Third time', respTrue: false
        },{
            respLabel: 'Fourth time', respTrue: false
        },{
            respLabel: 'Fiveth time', respTrue: false
        },{
            respLabel: 'Sixth time', respTrue: false
        },{
            respLabel: 'Seventh time', respTrue: false
        },{
            respLabel: 'Eighth time', respTrue: false
        },{
            respLabel: 'Nineth time', respTrue: false
        },{
            respLabel: 'Tenth time', respTrue: false
        },{
            respLabel: 'Eleventh time', respTrue: false
        },{
            respLabel: 'Twoelventh time', respTrue: false
        }]
    },{
        askLabel: '10ª) In a compasso 4/4 how will be the metric accent?', 
        respOptions:[{
            respLabel: 'Strong - weak - Half strong - weak', respTrue: true
        },{
            respLabel: 'weak - Strong - weak - Half strong', respTrue: false
        },{
            respLabel: 'Haf strong - weak - Strong  - weak', respTrue: false
        },{
            respLabel: 'Strong - Half strong - weak - weak', respTrue: false
        }]
    }];
    const Handleresponsing = (respTrue) => {
        if(respTrue){
            setScore(prevScore => prevScore + 1);
        }
        const proxQuestion = status + 1;
        if(proxQuestion < questionEleven.length){
            setStatus(proxQuestion);
        }else{
            setFounded(true);
        }
    }
    return(
        <div>
            {founded ? (
                    <div className='score-section'>
                        <p>You got it right{score} of {questionEleven.length}questions</p>
                    </div>
                ):(
                    <>
                    <motion.div
                    initial={{scale: 0, rotateX: -300, rotateY: 300}}
                    animate={{scale: 1, rotateX: 0, rotateY: 0}}
                    transition={{duration: 5}}>
                    <div className='question-section'>
                        <fieldset style={{borderColor: 'cyan', backgroundColor: 'blue', color: 'gold'}}><legend style={{backgroundColor: 'white', borderRadius: '10px', color: 'black', fontFamily: 'serif'}}>Quizz Phase Eleven</legend>
                        <div className='question-count'>
                            <span>Question{status + 1}</span> / {questionEleven.length}
                        </div>
                        <div>
                            {questionEleven[status].askLabel}
                        </div>
                        <div className='question-text'>
                            {questionEleven[status].respOptions.map((respOption, index) => (
                                <>
                                <motion.div
                                initial={{scale: 0}}
                                animate={{scale: 1}}
                                transition={{duration: 3}}
                                >
                                    <Divider/>
                                    <ButtonBase style={{backgroundColor: 'black', color: 'Hightlight', width: '300px'}} key={index} onClick={() => Handleresponsing(respOption.respTrue)}>{respOption.respLabel}</ButtonBase>
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