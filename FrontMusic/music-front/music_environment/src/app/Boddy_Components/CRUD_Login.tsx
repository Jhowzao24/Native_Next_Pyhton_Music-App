import React, { useState, useEffect } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import axios from 'axios';
import { Input, Button } from 'antd';

interface User_Login{
    id: number;
    UserName: string;
    Password: string;
}

const Login_CRUD: React.FC = () => {
    const ApiUrl = 'http://127.0.0.1:8000/Urls/UserLog/';
    const [userData, setUserData] = useState<User_Login[]>([]);
    const dados = userData;
    const ShowInfo = () => {
      toast.arguments(`${dados}`);
    }
    const [createInput, setCreateInput] = useState<{
        UserName: string;
        Password: string;}>
        ({
        UserName: '',
        Password: '',
    });

    const [open, setOpen] = useState(false);

    const fetchData = async () => {
        try {
          const response = await axios.get<User_Login[]>(ApiUrl);
          setUserData(response.data);
          toast.arguments("Acessando áre de cadastramento...!");
        } catch (error) {
          console.error('Error fetching data:', error);
          toast.error("Erro ao coletar os dados ...");
        }
      };

      const createData = async () => {
        try {
          await axios.post(ApiUrl, createInput);
          fetchData();
          // Limpar os campos do formulário após a criação bem-sucedida
          setCreateInput({ UserName: '', Password: ''});
          toast.success("Datas inserted on success!!")
        } catch (error) {
          toast.error("Error on colleted the datas ...");
        }
        setContent('login');
      };
    
      useEffect(() => {
        fetchData();
      }, []);

      const show_Opened = () => {
        setOpen(true);
      };

      const show_Closed = () => {
        setOpen(false);
      };

      const [loginData, setLoginData] = useState({ UserName: '', Password: '' });

      const [codigoVerificacao, setCodigoVerificacao] = useState({UserName: '', Password: ''});

      const [content, setContent] = useState('login');

      const PularLogin = () => {
        setContent('CreateInput');
      };

      useEffect(() => {
        // Aqui você faz uma chamada à sua API para verificar se há registros
        axios.get('http://127.0.0.1:8000/Urls/UserLog/')
            .then(response => {
                if (response.data.registros > 0) {
                    setRegistrosNaAPI(true);
                }
            })
            .catch(error => {
                console.error('Erro ao verificar registros:', error);
            });
    }, []);

    const [registrosNaAPI, setRegistrosNaAPI] = useState(false);

    const handleLoginSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if(loginData.UserName.trim() === '' || loginData.Password.trim() === ''){
            toast.arguments('Please full the text space!!');
        }else{
            console.log('CreateInput:', createInput);
        }
        // Aqui você pode adicionar a lógica para autenticar o usuário
    };

    return(
        <div>
            {content === 'login' && (
                <div>
                    {registrosNaAPI ? (
                                        <div>
                                        <h2>Login</h2>
                                            <form onSubmit={handleLoginSubmit}>
                                                <input 
                                                type="text" 
                                                value={loginData.UserName} 
                                                onChange={(e) => setLoginData({ ...loginData, UserName: e.target.value })} 
                                                placeholder="E-mail" 
                                                />
                                                <input 
                                                type="password" 
                                                value={loginData.Password} 
                                                onChange={(e) => setLoginData({ ...loginData, Password: e.target.value })} 
                                                placeholder="Senha" 
                                                />
                                                <button onClick={handleLoginSubmit}>Entrar</button>
                                                <br/>
                                                <h4>If you do not have the resgiter click here, the button bellow!</h4>
                                            </form>
                                        <Button onClick={PularLogin}>Register</Button>
                                    </div>
                    ):(
                        <div>
                        <h2>Login</h2>
                            <form onSubmit={handleLoginSubmit}>
                                <input 
                                type="text" 
                                value={loginData.UserName} 
                                onChange={(e) => setLoginData({ ...loginData, UserName: e.target.value })} 
                                placeholder="E-mail" 
                                />
                                <input 
                                type="password" 
                                value={loginData.Password} 
                                onChange={(e) => setLoginData({ ...loginData, Password: e.target.value })} 
                                placeholder="Senha" 
                                />
                                <button type='submit'>Entrar</button>
                                <br/>
                                <h4>If you do not have the resgiter click here, the button bellow!</h4>
                            </form>
                        <Button onClick={PularLogin}>Register</Button>
                    </div>
                    )}
                    <Button onClick={PularLogin}>Register</Button>
                </div>
            )}
            {content === 'verificacao' && (
                <div>
                    {/* Formulário de Verificação */}
                    <h2>Verificação</h2>
                    <form onSubmit={handleLoginSubmit}>
                        <input 
                        type="password" 
                        value={codigoVerificacao.Password} 
                        onChange={(e) => setCodigoVerificacao({...codigoVerificacao, Password: e.target.value})} 
                        placeholder="Código de Verificação" 
                        />
                        <button type="submit">Verificar</button>
                    </form>
                 </div>
            )}
            {content === 'CreateInput' && (
                <form
                onSubmit={(e) => {
                e.preventDefault();
                createData();
                }}
                >
                    <div>
                        <label htmlFor="UserName">UserName:</label>
                        <Input
                        type="text"
                        id="usernomeInput"
                        value={createInput.UserName}
                        onChange={(e) => setCreateInput({ ...createInput, UserName: e.target.value })}
                        required
                        style={{
                            color: 'white', 
                            paddingLeft: '15px', 
                            fontFamily: 'fantasy',
                            backgroundColor: 'transparent',
                            letterSpacing: '3px',
                            width: '350px'
                        }}
                        placeholder='UserName!'
                        />
                    </div>
                    <div>
                        <label htmlFor="UserName">UserName:</label>
                        <Input
                        type="password"
                        id="passwordInput"
                        value={createInput.Password}
                        onChange={(e) => setCreateInput({ ...createInput, Password: e.target.value })}
                        required
                        style={{
                            color: 'white', 
                            paddingLeft: '15px', 
                            fontFamily: 'fantasy',
                            backgroundColor: 'transparent',
                            letterSpacing: '3px',
                            width: '350px'
                        }}
                        placeholder='Password!'
                        />
                    </div>
                    <br/>
                    <Button style={{backgroundColor: 'cyan', color: 'blue', width: '200px', fontFamily: 'serif', fontSize: '15px', boxShadow: '0 0 3px 3px'}} onClick={createData}>Create</Button>
                    <br/>
                    <Button disabled={true} style={{backgroundColor: 'ButtonFace'}} onClick={ShowInfo}>!</Button>
                    <br/>
                    <Button onClick={show_Opened}>Show the New Component!</Button>
                    <br/>
                    <Button onClick={show_Closed}>Hide the item</Button>
                    <Toaster/>
                </form>
            )}
            {
                open && <div>Hello Jhonnathan Wesley Lopes</div>
            }
        </div>
    )
};

export default Login_CRUD;