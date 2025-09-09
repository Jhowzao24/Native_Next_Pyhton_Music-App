import React from 'react';
import Contadores from './Contador';

class ViolaVirtuoso extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      virtuosoLevel: 0,
      isPracticing: false,
      hasComposed: false
    };
  }

componentDidMount() {
    // Set initial virtuoso level based on user data
    const { user } = this.props;
    if (user && user.virtuosoLevel) {
      this.setState({ virtuosoLevel: user.virtuosoLevel });
    }
  }

increaseVirtuosoLevel = () => {
    this.setState(prevState => ({
      virtuosoLevel: prevState.virtuosoLevel + 1
    }));
  }

togglePracticing = () => {
    this.setState(prevState => ({
      isPracticing: !prevState.isPracticing
    }));
  }

composeMusic = () => {
    this.setState({ hasComposed: true });
  }

render() {
    const { virtuosoLevel, isPracticing, hasComposed } = this.state;
    const { user } = this.props;

return (
  <div>
    <h2>{user ? user.name : 'Viola Virtuoso'}</h2>
    <p>Virtuoso Level</p>
    <h3>{virtuosoLevel}</h3>

    <button onClick={this.increaseVirtuosoLevel}>
      Increase Virtuoso Level
    </button>

    <br />

    <button onClick={this.togglePracticing}>
      {isPracticing ? 'Stop Practicing' : 'Start Practicing'}
    </button>

    <br />

    <div>
      {isPracticing && <Contadores/>}
    </div>

    <br />

    {!hasComposed && (
      <button onClick={this.composeMusic}>
        Compose Music
      </button>
    )}
    {hasComposed && <p>Music Composition Completed!</p>}
  </div>
);
}
}

export default ViolaVirtuoso;