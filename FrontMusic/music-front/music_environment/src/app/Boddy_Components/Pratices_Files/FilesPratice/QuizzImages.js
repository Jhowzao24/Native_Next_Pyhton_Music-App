import React, { useState } from "react";
import {Button, Grid} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const ExercicioNotas = () => {
  const [notas, setNotas] = useState([]);
  const [nota, setNota] = useState("");

  const adicionarNota = () => {
    if (nota !== "") {
      setNotas([...notas, nota]);
      setNota("");
    }
  };

  const removerNota = (index) => {
    const novasNotas = [...notas];
    novasNotas.splice(index, 1);
    setNotas(novasNotas);
  };

  return (
    <div>
      <h1>Exercise of Interval
      </h1>
      <input
        type="text"
        value={nota}
        onChange={(e) => setNota(e.target.value)}
      />
      <Button onClick={adicionarNota}>Add Note</Button>
      <ul>
        <Grid style={{float: 'left', paddingLeft: '200px', fontSize: '10px'}} container spacing={0}>
        {notas.map((nota, index) => (
          <p style={{position: 'relative', color: 'black', backgroundColor: 'white'}} key={index}>
            {nota} <Button onClick={() => removerNota(index)}><DeleteIcon/></Button>
          </p>
        ))}
        </Grid>
      </ul>
    </div>
  );
};

export default ExercicioNotas;