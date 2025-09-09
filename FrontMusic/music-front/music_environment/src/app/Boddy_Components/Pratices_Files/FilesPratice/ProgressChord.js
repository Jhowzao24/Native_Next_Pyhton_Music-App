import { Avatar, Button } from "antd";
import React, { useState } from "react";
import { toast, Toaster } from 'react-hot-toast';

const chordProgressions = [
  {
    progression: ["DÓ", "LÁ(m)", "FÁ", "SOL"],
    correctAnswer: "DÓ"
  },
  {
    progression: ["SOL", "RÉ", "MI(m)", "DÓ"],
    correctAnswer: "SOL"
  },
  {
    progression: ["RÉ(m)", "LÁ(m)", "MI", "LÁ"],
    correctAnswer: "RÉ(m)"
  },
  {
    progression: ["SOL", "RÉ", "SI", "MI"],
    correctAnswer: "SOL"
  },
  {
    progression: ["RÉ", "LÁ", "FÁ"],
    correctAnswer: "RÉ"
  }
];

const ChordProgressionQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const selecionater = selectedAnswer;

  const handleAnswerOptionClick = (answer) => {
    setSelectedAnswer(answer);

    if (answer === chordProgressions[currentQuestion].correctAnswer) {
      setScore(score + 1);
      toast.success(`You choice right, congratulations`)
    }else{
      toast.error("Bad Choice... Try it again later!!");
    }

    setTimeout(() => {
      if (currentQuestion + 1 < chordProgressions.length) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer("");
      } else {
        setShowScore(true);
        toast.success([score]);
      }
    }, 1300);
  };

  return (
    <div className="chord-progressions-quiz">
      {showScore ? (
        <div style={{color: 'yellow'}} className="score-section">
            <p>You righted {score} of {chordProgressions.length}</p>
        </div>
      ) : (
        <>
          <div style={{color: 'cyan'}} className="question-section">
            <h2>Chord Progression Quiz</h2>
            <h3>Question {currentQuestion + 1}</h3>
            <p>What is the first note of the chord in the following progression?</p>
            <Avatar style={{width: '150px', height: '50px', backgroundColor: 'black', color: 'old', fontFamily: 'fantasy'}}>
            <p>{chordProgressions[currentQuestion].progression.join(" - ")}</p>
            </Avatar>
          </div>
          <div style={{padding: '20px', color: 'gold'}} className="answer-section">
            {chordProgressions[currentQuestion].progression.map((answerOption) => (
                <>
                <div style={{float: 'left', paddingLeft: '30px',padding: '10px'}}>
                <Button
                key={answerOption}
                onClick={() => handleAnswerOptionClick(answerOption)}
                >
                  {answerOption}
                </Button>
                <div>
                <p>{selecionater}</p>
              </div>
                </div>
                </>
            ))}
          </div>
        </>
      )}
      <Toaster/>
    </div>
  );
};

export default ChordProgressionQuiz;