 
"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Col } from 'antd';
import Link from 'next/link';
import { Button } from '@mui/material';
import { Grid } from '@mui/material';
import EnviarMensagem from '../Boddy_Components/MessageSend';

export default function RoteadorReact(){
    const estilosBotao = {
      backgroundColor: '#0078D4',
      color: 'white',
      borderRadius: '8px',
      padding: '50px 50px',
      fontSize: '16px',
      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
      width: '230px',
      textTransform: 'none'
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
                                <Link href="/EnterDatasCRUD" style={{textDecoration: 'none'}}>
                                  <Button variant="contained" sx={estilosBotao}>Get Datas</Button>
                                </Link>
                                <Link href="/PraticeComp" style={{textDecoration: 'none'}}>
                                  <Button variant="contained" sx={estilosBotao}>Pratice</Button>
                                </Link>
                                <Link href="/TheoryComp" style={{textDecoration: 'none'}}>
                                  <Button variant="contained" sx={estilosBotao}>Theory</Button>
                                </Link>
                                <Link href="/AudioFeedback" style={{textDecoration: 'none'}}>
                                  <Button variant="contained" sx={estilosBotao}>Audio</Button>
                                </Link>
                            </Grid>
                        </center>
                        <EnviarMensagem/>
                    </Col>
            </div></motion.div>
        </div>
    )
}
