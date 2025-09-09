import { Button } from '@mui/material';
import React, { useState, useEffect } from 'react';
import AutorenewIcon from '@mui/icons-material/Autorenew';

const AtualizarPagina = () => {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    if (contador > 0) {
      window.location.reload();
    }
  }, [contador]);

  return (
    <div>
      <Button
       onClick={() => setContador(contador + 1)}
       style={{
        backgroundColor: 'lightgreen',
        color: 'Highlight',
        border: 'none',
        padding: '30px 20px',
        fontSize: '15px',
        cursor: 'pointer',
        transition: "background-color 0.3s ease",
        marginRight: '5px'
      }}
       ><AutorenewIcon/>
       </Button>
    </div>
  );
}

export default AtualizarPagina;