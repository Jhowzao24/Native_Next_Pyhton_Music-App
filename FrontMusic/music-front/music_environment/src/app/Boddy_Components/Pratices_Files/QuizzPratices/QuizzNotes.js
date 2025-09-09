import React, {useState} from 'react';
import {Button, Divider} from '@mui/material';
import { Diver } from '../style';
import { motion } from 'framer-motion';

export default function NoteQuizz(){
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const quizzNotes = [
        {
            askLabel: '1ª) Begining from the Violin mirror, What is the note of the High-pitched strings?',
            optAnswers:[
                {optAnsLabel: 'MI', nice: true},
                {optAnsLabel: 'SOL', nice: false},
                {optAnsLabel: 'FÁ', nice: false},
                {optAnsLabel: 'LÁ', nice: false},
                {optAnsLabel: 'RÉ', nice: false},
            ],
            imageUrl: 'https://th.bing.com/th/id/OIP._WJrfIJybdjg2hfrw6lHPwAAAA?pid=ImgDet&rs=1'
        },
        {
            askLabel: '2ª) How is called the Bass string of the Violin?',
            optAnswers:[
                {optAnsLabel: 'FÁ', nice: false},
                {optAnsLabel: 'SOL', nice: true},
                {optAnsLabel: 'RÉ', nice: false},
                {optAnsLabel: 'FÁ', nice: false},
            ],
            imageUrl: 'https://th.bing.com/th/id/OIP.ngSvvB_aNfm0e7Noy6DnoQHaEK?pid=ImgDet&rs=1'
        },
        {
            askLabel: '3ª) How is called  the two strings that is the medium height at the Violin?',
            optAnswers:[
                {optAnsLabel: 'RÉ - SOL', nice: false},
                {optAnsLabel: 'RÉ-LÁ', nice: true},
                {optAnsLabel: 'SOL-MI', nice: false},
            ],
            imageUrl: 'https://th.bing.com/th/id/OIP.QSQrOBVmtMJxbvtjTwgUIgHaE7?pid=ImgDet&rs=1'
        },
        {
            askLabel: '4ª) The string MI is the high-pitched sound in the violin, so, What will be the sequence notes of the string MI?',
            optAnswers:[
                {optAnsLabel: 'SI-DÓ-RÉ-MI', nice: false},
                {optAnsLabel: 'FÁ-SOL-LÁ-SI', nice: true},
                {optAnsLabel: 'MI-FÁ-SOL-LÁ', nice: false},
                {optAnsLabel: 'LÁ-SI-DÓ-RÉ', nice: false},
            ],
            imageUrl: 'https://static.fabrik.io/1bbt/5f495f7d1547a7e4.png?auto=format&lossless=1&w=1280&h=1280&fit=max&s=0abfb3e3e6c229d9ef1a5b7d600e1cf0'
        },
        {
            askLabel: '5ª) The string LÁ, what will be the sequences note of the string LÁ?',
            optAnswers:[
                {optAnsLabel: 'LÁ-SI-DÓ-RÉ', nice: false},
                {optAnsLabel: 'SI-DÓ-RÉ-MI', nice: true},
                {optAnsLabel: 'FÁ-SOL-LÁ-SI', nice: false},
                {optAnsLabel: 'MI-FÁ-SOL-LÁ', nice: false},
            ],
            imageUrl: 'https://bestanimations.com/Music/Instruments/Violins/playing-violin-animated-gif-8.gif'
        },
        {
            askLabel: '6ª) The string RÉ, What will be the sequences notes of the string RÉ?',
            optAnswers:[
                {optAnsLabel: 'LÁ-SI-DÓ-RÉ', nice: false},
                {optAnsLabel: 'SI-DÓ-RÉ-MI', nice: false},
                {optAnsLabel: 'FÁ-SOL-LÁ-SI', nice: false},
                {optAnsLabel: 'MI-FÁ-SOL-LÁ */*', nice: true},
            ],
            imageUrl: 'https://th.bing.com/th/id/R.207b07e58eb40d8231fdeeb42e5593b6?rik=fENMBTr38a%2brIw&riu=http%3a%2f%2fmedia.giphy.com%2fmedia%2fICfBtjgl5gSXK%2fgiphy.gif&ehk=3udBfFhNwl4A1Cxw%2bYEWcs%2f1QcHlh55ekphsNktdGr0%3d&risl=&pid=ImgRaw&r=0'
        },
        {
            askLabel: '7ª) the string SOL, What will be the sequences note of the string SOL?',
            optAnswers:[
                {optAnsLabel: 'LÁ-SI-DÓ-RÉ', nice: true},
                {optAnsLabel: 'SI-DÓ-RÉ-MI', nice: false},
                {optAnsLabel: 'FÁ-SOL-LÁ-SI', nice: false},
                {optAnsLabel: 'MI-FÁ-SOL-LÁ', nice: false},
            ],
            imageUrl: 'https://th.bing.com/th/id/OIP.xdVieAPOaB2BsQSgAkxqBQHaEK?pid=ImgDet&w=862&h=485&rs=1'
        },
        {
            askLabel: '8ª) The 1º finger at the violin strings, What will be the notes in the violin as this sequences: SOL-RÉ-LÁ-MI?',
            optAnswers:[
                {optAnsLabel: 'String SOL: 1º finger: LÁ / String RÉ: 1º finger: MI / String LÁ: 1º finger: Si / String MI: 1º finger: FÁ', nice: true},
                {optAnsLabel: 'Strings SOL: 1º finger: SI / String RÉ: 1º finger: DÓ / String LÁ: 1º finger: RÉ / String MI: 1º finger: SOL', nice: false},
                {optAnsLabel: 'String SOL: 1º finger: MI / String RÉ: 1º finger: FÁ / String LÁ: 1º finger: RÉ / String MI: 1º finger: SOL', nice: false},
            ],
            imageUrl: 'https://www.wheretostay.co.za/_wts4/locations/poi/0/0/003490/2554_730x400.jpg'
        },
        {
            askLabel: '9ª) The 2º finger at the violin strings, What will be the notes in the violin as this sequences: SOL-RÉ-LÁ-MI?',
            optAnswers:[
                {optAnsLabel: 'String SOL: 2º finger: DÓ / String RÉ: 2º finger: SOL / String LÁ: 2º finger: SOL / String MI: 2º finger: LÁ', nice: false},
                {optAnsLabel: 'String SOL: 2º finger: SI / String RÉ: 2º finger: FÁ / String LÁ: 2º finger: DÓ / String Mi: 2º finger: SOL', nice: true},
                {optAnsLabel: 'String SOL: 2º finger: RÉ / String RÉ: 2º finger: LÁ / String LÁ: 2º finger: MI / String Mi: 2º finger: SI', nice: false},
            ],
            imageUrl: 'https://www.translations.co.uk/wp-content/uploads/2016/06/what-is-tone-744x465.jpeg'
        },
        {
            askLabel: '10ª) The 3º finger at the violin strings, What will be the notes in the violin as this sequences: SOL-RÉ-LÁ-MI?',
            optAnswers:[
                {optAnsLabel: 'String SOL: 3º finger: RÉ / String RÉ: 3º finger: LÁ / String LÁ: 3º finger: MI / String MI: 3º finger: SI', nice: false},
                {optAnsLabel: 'String SOL: 3º finger: DÓ / String RÉ: 3º finger: SOL / String LÁ: 3º finger: RÉ / String Mi: 3º finger: LÁ', nice: true},
                {optAnsLabel: 'String SOL: 3º finger: Lá / String RÉ: 3º finger: MI / String LÁ: 3º finger: SI / String Mi: 3º finger: FÁ', nice: false},
            ],
            imageUrl: 'https://th.bing.com/th/id/OIP.Lnmy7tsUam6ODsEnKEqDbgHaEo?pid=ImgDet&rs=1'
        },
    ];
    const handleAnswerOptionClick = (accepted) => {
        if (accepted) {
            setScore(score + 1);
        }
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < quizzNotes.length) {
            setCurrentQuestion(nextQuestion);
        }else {
            setShowScore(true);
        }
    };
    return(
        <div className='quizz'>
            <motion.dialog
            initial={{x: 0}}
            animate={{x: 1}}
            transition={{duration: 3}}
            >
            <Diver>
            {showScore ? (
                <div className="score-section" style={{fontSize: '25px', fontFamily: 'serif'}}>
                    Você acertou {score} de {quizzNotes.length} perguntas!
                </div>
            ) : (
                    <>
                        <div className="question-section">
                            <div className="question-text" style={{backgroundColor: 'cyan', color: 'black', borderRadius: '20px', fontFamily: 'serif'}}>
                                <h2>{quizzNotes[currentQuestion].askLabel}</h2>
                            </div>
                            <img style={{width: '300px', height: '200px', borderRadius: '20px', borderStyle: 'double', borderColor: 'cyan'}} src={quizzNotes[currentQuestion].imageUrl} alt="Imagem da pergunta" />
                        </div>
                        <div className="answer-section">
                            {quizzNotes[currentQuestion].optAnswers.map((optAnswer, index) => (
                                <>
                                <hr/>
                                    <Button style={{backgroundColor: 'white', color: 'blue', fontFamily: 'serif', fontSize: '20px'}} key={index} onClick={() => handleAnswerOptionClick(optAnswer.nice)}>
                                        {optAnswer.optAnsLabel}
                                    </Button><Divider/>
                                </>
                            ))}
                        </div>
                    </>
                )}
            </Diver>
            </motion.dialog>
        </div>
    )
}