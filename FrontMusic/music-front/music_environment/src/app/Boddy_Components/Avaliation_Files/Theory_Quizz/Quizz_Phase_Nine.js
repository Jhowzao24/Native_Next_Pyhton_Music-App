import React, {useState} from 'react';
import {Divider, ButtonBase} from '@mui/material';
import { motion } from 'framer-motion';

export default function QuizzNono(){
    const [status, setStatus] = useState(0);
    const [founding, setFounding] = useState(false);
    const [score, setScore] = useState(0);
    const questionaryNine = [{
        askLabel: '1ª) What better describe a Compassos bar?',
        respOptions:[{
            respLabel: 'It is a bar to divid the compassos into theirs', true_False: true
        },{
            respLabel: 'It is used to divid a stretch!', true_False: false
        },{
            respLabel: 'It is use to end the music!', true_False: false
        },{
            respLabel: 'It is used to make the music returning!', true_False: false
        }]
    },{
        askLabel: '2ª) The music has an abar that make the repeat the whole music! What is this bar?',
        respOptions:[{
            respLabel: 'Ritornello bar', true_False: true
        },{
            respLabel: 'Double bar', true_False: false
        },{
            respLabel: 'Final bar', true_False: false
        }]
    },{
        askLabel: '3ª) What bar is used to divid a stretch?',
        respOptions:[{
            respLabel: 'Final bar', true_False: false
        },{
            respLabel: 'Double bar', true_False: true
        },{
            respLabel: 'Simple bar', true_False: false
        }]
    },{
        askLabel: '4ª) What of the next choices will be the bar that make a riturn with any limited value?',
        respOptions:[{
            respLabel: 'Ritornellos Home!', true_False: true
        },{
            respLabel: 'Ritornello bar', true_False: false
        },{
            respLabel: 'Simple bar', true_False: false
        }]
    }];
    const HandleResponsing = (true_False) => {
        if(true_False){
            setScore(prevScore => prevScore + 1);
        }
        const sequencyQuest = status + 1;
        if(sequencyQuest < questionaryNine.length){
            setStatus(sequencyQuest);
        }else{
            setFounding(true);
        }
    }
    return(
        <div style={{textAlign: 'center'}}>
            {founding ? (
                <div className='score-section'>
                    <p>You got it right{score} of {questionaryNine.length}questions</p>
                </div>
            ):(
                <>
                <motion.div
                initial={{rotate: -330}}
                animate={{rotate: 0}}
                transition={{duration: 3}}
                >
                <div className='question-section'>
                    <fieldset style={{borderColor: 'blue', backgroundColor: 'dodgerblue'}}><legend>Quizz Phase Nine</legend>
                    <div className='question-count'>
                        <span>Question{status + 1}</span> / {questionaryNine.length}
                    </div>
                    <div>
                        {questionaryNine[status].askLabel}
                    </div>
                    <div className='question-text'>
                        {questionaryNine[status].respOptions.map((respOption, index) => (
                            <>
                            <motion.div
                            initial={{scale: 0}}
                            animate={{scale: 1}}
                            transition={{duration: 3}}
                            >
                                <Divider/>
                                <ButtonBase style={{backgroundColor: 'black', color: 'white', width: '300px'}} key={index} onClick={() =>HandleResponsing(respOption.true_False)}>{respOption.respLabel}</ButtonBase>
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