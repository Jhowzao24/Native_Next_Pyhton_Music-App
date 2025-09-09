import React, {useState} from 'react';
import {Card, ButtonBase, Divider, Alert} from '@mui/material';
import { motion } from 'framer-motion';

export default function QuizzSixPhase(){
    const [rightStatus, setRightStatus] = useState(0);
    const [showScore, setShowScore]= useState(false);
    const [score, setScore] = useState(0);
    const questionarySix = [{
        askingLabel: '1ª) Tone and Semitone; What is a Semitone?',
        answerOptions:[{
            answerLabel: 'The smallest interval between two sound', correctForm: true
        },{
            answerLabel: 'The bigger interval between two sounds', correctForm: false
        },{
            answerLabel: 'None of the above', correctForm: false
        }]
    },{
        askingLabel: '2ª) What is Tone?',
        answerOptions:[{
            answerLabel: 'It is a interval formed by two semitones', correctForm: true 
        },{
            answerLabel: 'It is a interval between two sound', correctForm: false
        },{
            answerLabel: 'None of the above',correctForm: false
        }]
    },{
        askingLabel: '3ª) On where note we can to find a semitone?', 
        answerOptions:[{
            answerLabel: '1: Si - DÓ and MI - FÁ',correctForm: true
        },{
            answerLabel: '2: LÁ - SI, SOL - LÁ, DÓ - RÉ', correctForm: false
        }]
    },{
        askingLabel: '4ª) Accidents - b Bemol; # Sustenido; Bequadro, What the accidents increases the sound with one tone?',
        answerOptions:[{
            answerLabel: 'b Bemol', correctForm: false
        },{
            answerLabel: '# Sustenido', correctForm: true
        },{
            answerLabel: 'Bequadro', correctForm: false
        }]
    },{
        askingLabel: '5ª) What is the signal that decreases the note by one tone?',
        answerOptions:[{
            answerLabel: '# Sustenido', correctForm: false
        },{
            answerLabel: 'b Bemol', correctForm: true
        },{
            answerLabel: 'Bequadro', correctForm: false
        }]
    },{
        askingLabel: '6ª) What signal is used to null all the accidents around the music?',
        answerOptions:[{
            answerLabel: 'Bequadro', correctForm: true
        },{
            answerLabel: 'b Bemol', correctForm: false
        },{
            answerLabel: '# Sustenido', correctForm: false
        }]
    },{
        askingLabel: '7ª) What is an scale?',
        answerOptions:[{
            answerLabel: 'It is a sequence of ascendents or descendents consecutiving notes', correctForm: true
        },{
            answerLabel: 'It is a form to play the notes', correctForm: false
        },{
            answerLabel: 'It is only a pentagram form to speed faster', correctForm: false
        },{
            answerLabel: 'Only a note', correctForm: false
        },{
            answerLabel: 'None of the above', correctForm: false
        }]
    },{
        askingLabel: '8ª) What is the two scale present in the music?',
        answerOptions:[{
            answerLabel: 'Cromatic and Diatonic', correctForm: true
        },{
            answerLabel: 'Major scale and Minor scales', correctForm: false
        },{
            answerLabel: 'None of the above', correctForm: false
        }]
    },{
        askingLabel: '9ª) What better describe the Cromatic scale?',
        answerOptions:[{
            answerLabel: 'It is formed by twelve semitones', correctForm: true
        },{
            answerLabel: 'It is formed by eight consecutive notes', correctForm: false
        },{
            answerLabel: 'None of the above', correctForm: false
        }]
    },{
        askingLabel: '10ª) In the scale has any degrees, I - II - III - IV - V - VI - VII; What better describe what means this degrees?',
        answerOptions:[{
            answerLabel: 'I: Tonic; II: Supertonic; III: Upon; IV: Subdominant; V: Dominant; VI: Superdominant; VII: Sensible', correctForm: true
        },{
            answerLabel: 'I: Supertonic; II: Upon; III: Tonic; IV: Dominant; V: Subdominant; VI: Sensible; VII: Superdominant', correctForm: false
        },{
            answerLabel: 'I: Sensible; II: Tonic; III: Subdoinant; IV: Upon; V: Superdominant; VI: Dominant; VII: Supertonic', correctForm: false
        }]
    },{
        askingLabel: '11ª) The diatonic scales divider it self in Major scale and Minor scale; What the followed choices describe the Major scale?',
        answerOptions:[{
            answerLabel: 'Natural scale, Hamonic scale and Small Melodic scale', correctForm: false
        },{
            answerLabel: 'Scale that has a semitone between the II degree(Upon) and the IV degree(Subdominant) and between the VII degree(Sensible)', correctForm: true
        }]
    },{
        askingLabel: '12ª) In te scale of Majores, we have 8 notes like: (T T st T T T st); But in the DÓ scale, where will be the semitones?',
        answerOptions:[{
            answerLabel: 'DÓ -T- RÉ -T- MI -T- FÁ -st- SOL -T-LÁ -st- SI -T- DÓ', correctForm: false
        },{
            answerLabel: 'DÓ -st- RÉ -T- MI -st- FÁ -T- SOL -st- LÁ -T- SI -T- DÓ', correctForm: false
        },{
            answerLabel: 'DÓ -T- RÉ -T- MI -st- FÁ -T- SOL -T- LÁ -T- SI -st_ DÓ', correctForm: true
        }]
    },{
        askingLabel: '13ª) What the next notes will be the Tonic? Remember the followed scale is in DÓ Major!!',
        answerOptions:[{
            answerLabel: 'DÓ', correctForm: true
        },{
            answerLabel: 'RÉ', correctForm: false
        },{
            answerLabel: 'MI', correctForm: false
        },{
            answerLabel: 'FÁ', correctForm: false
        },{
            answerLabel: 'SOL', correctForm: false
        },{
            answerLabel: "LÁ", correctForm: false
        },{
            answerLabel: 'SI', correctForm: false
        }]
    },{
        askingLabel: '14ª) What will be the Supertonic note in the next scale?',
        answerOptions:[{
            answerLabel: 'DÓ', correctForm: false
        },{
            answerLabel: 'RÉ', correctForm: true
        },{
            answerLabel: 'MI', correctForm: false
        },{
            answerLabel: 'FÁ', correctForm: false
        },{
            answerLabel: 'SOL', correctForm: false
        },{
            answerLabel: 'LÁ', correctForm: false
        },{
            answerLabel: 'SI', correctForm: false
        }]
    },{
        askingLabel: '15ª) What will be the Mediante note in the followed scale?',
        answerOptions:[{
            answerLabel: 'DÓ', correctForm: false
        },{
            answerLabel: 'RÉ', correctForm: false
        },{
            answerLabel: 'MI', correctForm: true
        },{
            answerLabel: 'FÁ', correctForm: false
        },{
            answerLabel: 'SOL', correctForm: false
        },{
            answerLabel: 'LÁ', correctForm: false
        },{
            answerLabel: 'SI', correctForm: false
        }]
    },{
        askingLabel: '16ª) Choice the Subdominant note at the next scale',
        answerOptions:[{
            answerLabel: 'FÁ', correctform: false
        },{
            answerLabel: 'SOL', correctForm: false
        },{
            answerLabel: 'LÁ', correctForm: false
        },{
            answerLabel: 'SI', correctForm: true
        },{
            answerLabel: 'DÓ', correctForm: false
        },{
            answerLabel: 'RÉ', correctForm: false
        },{
            answerLabel: 'MI', correctForm: false
        },{
            answerLabel: 'FÁ', correctForm: false
        }]
    },{
        askingLabel: '17ª) What is the Dominant note at the next scale in SOL?',
        answerOptions:[{
            answerLabel: 'SOL', correctForm: false
        },{
            answerLabel: 'LÁ', correctForm: false
        },{
            answerLabel: 'SI', correctForm: false
        },{
            answerLabel: 'DÓ', correctForm: false
        },{
            answerLabel: 'RÉ', correctForm: true
        },{
            answerLabel: 'MI', correctForm: false
        },{
            answerLabel: 'FÁ', correctForm: false
        }]
    },{
        askingLabel: '18ª) What of the degrees will be the Superdominant note?',
        answerOptions:[{
            answerLabel: '1º', correctForm: false
        },{
            answerLabel: '2º', correctForm: false
        },{
            answerLabel: '3º', correctForm: false
        },{
            answerLabel: '4º', correctForm: false
        },{
            answerLabel: '5º', correctForm: false
        },{
            answerLabel: '6º', correctForm: true
        },{
            answerLabel: '7º', correctForm: false
        }]
    },{
        askingLabel: '19ª) So Find on where is the Sensitive note?',
        answerOptions:[{
            answerLabel: 'RÉ 1º degree', correctForm: false
        },{
            answerLabel: 'MI 2ª degree', correctForm: false
        },{
            answerLabel: 'FÁ 3º degree', correctForm: false
        },{
            answerLabel: 'SOL 4º degree', correctForm: false
        },{
            answerLabel: 'LÁ 5º degree', correctForm: false
        },{
            answerLabel: 'SI 6º degree', correctForm: false
        },{
            answerLabel: 'DÓ 7º degree', correctForm: true
        }]
    },{
        askingLabel: '20ª) Lets see in one more scale for example, What the next choices better describe an LÁ major scale?',
        answerOptions:[{
            answerLabel: 'LÁ - SI - #DÓ - RÉ - MI - #FÁ - #SOL', correctForm: true
        },{
            answerLabel: 'LÁ - #SI - DÓ - RÉ - #MI - #FÁ - #SOL', correctForm: false
        },{
            answerLabel: '#LÁ - SI - DÓ - #RÉ - MI - #FÁ - SOL', correctForm: false
        }]
    },{
        askingLabel: '21ª) Talking about the b Bemol accident! Major scales with Bemois, we are gonna ever begin from the DÓ Major scale, and identify the 4ª note to create the next scale, that will be the next scale tonic note. Thinking on it, find the scales bellow, what will be the scale of FÁ b Major?',
        answerOptions:[{
            answerLabel: 'FÁ-SOL-LÀ-SI-DÒ-Ré-MI', correctForm: false
        },{
            answerLabel: 'FÁ-SOL-LÀ-(b)SI-DÒ-Ré-MI', correctForm: true
        },{
            answerLabel: 'FÁ-SOL-(b)LÀ-SI-DÒ-Ré-MI', correctForm: false
        },{
            answerLabel: 'FÁ-SOL-LÀ-SI-(b)DÒ-Ré-MI', correctForm: false
        },{
            answerLabel: 'FÁ-(b)SOL-LÀ-(b)SI-DÒ-(b)Ré-MI', correctForm: false
        }]
    },{
        askingLabel: '22ª) from the scale of the previous question, What will be the next scale?',
        answerOptions:[{
            answerLabel: '(b)SI-DÓ-RÉ-MI-FÁ-SOL-LÁ', correctForm: false
        },{
            answerLabel: '(b)SI-DÓ-RÉ-(b)MI-FÁ-SOL-LÁ', correctForm: true
        },{
            answerLabel: 'SI-(b)DÓ-RÉ-(b)MI-FÁ-(b)SOL-LÁ', correctForm: false
        }]
    },];
    const ResponsingButton = (corretForm) => {
        if(corretForm){
            setScore(prevScore => prevScore + 1);
        }
        const nextAsk = rightStatus + 1;
        if(nextAsk < questionarySix.length){
            setRightStatus(nextAsk);
        }else{
            setShowScore(true);
        }
    };
    return(
        <div>
            <Alert>
            <Card style={{width: '400px'}}>
                {showScore ? (
                    <div className='score-section'>
                        <p>You got it right{score} of {questionarySix.length}questions</p>
                    </div>
                ):(
                    <>
                    <motion.div
                    initial={{x: -1250}}
                    animate={{x: 5}}
                    transition={{duration: 5}}
                    >
                    <div className='question-section'>
                        <fieldset style={{borderColor: 'cyan', backgroundColor: 'blue', color: 'aqua'}}><legend>Quizz Phase Six</legend>
                        <div className='question-count'>
                            <span>Question{rightStatus + 1}</span> / {questionarySix.length}
                        </div>
                        <div>
                            {questionarySix[rightStatus].askingLabel}
                        </div>
                        <div className='question-text'>
                            {questionarySix[rightStatus].answerOptions.map((answerOption, index) => (
                                <>
                                    <Divider/>
                                    <ButtonBase style={{backgroundColor: 'black', color: 'Hightlight', width: '300px'}} key={index} onClick={() => ResponsingButton(answerOption.correctForm)}>{answerOption.answerLabel}</ButtonBase>
                                </>
                            ))}
                        </div>
                        </fieldset>
                    </div>
                </motion.div>
                </>
                )}
            </Card>
            </Alert>
        </div>
    )
}