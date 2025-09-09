import React, { createContext, useState, ReactNode } from "react";

// Tipagem para o feedback
interface Feedback {
  analysis: React.JSX.Element;
  id: number; // Identificador único para cada feedback
  message: string; // Mensagem do feedback
  timestamp: string; // Data e hora do feedback
}

// Tipagem para o contexto
interface FeedbackContextType {
  feedbacks: Feedback[]; // Lista de feedbacks
  addFeedback: (feedback: Omit<Feedback, "id">) => void; // Função para adicionar feedback
  removeFeedback: (id: number) => void; // Função para remover feedback
}

// Criar o contexto com tipagem inicial como null

export const FeedbackContext = createContext<FeedbackContextType>({
  feedbacks: [],
  addFeedback: () => {}, // Função vazia para evitar erro
  removeFeedback: () => {}, // Função vazia para evitar erro
});


// Provedor de contexto com tipagem
export const FeedbackProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);

  // Função para adicionar feedback
  const addFeedback = (feedback: Omit<Feedback, "id">) => {
    setFeedbacks([...feedbacks, { ...feedback, id: Date.now() }]);
  };

  // Função para remover feedback
  const removeFeedback = (id: number) => {
    const feedbackToSave = feedbacks.find((f) => f.id === id);
    // Você pode salvar feedbackToSave em JSON ou enviar para um servidor aqui
    console.log("Feedback salvo:", feedbackToSave); // Apenas para demonstrar
    setFeedbacks(feedbacks.filter((f) => f.id !== id));
  };

  return (
    <FeedbackContext.Provider value={{ feedbacks, addFeedback, removeFeedback }}>
      {children}
    </FeedbackContext.Provider>
  );
};