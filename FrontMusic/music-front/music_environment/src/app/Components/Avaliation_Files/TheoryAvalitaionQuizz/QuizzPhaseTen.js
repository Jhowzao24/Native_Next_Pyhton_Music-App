import React, {useState} from 'react';
import {Divider, ButtonBase} from '@mui/material';
import { motion } from 'framer-motion';

export default function QuizzDez(){
    const [status, setStatus] = useState(0);
    const [found, setFound] = useState(false);
    const [score, setScore] = useState(0);
    const questionDez = [{
        askingLabel: '1ª) Dinamic; What do you choice about that is dinamic for you?',
        respOptions:[{
            respLabel: 'variation of sound intensity by gradual way!', FoT: true
        },{
            respLabel: 'Variation of time to extend the whole sounds!', FoT: false
        },{
            respLabel: 'None of the above!', FoT: false
        }]
    },{
        askingLabel: '2ª) So we have some variations of dinamic that is?',
        respOptions:[{
            respLabel: 'ppp/pp/p/mp/mf/f/ff/fff', FoT: true
        },{
            respLabel: 'pp/p/mp/mf/f/ff/fff', FoT: false
        },{
            respLabel: 'pp/mp/mf/ff/fff', FoT: false
        },{
            respLabel: 'ppp/mp/mf/f/ff/fff', FoT: false
        },{
            respLabel: 'p/mf/f', FoT: false
        }]
    },{
        askingLabel: '3ª) Which of the choices bellow will be the dinamic that is Extremelly Strong',
        respOptions:[{
            respLabel: 'fff', FoT: true
        },{
            respLabel: 'ppp', FoT: false
        },{
            respLabel: 'pp', FoT: false
        },{
            respLabel: 'p', FoT: false
        },{
            respLabel: 'm-p', FoT: false
        },{
            respLabel: 'mf', FoT: false
        }]
    },{
        askingLabel: '4ª) Which of the choices will be the Pianissimo',
        respOptions:[{
            respLabel: 'ppp', FoT: true
        },{
            respLabel: 'pp', FoT: false
        },{
            respLabel: 'p', FoT: false
        },{
            respLabel: 'fff', FoT: false
        }]
    },{
        askingLabel: '5ª) which of the choices bellow will be the very Strong',
        respOptions:[{
            respLabel: 'ff', FoT: true
        },{
            respLabel: 'f', FoT: false
        },{
            respLabel: 'mf', FoT: false
        }]
    },{
        askingLabel: '6ª) Which of the choices bellow will be the Strong?',
        respOptions:[{
            respLabel: 'fff', FoT: false
        },{
            respLabel: 'ff', FoT: false
        },{
            respLabel: 'ppp', FoT: false
        },{
            respLabel: 'f', FoT: true
        }]
    },{
        askingLabel: '7ª) Which of the choices bellow will be the ling of strong?',
        respOptions:[{
            respLabel: 'pp', FoT: false
        },{
            respLabel: 'ppp', FoT: false
        },{
            respLabel: 'mf', FoT: true
        }]
    },{
        askingLabel: '8ª) Which of the choices bellow will be the half piano?',
        respOptions:[{
            respLabel: 'p', FoT: false
        },{
            respLabel: 'm-p', FoT: true
        },{
            respLabel: 'ppp', FoT: false
        }]
    }];
    const Handleresponsing = (FoT) => {
        if(FoT){
            setScore(prevScore => prevScore + 1);
        }
        const proxQuest = status + 1;
        if(proxQuest < questionDez.length){
            setStatus(proxQuest);
        }else{
            setFound(true);
        }
    }
    return(
        <div>
            {found ? (
                <div className='score-section'>
                    <p>You got it right{score} of {questionDez.length}questions</p>
                </div>
            ):(
                <>
                <motion.div
                initial={{rotate: -180, scale: 0, x: 200}}
                animate={{rotate: 0, scale: 1, x: 5}}
                transition={{duration: 5}}
                >
                    <div className='question-section'>
                        <fieldset style={{borderColor: 'blue', backgroundColor: 'dodgerblue'}}><legend>Quizz Phase Ten</legend>
                        <div className='question-count'>
                            <span>Question{status + 1}</span> / {questionDez.length}
                        </div>
                        <div>
                            {questionDez[status].askingLabel}
                        </div>
                        <div className='question-text'>
                            {questionDez[status].respOptions.map((respOption, index) => (
                                <>
                                    <Divider/>
                                    <ButtonBase style={{backgroundColor: 'black', color: 'white', width: '300px'}} key={index} onClick={() =>Handleresponsing(respOption.FoT)}>{respOption.respLabel}</ButtonBase>
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