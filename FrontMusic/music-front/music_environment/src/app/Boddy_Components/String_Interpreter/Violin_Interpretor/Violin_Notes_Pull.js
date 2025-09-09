import { Button, Divider, Tooltip } from 'antd';
import React, {useEffect, useState} from 'react';
import { Grid, Card } from '@mui/material';
import { Toaster, toast } from 'react-hot-toast';

function PositionChange(){
    const [resposta, setResposta] = useState(null);
    const [escolha, setEscolha] = useState(null);
    /*Primeiro Dedo*/
    const lista1posicao = ['1º Finger', '2º Finger', '3º Finger', '4º Finger'];
    const verificaçãoCorreta = '1º Finger';
    const verifyAnswers = () => {
        if(resposta === verificaçãoCorreta){
            setEscolha();
            toast.success('Resposta certa, Meus parabéns!');
        }else{
            setEscolha();
            toast.error('Sorry it wasnt at this time!!');
        }
    };
    /*Segundo Dedo*/
    const lista1posicao2 = ['1º Finger (FÁ)', '1º Finger (SOL)', '1º Finger (LÁ)', '1º Finger (SI)'];
    const verificaçãoCorreta2 = '1º Finger (FÁ)';
    const verifyAnswers2 = () => {
        if(resposta === verificaçãoCorreta2){
            setEscolha();
            toast.success('Resposta certa, Meus parabéns!');
        }else{
            setEscolha();
            toast.error('Sorry it wasnt at this time!!');
        }
    };
    /*Terceira posição*/
    const lista1posicao3 = ['1º Finger (SOL)', '1º Finger (LÁ)', '1º Finger (SI)', '1º Finger (DÓ)'];
    const verificaçãoCorreta3 = '1º Finger (SOL)';
    const verifyAnswers3 = () => {
        if(resposta === verificaçãoCorreta3){
            setEscolha();
            toast.success('Resposta certa, Meus parabéns!');
        }else{
            setEscolha();
            toast.error('Sorry it wasnt at this time!!');
        }
    };
    /*Quarta Posição*/
    const lista1posicao4 = ['1º Finger (LÁ)', '1º Finger (SI)', '1º Finger (DÓ)', '1º Finger (RÉ)'];
    const verificaçãoCorreta4 = '1º Finger (LÁ)';
    const verifyAnswers4 = () => {
        if(resposta === verificaçãoCorreta4){
            setEscolha();
            toast.success('Resposta certa, Meus parabéns!');
        }else{
            setEscolha();
            toast.error('Sorry it wasnt at this time!!');
        }
    };
    /*Quinta Posição*/
    const lista1posicao5 = ['1º Finger (SI)', '1º Finger (DÓ)', '1º Finger (RÉ)', '1º Finger (MI)'];
    const verificaçãoCorreta5 = '1º Finger (SI)';
    const verifyAnswers5 = () => {
        if(resposta === verificaçãoCorreta5){
            setEscolha();
            toast.success('Resposta certa, Meus parabéns!');
        }else{
            setEscolha();
            toast.error('Sorry it wasnt at this time!!');
        }
    };
    /*Tela de notas com input*/
    const [value, setValue] = useState('');
    const [showDatas, setShowDatas] = useState(false);
    const handleInputChange = (e) => {
        setValue(e.target.value);
    };
    const handleSubmit = () => {
        if(value === 'Do 1' || 'Si 1' || 'Fá 1' || 'Ré 1' || 'Mi 1' || 'Sol 1' || 'Lá 1'){
            setShowDatas(true);
        }else{
            toast.info('Type the right value!');
        }
    };
    /*<Tooltip title='Ola Rapaziada'><p>Ola</p></Tooltip>*/
    return(
        <div style={{color: 'blue', fontFamily: 'monospace'}}>
            <details><summary style={{backgroundColor: 'cyan'}}>String RÉ</summary>
            <h2 style={{backgroundColor: 'lightblue'}}>As you know, the violin has other different heights of sound, that it need some position changes!</h2>
            <img style={{width: '450px'}} src='https://i.ytimg.com/vi/nINjq4qc6oY/maxresdefault.jpg' alt='PentagramNotes'/>
            <Grid container spacing={25} style={{paddingLeft: '360px'}}>
                <Tooltip title='At the violin string, this note will be ever playied by the 1º finger, because this is the 2º position on the violin at the RÉ string!'>
                <p>
                                            Begin of the 1º Finger<br/>
                    |------------------------------------------------------------------------|
                </p>
                </Tooltip>
            </Grid>
            {escolha}<br/><br/><br/><br/>
            <h3>Think on it, choice a finger that more explan the 1º position on the violin string, What finger will be first for this position? Answer!!!</h3>
            {lista1posicao.map(itemm => (
                <div>
                    <Button key={itemm} onClick={() => setResposta(itemm)}>{itemm}</Button><br/>
                </div>
            ))}<br/>
            <Button style={{backgroundColor: 'lightgreen'}} onClick={verifyAnswers}>Verify the answers!</Button>
            <br/>
            <Divider/>
            <br/>
            <h2 style={{backgroundColor: 'lightblue'}}>As you know, the violin has other different heights of sound, that it need some position changes!</h2>
            <img style={{width: '450px'}} src='https://i.ytimg.com/vi/nINjq4qc6oY/maxresdefault.jpg' alt='PentagramNotes'/>
            <Grid container spacing={25} style={{paddingLeft: '390px'}}>
                <Tooltip title='At the violin string, this note will be ever playied by the 1º finger, because this is the 1º position on the violin at the RÉ string!'>
                <p>
                                            Begin of the 1º Finger<br/>
                    |------------------------------------------------------------------------|
                </p>
                </Tooltip>
            </Grid>
            {escolha}<br/><br/><br/><br/>
            <h3>Think on it, choice a finger that more explan the 3º position on the violin string, What note will be positioned? Answer!!!</h3>
            {lista1posicao2.map(itemm => (
                <div>
                    <Button key={itemm} onClick={() => setResposta(itemm)}>{itemm}</Button><br/>
                </div>
            ))}<br/>
            <Button style={{backgroundColor: 'lightgreen'}} onClick={verifyAnswers2}>Verify the answers!</Button>
            <br/>
            <Divider/>
            <br/>
            <h2 style={{backgroundColor: 'lightblue'}}>As you know, the violin has other different heights of sound, that it need some position changes!</h2>
            <img style={{width: '450px'}} src='https://i.ytimg.com/vi/nINjq4qc6oY/maxresdefault.jpg' alt='PentagramNotes'/>
            <Grid container spacing={25} style={{paddingLeft: '430px'}}>
                <Tooltip title='At the violin string, this note will be ever playied by the 1º finger, because this is the 3º position on the violin at the RÉ string! The position will receive the pronoun like 3º position because the 1º finger will get the place that you put the third finger to play the note, ad this will relativity the sequence begning from the 1º finger!'>
                <p>
                                            Begin of the 1º Finger<br/>
                    |--------------------------------------------------------------------|
                </p>
                </Tooltip>
            </Grid>
            {escolha}<br/><br/><br/><br/>
            <h3>Think on it, choice a finger that more explan the 3º position on the violin string, What note will be positioned? Answer!!!</h3>
            {lista1posicao3.map(itemm => (
                <div>
                    <Button key={itemm} onClick={() => setResposta(itemm)}>{itemm}</Button><br/>
                </div>
            ))}<br/>
            <Button style={{backgroundColor: 'lightgreen'}} onClick={verifyAnswers3}>Verify the answers!</Button>
            <br/>
            <Divider/>
            <br/>
            <h2 style={{backgroundColor: 'lightblue'}}>As you know, the violin has other different heights of sound, that it need some position changes!</h2>
            <img style={{width: '450px'}} src='https://i.ytimg.com/vi/nINjq4qc6oY/maxresdefault.jpg' alt='PentagramNotes'/>
            <Grid container spacing={25} style={{paddingLeft: '465px'}}>
                <Tooltip title='At the violin string, this note will be ever playied by the 1º finger, because this is the 4º position on the violin at the RÉ string! The position will receive the pronoun like 4º position because the 1º finger will occupy the place that you put the fourth finger to play the note, ad this will relativity the sequence begin from the 1º finger!'>
                <p>
                                            Begin of the 1º Finger<br/>
                    |------------------------------------------------------------|
                </p>
                </Tooltip>
            </Grid>
            {escolha}<br/><br/><br/><br/>
            <h3>Think on it, choice a finger that more explan the 3º position on the violin string, What note will be positioned? Answer!!!</h3>
            {lista1posicao4.map(itemm => (
                <div>
                    <Button key={itemm} onClick={() => setResposta(itemm)}>{itemm}</Button><br/>
                </div>
            ))}<br/>
            <Button style={{backgroundColor: 'lightgreen'}} onClick={verifyAnswers4}>Verify the answers!</Button>
            <br/>
            <Divider/>
            <br/>
            <h2 style={{backgroundColor: 'lightblue'}}>As you know, the violin has other different heights of sound, that it need some position changes!</h2>
            <img style={{width: '450px'}} src='https://i.ytimg.com/vi/nINjq4qc6oY/maxresdefault.jpg' alt='PentagramNotes'/>
            <Grid container spacing={25} style={{paddingLeft: '500px'}}>
                <Tooltip title='At the violin string, this note will be ever playied by the 1º finger, because this is the 5º position on the violin at the RÉ string! The position will receive the pronoun like 5º position because the 1º finger will occupy the place that you put the fifth finger to play the note, ad this will relativity the sequence begin from the 1º finger!'>
                <p>
                                            Begin of the 1º Finger<br/>
                    |---------------------------------------------------|
                </p>
                </Tooltip>
            </Grid>
            {escolha}<br/><br/><br/><br/>
            <h3>Think on it, choice a finger that more explan the 3º position on the violin string, What note will be positioned? Answer!!!</h3>
            {lista1posicao5.map(itemm => (
                <div>
                    <Button key={itemm} onClick={() => setResposta(itemm)}>{itemm}</Button><br/>
                </div>
            ))}<br/>
            <Button style={{backgroundColor: 'lightgreen'}} onClick={verifyAnswers5}>Verify the answers!</Button>
            </details>
            <Card style={{letterSpacing: '3px', color: 'Highlight', fontFamily: 'serif'}}>
                <h3>So... The String LÁ at the violin has a different height from the string RÉ</h3><br/>
                <h3>But the model to play is almost equal that the string RÉ!</h3>
                <h3>Let's start to learn the 1º position on the string LÁ!</h3>
            </Card>
            <details><summary style={{backgroundColor: 'cyan'}}>String LÁ</summary>
            <h2 style={{backgroundColor: 'lightblue'}}>As you know, the violin has other different heights of sound, that it need some position changes!</h2>
            <img style={{width: '450px'}} src='https://i.ytimg.com/vi/nINjq4qc6oY/maxresdefault.jpg' alt='PentagramNotes'/>
            <Grid container spacing={25} style={{paddingLeft: '500px'}}>
                <Tooltip title='At the violin string, this note will be ever playied by the 1º finger, because this is the 5º position on the violin at the RÉ string! The position will receive the pronoun like 5º position because the 1º finger will occupy the place that you put the fifth finger to play the note, ad this will relativity the sequence begin from the 1º finger!'>
                <p>
                                            Begin of the 1º Finger<br/>
                    |---------------------------------------------------|
                </p>
                </Tooltip>
            </Grid>
            {escolha}<br/><br/><br/><br/>
            <h3>Think on it, choice a finger that more explan the 3º position on the violin string, What note will be positioned? Answer!!!</h3>
            {lista1posicao5.map(itemm => (
                <div>
                    <Button key={itemm} onClick={() => setResposta(itemm)}>{itemm}</Button><br/>
                </div>
            ))}<br/>
            <Button style={{backgroundColor: 'lightgreen'}} onClick={verifyAnswers5}>Verify the answers!</Button>
            <br/>
            <fieldset>
                <input type='text' value={value} onChange={handleInputChange}/>
                <Button onClick={handleSubmit}>Submit</Button>
                <Divider/>
                {showDatas &&
                    <div>
                        <img src='https://th.bing.com/th/id/OIP.9LQllvVcQujQfTq6GnJcPgHaCo?rs=1&pid=ImgDetMain' alt='Parti'/>
                        <Grid container spacing={15} style={{paddingLeft: '300px'}}>
                            <Tooltip title='Ola Rapaziada'><p>Dó</p></Tooltip>
                        </Grid>
                    </div>
                }
            </fieldset>
            </details>
            <Card style={{letterSpacing: '3px', color: 'Highlight', fontFamily: 'serif'}}>
                <h3>So... The String MI at the violin has a different height from the string RÉ, LÁ together it!</h3><br/>
                <h3>But the model to play it is not equal that the string RÉ and LÁ!</h3>
                <h3>Let's start to learn the 1º position on the string MI!</h3>
            </Card>
            <details><summary style={{backgroundColor: 'cyan'}}>String Mi</summary>
            <h2 style={{backgroundColor: 'lightblue'}}>As you know, the violin has other different heights of sound, that it need some position changes!</h2>
            <img style={{width: '450px'}} src='https://i.ytimg.com/vi/nINjq4qc6oY/maxresdefault.jpg' alt='PentagramNotes'/>
            <Grid container spacing={25} style={{paddingLeft: '500px'}}>
                <Tooltip title='At the violin string, this note will be ever playied by the 1º finger, because this is the 5º position on the violin at the RÉ string! The position will receive the pronoun like 5º position because the 1º finger will occupy the place that you put the fifth finger to play the note, ad this will relativity the sequence begin from the 1º finger!'>
                <p>
                                            Begin of the 1º Finger<br/>
                    |---------------------------------------------------|
                </p>
                </Tooltip>
            </Grid>
            {escolha}<br/><br/><br/><br/>
            <h3>Think on it, choice a finger that more explan the 3º position on the violin string, What note will be positioned? Answer!!!</h3>
            {lista1posicao5.map(itemm => (
                <div>
                    <Button key={itemm} onClick={() => setResposta(itemm)}>{itemm}</Button><br/>
                </div>
            ))}<br/>
            <Button style={{backgroundColor: 'lightgreen'}} onClick={verifyAnswers5}>Verify the answers!</Button>
            <br/>
            <fieldset>
                <input type='text' value={value} onChange={handleInputChange}/>
                <Button onClick={handleSubmit}>Submit</Button>
                <Divider/>
                {showDatas &&
                    <div>
                        <img src='https://th.bing.com/th/id/OIP.9LQllvVcQujQfTq6GnJcPgHaCo?rs=1&pid=ImgDetMain' alt='Parti'/>
                        <Grid container spacing={15} style={{paddingLeft: '300px'}}>
                            <Tooltip title='Ola Rapaziada'><p>Dó</p></Tooltip>
                        </Grid>
                    </div>
                }
            </fieldset>
            </details>
            <Card style={{letterSpacing: '3px', color: 'Highlight', fontFamily: 'serif'}}>
                <h3>So... The String SOL at the violin has a different height from the string RÉ, LÁ and MI</h3><br/>
                <h3>But the model to play is almost equal that the string RÉ, LÁ and MI!</h3>
                <h3>Let's start to learn the 1º position on the string SOL!</h3>
            </Card>
            <details><summary style={{backgroundColor: 'cyan'}}>String SOL</summary>
            <h2 style={{backgroundColor: 'lightblue'}}>As you know, the violin has other different heights of sound, that it need some position changes!</h2>
            <img style={{width: '450px'}} src='https://i.ytimg.com/vi/nINjq4qc6oY/maxresdefault.jpg' alt='PentagramNotes'/>
            <Grid container spacing={25} style={{paddingLeft: '500px'}}>
                <Tooltip title='At the violin string, this note will be ever playied by the 1º finger, because this is the 5º position on the violin at the RÉ string! The position will receive the pronoun like 5º position because the 1º finger will occupy the place that you put the fifth finger to play the note, ad this will relativity the sequence begin from the 1º finger!'>
                <p>
                                            Begin of the 1º Finger<br/>
                    |---------------------------------------------------|
                </p>
                </Tooltip>
            </Grid>
            {escolha}<br/><br/><br/><br/>
            <h3>Think on it, choice a finger that more explan the 3º position on the violin string, What note will be positioned? Answer!!!</h3>
            {lista1posicao5.map(itemm => (
                <div>
                    <Button key={itemm} onClick={() => setResposta(itemm)}>{itemm}</Button><br/>
                </div>
            ))}<br/>
            <Button style={{backgroundColor: 'lightgreen'}} onClick={verifyAnswers5}>Verify the answers!</Button>
            <br/>
            <fieldset>
                <input type='text' value={value} onChange={handleInputChange}/>
                <Button onClick={handleSubmit}>Submit</Button>
                <Divider/>
                <img src='https://th.bing.com/th/id/OIP.9LQllvVcQujQfTq6GnJcPgHaCo?rs=1&pid=ImgDetMain' alt='Parti'/>
                {showDatas &&
                    <div>
                        <Grid container spacing={15} style={{paddingLeft: '300px'}}>
                            <Tooltip title='Ola Rapaziada'><p>Dó</p></Tooltip>
                        </Grid>
                        <br/>
                        {value}
                    </div>
                }
            </fieldset>
            </details>
        </div>
    )
}

export default function ViolinJumperNotas(){
    /*Primeiro dedo lições!!!!*/
    const [fing1, setFing1] = useState(null);
    const [fing2, setFing2] = useState(null);
    const [fing3, setFing3] = useState(null);
    const [fing4, setFing4] = useState(null);
    const [answer, setAnswer] = useState(null);
    const [resposta, setResposta] = useState(null);
    const [escolha, setEscolha] = useState(null);
    const listaItens = ['LÁ DÓ RÉ MI FÁ SOL', 'DÓ RÉ MI FÁ SOL LÁ', 'FÁ SOL LÁ DÓ RÉ MI', 'RÉ MI FÁ SOL LÁ DÓ'];
    const respostaCorreta = 'DÓ RÉ MI FÁ SOL LÁ';
    const verificarResposta = () => {
        if(escolha === respostaCorreta){
            setResposta();
            toast.success('Resposta Correta, Meus parabéns!')
        }else{
            setResposta();
            toast.error('Resposta incorreta, tente novamente!')
        }
    };
    const listaItensPeças = ['corda LÁ', 'corda RÉ', 'corda SOL', 'corda MI'];
    const verificaçãoCorreta = 'corda SOL';
    const verifyAnswers = () => {
        if(escolha === verificaçãoCorreta){
            setAnswer();
            toast.success('Resposta certa, Meus parabéns!');
        }else{
            setAnswer();
            toast.error('Sorry it wasnt at this time!!');
        }
    };
    /*Primeiro dedo lições!!! ---------------------------------------------------------
    -----------------------------------------------------------------------------------
    -----------------------------------------------------------------------------------*/
    const firstFingVio1 = ['MI', 'Bass LÁ', 'SI', 'FÁ'];
    const verificandoNotas = 'Bass LÁ';
    const verificandoNotasViolin = () => {
        if(escolha === verificandoNotas){
            setFing1();
            toast.success('Resposta Correta, Meus parabéns!')
        }else{
            setFing1();
            toast.error('Resposta incorreta, tente novamente!')
        }
    };
    const firstFingVio2 = ['Bass LÁ', 'FÁ', 'MI', 'SI'];
    const checkingNotes = 'MI';
    const checkingViolinNotes = () => {
        if(escolha === checkingNotes){
            setFing1();
            toast.success('Resposta Correta, Meus parabéns!')
        }else{
            setFing1();
            toast.error('Resposta incorreta, tente novamente!')
        }
    };
    const firstFingVio3 = ['FÁ', 'Bass LÁ', 'MI', 'SI'];
    const checkingNotesss = 'SI';
    const checkingViolinNotesss = () => {
        if(escolha === checkingNotesss){
            setFing1();
            toast.success('Resposta Correta, Meus parabéns!')
        }else{
            setFing1();
            toast.error('Resposta incorreta, tente novamente!')
        }
    };
    const firstFingVio4 = ['MI', 'Bass LÁ', 'FÁ', 'SI'];
    const checkingNoteViolin = 'FÁ';
    const checkingViolinNotesViolin = () => {
        if(escolha === checkingNoteViolin){
            setFing1();
            toast.success('Resposta Correta, Meus parabéns!')
        }else{
            setFing1();
            toast.error('Resposta incorreta, tente novamente!')
        }
    };
    /*Segundo dedo lições! --------------------------------------------------------------
    -------------------------------------------------------------------------------------
    -------------------------------------------------------------------------------------
    -------------------------------------------------------------------------------------*/
    const secondFingVio1 = ['Bass SI', 'FÁ', 'DÓ', 'SOL'];
    const checkVioFing1 = 'Bass SI';
    const checkFingViolin1 = () => {
        if(escolha === checkVioFing1){
            setFing2();
            toast.success('Resposta Correta, Meus parabéns!')
        }else{
            setFing2();
            toast.error('Resposta incorreta, tente novamente!')
        }
    };
    const secondFingVio2 = ['Bass MI', 'Bass SI', 'FÁ', 'DÓ'];
    const checkVioFing2 = 'Bass SI';
    const checkFinger2Violin = () => {
        if(escolha === checkVioFing2){
            setFing2();
            toast.success('Resposta Correta, Meus parabéns!')
        }else{
            setFing2();
            toast.error('Resposta incorreta, tente novamente!')
        }
    };
    const secondFingVio3 = ['Bass MI', 'Bass SI', 'FÁ', 'DÓ'];
    const checkVioFing3 = 'FÁ';
    const checkFinger3Violin = () => {
        if(escolha === checkVioFing3){
            setFing2();
            toast.success('Resposta Correta, Meus parabéns!')
        }else{
            setFing2();
            toast.error('Resposta incorreta, tente novamente!')
        }
    };
    const secondFingVio4 = ['Bass MI', 'Bass SI', 'FÁ', 'DÓ'];
    const checkVioFing4 = 'DÓ';
    const checkFinger4Violin = () => {
        if(escolha === checkVioFing4){
            setFing2();
            toast.success('Resposta Correta, Meus parabéns!')
        }else{
            setFing2();
            toast.error('Resposta incorreta, tente novamente!')
        }
    };
    /*Terceiro dedo lições!! ---------------------------------------------------------
    ----------------------------------------------------------------------------------
    ----------------------------------------------------------------------------------*/
    const terceiroFingVio1 = ['Bass FÁ', 'Bass DÓ', 'SOL', 'RÉ'];
    const checkerFing1Violin = 'Bass FÁ';
    const checkerViolinFing1 = () => {
        if(escolha === checkerFing1Violin){
            setFing3();
            toast.success('Resposta Correta, Meus parabéns!')
        }else{
            setFing3();
            toast.error('Resposta incorreta, tente novamente!')
        }
    };
    const terceiroFingVio2 = ['Bass FÁ', 'Bass DÓ', 'SOL', 'RÉ'];
    const checkerFing2Violin = 'Bass DÓ';
    const checkerViolinFing2 = () => {
        if(escolha === checkerFing2Violin){
            setFing3();
            toast.success('Resposta Correta, Meus parabéns!')
        }else{
            setFing3();
            toast.error('Resposta incorreta, tente novamente!')
        }
    };
    const terceiroFingVio3 = ['Bass FÁ', 'Bass DÓ', 'SOL', 'RÉ'];
    const checkerFing3Violin = 'SOL';
    const checkerViolinFing3 = () => {
        if(escolha === checkerFing3Violin){
            setFing3();
            toast.success('Resposta Correta, Meus parabéns!')
        }else{
            setFing3();
            toast.error('Resposta incorreta, tente novamente!')
        }
    };
    const terceiroFingVio4 = ['Bass FÁ', 'Bass DÓ', 'SOL', 'RÉ'];
    const checkerFing4Violin = 'RÉ';
    const checkerViolinFing4 = () => {
        if(escolha === checkerFing4Violin){
            setFing3();
            toast.success('Resposta Correta, Meus parabéns!')
        }else{
            setFing3();
            toast.error('Resposta incorreta, tente novamente!')
        }
    };
    /*Quarto dedo lições -----------------------------------------------------------------------
    --------------------------------------------------------------------------------------------
    --------------------------------------------------------------------------------------------*/
    const quartoFingVio1 = ['Bass SOL', 'RÉ', 'LÁ', 'MI'];
    const checkQuartFing1 = 'Bass SOL';
    const checkQuart1 = () => {
        if(escolha === checkQuartFing1){
            setFing4();
            toast.success('Resposta Correta, Meus parabéns!')
        }else{
            setFing4();
            toast.error('Resposta incorreta, tente novamente!')
        }
    };
    const quartoFingVio2 = ['Bass SOL', 'RÉ', 'LÁ', 'MI'];
    const checkQuartFing2 = 'RÉ';
    const checkQuart2 = () => {
        if(escolha === checkQuartFing2){
            setFing4();
            toast.success('Resposta Correta, Meus parabéns!')
        }else{
            setFing4();
            toast.error('Resposta incorreta, tente novamente!')
        }
    };
    const quartoFingVio3 = ['Bass SOL', 'RÉ', 'LÁ', 'MI'];
    const checkQuartFing3 = 'LÁ';
    const checkQuart3 = () => {
        if(escolha === checkQuartFing3){
            setFing4();
            toast.success('Resposta Correta, Meus parabéns!')
        }else{
            setFing4();
            toast.error('Resposta incorreta, tente novamente!')
        }
    };
    const quartoFingVio4 = ['Bass SOL', 'RÉ', 'LÁ', 'MI'];
    const checkQuartFing4 = 'MI';
    const checkQuart4 = () => {
        if(escolha === checkQuartFing4){
            setFing4();
            toast.success('Resposta Correta, Meus parabéns!')
        }else{
            setFing4();
            toast.error('Resposta incorreta, tente novamente!')
        }
    };
    /*-----------------------------------------------------------------------
    -------------------------------------------------------------------------
    -------------------------------------------------------------------------
    -------------------------------------------------------------------------*/
    const [queue, setQueue] = useState(['DÓ', 'RÉ', 'MI', 'FÁ', 'SOL', 'LÁ']);
    useEffect(() => {
        // eslint-disable-next-line no-unused-vars
        const interval = setInterval(() => {
            setQueue(prevQueue => {
                const newQueue = [...prevQueue];
                const firstElement = newQueue.shift();
                newQueue.push(firstElement);
                return newQueue;
            });
        }, 5000);
        return() => clearInterval;
        },[]);
        return(
            <div>
                <h2>Memorize exercise!</h2>
                <Tooltip title='This exercise you will must have to cognize the right sequence and you will check it in your mind and after you will say the sequence in your mouth!'>
                    <p style={{fontFamily: 'serif', color: 'white', backgroundColor: 'Highlight', opacity: '0.7'}}>Instructions (?)</p>
                </Tooltip>
                {queue.map((item, index) => (
                    <div key={index} style={{margin: '10px', display: 'inline-block', color: 'black', fontSize: '30px', boxShadow: '0 0 3px 5px'}}>
                        {item}
                    </div>
                ))}
                <div>
                    <fieldset style={{backgroundColor: 'lightskyblue'}}>
                    <h3>At the follow scales, what will be the scale that is right?!</h3>
                    {listaItens.map(item => (
                        <Button key={item} onClick={() => setEscolha(item)}>{item}</Button>
                    ))}<br/>
                    <Button style={{backgroundColor: 'lightgreen'}} onClick={verificarResposta}>Verificar</Button>
                    </fieldset>
                    <Divider style={{borderColor: 'blue'}}/>
                    <fieldset style={{backgroundColor: 'blueviolet', color: 'gold'}}>
                    <h3>At the Violin strings, what string will be more bass?</h3>
                    {listaItensPeças.map(itemm => (
                        <Button key={itemm} onClick={() => setEscolha(itemm)}>{itemm}</Button>
                    ))}
                    <Button style={{backgroundColor: 'lightgreen'}} onClick={verifyAnswers}>Verify the answers!</Button>
                    </fieldset>
                    <br/>




                    <fieldset><legend style={{fontFamily: 'serif', fontSize: '25px', backgroundColor: 'lightgrey', color: 'Highlight', boxShadow: '0 0 3px 5px'}}>Fingers at the Cello strings positions!</legend>
                    <details><summary style={{fontSize: '13px', fontFamily: 'serif', backgroundColor: 'lightblue', color: 'purple'}}>1º Finger!</summary>
                    <fieldset style={{color: 'purple'}}>
                        <center>
                            <h1>Playing at cello strings!</h1>
                            <br/>
                            <h3>First of all you must to learn about the fingers you have to touch</h3>
                            <h3>Let's play all the strings with the first finger! And discovery what notes this will take!!</h3>
                            <Tooltip title='If you are in doubt with on where to put the finger, go to the instrument and find the DÓ string!'>
                                <h3 style={{fotnFamily: 'serif', fontSize: '15px'}}>Doubts(?)</h3>
                            </Tooltip>
                            <h3>What will be the note of the first finger at the SOL string?</h3>
                            {firstFingVio1.map(itemmm => (
                            <Button key={itemmm} onClick={() => setEscolha(itemmm)}>{itemmm}</Button>
                            ))}
                            <Button style={{backgroundColor: 'lightgreen'}} onClick={verificandoNotasViolin}>Verify the answers!</Button>
                            <br/><Divider style={{borderColor: 'blue'}}/>
                            <h3>What will be the note of the first finger at the RÉ string?</h3>
                            <Tooltip title='If you are in doubt with on where to put the finger, go to the instrument and find the SOL string!'>
                                <h3 style={{fotnFamily: 'serif', fontSize: '15px'}}>Doubts(?)</h3>
                            </Tooltip>
                            {firstFingVio2.map(itemmm => (
                            <Button key={itemmm} onClick={() => setEscolha(itemmm)}>{itemmm}</Button>
                            ))}
                            <Button style={{backgroundColor: 'lightgreen'}} onClick={checkingViolinNotes}>Verify the answers!</Button>
                            <br/><Divider style={{borderColor: 'blue'}}/>
                            <h3>What will be the note of the first finger at the LÁ string?</h3>
                            <Tooltip title='If you are in doubt with on where to put the finger, go to the instrument and find the SOL string!'>
                                <h3 style={{fotnFamily: 'serif', fontSize: '15px'}}>Doubts(?)</h3>
                            </Tooltip>
                            {firstFingVio3.map(itemmm => (
                            <Button key={itemmm} onClick={() => setEscolha(itemmm)}>{itemmm}</Button>
                            ))}
                            <Button style={{backgroundColor: 'lightgreen'}} onClick={checkingViolinNotesss}>Verify the answers!</Button>
                            <br/><Divider style={{borderColor: 'blue'}}/>
                            <h3>What will be the note of the first finger at the MI string?</h3>
                            <Tooltip title='If you are in doubt with on where to put the finger, go to the instrument and find the SOL string!'>
                                <h3 style={{fotnFamily: 'serif', fontSize: '15px'}}>Doubts(?)</h3>
                            </Tooltip>
                            {firstFingVio4.map(itemmm => (
                            <Button key={itemmm} onClick={() => setEscolha(itemmm)}>{itemmm}</Button>
                            ))}
                            <Button style={{backgroundColor: 'lightgreen'}} onClick={checkingViolinNotesViolin}>Verify the answers!</Button>
                        </center>
                    </fieldset>
                    </details>




                    <details><summary style={{fontSize: '13px', fontFamily: 'serif', backgroundColor: 'lightblue', color: 'purple'}}>2º Finger!</summary>
                    <fieldset style={{color: 'purple'}}>
                        <center>
                            <h1>Playing at cello strings!</h1>
                            <br/>
                            <h3>First of all you must to learn about the fingers you have to touch</h3>
                            <h3>Let's play all the strings with the second finger! And discovery what notes this will take!!</h3>
                            <Tooltip title='If you are in doubt with on where to put the finger, go to the instrument and find the DÓ string!'>
                                <h3 style={{fotnFamily: 'serif', fontSize: '15px'}}>Doubts(?)</h3>
                            </Tooltip>
                            <h3>What will be the note of the second finger at the SOL string?</h3>
                            {secondFingVio1.map(itemmm => (
                            <Button key={itemmm} onClick={() => setEscolha(itemmm)}>{itemmm}</Button>
                            ))}
                            <Button style={{backgroundColor: 'lightgreen'}} onClick={checkFingViolin1}>Verify the answers!</Button>
                            <br/><Divider style={{borderColor: 'blue'}}/>
                            <h3>What will be the note of the second finger at the RÉ string?</h3>
                            <Tooltip title='If you are in doubt with on where to put the finger, go to the instrument and find the SOL string!'>
                                <h3 style={{fotnFamily: 'serif', fontSize: '15px'}}>Doubts(?)</h3>
                            </Tooltip>
                            {secondFingVio2.map(itemmm => (
                            <Button key={itemmm} onClick={() => setEscolha(itemmm)}>{itemmm}</Button>
                            ))}
                            <Button style={{backgroundColor: 'lightgreen'}} onClick={checkFinger2Violin}>Verify the answers!</Button>
                            <br/><Divider style={{borderColor: 'blue'}}/>
                            <h3>What will be the note of the second finger at the LÁ string?</h3>
                            <Tooltip title='If you are in doubt with on where to put the finger, go to the instrument and find the SOL string!'>
                                <h3 style={{fotnFamily: 'serif', fontSize: '15px'}}>Doubts(?)</h3>
                            </Tooltip>
                            {secondFingVio3.map(itemmm => (
                            <Button key={itemmm} onClick={() => setEscolha(itemmm)}>{itemmm}</Button>
                            ))}
                            <Button style={{backgroundColor: 'lightgreen'}} onClick={checkFinger3Violin}>Verify the answers!</Button>
                            <br/><Divider style={{borderColor: 'blue'}}/>
                            <h3>What will be the note of the second finger at the MI string?</h3>
                            <Tooltip title='If you are in doubt with on where to put the finger, go to the instrument and find the SOL string!'>
                                <h3 style={{fotnFamily: 'serif', fontSize: '15px'}}>Doubts(?)</h3>
                            </Tooltip>
                            {secondFingVio4.map(itemmm => (
                            <Button key={itemmm} onClick={() => setEscolha(itemmm)}>{itemmm}</Button>
                            ))}
                            <Button style={{backgroundColor: 'lightgreen'}} onClick={checkFinger4Violin}>Verify the answers!</Button>
                        </center>
                    </fieldset>
                    </details>


                    


                    <details><summary style={{fontSize: '13px', fontFamily: 'serif', backgroundColor: 'lightblue', color: 'purple'}}>3º Finger!</summary>
                    <fieldset style={{color: 'purple'}}>
                        <center>
                            <h1>Playing at cello strings!</h1>
                            <br/>
                            <h3>First of all you must to learn about the fingers you have to touch</h3>
                            <h3>Let's play all the strings with the third finger! And discovery what notes this will take!!</h3>
                            <Tooltip title='If you are in doubt with on where to put the finger, go to the instrument and find the DÓ string!'>
                                <h3 style={{fotnFamily: 'serif', fontSize: '15px'}}>Doubts(?)</h3>
                            </Tooltip>
                            <h3>What will be the note of the third finger at the SOL string?</h3>
                            {terceiroFingVio1.map(itemmm => (
                            <Button key={itemmm} onClick={() => setEscolha(itemmm)}>{itemmm}</Button>
                            ))}
                            <Button style={{backgroundColor: 'lightgreen'}} onClick={checkerViolinFing1}>Verify the answers!</Button>
                            <br/><Divider style={{borderColor: 'blue'}}/>
                            <h3>What will be the note of the third finger at the RÉ string?</h3>
                            <Tooltip title='If you are in doubt with on where to put the finger, go to the instrument and find the SOL string!'>
                                <h3 style={{fotnFamily: 'serif', fontSize: '15px'}}>Doubts(?)</h3>
                            </Tooltip>
                            {terceiroFingVio2.map(itemmm => (
                            <Button key={itemmm} onClick={() => setEscolha(itemmm)}>{itemmm}</Button>
                            ))}
                            <Button style={{backgroundColor: 'lightgreen'}} onClick={checkerViolinFing2}>Verify the answers!</Button>
                            <br/><Divider style={{borderColor: 'blue'}}/>
                            <h3>What will be the note of the third finger at the LÁ string?</h3>
                            <Tooltip title='If you are in doubt with on where to put the finger, go to the instrument and find the SOL string!'>
                                <h3 style={{fotnFamily: 'serif', fontSize: '15px'}}>Doubts(?)</h3>
                            </Tooltip>
                            {terceiroFingVio3.map(itemmm => (
                            <Button key={itemmm} onClick={() => setEscolha(itemmm)}>{itemmm}</Button>
                            ))}
                            <Button style={{backgroundColor: 'lightgreen'}} onClick={checkerViolinFing3}>Verify the answers!</Button>
                            <br/><Divider style={{borderColor: 'blue'}}/>
                            <h3>What will be the note of the third finger at the MI string?</h3>
                            <Tooltip title='If you are in doubt with on where to put the finger, go to the instrument and find the SOL string!'>
                                <h3 style={{fotnFamily: 'serif', fontSize: '15px'}}>Doubts(?)</h3>
                            </Tooltip>
                            {terceiroFingVio4.map(itemmm => (
                            <Button key={itemmm} onClick={() => setEscolha(itemmm)}>{itemmm}</Button>
                            ))}
                            <Button style={{backgroundColor: 'lightgreen'}} onClick={checkerViolinFing4}>Verify the answers!</Button>
                        </center>
                    </fieldset>
                    </details>


                    


                    <details><summary style={{fontSize: '13px', fontFamily: 'serif', backgroundColor: 'lightblue', color: 'purple'}}>4º Finger!</summary>
                    <fieldset style={{color: 'purple'}}>
                        <center>
                            <h1>Playing at cello strings!</h1>
                            <br/>
                            <h3>First of all you must to learn about the fingers you have to touch</h3>
                            <h3>Let's play all the strings with the fourth finger! And discovery what notes this will take!!</h3>
                            <Tooltip title='If you are in doubt with on where to put the finger, go to the instrument and find the DÓ string!'>
                                <h3 style={{fotnFamily: 'serif', fontSize: '15px'}}>Doubts(?)</h3>
                            </Tooltip>
                            <h3>What will be the note of the fourth finger at the SOL string?</h3>
                            {quartoFingVio1.map(itemmm => (
                            <Button key={itemmm} onClick={() => setEscolha(itemmm)}>{itemmm}</Button>
                            ))}
                            <Button style={{backgroundColor: 'lightgreen'}} onClick={checkQuart1}>Verify the answers!</Button>
                            <br/><Divider style={{borderColor: 'blue'}}/>
                            <h3>What will be the note of the fourth finger at the RÉ string?</h3>
                            <Tooltip title='If you are in doubt with on where to put the finger, go to the instrument and find the SOL string!'>
                                <h3 style={{fotnFamily: 'serif', fontSize: '15px'}}>Doubts(?)</h3>
                            </Tooltip>
                            {quartoFingVio2.map(itemmm => (
                            <Button key={itemmm} onClick={() => setEscolha(itemmm)}>{itemmm}</Button>
                            ))}
                            <Button style={{backgroundColor: 'lightgreen'}} onClick={checkQuart2}>Verify the answers!</Button>
                            <br/><Divider style={{borderColor: 'blue'}}/>
                            <h3>What will be the note of the fourth finger at the LÁ string?</h3>
                            <Tooltip title='If you are in doubt with on where to put the finger, go to the instrument and find the SOL string!'>
                                <h3 style={{fotnFamily: 'serif', fontSize: '15px'}}>Doubts(?)</h3>
                            </Tooltip>
                            {quartoFingVio3.map(itemmm => (
                            <Button key={itemmm} onClick={() => setEscolha(itemmm)}>{itemmm}</Button>
                            ))}
                            <Button style={{backgroundColor: 'lightgreen'}} onClick={checkQuart3}>Verify the answers!</Button>
                            <br/><Divider style={{borderColor: 'blue'}}/>
                            <h3>What will be the note of the fourth finger at the MI string?</h3>
                            <Tooltip title='If you are in doubt with on where to put the finger, go to the instrument and find the SOL string!'>
                                <h3 style={{fotnFamily: 'serif', fontSize: '15px'}}>Doubts(?)</h3>
                            </Tooltip>
                            {quartoFingVio4.map(itemmm => (
                            <Button key={itemmm} onClick={() => setEscolha(itemmm)}>{itemmm}</Button>
                            ))}
                            <Button style={{backgroundColor: 'lightgreen'}} onClick={checkQuart4}>Verify the answers!</Button>
                        </center>
                    </fieldset>
                    </details>
                    </fieldset>


                    <p>
                        {resposta}
                        {answer}
                        {fing1}
                        {fing2}
                        {fing3}
                        {fing4}
                    </p>
                    <Toaster/>
                </div>
                <details><summary style={{color: 'blueviolet', fontSize: '15px'}}>Position Changers</summary>
                    <PositionChange/>
                </details>
                <details><summary style={{color: 'blueviolet', fontSize: '15px'}}>Scale Table</summary>
                </details>
            </div>
        )
}