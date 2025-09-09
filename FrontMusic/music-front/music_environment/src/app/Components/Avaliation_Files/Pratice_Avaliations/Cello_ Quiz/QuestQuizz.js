/* eslint-disable @next/next/no-img-element */
import React from 'react';

const Question = (props) => {
  const { question, options, handleAnswer } = props;

  return (
    <div style={{textAlign: 'center', width: '700px', height: '250px', margin: '-70px', boxShadow: '0 0 10px 10px', backgroundColor: 'dodgerblue'}}>
      <h2>{question}</h2>
      <div>
        {options.map((option, index) => (
          <button key={index} onClick={() => handleAnswer(option)}>
            <img style={{width: '150px', height: '150px'}} src={option.image} alt={option.label} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;