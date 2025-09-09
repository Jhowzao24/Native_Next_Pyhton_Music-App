import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Input } from '@mui/material';
import toast, { Toaster } from 'react-hot-toast';

interface Card {
  id?: number;
  title: string;
  description: string;
}

interface CardFormProps {
    onSuccess: () => void;
    selectedCard: Card | null;
    API_URL: string;
  }

const API_URL = 'http://127.0.0.1:8000/Urls/cards/'; // Altere para a URL correta da sua API

const CardManager: React.FC<CardFormProps> = ({onSuccess}) => {
  const [cards, setCards] = useState<Card[]>([]);
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [filteredCards, setFilteredCards] = useState<Card[]>([]);

  const fetchCards = async () => {
    try {
      const response = await axios.get<Card[]>(API_URL);
      setCards(response.data);
      setFilteredCards(response.data);
    } catch (error) {
      console.error('Erro ao buscar os cards:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const cardData: Card = { title, description };

    try {
      if (selectedCard) {
        // Edição de um card existente
        await axios.put(`${API_URL}${selectedCard.id}/`, cardData);
      } else {
        // Criação de um novo card
        await axios.post(API_URL, cardData);
      }
      // Após criar ou editar, limpe os campos e atualize a lista de cards
      onSuccess();
      setTitle('');
      setDescription('');
      setSelectedCard(null);
      fetchCards();
      toast.arguments('Datas incressed with successfuly!');
    } catch (error) {
      console.error('Erro ao salvar o card:', error);
    }
  };
  

  useEffect(() => {
    fetchCards();
  }, []);

  const ShowVarivels = () => {
    setCards(cards);
    setCards(filteredCards);
  };

  const button = {
  disabled: {
    backgroundColor: '#ccc', /* Cor de fundo quando desabilitado */
    color: '#666', /* Cor do texto quando desabilitado */
    cursor: 'not-allowed' /* Cursor indicando que não é clicável */
    }
  }


  return (
    <div>
      <h1>Gerenciamento de Cards</h1>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        /><br/>
        <textarea
          placeholder="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        /><br/>
        <Button style={{backgroundColor: 'Highlight', color: 'white'}} type="submit">{selectedCard ? 'Editar Card' : 'Criar Card'}</Button>
      </form>
      <Button style={button.disabled} onClick={ShowVarivels}>Do not click here!!</Button>
      <Toaster/>
    </div>
  );
};

export default CardManager;