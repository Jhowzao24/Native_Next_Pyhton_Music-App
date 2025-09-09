import { Button } from 'antd';
import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Table, Input, Form } from 'antd';


const NoteTrainer = () => {
  const notes = ["DÓ", "RÉ", "MI","FÁ", "SOL","LÁ", "SI"];
  const [randomNote, setRandomNote] = useState("");

  const getRandomNote = () => {
    const randomIndex = Math.floor(Math.random() * notes.length);
    setRandomNote(notes[randomIndex]);
  };

  const [dataSource, setDataSource] = useState([]);

  const [form] = Form.useForm();

  const columns = [
    {
      title: 'Figures',
      dataIndex: 'figures',
      key: 'figures',
    },
    {
      title: 'Values',
      dataIndex: 'values',
      key: 'values',
    },
  ];

  const handleAdd = (values) => {
    const newData = {
      key: dataSource.length + 1,
      ...values,
    };
    setDataSource([...dataSource, newData]);
    form.resetFields();
    toast.success('Item added...');
  };

  const handleClear = () => {
    setDataSource([]);
    toast.remove('Item removed...');
  };

  return (
    <div>
      <h1>Pratice Natural Notes</h1>
      <ul style={{color: 'cyan'}}>
        <li><h3>Memorize</h3></li>
        <li><h3>Repeat</h3></li>
        <li><h3>Play on anywhere in your Instrument</h3></li>
      </ul>
      <Button style={{backgroundColor: 'lightblue', boxShadow: '0 0 10px 7px'}} onClick={getRandomNote}>Generate Random Note</Button>
      {randomNote && <h2 style={{color: 'blanchedalmond'}}>{randomNote}</h2>}
      <br/><br/><br/>
      <fieldset style={{borderColor: 'cyan', borderRadius: '5px'}}><legend><h3 style={{margin: '30px', backgroundColor: 'Highlight', color: 'cyan', fontFamily: 'serif', letterSpacing: '3px', fontSmooth: '30px', boxShadow: '0 0 3px 3px'}}>Put Figures name and the Figures values!</h3></legend>
    <Table dataSource={dataSource} columns={columns} pagination={{ pageSize: 3 }}/>
      <Form
        form={form}
        layout="vertical"
        onFinish={handleAdd}
        style={{ marginTop: 30 }}
      >
        <Form.Item
          name="figures"
          rules={[{ required: true, message: 'Please enter with the first figure' }]}
        >
          <Input placeholder="Figures" />
        </Form.Item>
        <Form.Item
          name="values"
          rules={[{ required: true, message: 'Please enter with the values' }]}
        >
          <Input placeholder="values" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Adicionar
          </Button>
        </Form.Item>
        <Form.Item>
          <Button type="primary" danger onClick={handleClear}>
            Limpar
          </Button>
        </Form.Item>
      </Form>
      <Toaster/>
      </fieldset>
    </div>
  );
};

export default NoteTrainer;