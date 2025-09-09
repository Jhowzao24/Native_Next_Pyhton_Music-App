import React, { useState } from 'react';
import { Button, Divider } from '@mui/material';
import { Diver } from '../style';
import { motion } from 'framer-motion';

export default function QuizzViolin(){
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const quizzQuest = [
        {
            quizzLabel: '1ª) what part of the Violin make the affination of the strings?',
            ansOptions:[
                {ansLabel: 'Harpsichords and Microafinator!', accepted: true},
                {ansLabel: 'Volute!', accepted: false},
                {ansLabel: 'Standart', accepted: false},
                {ansLabel: 'Mirror',accepted: false},
            ],
            imageUrl: 'https://th.bing.com/th/id/OIP.Eor6vPlofkRGa76Y0fVg0gHaE7?pid=ImgDet&rs=1',
        },
        {
            quizzLabel: '2ª) How is called the part of violin that is used to support the strings?',
            ansOptions:[
                {ansLabel: 'Mirror', accepted: false},
                {ansLabel: 'Harpsichords', accepted: false},
                {ansLabel: 'Microafinators', accepted: false},
                {ansLabel: 'Easel', accepted: true},
                {ansLabel: 'Arm', accepted: false}
            ],
            imageUrl: 'https://th.bing.com/th/id/R.1c8b1f310bf2db5a4eea24dcc56522b1?rik=iUG7cWthMgS0aA&riu=http%3a%2f%2f2.bp.blogspot.com%2f-sNBLUfbflXo%2fU5-5IUpWhdI%2fAAAAAAAAANg%2f8x3chZgJvSA%2fs1600%2fCAVALTE%2bVIOLINO%2bLUTHIER%2bEM%2bSANTOS.jpg&ehk=Uuzp3QWflqh2E8bLfODqbr74SqH4IPrNvW3ogiWaiF8%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1'
        },
        {
            quizzLabel: '3ª) What part of the Violinis used to mirror the strings?',
            ansOptions:[
                {ansLabel: 'Mirror', accepted: true},
                {ansLabel: 'Arm', accepted: false},
                {ansLabel: 'Volute', accepted: false}
            ],
            imageUrl: 'https://th.bing.com/th/id/OIP.AduSQt-ngvNhZ_4XycLu1gHaG5?pid=ImgDet&rs=1'
        },
        {
            quizzLabel: '4ª) The part of the violin that receive vibrations from the bodys violin is?',
            ansOptions:[
                {ansLabel: 'Soul of the Violin', accepted: true},
                {ansLabel: 'Fillets of the Violin', accepted: false},
                {ansLabel: 'Volute', accepted: false},
                {ansLabel: 'Easel', accepted: false}
            ],
            imageUrl: 'https://th.bing.com/th/id/R.b24c29511a16221eddb3652f97ae6d88?rik=puGlKQJ9EZb%2fVA&riu=http%3a%2f%2f2.bp.blogspot.com%2f-0B-LPVLvhZ8%2fUGNPkoHKJmI%2fAAAAAAAAAT4%2fXbyJr_cUXsM%2fs1600%2falma.JPG&ehk=HD48Omei3LD2SIeyhNhNLGgjus%2bgLno0X%2bocHiHbWls%3d&risl=&pid=ImgRaw&r=0'
        },
        {
            quizzLabel: '5ª) what part of the violino that have a formate like a snail?',
            ansOptions:[
                {ansLabel: 'Easels', accepted: false},
                {ansLabel: 'Microafinators', accepted: false},
                {ansLabel: 'Volute', accepted: true},
                {ansLabel: 'Mirror', accepted: false},
            ],
            imageUrl: 'https://media.istockphoto.com/photos/violin-scroll-picture-id93433305?k=6&m=93433305&s=612x612&w=0&h=4SM-hhT47ZNVcUQPFyp2rUMimg3ljLv53KOQZy_wipg='
        },
        {
            quizzLabel: '6ª) What is used to get the sounds out of the Violin?',
            ansOptions:[
                {ansLabel: 'Violin Bow', accepted: true},
                {ansLabel: 'Strings', accepted: false},
                {ansLabel: 'Violin soul', accepted: false},
                {ansLabel: 'Violin Mirror', accepted: false},
            ],
            imageUrl: 'https://media.giphy.com/media/t8Ml91LwtrSko/giphy.gif'
        },
        {
            quizzLabel: '7ª) How much String does the Violin have?',
            ansOptions:[
                {ansLabel: '5 Strings', accepted: false},
                {ansLabel: '3 Strings', accepted: false},
                {ansLabel: '4 or in exception 5 Strings', accepted: true},
                {ansLabel: '2 Strings', accepted: false},
                {ansLabel: '8 Strings', accepted: false},
            ],
            imageUrl: 'https://th.bing.com/th/id/R.fd611207ec7bc7d5cee788062136bca4?rik=z1zFN%2fyJMEZdhw&riu=http%3a%2f%2fi.kinja-img.com%2fgawker-media%2fimage%2fupload%2fs--nS1Ak5qC--%2fx1n1e6clvtdf5hvxaald.gif&ehk=YAj27KdtOCMoZmfNjLVBf2oSYRWcR4UBPFRnikMjOXA%3d&risl=1&pid=ImgRaw&r=0'
        },
        {
            quizzLabel: '8ª) What is the sequence of the Violins strings? begining from the bassest string!',
            ansOptions:[
                {ansLabel: 'DÓ - SOL - RÉ - LÁ', accepted: false},
                {ansLabel: 'SOL - RÉ - LÁ - MI', accepted: true},
                {ansLabel: 'RÉ - LÁ - MI - FÁ', accepted: false},
                {ansLabel: 'LÁ - MI - FÁ - SOL', accepted: false},
            ],
            imageUrl: 'https://i.pinimg.com/originals/30/ea/d2/30ead2457929d0ba849b222d52c6b339.gif'
        },
        {
            quizzLabel: '9ª) what is the sequence of the Violins strings? begining from the High-pitched string?',
            ansOptions:[
                {ansLabel: 'LÁ - SOL - FÁ - MI', accepted: false},
                {ansLabel: 'MI - LÁ - RÉ - SOL', accepted: true},
                {ansLabel: 'LÁ - RÉ - SOL - DÒ', accepted: false},
            ],
            imageUrl: 'https://th.bing.com/th/id/OIP.91vg6n8vb3pR-FyJqXPhiwAAAA?pid=ImgDet&rs=1'
        },
        {
            quizzLabel: '10ª) What is the piece that holds the ball of the violin strings?',
            ansOptions:[
                {ansLabel: 'Violin Estandarte!', accepted: true},
                {ansLabel: 'Easel', accepted: false},
                {ansLabel: 'Volute', accepted: false},
                {ansLabel: 'Harpsichords', accepted: false},
            ],
            imageUrl: 'https://th.bing.com/th/id/R.7650bad87d33d4485454de1cf11bed5a?rik=HQD6ePdxBEmn9Q&pid=ImgRaw&r=0'
        },
        {
            quizzLabel: '11ª) How is called the piece of the Violin that you put your chin?',
            ansOptions:[
                {ansLabel: 'Quexeira', accepted: true},
                {ansLabel: 'Volute', accepted: false},
                {ansLabel: 'Harpsichords', accepted: false},
                {ansLabel: 'Arm', accepted: false},
            ],
            imageUrl: 'https://i1.wp.com/loja.oficinadosviolinos.pt/wp-content/uploads/2019/10/Queixeira-Wittner-Ausburg-colocada.jpg?fit=1200%2C1200&ssl=1'
        }
    ];
    const handleAnswerOptionClick = (accepted) => {
        if (accepted) {
          setScore(score + 1);
        }
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < quizzQuest.length) {
          setCurrentQuestion(nextQuestion);
        } else {
          setShowScore(true);
        }
    }
    return(
        <div className="quiz">
            <motion.circle
            initial={{rotate: -180}}
            animate={{rotate: 0}}
            transition={{duration: 3}}
            >
            <Diver>
            {showScore ? (
                <div className="score-section" style={{fontSize: '25px', fontFamily: 'serif'}}>
                    Você acertou {score} de {quizzQuest.length} perguntas!
                </div>
            ) : (
                    <>
                        <div className="question-section">
                            <div className="question-text" style={{backgroundColor: 'cyan', color: 'black', borderRadius: '20px', fontFamily: 'serif'}}>
                                <h2>{quizzQuest[currentQuestion].quizzLabel}</h2>
                            </div>
                            <img style={{width: '300px', height: '200px', borderRadius: '20px', borderStyle: 'double', borderColor: 'cyan'}} src={quizzQuest[currentQuestion].imageUrl} alt="Imagem da pergunta" />
                        </div>
                        <div className="answer-section">
                            {quizzQuest[currentQuestion].ansOptions.map((ansOption, index) => (
                                <>
                                <hr/>
                                    <Button style={{backgroundColor: 'white', color: 'blue', fontFamily: 'serif', fontSize: '15px'}} key={index} onClick={() => handleAnswerOptionClick(ansOption.accepted)}>
                                        {ansOption.ansLabel}
                                    </Button><Divider/>
                                </>
                            ))}
                        </div>
                    </>
                )}
            </Diver>
            </motion.circle>
        </div>
    )
}