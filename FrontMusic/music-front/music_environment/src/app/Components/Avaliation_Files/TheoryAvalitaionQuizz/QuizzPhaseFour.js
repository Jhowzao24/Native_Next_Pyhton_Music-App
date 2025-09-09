import React, {useState} from 'react';
import {Card, Divider, ButtonBase} from '@mui/material';
import { motion } from 'framer-motion';

export default function QuizzQuarta(){
    const [currentStatus, setCurrentStatus] = useState(0);
    const [appearScore, setAppearScore]= useState(false);
    const [score, setScore] = useState(0);
    const questionFour = [{
        askingLabel: '1º Ligature! Which one of this ligature will link 2 notes of the same height?',
        answerOptions:[{
            answerLabel: 'Value Ligature', respCorct: true
        },{
            answerLabel: 'Carrier Ligature', respCorct: false
        },{
            answerLabel: 'Phrasing Ligation', respCorct: false
        }]
    },{
        askingLabel: '2º Increasing Point: How much time, can the increasing point to increase?',
        answerOptions:[{
            answerLabel: 'Half of the first figure', respCorct: true
        },{
            answerLabel: 'A figure with the same value of the first figure', respCorct: false
        },{
            answerLabel: 'One Quart of the last figure', respCorct: false
        }]
    },{
        askingLabel: '3º Interval: What better describe the Interval?',
        answerOptions:[{
            answerLabel: 'It is the distance between two sounds', respCorct: true
        },{
            answerLabel: 'It is the space between no sounds', respCorct: false
        },{
            answerLabel: 'It is the distance of two systems music', respCorct: false
        }]
    },{
        askingLabel: '4º Still talking about the interval: Select the option that is a Interval of 3ª:',
        answerOptions:[{
            answerLabel: 'DÒ - MI', respCorct: true
        },{
            answerLabel: 'DÒ - FÀ', respCorct: false
        },{
            answerLabel: 'RÈ - LÀ', respCorct: false
        },{
            answerLabel: 'MI - FÀ', respCorct: false
        },{
            answerLabel: 'MI - RÈ', respCorct: false
        }]
    },{
        askingLabel: '5º Select the Interval of 4ª:',
        answerOptions:[{
            answerLabel: 'DÒ - FÀ', respCorct: true
        },{
            answerLabel: 'DÒ - MI', respCorct: false
        },{
            answerLabel: 'RÈ - MI', respCorct: false
        },{
            answerLabel: 'MI - SI', respCorct: false
        }]
    },{
        askingLabel: '6ª) Select the Interval of 6ª:',
        answerOptions:[{
            answerLabel: 'DÒ - LÀ', respCorct: true
        },{
            answerLabel: 'RÈ - Fà', respCorct: false
        },{
            answerLabel: 'MI - LÁ', respCorct: false
        },{
            answerLabel: 'FÁ - MI', respCorct: false
        }]
    },{
        askingLabel: '7ª) Select the Interval of 7ª:',
        answerOptions:[{
            answerLabel: 'FÁ - MI', respCorct: true
        },{
            answerLabel: 'FÁ - RÈ', respCorct: false
        },{
            answerLabel: 'MI - LÁ', respCorct: false
        },{
            answerLabel: 'LÁ - MI', respCorct: false
        }]
    },{
        askingLabel: '8ª) Select the Interval of 5ª:',
        answerOptions:[{
            answerLabel: 'DÓ - MI', respCorct: false
        },{
            answerLabel: 'MI - LÁ', respCorct: false
        },{
            answerLabel: 'LÁ - MI', respCorct: true
        },{
            answerLabel: 'MI - DÒ', respCorct: false
        }]
    },{
        askingLabel: '9º) Select the interval of 2ª:',
        answerOptions:[{
            answerLabel: 'FÁ - SOL', respCorct: true
        },{
            answerLabel: 'SOL - DÒ', respCorct: false
        },{
            answerLabel: 'FÁ - DÓ', respCorct: false
        },{
            answerLabel: 'RÉ - RÉ', respCorct: false
        }]
    },{
        askingLabel: '10ª) Select the interval of 8ª:',
        answerOptions:[{
            answerLabel: 'DÓ - MI', respCorct: false
        },{
            answerLabel: 'MI - MI', respCorct: true
        },{
            answerLabel: 'FÁ - DÓ', respCorct: false
        },{
            answerLabel: 'RÉ - LÀ', respCorct: false
        }]
    },{
        askingLabel: '11ª) If we have only three notes, What will e the Compasso Formule?',
        answerOptions:[{
            answerLabel: '2/2', respCorct: false
        },{
            answerLabel: '3/3', respCorct: true
        },{
            answerLabel: '4/4', respCorct: false
        }]
    },{
        askingLabel: '12ª) What will be the Compasso with this figures: 3 Minimes:',
        answerOptions:[{
            answerLabel: '3/2', respCorct: true
        },{
            answerLabel: '3/4', respCorct: false
        },{
            answerLabel: '3/8', respCorct: false
        },{
            answerLabel: '3/16', respCorct: false
        }]
    },{
        askingLabel: '13ª) Continuing: With 3 Seminimes',
        answerOptions:[{
            answerLabel: '3/8', respCorct: false
        },{
            answerLabel: '3/4', respCorct: true
        },{
            answerLabel: '3/2', respCorct: false
        },{
            answerLabel: '3/16', respCorct: false
        }]
    },{
        askingLabel: '14ª) With 3 Quaver:',
        answerOptions:[{
            answerLabel: '3/2', respCorct: false
        },{
            answerLabel: '3/8', respCorct: true
        },{
            answerLabel: '3/4', respCorct: false
        }]
    },{
        askingLabel: '15ª) With 3 Semiquaver:',
        answerOptions:[{
            answerLabel: '3/16', respCorct: true
        },{
            answerLabel: '3/2', respCorct: false 
        },{
            answerLabel: '3/8', respCorct: false 
        }]
    },{
        askingLabel: '16ª) The moviment in 2, What will be the Compasso?',
        answerOptions:[{
            answerLabel: '2/2', respCorct: true
        },{
            answerLabel: '3/3', respCorct: false 
        },{
            answerLabel: '4/4', respCorct: false
        }]
    }];
    const QUIZZResp = (CorrectQuizz) => {
        if(CorrectQuizz){
            setScore(prevScore => prevScore + 1);
        };
        const nextQuest = currentStatus + 1;
        if(nextQuest < questionFour.length){
            setCurrentStatus(nextQuest);
        }else{
            setAppearScore(true);
        }
    }
    return(
        <div>
            <motion.div
            initial={{x: 350}}
            animate={{x: 3}}
            transition={{duration: 5}}
            >
            <Card style={{width: '400px'}}>
                {appearScore ? (
                    <div className='score-section'>
                        <p>You got it right{score} of {questionFour.length}questions</p>
                    </div>
                ):(
                    <>
                    <motion.div
                    initial={{scale: 0}}
                    animate={{scale: 1}}
                    transition={{suration: 3}}>
                    <div className='question-section'>
                        <fieldset style={{borderColor: 'yellow', backgroundColor: 'orangered'}}><legend>Quizz Phase Four</legend>
                        <div className='question-count'>
                            <span>Question{currentStatus + 1}</span> / {questionFour.length}
                        </div>
                        <div>
                            {questionFour[currentStatus].askingLabel}
                        </div>
                        <div className='question-text'>
                            {questionFour[currentStatus].answerOptions.map((answerOption, index) => (
                                <>
                                    <Divider/>
                                    <ButtonBase style={{backgroundColor: 'gold', color: 'black', width: '300px'}} key={index} onClick={() => QUIZZResp(answerOption.respCorct)}>{answerOption.answerLabel}</ButtonBase>
                                </>
                            ))}
                        </div>
                        </fieldset>
                    </div>
                    </motion.div>
                </>
                )}
            </Card>
            </motion.div>
        </div>
    )
}