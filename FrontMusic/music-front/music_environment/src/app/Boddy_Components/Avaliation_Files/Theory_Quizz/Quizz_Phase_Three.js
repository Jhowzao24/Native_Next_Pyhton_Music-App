import { Card, Divider, ButtonBase } from '@mui/material';
import React, {useState} from 'react';
import { motion } from 'framer-motion';

export default function QuizzThreePhase(){
    const [currentStatus, setCurrentStatus] = useState(0);
    const [appearScore, setAppearScore]= useState(false);
    const [score, setScore] = useState(0);
    const questionThree = [{
        askingLabel: 'At the Sol clave, where is the Dó note?',
        answerOptions:[{
            answerLabel: 'The Dó note be one line under the pentagram', correctForm: true
        },{
            answerLabel: 'At the thirth line of the pentagram', correctForm: false
        },{
            answerLabel: 'At the fifth line of the pentagram', correctForm: false
        }]
    },{
        askingLabel: 'At the Fá clave on the fourth line, where isthe Dó note?',
        answerOptions:[{
            answerLabel: 'First line', correctForm: false 
        },{
            answerLabel: 'Second Line', correctForm: false
        },{
            answerLabel: 'First superior line',correctForm: true
        }]
    },{
        askingLabel: 'What is the three types of Reading at the music?', 
        answerOptions:[{
            answerLabel: 'Metric, Solfege, Rhythmic',correctForm: true
        },{
            answerLabel: 'Only Metric and Solfege', correctForm: false
        },{
            answerLabel: 'Only the Solfege and Rhythmic', correctForm: false
        }]
    },{
        askingLabel: 'When we say that a person is sonfejando a note, she is?',
        answerOptions:[{
            answerLabel: 'In silence', correctForm: false
        },{
            answerLabel: 'singing the notes', correctForm: true
        },{
            answerLabel: 'Saying the notes name without singing', correctForm: false
        }]
    },{
        askingLabel: 'When we say that a person is making a rhythmic reading, she is?',
        answerOptions:[{
            answerLabel: 'In silence', correctForm: false
        },{
            answerLabel: 'Singing the notes', correctForm: false
        },{
            answerLabel: 'Saying the TÁ sylab. at the rhythm of the figures!', correctForm: true
        }]
    },{
        askingLabel: 'When we say that a person is making reading with musical notes, he is?',
        answerOptions:[{
            answerLabel: 'Can talk the name of the notes only, not must to solfeje', correctForm: true
        },{
            answerLabel: 'Can to choose to talk the notes name or sonfeging the notes,singing at the height', correctForm: false
        },{
            answerLabel: 'Must ever singing the notes at the height', correctForm: false
        },{
            answerLabel: 'Must be in silence', correctForm: false
        }]
    },{
        askingLabel: 'Taling about the solfeje moviments; We have three types f rhythm, that is 2, 3, 4, so... When you make moviments of the formule 2, how is it made?',
        answerOptions:[{
            answerLabel: '1º Movimento: Center; 2º Moviment: Top', correctForm: true
        },{
            answerLabel: '1º Moviment: Center; 2º Moviment: Left side', correctForm: false
        },{
            answerLabel: '1º Moviment: Left side; 2º Moviment: Center', correctForm: false
        },{
            answerLabel: '1º Moviment: Right side; 2º Moviment: Left side', correctForm: false
        },{
            answerLabel: '1º Moviment: Left side; 2º Moviment Right side', correctForm: false
        }]
    },{
        askingLabel: 'Continuing...; At the formule of 3, what will be the right sequences moviments?',
        answerOptions:[{
            answerLabel: '1º Moviment: Center; 2º Moviment: Right side; 3º Moviment: Top', correctForm: true
        },{
            answerLabel: '1º Moviment: Center; 2º Moviment: Left side; 3º Moviment: Right side', correctForm: false
        },{
            answerLabel: '1º Moviment: Right side; 2º Moviment: Center; 3º Moviment: Left side', correctForm: false
        },{
            answerLabel: '1º Moviment: Left side; 2º Right side; 3º Moviment: Center', correctForm: false
        },{
            answerLabel: '1º Moviment: Top; 2º Moviment: Center; 3º Moviment: Right side', correctForm: false
        }]
    },{
        askingLabel: 'Continuing...; At the formule 4, What will be the right sequences moviments?',
        answerOptions:[{
            answerLabel: '1º Moviment: Center; 2º Moviment: Left side; 3º Moviment: Right side; 4º Moviment: Top', correctForm: true
        },{
            answerLabel: '1º Moviment: Right side; 2º Moviment: Center; 3º Moviment: Left side; 4º Moviment: Top', correctForm: false
        },{
            answerLabel: '1º Moviment: Left side; 2º Moviment: Top; 3º Moviment: Right side; 4º Moviment: Center', correctForm: false
        }]
    },{
        askingLabel: 'About the Rhythmic lenguage, We use to solfege any moviments with the sylab Tá, so, What is the right answer that describe the corret talking on the formule 2; 3; 4?',
        answerOptions:[{
            answerLabel: '2/2: Tá - Tá, 3/3: Tá - Tá - Tá, 4/4: Tá - Tá - Tá - Tá', correctForm: true
        },{
            answerLabel: '2/2: Tá, 3/3: Tá - Tá, 4/4: Tá - Tá - Tá', correctForm: false
        },{
            answerLabel: '2/2: Tá - Tá - Tá, 3/3: Tá - Tá - Tá - Tá, 4/4: Tá - Tá', correctForm: false
        }]
    },{
        askingLabel: 'So the divisor of the rhythmics in the rhythmic lenguage it has the sudivision that is?',
        answerOptions:[{
            answerLabel: 'Tá', correctForm: false
        },{
            answerLabel: 'Tá-ti', correctForm: true
        },{
            answerLabel: 'Tá-fa-ti-fi', correctForm: false
        },{
            answerLabel: 'Tá-Tá-Tá', correctForm: false
        }]
    },{
        askingLabel: 'When the moviment gain speed, ever appears any bisubdivision inthe middle of the times, and, the right choice is:',
        answerOptions:[{
            answerLabel: 'Tá', correctForm: false
        },{
            answerLabel: 'Tá-ti', correctForm: false
        },{
            answerLabel: 'Tá-fa-ti-fi', correctForm: true
        }]
    },{
        askingLabel: 'About the Tercines, what will be the right form to take it on the Rhythmic language?',
        answerOptions:[{
            answerLabel: 'Tá-Tá-Tá(Evertaking the figures with the same value)', correctForm: true
        },{
            answerLabel: 'Tá-ti-ti(with different figures value)', correctForm: false
        },{
            answerLabel: 'Tá, ta-ti, Tá(with different values between thiers)', correctForm: false
        }]
    },{
        askingLabel: 'In the figures values and designers, when you see a white figure like the minimum, you now, this values 2 whole timesand:',
        answerOptions:[{
            answerLabel: 'The Minimumfigure will be described at the rhythmic language like: TÀ_À', correctForm: true
        },{
            answerLabel: '---//---//---//---//---//---//---//---//---//--- like: TÀ_À_À_À', correctForm: false
        },{
            answerLabel: '---//---//---//---//---//---//---//---//---//--- like: TÀ_À_À', correctForm: false
        }]
    },{
        askingLabel: 'When you see the Semiminimum figure ,being the black head note, the rhythmic language will be:',
        answerOptions:[{
            answerLabel: 'when Semiminimum is equal a 1 moviment(Only - TÀ)', correctForm: true
        },{
            answerLabel: 'Or (Tá-ti)', correctForm: false
        }]
    },{
        askingLabel: 'What figure will be the (TÀ-ti) when it is values the semi-tone at the rhythmic language?',
        answerOptions:[{
            answerLabel: 'Quaver', correctform: true
        },{
            answerLabel: 'Semiquaver', correctForm: false
        },{
            answerLabel: 'Demisemiquaver', correctForm: false
        },{
            answerLabel: 'Hemidemisemiquaver', correctForm:false
        }]
    },{
        askingLabel: 'Talking about the other model to make the rhythmic language with the: (Tá-fa-ti-fi), what will be the figure that must to appear?',
        answerOptions:[{
            answerLabel: '4 Semiquaver', correctForm: true
        },{
            answerLabel: '4 Quaver', correctForm: false
        },{
            answerLabel: '4 Minimum', correctForm: false
        },{
            answerLabel: '4 Semiminimum', correctForm: false
        },{
            answerLabel: '4 Whole note', correctForm: false
        },{
            answerLabel: '4 Demisemiquaver', correctForm: false
        }]
    }];
    const ResponsingButton = (correting) => {
        if(correting){
            setScore(prevScore => prevScore + 1);
        }
        const nextAsk = currentStatus + 1;
        if(nextAsk < questionThree.length){
            setCurrentStatus(nextAsk);
        }else{
            setAppearScore(true);
        }
    };
    return(
        <div>
            <Card style={{width: '400px'}}>
                {appearScore ? (
                    <div className='score-section'>
                        <p>You got it right{score} of {questionThree.length}questions</p>
                    </div>
                ):(
                    <>
                    <motion.div
                    initial={{scale: 0}}
                    animate={{scale: 1}}
                    transition={{duration: 3}}
                    >
                    <div className='question-section'>
                        <fieldset style={{borderColor: 'yellow', backgroundColor: 'orangered'}}><legend>Quizz Phase Three</legend>
                        <div className='question-count'>
                            <span>Question{currentStatus + 1}</span> / {questionThree.length}
                        </div>
                        <div>
                            {questionThree[currentStatus].askingLabel}
                        </div>
                        <div className='question-text'>
                            {questionThree[currentStatus].answerOptions.map((answerOption, index) => (
                                <>
                                <motion.div
                                initial={{scale: 0, X: 300}}
                                animate={{scale: 1, x: 0}}
                                transition={{duration: 5}}
                                >
                                    <Divider/>
                                    <ButtonBase style={{backgroundColor: 'gold', color: 'black', width: '300px'}} key={index} onClick={() => ResponsingButton(answerOption.correctForm)}>{answerOption.answerLabel}</ButtonBase>
                                </motion.div>
                                </>
                            ))}
                        </div>
                        </fieldset>
                    </div>
                </motion.div>
                </>
                )}
            </Card>
        </div>
    )
}