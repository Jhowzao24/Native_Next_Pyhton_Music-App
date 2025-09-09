import React, {useState} from 'react';
import {Divider, Button, Alert} from '@mui/material';
import { motion } from 'framer-motion';

export default function QuizzDesesseis(){
    const [status, setSatus] = useState(0);
    const [founded, setFounded] = useState(false);
    const [score, setScore] = useState(0);
    const questionSixteen = [{
        askerTitle: '1ª) Phrases and Semiphrases, Mark at the choices bellow, What is a Phrase?',
        respTitles:[{
            respTitle: 'It is a musical unit with a conclusion sense.', correged: true
        },{
            respTitle: 'It is the concept of the music!', correged: false
        },{
            respTitle: 'It is the fundament of the music!', correged: false
        }]
    },{
        askerTitle: '2ª) On how many parts the Phrases can to be divided?',
        respTitles:[{
            respTitle: '3 parts', correged: false
        },{
            respTitle: '2 parts',correged: false
        },{
            respTitle: '4 parts', correged: false
        },{
            respTitle: 'Respecting the total compassos number that there is in the musical system!', correged: true
        }]
    },{
        askerTitle: '3ª) What is the types os Phrases do we have at the music?',
        respTitles:[{
            respTitle: 'Phrases and Semiphrases', correged: true
        },{
            respTitle: 'Phrases, Semiphrases and Biggest Phrases', correged: false
        },{
            respTitle: 'Smallest Phrase, Biggest Phrase, Phrases, Semiphrase', correged: false
        }]
    },{
        askerTitle: '4ª) whatis a musical interpretation?',
        respTitles:[{
            respTitle: 'It is the art to understand the intentions and the feelings of the author', correged: true
        },{
            respTitle: 'It is not the art to understand the intentions!', correged: false
        },{
            respTitle: 'Transmit by the instrument song!', correged: false
        }]
    },{
        askerTitle: '5ª) What is a musical expression?',
        respTitles:[{
            respTitle: 'Transmit the music by the sound!', correged: true
        },{
            respTitle: 'Transmit the notes by the solfege', correged: false
        },{
            respTitle: 'Transmit the music by the rhythmics lenguages!', correged: false
        }]
    },{
        askerTitle: '6ª) Interpretatives indication! What do you think that is it?',
        respTitles:[{
            respTitle: 'Number under the system!', correged: false
        },{
            respTitle: 'Named expressions under the system!', correged: true
        },{
            respTitle: 'None of the above!', correged: false
        }]
    },{
        askerTitle: '7ª) what is Solene expression?',
        respTitles:[{
            respTitle: 'A way to present yourself to a authority, recognizing their greatest, soundign to majesty!', correged: true
        },{
            respTitle: 'It is the recognizer to the Gods majesty, song as a imponent way!', corregred: false
        },{
            respTitle: 'It is the way to cognize that we are happy and get the song as a happier way!', correged: false
        }]
    },{
        askerTitle: '8ª) What about the "Affetuoso", choice bellow', 
        respTitles:[{
            respTitle: 'With carefully, Adagio', correged: true
        },{
            respTitle: 'With stress, without any careful way on playing!', correged: false
        },{
            respTitle: 'With happier feelings!', correged: false
        },{
            respTitle: 'Scared way!', correged: false
        }]
    },{
        askerTitle: '9ª) Choice, What means the CANTABILE?',
        respTitles:[{
            respTitle: 'Singing, Lyric sing', correged: true
        },{
            respTitle: 'Solene, Softly', correged: false
        },{
            respTitle: 'Happiest, Enthusiatmed', correged: false
        }]
    },{
        askerTitle: '10ª) What better describe the Vivace model to play?',
        respTitles:[{
            respTitle: 'Slowly, Softly!', correged: false
        },{
            respTitle: 'Fast and Soft!', correged: true
        },{
            respTitle: 'Sweet and Majested', correged: false
        },{
            respTitle: 'dramatic and Agitated', correged: false
        }]
    },{
        askerTitle: '11ª) Maestoso, what followed choices better describe this interpretations?',
        respTitles:[{
            respTitle: 'Happy and Faster', correged: false
        },{
            respTitle: 'Sad and Slowly', correged: false
        },{
            respTitle: 'Majested (Well marked notes)', correged: true
        }]
    },{
        askerTitle: '12ª) Dolce, What choices bette describe this interpretation?',
        respTitles:[{
            respTitle: 'Andante and Faster', correged: false 
        },{
            respTitle: 'Strongest in any time!', correged: false
        },{
            respTitle: 'Sweet song!', correged: true
        },{
            respTitle: 'Agressive!', correged: false
        }]
    },{
        askerTitle: '13ª) Agitato, What choices better describe the interpretation?',
        respTitles:[{
            respTitle: 'Happier', correged: false
        },{
            respTitle: 'With angry!', correge: false
        },{
            respTitle: 'With carefully!', correged: false
        },{
            respTitle: 'Hectic', correged: true
        }]
    },{
        askerTitle: '14ª) Animato, what choices better describe it?',
        respTitles:[{
            respTitle: 'Sadest', correged: false
        },{
            respTitle: 'Happiest', correged: false
        },{
            respTitle: 'Happy', correged: true
        },{
            respTitle: 'Angriest', coreged: false
        }]
    },{
        askerTitle: '15ª) Bruscamente,What choices describe it better?',
        respTitles:[{
            respTitle: 'Very marked', correged: true
        },{
            respTitle: 'Very free', correged: false
        },{
            respTitle: 'Very Locked', correged: false
        }]
    }];
    const Handlerep = (correged) => {
        if(correged){
            setScore(prevScore => prevScore + 1);
        }
        const nextQuest = status + 1;
        if(nextQuest < questionSixteen.length){
            setSatus(nextQuest);
        }else{
            setFounded(true);
    }};
    return(
        <div style={{textAlign: 'center'}}>
            <Alert>
            {founded ? (
                    <div className='score-section'>
                        <p>You got it right{score} of {questionSixteen.length}questions</p>
                    </div>
                ):(
                    <>
                    <motion.div
                    initial={{scale: 0}}
                    animate={{scale: 1}}
                    transition={{duration: 5}}
                    >
                    <div className='question-section'>
                        <fieldset style={{borderColor: 'cyan', backgroundColor: 'blue', color: 'gold'}}><legend style={{backgroundColor: 'white', borderRadius: '10px', color: 'black', fontFamily: 'serif'}}>Quizz Phase Sixteen</legend>
                        <div className='question-count'>
                            <span>Question{status + 1}</span> / {questionSixteen.length}
                        </div>
                        <div>
                            {questionSixteen[status].askerTitle}
                        </div>
                        <div className='question-text'>
                            {questionSixteen[status].respTitles.map((respOpt, index) => (
                                <>
                                    <Divider/>
                                    <Button style={{backgroundColor: 'black', color: 'Hightlight', width: '300px'}} key={index} onClick={() => Handlerep(respOpt.correged)}>{respOpt.respTitle}</Button>
                                </>
                            ))}
                        </div>
                        </fieldset>
                    </div>
                </motion.div>
                </>
            )}
            </Alert>
        </div>
    )
}