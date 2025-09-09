//import { Button, Input } from 'antd';
//import TextArea from 'antd/es/input/TextArea';
//import { useCardWallet } from './Armazenator';
import React, { useState, useEffect } from 'react';
import { Button, Carousel, Input, Tooltip } from 'antd';
import Popup from 'reactjs-popup';
import { Label } from 'react-konva';
import { Typography, Divider, Fab, AccordionActions } from '@mui/material';

const musicalScales = { 
  'Dó': ['Dó', 'Re', 'Mi', 'Fa', 'Sol', 'La', 'Si'],
  'Re': ['Re', 'Mi', 'Fa#', 'Sol', 'La', 'Si', 'Do#'],
  'Mi': ['Mi', 'Fa#', 'Sol#', 'La', 'Si', 'Do#', 'Re#'],
  'Fa': ['Fa', 'Sol', 'La', 'Si', 'Do', 'Re', 'Mi'],
  'Sol': ['Sol', 'La', 'Si', 'Dó', 'Re', 'Mi', 'Fa#'], 
  'La': ['La', 'Si', 'Do#', 'Re', 'Mi', 'Fa#', 'Sol#'], 
  'Si': ['Si', 'Do#', 'Re#', 'Mi', 'Fa#', 'Sol#', 'La#'], 
};


const AppBlocks = () => {
  const [cards, setCards] = useState([]);
  const [pasta, setPasta] = useState([]);
  const [novoCard, setNovoCard] = useState({ titulo: '', descricao: '' });

  // Carregar os cards da pasta do LocalStorage ao iniciar
  useEffect(() => {
    const pastaSalva = localStorage.getItem('pasta');
    if (pastaSalva) {
      setPasta(JSON.parse(pastaSalva));
    }
  }, []);

  // Função para criar um novo card de nota musical
  const criarNovoCard = () => {
    if (novoCard.titulo && novoCard.descricao) {
      const novoId = cards.length + pasta.length + 1;
      const card = {
        id: novoId,
        titulo: novoCard.titulo,
        descricao: novoCard.descricao,
        editando: false,
      };
      setCards([...cards, card]);
      setNovoCard({ titulo: '', descricao: '' });
    }
  };

  // Função para adicionar o card à pasta e salvar no LocalStorage
  const adicionarNaPasta = (id) => {
    const cardSelecionado = cards.find(card => card.id === id);
    const novaPasta = [...pasta, cardSelecionado];
    setPasta(novaPasta);
    setCards(cards.filter(card => card.id !== id));
    localStorage.setItem('pasta', JSON.stringify(novaPasta));
  };

  // Função para retirar o card da pasta e movê-lo de volta para edição
  const retirarDaPasta = (id) => {
    const cardRetirado = pasta.find(card => card.id === id);
    const novaPasta = pasta.filter(card => card.id !== id);
    setCards([...cards, cardRetirado]);
    setPasta(novaPasta);
    localStorage.setItem('pasta', JSON.stringify(novaPasta));
  };

  // Função para excluir um card
  const excluirCard = (id, tipo) => {
    if (tipo === 'cards') {
      setCards(cards.filter(card => card.id !== id));
    } else if (tipo === 'pasta') {
      const novaPasta = pasta.filter(card => card.id !== id);
      setPasta(novaPasta);
      localStorage.setItem('pasta', JSON.stringify(novaPasta));
    }
  };

  // Função para ativar o modo de edição
  const editarCard = (id, tipo) => {
    if (tipo === 'cards') {
      setCards(cards.map(card =>
        card.id === id ? { ...card, editando: true } : card
      ));
    } else if (tipo === 'pasta') {
      setPasta(pasta.map(card =>
        card.id === id ? { ...card, editando: true } : card
      ));
    }
  };

  // Função para finalizar a edição
  const finalizarEdicao = (id, tipo) => {
    if (tipo === 'cards') {
      setCards(cards.map(card =>
        card.id === id ? { ...card, editando: false } : card
      ));
    } else if (tipo === 'pasta') {
      const novaPasta = pasta.map(card =>
        card.id === id ? { ...card, editando: false } : card
      );
      setPasta(novaPasta);
      localStorage.setItem('pasta', JSON.stringify(novaPasta));
    }
  };

  // Função para salvar as alterações do card
  const alterarCard = (id, campo, valor, tipo) => {
    if (tipo === 'cards') {
      setCards(cards.map(card =>
        card.id === id ? { ...card, [campo]: valor } : card
      ));
    } else if (tipo === 'pasta') {
      const novaPasta = pasta.map(card =>
        card.id === id ? { ...card, [campo]: valor } : card
      );
      setPasta(novaPasta);
      localStorage.setItem('pasta', JSON.stringify(novaPasta));
    }
  };

  return (
    <div style={styles.container}>
      <h2>Create a new musical note!</h2>
      <Popup trigger={<Button style={{backgroundColor: 'darkviolet'}}>Musical Note</Button>}>
      <Carousel style={styles.carousel}>
      <div style={styles.formNovoCard}>
        <div style={{margin: '60px'}}>
          <Label style={{color: 'white'}}>Note!</Label>
        <Input
          type="text"
          placeholder="Título da nota musical"
          value={novoCard.titulo}
          onChange={(e) => setNovoCard({ ...novoCard, titulo: e.target.value })}
          style={styles.input}
        />
        <Label style={{color: 'white'}}>Description!</Label><br/>
        <textarea
          placeholder="Descrição da nota musical"
          value={novoCard.descricao}
          onChange={(e) => setNovoCard({ ...novoCard, descricao: e.target.value })}
          style={styles.textarea}
        /><br/>
        <Button onClick={criarNovoCard} style={styles.button}>
          Criar Nota
        </Button>
        </div>
      </div>

      <h2>Created Musical notes!!</h2>
      <div style={styles.areaCards}>
        {cards.map((card) => (
          <div key={card.id} style={styles.card}>
            {card.editando ? (
              <>
                <Input
                  type="text"
                  value={card.titulo}
                  onChange={(e) => alterarCard(card.id, 'titulo', e.target.value, 'cards')}
                  style={styles.input}
                />
                <textarea
                  value={card.descricao}
                  onChange={(e) => alterarCard(card.id, 'descricao', e.target.value, 'cards')}
                  style={styles.textarea}
                />
                <Button onClick={() => finalizarEdicao(card.id, 'cards')} style={styles.button}>
                  Finalizar
                </Button>
              </>
            ) : (
              <div style={{backgroundColor: 'orangeRed', margin: '3px', color: 'cyan'}}>
                <h3>{card.titulo}</h3>
                <p>{card.descricao}</p>
                <Button onClick={() => editarCard(card.id, 'cards')} style={styles.button}>
                  Editar
                </Button>
                <Button onClick={() => adicionarNaPasta(card.id)} style={styles.button}>
                  Adicionar à Pasta
                </Button>
                <Button onClick={() => excluirCard(card.id, 'cards')} style={styles.button}>
                  Excluir
                </Button>
              </div>
            )}
          </div>
        ))}
      </div>

      <h2>Pasta de Notas Musicais</h2>
      <div style={styles.pasta}>
        {pasta.map((card) => (
          <div key={card.id} style={styles.card}>
            {card.editando ? (
              <>
                <Input
                  type="text"
                  value={card.titulo}
                  onChange={(e) => alterarCard(card.id, 'titulo', e.target.value, 'pasta')}
                  style={styles.input}
                />
                <textarea
                  value={card.descricao}
                  onChange={(e) => alterarCard(card.id, 'descricao', e.target.value, 'pasta')}
                  style={styles.textarea}
                />
                <Button onClick={() => finalizarEdicao(card.id, 'pasta')} style={styles.button}>
                  Finalizar
                </Button>
              </>
            ) : (
              <div style={{backgroundColor: 'black', color: 'white', margin: '10px'}}>
                <h3>{card.titulo}</h3>
                <p>{card.descricao}</p>
                <Button onClick={() => editarCard(card.id, 'pasta')} style={styles.button}>
                  Editar
                </Button>
                <Button onClick={() => retirarDaPasta(card.id)} style={styles.button}>
                  Retirar da Pasta
                </Button>
                <Button onClick={() => excluirCard(card.id, 'pasta')} style={styles.button}>
                  Excluir
                </Button>
              </div>
            )}
          </div>
        ))}
      </div>
      </Carousel>
      </Popup>
    </div>
  );
};

// Estilos inline para o layout
const styles = {
  container: {
    width: '250px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: 'cyan',
    color: 'gold'
  },
  formNovoCard: {
    padding: '60px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: 'transparent',
    width: '450px',
    height: '350px',
    margin: '-60px'
  },
  input: {
    display: 'block',
    width: '30%',
  },
  carousel: {
    backgroundColor: 'orangered',
    width: '400px',
    height: '350px',
    borderRadius: '35px',
  },
  areaCards: {
    backgroundColor: 'black',
    color: 'white',
    height: '300px',
    width: '300px'
  },
  pasta: {
    width: '450px',
    height: '350px',
    backgroundColor: 'gold'
  },
  card: {
    color: 'white',
    backgroundColor: 'blue', 
    width: '350px'
  }
};


export default function MyApp () {
  const [notas, setNotas] = useState([]);
  const [notaAtual, setNotaAtual] = useState("");
  const [scale, setScale] = useState([]);
  // Adiciona nova nota
  const adicionarNota = () => {
    if (notaAtual.trim() !== "") {
      setNotas([...notas, notaAtual]);
      setNotaAtual(""); // Limpa o campo de texto após adicionar
    }
  };

  const handleTitleClick = (nota) => { 
    if (musicalScales[nota]) { 
      setScale(musicalScales[nota]); 
    } else { 
      setScale([]); 
    } 
  };

  // Remove uma nota
  const removerNota = (index) => {
    setNotas(notas.filter((_, i) => i !== index));
  };

  // Limpa todas as notas
  const limparNotas = () => {
    setNotas([]);
  };
  const styles = {
    quadro: {
      width: '400px',
      padding: '20px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      backgroundColor: 'darkorange',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
      margin: '20px auto',
    },
    input: {
      width: '30%',
      height: '30px',
      padding: '10px',
      borderRadius: '5px',
      border: '1px solid #ccc',
      marginBottom: '10px',
    },
    button: {
      margin: '5px',
      padding: '8px 16px',
      border: 'none',
      borderRadius: '5px',
      backgroundColor: 'purple',
      color: 'white',
      cursor: 'pointer',
    },
    buttonRemover: {
      marginTop: '1px',
      padding: '1px 1px',
      border: 'none',
      borderRadius: '20px',
      backgroundColor: 'red',
      color: 'white',
      cursor: 'pointer',
      width: '25px',
      height: '15px'
    },
    notas: {
      marginTop: '20px',
      textAlign: 'left',
      width: '80px',
      height: '100px',
    },
    nota: {
      backgroundColor: 'darkblue',
      padding: '1px',
      borderRadius: '5px',
      border: '1px solid #ccc',
      marginBottom: '0.5px',
      position: 'relative',
      height: '100px'
    },
  };
  return(
    <div style={styles.quadro}>
      <h2>Bloco de Notas</h2>
      <Label style={{fontFamily: 'serif'}}>Note</Label><br/>
      <textarea
      style={styles.input}
      value={notaAtual}
      onChange={(e) => setNotaAtual(e.target.value)}
      placeholder="Escreva sua nota aqui"
      />

      <div>
        <Button onClick={adicionarNota} style={styles.button}>
          Adicionar Nota
        </Button>
        <Button onClick={limparNotas} style={styles.button}>
          Limpar Notas
        </Button>
      </div>

      <div style={styles.notas}>
        {notas.map((nota, index) => (
          <div key={index} style={styles.nota}>
            <Typography
              key={index} 
              variant="h4" 
              component="div" 
              onClick={() => handleTitleClick(nota)} 
              sx={{ cursor: 'pointer', marginTop: '20px' }}
            >
              <h4 style={{fontSize: '14px', color: 'cyan'}}>{nota}</h4>
            </Typography>
            <div style={{backgroundColor: 'darkcyan', color: 'gold', paddingTop: '-30px'}}>
              {scale.length > 0 && ( 
                <Typography 
                  variant="h6" 
                  component="div" 
                  sx={{ marginTop: '20px' }} 
                > 
                  <Tooltip title={scale.join(', ')}>{nota}</Tooltip>
                </Typography> )}
              <Fab onClick={() => removerNota(index)} style={styles.buttonRemover}>
                <p>X</p>
              </Fab>
            </div>
          </div>
        ))}
      </div><Divider/><br/>
      <details><summary>Notes cards</summary>
      <AccordionActions style={{margin: '-50px', paddingTop: '60px'}}>
        <AppBlocks/>
      </AccordionActions>
      </details>
      <br/><br/><br/>
      {/*<AppCardsMain/>*/}
      <br/><br/>
    </div>
  )
}