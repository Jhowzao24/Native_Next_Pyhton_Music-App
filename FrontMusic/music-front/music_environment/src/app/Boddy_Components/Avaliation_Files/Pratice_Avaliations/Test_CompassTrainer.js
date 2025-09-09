import { Button } from "antd";
import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

const formulas = [
  { id: 1, formula: "2/2" },
  { id: 2, formula: "2/4" },
  { id: 3, formula: "2/8" },
  { id: 4, formula: "2/16"},
  { id: 5, formula: "2/32"},
  { id: 6, formula: "2/64"},
  { id: 7, formula: "3/2" },
  { id: 8, formula: "3/4" },
  { id: 9, formula: "3/8" },
  { id: 10, formula: "3/16"},
  { id: 11, formula: "3/32"},
  { id: 12, formula: "3/64"},
  { id: 13, formula: "4/2" },
  { id: 14, formula: "4/4" },
  { id: 15, formula: "4/8" },
  { id: 16, formula: "4/16"},
  { id: 17, formula: "4/32"},
  { id: 18, formula: "4/64"},
  { id: 19, formula: "6/2" },
  { id: 20, formula: "6/4" },
  { id: 21, formula: "6/8" },
  { id: 22, formula: "6/16"},
  { id: 23, formula: "6/32"},
  { id: 24, formula: "6/64"},
  { id: 25, formula: "9/2" },
  { id: 26, formula: "9/4" },
  { id: 27, formula: "9/8" },
  { id: 28, formula: "9/16"},
  { id: 29, formula: "9/32"},
  { id: 30, formula: "9/64"},
  { id: 31, formula: "12/2"},
  { id: 32, formula: "12/4"},
  { id: 33, formula: "12/8"},
  { id: 34, formula: "12/16"},
  { id: 35, formula: "12/32"},
  { id: 36, formula: "12/64"},
];

const GameCompass = () => {
  const [currentFormula, setCurrentFormula] = useState({});
  const [score, setScore] = useState(0);

  useEffect(() => {
    generateRandomFormula();
  }, []);

  const generateRandomFormula = () => {
    const randomIndex = Math.floor(Math.random() * formulas.length);
    setCurrentFormula(formulas[randomIndex]);
  };

  const handleOpenPromptModal = () => {
    const userInput = prompt("Type about the description of this formule:");
    if (userInput !== null) {
        toast.success(`The datas is: ${userInput}, your score is: ${score}, Congratulations!!`);
    }
  };

  const handleSelection = (formula) => {
    if (formula === currentFormula.formula) {
      setScore(score + 1);
    }
    generateRandomFormula();
    handleOpenPromptModal();
  };

  return (
    <div style={{color: 'lightblue'}}>
      <h4>Escolha a fórmula correta:</h4>
      <p>Score: {score}</p>
      <p>Fórmula atual: {currentFormula.formula}</p>
      <ul>
        {formulas.map((formula) => (
          <div>
            <li key={formula.id}>
              <Button onClick={() => handleSelection(formula.formula)}>
                {formula.formula}
              </Button>
            </li>
          </div>
        ))}
      </ul>
      <Toaster/>
    </div>
  );
};

export default GameCompass;