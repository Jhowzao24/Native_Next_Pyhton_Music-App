import React, {useState} from 'react';
import {Button, Divider} from '@mui/material';

export default function ViolaSents(){
    const [current, setCurrent] = useState(0);
    const [showScore, setShowScore]= useState(false);
    const [score, setScore] = useState(0);
    const quesViolas = [{
        askingText: '1ª) At the Viola strings we have this notes (DÓ, SOL, RÉ, LÁ),start with the DÓ string, What will be the note at the 2º finger?',
        ansOptions:[{
            ansText: 'RÉ', accert: false
        },{
            ansText: 'MI', accert: true
        },{
            ansText: 'FÁ', accert: false
        },{
            ansText: 'SOL', accert: false
        }]
    },{
        askingText: '2ª) Continuing at the same string DÓ, what finger will be the note RÉ',
        ansOptions:[{
            ansText: '2º finger', accert: false
        },{
            ansText: '1º finger', accert: true
        },{
            ansText: '3º finger', accert: false
        },{
            ansText: '4º finger', accert: false
        }]
    },{
        askingText: '3ª) At the same string yet, what will be the note at the finger 3',
        ansOptions:[{
            ansText: 'SOL', accert: false
        },{
            ansText: 'FÁ', accert: true
        },{
            ansText: 'Mi', accert: false
        },{
            ansText: 'RÉ', accert: false
        }]
    },{
        askingText: '4ª) At the same string yet, what will be the note at the finger 4?',
        ansOptions:[{
            ansText: 'MI', accert: false
        },{
            ansText: 'FÁ', accert: false
        },{
            ansText: 'SOL', accert: true
        },{
            ansText: 'RÉ', accert: false
        }]
    },{
        askingText: '5ª) Talking about the string SOL at the Viola, do you agree that this height, is similar to the string on the Violin?',
        ansOptions:[{
            ansText: 'Yes', accert: true
        },{
            ansText: 'No', accert: false
        },{
            ansText: 'I have no sure', accert: false
        }]
    },{
        askingText: '6ª) From the tring SOL onwards, what note will be the finger 1?',
        ansOptions:[{
            ansText: 'SI', accert: false
        },{
            ansText: 'LÁ', accert: true
        },{
            ansText: 'DÓ', accert: false
        },{
            ansText: 'RÉ', accert: false
        }]
    },{
        askingText: '7ª) Talking about the pentagram, What will be the position of the grave note DÓ?',
        ansOptions:[{
            ansText: '2º suplementar inferior space', accert: true
        },{
            ansText: '1º suplementar inferior line', accert: false
        },{
            ansText: '1º suplementar inferior space', accert: false
        },{
            ansText: '1º line', accert: false
        },{
            ansText: '2º space into the pentagram', accert: false
        }]
    },{
        askingText: '8ª) what will be the position of the grave note MI at the pentagram? Knowing you that the Viola use the clave DÓ',
        ansOptions:[{
            ansText: '2ª suplementar inferior line', accert: false
        },{
            ansText: '1ª suplementar inferior line', accert: false
        },{
            ansText: '3ª suplementar inferior line', accert: false
        },{
            ansText: '1º suplementar inferior space', accert: true
        }]
    },{
        askingText: '9ª) What will be the position of the grave note RÉ at the pentagram to Viola?',
        ansOptions:[{
            ansText: '1ª suplementar inferior line', accert: true
        },{
            ansText: '2º suplementar inferior space', accert: false
        },{
            ansText: '1ª line at the pentagram', accert: false
        }]
    },{
        askingText: '10ª) The position of 1ª line, what will be the note, in a pentagram with a clave DÓ?',
        ansOptions:[{
            ansText: 'SOL', accert: false
        },{
            ansText: 'FÁ', accert: true
        },{
            ansText: 'MI', accert: false
        },{
            ansText: 'RÉ', accert: false
        }]
    }];
    const AnswerButtonClick = (accert) => {
        if(accert){
            setScore(prevScore => prevScore + 1);
        }
        const nextQuestion = current + 1;
        if(nextQuestion < quesViolas.length){
            setCurrent(nextQuestion);
        }else{
            setShowScore(true);
        }
    };
    const Showing = alert(`Questão${current + 1} / ${quesViolas.length}`)
    const ShowFinal = alert(`Voce acertou${score} das ${quesViolas.length}questões`)
    return(
        <div style={{alignContent: 'center', backgroundColor: 'midnightblue', color: 'cyan', margin: '-30px', textAlign: 'center', boxShadow: '0 0 10px 10px'}}>
            {showScore ? (
                <div className='score-section' style={{backgroundColor: 'darkcyan', color: 'gold'}}>
                    <p>You got it right{score} of {quesViolas.length}questions</p>
                    {Showing}
                </div>
            ):(
                <>
                    <div className='question-section'>
                        <div className='question-count'>
                            <span>Question{current + 1}</span> / {quesViolas.length}
                            {ShowFinal}
                        </div>
                        <div>
                            {quesViolas[current].askingText}
                        </div>
                        <div style={{alignItems: 'center'}} className='question-text'>
                            {quesViolas[current].ansOptions.map((ansOption, index) => (
                                <>
                                    <Divider/><Button style={{backgroundColor: 'dodgerblue', color: 'midnightblue', width: '200px', fontFamily: 'serif'}} key={index} onClick={() => AnswerButtonClick(ansOption.accert)}><strong>{ansOption.ansText}</strong></Button>
                                </>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}