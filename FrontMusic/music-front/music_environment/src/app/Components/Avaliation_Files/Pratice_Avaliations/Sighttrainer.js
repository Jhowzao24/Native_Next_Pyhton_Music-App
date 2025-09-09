import { Button } from '@material-ui/core';
import React, { Component } from 'react';

class ViolinSightReadingTrainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: ['MI', 'FÁ', 'SOL', 'LÁ', 'SI', 'DÓ', 'RÉ'],
      currentNote: '',
      selectedNote: ''
    };
  }

  componentDidMount() {
    this.generateRandomNote();
  }

  generateRandomNote = () => {
    const { notes } = this.state;
    const randomIndex = Math.floor(Math.random() * notes.length);
    const randomNote = notes[randomIndex];
    this.setState({ currentNote: randomNote });
  };

  handleNoteSelection = (selectedNote) => {
    const { currentNote } = this.state;
    this.setState({ selectedNote });
    if (selectedNote === currentNote) {
        if(currentNote === 'LÁ'){
            alert('Na Clave de Sol, se posiciona no 2º espaço')
        }else if(currentNote === 'MI'){
            alert('se posiciona na 1ª linha e 4º espaço do pentagrama')
        }else if(currentNote === 'RÉ'){
            alert('Se posiciona na 4ª e 1º espaço suplementar inferior do pentagrama!')
        }else if(currentNote === 'SOL'){
            alert('se posiciona na 2ª linha e no 2º espaço suplementar superior do pentagrama!')
        }else if(currentNote === 'FÁ'){
            alert('se posiciona no 2º espaço do pentagrama, e também é posicionado na 1ª linha do mesmo!')
        }else if(currentNote === 'DÓ'){
            alert('Se posiciona no 3º espaço do pentagrama e na 1ª linha suplementar inferior!')
        }else if(currentNote === 'SI'){
            alert('Se posiciona na 3ª linha do pentagrama!')
        }else{
            alert('Nenhuma nota escolhida')
        }
      alert('Correto!');
    } else {
      alert('Incorreto!');
    }
    this.generateRandomNote();
  };

  render() {
    const { currentNote } = this.state;

    return (
      <div style={{color: 'dodgerblue'}}>
        <h1>Violin Sight Reading Trainer</h1>
        <h2>Nota atual: {currentNote}</h2>
        <h3>Selecione a nota correta:</h3>
        <h5>Click on any note, and find on where is the notes positioned</h5>
        <ul>
          {this.state.notes.map((note) => (
            <li key={note}>
              <Button style={{backgroundColor: 'lightsteelblue', boxShadow: '0 0 5px 10px', color: 'blue'}} onClick={() => this.handleNoteSelection(note)}>{note}</Button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ViolinSightReadingTrainer;