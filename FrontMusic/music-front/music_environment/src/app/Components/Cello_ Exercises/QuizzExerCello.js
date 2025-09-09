import React, {useState} from "react";
import {Divider, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Card } from "@material-ui/core";

export default function QuizzCelloUm(){
    const [status, setStatus] = useState(0);
    const [founded, setFounded]=  useState(false);
    const [score, setScore] = useState(0);
    const questionQuinze = [{
        askLabel: '1ª) At the Cello, what will be the real heigth of the sound?',
        ansOptions:[{
            ansLabel: 'Bass sounds', correging: true
        },{
            ansLabel: 'Medium sound', correging: false
        },{
            ansLabel: 'High-pitched-sound', correging: false
        }]
    },{
        askLabel: '2ª) The Cello is an instrument that was made to play classical music only or not?',
        ansOptions: [{
            ansLabel: 'Major of the time', correging: true
        },{
            ansLabel: 'Yes', correging: false
        },{
            ansLabel: 'Not', correging: false
        },{
            ansLabel: 'Not frequently', correging: false
        }]
    },{
        askLabel: '3ª) Cello is an instrument to make the bass sound in a orchestra?',
        ansOptions:[{
            ansLabel: 'Yes', correging: true
        },{
            ansLabel: 'Not', correging: false
        },{
            ansLabel: 'It will variate', correging: false
        }]
    },{
        askLabel: '4ª) How can you play the Cello?',
        ansOptions:[{
            ansLabel: 'On weak up', correging: false
        },{
            ansLabel: 'On seat', correging: true
        },{
            ansLabel: 'In bed', correging: false
        }]
    },{
        askLabel: '5ª) The heigth of the Cello is biggest than the Violin and the Viola, How much?',
        ansOptions:[{
            ansLabel: 'A little tall', correging: false
        },{
            ansLabel: '60 cm more tall', correging: true
        },{
            ansLabel: 'A little small', correging: false
        },{
            ansLabel: 'The same heigth', correging: false
        }]
    },{
        askLabel: '6ª) What pieces is used on the Cello!',
        ansOptions:[{
            ansLabel: 'Bown, Strings, Whole instrument boddy', correging: true
        },{
            ansLabel: 'Bag, Bown, Strings, Mirror', correging: false
        },{
            ansLabel: 'Mirror, String, Amplificator', correging: false
        }]
    },{
        askLabel: '7ª) What affination is the Cello strings?',
        ansOptions:[{
            ansLabel: 'DÓ/SOL/RÉ/LÁ', correging: true
        },{
            ansLabel: 'SOL/RÉ/LÁ/MI', correging: false
        },{
            ansLabel: 'RÉ/LÁ/MI/SI', correging: false
        },{
            ansLabel: 'LÁ/MI/SI/FÁ', correging: false
        },{
            ansLabel: 'MI/SI/FÁ/DÓ', correging: false
        }]
    },{
        askLabel: '8ª) The apperance of the Cello is the same of the Violin?',
        ansOptions:[{
            ansLabel: 'Yes, but change the heigth of then', correging: true
        },{
            ansLabel: 'Not, both of then are difference appearance', correging: false
        }]
    },{
        askLabel: '9ª) The sound of the Cello, Violin and the Viola are?',
        ansOptions:[{
            ansLabel: 'Metalic sounds', correging: false
        },{
            ansLabel: 'Friccionated sounds', correging: true
        },{
            ansLabel: 'Wood sound', correging: false
        }]
    },{
        askLabel: '10ª) The Cello as we know has a beautifull sound, so let the last answer here, what is interesting on the cello?',
        ansOptions:[{
            ansLabel: 'The bass sound and the sonorided sound that the cello emmiteded', correging: false
        },{
            ansLabel: 'The tonality that the cello came', correging: false
        },{
            ansLabel: 'Your heigth, Sound tonality, To be a Bass sound, Your grave tonalities', correging: true
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
            <Card>
            {founded ? (
                    <div className='score-section'>
                        <p>You got it right{score} of {questionQuinze.length}questions</p>
                        <h4>Each time that you answer all the questions right, you improve your knoledges in music!!</h4>
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
            </Card>
        </div>
    )
}