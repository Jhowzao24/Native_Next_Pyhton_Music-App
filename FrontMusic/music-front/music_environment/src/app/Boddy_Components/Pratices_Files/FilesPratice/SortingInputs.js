/* eslint-disable no-undef */
/*import { Fab, Grid, MenuItem } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from 'antd';
import Popup from 'reactjs-popup';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';*/
import React, { useState } from 'react';
import { Select,  MenuItem, FormControl, Divider } from '@mui/material';
import { Button, Card, Input, Tooltip } from 'antd';
import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css';
import { useTable, useSortBy, useFilters } from 'react-table';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const EditableCell = ({
  value: initialValue,
  row: { index },
  column: { id },
  updateData,
}) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onBlur = () => {
    updateData(index, id, value);
  };

  return <Input value={value} onChange={onChange} onBlur={onBlur} />;
};

// Definindo a célula padrão como editável
const defaultColumn = {
  Cell: EditableCell,
};

const DataTable = ({ columns, data, updateData, removeData }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setFilter, // Adicionando setFilter para a filtragem
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
      updateData,
    },
    useFilters,
    useSortBy
  );

  return (
    <div><br/>
      <fieldset style={{borderRadius: '5px', borderWidth: '3px', borderStyle: 'double', borderColor: 'cyan'}}>
        <h4>Search your datas here one by one!!</h4>
        <Input
          placeholder="Search input data..."
          onChange={e => setFilter('input', e.target.value)} // Filtrando a coluna 'input'
          style={{ marginBottom: '10px', width: '130px'}}
        />
      </fieldset>
      <table {...getTableProps()} style={{ border: 'solid 1px blue', marginTop: '20px' }}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <Tooltip title='Click here to sort the objects youve placed!'>
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ''}
                  </span>
                </th>
                </Tooltip>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => (
                  <td
                    {...cell.getCellProps()}
                    style={{
                      padding: '3px',
                      border: 'solid 3px cyan',
                      background: 'darkcyan',
                    }}
                  >
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const ChordGenerator = () => {
    // Estado para armazenar o acorde selecionado
    const [selectedChordViolin, setSelectedChordViolin] = useState('');
    const [selectedChordViola, setSelectedChordViola] = useState('');
    const [selectedChordCello, setSelectedChordCello] = useState(''); // Acorde inicial
  
    // Lista de acordes disponíveis (poderia ser expandida)
    const chordsViolin = ['Select an interval', 'DÓ', 'RÉ', 'MI', 'FÁ', 'SOL', 'LA', 'SI'];
    const chordsViola = ['Select an interval', 'DÓ', 'RÉ', 'MI', 'FÁ', 'SOL', 'LA', 'SI'];
    const chordsCello = ['Select an interval', 'DÓ', 'RÉ', 'MI', 'FÁ', 'SOL', 'LA', 'SI'];
  
    // Função para renderizar as notas do acorde selecionado
    const renderChordNotesViolin = () => {
      // Mapeia cada acorde para suas respectivas notas
      switch (selectedChordViolin) {
        case 'Select an interval':
            return [];
        case 'DÓ':
          return ['Notes of the Acordes:', 'DÓ', 'MI', 'DÓ', 'MI'];
        case 'RÉ':
          return ['Notes of the Acordes:', 'RÉ', 'FÁ', 'LA', 'FA'];
        case 'MI':
          return ['Notes of the Acordes:', 'MI', 'SOL', 'SI', 'MI'];
        case 'FÁ':
          return ['Notes of the Acordes:', 'FÁ', 'LA', 'DÓ', 'FÁ'];
        case 'SOL':
          return ['Notes of the Acordes:', 'SOL', 'SI', 'RÉ', 'LA'];
        case 'LA':
          return ['Notes of the Acordes:', 'LA', 'DÓ', 'MI', 'LA'];
        case 'SI':
          return ['Notes of the Acordes:', 'SI', 'RÉ', 'FÁ', 'SI'];
        default:
          return [];
      }
    };
    const renderChordNotesViola = () => {
        // Mapeia cada acorde para suas respectivas notas
        switch (selectedChordViola) {
          case 'Select an interval':
            return [];
          case 'DÓ':
            return ['Notes of the Acordes:', 'DÓ', 'MI', 'DÓ', 'MI'];
          case 'RÉ':
            return ['Notes of the Acordes:', 'RÉ', 'FÁ', 'LA', 'FA'];
          case 'MI':
            return ['Notes of the Acordes:','MI', 'SOL', 'SI', 'MI'];
          case 'FÁ':
            return ['Notes of the Acordes:','FÁ', 'LA', 'DÓ', 'FÁ'];
          case 'SOL':
            return ['Notes of the Acordes:','SOL', 'SI', 'RÉ', 'LA'];
          case 'LA':
            return ['Notes of the Acordes:','LA', 'DÓ', 'MI', 'LA'];
          case 'SI':
            return ['Notes of the Acordes:', 'SI', 'RÉ', 'FÁ', 'SI'];
          default:
            return [];
        }
      };
      const renderChordNotesCello = () => {
        // Mapeia cada acorde para suas respectivas notas
        switch (selectedChordCello) {
          case 'Select an interval':
            return [];
          case 'DÓ':
            return ['Notes of the Acordes:','DÓ', 'MI', 'DÓ', 'MI'];
          case 'RÉ':
            return ['Notes of the Acordes:','RÉ', 'FÁ', 'LA', 'FA'];
          case 'MI':
            return ['Notes of the Acordes:','MI', 'SOL', 'SI', 'MI'];
          case 'FÁ':
            return ['Notes of the Acordes:','FÁ', 'LA', 'DÓ', 'FÁ'];
          case 'SOL':
            return ['Notes of the Acordes:','SOL', 'SI', 'RÉ', 'LA'];
          case 'LA':
            return ['Notes of the Acordes:','LA', 'DÓ', 'MI', 'LA'];
          case 'SI':
            return ['Notes of the Acordes:','SI', 'RÉ', 'FÁ', 'SI'];
          default:
            return [];
        }
      };
      const dataScales = [{
        nameInstrument: 'Violin',
        notes: 'DÓ, RÉ, MI, FÁ, SOL, LÁ, SI',
        scaleDO: '(DÓ) = DÓ, MI, DÓ, MI',
        scaleRE: '(RÉ) = RÉ, FÁ, LÁ, RÉ',
        scaleMI: '(MI) = MI, SOL, SI, RÉ, SOL',
        scaleFA: '(FÁ) = DÓ, FÁ, DÓ(n), FÁ',
        scaleSOL: '(SOL) = SOL, RÉ, SI, SOL',
        scaleLA: '(LÁ) = LÁ, MI, DÓ, LÁ',
        scaleSI: '(LÁ) = LÁ, MI, DÓ, LÁ'
      },{
        nameInstrument: 'Viola',
        notes: 'DÓ, RÉ, MI, FÁ, SOL, LÁ, SI',
        scaleDO: '(DÓ) = DÓ, SOL, MI, DÓ',
        scaleRE: '(RÉ) = RÉ, SI, FÁ, RÉ',
        scaleMI: '(MI) = MI, SI, SOL, MI',
        scaleFA: '(FÁ) = FÁ, DÓ, Lá, SI',
        scaleSOL: '(SOL) = SOL, RÉ, SI, SOL',
        scaleLA: '(LÁ) = LÁ, Mi, DÓ',
        scaleSI: '(SI) = SI, FÁ, RÉ'
      },{
        nameInstrument: 'Cello',
        notes: 'DÓ, RÉ, MI, FÁ, SOL, LÁ, SI',
        scaleDO: '(DÓ) = DÓ, SOL, MI, DÓ',
        scaleRE: '(RÉ) = RÉ, SI, FÁ, RÉ',
        scaleMI: '(MI) = MI, SI, SOL, MI',
        scaleFA: '(FÁ) = FÁ, DÓ, Lá, SI',
        scaleSOL: '(SOL) = SOL, RÉ, SI, SOL',
        scaleLA: '(LÁ) = LÁ, Mi, DÓ',
        scaleSI: '(SI) = SI, FÁ, RÉ'
      }];
      const columns = [{
        Headers: 'NameInstrument',
        accessor: 'nameInstrument'
      },{
        Headers: 'Notes',
        accessor: 'notes'
      },{
        Headers: 'ScaleDO',
        accessor: 'scaleDO'
      },{
        Headers: 'ScaleRE',
        accessor: 'scaleRE'
      },{
        Headers: 'ScaleMI',
        accessor: 'scaleMI'
      },{
        Headers: 'ScaleFA',
        accessor: 'scaleFA'
      },{
        Headers: 'ScaleSOL',
        accessor: 'scaleSOL'
      },{
        Headers: 'ScaleLA',
        accessor: 'scaleLA'
      },{
        Headers: 'ScaleSI',
        accessor: 'scaleSI'
      }];
      const datasForm = [{
        type: [
            <FormControl style={{borderColor: 'cyan'}}>
            <h3 htmlFor="chord-select">Select a chord from the Violin:</h3>
                <Select
                    id="chord-select"
                    value={selectedChordViolin}
                    onChange={(e) => setSelectedChordViolin(e.target.value)}
                >
                    {chordsViolin.map((chordViolin) => (
                        <MenuItem style={{color: 'cyan', backgroundColor: 'Highlight'}} key={chordViolin} value={chordViolin}>
                            {chordViolin}
                        </MenuItem>
                    ))}
                </Select>
                <br/>
                <div>
                    <h3>{renderChordNotesViolin().join(', ')}</h3>
                </div>
            </FormControl>
        ],
      },{
        type: [
            <FormControl>
            <h3 htmlFor="chord-select">Select a chord from the Viola:</h3>
                <Select
                    id="chord-select"
                    value={selectedChordViola}
                    onChange={(e) => setSelectedChordViola(e.target.value)}
                >
                    {chordsViola.map((chordViola) => (
                        <MenuItem style={{color: 'cyan', backgroundColor: 'Highlight'}} key={chordViola} value={chordViola}>
                            {chordViola}
                        </MenuItem>
                    ))}
                </Select>
                <div>
                    <p>{renderChordNotesViola().join(', ')}</p>
                </div>
            </FormControl>
        ],
      },{
        type: [
            <FormControl>
            <h3 htmlFor="chord-select">Select an acord from the Cello:</h3>
                <Select
                    id="chord-select"
                    value={selectedChordCello}
                    onChange={(e) => setSelectedChordCello(e.target.value)}
                >
                    {chordsCello.map((chordCello) => (
                        <MenuItem style={{color: 'cyan', backgroundColor: 'Highlight'}} key={chordCello} value={chordCello}>
                            {chordCello}
                        </MenuItem>
                    ))}
                </Select>
                <div>
                    <p>{renderChordNotesCello().join(', ')}</p>
                </div>
            </FormControl>
        ],
      }];
      const dataColumns = [{
        Headers: 'Type',
        accessor: 'type'
      }];
    return (
      <div style={{paddingRight: '450px'}}>
        <Card style={{backgroundColor: 'lightsteelblue', color: 'grey'}}>
        <h1>Musical Chord Visualizer</h1>
          <ReactTable
                style={{backgroundColor: 'black', color: 'cyan', fontFamily: 'cursive', fontSize: '10px', width: '750px'}}
                data={dataScales}
                columns={columns}
                defaultPageSize = {3}
                pageSizeOptions = {[1,2,3]}
            /><br/><Divider/><br/>
            <ReactTable
                style={{backgroundColor: 'gold', color: 'black', fontFamily: 'serif', fontSize: '20px'}}
                data={datasForm}
                columns={dataColumns}
                defaultPageSize = {3}
                pageSizeOptions = {[1,2,3]}
            />
        </Card>
      </div>
    );
  };


const Metronome = () => {
    const [inputData, setInputData] = useState('');
    const [tableData, setTableData] = useState([]);
  
    const handleInputChange = (e) => {
      setInputData(e.target.value);
    };
  
    const handleAddData = () => {
      setTableData(prevData => [...prevData, { input: inputData }]);
      setInputData('');
    };
    const columns = React.useMemo(
        () => [
          {
            Header: 'Datas puted',
            accessor: 'input',
          },
          {
            Header: 'Actions',
            accessor: 'actions',
            Cell: ({ row }) => (
              <Button onClick={() => removeData(row.index)}>Delete</Button>
            ),
          },
        ],
        []
      );
      const removeData = (index) => {
        setTableData(prevData => prevData.filter((_, i) => i !== index));
      };
      const EstiloInput = {
        width: '350px',
        placeHolder: '5px',
        fontFamily: 'serif',
        fontSize: '14px',
        float: 'left',
        color: 'cyan',
        backgroundColor: 'orangered'
      };
      const H3 = {
        color: 'yellow',
        fontSize: '16px',
        fontFamily: 'cursive',
      };
      const updateData = (rowIndex, columnId, value) => {
        setTableData(oldData =>
          oldData.map((row, index) => {
            if (index === rowIndex) {
              return {
                ...row,
                [columnId]: value,
              };
            }
            return row;
          })
        );
      };
  return (
    <div>
        <header className="App-header">
            <ChordGenerator />
        </header>
        <center style={EstiloInput}>
          <h1>This exercise was made to you, for create a scale, puting datas in the input, one by one note for each time, and you will must to sort if your wishes!</h1>
            <h3 style={H3}>Please put a value that is equal a scale<br/> and see the result printed below!</h3><br/>
          <Popup trigger={<Button> Open Input Form </Button>} modal nested>
            {close => (
              <div>
                <h2>Enter Data</h2>
                <form
                  onSubmit={(e) => {
                  e.preventDefault();
                  handleAddData();
                  close();
                  }}
                >
                  <Input
                    type="text"
                    value={inputData}
                    onChange={handleInputChange}
                    placeholder="Enter some data"
                  />
                  <Button onClick={handleAddData}>Add to Table</Button>
                </form>
                <Button onClick={close}>Close</Button>
              </div>
            )}
          </Popup>
            <DataTable columns={columns} data={tableData} updateData={updateData} removeData={removeData} />
        </center>
    </div>
  );
};

export default Metronome;