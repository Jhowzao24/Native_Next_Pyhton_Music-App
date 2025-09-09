import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { Button } from '@mui/material';

export default function NotesAndFigures(){
    const [FigOne, setFigOne] = useState('');
    const [FigTwo, setFigTwo] = useState('');
    const [ResultFigs, setResultFigs] = useState('');
    //Switchs das consts
    const Results = (R) => {
      switch(R){
        case 1:
          setResultFigs('5');
          break;
        case 2:
          setResultFigs('5,5');
          break;
        case 3:
          setResultFigs('5,9');
          break;
        case 4:
          setResultFigs('6');
          break;
        case 5:
          setResultFigs('7');
          break;
        case 6:
          setResultFigs('8');
          break;
        case 7:
          setResultFigs('6.5');
          break;
        case 8:
          setResultFigs('10');
          break;
        case 9:
          setResultFigs('4');
          break;
        case 10:
          setResultFigs('4.5');
          break;
        case 11:
           setResultFigs('');
           break;
        default:
            return null;
      }
    }
    const FirstFig = (F) => {
      switch(F){
        case 1:
          setFigOne('𝅝');
          break;
        case 2:
          setFigOne('𝅗');
          break;
        case 3:
          setFigOne('♩');
          break;
        case 4:
          setFigOne('♪');
          break;
        case 5:
          setFigOne('𝅘𝅥𝅯');
          break;
        case 6:
          setFigOne('𝅘𝅥𝅰');
          break;
        case 7:
          setFigOne('𝅘𝅥𝅱');
          break;
        case 8:
          setFigOne('');
          break;
        default:
          return null;
      }
    }
    const SecondFig = (Fig2) => {
      switch(Fig2){
        case 1:
          setFigTwo('♩');
          break;
        case 2:
          setFigTwo('♪ ');
          break;
        case 3:
          setFigTwo('♫ ');
          break;
        case 4:
          setFigTwo('♬');
          break;
        case 5:
          setFigTwo('♩+♩');
          break;
        case 6:
          setFigTwo('♩+♩+♩');
          break;
        case 7:
          setFigTwo('♩+♪+♪+♪+♪');
          break;
        case 8:
          setFigTwo('♪+♪+♪+♪');
          break;
        case 9:
          setFigTwo('♪+♪+♩+♩+♩');
          break;
        case 10:
          setFigTwo('♫+♫+♫+♫+♫');
          break;
        case 11:
          setFigTwo('♫+♫+♫+♫+♫+♫+♫+♫ +♫ +♫+♫+♫ ');
          break;
        case 12:
          setFigTwo('♪+♩+♪+♩+♪+♫');
          break;
        case 13: 
          setFigTwo('𝅘𝅥𝅰+𝅘𝅥𝅰+𝅘𝅥𝅰+𝅘𝅥𝅰+♩');
          break;
        case 14:
          setFigTwo('𝅗+♩+♩');
          break;
        case 15:
          setFigTwo('♩+♩');
          break;
        case 16:
            setFigTwo('');
            break;
        default:
          return null;
      }
    };
    const rows = [
      { id: 1},
    ];
    const [showTable, setShowTable] = useState(false);
  
    const handleButtonClick = () => {
      setShowTable(true);
    };
    const handleCloseClick = () => {
      setShowTable(false);
    };

    /*
    Modificator of the Styles of the Table, Colors and Backgrounds */
    const [style, setStyle] = useState('style1');

  const handleChangeStyle = () => {
    switch (style) {
      case 'style1':
        setStyle('style2');
        break;
      case 'style2':
        setStyle('style3');
        break;
      case 'style3':
        setStyle('style1');
        break;
      default:
        setStyle('style1');
    }
  };

  const getStyles = () => {
    switch (style) {
      case 'style1':
        return {
          backgroundColor: 'Highlight',
          color: 'cyan',
          fontFamily: 'Arial, sans-serif',
        };
      case 'style2':
        return {
          backgroundColor: 'Gold',
          color: 'green',
          fontFamily: 'Courier New, Courier, monospace',
        };
      case 'style3':
        return {
          backgroundColor: 'lightblue',
          color: 'blue',
          fontFamily: 'Georgia, serif',
        };
      default:
        return {};
    }
  };

    const StylesTable = {
      ContainerTable: {
        backgroundColor: 'orange',
        color: 'black',
        fontFamily: 'serif',
        fontSize: '15px',
      },
      ContainerTableOther: {
        backgroundColor: 'lightcyan',
        color: 'white',
        fontFamily: 'cursive',
        fontSize: '13px',
        padding: '30px'
      },
      ContainerTableOt: {
        backgroundColor: 'orange',
        color: 'black',
        fontFamily: 'serif',
        fontSize: '14px',
      },
      ContainerResult: {
        backgroundColor: 'lightblue',
        color: 'green',
        fontFamily: 'serif',
        fontSize: '16px'
      }
    };


    return(
        <div>
            <Button style={{backgroundColor: 'lightblue'}} onClick={handleButtonClick}>Table!</Button>
            {showTable && (
              <TableContainer component={Paper} style={getStyles()}>
                <Button style={{backgroundColor: 'cyan', color: 'red'}} onClick={handleChangeStyle}>Styles</Button>
                  <nav>
                    <Button style={StylesTable.ContainerTable}>
                      <details><summary>Figures</summary>
                        <Button onClick={() => FirstFig(1)}>1º Figure</Button>
                        <Button onClick={() => FirstFig(2)}>2º Figure</Button>
                        <Button onClick={() => FirstFig(3)}>3º Figure</Button>
                        <Button onClick={() => FirstFig(4)}>4º Figure</Button>
                        <Button onClick={() => FirstFig(5)}>5º Figure</Button>
                        <Button onClick={() => FirstFig(6)}>6º Figure</Button>
                        <Button onClick={() => FirstFig(7)}>7º Figure</Button>
                        <Button style={{backgroundColor: 'red'}} onClick={() => FirstFig(8)}>X</Button>
                      </details>
                    </Button>
                    <Button style={StylesTable.ContainerTableOt}>
                      <details><summary>Figures to Add</summary>
                        <Button onClick={() => SecondFig(1)}>1º Add</Button>
                          <Button onClick={() => SecondFig(2)}>2º Add</Button>
                          <Button onClick={() => SecondFig(3)}>3º Add</Button>
                          <Button onClick={() => SecondFig(4)}>4º Add</Button>
                          <Button onClick={() => SecondFig(5)}>5º Add</Button>
                          <Button onClick={() => SecondFig(6)}>6º Add</Button>
                          <Button onClick={() => SecondFig(7)}>7º Add</Button>
                          <Button onClick={() => SecondFig(8)}>8º Add</Button>
                          <Button onClick={() => SecondFig(9)}>9º Add</Button>
                          <Button onClick={() => SecondFig(10)}>10º Add</Button>
                          <Button onClick={() => SecondFig(11)}>11º Add</Button>
                          <Button onClick={() => SecondFig(12)}>12º Add</Button>
                          <Button onClick={() => SecondFig(13)}>13º Add</Button>
                          <Button onClick={() => SecondFig(14)}>14º Add</Button>
                          <Button onClick={() => SecondFig(15)}>15º Add</Button>
                          <Button style={{backgroundColor: 'red'}} onClick={() => SecondFig(16)}>X</Button>
                        </details>
                      </Button>
                      <Button style={StylesTable.ContainerResult}>
                        <details><summary>Results</summary>
                          <Button onClick={() => Results(1)}>1º Result</Button>
                          <Button onClick={() => Results(2)}>2º Result</Button>
                          <Button onClick={() => Results(3)}>3º Result</Button>
                          <Button onClick={() => Results(4)}>4º Result</Button>
                          <Button onClick={() => Results(5)}>5º Result</Button>
                          <Button onClick={() => Results(6)}>6º Result</Button>
                          <Button onClick={() => Results(7)}>7º Result</Button>
                          <Button onClick={() => Results(8)}>8º Result</Button>
                          <Button onClick={() => Results(9)}>9º Result</Button>
                          <Button onClick={() => Results(10)}>10º Result</Button>
                          <Button style={{backgroundColor: 'red'}} onClick={() => Results(11)}>X</Button>
                        </details>
                      </Button>
                    </nav>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>ID</TableCell>
                          <TableCell>Static Figures</TableCell>
                          <TableCell>Figures to be sommed</TableCell>
                          <TableCell>Results</TableCell>
                          <Button style={{float: 'right', backgroundColor: 'red', color: 'cyan'}} onClick={handleCloseClick}>X</Button>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows.map((row) => (
                          <TableRow style={StylesTable.ContainerTableOther} key={row.id}>
                            <TableCell>{row.id}</TableCell>
                            <TableCell>{row.title}</TableCell>
                            <TableCell style={{fontSize: '20px'}}>{FigOne}</TableCell>
                            <TableCell style={{fontSize: '16px'}}>+</TableCell>
                            <TableCell style={{fontSize: '15px'}}>{FigTwo}</TableCell>
                            <TableCell>{ResultFigs}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
              )}
        </div>
    )
}