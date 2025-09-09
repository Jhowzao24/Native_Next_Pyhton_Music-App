// src/App.tsx

//import React, { useState, useEffect } from 'react';
//import { db } from './FireBase';
//import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc, getDoc } from 'firebase/firestore';

/*interface Card {
  id: string;
  title: string;
  description: string;
}*/

/*const AppCardsMain: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [editingCardId, setEditingCardId] = useState<string | null>(null);
  const [searchId, setSearchId] = useState<string>('');
  const [searchResult, setSearchResult] = useState<Card | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const cardsCollectionRef = collection(db, 'cards');

  // Buscar todos os cards
  const fetchCards = async () => {
    try {
      const data = await getDocs(cardsCollectionRef);
      const fetchedCards = data.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Card[];
      setCards(fetchedCards);
    } catch (err) {
      setError('Erro ao buscar os cards.');
      console.error(err);
    }
  };

  useEffect(() => {
    fetchCards();
  });

  // Criar um novo card
  const createCard = async () => {
    try {
      const docRef = await addDoc(cardsCollectionRef, { title, description });
      setCards([...cards, { id: docRef.id, title, description }]);
      setTitle('');
      setDescription('');
    } catch (err) {
      setError('Erro ao criar o card.');
      console.error(err);
    }
  };

  // Atualizar um card existente
  const updateCard = async (id: string) => {
    try {
      const cardDoc = doc(db, 'cards', id);
      await updateDoc(cardDoc, { title, description });
      setCards(cards.map(card => card.id === id ? { id, title, description } : card));
      setEditingCardId(null);
      setTitle('');
      setDescription('');
    } catch (err) {
      setError('Erro ao atualizar o card.');
      console.error(err);
    }
  };

  // Deletar um card
  const deleteCard = async (id: string) => {
    try {
      const cardDoc = doc(db, 'cards', id);
      await deleteDoc(cardDoc);
      setCards(cards.filter(card => card.id !== id));
    } catch (err) {
      setError('Erro ao deletar o card.');
      console.error(err);
    }
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
  const handleSearch = async () => {
    if (!searchId.trim()) {
      setError('Por favor, insira um ID válido.');
      return;
    }
    setLoading(true);
    try {
      const cardDoc = doc(db, 'cards', searchId);
      const cardSnap = await getDoc(cardDoc);
      if (cardSnap.exists()) {
        setSearchResult({ id: cardSnap.id, ...cardSnap.data() } as Card);
        setError(null);
      } else {
        setError('Card não encontrado.');
        setSearchResult(null);
      }
    } catch (err) {
      setError('Erro ao buscar o card.');
      setSearchResult(null);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Gerenciamento de Cards</h1>

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


      <div style={{ marginTop: '20px' }}>
        <h2>Buscar Card por ID</h2>
        <input
          type="text"
          placeholder="Digite o ID do card"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
        />
        <button onClick={handleSearch} disabled={loading}>
          {loading ? 'Buscando...' : 'Buscar'}
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

export default AppCardsMain;*/