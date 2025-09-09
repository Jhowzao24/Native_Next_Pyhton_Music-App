import React, { useState, useEffect } from "react";

const Card = ({ card, onClick }) => {
  return (
    <div
      className={`card ${card.isFlipped ? "flipped" : ""}`}
      onClick={() => onClick(card.id)}
    >
      <div className="card-inner">
        <div className="card-front">?</div>
        <div className="card-back">{card.value}</div>
      </div>
    </div>
  );
};

const MemoryGame = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);

  useEffect(() => {
    const values = ["Ricardo", "Fernando", "Joaquim", "Jhonnathan", "Juliano", "Janaina", "Geovane", "Silvio"];
    const newCards = [];

    for (let i = 0; i < values.length; i++) {
      newCards.push({ id: i * 2, value: values[i], isFlipped: false });
      newCards.push({ id: i * 2 + 1, value: values[i], isFlipped: false });
    }

    setCards(newCards);
  }, []);

  const handleCardClick = (id) => {
    if (flippedCards.length === 2) {
      // Do nothing if there are already 2 flipped cards
      return;
    }

    const newCards = cards.map((card) => {
      if (card.id === id) {
        return { ...card, isFlipped: true };
      }
      return card;
    });

    setCards(newCards);
    setFlippedCards([...flippedCards, id]);
  };

  useEffect(() => {
    if (flippedCards.length === 2) {
      const card1 = cards.find((card) => card.id === flippedCards[0]);
      const card2 = cards.find((card) => card.id === flippedCards[1]);

      if (card1.value === card2.value) {
        setMatchedCards([...matchedCards, card1.id, card2.id]);
      }

      setTimeout(() => {
        const newCards = cards.map((card) => {
          if (card.id === flippedCards[0] || card.id === flippedCards[1]) {
            return { ...card, isFlipped: matchedCards.includes(card.id) };
          }
          return card;
        });

        setCards(newCards);
        setFlippedCards([]);
      }, 1000);
    }
  }, [cards, flippedCards, matchedCards]);

  return (
    <div className="memory-game">
      {cards.map((card) => (
        <Card key={card.id} card={card} onClick={handleCardClick} />
      ))}
    </div>
  );
};

export default MemoryGame;