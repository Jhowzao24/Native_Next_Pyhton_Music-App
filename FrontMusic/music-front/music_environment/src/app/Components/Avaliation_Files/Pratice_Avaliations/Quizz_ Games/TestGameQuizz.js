import { Button, Grid } from '@mui/material';
import React, {useState} from 'react';


const MusicQuiz = () => {
    const questions = [
      {
        question: 'What is the formule that the stringers musicians use to play a music with only the indicator finger? ♫ ♫ ♫',
        options: ['Stacatto', 'Spizzicato', 'Poco-rall', 'Presto'],
        answer: 'Spizzicato'
      },
      {
        question: 'What is the formule that all stringers Musicians use to play music with a low speed in a stretch? ♫ ♫ ♫',
        options: ['Allegro', 'Vivace', 'Poco-rall', 'Adagio'],
        answer: 'Poco-rall'
      },
      {
        question: 'What is the formule to play a music in Violin, Viola or Cello, that you must to use the bow with a few touchs? ♫ ♫ ♫',
        options: ['Stacatto', 'Spizzicato', 'Poco-rall', 'Tremullo'],
        answer: 'Stacatto'
      },
      {
        question: 'What types strings instrument have no Queixeira? ♫ ♫ ♫ ♫ ♫ ♫',
        options: ['Violin', 'Cello', 'Viola'],
        answer: 'Cello'
      },
      {
        question: 'What Cello make in a orcheestra?',
        options: ['Bass sound', 'Tenor', 'Soprano', 'Contralto'],
        answer: 'Bass sound'
      },
      {
        question: 'What is the type of the Violins sound?',
        options: ['High-pitched sound', 'Medium sound', 'Bass sound'],
        answer: 'High-pitched sound'
      },
      {
        question: 'What is the type of Violas sound?',
        options: ['Bass sound', 'Medium sound', 'High-pitched sound'],
        answer: 'Medium sound'
      },
      {
        question: 'What is the type of the Cellos sound?',
        options: ['Medium sound', 'Bass sound', 'High-pitched sound'],
        answer: 'Bass sound'
      },
      {
        question:'What clave is used to play Violin?',
        options: ['DÓ', 'FÁ', 'SOL'],
        answer: 'SOL'
      },
      {
        question: 'What clave is used to play Viola?',
        options: ['FÁ', 'SOL', 'DÓ'],
        answer: 'FÁ'
      },
      {
        question: 'What clave is used to play the Cello?',
        options: ['SOL', 'DÓ', 'FÁ'],
        answer: 'DÓ'
      },
      {
        question: 'What is the clave that is used to play the Bass sound?',
        options: ['DÓ', 'FÁ', 'DÓ & Fá', 'SOL', 'None of the above'],
        answer: 'DÓ & FÁ'
      },
      {
        question: 'What is the clave that is used to play the Tenor?',
        options: ['SOL', 'FÁ', 'DÓ', 'FÁ & DÓ', 'None'],
        answer: 'FÁ & DÓ'
      },
      {
        question : 'What clave is used to play the soprano and the contralto in a music?',
        options: ['SOL', 'FÁ', 'DÓ', 'FÁ & DÓ', 'SOL & DÓ', 'SOL & FÀ', 'SOL & FÀ & DÓ'],
        answer: 'SOL'
      },
      {
        question: 'Do you understand that the Violin use the clave SOL?',
        options: ['Yes', 'No'],
        answer: 'Yes'
      },
      {
        question: 'Do you agree that the Violin, Viola & Cello is pat of the same family?',
        options: ['Yes', 'No'],
        answer: 'Yes'
      },
      {
        question: 'Could the clave Fá be playied by an Violin?',
        options: ['Yes, only must to change the height notes to understand the violin notes!', 'No'],
        answer: 'Yes, only must to change the height notes to understand the violin notes!'
      },
      {
        question: 'Could the clave DÓ be playied by an Violin?',
        options: ['Yes, only must to change the height notes to understand the violin notes!', 'No'],
        answer: 'Yes, only must to change the height notes to understand the violin notes!'
      },
      {
        question: 'Could the Cello play a music wrote in a clave DÓ?',
        options: ['Yes, But it is a litle hard', 'No, But it is is easily!'],
        answer: 'Yes, But it is a litle hard'
      },
      {
        question: 'Could the Cello play a music wrote by a clave FÁ?',
        options: ['Yes, This clave was wrote for specifically this instrument!', 'No, this instrument is made to play in a different clave!'],
        answer: 'Yes, This clave was wrote for expecificaly this instrument!'
      },
      {
        question: 'Could the Viola play a music wrote in a clave SOL?',
        options: ['Yes', 'No'],
        answer: 'Yes'
      }
      // Adicione quantas perguntas desejar...
    ];
  
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
  
    const handleAnswerOptionClick = (option) => {
      if (option === questions[currentQuestion].answer) {
        setScore(score + 1);
      }
  
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
      } else {
        setShowScore(true);
      }
    };
  
    return (
      <div style={{backgroundColor: 'cyan', color: 'midnightblue', fontFamily: 'serif', fontSize: '30px'}} className="quiz-container">
        {showScore ? (
          <div className="score-section">
            Você acertou {score} de {questions.length} perguntas!
          </div>
        ) : (
          <>
            <div className="question-section">
              <div className="question-count">
                <span>Pergunta {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className="question-text">{questions[currentQuestion].question}</div>
            </div>
            <div className="answer-section">
              {questions[currentQuestion].options.map((option) => (
                <>
                  <Grid style={{float: 'left', paddingLeft: '20px', backgroundColor: 'midnightblue'}}>
                    <Button style={{backgroundColor: 'blue', color: 'aqua', fontFamily: 'serif'}} key={option} onClick={() => handleAnswerOptionClick(option)}>
                      {option}
                    </Button>
                  </Grid>
                </>
              ))}
            </div>
          </>
        )}
      </div>
    );
  };
  
  export default MusicQuiz;