import { Button, Divider } from '@mui/material';
import React, {useState} from 'react';

export default function ViolinQuizz(){
    const [current, setCurrent] = useState(0);
    const [showScore, setShowScore]= useState(false);
    const [score, setScore] = useState(0);
    const questions = [
        {
            questionText: '1ª) What is the signal that all strings musicians use to start the music from the down of the bow?',
            answerOptions: [{
                answerText: 'Talão', isCorrect: true
            },{
                answerText: 'Ponta', isCorrect: false
            },],
        },
        {
            questionText: '2ª) What is the part of violin, Viola and Cello are similar on each one',
            answerOptions:[{
                answerText: 'Cavalete', isCorrect: false
            },{
                answerText: 'Espelho', isCorrect: false
            },{
                answerText: 'Cravelhas', isCorrect: false
            },{
                answerText: 'Estandarte', isCorrect: false
            },{
                answerText: 'Fs', isCorrect: false
            },{
                answerText: 'Queixeira', isCorrect: false
            },{
                answerText: 'All the responses', isCorrect: true
            }]
        },
        {
            questionText: '3ª) The bow of Violin, Viola and the Cello, is divided into how many parts?',
            answerOptions:[{
                answerText: 'Only One', isCorrect: false
            },{
                answerText: 'Only Two', isCorrect: false
            },{
                answerText: 'Only Three', isCorrect: false
            },{
                answerText: 'In four equal parts', isCorrect: true
            }]
        },
        {
            questionText: '4ª) What is the parts that compose the whole strings instrument like: Violin, Viola and Cello?',
            answerOptions:[{
                answerText: 'Only Fundo', isCorrect: false
            },{
                answerText: 'Only Frente', isCorrect: false
            },{
                answerText: 'Only Side fillets', isCorrect: false
            },{
                answerText: 'Only arm', isCorrect: false
            },{
                answerText: 'Only Volute', isCorrect: false
            },{
                answerText: 'All of the Above', isCorrect: true
            }]
        },
        {
            questionText: '5ª) On Violin as the others one strings instruments, what is the strings height of violins strings?:',
            answerOptions:[{
                answerText: 'Only Sol', isCorrect: false
            },{
                answerText: 'Only Ré', isCorrect: false
            },{
                answerText: 'Only Lá', isCorrect: false
            },{
                answerText: 'Sol; Ré; Lá; Mi', isCorrect: true
            }]
        },
        {
            questionText: '6ª) At the SOL string on Violin, What finger is used to play the LÁ Note?',
            answerOptions: [{
                answerText: '2º finger', isCorrect: false
            },{
                answerText: '1º finger', isCorrect: true
            },{
                answerText: '4ª finger', isCorrect: false
            },{
                answerText: '5ª finger', isCorrect: false
            }]
        },
        {
            questionText: '7ª) At the Violin, What will be the finger that when play on the RÉ string will play the note natural FÁ',
            answerOptions: [{
                answerText: '3º finger', isCorrect: false
            },{
                answerText: '1º finger', isCorrect: false
            },{
                answerText: '2º finger', isCorrect: true
            },{
                answerText: '4º finger', isCorrect: false
            }]
        },
        {
            questionText: '8ª) At the SOL string, what finger will be the note SI?',
            answerOptions: [{
                answerText: '1º finger', isCorrect: false
            },{
                answerText: '2º finger', isCorrect: true
            },{
                answerText: '3º finger', isCorrect: false
            }]
        },
        {
            questionText: '9ª) At the RÉ string, what finger will be the note SOL',
            answerOptions:[{
                answerText: '2º finger', isCorrect: false
            },{
                answerText: '1º finger', isCorrect: false
            },{
                answerText: '3º finger', isCorrect: true
            },{
                answerText: '4º finger', isCorrect: false
            }]
        },
        {
            questionText: '10ª) At the RÉ string, what finger will be the note MI?',
            answerOptions:[{
                answerText: '1º finger', isCorrect: true
            },{
                answerText: '3º finger', isCorrect: false
            },{
                answerText: '4º finger', isCorrect: false
            },{
                answerText: '2º finger', isCorrect: false
            }]
        },
        {
            questionText: '11ª) At the RÉ string, what will be the note at the 4º finger?',
            answerOptions: [{
                answerText: 'RÉ', isCorrect: false
            },{
                answerText: 'MI', isCorrect: false
            },{
                answerText: 'SOL', isCorrect: false
            },{
                answerText: 'LÁ', isCorrect: true
            },{
                answerText: 'FÁ', isCorrect: false
            }]
        },
        {
            questionText: '12ª) At the LÁ string, what finger will be the DÓ note?',
            answerOptions:[{
                answerText: '3º finger', isCorrect: false
            },{
                answerText: '1º finger', isCorrect: false
            },{
                answerText: '2º finger', isCorrect: true
            },{
                answerText: '4º finger', isCorrect: false
            }]
        },
        {
            questionText: '13ª) At the LÁ string, what will be the finger on the note SI?',
            answerOptions:[{
                answerText: '1º finger', isCorrect: true
            },{
                answerText: '3º finger', isCorrect: false
            },{
                answerText: '4º finger', isCorrect: false
            },{
                answerText: '5º finger', isCorrect: false
            }]
        },
        {
            questionText: '14ª) Atthe LÁ string, what note will be when you play with the 3º finger?',
            answerOptions:[{
                answerText: 'LÁ', isCorrect: false
            },{
                answerText: 'SI', isCorrect: false
            },{
                answerText: 'RÉ', isCorrect: true
            },{
                answerText: 'DÓ', isCorrect: false
            }]
        },
        {
            questionText: '15ª) At the string MI, what note will be the 2º finger?',
            answerOptions:[{
                answerText: 'LÁ', isCorrect: false
            },{
                answerText: 'SOL', isCorrect: true
            },{
                answerText: 'FÁ', isCorrect: false
            },{
                answerText: 'SI', isCorrect: false
            }]
        },
        {
            questionText: '16ª) At the string MI, what finger will be the note LÁ?',
            answerOptions:[{
                answerText: '2º finger', isCorrect: false
            },{
                answerText: '1º finger', isCorrect: false
            },{
                answerText: '3º finger', isCorrect: true
            },{
                answerText: '4º finger', isCorrect: false
            }]
        },
        {
            questionText: '17ª) At the string MI, what will be the note at the 4º finger?',
            answerOptions:[{
                answerText: 'SI', isCorrect: true
            },{
                answerText: 'LÁ', isCorrect: false
            },{
                answerText: 'SOL', isCorrect: false
            },{
                answerText: 'FÁ', isCorrect: false
            },{
                answerText: 'MI', isCorrect: false
            }]
        }
    ];
    const AnswerButtonClick = (isCorrect) => {
        if(isCorrect){
            setScore(prevScore => prevScore + 1);
        }
        const nextQuestion = current + 1;
        if(nextQuestion < questions.length){
            setCurrent(nextQuestion);
        }else{
            setShowScore(true);
        }
    };
    return(
        <div style={{alignContent: 'center', backgroundColor: 'midnightblue', color: 'white', margin: '-50px', textAlign: 'center', boxShadow: '0 0 10px 10px'}} className='quizz'>
            {showScore ? (
                <div className='score-section' style={{backgroundColor: 'darkcyan', color: 'gold'}}>
                    <p>You got it right{score} of {questions.length}questions</p>
                </div>
            ):(
                <>
                    <div className='question-section'>
                        <div className='question-count'>
                            <span>Question{current + 1}</span> / {questions.length}
                        </div>
                        <div>
                            {questions[current].questionText}
                        </div>
                        <div style={{alignItems: 'center'}} className='question-text'>
                            {questions[current].answerOptions.map((answerOption, index) => (
                                <>
                                    <Divider/><Button style={{backgroundColor: 'dodgerblue', color: 'midnightblue', width: '200px', fontFamily: 'serif'}} key={index} onClick={() => AnswerButtonClick(answerOption.isCorrect)}><strong>{answerOption.answerText}</strong></Button>
                                </>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}