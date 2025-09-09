import React, { createContext, useState, useContext } from 'react';

// Criação do contexto para os cards
const CardWalletContext = createContext();

export const useCardWallet = () => useContext(CardWalletContext);

export const CardWalletProvider = ({ children }) => {
  const [wallet, setWallet] = useState([]);

  // Função para adicionar cards à carteira
  const addCardToWallet = (card) => {
    setWallet((prevWallet) => [...prevWallet, card]);
  };

  // Função para remover cards da carteira
  const removeCardFromWallet = (id) => {
    setWallet((prevWallet) => prevWallet.filter((card) => card.id !== id));
  };

  return (
    <CardWalletContext.Provider
      value={{
        wallet,
        addCardToWallet,
        removeCardFromWallet,
      }}
    >
      {children}
    </CardWalletContext.Provider>
  );
};