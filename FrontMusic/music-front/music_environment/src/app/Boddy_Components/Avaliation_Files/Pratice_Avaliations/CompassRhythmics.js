import React, { useState, useEffect } from "react";
import { Button } from 'evergreen-ui';

const formulasDeCompasso = [
  { formula: "2/4", batidas: 2 },
  { formula: "3/4", batidas: 3 },
  { formula: "4/4", batidas: 4 },
  { formula: "6/8", batidas: 6 },
];

function AppCompass() {
  const [batidas, setBatidas] = useState(0);

  useEffect(() => {
    if (batidas > 0) {
      const intervalId = setInterval(() => {
        console.log("Tocando batida " + (batidas % 2 + 1));
        setBatidas((prevBatidas) => prevBatidas + 1);
      }, 1000 / batidas);

      return () => clearInterval(intervalId);
    }
  }, [batidas]);

  const iniciarBatida = (formula) => {
    const numeroSuperior = parseInt(formula.split("/")[0]);
    setBatidas(numeroSuperior);
  };

  return (
    <div className="App">
      <h1>Jogo de Fórmulas de Compasso</h1>
      <div>
        {formulasDeCompasso.map((item, index) => (
          <Button key={index} onClick={() => iniciarBatida(item.formula)}>
            {item.formula}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default AppCompass;