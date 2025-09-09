import { Button } from 'antd';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Definindo um array com as notas musicais
const notas = ['DÒ', 'RÉ', 'MI', 'FÁ', 'SOL', 'LÁ', 'SI', 'DÓ#', 'LÁ#', 'SIb', 'LÁb', 'RÉ#', 'RÉb'];

function ExercicioVioloncelo() {
  const [sequencia, setSequencia] = useState([]);
  const [notaAtual, setNotaAtual] = useState('');
  const [indiceNota, setIndiceNota] = useState(0);

  // Função para gerar uma nova sequência de notas
  const gerarSequencia = () => {
    const novaSequencia = [];
    for (let i = 0; i < 5; i++) {
      const randomIndex = Math.floor(Math.random() * notas.length);
      novaSequencia.push(notas[randomIndex]);
    }
    setSequencia(novaSequencia);
    setIndiceNota(0);
  };

  // Efeito para iniciar uma nova sequência quando o componente for montado
  useEffect(() => {
    gerarSequencia();
  }, []);

  // Função para tocar a próxima nota na sequência
  const tocarProximaNota = () => {
    if (indiceNota < sequencia.length) {
      setNotaAtual(sequencia[indiceNota]);
      setIndiceNota(indiceNota + 1);
    } else {
      setNotaAtual([<><h5 style={{color: 'red', fontFamily: 'fantasy', letterSpacing: '5px'}}>End of the sequence!</h5></>]);
    }
  };

  return (
    <div style={{color: 'white'}}>
      <h2>Exercício Musical para Violoncelo</h2>
      <motion.div
      initial={{scale: 0}}
      animate={{scale: 1}}
      transition={{duration: 5}}>
      <h4>You will have a free condition to play the notes freerly, Play the notes at the placewhere you want on your instrument</h4>
      </motion.div>
      <h2>Nota Atual: <h3 style={{color: 'gold', fontFamily: 'serif'}}>{notaAtual}</h3></h2>
      <Button onClick={tocarProximaNota}>Tocar Próxima Nota</Button>
      <Button onClick={gerarSequencia}>Nova Sequência</Button>
    </div>
  );
}

export default ExercicioVioloncelo;