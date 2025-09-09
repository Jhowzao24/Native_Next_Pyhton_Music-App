import React, { useState } from 'react';

const TestApp = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMove = (direction) => {
    setPosition((prevPosition) => ({
      x: prevPosition.x + direction.x,
      y: prevPosition.y + direction.y,
    }));
  };

  return (
    <div className="container">
      <div
        className="object"
        style={{ top: position.y, left: position.x, width: '100px', height: '100px', backgroundColor: 'blue' }}
      />
      <div className="controls">
        <button onClick={() => handleMove({ x: -10, y: 0 })}>
          Move Left
        </button>
        <button onClick={() => handleMove({ x: 10, y: 0 })}>
          Move Right
        </button>
        <button onClick={() => handleMove({ x: 0, y: -10 })}>
          Move Up
        </button>
        <button onClick={() => handleMove({ x: 0, y: 10 })}>
          Move Down
        </button>
      </div>
    </div>
  );
};

export default TestApp;