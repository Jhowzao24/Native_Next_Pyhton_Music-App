import React, {useState} from 'react';
import { Divider, ButtonBase } from '@mui/material';
import { motion } from 'framer-motion';

export default function QuizzSetima(){
    const [status, setStatus] = useState(0);
    const [foundScore, setFoundScore] = useState(false);
    const [score, setScore] = useState(0);
    const questionarySete = [{
        askingLabel: '1ª) Clef armor, Where will be the clef armor in the pentagram?',
        answerOptions:[{
            answerLabel: 'Begin, at front of the clave of SOL and before the compasso formule', correcting: true
        },{
            answerLabel: 'Middle of the pentagram', correcting: false
        },{
            answerLabel: 'At the end of the pentagram', correcting: false
        }]
    },{
        askingLabel: '2ª) What is the purpose of the clef armor?',
        answerOptions:[{
            answerLabel: 'Indicate the all notes that will be alterated on whenever height', correcting: true
        },{
            answerLabel: 'To change the notes of the heights', correcting: false
        },{
            answerLabel: 'Change the clefs around the music', correcting: false
        }]
    },{
        askingLabel: '3ª) The Bequadro signal can be fixed at the clef armor?',
        answerOptions:[{
            answerLabel: 'Yes', correcting: false
        },{
            answerLabel: 'Not', correcting: true
        }]
    },{
        askingLabel: '4ª) the DÓ scale has a clef armor?', 
        answerOptions:[{
            answerLabel: 'No', correcting: true
        },{
            answerLabel: 'Yes', correcting: false
        }]
    },{
        askingLabel: '5ª) How many clef armor the Sol scale has?',
        answerOptions:[{
            answerLabel: 'Only 1', correcting: true
        },{
            answerLabel: 'Only 2', correcting: false
        },{
            answerLabel: 'Only 3', correcting: false
        },{
            answerLabel: 'Only 4', correcting: false
        },{
            answerLabel: 'Only 5', correcting: false
        }]
    },{
        askingLabel: '6ª) How many clef armor do we have at the MI Major scale?',
        answerOptions:[{
            answerLabel: 'Only 3', correcting: false
        },{
            answerLabel: 'Only 5', correcting: false
        },{
            answerLabel: 'Only 4', correcting: true
        },{
            answerLabel: 'Only 6', correcting: false
        }]
    },{
        askingLabel: '7ª) What is the notes that receive the clef armor at the SOL scale?',
        answerOptions:[{
            answerLabel: 'FÁ', correcting: true
        },{
            answerLabel: 'FÁ-MI', correcting: false
        },{
            answerLabel: 'RÉ-MI-FÁ-SI', correcting: false
        }]
    },{
        askingLabel: '8ª) What is the notes that receive the clef armor at the MI scale?',
        answerOptions:[{
            answerLabel: 'FÁ-DÓ-SOL-RÉ', correcting: true
        },{
            answerLabel: 'FÁ-DÓ-SOL', correcting: false
        },{
            answerLabel: 'FÁ-DÓ-SOL-RÉ-LÁ', correcting: false
        }]
    },{
        askingLabel: '9ª) we have the scale of Bemois, So, How many clef armor does have the SI b scale?',
        answerOptions:[{
            answerLabel: 'Only 2 b', correcting: true
        },{
            answerLabel: 'Only 3 b', corecting: false
        },{
            answerLabel: 'Only 4 b', correcting: false
        },{
            answerLabel: 'Only 6 b', correcting: false
        }]
    },{
        askingLabel: '10ª) At the RÉ b, How many clef armor does it have?',
        answerOptions:[{
            answerLabel: 'Only 4 b',correcting: false
        },{
            answerLabel: 'Only 5 b', corecting: true
        },{
            answerLabel: 'Only 7 b', correcting: false
        },{
            answerLabel: 'Only 4 b', correcting: false
        }]
    },{
        askingLabel: '11ª) In a compasso with 9 moviments, What will be this compasso formule?',
        answerOptions:[{
            answerLabel: '6/2', correcting: false
        },{
            answerLabel: '12/0', correcting: false
        },{
            answerLabel: '9/2', correcting: true
        }]
    },{
        askingLabel: '12ª) So..., Knowing that the superior number is fixed, the under number will be?',
        answerOptions:[{
            answerLabel: 'Unit of Time', correcting: true
        },{
            answerLabel: 'Unit of Compasso', correcting: false
        },{
            answerLabel: 'Unit per unit time', correcting: false
        }]
    },{
        askingLabel: '13ª) Example: When you see a 9 moviments Pentagram with any compassos like: Only Conlcheias, What will be the Correct Formule?',
        answerOptions:[{
            answerLabel: '9|8', corecting: true
        },{
            answerLabel: '9|4', correcting: false
        },{
            answerLabel: '9|2', correcting: false
        },{
            answerLabel: '9|16', correcting: false
        }]
    },{
        askingLabel: '14ª) With the same 9 moviments, But with the Seminima, What will be the Formule?',
        answerOptions:[{
            answerLabel: '9|8', correcting: false
        },{
            answerLabel: '9|4', correcting: true
        },{
            answerLabel: '9|16', correcting: false
        }]
    },{
        askingLabel: '15ª) We have the 12 moviments too, But... Where are this moviments derivaded from?',
        answerOptions:[{
            answerLabel: '4|4', correcting: true
        },{
            answerLabel: '3|3', correcting: false
        },{
            answerLabel: '2|2', correcting: false
        }]
    }];
    const HandleResponse = (correcting) => {
        if(correcting){
            setScore(prevScore => prevScore + 1);
        }
        const proviQuest = status + 1;
        if(proviQuest < questionarySete.length){
            setStatus(proviQuest);
        }else{
            setFoundScore(true);
        }
    }
    return(
        <div>
            {foundScore ? (
                <div className='score-section'>
                    <p>You got it right{score} of {questionarySete.length}questions</p>
                </div>
            ):(
                <>
                <motion.div
                initial={{scale: 0}}
                animate={{scale: 1}}
                transition={{duration: 5}}
                >
                    <div className='question-section'>
                        <fieldset style={{borderColor: 'blue', backgroundColor: 'dodgerblue'}}><legend>Quizz Phase Seven</legend>
                        <div className='question-count'>
                            <span>Question{status + 1}</span> / {questionarySete.length}
                        </div>
                        <div>
                            {questionarySete[status].askingLabel}
                        </div>
                        <div className='question-text'>
                            {questionarySete[status].answerOptions.map((answerOption, index) => (
                                <>
                                <motion.div
                                initial={{x: -800}}
                                animate={{x: 8}}
                                transition={{duration: 5}}
                                >
                                    <Divider/>
                                    <ButtonBase style={{backgroundColor: 'black', color: 'white', width: '300px'}} key={index} onClick={() =>HandleResponse(answerOption.correcting)}>{answerOption.answerLabel}</ButtonBase>
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