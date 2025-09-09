import { Input } from '@mui/material';
import { Button } from 'antd';
import React, { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';

const GameAccerts = () => {
  // Defina as escalas/arpejos que serão usados no jogo
  const scalesAndArpeggios = [
    { name: 'Arpejo de Dó Maior', notes: ['Dó', 'SOL', 'RÉ', 'LÁ', 'MI', 'SI', 'FÁ', 'Dó'] },
    { name: 'Arpejo de Sol Maior', notes: ['Sol', 'Si', 'Ré', 'Sol', 'Si', 'Ré', 'Sol'] },
    { name: 'Arpejo em MI Maior', notes: ['MI', 'SOL', 'SI', 'RÉ', 'FÁ', 'LÁ', 'DÓ', 'MI']},
    { name: 'Arpejo em Fá Maior', notes: ['FÁ', 'DÓ', 'SOL', 'RÉ', 'LÁ', 'MI', 'SI', 'FÁ']},
    { name: 'Arpejo em LÁ Maior', notes: ['LÁ', 'MI', 'SI', 'FÁ', 'DÓ', 'SOL', 'RÉ', 'LÁ']},
    { name: 'Arpejo em SI Maior', notes: ['SI', 'FÁ', 'DÓ', 'SOL', 'RÉ', 'LÁ', 'MI', 'SI']},
    //Escalas
    { name: 'Escala de Dó Maior', notes: ['Dó', 'Ré', 'Mi', 'Fá', 'Sol', 'Lá', 'Si', 'Dó'] },
    { name: 'Escala em MI Maior', notes: ['MI', 'FÁ', 'SOL', 'LÁ', 'SI', 'DÓ', 'RÉ', 'MI']},
    { name: 'Escala em Fá Maior', notes: ['FÁ', 'SOL', 'LÁ', 'SI', 'DÓ', 'RÉ', 'MI', 'FÁ']},
    { name: 'Escala em SOL Maior', notes: ['SOL', 'LÁ', 'SI', 'DÓ', 'RÉ', 'MI', 'FÁ', 'SOL']},
    { name: 'Escala em LÀ Maior', notes: ['LÁ', 'SI', 'DÓ', 'RÉ', 'MI', 'FÁ', 'SOL', 'LÁ']},
    { name: 'Escala em SI Maior', notes: ['SI', 'DÓ', 'RÉ', 'MI', 'FÁ', 'SOL', 'LÁ', 'SI']},
  ];

  const [currentScaleIndex, setCurrentScaleIndex] = useState(0);
  const [currentScale, setCurrentScale] = useState(scalesAndArpeggios[currentScaleIndex]);
  const [inputNotes, setInputNotes] = useState('');

  const handleScaleChange = () => {
    const nextIndex = (currentScaleIndex + 1) % scalesAndArpeggios.length;
    setCurrentScaleIndex(nextIndex);
    setCurrentScale(scalesAndArpeggios[nextIndex]);
    setInputNotes('');
  };

  const handleInputChange = (event) => {
    setInputNotes(event.target.value);
  };

  const checkNotes = () => {
    if (inputNotes === currentScale.notes.join(', ')) {
      toast.success('Parabéns! Você acertou a escala/arpejo.')
      handleScaleChange();
    } else {
      toast.error('Tente novamente! As notas não correspondem à escala/arpejo.')
    }
  };

  return (
    <div style={{color: 'gold'}}>
      <h1>Jogo de Escalas e Arpejos</h1>
      <p>Nome da Escala/Arpejo: {currentScale.name}</p>
      <p>Notas: {currentScale.notes.join(', ')}</p>
      <Input
        type="text"
        value={inputNotes}
        onChange={handleInputChange}
        placeholder="Digite as notas separadas por vírgulas"
        style={{color: 'cyan', width: '350px'}}
      />
      <br/><br/>
      <Button onClick={checkNotes}>Verificar</Button>
      <Button onClick={handleScaleChange}>Próxima Escala/Arpejo</Button>
      <Toaster/>
    </div>
  );
};

export default GameAccerts;