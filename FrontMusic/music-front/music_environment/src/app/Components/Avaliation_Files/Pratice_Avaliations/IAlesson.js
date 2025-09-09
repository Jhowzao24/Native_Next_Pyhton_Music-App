/* eslint-disable @next/next/no-img-element */
import { Button, FormLabel } from '@material-ui/core';
import { Tooltip } from '@mui/material';
import { Card, Input } from 'antd';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Questionario = () => {
  const [resposta, setResposta] = useState('');
  const [mostrarMensagem, setMostrarMensagem] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMostrarMensagem(true);
  };

  const PartsCello = (
    <div style={{backgroundColor: 'midnightblue', margin: '30px'}}>
        <ul>
            <li>volute</li>
            <li>Mirror</li>
            <li>Arm</li>
            <li>harpsichords</li>
            <li>strings, in 4 contents</li>
            <li>Banner</li>
            <li>Fs</li>
            <li>Easel</li>
            <li>Spike</li>
            <li>Soul</li>
        </ul>
    </div>
  );

  const PlayCello = (
    <div>
        <ul>
            <li>seated down</li>
            <li>Cello standing</li>
            <li>Positioned at the left side</li>
            <li>The arm will be positioned at your left heade side</li>
            <li>Positioned in the middle of the legs of Cellist</li>
        </ul>
    </div>
  );

  const PlayImage = (
    <div>
        <ul>
            <li>
                <img style={{width: '200px', height: '260px'}} src='https://th.bing.com/th/id/R.debf7ee25ec2870292b28e77f4c9af45?rik=jSMbqxXAqEwoBg&pid=ImgRaw&r=0' alt='Cello'/>
            </li>
            <li>
                <img style={{width: '200px', height: '260px'}} src='https://koenig-betcher.de/site/assets/files/1329/andreas-schmalhofer.jpg' alt='Cello'/>
            </li>
            <li>
                <img style={{width: '200px', height: '260px'}} src='https://takelessons.com/blog/wp-content/uploads/2021/02/Little-boy-playing-the-cello.jpg' alt='Cello'/>
            </li>
            <li>
                <img style={{width: '200px', height: '260px'}} src='https://th.bing.com/th/id/OIP.eBH3coJF-18j4QZ_wkGvmQHaKr?pid=ImgDet&rs=1' alt='Cello'/>
            </li>
        </ul>
    </div>
  )

  const exibirMensagem = () => {
    if (resposta === 'Sim') {
      return(
        <div style={{margin: '60px'}}>
            <Card style={{backgroundColor: 'Highlight', color: 'white'}}>
                <p>Awesome!! As you said yes, we have this all contents foryou to read!!</p>
                <hr/>
                <Tooltip title = {PartsCello}>
                    <Button style={{backgroundColor: 'blue', color: 'gold', fontFamily: 'serif', float: 'left'}}><h5>Parts Cello</h5></Button>
                </Tooltip>
                <div style={{paddingLeft: '300px'}}>
                <Tooltip title = {PlayCello}>
                    <Button style={{backgroundColor: 'blue', color: 'gold', fontFamily: 'serif', float: 'left'}}><h5>Positioning</h5></Button>
                </Tooltip>
                </div>
                <div style={{paddingLeft: '600px'}}>
                <Tooltip replacement='right' title = {PlayImage}>
                    <Button style={{backgroundColor: 'blue', color: 'gold', fontFamily: 'serif', float: 'left'}}><h5>Images Examples</h5></Button>
                </Tooltip>
                </div>
            </Card>
        </div>
      )
    } else if (resposta === 'Não') {
      return (
        <motion.div
        initial={{x: -150}}
        animate={{x: 0}}
        transition={{duration: 3}}
        >
          <Card>Please try again to know the instrument better!</Card>
        </motion.div>
      )
    }
  }

  return (
    <div style={{backgroundColor: 'Highlight'}}>
      <motion.div
      initial={{scale: 0}}
      animate={{scale: 1}}
      transition={{duration: 3}}
      >
      {mostrarMensagem ? (
        exibirMensagem()
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            <h3>Please write (Yes or Not)</h3>
            <FormLabel>Do you know Cello?</FormLabel>
            <Input type="text" value={resposta} onChange={(e) => setResposta(e.target.value)} />
          </label>
          <Button type="submit">Enviar</Button>
        </form>
      )}
      </motion.div>
    </div>
  );
}

export default Questionario;