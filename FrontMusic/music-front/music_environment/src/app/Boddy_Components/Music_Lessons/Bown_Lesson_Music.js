import { Button } from 'evergreen-ui';
import React, { useState } from 'react';

export default function BownViolinExercise({ children, detalhes }){
    const [open,setOpen] = useState(false);
    const renderContent = () => {
        if (open === 1) {
          return(
            <center>
            <div style={{width: '150px', backgroundColor: 'yellow', color: 'violet', fontSize: '5px'}}>
                <h1>The violin's bown is to use from the rigth hand!!</h1>
            </div>
            </center>
          );
        } else if (open === 2) {
          return(
            <center>
            <div style={{width: '150px', backgroundColor: 'gold', color: 'purple', fontSize: '5px'}}>
                <h1>The violin's bown will make the performance that you need to make different form's sounds!!</h1>
            </div>
            </center>
          );
        } else if (open === 3) {
          return(
            <center>
            <div style={{width: '150px', backgroundColor: 'gold', color: 'purple', fontSize: '5px'}}>
                <h1>Jhonnathan is Crasy!!!</h1>
            </div>
            </center>
          );
        } else if (open === 4) {
          return(
            <center>
            <div style={{width: '150px', backgroundColor: 'gold', color: 'purple', fontSize: '5px'}}>
                <h1>Jhonnathan Will work in Mercedes Benz!!</h1>
            </div>
            </center>
          );
        } else {
          return null;
        }
      };
      const [mostrarDetalhes, setMostrarDetalhes] = useState(false);
      function ShowDetail(){
        return(
          <div
          onMouseEnter={() => setMostrarDetalhes(true)}
          onMouseLeave={() => setMostrarDetalhes(false)}
          >
            {children}
              {mostrarDetalhes && (
                <center>
                  <div style={{ border: '1px solid black', padding: '5px', width: '250px', alignContent: 'center' }}>
                      <h1>Hello Jhonnathan Wesley Lopes!!</h1>{detalhes}
                  </div>
                </center>
              )}
          </div>
        )
      }
    return(
        <div>
            <Button onClick={() => setOpen((open % 4) + 1)}>
                Bow! Click to keep learn!
            </Button>
            {renderContent()}
            <ShowDetail detalhes='Hello Jhonnathan Lopes!!'>
            <Button>Pass the mouse on me!!</Button>
            </ShowDetail>
        </div>
    )
}