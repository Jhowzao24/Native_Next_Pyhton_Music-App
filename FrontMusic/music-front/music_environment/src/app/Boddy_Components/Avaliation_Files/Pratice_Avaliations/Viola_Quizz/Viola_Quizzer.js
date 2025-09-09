import React, {useState} from 'react';
import {Button, Divider} from '@mui/material';

export default function ViolaQuizz(){
    const [current, setCurrent] = useState(0);
    const [showScore, setShowScore]= useState(false);
    const [score, setScore] = useState(0);
    const questionViola = [{
        askerLabel: '1ª) What is the Violas part that is like a caracol?',
        respOptions: [{
            respLabel: 'Arm', cort: false
        },{
            respLabel: 'Volute', cort: true
        },{
            respLabel: 'Strings mirror', cort: false
        },{
            respLabel: 'Estandarte', cort: false
        }]
    },{
        askerLabel: '2ª) What part of Viola is similar to the violin?',
        respOptions:[{
            respLabel: 'Volute', cort: false
        },{
            respLabel: 'Arm', cort: false
        },{
            respLabel: 'All the pieces of the Viola are similar to the Violin!', cort: true
        },{
            respLabel: 'Queixeira', cort: false
        }]
    },{
        askerLabel: '3ª) The Viola is Bigger than Violin and it is smallest than Cello?',
        respOptions:[{
            respLabel: 'Yes', cort: true
        },{
            respLabel: 'No', cort: false
        }]
    },{
        askerLabel: '4ª) How much strings doesthe Viola have?',
        respOptions:[{
            respLabel: '5 strings', cort: false
        },{
            respLabel: '3 strings', cort: false
        },{
            respLabel: '4 strings', cort: true
        },{
            respLabel: '6 strings', cort: false
        }]
    }];
    const AnswerButtonClick = (cort) => {
        if(cort){
            setScore(prevScore => prevScore + 1);
        }
        const nextQuestion = current + 1;
        if(nextQuestion < questionViola.length){
            setCurrent(nextQuestion);
        }else{
            setShowScore(true);
        }
    };
    const resultShow = alert(`Voce acertou ${score} das ${questionViola.length} Questões`);
    return(
        <div style={{alignContent: 'center', backgroundColor: 'midnightblue', color: 'white', margin: '-50px', textAlign: 'center', boxShadow: '0 0 10px 10px'}}>
            {showScore ? (
                <div className='score-section' style={{backgroundColor: 'darkcyan', color: 'gold'}}>
                    {resultShow}
                </div>
            ):(
                <>
                    <div className='question-section'>
                        <div className='question-count'>
                            <span>Question{current + 1}</span> / {questionViola.length}
                        </div>
                        <div>
                            {questionViola[current].askerLabel}
                        </div>
                        <div style={{alignItems: 'center'}} className='question-text'>
                            {questionViola[current].respOptions.map((respOption, index) => (
                                <>
                                    <Divider/><Button style={{backgroundColor: 'dodgerblue', color: 'midnightblue', width: '200px', fontFamily: 'serif'}} key={index} onClick={() => AnswerButtonClick(respOption.cort)}><strong>{respOption.respLabel}</strong></Button>
                                </>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}