import { Grid, Fab } from "@mui/material";
import { Button, Card, Divider } from "antd";
import React, { useState, useRef } from "react";
import { Tooltip } from 'evergreen-ui';
//import { Tooltip } from 'react-tippy';

//const [frequency, setFrequency] = useState(440);

const NoteSIFPlayer = () => {
  const [frequency, setFrequency] = useState(246.94); // Frequência inicial (nota A4)
  const audioContextRef = useRef(null);
  const oscillatorRef = useRef(null);

  const playNote = (freq) => {
      if (audioContextRef.current === null) {
          audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
      }
      const audioCtx = audioContextRef.current;

      if (oscillatorRef.current) {
          oscillatorRef.current.stop();
      }

      const oscillator = audioCtx.createOscillator();
      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(freq, audioCtx.currentTime);
      oscillator.connect(audioCtx.destination);
      oscillator.start();
      oscillatorRef.current = oscillator;
  };

  const stopNote = () => {
      if (oscillatorRef.current) {
          oscillatorRef.current.stop();
          oscillatorRef.current = null;
      }
  };

  const increaseHalfStep = () => {
      const newFrequency = frequency * Math.pow(2, 1/12); // Aumenta a frequência em meio tom
      setFrequency(newFrequency);
  };

  const decreaseHalfStep = () => {
    const newFrequency = frequency / Math.pow(2, 1/12); // Diminui a frequência em meio tom
    setFrequency(newFrequency);
};

  return (
      <div>
          <h1>Note Player</h1>
          <p>Current Frequency: {frequency.toFixed(2)} Hz</p>
          <Fab style={{width: '130px', height: '130px', backgroundColor: 'black', color: 'cyan'}} onMouseDown={() => playNote(frequency)} onMouseUp={stopNote}>
            Start
          </Fab>
          <Button style={{backgroundColor: 'gold', color: 'green'}} onClick={increaseHalfStep}>
            Increase by Half Step ⬆️ #
          </Button>
          <Button style={{backgroundColor: 'gold', color: 'green'}} onClick={decreaseHalfStep}>
            Decrease by Half Step ⬇️ b
          </Button>
      </div>
  );
};

const NoteLAFPlayer = () => {
  const [frequency, setFrequency] = useState(220.00); // Frequência inicial (nota A4)
  const audioContextRef = useRef(null);
  const oscillatorRef = useRef(null);

  const playNote = (freq) => {
      if (audioContextRef.current === null) {
          audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
      }
      const audioCtx = audioContextRef.current;

      if (oscillatorRef.current) {
          oscillatorRef.current.stop();
      }

      const oscillator = audioCtx.createOscillator();
      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(freq, audioCtx.currentTime);
      oscillator.connect(audioCtx.destination);
      oscillator.start();
      oscillatorRef.current = oscillator;
  };

  const stopNote = () => {
      if (oscillatorRef.current) {
          oscillatorRef.current.stop();
          oscillatorRef.current = null;
      }
  };

  const increaseHalfStep = () => {
      const newFrequency = frequency * Math.pow(2, 1/12); // Aumenta a frequência em meio tom
      setFrequency(newFrequency);
  };

  const decreaseHalfStep = () => {
    const newFrequency = frequency / Math.pow(2, 1/12); // Diminui a frequência em meio tom
    setFrequency(newFrequency);
};

  return (
      <div>
          <h1>Note Player</h1>
          <p>Current Frequency: {frequency.toFixed(2)} Hz</p>
          <Fab style={{width: '130px', height: '130px', backgroundColor: 'black', color: 'cyan'}} onMouseDown={() => playNote(frequency)} onMouseUp={stopNote}>
            Start
          </Fab>
          <Button style={{backgroundColor: 'gold', color: 'green'}} onClick={increaseHalfStep}>
            Increase by Half Step ⬆️ #
          </Button>
          <Button style={{backgroundColor: 'gold', color: 'green'}} onClick={decreaseHalfStep}>
            Decrease by Half Step ⬇️ b
          </Button>
      </div>
  );
};

const NoteMIFPlayer = () => {
  const [frequency, setFrequency] = useState(329.63); // Frequência inicial (nota A4)
  const audioContextRef = useRef(null);
  const oscillatorRef = useRef(null);

  const playNote = (freq) => {
      if (audioContextRef.current === null) {
          audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
      }
      const audioCtx = audioContextRef.current;

      if (oscillatorRef.current) {
          oscillatorRef.current.stop();
      }

      const oscillator = audioCtx.createOscillator();
      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(freq, audioCtx.currentTime);
      oscillator.connect(audioCtx.destination);
      oscillator.start();
      oscillatorRef.current = oscillator;
  };

  const stopNote = () => {
      if (oscillatorRef.current) {
          oscillatorRef.current.stop();
          oscillatorRef.current = null;
      }
  };

  const increaseHalfStep = () => {
      const newFrequency = frequency * Math.pow(2, 1/12); // Aumenta a frequência em meio tom
      setFrequency(newFrequency);
  };

  const decreaseHalfStep = () => {
    const newFrequency = frequency / Math.pow(2, 1/12); // Diminui a frequência em meio tom
    setFrequency(newFrequency);
};

  return (
      <div>
          <h1>Note Player</h1>
          <p>Current Frequency: {frequency.toFixed(2)} Hz</p>
          <Fab style={{width: '130px', height: '130px', backgroundColor: 'black', color: 'cyan'}} onMouseDown={() => playNote(frequency)} onMouseUp={stopNote}>
            Start
          </Fab>
          <Button style={{backgroundColor: 'gold', color: 'green'}} onClick={increaseHalfStep}>
            Increase by Half Step ⬆️ #
          </Button>
          <Button style={{backgroundColor: 'gold', color: 'green'}} onClick={decreaseHalfStep}>
            Decrease by Half Step ⬇️ b
          </Button>
      </div>
  );
};

const NoteSOLPlayer = () => {
  const [frequency, setFrequency] = useState(392.00); // Frequência inicial (nota A4)
  const audioContextRef = useRef(null);
  const oscillatorRef = useRef(null);

  const playNote = (freq) => {
      if (audioContextRef.current === null) {
          audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
      }
      const audioCtx = audioContextRef.current;

      if (oscillatorRef.current) {
          oscillatorRef.current.stop();
      }

      const oscillator = audioCtx.createOscillator();
      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(freq, audioCtx.currentTime);
      oscillator.connect(audioCtx.destination);
      oscillator.start();
      oscillatorRef.current = oscillator;
  };

  const stopNote = () => {
      if (oscillatorRef.current) {
          oscillatorRef.current.stop();
          oscillatorRef.current = null;
      }
  };

  const increaseHalfStep = () => {
      const newFrequency = frequency * Math.pow(2, 1/12); // Aumenta a frequência em meio tom
      setFrequency(newFrequency);
  };

  const decreaseHalfStep = () => {
    const newFrequency = frequency / Math.pow(2, 1/12); // Diminui a frequência em meio tom
    setFrequency(newFrequency);
};

  return (
      <div>
          <h1>Note Player</h1>
          <p>Current Frequency: {frequency.toFixed(2)} Hz</p>
          <Fab style={{width: '130px', height: '130px', backgroundColor: 'black', color: 'cyan'}} onMouseDown={() => playNote(frequency)} onMouseUp={stopNote}>
            Start
          </Fab>
          <Button style={{backgroundColor: 'gold', color: 'green'}} onClick={increaseHalfStep}>
            Increase by Half Step ⬆️ #
          </Button>
          <Button style={{backgroundColor: 'gold', color: 'green'}} onClick={decreaseHalfStep}>
            Decrease by Half Step ⬇️ b
          </Button>
      </div>
  );
};

const NoteSIPlayer = () => {
  const [frequency, setFrequency] = useState(493.88); // Frequência inicial (nota A4)
  const audioContextRef = useRef(null);
  const oscillatorRef = useRef(null);

  const playNote = (freq) => {
      if (audioContextRef.current === null) {
          audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
      }
      const audioCtx = audioContextRef.current;

      if (oscillatorRef.current) {
          oscillatorRef.current.stop();
      }

      const oscillator = audioCtx.createOscillator();
      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(freq, audioCtx.currentTime);
      oscillator.connect(audioCtx.destination);
      oscillator.start();
      oscillatorRef.current = oscillator;
  };

  const stopNote = () => {
      if (oscillatorRef.current) {
          oscillatorRef.current.stop();
          oscillatorRef.current = null;
      }
  };

  const increaseHalfStep = () => {
      const newFrequency = frequency * Math.pow(2, 1/12); // Aumenta a frequência em meio tom
      setFrequency(newFrequency);
  };

  const decreaseHalfStep = () => {
    const newFrequency = frequency / Math.pow(2, 1/12); // Diminui a frequência em meio tom
    setFrequency(newFrequency);
};

  return (
      <div>
          <h1>Note Player</h1>
          <p>Current Frequency: {frequency.toFixed(2)} Hz</p>
          <Fab style={{width: '130px', height: '130px', backgroundColor: 'black', color: 'cyan'}} onMouseDown={() => playNote(frequency)} onMouseUp={stopNote}>
            Start
          </Fab>
          <Button style={{backgroundColor: 'gold', color: 'green'}} onClick={increaseHalfStep}>
            Increase by Half Step ⬆️ #
          </Button>
          <Button style={{backgroundColor: 'gold', color: 'green'}} onClick={decreaseHalfStep}>
            Decrease by Half Step ⬇️ b
          </Button>
      </div>
  );
};

const NoteMIPlayer = () => {
  const [frequency, setFrequency] = useState(659.26); // Frequência inicial (nota A4)
  const audioContextRef = useRef(null);
  const oscillatorRef = useRef(null);

  const playNote = (freq) => {
      if (audioContextRef.current === null) {
          audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
      }
      const audioCtx = audioContextRef.current;

      if (oscillatorRef.current) {
          oscillatorRef.current.stop();
      }

      const oscillator = audioCtx.createOscillator();
      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(freq, audioCtx.currentTime);
      oscillator.connect(audioCtx.destination);
      oscillator.start();
      oscillatorRef.current = oscillator;
  };

  const stopNote = () => {
      if (oscillatorRef.current) {
          oscillatorRef.current.stop();
          oscillatorRef.current = null;
      }
  };

  const increaseHalfStep = () => {
      const newFrequency = frequency * Math.pow(2, 1/12); // Aumenta a frequência em meio tom
      setFrequency(newFrequency);
  };

  const decreaseHalfStep = () => {
    const newFrequency = frequency / Math.pow(2, 1/12); // Diminui a frequência em meio tom
    setFrequency(newFrequency);
};

  return (
      <div>
          <h1>Note Player</h1>
          <p>Current Frequency: {frequency.toFixed(2)} Hz</p>
          <Fab style={{width: '130px', height: '130px', backgroundColor: 'black', color: 'cyan'}} onMouseDown={() => playNote(frequency)} onMouseUp={stopNote}>
              Start
          </Fab>
          <Button style={{backgroundColor: 'gold', color: 'green'}} onClick={increaseHalfStep}>
              Increase by Half Step ⬆️ #
          </Button>
          <Button style={{backgroundColor: 'gold', color: 'green'}} onClick={decreaseHalfStep}>
              Decrease by Half Step ⬇️ b
          </Button>
      </div>
  );
};

const NoteFÁPlayer = () => {
  const [frequency, setFrequency] = useState(349.23); // Frequência inicial (nota A4)
  const audioContextRef = useRef(null);
  const oscillatorRef = useRef(null);

  const playNote = (freq) => {
      if (audioContextRef.current === null) {
          audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
      }
      const audioCtx = audioContextRef.current;

      if (oscillatorRef.current) {
          oscillatorRef.current.stop();
      }

      const oscillator = audioCtx.createOscillator();
      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(freq, audioCtx.currentTime);
      oscillator.connect(audioCtx.destination);
      oscillator.start();
      oscillatorRef.current = oscillator;
  };

  const stopNote = () => {
      if (oscillatorRef.current) {
          oscillatorRef.current.stop();
          oscillatorRef.current = null;
      }
  };

  const increaseHalfStep = () => {
      const newFrequency = frequency * Math.pow(2, 1/12); // Aumenta a frequência em meio tom
      setFrequency(newFrequency);
  };

  const decreaseHalfStep = () => {
    const newFrequency = frequency / Math.pow(2, 1/12); // Diminui a frequência em meio tom
    setFrequency(newFrequency);
};

  return (
      <div>
          <h1>Note Player</h1>
          <p>Current Frequency: {frequency.toFixed(2)} Hz</p>
          <Fab style={{width: '130px', height: '130px', backgroundColor: 'black', color: 'cyan'}} onMouseDown={() => playNote(frequency)} onMouseUp={stopNote}>
            Start
          </Fab>
          <Button style={{backgroundColor: 'gold', color: 'green'}} onClick={increaseHalfStep}>
            Increase by Half Step ⬆️ #
          </Button>
          <Button style={{backgroundColor: 'gold', color: 'green'}} onClick={decreaseHalfStep}>
            Decrease by Half Step ⬇️ b
          </Button>
      </div>
  );
};

const NoteDOPlayer = () => {
  const [frequency, setFrequency] = useState(261.63 ); // Frequência inicial (nota A4)
  const audioContextRef = useRef(null);
  const oscillatorRef = useRef(null);

  const playNote = (freq) => {
      if (audioContextRef.current === null) {
          audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
      }
      const audioCtx = audioContextRef.current;

      if (oscillatorRef.current) {
          oscillatorRef.current.stop();
      }

      const oscillator = audioCtx.createOscillator();
      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(freq, audioCtx.currentTime);
      oscillator.connect(audioCtx.destination);
      oscillator.start();
      oscillatorRef.current = oscillator;
  };

  const stopNote = () => {
      if (oscillatorRef.current) {
          oscillatorRef.current.stop();
          oscillatorRef.current = null;
      }
  };

  const increaseHalfStep = () => {
      const newFrequency = frequency * Math.pow(2, 1/12); // Aumenta a frequência em meio tom
      setFrequency(newFrequency);
  };

  const decreaseHalfStep = () => {
    const newFrequency = frequency / Math.pow(2, 1/12); // Diminui a frequência em meio tom
    setFrequency(newFrequency);
};

  return (
      <div>
          <h1>Note Player</h1>
          <p>Current Frequency: {frequency.toFixed(2)} Hz</p>
          <Fab style={{width: '130px', height: '130px', backgroundColor: 'black', color: 'cyan'}} onMouseDown={() => playNote(frequency)} onMouseUp={stopNote}>
            Start
          </Fab>
          <Button style={{backgroundColor: 'gold', color: 'green'}} onClick={increaseHalfStep}>
            Increase by Half Step ⬆️ #
          </Button>
          <Button style={{backgroundColor: 'gold', color: 'green'}} onClick={decreaseHalfStep}>
            Decrease by Half Step ⬇️ b
          </Button>
      </div>
  );
};

//Heighter of the other panel

const NoteUpFÁPlayer = () => {
  const [frequency, setFrequency] = useState(698.46); // Frequência inicial (nota A4)
  const audioContextRef = useRef(null);
  const oscillatorRef = useRef(null);

  const playNote = (freq) => {
      if (audioContextRef.current === null) {
          audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
      }
      const audioCtx = audioContextRef.current;

      if (oscillatorRef.current) {
          oscillatorRef.current.stop();
      }

      const oscillator = audioCtx.createOscillator();
      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(freq, audioCtx.currentTime);
      oscillator.connect(audioCtx.destination);
      oscillator.start();
      oscillatorRef.current = oscillator;
  };

  const stopNote = () => {
      if (oscillatorRef.current) {
          oscillatorRef.current.stop();
          oscillatorRef.current = null;
      }
  };

  const increaseHalfStep = () => {
      const newFrequency = frequency * Math.pow(2, 1/12); // Aumenta a frequência em meio tom
      setFrequency(newFrequency);
  };

  const decreaseHalfStep = () => {
    const newFrequency = frequency / Math.pow(2, 1/12); // Diminui a frequência em meio tom
    setFrequency(newFrequency);
};

  return (
      <div>
          <h1>Note Player</h1>
          <p>Current Frequency: {frequency.toFixed(2)} Hz</p>
          <Fab style={{width: '130px', height: '130px', backgroundColor: 'black', color: 'cyan'}} onMouseDown={() => playNote(frequency)} onMouseUp={stopNote}>
            Start
          </Fab>
          <Button style={{backgroundColor: 'gold', color: 'green'}} onClick={increaseHalfStep}>
            Increase by Half Step ⬆️ #
          </Button>
          <Button style={{backgroundColor: 'gold', color: 'green'}} onClick={decreaseHalfStep}>
            Decrease by Half Step ⬇️ b
          </Button>
      </div>
  );
};

const NoteLÁPlayer = () => {
  const [frequency, setFrequency] = useState(440.00); // Frequência inicial (nota A4)
  const audioContextRef = useRef(null);
  const oscillatorRef = useRef(null);

  const playNote = (freq) => {
      if (audioContextRef.current === null) {
          audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
      }
      const audioCtx = audioContextRef.current;

      if (oscillatorRef.current) {
          oscillatorRef.current.stop();
      }

      const oscillator = audioCtx.createOscillator();
      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(freq, audioCtx.currentTime);
      oscillator.connect(audioCtx.destination);
      oscillator.start();
      oscillatorRef.current = oscillator;
  };

  const stopNote = () => {
      if (oscillatorRef.current) {
          oscillatorRef.current.stop();
          oscillatorRef.current = null;
      }
  };

  const increaseHalfStep = () => {
      const newFrequency = frequency * Math.pow(2, 1/12); // Aumenta a frequência em meio tom
      setFrequency(newFrequency);
  };

  const decreaseHalfStep = () => {
    const newFrequency = frequency / Math.pow(2, 1/12); // Diminui a frequência em meio tom
    setFrequency(newFrequency);
};

  return (
      <div>
          <h1>Note Player</h1>
          <p>Current Frequency: {frequency.toFixed(2)} Hz</p>
          <Fab style={{width: '130px', height: '130px', backgroundColor: 'black', color: 'cyan'}} onMouseDown={() => playNote(frequency)} onMouseUp={stopNote}>
            Start
          </Fab>
          <Button style={{backgroundColor: 'gold', color: 'green'}} onClick={increaseHalfStep}>
            Increase by Half Step ⬆️ #
          </Button>
          <Button style={{backgroundColor: 'gold', color: 'green'}} onClick={decreaseHalfStep}>
            Decrease by Half Step ⬇️ b
          </Button>
      </div>
  );
};

const NoteRÉPlayer = () => {
  const [frequency, setFrequency] = useState(587.33); // Frequência inicial (nota A4)
  const audioContextRef = useRef(null);
  const oscillatorRef = useRef(null);

  const playNote = (freq) => {
      if (audioContextRef.current === null) {
          audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
      }
      const audioCtx = audioContextRef.current;

      if (oscillatorRef.current) {
          oscillatorRef.current.stop();
      }

      const oscillator = audioCtx.createOscillator();
      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(freq, audioCtx.currentTime);
      oscillator.connect(audioCtx.destination);
      oscillator.start();
      oscillatorRef.current = oscillator;
  };

  const stopNote = () => {
      if (oscillatorRef.current) {
          oscillatorRef.current.stop();
          oscillatorRef.current = null;
      }
  };

  const increaseHalfStep = () => {
      const newFrequency = frequency * Math.pow(2, 1/12); // Aumenta a frequência em meio tom
      setFrequency(newFrequency);
  };

  const decreaseHalfStep = () => {
    const newFrequency = frequency / Math.pow(2, 1/12); // Diminui a frequência em meio tom
    setFrequency(newFrequency);
};

  return (
      <div>
          <h1>Note Player</h1>
          <p>Current Frequency: {frequency.toFixed(2)} Hz</p>
          <Fab style={{width: '130px', height: '130px', backgroundColor: 'black', color: 'cyan'}} onMouseDown={() => playNote(frequency)} onMouseUp={stopNote}>
            Start
          </Fab>
          <Button style={{backgroundColor: 'gold', color: 'green'}} onClick={increaseHalfStep}>
            Increase by Half Step ⬆️ #
          </Button>
          <Button style={{backgroundColor: 'gold', color: 'green'}} onClick={decreaseHalfStep}>
            Decrease by Half Step ⬇️ b
          </Button>
      </div>
  );
};

const NoteMINaturalPlayer = () => {
  const [frequency, setFrequency] = useState(329.63); // Frequência inicial (nota A4)
  const audioContextRef = useRef(null);
  const oscillatorRef = useRef(null);

  const playNote = (freq) => {
      if (audioContextRef.current === null) {
          audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
      }
      const audioCtx = audioContextRef.current;

      if (oscillatorRef.current) {
          oscillatorRef.current.stop();
      }

      const oscillator = audioCtx.createOscillator();
      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(freq, audioCtx.currentTime);
      oscillator.connect(audioCtx.destination);
      oscillator.start();
      oscillatorRef.current = oscillator;
  };

  const stopNote = () => {
      if (oscillatorRef.current) {
          oscillatorRef.current.stop();
          oscillatorRef.current = null;
      }
  };

  const increaseHalfStep = () => {
      const newFrequency = frequency * Math.pow(2, 1/12); // Aumenta a frequência em meio tom
      setFrequency(newFrequency);
  };

  const decreaseHalfStep = () => {
    const newFrequency = frequency / Math.pow(2, 1/12); // Diminui a frequência em meio tom
    setFrequency(newFrequency);
};

  return (
      <div>
          <h1>Note Player</h1>
          <p>Current Frequency: {frequency.toFixed(2)} Hz</p>
          <Fab style={{width: '130px', height: '130px', backgroundColor: 'black', color: 'cyan'}} onMouseDown={() => playNote(frequency)} onMouseUp={stopNote}>
            Start
          </Fab>
          <Button style={{backgroundColor: 'gold', color: 'green'}} onClick={increaseHalfStep}>
            Increase by Half Step ⬆️ #
          </Button>
          <Button style={{backgroundColor: 'gold', color: 'green'}} onClick={decreaseHalfStep}>
            Decrease by Half Step ⬇️ b
          </Button>
      </div>
  );
};

export default function ClaveStudier({ boxes }){
  const stilous = {
    modalOverlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
    },
    modal: {
      backgroundColor: 'lightBlue',
      padding: '20px',
      borderRadius: '15px',
      boxShadow: '0 2px 10px rgba(0, 0, 5px, 3px)',
      position: 'fixed',
      color: 'black',
      fontFamily: 'sant-serif',
      letterSpacing: '4px'
    },
    closeButton: {
      position: 'absolute',
      top: '10px',
      right: '10px',
      backGround: 'none',
      border: 'none',
      fontSize: '20px',
      cursor: 'pointer',
    }
  };
const Modal = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null;

  return (
      <div style={stilous.modalOverlay}>
          <div style={stilous.modal}>
              <Button style={stilous.closeButton} onClick={onClose}>X</Button>
              {children}
          </div>
      </div>
  );
};

//Função de abertura do principal modal
const [isModalVisiblePrinc, setModalVisiblePrinc] = useState(false);
const [opendModalSecPrinc, setOpenedModalSecPrinc ] =useState(false);
const [opnTercModalPrinc, setOpnTercModalPrinc] = useState(false);

const openModal1 = () => {
    setModalVisiblePrinc(true);
};
const closeModal = () => {
  setModalVisiblePrinc(false);
};

const abrirSecModal = () => {
  setOpenedModalSecPrinc(true);
};
const fecharSecModal = () => {
  setOpenedModalSecPrinc(false);
};

const openiTercModal = () => {
  setOpnTercModalPrinc(true);
};
const closiTercModal = () => {
  setOpnTercModalPrinc(false);
};

//Função para abrir o modal do sustenido

const [aberMod, setAbertMod] = useState(false);
const [opMod2, setOpMod2] = useState(false);
const [modalVisil3, setModalVisi3] = useState(false);
const [modQuart, setModQuart] = useState(false);
const abertoMod = () => {
  setAbertMod(true);
};
const closiMod = () => {
  setAbertMod(false);
}


//Modal de abertura do segundo modal
const openModal2 = () => {
  setOpMod2(true);
};
const closeMod2 = () => {
  setOpMod2(false);
}

//Terça função para abrir o terceiro modal
const openModal3 = () => {
  setModalVisi3(true);
};
const closerModal3 = () => {
  setModalVisi3(false);
};

//Quarta função para abrir e fechar o quarto modal
const opendModQuart = () => {
  setModQuart(true);
}
const Closily4Modal = () => {
  setModQuart(false);
};

//Consts e funcções do outro pentagrama

const [fiveLine, setFiveLine] = useState(false);
const [quartLine, setQuartLine] = useState(false);
const [secSpace, setSecSpace] = useState(false);
const [firstLine, setFirstLine] = useState(false);

const openFiveLine = () => {
  setFiveLine(true);
};
const closerlyFiveLine = () => {
  setFiveLine(false);
};

const openQuartLine = () => {
  setQuartLine(true);
};
const closeQuartLine = () => {
  setQuartLine(false);
};

const openSecSpace = () => {
  setSecSpace(true);
};
const closeSecSpace = () => {
  setSecSpace(false);
};

const openFirstLine = () => {
  setFirstLine(true);
};
const closeFirstLine = () => {
  setFirstLine(false);
};

//Const e funções das notas adicionais!!
const [doSegLine, setDoSegLine] = useState(false);
const [miFiveLine, setMiFiveLine] = useState(false);
const [siTercLine, setSiTercLine] = useState(false);
const [faSecSpace, setFaSecSpace] = useState(false);


const openSegLine = () => {
  setDoSegLine(true);
};
const closeSegLine = () => {
  setDoSegLine(false);
};

const openFiveLiner = () => {
  setMiFiveLine(true);
};
const closeFiveLine = () => {
  setMiFiveLine(false);
};

const openTercLine = () => {
  setSiTercLine(true);
};
const closeTercLine = () => {
  setSiTercLine(false);
};

const openSecSpacer = () => {
  setFaSecSpace(true);
};
const closeSpace = () => {
  setFaSecSpace(false);
};

//Funções e consts para abrir o componente da clave de fá

const [notSi, setNoteSi] = useState(false);
const [noteMi, setNoteMi] = useState(false);
const [noteLa, setNoteLa] = useState(false);

const openNotSI = () => {
  setNoteSi(true);
};
const closeNotSI = () => {
  setNoteSi(false);
};

const openNotMi = () => {
  setNoteMi(true);
};
const closeNotMi = () => {
  setNoteMi(false);
};

const openNotLA = () => {
  setNoteLa(true);
};
const closeNoteLA = () => {
  setNoteLa(false);
};

//Funções e consts para abrir a clave DO

const [openedDO_SI, setOpenDO_SI] = useState(false);
const [openedDO_RE, setOpenDO_RE] = useState(false);
const [openedDO_LA, setOpenDO_LA] = useState(false);
const [openedDO_FA, setOpenDO_FA] = useState(false);

const openModal_DO_SI = () => {
  setOpenDO_SI(true);
};
const closeModal_DO_SI = () => {
  setOpenDO_SI(false);
};

const openModal_DO_RE = () => {
  setOpenDO_RE(true);
};
const closeModal_DO_RE = () => {
  setOpenDO_RE(false);
};


const openModal_DO_LA = () => {
  setOpenDO_LA(true);
};
const closeModal_DO_LA = () => {
  setOpenDO_LA(false);
};

const openModal_DO_FA = () => {
  setOpenDO_FA(true);
};
const closeModal_DO_FA = () => {
  setOpenDO_FA(false);
};

//Função e consts para abrir modais da clave de Dó explicativo dos # b etc

const [openSustenido, setOpenSustenido] = useState(false);
const [openBemol, setOpenBemol] = useState(false);
const [openBequadro, setOpenBequadro] = useState(false);
const [openClaveDO, setOpenClaveDO] = useState(false);

const openDO_Clave = () => {
  setOpenClaveDO(true);
};
const closeDO_Clave = () => {
  setOpenClaveDO(false);
};

const openSustenidoMod = () => {
  setOpenSustenido(true);
};
const closeSustenidoModal = () => {
  setOpenSustenido(false);
};

const openBemolMod = () => {
  setOpenBemol(true);
};
const closeBemolMob = () => {
  setOpenBemol(false);
};

const openBequadroMod = () => {
  setOpenBequadro(true);
};
const closeBequadroMod = () => {
  setOpenBequadro(false);
};

    const somaSeminimas = [
      <Card style={{backgroundColor: 'gold', color: 'blue'}}>
        <img style={{width: '350px'}} src='https://i.pinimg.com/originals/d9/6f/15/d96f15daead4fe32c8ffd9be754960c1.jpg' alt='SOLClave' value='SOL'/>
        <Grid container spacing={12} style={{paddingLeft: '130px'}}>
          <Button style={{backgroundColor: 'purple', color: 'cyan', fontSize: '20px', borderRadius: '30px', width: '25px', fontFamily: 'sant-serif'}} onClick={abertoMod}>#</Button>
          <Modal isVisible={aberMod} onClose={closiMod}>
            <div>
              <h1 style={{fontSize: '50px'}}>#</h1><p>Sustenido</p>
              <h1>Explaining about this symbol, the pentagram has two types to write the symbol in the music writing, likely often after of the armor of clave</h1>
              <img style={{width: '130px'}} src='https://th.bing.com/th/id/R.bc5474295170073696dd234e8f68a9ec?rik=Lk%2b4aMxIJo%2fAhg&pid=ImgRaw&r=0' alt='#'/>
              <Grid container spacing={13} style={{paddingLeft: '250px'}}>
                <h3>This element will increase a sound half on the note, this will be positioned back of the figure like: <p style={{fontSize: '20px', color: 'blue'}}>♯♩</p>like this form at side ---</h3>
                <Grid container spacing={8} style={{paddingLeft: '390px'}}>
                  <img style={{width: '200px'}} src='https://i1.wp.com/upload.wikimedia.org/wikipedia/commons/3/30/C_sharp.png' alt='sustenidoImg'/>
                </Grid>
              </Grid>
              <Grid container spacing={23} style={{paddingLeft: '900px'}}>
                <h3 style={{color: 'blue', backgroundColor: 'cyan', borderRadius: '15px'}}>The armor of clave that appears at the first image of ths block represent all the notes that this symbol can to Alterate, and all the notes during the all the pentagram can to be to change the height for a half time up, and the notes that is freedom upper mixed in the pentagram that receive this symbol will be incresed a half time up to this one!</h3>
              </Grid>
              <br/>
            </div>
          </Modal>
        </Grid>
        <Grid container spacing={0} style={{paddingLeft: '45px'}}>
          <Button style={{backgroundColor: 'cyan', color: 'purple', fontSize: '20px', borderRadius: '30px', width: '25px', fontFamily: 'sant-serif'}} onClick={openModal2}>b</Button>
          <Modal isVisible={opMod2} onClose={closeMod2}>
            <h1 style={{fontSize: '40px'}}>b</h1><p>bemol</p>
            <h2>Explaining about this symbol at the pentagram, this will appear after the clave, often
              <img style={{width: '200px'}} src='https://th.bing.com/th/id/OIP.P8p8KP4OIoEdozVDUeXiFwAAAA?rs=1&pid=ImgDetMain' alt='bemolSymbol'/>
            </h2><br/>
            <h3>
              This symbol appear sometimes during the whole music, behind other free note!
              <br/>
              As the notes that must to receive any change to be alterated your height, this symbol will appear behind this note, take a look at the image below!
              <br/>
              <center>
                <img src='https://th.bing.com/th/id/OIP.7rMgAPzIfoVdVUCg1ujkTgHaBv?rs=1&pid=ImgDetMain' alt='symbolBemol'/>
              </center>
              <br/>
              As you are playing the music, at the notes that receive the symbol (b), their height will be alterated decreases half time to down!
            </h3>
          </Modal>
        </Grid>
        <Grid container spacing={3.5} style={{paddingLeft: '38px'}}>
          <Button style={{backgroundColor: 'black', color: 'cyan', fontSize: '17px', borderRadius: '30px', width: '25px'}} onClick={openModal3}>𝄞</Button>
          <Modal isVisible={modalVisil3} onClose={closerModal3}>
            <h1 style={{color: 'white', fontFamily: 'fantasy', fontSize: '60px', backgroundColor: 'darkcyan', borderRadius: '45px'}}>𝄞</h1>
            <h1>This figure will show for the readership, that the height of the whole notes around the pentagram will have a height begining from the second line, the second line will receive the name of SUN!
            <img style={{width: '170px'}} src='https://th.bing.com/th/id/R.b3a408bc3386bf9746c65a678de59bbc?rik=lX3pcgi2uhranw&pid=ImgRaw&r=0' alt='SUNPent'/>
            </h1>
            <Divider style={{borderColor: 'blue'}}/>
          </Modal>
        </Grid>
        <Grid container spacing={8} style={{paddingLeft: '130px'}}>
          <Button style={{backgroundColor: 'gold', color: 'blue', fontSize: '20px', borderRadius: '30px', width: '25px'}} onClick={opendModQuart}>♮</Button>
          <Modal isVisible={modQuart} onClose={Closily4Modal}>
            <h1 style={{fontFamily: 'sant-serif', fontSize: '60px'}}>♮</h1>
            <h4>Bequadro</h4>
            <h1>Explan about this object at the pentagram, this will appear after the clave, often <img style={{width: '100px'}} src='https://th.bing.com/th/id/R.5dacc6335c6ad17f4909c83735593abc?rik=wIPQ2k0ldYsgiQ&riu=http%3a%2f%2fantoniopisacane.com%2fwp-content%2fuploads%2f2018%2f08%2fBequadro-01.png&ehk=NSJdYfL5u4d1aynwT45RbpjCcyIM11a50LFyw%2bHR4gs%3d&risl=&pid=ImgRaw&r=0' alt='bequadroSymbol'/>
            </h1>
            <Grid container spacing={20} style={{paddingLeft: '530px'}}>
              <h3>This symbol will make the effect of the all over the symbols replaced at the initial on the key clave disappear at this note, if this note was a alterated note!</h3>
            </Grid>
            <br/>
            <h4>This image below show to you how this symbol works better!</h4>
            <img style={{borderRadius: '50px', margin: '40px'}} src='https://pa1.narvii.com/6365/c1893d0b71716b7ee573b5aeb86e0462c28746f6_hq.gif' alt='bequadroquebrando'/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <h4>Take notice at this symbol that it make a transformation at the choice note that it is behind, the alteration at the note that received the # symbol before, have been received an other alteration to the natural state!</h4>
          </Modal>
        </Grid>
        <Grid container spacing={2} style={{paddingLeft: '130px'}}>
        <Button style={{backgroundColor: 'black', color: 'cyan', fontSize: '10px', borderRadius: '30px', width: '50px', height: '20px', fontFamily: 'fantasy', letterSpacing: '3px'}} onClick={openSegLine}>#♩Dó</Button>
          <Modal isVisible={doSegLine} onClose={closeSegLine}>
            <h1># ♩</h1><p> DÓ Sustenido</p>
            <Card>
              <center>
                <h1>This note receive tha symbol #</h1>
                <br/>
                <h3>Your value is being alterated because this symbol is appearing behind it!</h3>
                <h3>All the notes that receive this symbol # one time behind it, this will increase half time on this note!</h3>
                <NoteDOPlayer/>
              </center>
            </Card>
          </Modal>
        </Grid>
          <Grid container spacing={4} style={{paddingLeft: '200px'}}>
          <Button style={{backgroundColor: 'black', color: 'cyan', fontSize: '10px', borderRadius: '30px', width: '50px', height: '20px', fontFamily: 'fantasy', letterSpacing: '3px'}} onClick={openFiveLiner}>b♩Mi</Button>
            <Modal isVisible={miFiveLine} onClose={closeFiveLine}>
            <h1>b ♩</h1><p> MI Bemol</p>
            <Card>
              <center>
                <h1>This note receive the symbol b</h1>
                <br/>
                <h3>Your value is being alterated because this symbol is appearing behind it!</h3>
                <h3>All the notes that receive this symbol b one time behind it, this will decrease half time on this note!</h3>
                <NoteMIPlayer/>
              </center>
            </Card>
            </Modal>
          </Grid>
          <Grid container spacing={0.5} style={{paddingLeft: '220px'}}>
          <Button style={{backgroundColor: 'black', color: 'cyan', fontSize: '10px', borderRadius: '30px', width: '50px', height: '20px', fontFamily: 'fantasy', letterSpacing: '3px'}} onClick={openTercLine}>b♩Si</Button>
            <Modal isVisible={siTercLine} onClose={closeTercLine}>
            <h1>b ♩</h1><p> SI Bemol</p>
            <Grid container spacing={15} style={{paddingLeft: '350px'}}>
              <img style={{width: '90px'}} src='https://th.bing.com/th/id/R.937c29ff3adeaca07bb46181de5070a5?rik=JSVy%2bedVM%2fKTMw&pid=ImgRaw&r=0' alt='SIBemol'/>
            </Grid>
            <Card><br/><br/>
              <center>
                <h1>This note receive the symbol b</h1>
                <br/>
                <h3>Your value is being alterated because this symbol is appearing behind it!</h3>
                <h3>All the notes that receive this symbol b one time behind it, this will decrease half time on this note!</h3>
                <NoteSIPlayer/>
              </center>
            </Card>
            </Modal>
          </Grid>
          <Grid container spacing={0} style={{paddingLeft: '260px'}}>
          <Button style={{backgroundColor: 'black', color: 'cyan', fontSize: '10px', borderRadius: '30px', width: '50px', height: '20px', fontFamily: 'fantasy', letterSpacing: '3px'}} onClick={openSecSpacer}>#♩Fá</Button>
            <Modal isVisible={faSecSpace} onClose={closeSpace}>
            <h1># ♩</h1><p> FÁ Sustenido</p>
            <Card>
              <center>
                <h1>This note receive the symbol b</h1>
                <br/>
                <h3>Your value is being alterated because this symbol is appearing behind it!</h3>
                <h3>All the notes that receive this symbol b one time behind it, this will decrease half time on this note!</h3>
                <NoteFÁPlayer/>
              </center>
            </Card>
            </Modal>
          </Grid>
      </Card>
    ];
    const tolltipForm = [<div style={{backgroundColor: 'black', color: 'gold', margin: '-35px'}}><h3>This is a completed formulary to understand the followed notes</h3></div>]

    const notesSpaces = [
      <Card style={{backgroundColor: 'gold', color: 'blue'}}>
        <center>
          <Tooltip title={tolltipForm} position="top" trigger="mouseenter">
            <h1 style={{fontSize: '16px'}}>Followed notes behavior!!</h1>
          </Tooltip>
        </center>
        <img style={{width: '350px'}} src='https://i.pinimg.com/originals/d9/6f/15/d96f15daead4fe32c8ffd9be754960c1.jpg' alt='SOLClave' value='SOL'/>
        <Grid container spacing={12} style={{paddingLeft: '130px'}}>
          <Button style={{backgroundColor: 'purple', color: 'cyan', fontSize: '20px', borderRadius: '30px', width: '25px', fontFamily: 'sant-serif'}} onClick={abertoMod}>#</Button>
          <Modal isVisible={aberMod} onClose={closiMod}>
            <div>
              <h1 style={{fontSize: '50px'}}>#</h1><p>Sustenido</p>
              <h1>Explaining about this symbol, the pentagram has two types to write the symbol in the music writing, likely often after of the armor of clave</h1>
              <img style={{width: '130px'}} src='https://th.bing.com/th/id/R.bc5474295170073696dd234e8f68a9ec?rik=Lk%2b4aMxIJo%2fAhg&pid=ImgRaw&r=0' alt='#'/>
              <Grid container spacing={13} style={{paddingLeft: '250px'}}>
                <h3>This element will increase a sound half on the note, this will be positioned back of the figure like: <p style={{fontSize: '20px', color: 'blue'}}>♯♩</p>like this form at side ---</h3>
                <Grid container spacing={8} style={{paddingLeft: '390px'}}>
                  <img style={{width: '200px'}} src='https://i1.wp.com/upload.wikimedia.org/wikipedia/commons/3/30/C_sharp.png' alt='sustenidoImg'/>
                </Grid>
              </Grid>
              <Grid container spacing={23} style={{paddingLeft: '900px'}}>
                <h3 style={{color: 'blue', backgroundColor: 'cyan', borderRadius: '15px'}}>The armor of clave that appears at the first image of ths block represent all the notes that this symbol can to Alterate, and all the notes during the all the pentagram can to be to change the height for a half time up, and the notes that is freedom upper mixed in the pentagram that receive this symbol will be incresed a half time up to this one!</h3>
              </Grid>
              <br/>
            </div>
          </Modal>
        </Grid>
        <Grid container spacing={0} style={{paddingLeft: '45px'}}>
          <Button style={{backgroundColor: 'cyan', color: 'purple', fontSize: '20px', borderRadius: '30px', width: '25px', fontFamily: 'sant-serif'}} onClick={openModal2}>b</Button>
          <Modal isVisible={opMod2} onClose={closeMod2}>
            <h1 style={{fontSize: '40px'}}>b</h1><p>bemol</p>
            <h2>Explaining about this symbol at the pentagram, this will appear after the clave, often
              <img style={{width: '200px'}} src='https://th.bing.com/th/id/OIP.P8p8KP4OIoEdozVDUeXiFwAAAA?rs=1&pid=ImgDetMain' alt='bemolSymbol'/>
            </h2><br/>
            <h3>
              This symbol appear sometimes during the whole music, behind other free note!
              <br/>
              As the notes that must to receive any change to be alterated your height, this symbol will appear behind this note, take a look at the image below!
              <br/>
              <center>
                <img src='https://th.bing.com/th/id/OIP.7rMgAPzIfoVdVUCg1ujkTgHaBv?rs=1&pid=ImgDetMain' alt='symbolBemol'/>
              </center>
              <br/>
              As you are playing the music, at the notes that receive the symbol (b), their height will be alterated decreases half time to down!
            </h3>
          </Modal>
        </Grid>
        <Grid container spacing={3.5} style={{paddingLeft: '38px'}}>
          <Button style={{backgroundColor: 'black', color: 'cyan', fontSize: '17px', borderRadius: '30px', width: '25px'}} onClick={openModal3}>𝄞</Button>
          <Modal isVisible={modalVisil3} onClose={closerModal3}>
            <h1 style={{color: 'white', fontFamily: 'fantasy', fontSize: '60px', backgroundColor: 'darkcyan', borderRadius: '45px'}}>𝄞</h1>
            <h1>This figure will show for the readership, that the height of the whole notes around the pentagram will have a height begining from the second line, the second line will receive the name of SUN!
            <img style={{width: '170px'}} src='https://th.bing.com/th/id/OIP.JsDoDff1pt_kOuYHRO_qzAHaDt?rs=1&pid=ImgDetMain' alt='SUNPent'/>
            </h1>
            <Divider style={{borderColor: 'blue'}}/>
          </Modal>
        </Grid>
        <Grid container spacing={8} style={{paddingLeft: '130px'}}>
          <Button style={{backgroundColor: 'gold', color: 'blue', fontSize: '20px', borderRadius: '30px', width: '25px'}} onClick={opendModQuart}>♮</Button>
          <Modal isVisible={modQuart} onClose={Closily4Modal}>
            <h1 style={{fontFamily: 'sant-serif', fontSize: '60px'}}>♮</h1>
            <h4>Bequadro</h4>
            <h1>Explan about this object at the pentagram, this will appear after the clave, often <img style={{width: '100px'}} src='https://th.bing.com/th/id/R.5dacc6335c6ad17f4909c83735593abc?rik=wIPQ2k0ldYsgiQ&riu=http%3a%2f%2fantoniopisacane.com%2fwp-content%2fuploads%2f2018%2f08%2fBequadro-01.png&ehk=NSJdYfL5u4d1aynwT45RbpjCcyIM11a50LFyw%2bHR4gs%3d&risl=&pid=ImgRaw&r=0' alt='bequadroSymbol'/>
            </h1>
            <Grid container spacing={20} style={{paddingLeft: '530px'}}>
              <h3>This symbol will make the effect of the all over the symbols replaced at the initial on the key clave disappear at this note, if this note was a alterated note!</h3>
            </Grid>
            <br/>
            <h4>This image below show to you how this symbol works better!</h4>
            <img style={{borderRadius: '50px', margin: '40px'}} src='https://pa1.narvii.com/6365/c1893d0b71716b7ee573b5aeb86e0462c28746f6_hq.gif' alt='bequadroquebrando'/>
            <Grid container spacing={20} style={{paddingLeft: '800px'}}>
              <h4>Take notice at this symbol that it make a transformation at the choice note that it is behind, the alteration at the note that received the # symbol before, have been received an other alteration to the natural state!</h4>
            </Grid>
          </Modal>
          
        </Grid>
        <Grid container spacing={4} style={{paddingLeft: '130px'}}>
        <Button style={{backgroundColor: 'black', color: 'cyan', fontSize: '10px', borderRadius: '30px', width: '50px', height: '20px', fontFamily: 'fantasy', letterSpacing: '3px'}} onClick={openFiveLine}>♩FÁ</Button>
          <Modal isVisible={fiveLine} onClose={closerlyFiveLine}>
            <h1>♩</h1><p>FÁ</p>
            <Card>
              <center>
                <h1>Natural FÁ</h1>
                <br/>
                <h3>Your value is natural!</h3>
                <h3>This note if you increse a half height on the button below, you will see the magic, or to decrease on the button below you will see the note return to your natural state!</h3>
                <NoteUpFÁPlayer/>
              </center>
            </Card>
          </Modal>
        </Grid>
          <Grid container spacing={1} style={{paddingLeft: '160px'}}>
          <Button style={{backgroundColor: 'black', color: 'cyan', fontSize: '10px', borderRadius: '30px', width: '50px', height: '20px', fontFamily: 'fantasy', letterSpacing: '3px'}} onClick={openQuartLine}>♩RÉ</Button>
            <Modal isVisible={quartLine} onClose={closeQuartLine}>
            <h1>♩</h1><p>RÉ</p>
            <Card>
              <center>
                <h1>Natural RÉ</h1>
                <br/>
                <h3>This note is natural until this time!</h3>
                <h3>After you increase  or decrease height using the buttons below, you will see the magic!</h3>
                <NoteRÉPlayer/>
              </center>
            </Card>
            </Modal>
          </Grid>
          <Grid container spacing={0.3} style={{paddingLeft: '210px'}}>
          <Button style={{backgroundColor: 'black', color: 'cyan', fontSize: '10px', borderRadius: '30px', width: '50px', height: '20px', fontFamily: 'fantasy', letterSpacing: '3px'}} onClick={openSecSpace}>♩JÁ</Button>
            <Modal isVisible={secSpace} onClose={closeSecSpace}>
            <h1>♩</h1><p>LÁ</p>
            <Card><br/><br/>
              <center>
                <h1>Second Space is the natural height of this note</h1>
                <br/>
                <h3>Look that</h3>
                <h3>Increases or decreases note below on the button</h3>
                <NoteLÁPlayer/>
              </center>
            </Card>
            </Modal>
          </Grid>
          <Grid container spacing={0} style={{paddingLeft: '260px'}}>
          <Button style={{backgroundColor: 'black', color: 'cyan', fontSize: '10px', borderRadius: '30px', width: '50px', height: '20px', fontFamily: 'fantasy', letterSpacing: '3px'}} onClick={openFirstLine}>♩MI</Button>
            <Modal isVisible={firstLine} onClose={closeFirstLine}>
            <h1>♩</h1><p>MI</p>
            <Card>
              <center>
                <h1>Natural note! MI position</h1>
                <br/>
                <h3>This is the natural height of the note took</h3>
                <h3>Change the height of the note on the button below please!! Take a look at the magic forma to increse or decrease height</h3>
                <NoteMINaturalPlayer/>
              </center>
            </Card>
            </Modal>
          </Grid>
      </Card>
    ];

    //Painel da clave de fá
    const FáPainel = [
      <Card style={{backgroundColor: 'gold', color: 'blue'}}>
        <img style={{width: '350px'}} src='https://th.bing.com/th/id/OIP.Pyi5OjQyflNMNcDt8-uXlQHaDu?rs=1&pid=ImgDetMain' alt='FÁClave' value='FÁ'/>
        <Grid container spacing={21} style={{paddingLeft: '230px'}}>
          <Button style={{backgroundColor: 'purple', color: 'cyan', fontSize: '20px', borderRadius: '30px', width: '25px', fontFamily: 'sant-serif'}} onClick={abertoMod}>#</Button>
          <Modal isVisible={aberMod} onClose={closiMod}>
            <div>
              <h1 style={{fontSize: '50px'}}>#</h1><p>Sustenido</p>
              <h1>Explaining about this symbol, the pentagram has two types to write the symbol in the music writing, likely often after of the armor of clave</h1>
              <img style={{width: '130px'}} src='https://th.bing.com/th/id/R.bc5474295170073696dd234e8f68a9ec?rik=Lk%2b4aMxIJo%2fAhg&pid=ImgRaw&r=0' alt='#'/>
              <Grid container spacing={13} style={{paddingLeft: '250px'}}>
                <h3>This element will increase a sound half on the note, this will be positioned back of the figure like: <p style={{fontSize: '20px', color: 'blue'}}>♯♩</p>like this form at side ---</h3>
                <Grid container spacing={8} style={{paddingLeft: '390px'}}>
                  <img style={{width: '200px'}} src='https://i1.wp.com/upload.wikimedia.org/wikipedia/commons/3/30/C_sharp.png' alt='sustenidoImg'/>
                </Grid>
              </Grid>
              <Grid container spacing={23} style={{paddingLeft: '900px'}}>
                <h3 style={{color: 'blue', backgroundColor: 'cyan', borderRadius: '15px'}}>The armor of clave that appears at the first image of ths block represent all the notes that this symbol can to Alterate, and all the notes during the all the pentagram can to be to change the height for a half time up, and the notes that is freedom upper mixed in the pentagram that receive this symbol will be incresed a half time up to this one!</h3>
              </Grid>
              <br/>
            </div>
          </Modal>
        </Grid>
        <Grid container spacing={0} style={{paddingLeft: '66px'}}>
          <Button style={{backgroundColor: 'cyan', color: 'purple', fontSize: '20px', borderRadius: '30px', width: '25px', fontFamily: 'sant-serif'}} onClick={openModal2}>b</Button>
          <Modal isVisible={opMod2} onClose={closeMod2}>
            <h1 style={{fontSize: '40px'}}>b</h1><p>bemol</p>
            <h2>Explaining about this symbol at the pentagram, this will appear after the clave, often
              <img style={{width: '200px'}} src='https://th.bing.com/th/id/OIP.P8p8KP4OIoEdozVDUeXiFwAAAA?rs=1&pid=ImgDetMain' alt='bemolSymbol'/>
            </h2><br/>
            <h3>
              This symbol appear sometimes during the whole music, behind other free note!
              <br/>
              As the notes that must to receive any change to be alterated your height, this symbol will appear behind this note, take a look at the image below!
              <br/>
              <center>
                <img src='https://th.bing.com/th/id/OIP.7rMgAPzIfoVdVUCg1ujkTgHaBv?rs=1&pid=ImgDetMain' alt='symbolBemol'/>
              </center>
              <br/>
              As you are playing the music, at the notes that receive the symbol (b), their height will be alterated decreases half time to down!
            </h3>
          </Modal>
        </Grid>
        <Grid container spacing={4} style={{paddingLeft: '45px'}}>
          <Button style={{backgroundColor: 'black', color: 'cyan', fontSize: '17px', borderRadius: '30px', width: '25px'}} onClick={openModal3}>𝄞</Button>
          <Modal isVisible={modalVisil3} onClose={closerModal3}>
            <h1 style={{color: 'white', fontFamily: 'fantasy', fontSize: '60px', backgroundColor: 'darkcyan', borderRadius: '45px'}}>𝄞</h1>
            <h1>This figure will show for the readership, that the height of the whole notes around the pentagram will have a height begining from the second line, the second line will receive the name of SUN!
            <img style={{width: '170px'}} src='https://th.bing.com/th/id/OIP.JsDoDff1pt_kOuYHRO_qzAHaDt?rs=1&pid=ImgDetMain' alt='SUNPent'/>
            </h1>
            <Divider style={{borderColor: 'blue'}}/>
          </Modal>
        </Grid>
        <Grid container spacing={6} style={{paddingLeft: '140px'}}>
          <Button style={{backgroundColor: 'gold', color: 'blue', fontSize: '20px', borderRadius: '30px', width: '15px'}} onClick={opendModQuart}>♮</Button>
          <Modal isVisible={modQuart} onClose={Closily4Modal}>
            <h1 style={{fontFamily: 'sant-serif', fontSize: '60px'}}>♮</h1>
            <h4>Bequadro</h4>
            <h1>Explan about this object at the pentagram, this will appear after the clave, often <img style={{width: '100px'}} src='https://th.bing.com/th/id/R.5dacc6335c6ad17f4909c83735593abc?rik=wIPQ2k0ldYsgiQ&riu=http%3a%2f%2fantoniopisacane.com%2fwp-content%2fuploads%2f2018%2f08%2fBequadro-01.png&ehk=NSJdYfL5u4d1aynwT45RbpjCcyIM11a50LFyw%2bHR4gs%3d&risl=&pid=ImgRaw&r=0' alt='bequadroSymbol'/>
            </h1>
            <Grid container spacing={20} style={{paddingLeft: '530px'}}>
              <h3>This symbol will make the effect of the all over the symbols replaced at the initial on the key clave disappear at this note, if this note was a alterated note!</h3>
            </Grid>
            <br/>
            <h4>This image below show to you how this symbol works better!</h4>
            <img style={{borderRadius: '50px', margin: '40px'}} src='https://pa1.narvii.com/6365/c1893d0b71716b7ee573b5aeb86e0462c28746f6_hq.gif' alt='bequadroquebrando'/>
            <Grid container spacing={20} style={{paddingLeft: '800px'}}>
              <h4>Take notice at this symbol that it make a transformation at the choice note that it is behind, the alteration at the note that received the # symbol before, have been received an other alteration to the natural state!</h4>
            </Grid>
          </Modal>
        </Grid>
        <Grid container spacing={2} style={{paddingLeft: '150px'}}>
        <Button style={{backgroundColor: 'black', color: 'cyan', fontSize: '10px', borderRadius: '30px', width: '60px', height: '20px', fontFamily: 'fantasy', letterSpacing: '3px'}} onClick={openSegLine}>♩ SOL</Button>
          <Modal isVisible={doSegLine} onClose={closeSegLine}>
            <h1>♩</h1><p>SOL</p>
            <Card style={{backgroundColor: 'Highlight', color: 'cyan'}}>
              <center>
                <h1>This note is the height of the clave denomined!Second line!!</h1>
                <br/>
                <h3>This is the natural and normal hegith of this line note at this clave, different than other clave below!!</h3>
                <NoteSOLPlayer/>
              </center>
            </Card>
          </Modal>
        </Grid>
          <Grid container spacing={4} style={{paddingLeft: '230px'}}>
          <Button style={{backgroundColor: 'black', color: 'cyan', fontSize: '10px', borderRadius: '30px', width: '50px', height: '20px', fontFamily: 'fantasy', letterSpacing: '3px'}} onClick={openFiveLiner}>♩DÓ</Button>
            <Modal isVisible={miFiveLine} onClose={closeFiveLine}>
            <h1>♩</h1><p>DÓ</p>
            <Card style={{backgroundColor: 'purple', color: 'cyan'}}>
              <center>
                <h1>This is the natural height of the note at the clave SOL</h1>
                <h3>At the other clave this height will change to two notes above! Clicking at the button you increase half time per time</h3>
                <h4>At the button increase click by 12 times to hear the right height of this note DÓ, if you wann return the base height, click at the button decrease by 12 times too!!</h4>
                <NoteDOPlayer/>
              </center>
            </Card>
            </Modal>
          </Grid>
          <Grid container spacing={0.5} style={{paddingLeft: '250px'}}>
          <Button style={{backgroundColor: 'black', color: 'cyan', fontSize: '10px', borderRadius: '30px', width: '50px', height: '20px', fontFamily: 'fantasy', letterSpacing: '3px'}} onClick={openTercLine}>♩FÁ</Button>
            <Modal isVisible={siTercLine} onClose={closeTercLine}>
            <h1>♩</h1><p>FÁ</p>
            <Card><br/><br/>
              <center>
                <h1>Attention on this note!</h1>
                <h3>The height of this note will change two note above than this position either!</h3>
                <NoteFÁPlayer/>
              </center>
            </Card>
            </Modal>
          </Grid>
          
          <br/><br/><br/>
          

          <Grid container spacing={0.3} style={{paddingLeft: '80px'}}>
          <Button style={{backgroundColor: 'black', color: 'cyan', fontSize: '10px', borderRadius: '30px', width: '60px', height: '20px', fontFamily: 'fantasy', letterSpacing: '3px'}} onClick={openNotSI}>♩ SI</Button>
          <Modal isVisible={notSi} onClose={closeNotSI}>
            <h1>♩</h1><p>SI</p>
            <Card style={{backgroundColor: 'Highlight', color: 'cyan'}}>
              <center>
                <h1>This note is the height of the clave denomined!Second line!!</h1>
                <br/>
                <h3>This is the natural and normal hegith of this line note at this clave, different than other clave below!!</h3>
                <NoteSIFPlayer/>
              </center>
            </Card>
          </Modal>
          </Grid>

          <Grid container spacing={4} style={{paddingLeft: '190px'}}>
          <Button style={{backgroundColor: 'black', color: 'cyan', fontSize: '10px', borderRadius: '30px', width: '60px', height: '20px', fontFamily: 'fantasy', letterSpacing: '3px'}} onClick={openNotMi}>♩ MI</Button>
          <Modal isVisible={noteMi} onClose={closeNotMi}>
            <h1>♩</h1><p>MI</p>
            <Card style={{backgroundColor: 'Highlight', color: 'cyan'}}>
              <center>
                <h1>This note was alterated at two height times than the note sol from the back clave</h1>
                <br/>
                <h3>So.. this is the sense that the changer from the two claves means</h3>
                <NoteMIFPlayer/>
              </center>
            </Card>
          </Modal>
          </Grid>

          <Grid container spacing={0.3} style={{paddingLeft: '240px'}}>
          <Button style={{backgroundColor: 'black', color: 'cyan', fontSize: '10px', borderRadius: '30px', width: '60px', height: '20px', fontFamily: 'fantasy', letterSpacing: '3px'}} onClick={openNotLA}>♩ LÁ</Button>
          <Modal isVisible={noteLa} onClose={closeNoteLA}>
            <h1>♩</h1><p>LÁ</p>
            <Card style={{backgroundColor: 'Highlight', color: 'cyan'}}>
              <center>
                <h1>This note was alterated at two height times than the note sol from the back clave</h1>
                <br/>
                <h3>So.. this is the sense that the changer from the two claves means</h3>
                <NoteLAFPlayer/>
              </center>
            </Card>
          </Modal>
          </Grid>
      </Card>
    ];

    //painel da clave de DÓ

    const DÓPainel = [
      <Card style={{backgroundColor: 'gold', color: 'blue'}}>
        <img style={{width: '350px'}} src='https://i.pinimg.com/originals/d9/6f/15/d96f15daead4fe32c8ffd9be754960c1.jpg' alt='SOLClave' value='SOL'/>
        <Grid container spacing={12} style={{paddingLeft: '130px'}}>
          <Button style={{backgroundColor: 'purple', color: 'cyan', fontSize: '20px', borderRadius: '30px', width: '25px', fontFamily: 'sant-serif'}} onClick={openSustenidoMod}>#</Button>
          <Modal isVisible={openSustenido} onClose={closeSustenidoModal}>
            <div>
              <h1 style={{fontSize: '50px'}}>#</h1><p>Sustenido</p>
              <h1>Explaining about this symbol, the pentagram has two types to write the symbol in the music writing, likely often after of the armor of clave</h1>
              <img style={{width: '130px'}} src='https://th.bing.com/th/id/R.bc5474295170073696dd234e8f68a9ec?rik=Lk%2b4aMxIJo%2fAhg&pid=ImgRaw&r=0' alt='#'/>
              <Grid container spacing={13} style={{paddingLeft: '250px'}}>
                <h3>This element will increase a sound half on the note, this will be positioned back of the figure like: <p style={{fontSize: '20px', color: 'blue'}}>♯♩</p>like this form at side ---</h3>
                <Grid container spacing={8} style={{paddingLeft: '390px'}}>
                  <img style={{width: '200px'}} src='https://i1.wp.com/upload.wikimedia.org/wikipedia/commons/3/30/C_sharp.png' alt='sustenidoImg'/>
                </Grid>
              </Grid>
              <Grid container spacing={23} style={{paddingLeft: '900px'}}>
                <h3 style={{color: 'blue', backgroundColor: 'cyan', borderRadius: '15px'}}>The armor of clave that appears at the first image of ths block represent all the notes that this symbol can to Alterate, and all the notes during the all the pentagram can to be to change the height for a half time up, and the notes that is freedom upper mixed in the pentagram that receive this symbol will be incresed a half time up to this one!</h3>
              </Grid>
              <br/>
            </div>
          </Modal>
        </Grid>
        <Grid container spacing={0} style={{paddingLeft: '45px'}}>
          <Button style={{backgroundColor: 'cyan', color: 'purple', fontSize: '20px', borderRadius: '30px', width: '25px', fontFamily: 'sant-serif'}} onClick={openBemolMod}>b</Button>
          <Modal isVisible={openBemol} onClose={closeBemolMob}>
            <h1 style={{fontSize: '40px'}}>b</h1><p>bemol</p>
            <h2>Explaining about this symbol at the pentagram, this will appear after the clave, often
              <img style={{width: '200px'}} src='https://th.bing.com/th/id/OIP.P8p8KP4OIoEdozVDUeXiFwAAAA?rs=1&pid=ImgDetMain' alt='bemolSymbol'/>
            </h2><br/>
            <h3>
              This symbol appear sometimes during the whole music, behind other free note!
              <br/>
              As the notes that must to receive any change to be alterated your height, this symbol will appear behind this note, take a look at the image below!
              <br/>
              <center>
                <img src='https://th.bing.com/th/id/OIP.7rMgAPzIfoVdVUCg1ujkTgHaBv?rs=1&pid=ImgDetMain' alt='symbolBemol'/>
              </center>
              <br/>
              As you are playing the music, at the notes that receive the symbol (b), their height will be alterated decreases half time to down!
            </h3>
          </Modal>
        </Grid>
        <Grid container spacing={10} style={{paddingLeft: '60px'}}>
          <Button style={{backgroundColor: 'black', color: 'cyan', fontSize: '40px', borderRadius: '30px', width: '60px', height: '100px'}} onClick={openDO_Clave}>𝄡</Button>
          <Modal isVisible={openClaveDO} onClose={closeDO_Clave}>
            <h1 style={{color: 'white', fontFamily: 'fantasy', fontSize: '60px', backgroundColor: 'darkcyan', borderRadius: '45px'}}>𝄡</h1>
            <h1>This figure will show for the readership, that the height of the whole notes around the pentagram will have a height begining from the second line, the second line will receive the name of SUN!
            <img style={{width: '230px'}} src='https://www.escribircanciones.com.ar/images/teoriamusical/ClavesMusicales/Clave-de-do-3ra-en-el-pentagrama.png' alt='SUNPent'/>
            </h1>
            <Divider style={{borderColor: 'blue'}}/>
          </Modal>
        </Grid>
        <Grid container spacing={8} style={{paddingLeft: '130px'}}>
          <Button style={{backgroundColor: 'gold', color: 'blue', fontSize: '20px', borderRadius: '30px', width: '25px'}} onClick={openBequadroMod}>♮</Button>
          <Modal isVisible={openBequadro} onClose={closeBequadroMod}>
            <h1 style={{fontFamily: 'sant-serif', fontSize: '60px'}}>♮</h1>
            <h4>Bequadro</h4>
            <h1>Explan about this object at the pentagram, this will appear after the clave, often <img style={{width: '100px'}} src='https://th.bing.com/th/id/R.5dacc6335c6ad17f4909c83735593abc?rik=wIPQ2k0ldYsgiQ&riu=http%3a%2f%2fantoniopisacane.com%2fwp-content%2fuploads%2f2018%2f08%2fBequadro-01.png&ehk=NSJdYfL5u4d1aynwT45RbpjCcyIM11a50LFyw%2bHR4gs%3d&risl=&pid=ImgRaw&r=0' alt='bequadroSymbol'/>
            </h1>
            <Grid container spacing={20} style={{paddingLeft: '530px'}}>
              <h3>This symbol will make the effect of the all over the symbols replaced at the initial on the key clave disappear at this note, if this note was a alterated note!</h3>
            </Grid>
            <br/>
            <h4>This image below show to you how this symbol works better!</h4>
            <img style={{borderRadius: '50px', margin: '40px'}} src='https://pa1.narvii.com/6365/c1893d0b71716b7ee573b5aeb86e0462c28746f6_hq.gif' alt='bequadroquebrando'/>
            <Grid container spacing={20} style={{paddingLeft: '800px'}}>
              <h4>Take notice at this symbol that it make a transformation at the choice note that it is behind, the alteration at the note that received the # symbol before, have been received an other alteration to the natural state!</h4>
            </Grid>
          </Modal>
        </Grid>
        <Grid container spacing={2.5} style={{paddingLeft: '130px'}}>
        <Button style={{backgroundColor: 'black', color: 'cyan', fontSize: '10px', borderRadius: '30px', width: '50px', height: '20px', fontFamily: 'fantasy', letterSpacing: '3px'}} onClick={openModal_DO_SI}>♩SI</Button>
          <Modal isVisible={openedDO_SI} onClose={closeModal_DO_SI}>
            <h1>♩</h1><p>SI</p>
            <Card>
              <center>
                <h1>The height of this position will increase one height to the clave position note SOL</h1>
                <br/>
                <h3>This aspect of note is use to use  at the instruments like: Viola that makes the Tenor in  orchestra!!!!</h3>
                <NoteDOPlayer/>
              </center>
            </Card>
          </Modal>
        </Grid>
          <Grid container spacing={4} style={{paddingLeft: '200px'}}>
          <Button style={{backgroundColor: 'black', color: 'cyan', fontSize: '10px', borderRadius: '30px', width: '50px', height: '20px', fontFamily: 'fantasy', letterSpacing: '3px'}} onClick={openModal_DO_RE}>b♩Mi</Button>
            <Modal isVisible={openedDO_RE} onClose={closeModal_DO_RE}>
            <h1>b ♩</h1><p> MI Bemol</p>
            <Card>
              <center>
                <h1>This note receive the symbol b</h1>
                <br/>
                <h3>Your value is being alterated because this symbol is appearing behind it!</h3>
                <h3>All the notes that receive this symbol b one time behind it, this will decrease half time on this note!</h3>
                <NoteMIPlayer/>
              </center>
            </Card>
            </Modal>
          </Grid>
          <Grid container spacing={0.5} style={{paddingLeft: '220px'}}>
          <Button style={{backgroundColor: 'black', color: 'cyan', fontSize: '10px', borderRadius: '30px', width: '50px', height: '20px', fontFamily: 'fantasy', letterSpacing: '3px'}} onClick={openModal_DO_LA}>♩LÁ</Button>
            <Modal isVisible={openedDO_LA} onClose={closeModal_DO_LA}>
            <h1>♩</h1><p>LÁ</p>
            <Card><br/><br/>
              <center>
                <h1>Note LÁ / SOL</h1>
                <br/>
                <h3>This height is one height different than the height of the note sol on the clave pentagram of SOL</h3>
                <NoteSIPlayer/>
              </center>
            </Card>
            </Modal>
          </Grid>
          <Grid container spacing={0.5} style={{paddingLeft: '270px'}}>
          <Button style={{backgroundColor: 'black', color: 'cyan', fontSize: '10px', borderRadius: '30px', width: '50px', height: '20px', fontFamily: 'fantasy', letterSpacing: '3px'}} onClick={openModal_DO_FA}>♩Fá</Button>
            <Modal isVisible={openedDO_FA} onClose={closeModal_DO_FA}>
            <h1>♩</h1><p>FÁ</p>
            <Card>
              <center>
                <h1>This note receive the symbol b</h1>
                <br/>
                <h3>Your value is being alterated because this symbol is appearing behind it!</h3>
                <h3>All the notes that receive this symbol b one time behind it, this will decrease half time on this note!</h3>
                <NoteFÁPlayer/>
              </center>
            </Card>
            </Modal>
          </Grid>
      </Card>
    ];
  
  
  return(
    <div style={{color: 'gold'}}>
      <Grid container spacing={3}>
      <fieldset style={{borderColor: 'cyan', borderWidth: '5px', borderStyle: 'double'}}><legend><center><h1 style={{fontSize: '25px', fontFamiy: 'cursive', color: 'cyan', backgroundColor: 'blue', borderRadius: '30px', width: '40px'}}>?</h1></center></legend>
      <h1>{'𝄞 𝄢 𝄡'}</h1>
      <center style={{fontFamily: 'serif', fontSize: '12px'}}>
        <h2>This infos will give for you any things about all is possible to use this 3 sinble</h2>
        <h3>This object will dettermine what will be the right height of the music that<br/> the musician is gonna play,  <br/>This have whole sense on the scale height will be demanded to build under the height gave!</h3>
      </center>
      </fieldset>
      </Grid>
            <Fab style={{fontSize: '50px', alignItems: 'center', color: 'cyan', backgroundColor: 'ActiveBorder'}} onClick={openModal1}>𝄞</Fab>
            <Fab style={{fontSize: '50px', alignItems: 'center', color: 'cyan', backgroundColor: 'ActiveBorder'}} onClick={abrirSecModal}>𝄢</Fab>
            <Fab style={{fontSize: '50px', alignItems: 'center', color: 'cyan', backgroundColor: 'ActiveBorder'}} onClick={openiTercModal}>𝄡</Fab>
            <Modal isVisible={isModalVisiblePrinc} onClose={closeModal}>
                <h2>SUN'S CLAVE</h2>
                <div>
                  <center style={{margin: '15px'}}>
                  {somaSeminimas}
                  </center>
                  <center style={{margin: '15px'}}>
                    {notesSpaces}
                  </center>
                </div>
            </Modal>
            <Modal isVisible={opendModalSecPrinc} onClose={fecharSecModal}>
                <h1>FÁ Clave</h1>
                {FáPainel}
            </Modal>
            <Modal isVisible={opnTercModalPrinc} onClose={closiTercModal}>
              <h1>DÓ Clave</h1>
              <h3>This panel show the difference between the Clave SOL than Clave DÓ</h3>
              {DÓPainel}
            </Modal>
    </div>
  )
}