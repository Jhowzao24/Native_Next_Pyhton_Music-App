import React, { useState } from "react";

const SynthReact = () => {
  const [volume, setVolume] = useState(50);
  const [oscillator, setOscillator] = useState("sine");

  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
  };

  const handleOscillatorChange = (e) => {
    setOscillator(e.target.value);
  };

  return (
    <div>
      <h1>Synthesizer</h1>
      <label htmlFor="volume">Volume:</label>
      <input
        type="range"
        id="volume"
        min="0"
        max="100"
        value={volume}
        onChange={handleVolumeChange}
      />

      <label htmlFor="oscillator">Oscillator:</label>
      <select
        id="oscillator"
        value={oscillator}
        onChange={handleOscillatorChange}
      >
        <option value="sine">Sine</option>
        <option value="square">Square</option>
        <option value="triangle">Triangle</option>
        <option value="sawtooth">Sawtooth</option>
      </select>

      <p>Volume: {volume}</p>
      <p>Oscillator: {oscillator}</p>
    </div>
  );
};

export default SynthReact;