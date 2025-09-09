import React, {useState} from 'react';
import {Divider, ButtonBase} from '@mui/material';
import { motion } from 'framer-motion';

export default function QuizzOito(){
    const [status, setStatus] = useState(0);
    const [founded, setFounded] =useState(false);
    const [score, setScore] = useState(0);
    const questionEight = [{
        quesLabel: '1ª) Tonality! What is a tonality?',
        respOptions:[{
            respLabel: 'Tonality is an atribut of the notes!', right: false
        },{
            respLabel: 'Tonality is an note!', right: false
        },{
            respLabel: 'Tonality is an Element of the music!', right: false
        },{
            respLabel: 'Tonality is the organization of the musical composition, in a relation to the principal note of the scale(1ª Tonic)', right: true
        }]
    },{
        quesLabel: '2ª) Why ever the last note of the music is the Tonic of the music scale?',
        respOptions:[{
            respLabel: 'Considering that the music has ended!', right: true
        },{
            respLabel: 'To cognize that the music will start!', right: false
        },{
            respLabel: 'To make the rhythm!', right: false
        },{
            respLabel: 'To fixall the errors around the rhythmics time', right: false
        }]
    },{
        quesLabel: '3ª) The tonality can be Major or Minor?',
        respOptions:[{
            respLabel: 'The tonality can to be Major and Minor too', right: true
        },{
            respLabel: 'the tonality can to be Only Major', right: false
        },{
            respLabel: 'The tonality can to be Only Minor', right: false
        },{
            respLabel: 'the tonality is none of the above responses', right: false
        }]
    },{
        quesLabel: '4ª) So, the Tonality has a conjunt of accidents and notes, But the succession notes must to be playied in a successsion form ever?',
        respOptions:[{
            respLabel: 'Yes', right: false
        },{
            respLabel: 'Not', right: true
        }]
    },{
        quesLabel: '5ª) What clave the strings instruments use to play in a pentagram?',
        respOptions:[{
            respLabel: 'Sol Clave', right: true
        },{
            respLabel: 'FÁ Clave', right: false
        },{
            respLabel: 'DÓ Clave', right: false 
        },{
            respLabel: 'All of the above', right: true
        }]
    },{
        quesLabel: '6ª) In what scale does have 0 accidents?',
        respOptions:[{
            respLabel: 'DÓ Major', right: true
        },{
            respLabel: 'LÁ Major', right: false
        },{
            respLabel: 'RÉ Major', right: false
        },{
            respLabel: 'MI Major', right: false
        }]
    },{
        quesLabel: '7ª) In a scale with 1 bemol, what will be tonality?',
        respOptions:[{
            respLabel: 'FÁ b Major', right: true
        },{
            respLabel: 'MI b Major', right: false
        },{
            respLabel: 'RÉ b Major', rght: false
        },{
            respLabel: 'SI b Major', right: false
        }]
    },{
        quesLabel: '8ª) In a scale with 2 bemol, what will be tonality?',
        respOptions:[{
            respLabel: 'DÓ b Major', right: false
        },{
            respLabel: 'RÉ b Major', right: false
        },{
            respLabel: 'MI b Major', right: false
        },{
            respLabel: 'SI b Major', right: true
        }]
    },{
        quesLabel: '9ª) In a scale with 3 bemol, What will be the tonality?',
        respOptions:[{
            respLabel: 'MI b Major', right: true
        },{
            respLabel: 'LÁ b Major', right: false
        },{
            respLabel: 'FÁ Major', right: false
        },{
            respLabel: 'SI b Major', right: false
        }]
    },{
        quesLabel: '10ª) In a scale with 4 bemol, What will be the tonality?',
        respOptions:[{
            respLabel: 'SOL b Major', right: true
        },{
            respLabel: 'LÁ b Major', right: false
        },{
            respLabel: 'DÓ b Major', right: false
        },{
            respLabel: 'RÉ b Major', right: false
        }]
    },{
        quesLabel: '11ª) In a scale with 5 bemol, What will be the tonality?',
        respOptions:[{
            respLabel: 'RÉ b Major', right: true
        },{
            respLabel: 'LÁ b Major', right: false
        },{
            respLabel: 'MI b Major', right: false
        }]
    },{
        quesLabel: '12ª) In a scale with 6 bemol, What will be the tonality?',
        respOptions:[{
            respLabel: 'SI b Major', right: false
        },{
            respLabel: 'LÁ b Major', right: false
        },{
            respLabel: 'SOL b Major', right: true
        }]
    },{
        quesLabel: '13ª) In a scale with 7 bemol, What will be the tonality?',
        respOptions:[{
            respLabel: 'DÓ b Major', right: true
        },{
            respLabel: 'SI b Major', right: false
        },{
            respLabel: 'MI b Major', right: false
        }]
    },{
        quesLabel: '14ª) In a scale with 1 sustenido #, What will be tonality?',
        respOptions:[{
            respLabel: 'SOL Major', right: true
        },{
            respLabel: 'RÉ Major', right: false
        },{
            respLabel: 'LÁ Major', right: false
        },{
            respLabel: 'MI Major', right: false
        }]
    },{
        quesLabel: '15ª) In a scale with 2 sustenidos #, What will be the tonality?',
        respOptions:[{
            respLabel: 'LÁ Major', right: false
        },{
            respLabel: 'RÉ Major', right: true
        },{
            respLabel: 'SOL Major', right: false
        },{
            respLabel: 'DÓ Major', right: false
        }]
    },{
        quesLabel: '16ª) In a scale with 3 sustenidos #, What will be the tonality?',
        respOptions:[{
            respLabel: 'Ré Major', right: false
        },{
            respLabel: 'LÁ Major', right: true
        },{
            respLabel: 'SOL Major', right: false
        }]
    },{
        quesLabel: '17ª) In a scale with 4 sustenidos #, What will be the tonality?', 
        respOptions:[{
            respLabel: 'MI Major', right: true
        },{
            respLabel: 'SOL Major', right: false
        },{
            respLabel: 'DÓ# Major', right: false
        },{
            respLabel: 'FÁ# Major', right: false
        }]
    },{
        quesLabel: '18ª) In a scale with 5 sustenidos #, What will e the tonality?', 
        respOptions:[{
            respLabel: 'SI Major', right: true
        },{
            respLabel: 'DÓ Major', right: false
        },{
            respLabel: 'FÁ Major', right: false
        },{
            respLabel: 'LÁ Major', right: false
        }]
    },{
        quesLabel: '19ª) In a scale with 6 sustenidos #, What will be the tonality?',
        respOptions:[{
            respLabel: 'FÁ Major', right: true
        },{
            respLabel: 'SOL Major', right: false
        },{
            respLabel: 'LÁ Major', right: false
        },{
            respLabel: 'MI Major', right: false
        }]
    },{
        quesLabel: '20ª) In a sale with 7 sustenidos #, What will be the tonality ?',
        respOptions:[{
            respLabel: 'SOL Major', right: false
        },{
            respLabel: 'FÀ Major', right: false
        },{
            respLabel: 'SI Major', right: false
        },{
            respLabel: 'DÓ# Major', right: true
        }]
    },{
        quesLabel: '21ª) What is the accidents of precaution?',
        respOptions:[{
            respLabel: 'It is used to alterate the all notes marked by this signal in that compasso', right: true
        },{
            respLabel: 'It is not used to alterate the all notes arked in the compasso', right: false
        },{
            respLabel: 'None of the above', right: false
        }]
    }];
    const Handleresponses = (right) => {
        if(right){
            setScore(prevScore => prevScore + 1);
        }
        const otherQuest = status + 1;
        if(otherQuest < questionEight.length){
            setStatus(otherQuest);
        }else{
            setFounded(true);
        }
    }
    return(
        <div>
            {founded ? (
                <div className='score-section'>
                    <p>You got it right{score} of {questionEight.length}questions</p>
                </div>
            ):(
                <>
                    <div className='question-section'>
                        <fieldset style={{borderColor: 'cyan', backgroundColor: 'blue', color: 'aqua'}}><legend>Quizz Phase Eight</legend>
                            <div className='question-count'>
                                <span>Question{status + 1}</span> / {questionEight.length}
                            </div>
                            <div>
                                {questionEight[status].quesLabel}
                            </div>
                            <div className='question-text'>
                                {questionEight[status].respOptions.map((respOption, index) => (
                                <>
                                <motion.div
                                initial={{x: 300}}
                                animate={{x: 5}}
                                transition={{duration: 3}}
                                >
                                    <Divider/>
                                    <ButtonBase style={{backgroundColor: 'black', color: 'Hightlight', width: '300px'}} key={index} onClick={() => Handleresponses(respOption.right)}>{respOption.respLabel}</ButtonBase>
                                </motion.div>
                                </>
                                ))}
                            </div>
                        </fieldset>
                    </div>
                </>
            )}
        </div>
    )
}