"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Divider, Input, Card } from '@mui/material';
import { useRouter } from 'next/navigation';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Toaster, toast } from 'react-hot-toast';
import  { motion } from 'framer-motion';
import './ComponentesCSS.css';



export interface User {
  id: number;
  Nome: string;
  LastName: string;
  WhatsApp: string;
  InstrumentoPref: string;
  Localidade: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

interface UserData {
  id: number;
  Nome: string;
  Sobrenome: string;
  WhatsApp: string;
  InstrumentoPref: string;
  Localidade: string;
  // Adicione outras propriedades conforme necessário
}

const Api_Interface: React.FC = () => {
  const style = {
    containerDad: {
      backgroundColor: 'darkblue',
      color: 'cyan',
      width: 1150,
      height: 750,
      alignContent: 'center',
      paddingTop: '3px',
      borderWidth: '3px',
      borderColor: 'gold',
      borderStyle: 'outset',
      fontFamily: 'serif',
      margin: '120px',
      boxShadow: '0 0 13px 13px',
    }
  }
  const apiUrl = 'http://127.0.0.1:8000/Urls/ViewsStudy/'; // Substitua pelo URL real da sua API
  const [userData, setUserData] = useState<UserData[]>([]);
  const dados = userData;
  const ShowInfo = () => {
    toast.arguments(`${dados}`);
  }
  const [createInput, setCreateInput] = useState<{ 
    Nome: string; 
    Sobrenome: string; 
    WhatsApp: string; 
    InstrumentoPref: string; 
    Localidade: string }>
    ({
    Nome: '',
    Sobrenome: '',
    WhatsApp: '',
    InstrumentoPref: '',
    Localidade: ''
    // Adicione outros campos conforme necessário
  });

  const fetchData = async () => {
    try {
      const response = await axios.get<UserData[]>(apiUrl);
      setUserData(response.data);
      toast.success("Acessando áre de cadastramento...!");
    } catch (error) {
      console.error('Error fetching data:', error);
      toast.error("Erro ao coletar os dados ...");
    }
  };

  const createData = async () => {
    try {
      console.log('Verificando createInput:', createInput); // Adiciona log para verificar os dados

      if (!createInput || Object.keys(createInput).length === 0) {
        console.error('Erro: createInput está vazio ou indefinido.');
        toast.error("Erro: Os dados estão vazios ou inválidos.");
        return; // Interrompe a execução se os dados estiverem incorretos
      }  

      console.log('Dados sendo enviados:', createInput);
  
      const response = await axios.post(apiUrl, createInput, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      console.log('Resposta da API:', response.data);
  
      fetchData();
  
      setCreateInput({ 
        Nome: '', 
        Sobrenome: '', 
        WhatsApp: '', 
        InstrumentoPref: '', 
        Localidade: '' 
      });
  
      toast.success("Dados inseridos com sucesso!!");
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        console.error('Erro ao criar dados:', error.response.data);
    
        // Verifica se a API está retornando uma mensagem específica
        const errorMessage = error.response.data.message || JSON.stringify(error.response.data);
        
        toast.error(`Erro: ${errorMessage}`);
      } else {
        console.error('Erro desconhecido:', error);
        toast.error("Erro desconhecido ao inserir dados.");
      }
    }
  };
  

  useEffect(() => {
    fetchData();
  }, []);

  const router = useRouter();

  return (
    <Card style={style.containerDad}>
      <div>
        <center>
        <motion.div
        initial={{rotate: -180}}
        animate={{rotate: 0}}
        transition={{ duration: 1.8 }}>
          <h2>Create</h2>
        </motion.div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            createData();
          }}
        >
        <motion.div 
        initial={{ scale: -0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        >
        <div>
          <label htmlFor="nome">Name:</label><br/>
          <Input
          type="text"
          id="nomeInput"
          value={createInput.Nome}
          onChange={(e) => setCreateInput({ ...createInput, Nome: e.target.value })}
          required
          style={{
            color: 'white', 
            paddingLeft: '15px', 
            fontFamily: 'fantasy',
            letterSpacing: '3px',
          }}
          placeholder='First Name!'
          />
        </div>
        <br/>
        <Divider style={{borderColor: 'cyan'}}/>
        <br/>

        <div>
          <label htmlFor="sobrenome">Lastname:</label><br/>
          <Input
          type="text"
          id="sobrenomeInput"
          value={createInput.Sobrenome}
          onChange={(e) => setCreateInput({ ...createInput, Sobrenome: e.target.value })}
          required
          style={{
            color: 'white', 
            paddingLeft: '15px', 
            fontFamily: 'fantasy',
            letterSpacing: '3px'
          }}
          placeholder='LastName'
          />
        </div>
        <br/>
        <Divider style={{borderColor: 'cyan'}}/>
        <br/>

        <div>
          <label htmlFor="celularInput">WhatsApp:</label><br/>
          <Input
          type="text"
          id="celularInput"
          value={createInput.WhatsApp}
          onChange={(e) => setCreateInput({ ...createInput, WhatsApp: e.target.value })}
          required
          style={{
            color: 'white', 
            paddingLeft: '15px', 
            fontFamily: 'fantasy',
            letterSpacing: '3px'
          }}
          placeholder='Cellphonumber'
          />
        </div>
        <br/>
        <Divider style={{borderColor: 'cyan'}}/>
        <br/>

        <div>
          <label htmlFor="descricaoinput">Instrument Prefered:</label><br/>
          <Input
          type="text"
          id="descricaoinput"
          value={createInput.InstrumentoPref}
          onChange={(e) => setCreateInput({ ...createInput, InstrumentoPref: e.target.value})}
          required
          placeholder='Own description'
          style={{
            color: 'white', 
            paddingLeft: '15px', 
            fontFamily: 'fantasy',
            letterSpacing: '3px'
          }}
          />
        </div>
        <br/>
        <Divider style={{borderColor: 'cyan'}}/>
        <br/>

        <div>
          <label htmlFor="local">Place:</label><br/>
          <Input
          type="text"
          id="local"
          value={createInput.Localidade}
          onChange={(e) => setCreateInput({ ...createInput, Localidade: e.target.value})}
          required
          placeholder='Locate'
          style={{
            color: 'white', 
            paddingLeft: '15px', 
            fontFamily: 'fantasy',
            letterSpacing: '3px'
          }}
          />
        </div>
        <Divider style={{borderColor: 'cyan'}}/>
        <br/>
        <Button style={{backgroundColor: 'cyan', color: 'blue', width: '200px', fontFamily: 'serif', fontSize: '15px', boxShadow: '0 0 3px 3px'}} onClick={createData}>Create</Button>
        <br/>
        <br/>
        <br/>
        <Button disabled={true} style={{backgroundColor: 'ButtonFace'}} onClick={ShowInfo}>!</Button>
        <div className='ArrowCuston'>
        <Button onClick={() => router.back()} style={{backgroundColor: 'orangered', color: 'white', float: 'left'}}><ArrowBackIcon/></Button>
        <Toaster/>
        </div>
        </motion.div>
        </form><br/>
        <br/>
        </center>
      </div>
    </Card>
  )
};

export default Api_Interface;