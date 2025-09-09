import React, { useState } from "react";

export default function EscalasMusicais(){
  const [escala, setEscala] = useState("");

  const handleChange = (event) => {
    setEscala(event.target.value);
  };

  const ShowDóMajor = 'DÓ, RÉ, MI, FÁ, SOL, LÁ, SI';
  const ShowRéMinor = 'RÉ, MI, FÁ, SOL, LÁ, SI, DÓ';

  const renderNotas = () => {
    // Mapeie as notas para cada escala musical
    switch (escala) {
      case "maior":
        return (
          <>
            <li><h3>{ShowDóMajor}</h3></li>
            <li><h4>Semibreves: ----1--23--4--</h4></li>
          </>
        );
      case "menor":
        return (
          <>
            <li><h3>{ShowRéMinor}</h3></li>
            <li><h4>Semibreves: ----1-2--34---</h4></li>
          </>
        );
      // Adicione mais casos de escala conforme necessário
      default:
        return null;
    }
  };

  return (
    <div>
      <h1>Simulador de Escalas Musicais para Violino</h1>
      <select value={escala} onChange={handleChange}>
        <option value="">Selecione uma escala</option>
        <option value="maior">Escala Maior</option>
        <option value="menor">Escala Menor</option>
        {/* Adicione mais opções de escala conforme necessário */}
      </select>
      <ul>
        {escala && (
          <>
            <h2>Informações da escala selecionada:</h2>
            {renderNotas()}
          </>
        )}
      </ul>
    </div>
  );
};