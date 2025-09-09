import React, {useState} from "react";
import {Divider, Button, Alert} from '@mui/material';
import { motion } from 'framer-motion';

export default function QuizzQuinze(){
    const [status, setStatus] = useState(0);
    const [founded, setFounded]=  useState(false);
    const [score, setScore] = useState(0);
    const questionQuinze = [{
        askLabel: '1ª) What is the Andamento of music?',
        ansOptions:[{
            ansLabel: 'it is a type of figure!', correging: false
        },{
            ansLabel: 'It is a indication of speed!', correging: true
        },{
            ansLabel: 'It is a formule of compasso!', correging: false
        }]
    },{
        askLabel: '2ª) The andamento can to be indicated with expressions, But What expression represent the happy curso?',
        ansOptions: [{
            ansLabel: 'Allegro', correging: true
        },{
            ansLabel: 'Andante', correging: false
        },{
            ansLabel: 'Presto', correging: false
        },{
            ansLabel: 'Adagio', correging: false
        }]
    },{
        askLabel: '3ª) What expression will represent a low feeling?',
        ansOptions:[{
            ansLabel: 'Adagio', correging: true
        },{
            ansLabel: 'Andante', correging: false
        },{
            ansLabel: 'Presto', correging: false
        }]
    },{
        askLabel: '4ª) What expression will represent a faster speed',
        ansOptions:[{
            ansLabel: 'Presto', correging: true
        },{
            ansLabel: 'Allegro', correging: false
        },{
            ansLabel: 'Andante', correging: false
        }]
    },{
        askLabel: '5ª) We have a andamento modification, What will be this andamento name?',
        ansOptions:[{
            ansLabel: 'Andante', correging: false
        },{
            ansLabel: 'Presto', correging: false
        },{
            ansLabel: 'Pocco Rallentando', correging: true
        },{
            ansLabel: 'Allegro', correging: false
        }]
    },{
        askLabel: '6ª) How could i get the media of the andamento?Remember that, the andamento will be described like that: 66-80!',
        ansOptions:[{
            ansLabel: 'Minor - Major = Result_1 / 2 = Result_2 = Result_2 + Result_1', correging: true
        },{
            ansLabel: 'Major + Minor = Result_1 / 4 = Result_2 = Result_2 - Result_1', correging: false
        },{
            ansLabel: 'Minor + Major = Result_1 / 6 = Result_2 = Result_1 - Result_2 / 10', correging: false
        }]
    }]
    const Handelresponding = (correging) => {
        if(correging){
            setScore(prevScore => prevScore + 1);
        }
        const nextAsking = status + 1;
        if(nextAsking < questionQuinze.length){
            setStatus(nextAsking);
        }else{
            setFounded(true);
        }
    }
    return(
        <div>
            <Alert>
            {founded ? (
                    <div className='score-section'>
                        <p>You got it right{score} of {questionQuinze.length}questions</p>
                    </div>
                ):(
                    <>
                    <div className='question-section'>
                        <fieldset style={{borderColor: 'cyan', backgroundColor: 'blue', color: 'gold'}}><legend style={{backgroundColor: 'white', borderRadius: '10px', color: 'black', fontFamily: 'serif'}}>Quizz Phase Fifteen</legend>
                        <div className='question-count'>
                            <span>Question{status + 1}</span> / {questionQuinze.length}
                        </div>
                        <div>
                            {questionQuinze[status].askLabel}
                        </div>
                        <div className='question-text'>
                            {questionQuinze[status].ansOptions.map((ansOption, index) => (
                                <>
                                <motion.div
                                initial={{rotate: -180}}
                                animate={{rotate: 0}}
                                transition={{duration: 3}}
                                >
                                    <Divider/>
                                    <Button style={{backgroundColor: 'black', color: 'Hightlight', width: '300px'}} key={index} onClick={() => Handelresponding(ansOption.correging)}>{ansOption.ansLabel}</Button>
                                </motion.div>
                                </>
                            ))}
                        </div>
                        </fieldset>
                    </div>
                </>
            )}
            </Alert>
        </div>
    )
}