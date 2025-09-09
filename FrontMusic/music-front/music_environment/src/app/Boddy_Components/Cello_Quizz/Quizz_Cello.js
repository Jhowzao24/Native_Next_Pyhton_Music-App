import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from 'antd';
 import { ToastContainer, toast } from 'react-toastify';

const perguntas = [
  {
    pergunta: 'The Cello is a complex instrument?',
    opcoes: ['Yes', 'Not', 'Almost that'],
    respostaCorreta: 'Almost that'
  },
  {
    pergunta: 'The Cello is an instrument with a high sound equal a sax-baritono?',
    opcoes: ['Cello is a Bass Sound', 'Cello has a high-pitched-sound', 'Cello has a sound equal a Guitar high', 'Cello is like a sax-baritono sounds'],
    respostaCorreta: 'Cello is a Bass Sound'
  },
  {
    pergunta: 'How is the detaché usually played on the cello??',
    opcoes: ['A single pass of the bow on the string', 'Play the Cello only with the fingers', 'Play the bown with some stings'],
    respostaCorreta: 'A single pass of the bow on the string'
  },
  {
    pergunta: 'What techinic in Cello the notes are played separated and shorts?',
    opcoes: ['Detache', 'Lefatto Bown', 'Arco col legno', 'Stacatto', 'Hammer-on e Pull-off'],
    respostaCorreta: 'Stacatto'
  },
  {
    pergunta: 'What is the Flautando sound in Cello?',
    opcoes: ['Make soft sounds, playing near the medium point of the bown', 'Make soft sounds pressing the string', 'technique in which the strings are pinched', 'Quickly slide your finger across the strings'],
    respostaCorreta: 'Make soft sounds, playing near the medium point of the bown'
  }
];

function QuizzInovCello() {
  const [perguntaAtual, setPerguntaAtual] = useState('');
  const [opcoes, setOpcoes] = useState([]);
  const [respostaUsuario, setRespostaUsuario] = useState('');
  const [pontuacao, setPontuacao] = useState(0);
  const [tempoRestante, setTempoRestante] = useState(10);

  useEffect(() => {
    carregarPergunta();
    const timer = setInterval(() => {
      setTempoRestante(tempoRestante => tempoRestante - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (tempoRestante === 0) {
      verificarResposta();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tempoRestante]);

  const carregarPergunta = () => {
    const randomIndex = Math.floor(Math.random() * perguntas.length);
    const novaPergunta = perguntas[randomIndex];
    setPerguntaAtual(novaPergunta.pergunta);
    setOpcoes(novaPergunta.opcoes);
  };

  const verificarResposta = () => {
    if (respostaUsuario === '') {
      toast.dark('The time is done...!');
    } else if (respostaUsuario === perguntas.find(p => p.pergunta === perguntaAtual).respostaCorreta) {
      setPontuacao(pontuacao + 1);
      toast.success('Rigth answer!');
    } else {
      toast.error('Wrong answer');
    }
    setRespostaUsuario('');
    setTempoRestante(20);
    carregarPergunta();
  };

  return (
    <div style={{backgroundColor: 'Highlight', padding: '10px', alignContent: 'center'}}>
        <motion.animate
        initial={{x: 300}}
        animate={{x: 0}}
        transition={{duration: 3}}>
      <h2>Quizz</h2>
      <h3>Tempo restante: {tempoRestante} segundos</h3>
      <h3>Pontuação: {pontuacao}</h3>
      <h4>Pergunta: {perguntaAtual}</h4>
      {opcoes.map((opcao, index) => (
        <div key={index}>
          <input
            type="radio"
            id={`opcao-${index}`}
            name="opcoes"
            value={opcao}
            checked={respostaUsuario === opcao}
            onChange={() => setRespostaUsuario(opcao)}
          />
          <label style={{color: 'gold', fontFamily: 'serif'}} htmlFor={`opcao-${index}`}>{opcao}</label>
        </div>
      ))}
      <Button onClick={verificarResposta}>Verificar Resposta</Button>
      </motion.animate>
      <ToastContainer/>
    </div>
  );
}

export default QuizzInovCello;