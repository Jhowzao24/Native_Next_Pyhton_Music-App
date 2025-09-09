import { Carousel, Input } from 'antd';
import { Button } from 'evergreen-ui';
import React, { useState, useEffect } from 'react';

const AppWallet = () => {
  // Estado que armazena os cards disponíveis e os que estão na carteira
  const [cards, setCards] = useState([]);
  
  const [carteira, setCarteira] = useState([]);

  const [novoCard, setNovoCard] = useState({ titulo: '', descricao: '' });

  useEffect(() => {
    const carteiraSalva = localStorage.getItem('carteira');
    if (carteiraSalva) {
      setCarteira(JSON.parse(carteiraSalva));
    }
  }, []);

  // Função para mover card para a carteira
  const adicionarNaCarteira = (id) => {
    // Encontra o card pelo ID
    const cardSelecionado = cards.find(card => card.id === id);
    const novaCarteira = [...carteira, cardSelecionado];

    // Adiciona o card na carteira
    setCarteira([...carteira, cardSelecionado]);

    // Remove o card da área de cards
    setCards(cards.filter(card => card.id !== id));
    localStorage.setItem('carteira', JSON.stringify(novaCarteira));
  };

  const editarCard = (id, tipo) => {
    if (tipo === "cards") {
      setCards(cards.map(card =>
        card.id === id ? { ...card, editando: true } : card
      ));
    } else if (tipo === "carteira") {
      setCarteira(carteira.map(card =>
        card.id === id ? { ...card, editando: true } : card
      ));
    }
  };

  const finalizarEdicao = (id, tipo) => {
    if (tipo === "cards") {
      setCards(cards.map(card =>
        card.id === id ? { ...card, editando: false } : card
      ));
    } else if (tipo === "carteira") {
      setCarteira(carteira.map(card =>
        card.id === id ? { ...card, editando: false } : card
      ));

      localStorage.setItem('carteira', JSON.stringify(carteira));
    }
  };

  const DeleteCard = () => {
    setCards([]);
  }

  const alterarCard = (id, campo, valor, tipo) => {
    if (tipo === "cards") {
      setCards(cards.map(card =>
        card.id === id ? { ...card, [campo]: valor } : card
      ));
    } else if (tipo === "carteira") {
      setCarteira(carteira.map(card =>
        card.id === id ? { ...card, [campo]: valor } : card
      ));
    }
  };

  const criarNovoCard = () => {
    const novoId = cards.length + carteira.length + 1; // Gera um novo id baseado no tamanho total de cards
    const card = {
      id: novoId,
      titulo: novoCard.titulo,
      descricao: novoCard.descricao,
      editando: false,
    };
    setCards([...cards, card]);
    setNovoCard({ titulo: '', descricao: '' }); // Limpa o formulário após adicionar
  };

  // Função para remover card da carteira
  const removerDaCarteira = (id) => {
    const cardRemover = carteira.find(card => card.id === id);
    const novaCarteira = carteira.filter(card => card.id !== id);

    // Adiciona o card de volta para os cards
    setCards([...cards, cardRemover]);

    // Remove o card da carteira
    setCarteira(carteira.filter(card => card.id !== id));
    localStorage.setItem('carteira', JSON.stringify(novaCarteira));
  };

  const excluirCarteira = () => {
    setCarteira([]);
    localStorage.removeItem('carteira'); // Remove do LocalStorage
  };

  return (
    <div style={styles.container}>
        <h2>Create notes with scales!</h2>
        <Carousel style={{width: '350px', height: '400px', backgroundColor: 'darkred'}}>
        <center>
        <div style={styles.formNovoCard}>
            <Input
            type="text"
            placeholder="Título"
            value={novoCard.titulo}
            onChange={(e) => setNovoCard({ ...novoCard, titulo: e.target.value })}
            style={styles.input}
            /><br/><br/>
            <textarea
            placeholder="Descrição"
            value={novoCard.descricao}
            onChange={(e) => setNovoCard({ ...novoCard, descricao: e.target.value })}
            style={styles.textarea}
            /><br/><br/>
            <Button onClick={criarNovoCard} style={styles.button}>
                Create Card
            </Button>
        </div>
        </center>

        <h2>Cards Area!</h2>
        <div style={styles.areaDeCards}>
          <fieldset style={{margin: '30px'}}>
            {cards.map((card) => (
                <div key={card.id} style={styles.card}>
                    {card.editando ? (
                    <>
                        <Input
                        type="text"
                        value={card.titulo}
                        onChange={(e) => alterarCard(card.id, 'titulo', e.target.value, "cards")}
                        style={styles.input}
                        />
                        <textarea
                        value={card.descricao}
                        onChange={(e) => alterarCard(card.id, 'descricao', e.target.value, "cards")}
                        style={styles.textarea}
                        />
                        <Button onClick={() => finalizarEdicao(card.id, "cards")} style={styles.button}>
                            Finish
                        </Button>
                        <Button onClick={DeleteCard} style={{backgroundColor: 'red', color: 'cyan'}}>
                          Delete
                        </Button>
                    </>
                ) : (
                    <>
                        <h3>{card.titulo}</h3>
                        <p>{card.descricao}</p>
                        <Button onClick={() => editarCard(card.id, "cards")} style={styles.button}>
                            Edit
                        </Button>
                        <Button onClick={() => adicionarNaCarteira(card.id)} style={styles.button}>
                            Add to Wallet
                        </Button>
                        <Button onClick={DeleteCard} style={{backgroundColor: 'red', color: 'cyan'}}>
                          Delete
                        </Button>
                    </>
                )}
            </div>
        ))}
        </fieldset>
      </div>


      <div style={styles.carteira}>
        <details style={{backgroundColor: 'Highlight', borderRadius: '30px'}}><summary style={{color: 'white'}}>Wallet of Cards</summary>
        {carteira.map((card) => (
          <div key={card.id} style={styles.card}>
            {card.editando ? (
              <>
                <Input
                  type="text"
                  value={card.titulo}
                  onChange={(e) => alterarCard(card.id, 'titulo', e.target.value, "carteira")}
                  style={styles.input}
                />
                <textarea
                  value={card.descricao}
                  onChange={(e) => alterarCard(card.id, 'descricao', e.target.value, "carteira")}
                  style={styles.textarea}
                />
                <Button onClick={() => finalizarEdicao(card.id, "carteira")} style={styles.button}>
                  Finish
                </Button>
              </>
            ) : (
              <>
                <h3>{card.titulo}</h3>
                <p>{card.descricao}</p>
                <Button onClick={() => editarCard(card.id, "carteira")} style={styles.button}>
                  Edit
                </Button>
                <Button onClick={() => removerDaCarteira(card.id)} style={styles.button}>
                  Remove the wallet
                </Button>
              </>
            )}
          </div>
        ))}
        </details>
      </div>
      <Button onClick={excluirCarteira} style={{ ...styles.button, backgroundColor: 'red' }}>
        Delete the Wallet
      </Button>
      </Carousel>
    </div>
  );
};

// Estilos inline
const styles = {
  container: {
    width: '300px',
    margin: '-30px',
    padding: '70px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: 'darkBlue'
  },
  areaDeCards: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    marginBottom: '20px',
  },
  carteira: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    marginTop: '20px',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '8px',
  },
  card: {
    width: '200px',
    padding: '10px',
    margin: '10px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  button: {
    marginTop: '10px',
    padding: '8px 12px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#007bff',
    color: 'white',
    cursor: 'pointer',
  },
};

export default AppWallet;