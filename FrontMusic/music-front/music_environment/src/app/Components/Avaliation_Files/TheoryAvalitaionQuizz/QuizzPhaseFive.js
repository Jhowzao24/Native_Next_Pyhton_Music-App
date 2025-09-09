import { ButtonBase, Divider, Card } from '@mui/material';
import React, {useState} from 'react';
import { motion } from 'framer-motion';

export default function QuizzQuinta(){
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [appear, setAppear] = useState(false);
    const questionfive = [{
        askingLabel: '1ª) Tercines, What represent better a tercine below?',
        answerOptions:[{
            answerLabel: '3 Colcheias in a compasso of 4/4', correct: true
        },{
            answerLabel: '4 Colcheias in a compasso of 4/4', correct: false
        },{
            answerLabel: '2 Minimas in a compasso of 6/8', correct: false
        }]
    },{
        askingLabel: '2ª) Fermata, Where is put the fermata on the note?',
        answerOptions:[{
            answerLabel: 'Over', correct: true
        },{
            answerLabel: 'Below', correct: false
        },{
            answerLabel: 'Right side', correct: false
        },{
            answerLabel: 'Left side', correct: false
        }]
    },{
        askingLabel: '3ª) For what is the usefull of the fermata right?',
        answerOptions:[{
            answerLabel: 'To extend the time of the note undetermied', correct: true
        },{
            answerLabel: 'To stop the condition of the music', correct: false
        },{
            answerLabel: 'To divider a stretch of the music', correct: false
        },{
            answerLabel: 'To change the formule of compasso in the middle of the music', correct: false 
        }]
    },{
        askingLabel: '4ª) About the alternative moviments to solfege the compost compasso in 6, 9 or 12, what will be the right moviment orientation?',
        answerOptions:[{
            answerLabel: 'Center -> Right -> Top', correct: true
        },{
             answerLabel: 'Center -> Left -> Top', correct: false
        },{
            answerLabel: 'Right -> Center -> Left', correct: false
        },{
            answerLabel: 'Top -> Center -> Right', correct: false
        },{
            answerLabel: 'Left -> Top -> Center', corect: false
        },{
            answerLabel: 'Top -> Left -> Right', cnrrect: false
        }]
    }];
    const HandleOptionsClick = (correct) => {
        if(correct){
            setScore(prevScore => prevScore + 1);
        }
        const nextAskingOpt = currentQuestion + 1;
        if(nextAskingOpt < questionfive.lenght){
            setCurrentQuestion(nextAskingOpt);
        }else{
            setAppear(true);
        }
    };
    return(
        <div>
            <Card style={{width: '400px', ackgroundColor: 'dodgerblue'}}>
                {appear ? (
                    <div className='score-section'>
                        <p>You got it right{score} of {questionfive.length}questions</p>
                    </div>
                ):(
                    <>
                    <div className='question-section'>
                        <fieldset style={{borderColor: 'yellow', backgroundColor: 'orangered'}}><legend>Quizz Phase Five</legend>
                        <div className='question-count'>
                            <span>Question{currentQuestion + 1}</span> / {questionfive.length}
                        </div>
                        <div>
                            {questionfive[currentQuestion].askingLabel}
                        </div>
                        <div className='question-text'>
                            <motion.div
                            initial={{x: 350}}
                            animate={{x: 3}}
                            transition={{duration: 3}}>
                            {questionfive[currentQuestion].answerOptions.map((answerOption, index) => (
                                <>
                                    <Divider/>
                                    <ButtonBase style={{backgroundColor: 'gold', color: 'black', width: '300px'}} key={index} onClick={() => HandleOptionsClick(answerOption.correct)}>{answerOption.answerLabel}</ButtonBase>
                                </>
                            ))}
                            </motion.div>
                        </div>
                        </fieldset>
                    </div>
                </>
                )}
            </Card>
        </div>
    )
}