import { Button, Grid } from '@mui/material';
import React, { useState } from 'react';

const StringsSong = () => {
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
    },
    {
      question: 'How much do you know Violin?',
      options: ['Nothing much', 'The Enought', 'Too much', "I've never heared about this instrument yet"],
      answer: 'The Enought',
    },
    {
      question: 'So on what the violin impress you?',
      options: ['The violin is my otive to play an instrument!', ' I do not make idea on what is violin!', 'Violin is an ashole!'],
      answer: 'The violin is my otive to play an instrument!',
    },
    {
      question: 'Viola is an instrument different of Violin an Cello, Do you agree that the Viola is most Bass sound?',
      options: ['No', 'Yes', 'I do not care!'],
      answer: 'Yes',
    },
    {
      question: 'Cello is diferent of Violin and Viola, but Cello has an Medium sound? Do you angree?',
      options: ['No', 'Yes', 'I am in doubt'],
      answer: 'No',
    },
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
    <div style={{backgroundColor: 'white', borderRadius: '30px', boxShadow: '0 0 30px 20px', margin: '50px', color: 'midnightblue', textAlign: 'center', width: '700px'}}>
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
                    <Grid style={{paddingLeft: '70px', float: 'left', textAlign: 'center'}}>
                        <Button style={{backgroundColor: 'dodgerblue', color: 'white'}} key={option} onClick={() => handleAnswerOptionClick(option)}>
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

export default StringsSong;