import React from 'react';

class SolfegMovementGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      timer: 10
    };
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState((prevState) => ({
        timer: prevState.timer - 1
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  handleClick = () => {
    this.setState((prevState) => ({
      score: prevState.score + 1
    }));
  }

  render() {
    const { score, timer } = this.state;

    return (
      <div>
        <h1>Hand Movement Game</h1>
        <p>Score: {score}</p>
        <p>Time: {timer}s</p>
        {timer > 0 ? (
          <button onClick={this.handleClick}>Click Me!</button>
        ) : (
          <p>Game Over!</p>
        )}
      </div>
    );
  }
}

export default SolfegMovementGame;