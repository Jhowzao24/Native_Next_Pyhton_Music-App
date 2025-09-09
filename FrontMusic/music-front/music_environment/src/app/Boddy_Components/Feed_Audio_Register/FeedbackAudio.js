import React, { createContext, useState } from 'react';

export const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedbacks, setFeedbacks] = useState([]);
  
  const addFeedback = async (feedback) => {
    setFeedbacks([...feedbacks, { ...feedback, id: Date.now() }]);
    try {
      await fetch("http://localhost:8000/feedback/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(feedback),
      });
    } catch (error) {
      console.error("Erro ao salvar feedback:", error);
    }
  
  };

  const removeFeedback = (id) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const feedbackToSave = feedbacks.find(f => f.id === id);
    // Aqui você pode salvar feedbackToSave em JSON ou enviar para o servidor
    setFeedbacks(feedbacks.filter(f => f.id !== id));
  };

  return (
    <FeedbackContext.Provider value={{ feedbacks, addFeedback, removeFeedback }}>
      {children}
    </FeedbackContext.Provider>
  );
};