import React, { useState } from 'react';
import { Button, Input, Tooltip } from 'antd';
import { useTable, useSortBy, useFilters } from 'react-table';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { Grid } from '@mui/material';

const EditableCellViolin = ({
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
    Cell: EditableCellViolin,
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
                    <>
                    <td
                      {...cell.getCellProps()}
                      style={{
                        padding: '10px',
                        border: 'solid 3px cyan',
                        background: 'darkcyan',
                      }}
                    >
                      {cell.render('Cell')}
                    </td>
                    </>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  };

export default function SortViolinLesson(){
    const [inputData, setInputData] = useState('');
    const [tableData, setTableData] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [items, setItems] = useState([]);

    const [table, setTable] = useState(Array(3).fill().map(() => Array(3).fill(null)));
    const handleChange = (event) => {
      setInputValue(event.target.value);
    };
    
    const handleAddItem = () => {
      setItems([...items, { value: inputValue, positioned: false }]);
      setInputValue('');
    };
    
    const handlePositionItem = (itemIndex, rowIndex, colIndex) => {
      const newItems = [...items];
      newItems[itemIndex] = { ...newItems[itemIndex], positioned: true };
      setItems(newItems);
    
      const newTable = table.map(row => row.slice());
      newTable[rowIndex][colIndex] = newItems[itemIndex].value;
      setTable(newTable);
    };
  
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
      return(
        <div>
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
          </Popup><br/>
          <br/><br/>
          <Grid container spacing={8} style={{paddingRight: '70px', paddingLeft: '140px', paddingTop: '60px'}}>
            <DataTable columns={columns} data={tableData} updateData={updateData} removeData={removeData} />
          </Grid>
          <br/><br/><br/><br/>
        <div>
          <Input type="text" value={inputValue} onChange={handleChange} />
          <Button onClick={handleAddItem}>
            Adicionar
          </Button>
        </div>
        <div>
          <h3>Itens Disponíveis</h3>
          <ul>
            {items.map((item, index) => (
            ! item.positioned && (
                <li key={index} style={{ cursor: 'pointer' }}>
                  {item.value}
                </li>
              )
            ))}
          </ul>
        </div>
        <div style={{ marginTop: '20px' }}>
          <h3>Tabela</h3>
          <table style={{ borderCollapse: 'collapse' }}>
            <tbody>
              {table.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, colIndex) => (
                    <td
                      key={colIndex}
                      onClick={() => {
                      const itemIndex = items.findIndex(item => !item.positioned);
                      if (itemIndex !== -5) handlePositionItem(itemIndex, rowIndex, colIndex);
                      }}
                      style={{
                        border: '1px solid cyan',
                        width: '100px',
                        height: '50px',
                        textAlign: 'center',
                        cursor: 'pointer',
                        backgroundColor: cell ? 'Highlight' : 'black'
                      }}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table></div>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </center><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/></div>
      )
  }