import { ButtonBase, Divider } from '@mui/material';
import React, {useState} from 'react';
import { motion } from 'framer-motion';

export default function QuizzTwoPhase(){
    const [statusCurrent, setStatusCurrent] = useState(0);
    const [showNote, setShowNote] = useState(false);
    const [note, setNote] = useState(0);
    const litleQuizz = [{
        questionLabel: 'What is the name of the bigger figure in the table?',
        answerOptions:[{
            answerLabel: 'Whole note', correctIs: true
        },{
            answerLabel: 'Minimum', correctIs: false
        },{
            answerLabel: 'Semiminimum', correctIs: false
        },{
            answerLabel: 'Quaver', correctIs: false
        },{
            answerLabel: 'SemiQuaver', correctIs: false
        },{
            answerLabel: 'Demisemiquaver', correctIs: false
        },{
            answerLabel: 'Hemidemisemiquaver', correctIs: false
        }]
    },{
        questionLabel: 'When, for example, we sum two figures like the colcheia + colcheia, What will be the figure?',
        answerOptions:[{
            answerLabel: 'Whole Note', correctIs: false
        },{
            answerLabel: 'Minimum', correctIs: false
        },{
            answerLabel: 'Semiminimum',correctIs: true
        },{
            answerLabel: 'Quaver', correctIs: false
        }]
    },{
        questionLabel: 'If we sum more than two notes, like: Semicolcheia + Semicolcheia + Semicolcheia + Semicolcheia; So, What figure will be?',
        answerOptions:[{
            answerLabel: 'Semiminimum', correctIs: true
        },{
            answerLabel: 'Quaver', correctIs: false
        },{
            answerLabel: 'SemiQuaver', correctIs: false
        },{
            answerLabel: 'Demisemiquaver', correctIs: false
        }]
    },{
        questionLabel: 'What is the figure that has the value of number 1?',
        answerOptions:[{
            answerLabel: 'Whole Note', correctIs: true
        },{
            answerLabel: 'Minimum', correctIs: false
        },{
            answerLabel: 'Seminimum', correctIs: false
        },{
            answerLabel: 'Quaver', correctIs: false
        }]
    },{
        questionLabel: 'What is the figure that has the value of number 2?',
        answerOptions:[{
            answerLabel: 'Minimum', correctIs: true
        },{
            answerLabel: 'Seminimum', correctIs: false
        },{
            answerLabel: 'Quaver', correctIs: false
        },{
            answerLabel: 'Semiquaver', correctIs: false
        }]
    },{
        questionLabel: 'Returning to the begin of the lesson, lets understand, if i have 2 Semicolcheias + 1 colcheia, what figure will i have?',
        answerOptions:[{
            answerLabel: 'Semiminimum', correctIs: true
        },{
            answerLabel: 'Quaver', correctIs: false
        },{
            answerLabel: 'Minimum', correctIs: false
        },{
            answerLabel: 'Whole Note', correctIs: false
        },{
            answerLabel: 'Hemidemisemiquaver', correctIs: false
        }]
    },{
        questionLabel: 'What will be the simple compasso formule that we have in the rhythm of the music?',
        answerOptions:[{
            answerLabel: '6/8, 9/8, 12/8', correctIs: false
        },{
            answerLabel: '2/4, 3/4, 4/4', correctIs: true
        }]
    },{
        questionLabel: 'About the Compassos Bar, What of this bars is used to divid a simple compasso?',
        answerOptions:[{
            answerLabel: 'Simple Bar', correctIs: true
        },{
            answerLabel: 'Double Bar', correctIs: false
        },{
            answerLabel: 'End Bar', correctIs: false
        }]
    },{
        questionLabel: 'For what the Double bar is used in the pentagram?',
        answerOptions:[{
            answerLabel: 'To divid a Stretch', correctIs: true
        },{
            answerLabel: 'To repeat the music from the begin!', correctIs: false
        },{
            answerLabel: 'To divid the compassos', correctIs: false
        }]
    },{
        questionLabel: 'What is the figure that has the value with the number 4?',
        answerOptions:[{
            answerLabel: 'Quaver', correctIs: false
        },{
            answerLabel: 'Semiquaver', correctIs: false
        },{
            answerLabel: 'Minimum', correctIs: false
        },{
            answerLabel: 'Semiminimum', correctIs: true
        }]
    },{
        questionLabel: 'What will be the figure that has the value with the number 8?',
        answerOptions:[{
            answerLabel: 'Quaver', correctIs: true
        },{
            answerLabel: 'Semiquaver', correctIs: false
        },{
            answerLabel: 'Demisemiquaver', correctIs: false
        }]
    },{
        questionLabel: 'What will be the figure that has the value with the number 16?',
        answerOptions:[{
            answerLabel: 'Quaver', correctIs: false
        },{
            answerLabel: 'Semiquaver', correctIs: true
        },{
            answerLabel: 'Hemidemisemiquaver', correctIs: false
        },{
            answerLabel: 'Demismiquaver', correctIs: false
        }]
    },{
        questionLabel: 'What will be the figure that has the value of: 32?',
        answerOptions:[{
            answerLabel: 'Quaver', correctIs: false
        },{
            answerLabel: 'Semiquaver', correctIs: false
        },{
            answerLabel: 'Demisemiquaver', correctIs: true
        },{
            answerLabel: 'Hemidemisemiquaver', correctIs: false
        }]
    },{
        questionLabel: 'Finishing this whole wuestions, answer this -> : What will be the figure that has the valu of 64?',
        answerOptions:[{
            answerLabel: 'Quaver', correctIs: false
        },{
            answerLabel: 'Semiquaver', correctIs: false
        },{
            answerLabel: 'Hemidemisemiquaver', correctIs: true
        },{
            answerLabel: 'Demisemiquaver', correctIs: false
        }]
    }];
    const ButtonResponse = (isSure) => {
        if(isSure){
            setNote(prevScore => prevScore + 1);
        }
        const nextProgress = statusCurrent + 1;
        if(nextProgress < litleQuizz.length){
            setStatusCurrent(nextProgress);
        }else{
            setShowNote(true);
        }
    };
    return(
        <div className='quizz'>
            {showNote ? (
                <div className='score-section'>
                    <p>You got it right{note} of {litleQuizz.length}questions</p>
                </div>
            ):(
                <>
                <motion.div
                initial={{scale: 0, rotate: -300}}
                animate={{scale: 1, rotate: 0}}
                transition={{duration: 10}}
                >
                    <div className='question-section'>
                        <fieldset style={{borderColor: 'yellow', backgroundColor: 'orangered'}}><legend>Quizz Phase Two</legend>
                        <div className='question-count'>
                            <span>Question{statusCurrent+ 1}</span> / {litleQuizz.length}
                        </div>
                        <div>
                            {litleQuizz[statusCurrent].questionLabel}
                        </div>
                        <div className='question-text'>
                            {litleQuizz[statusCurrent].answerOptions.map((answerOption, index) => (
                                <>
                                    <Divider/>
                                    <ButtonBase style={{backgroundColor: 'gold', color: 'black', width: '300px'}} key={index} onClick={() => ButtonResponse(answerOption.correctIs)}>{answerOption.answerLabel}</ButtonBase>
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