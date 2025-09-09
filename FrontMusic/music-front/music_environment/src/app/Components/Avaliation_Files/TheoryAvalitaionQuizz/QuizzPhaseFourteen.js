import React, {useState} from 'react';
import {Divider, Button} from '@mui/material';
import { motion } from 'framer-motion';

export default function QuizzCatorze(){
    const [status, setStatus] = useState(0);
    const [founded, setFounded] = useState(false);
    const [score, setScore] = useState(0);
    const questionFourteen = [{
        askTitle: '1ª) For what is used the increassing point?',
        answerOptions:[{
            answerLabel: 'Increase half the time of the last figure!', corret: true
        },{
            answerLabel: 'Increase more one time to the last figure!', corret: false
        },{
            answerLabel: 'Get the half time of the last figure out', corret: false
        }]
    },{
        askTitle: '2ª) In a figure that has a value like 1: Seminima, So this figure with a increase point, how will be the answer bellow?',
        answerOptions:[{
            answerLabel: 'Seminima + Colcheia', corret: true 
        },{
            answerLabel: 'Seminima + Seminima', corret: false
        },{
            answerLabel: 'Seminima + Minima', corret: false
        },{
            answerLabel: 'Seminima + Semicolcheia', corret: false
        }]
    },{
        askTitle: '3ª) If a increase point goes puted front of the Colcheia, what will be the correct answer?',
        answerOptions:[{
            answerLabel: 'Colcheia + Colcheia', corret: false
        },{
            answerLabel: 'Colcheia + Semicolcheia', corret: true
        },{
            answerLabel: 'Colcheia + Seminima', corret: false
        },{
            answerLabel: 'Colcheia + Minima', corret: false
        }]
    },{
        askTitle: '4ª) In front of a Minima, what will be the correct answer?',
        answerOptions:[{
            answerLabel: 'Minima + Colcheia', corret: false
        },{
            answerLabel: 'Minima + Semicolcheia', corret: false
        },{
            answerLabel: 'Minima + Seminima', corret: true
        },{
            answerLabel: 'Minima + Semibreve', corret: false
        }]
    },{
        askTitle: '5ª) In front of a Semicolcheia, what will be the result?',
        answerOptions:[{
            answerLabel: 'Colcheia + Minima', corret: false
        },{
            answerLabel: 'Semicolcheia + Fusa', corret: true
        },{
            answerLabel: 'Seminima + Colcheia', corret: false
        }]
    },{
        askTitle: '6ª) Summing a Minima + Seminima, What figure is?',
        answerOptions:[{
            answerLabel: 'Minima ponctuated', corret: true
        },{
            answerLabel: 'Seminima ponctuated', corret: false
        },{
            answerLabel: 'Colcheia ponctuated', corret: false
        }]
    },{
        askTitle: '7ª) How much time will have a ponctuated Minima?',
        answerOptions:[{
            answerLabel: '3 integer beats', corret: true
        },{
            answerLabel: '2 integer beats', corret: false
        },{
            answerLabel: '4 integer beats', corret: false
        },{
            answerLabel: '6 integer beats', corret: false
        }]
    },{
        askTitle: '8ª) How much time will have a ponctuated Seminima?',
        answerOptions:[{
            answerLabel: '1.5 integer beat', corret: true
        },{
            answerLabel: '2 integer beats', corret: false
        },{
            answerLabel: '3 integer beats', corret: false
        }]
    },{
        askTitle: '9ª) How many time will have a ponctuated Colcheia?',
        answerOptions:[{
            answerLabel: '1,8 integer time', corret: true
        },{
            answerLabel: '2 integer beats', corret: false
        },{
            answerLabel: '4 integer beats', corret: false
        },{
            answerLabel: '1 integer beat', corret: false
        }]
    },{
        askTitle: '10ª) How many time will have a ponctuated Semibreve?',
        answerOptions:[{
            answerLabel: '1,5 integer beat', corret: true
        },{
            answerLabel: '2 integer beats', corret: false
        },{
            answerLabel: '1 integer beats', corret: false
        },{
            answerLabel: '1,8 integer beat',corret: false
        },{
            answerLabel: '1,2 integer beat', corret: false
        }]
    }]
    const questionaryKtorze = (corret) => {
        if(corret){
            setScore(prevScore => prevScore + 1);
        }
        const nextAsk = status + 1;
        if(nextAsk < questionFourteen.length){
            setStatus(nextAsk);
        }else{
            setFounded(true);
        }
    }
    return(
        <div style={{textAlign: 'center'}}>
            {founded ? (
                <div className='score-section'>
                    <p>You got it right{score} of {questionFourteen.length}questions</p>
                </div>
            ):(
                <>
                <motion.div
                initial={{x: 180}}
                animate={{x: 5}}
                transition={{duration: 7}}
                >
                    <div className='question-section'>
                        <fieldset style={{borderColor: 'blue', backgroundColor: 'green'}}><legend>Quizz Phase Fourteen</legend>
                        <div className='question-count'>
                            <span>Question{status + 1}</span> / {questionFourteen.length}
                        </div>
                        <div>
                            {questionFourteen[status].askTitle}
                        </div>
                        <div className='question-text'>
                            {questionFourteen[status].answerOptions.map((answerOption, index) => (
                                <>
                                <motion.div
                                initial={{scale: 0}}
                                animate={{scale: 1}}
                                transition={{duration: 3}}>
                                    <Divider/>
                                    <Button style={{backgroundColor: 'black', color: 'white', width: '300px'}} key={index} onClick={() => questionaryKtorze(answerOption.corret)}>{answerOption.answerLabel}</Button>
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