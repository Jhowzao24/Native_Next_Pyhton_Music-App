/* eslint-disable @next/next/no-img-element */
import { Fab } from '@material-ui/core';
import { Button, Input } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { toast, Toaster } from 'react-hot-toast';

const CatchGame = () => {
  // Definindo as notas que serão exibidas no jogo
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const notesToPlay = ['DÓ', 'RÉ', 'MI', 'FÁ', 'SOL', 'LÁ', 'SI'];

  const [currentNoteIndex, setCurrentNoteIndex] = useState(0);
  const [currentNote, setCurrentNote] = useState(notesToPlay[currentNoteIndex]);
  const [inputNote, setInputNote] = useState('');
  const [score, setScore] = useState(0);
  const [symbolAppear, setSymbolAppear] = useState(false);
  const [bemolSymble, setBemolSymbol] = useState(false);
  const [bequadroSymbol, setBequadroSymbol] = useState(false);

  const openSusteniSymbol = (
    <div>
      <h1># sustenido</h1>
      <h3>This increases a half height of the follow note!</h3>
      <img style={{width: '300px'}} src='https://www.descomplicandoamusica.com/wp-content/uploads/2014/08/detalhes-da-armadura-de-clave.png' alt='frontNote'/>
      {symbolAppear}
    </div>
  );

  const openBemolSymbol = (
    <div>
      <h1>b Bemol</h1>
      <h3>This symbol will decrease a half height of the follow note</h3>
      <img style={{width: '300px'}} src='https://th.bing.com/th/id/R.3f19a3e05ae46644facaaf28a345d583?rik=Omro4Q0lR9ItVQ&riu=http%3a%2f%2fclasesdeguitarra.com.co%2fwp-content%2fuploads%2f2014%2f02%2farmaduras-bemoles.gif&ehk=g1jV24B9wB5lHafIWCdaSuz3ruwsoxOCpkar83MDOCk%3d&risl=&pid=ImgRaw&r=0' alt='Bemolb'/>
      {bemolSymble}
    </div>
  );

  const openBequadroSymbol = (
    <div>
      <h1>♮ Bequadro</h1>
      <h3>This symbol will null all the accidents that appeared to change the minimum height of the follow notes!</h3>
      <img style={{width: '200px', height: '180px'}} src='https://th.bing.com/th/id/R.5dacc6335c6ad17f4909c83735593abc?rik=wIPQ2k0ldYsgiQ&riu=http%3a%2f%2fantoniopisacane.com%2fwp-content%2fuploads%2f2018%2f08%2fBequadro-01.png&ehk=NSJdYfL5u4d1aynwT45RbpjCcyIM11a50LFyw%2bHR4gs%3d&risl=&pid=ImgRaw&r=0' alt='Bequadro'/>
      {bequadroSymbol}
    </div>
  )

  const opSustenido = () => {
    setSymbolAppear(true);
    toast.success([openSusteniSymbol]);
  };

  const opBemol = () => {
    setBemolSymbol(true);
    toast.success([openBemolSymbol]);
  };

  const opBequadro = ( ) => {
    setBequadroSymbol(true);
    toast.success([openBequadroSymbol]);
  };

  useEffect(() => {
    // Função para exibir a próxima nota após um certo tempo
    const interval = setInterval(() => {
      setCurrentNoteIndex((prevIndex) => (prevIndex + 1) % notesToPlay.length);
      setCurrentNote(notesToPlay[currentNoteIndex]);
    }, 5000); // Troca de nota a cada 2 segundos

    // Limpando o intervalo quando o componente é desmontado
    return () => clearInterval(interval);
  }, [currentNoteIndex, notesToPlay]);

  const handleInputChange = (event) => {
    setInputNote(event.target.value);
  };

  const checkNote = () => {
    if (inputNote.toUpperCase() === currentNote) {
      setScore(score + 1);
      toast.success('Congratulations on add and righted this note!')
    } else {
      toast.error('What a pity, you made a mistake on find the right note!!')
    }
    setInputNote('');
  };

  return (
    <div style={{color: 'gold'}}>
      <h1>Musician notes game</h1>
      <p>Nota atual: {currentNote}</p>
      <p>Pontuação: {score}</p>
      <Input
        type="text"
        value={inputNote}
        onChange={handleInputChange}
        placeholder="Digite a nota que você tocou"
        style={{color: 'cyan', width: '250px'}}
      /><br/>
      <Button style={{backgroundColor: 'Highlight', color: 'gold'}} onClick={checkNote}>Verificar</Button><br/><br/>
    <Toaster/>
    <Fab onClick={opSustenido} style={{fontSize: '30px'}}>#</Fab>
    <Fab onClick={opBemol} style={{fontSize: '30px'}}>b</Fab>
    <Fab onClick={opBequadro} style={{fontSize: '30px'}}>♮</Fab>
    </div>
  );
};

export default CatchGame;
