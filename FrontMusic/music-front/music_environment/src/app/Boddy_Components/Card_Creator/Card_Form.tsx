// src/components/CardForm.tsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Card {
    id: number;
    title: string;
    description: string;
  }
  

interface CardFormProps {
  onSuccess: () => void;
  selectedCard: Card | null;
  API_URL: string;
}

const CardForm: React.FC<CardFormProps> = ({ onSuccess, selectedCard, API_URL }) => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (selectedCard) {
      setTitle(selectedCard.title);
      setDescription(selectedCard.description);
    } else {
      setTitle('');
      setDescription('');
    }
  }, [selectedCard]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const cardData = { title, description };

    try {
      if (selectedCard) {
        // Editar card existente
        await axios.put(`${API_URL}${selectedCard.id}/`, cardData);
      } else {
        // Criar novo card
        await axios.post(API_URL, cardData);
      }
      onSuccess(); // Atualiza a lista de cards no componente pai
      setTitle('');
      setDescription('');
    } catch (err) {
      setError('Erro ao salvar o card. Tente novamente.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>{selectedCard ? 'Editar Card' : 'Criar Card'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Título:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Descrição:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Salvando...' : selectedCard ? 'Editar' : 'Criar'}
        </button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
};

export default CardForm;