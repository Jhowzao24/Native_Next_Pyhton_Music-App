import React, { useContext } from 'react';
import { FeedbackContext } from './FeedbackContext';
import FeedbackCard from './FeedbackCard';

const FeedbackList = () => {
  const { feedbacks, removeFeedback } = useContext(FeedbackContext);

  return (
    <div className="feedback-list">
      {feedbacks.map((feedback) => (
        <FeedbackCard 
          key={feedback.id} 
          feedback={feedback} 
          removeFeedback={removeFeedback} 
        />
      ))}
    </div>
  );
};

export default FeedbackList;