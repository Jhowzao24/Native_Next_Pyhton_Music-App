import React, { useState } from 'react';
import { Button } from 'antd';

export default function Figures_Pauses(){
    const [isSquare, setIsSquare] = useState(true);
    const [elementState, setElementState] = useState(false);
    const [elementStateD, setElementSyayeD] = useState(false);
    const [elementChange, setElementChange] = useState(false);
    const handleClick = () => {
      setIsSquare(!isSquare); // Alterna entre quadrado e círculo
      setElementState(!elementState); // Alterna o estado do elemento
    };
    const handleSetClick = () => {
      setElementSyayeD(!elementStateD);
    }
    const handleChangeClick = () => {
      setElementChange(!elementChange);
    }
    return(
        <div>
          <Button 
          onClick={handleClick}
          style={{
            width: '100px',
            height: '100px',
            borderRadius: isSquare ? '10px' : '100%', // Se isSquare for true, formato é quadrado, senão é círculo
            backgroundColor: 'blue',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            transition: '0.3s ease'
          }}>Open</Button>
          <Button onClick={handleSetClick}
            style={{
              color: 'blue',
              cursor: 'pointer'
          }}>Open Seminima</Button>
          <Button onClick={handleChangeClick}
            style={{
              width: '100px',
              height: '100px',
              backgroundColor: elementChange ? 'blue' : 'cyan',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
              transition: '0.3s ease'
            }}>change figure!</Button>
            <div
            style={{
              marginTop: '20px',
              padding: '20px',
              backgroundColor: 'transparent', // Muda de cor baseado no estado
              fontSize: elementState ? '40px' : '50px',
              color: elementState ? 'white' : 'white',
            }}
            >
          <fieldset>
            {elementState ? '𝅝' : '𝄻'}
          </fieldset>
        </div>
        <div
        style={{
          backgroundColor: elementStateD ? 'transparent' : 'transparent',
          color: elementStateD ? 'gold' : 'white',
          fontSize: elementState ? '40px' : '50px',
        }}>
          <fieldset>
            {elementStateD ? '𝅗𝅥' : '𝄼'}
          </fieldset>
        </div>
        <div
        style={{
          backgroundColor: elementChange ? 'transparent' : 'transparent',
          color: elementChange ? 'gold' : 'white',
          fontSize: elementChange ? '40px' : '50px',
        }}>
          <fieldset>
            {elementChange ? '𝅘𝅥' : '𝄽'}
          </fieldset>
        </div>
      </div>
    )
}