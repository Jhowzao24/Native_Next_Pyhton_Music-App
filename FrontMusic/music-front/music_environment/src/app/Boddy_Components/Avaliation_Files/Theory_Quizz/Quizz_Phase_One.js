import { ButtonBase, Divider } from '@mui/material';
import React, {useState} from 'react';
import { motion } from 'framer-motion';

export default function QuizzOneTime(){
    const [resultsPass, setResultsPass] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [nota, setNota] = useState(0);
    const questions = [{
        questionText: 'What is the Music?',
        responsesOptions:[{
            answerText: 'Is the art of the sound', isOrNotCorrect: true
        },{
            answerText: 'Is the Raw material of music', isOrNotCorrect: false
        },{
            answerText: 'Is all we hear', isOrNotCorrect: false
        }]
    },{
        questionText: 'What is the Sound?',
        responsesOptions:[{
            answerText: 'Is the Raw material of music', isOrNotCorrect: false
        },{
            answerText: 'Is the art of the sound', isOrNotCorrect: false
        },{
            answerText: 'Is all we hear', isOrNotCorrect: true
        }]
    },{
        questionText: 'What is the two species of sound?',
        responsesOptions:[{
            answerText: 'Musical Sounds', isOrNotCorrect: false
        },{
            answerText: 'Not musical sounds', isOrNotCorrect: false
        },{
            answerText: 'Only Natural sounds', isOrNotCorrect: false
        },{
            answerText: 'Only Producted sounds', isOrNotCorrect: false
        },{
            answerText: 'Natural and Producted sounds!!', isOrNotCorrect: true
        }]
    },{
        questionText: 'What is the three elements of the music?',
        responsesOptions:[{
            answerText: 'Timbre, Duration, Intensity', isOrNotCorrect: false
        },{
            answerText: 'Melody, Harmony and Rhythm', isOrNotCorrect: true
        }]
    },{
        questionText: 'What is the four properties of sound?',
        responsesOptions:[{
            answerText: 'Melody, Harmony, Duration and Height', isOrNotCorrect: false
        },{
            answerText: 'Duration, Melody, Harmony and Intensity', isOrNotCorrect: false
        },{
            answerText: 'Timbre, Duration, Height and Intensity', isOrNotCorrect: true
        }]
    },{
        questionText: 'What is the sequence of the primary natural scale',
        responsesOptions:[{
            answerText: 'Sol, Lá, Mi, Ré, Si, Dó, Fá', isOrNotCorrect: false
        },{
            answerText: 'Si, Fá, Lá, Mi, Ré, Dó, Sol', isOrNotCorrect: false
        },{
            answerText: 'Dó, Re, Mi, Fá, Sol, Lá, Si', isOrNotCorrect: true
        }]
    },{
        questionText: 'What claves the pentagram can to support?',
        responsesOptions:[{
            answerText: 'Sol, Fá, Si', isOrNotCorrect: false
        },{
            answerText: 'Fá, Ré, Sol', isOrNotCorrect: false
        },{
            answerText: 'Sol, Fá, Dó', isOrNotCorrect: true
        }]
    }];
    const AnswersButton = (isCorrect) => {
        if(isCorrect){
            setNota(prevScore => prevScore + 1);
        }
        const nextQuestion = resultsPass + 1;
        if(nextQuestion < questions.length){
            setResultsPass(nextQuestion);
        }else{
            setShowScore(true);
        }
    };
    return(
        <div className='quizz'>
            {showScore ? (
                <div style={{backgroundColor: 'white',color: 'midnightblue'}} className='score-section'>
                    <p>You got it right{nota} of {questions.length}questions</p>
                    
                </div>
            ):(
                <>
                <motion.div
                initial={{x: 550}}
                animate={{x: 5}}
                transition={{duration: 10}}
                >
                    <div className='question-section'>
                        <div className='question-count'>
                            <span>Question{resultsPass + 1}</span> / {questions.length}
                        </div>
                    </div>
                    <div>
                        {questions[resultsPass].questionText}
                    </div>
                    <div className='question-text'>
                        {questions[resultsPass].responsesOptions.map((responsesOption, index) => (
                            <>
                            <motion.div
                            initial={{scale: 0, rotateX: 150, rotateY: -150, rotateZ: 50}}
                            animate={{scale: 1, rotateX: 0, rotateY: 0, rotateZ: 0}}
                            transition={{duration: 15}}
                            >
                                <Divider/><ButtonBase style={{backgroundColor: 'cyan', color: 'black', width: '200px'}} key={index} onClick={() => AnswersButton(responsesOption.isOrNotCorrect)}><br/>{responsesOption.answerText}</ButtonBase>
                            </motion.div>
                            </>
                        ))}
                    </div>
                </motion.div>
                </>
            )}
        </div>
    )
}