// src/App.tsx

import React, { useState } from 'react';

interface Card {
  id: string;
  title: string;
  description: string;
}

const AppCardsMain: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [editingCardId, setEditingCardId] = useState<string | null>(null);
  const [searchId, setSearchId] = useState<string>('');
  const [searchResult, setSearchResult] = useState<Card | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Criar um novo card
  const createCard = () => {
    const newCard: Card = {
      id: (new Date()).toISOString(),
      title,
      description
    };
    setCards([...cards, newCard]);
    setTitle('');
    setDescription('');
  };

  // Atualizar um card existente
  const updateCard = (id: string) => {
    setCards(cards.map(card => card.id === id ? { id, title, description } : card));
    setEditingCardId(null);
    setTitle('');
    setDescription('');
  };

  // Deletar um card
  const deleteCard = (id: string) => {
    setCards(cards.filter(card => card.id !== id));
  };

  // Finalizar o card (criar ou atualizar)
  const handleFinalize = () => {
    if (editingCardId) {
      updateCard(editingCardId);
    } else {
      createCard();
    }
  };

  // Buscar um card por ID
  const handleSearch = () => {
    const result = cards.find(card => card.id === searchId);
    if (result) {
      setSearchResult(result);
      setError(null);
    } else {
      setError('Card não encontrado.');
      setSearchResult(null);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Gerenciamento de Cards</h1>

      {/* Formulário para criar/editar cards */}
      <div>
        <h2>{editingCardId ? 'Editar Card' : 'Criar Card'}</h2>
        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <textarea
          placeholder="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <br />
        <button onClick={handleFinalize}>
          {editingCardId ? 'Atualizar' : 'Criar'}
        </button>
        {editingCardId && <button onClick={() => { setEditingCardId(null); setTitle(''); setDescription(''); }}>Cancelar</button>}
      </div>

      {/* Buscar card por ID */}
      <div style={{ marginTop: '20px' }}>
        <h2>Buscar Card por ID</h2>
        <input
          type="text"
          placeholder="Digite o ID do card"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
        />
        <button onClick={handleSearch}>
          Buscar
        </button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {searchResult && (
          <div style={{ border: '1px solid #ccc', padding: '10px', marginTop: '10px' }}>
            <h3>{searchResult.title}</h3>
            <p>{searchResult.description}</p>
            <button onClick={() => { setEditingCardId(searchResult.id); setTitle(searchResult.title); setDescription(searchResult.description); }}>Editar</button>
            <button onClick={() => deleteCard(searchResult.id)}>Deletar</button>
          </div>
        )}
      </div>

      {/* Lista de todos os cards */}
      <div style={{ marginTop: '20px' }}>
        <h2>Todos os Cards</h2>
        {cards.length > 0 ? (
          <ul>
            {cards.map(card => (
              <li key={card.id} style={{ marginBottom: '10px' }}>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <button onClick={() => { setEditingCardId(card.id); setTitle(card.title); setDescription(card.description); }}>Editar</button>
                <button onClick={() => deleteCard(card.id)}>Deletar</button>
              </li>
            ))}
          </ul>
        ) : (
          <p>Nenhum card disponível.</p>
        )}
      </div>
    </div>
  );
};

export default AppCardsMain;
