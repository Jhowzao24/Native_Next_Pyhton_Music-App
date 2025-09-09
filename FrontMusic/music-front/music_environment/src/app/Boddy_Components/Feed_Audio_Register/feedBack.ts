export const saveFeedback = async (feedback: { message: string; id: number; timestamp: string }) => {
    try {
      const response = await fetch("http://localhost:8000/feedback/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(feedback),
      });
      return await response.json();
    } catch (error) {
      console.error("Erro ao salvar feedback:", error);
      throw error;
    }
  };
  
  export const fetchFeedbacks = async () => {
    try {
      const response = await fetch("http://localhost:8000/feedback/");
      return await response.json();
    } catch (error) {
      console.error("Erro ao buscar feedbacks:", error);
      throw error;
    }
  };