import React, { useState } from 'react';
import { Button } from 'evergreen-ui';

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
        <Button onClick={() => handleMove({ x: -10, y: 0 })}>
          Move Left
        </Button>
        <Button onClick={() => handleMove({ x: 10, y: 0 })}>
          Move Right
        </Button>
        <Button onClick={() => handleMove({ x: 0, y: -10 })}>
          Move Up
        </Button>
        <Button onClick={() => handleMove({ x: 0, y: 10 })}>
          Move Down
        </Button>
      </div>
    </div>
  );
};

export default TestApp;