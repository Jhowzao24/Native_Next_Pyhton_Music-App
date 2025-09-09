 
"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Col } from 'antd';
import Link from 'next/link';
import { CommandBarButton } from '@fluentui/react';
import { Grid } from '@mui/material';
import EnviarMensagem from '../Boddy_Components/MessageSend';
//import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
//import Hai from '../page';
//import Contactos from './Contacts.js';
//import Api_Interface from './CRUD_Enter_Datas';
//import PraticeComponents from './Component_Pratice.js';
//import TheoryComponents from './Component_Theory.js';


/*href='http://127.0.0.1:8000/Urls/Register_Datas/'*/
export default function RoteadorReact(){
    const estilosBotao = {
        root: {
          backgroundColor: '#0078D4',
          color: 'white',
          borderRadius: '8px',
          padding: '50px 50px',
          fontSize: '16px',
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
          width: '230px'
        },
      };
    
    return(
        <div>
            <motion.div
            initial={{scale: 0}}
            animate={{scale: 1}}
            transition={{duration: 1.5}}>
                <div>
                    <Col span={30}>
                        <center>
                            <Grid style={{ padding: "130px", display: 'flex', gap: '5px', justifyContent: 'center', alignItems: 'center'}} container spacing={15}>
                                <Link href="/EnterDatasCRUD"><CommandBarButton text='Get Datas'styles={estilosBotao}/></Link>
                                <Link href="/PraticeComp"><CommandBarButton text='Pratice' styles={estilosBotao}/></Link>
                                <Link href="/TheoryComp"><CommandBarButton text='Theory' styles={estilosBotao}/></Link>
                                <Link href="/AudioFeedback"><CommandBarButton text='Audio' styles={estilosBotao}/></Link>
                            </Grid>
                        </center>
                        <EnviarMensagem/>
                    </Col>
            </div></motion.div>
        </div>
    )
}

/*


            <motion.div
            initial={{scale: 0}}
            animate={{scale: 1}}
            transition={{duration: 1.5}}>
                <div>
                    <Col span={30}>
                        <center>
                            <Col span={5}>
                                <Card style={{backgroundColor: 'darkblue', color: 'white', width: '450px', height: '150px', padding: "50px", opacity: "5px"}}>
                                    <Link href="/Contacts"><Button>Contacts</Button></Link>
                                    <Link href="/EnterDatasCRUD"><Button>Get Datas</Button></Link>
                                    <Link href="/PraticeComp"><Button>Pratice</Button></Link>
                                    <Link href="/TheoryComp"><Button>Theory</Button></Link>
                                </Card>
                            </Col>
                        </center>
                    </Col>
            </div></motion.div>
                        <motion.div
            initial={{scale: 0}}
            animate={{scale: 1}}
            transition={{duration: 1.5}}>
            <Router>
            <div style={{ display: 'flex', height: '60vh', position: 'relative', float: 'left', paddingRight: '250px' }}>
                 NavBar Lateral 
                <nav style={{
                    width: '200px',
                    backgroundColor: '#098b9cab',
                    padding: '5px',
                    boxShadow: '2px 0 5px rgba(6, 248, 228, 0.1)',
                }}>
                <Toolbar>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <Typography variant="h3" style={{ flexGrow: 1, color: 'black' }}>
                            Menu
                        </Typography>
                        <li style={{ marginBottom: '1rem' }}>
                            <Button>
                                <NavLink 
                                    to="/Contacts" 
                                    style={({ isActive }) => ({
                                        textDecoration: 'none',
                                        color: isActive ? 'blue' : 'black',
                                        fontWeight: isActive ? 'bold' : 'normal',
                                    })}
                                >
                                    Contacts
                                </NavLink>
                            </Button>
                        </li>
                        <li style={{ marginBottom: '1rem' }}>
                            <Button>
                            <NavLink 
                                to="/EnterDatasCRUD" 
                                style={({ isActive }) => ({
                                    textDecoration: 'none',
                                    color: isActive ? 'blue' : 'black',
                                    fontWeight: isActive ? 'bold' : 'normal',
                                })}
                            >
                                Enter Datas
                            </NavLink>
                            </Button>
                        </li>
                        <li style={{ marginBottom: '1rem' }}>
                            <Button>
                            <NavLink 
                                to="/PraticeComp" 
                                style={({ isActive }) => ({
                                    textDecoration: 'none',
                                    color: isActive ? 'blue' : 'black',
                                    fontWeight: isActive ? 'bold' : 'normal',
                                })}
                            >
                                Pratice
                            </NavLink>
                            </Button>
                        </li>
                        <li style={{ marginBottom: '1rem' }}>
                            <Button>
                            <NavLink 
                                to="/TheoryComp" 
                                style={({ isActive }) => ({
                                    textDecoration: 'none',
                                    color: isActive ? 'blue' : 'black',
                                    fontWeight: isActive ? 'bold' : 'normal',
                                })}
                            >
                                Theory
                            </NavLink>
                            </Button>
                        </li>
                    </ul>
                </Toolbar>
                </nav>
                <main style={{
                    flex: 1,
                    padding: '1rem',
                }}>
                    <Paper style={{backgroundColor: 'Highlight', borderStyle: 'double', borderColor: 'cyan', padding: '-30px'}}>
                    <Routes>
                        <Route path="/" element={<Hai />} />
                        <Route path="/Contacts" element={<Contactos />} />
                        <Route path="/EnterDatasCRUD" element={<Api_Interface />} />
                        <Route path="/PraticeComp" element={<PraticeComponents />} />
                        <Route path="/TheoryComp" element={<TheoryComponents />} />
                    </Routes>
                    </Paper>
                </main>
            </div>
        </Router>
        </motion.div>
*/