import { Button, Grid } from '@mui/material';
import React, { useState } from 'react';

const SongTrivia = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);

  const questions = [
    {
      question: 'What is the instrument that has a High-pitched sound?',
      options: ['Violin', 'Viola', 'Cello', 'Guitar'],
      answer: 'Violin',
    },
    {
      question: 'What is the instrument that has a Medium bass sound?',
      options: ['Viola', 'Violin', 'Cello', 'Guitar'],
      answer: 'Viola',
    },
    {
        question: 'What is the instrument that is the head of the orchestra?',
        options: ['Violin', 'Viola', 'Cello', 'Guitar'],
        answer: 'Violin',
    },
    {
        question: 'What is the instrument that make the soprano?',
        options: ['Violin', 'Viola', 'Cello', 'Guitar'],
        answer: 'Violin',
    },
    {
        question: 'What is the instrument makes the Tenor?',
        options: ['Viola', 'Violin', 'Cello', 'Guitar'],
        answer: 'Viola',
    },
    {
        question: 'What is the instrument make the Bass sound?',
        options: ['Cello', 'Viola', 'Violin', 'Guitar'],
        answer: 'Cello',
    }
    // Adicione mais perguntas aqui
  ];

  const handleAnswerOptionClick = (option) => {
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowAnswer(true);
    }
  };

  return (
    <div style={{backgroundColor: 'Highlight', borderRadius: '30px', boxShadow: '0 0 30px 20px', margin: '30px', color: 'aqua', textAlign: 'center', width: '600px'}}>
             {showAnswer ? (
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
                  <Grid style={{float: 'left', paddingLeft: '30px'}}>
                    <Button style={{backgroundColor: 'midnightblue', color: 'white'}} key={option} onClick={() => handleAnswerOptionClick(option)}>
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

export default SongTrivia;