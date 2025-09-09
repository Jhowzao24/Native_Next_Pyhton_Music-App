import { Fab } from '@mui/material';
import { Button } from 'antd';
import React, { useState } from 'react';

function JogoEquilibrio() {
  const [pontuacao, setPontuacao] = useState(0);
  const [tempoRestante, setTempoRestante] = useState(60);
  const [jogoIniciado, setJogoIniciado] = useState(false);
  const [posicaoAtual, setPosicaoAtual] = useState(null);

  const iniciarJogo = () => {
    setJogoIniciado(true);
    setPontuacao(0);
    setTempoRestante(60);
    // Iniciar a lógica do jogo
    gerarNovaPosicao();
    const interval = setInterval(() => {
      setTempoRestante(tempo => tempo - 1);
      if (tempoRestante === 0) {
        clearInterval(interval);
        setJogoIniciado(false);
      }
    }, 1000);
  };

  const gerarNovaPosicao = () => {
    const novaPosicao = Math.floor(Math.random() * 9) + 1; // Gera um número aleatório de 1 a 9
    setPosicaoAtual(novaPosicao);
  };

  const verificarPosicao = (posicaoSelecionada) => {
    if (posicaoSelecionada === posicaoAtual) {
      setPontuacao(pontuacao => pontuacao + 1);
      gerarNovaPosicao();
    } else {
      setPontuacao(pontuacao => pontuacao - 1);
    }
  };

  return (
    <div style={{color: 'lightblue'}}>
      <h1>Mental Balancing Game</h1>
      <h3>this game will help you to cognize the attention on the notes visualy faster</h3>
      <h5>As at the music this is extremily important, do not think that it is losting time!!</h5>
      {jogoIniciado ? (
        <div>
          <p>Pontuation: {pontuacao}</p>
          <p>Remaining time: {tempoRestante}</p>
          <div>
            {Array.from({ length: 9 }).map((_, index) => (
              <Fab
                key={index}
                disabled={jogoIniciado && posicaoAtual !== index + 1}
                onClick={() => verificarPosicao(index + 1)}
              >
                {index + 1}
              </Fab>
            ))}
          </div>
        </div>
      ) : (
        <Button onClick={iniciarJogo}>Start Game</Button>
      )}
    </div>
  );
}

export default JogoEquilibrio;