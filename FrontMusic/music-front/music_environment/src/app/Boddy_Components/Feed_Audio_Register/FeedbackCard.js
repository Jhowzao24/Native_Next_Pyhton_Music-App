import React, { useEffect } from 'react';

const FeedbackCard = ({ feedback, removeFeedback }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      removeFeedback(feedback.id);
    }, 180000); // 3 minutos em milissegundos
    return () => clearTimeout(timer);
  }, [feedback, removeFeedback]);

  return (
    <div className="feedback-card">
      <p>{feedback.message}</p>
      <small>{feedback.timestamp}</small>
    </div>
  );
};

export default FeedbackCard;