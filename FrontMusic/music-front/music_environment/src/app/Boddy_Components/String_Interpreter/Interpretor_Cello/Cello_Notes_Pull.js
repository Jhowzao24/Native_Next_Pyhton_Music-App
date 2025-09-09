import { Button, Divider, Tooltip } from 'antd';
import React, {useEffect, useState} from 'react';
import { Toaster, toast } from 'react-hot-toast';

export default function AutoMoveQueue(){
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
    const listaItensPeças = ['corda LÁ', 'corda RÉ', 'corda SOL', 'corda DÓ'];
    const verificaçãoCorreta = 'corda DÓ';
    const verifyAnswers = () => {
        if(escolha === verificaçãoCorreta){
            setAnswer();
            toast.success('Resposta certa, Meus parabéns!');
        }else{
            setAnswer();
            toast.error('Desculpe-me tente novamente!!');
        }
    };
    /*Primeiro dedo lições!!! ---------------------------------------------------------
    -----------------------------------------------------------------------------------
    -----------------------------------------------------------------------------------*/
    const listaCelloNotes = ['Bass RÉ', 'Bass LÁ', 'MI', 'SI'];
    const verificandoNotas = 'Bass RÉ';
    const verificandoNotasCello = () => {
        if(escolha === verificandoNotas){
            setFing1();
            toast.success('Resposta Correta, Meus parabéns!')
        }else{
            setFing1();
            toast.error('Resposta incorreta, tente novamente!')
        }
    };
    const firstFing = ['Bass RÉ', 'Bass LÁ', 'MI', 'SI'];
    const checkingNotes = 'Bass LÁ';
    const checkingCelloNotes = () => {
        if(escolha === checkingNotes){
            setFing1();
            toast.success('Resposta Correta, Meus parabéns!')
        }else{
            setFing1();
            toast.error('Resposta incorreta, tente novamente!')
        }
    };
    const firstFinger = ['Bass RÉ', 'Bass LÁ', 'MI', 'SI'];
    const checkingNotesss = 'MI';
    const checkingCelloNotesss = () => {
        if(escolha === checkingNotesss){
            setFing1();
            toast.success('Resposta Correta, Meus parabéns!')
        }else{
            setFing1();
            toast.error('Resposta incorreta, tente novamente!')
        }
    };
    const firstFingerCello = ['Bass RÉ', 'Bass LÁ', 'MI', 'SI'];
    const checkingNoteCello = 'SI';
    const checkingCelloNotesCello = () => {
        if(escolha === checkingNoteCello){
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
    const secondFinger1 = ['Bass MI', 'Bass SI', 'FÁ', 'DÓ'];
    const checkFing1 = 'Bass MI';
    const checkFinger1Cello = () => {
        if(escolha === checkFing1){
            setFing2();
            toast.success('Resposta Correta, Meus parabéns!')
        }else{
            setFing2();
            toast.error('Resposta incorreta, tente novamente!')
        }
    };
    const secondFinger2 = ['Bass MI', 'Bass SI', 'FÁ', 'DÓ'];
    const checkFing2 = 'Bass SI';
    const checkFinger2Cello = () => {
        if(escolha === checkFing2){
            setFing2();
            toast.success('Resposta Correta, Meus parabéns!')
        }else{
            setFing2();
            toast.error('Resposta incorreta, tente novamente!')
        }
    };
    const secondFinger3 = ['Bass MI', 'Bass SI', 'FÁ', 'DÓ'];
    const checkFing3 = 'FÁ';
    const checkFinger3Cello = () => {
        if(escolha === checkFing3){
            setFing2();
            toast.success('Resposta Correta, Meus parabéns!')
        }else{
            setFing2();
            toast.error('Resposta incorreta, tente novamente!')
        }
    };
    const secondFinger4 = ['Bass MI', 'Bass SI', 'FÁ', 'DÓ'];
    const checkFing4 = 'DÓ';
    const checkFinger4Cello = () => {
        if(escolha === checkFing4){
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
    const terceiroFinger1 = ['Bass FÁ', 'Bass DÓ', 'SOL', 'RÉ'];
    const checkerFing1 = 'Bass FÁ';
    const checkerCelloFing1 = () => {
        if(escolha === checkerFing1){
            setFing3();
            toast.success('Resposta Correta, Meus parabéns!')
        }else{
            setFing3();
            toast.error('Resposta incorreta, tente novamente!')
        }
    };
    const terceiroFinger2 = ['Bass FÁ', 'Bass DÓ', 'SOL', 'RÉ'];
    const checkerFing2 = 'Bass DÓ';
    const checkerCelloFing2 = () => {
        if(escolha === checkerFing2){
            setFing3();
            toast.success('Resposta Correta, Meus parabéns!')
        }else{
            setFing3();
            toast.error('Resposta incorreta, tente novamente!')
        }
    };
    const terceiroFinger3 = ['Bass FÁ', 'Bass DÓ', 'SOL', 'RÉ'];
    const checkerFing3 = 'SOL';
    const checkerCelloFing3 = () => {
        if(escolha === checkerFing3){
            setFing3();
            toast.success('Resposta Correta, Meus parabéns!')
        }else{
            setFing3();
            toast.error('Resposta incorreta, tente novamente!')
        }
    };
    const terceiroFinger4 = ['Bass FÁ', 'Bass DÓ', 'SOL', 'RÉ'];
    const checkerFing4 = 'RÉ';
    const checkerCelloFing4 = () => {
        if(escolha === checkerFing4){
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
    const quartoFinger1 = ['Bass SOL', 'RÉ', 'LÁ', 'MI'];
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
    const quartoFinger2 = ['Bass SOL', 'RÉ', 'LÁ', 'MI'];
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
    const quartoFinger3 = ['Bass SOL', 'RÉ', 'LÁ', 'MI'];
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
    const quartoFinger4 = ['Bass SOL', 'RÉ', 'LÁ', 'MI'];
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
                    <h3>At the cello strings, what string will be more bass?</h3>
                    {listaItensPeças.map(itemm => (
                        <Button key={itemm} onClick={() => setEscolha(itemm)}>{itemm}</Button>
                    ))}
                    <Button style={{backgroundColor: 'lightgreen'}} onClick={verifyAnswers}>Verify the answers!</Button>
                    </fieldset>
                    <br/>
                    





                    <fieldset><legend style={{fontFamily: 'serif', fontSize: '25px', backgroundColor: 'lightgrey', color: 'Highlight', boxShadow: '0 0 3px 5px'}}>Fingers at the Cello strings positions!</legend>
                    <details><summary style={{fontSize: '13px', fontFamily: 'serif', backgroundColor: 'lightblue'}}>1º Finger!</summary>
                    <fieldset>
                        <center>
                            <h1>Playing at cello strings!</h1>
                            <br/>
                            <h3>First of all you must to learn about the fingers you have to touch</h3>
                            <h3>Let's play all the strings with the first finger! And discovery what notes this will take!!</h3>
                            <Tooltip title='If you are in doubt with on where to put the finger, go to the instrument and find the DÓ string!'>
                                <h3 style={{fotnFamily: 'serif', fontSize: '15px'}}>Doubts(?)</h3>
                            </Tooltip>
                            {listaCelloNotes.map(itemmm => (
                            <Button key={itemmm} onClick={() => setEscolha(itemmm)}>{itemmm}</Button>
                            ))}
                            <Button style={{backgroundColor: 'lightgreen'}} onClick={verificandoNotasCello}>Verify the answers!</Button>
                            <br/><Divider style={{borderColor: 'blue'}}/>
                            <h3>What will be the note of the first finger at the SOL string?</h3>
                            <Tooltip title='If you are in doubt with on where to put the finger, go to the instrument and find the SOL string!'>
                                <h3 style={{fotnFamily: 'serif', fontSize: '15px'}}>Doubts(?)</h3>
                            </Tooltip>
                            {firstFing.map(itemmm => (
                            <Button key={itemmm} onClick={() => setEscolha(itemmm)}>{itemmm}</Button>
                            ))}
                            <Button style={{backgroundColor: 'lightgreen'}} onClick={checkingCelloNotes}>Verify the answers!</Button>
                            <br/><Divider style={{borderColor: 'blue'}}/>
                            <h3>What will be the note of the first finger at the RÉ string?</h3>
                            <Tooltip title='If you are in doubt with on where to put the finger, go to the instrument and find the SOL string!'>
                                <h3 style={{fotnFamily: 'serif', fontSize: '15px'}}>Doubts(?)</h3>
                            </Tooltip>
                            {firstFinger.map(itemmm => (
                            <Button key={itemmm} onClick={() => setEscolha(itemmm)}>{itemmm}</Button>
                            ))}
                            <Button style={{backgroundColor: 'lightgreen'}} onClick={checkingCelloNotesss}>Verify the answers!</Button>
                            <br/><Divider style={{borderColor: 'blue'}}/>
                            <h3>What will be the note of the first finger at the RÉ string?</h3>
                            <Tooltip title='If you are in doubt with on where to put the finger, go to the instrument and find the SOL string!'>
                                <h3 style={{fotnFamily: 'serif', fontSize: '15px'}}>Doubts(?)</h3>
                            </Tooltip>
                            {firstFingerCello.map(itemmm => (
                            <Button key={itemmm} onClick={() => setEscolha(itemmm)}>{itemmm}</Button>
                            ))}
                            <Button style={{backgroundColor: 'lightgreen'}} onClick={checkingCelloNotesCello}>Verify the answers!</Button>
                        </center>
                    </fieldset>
                    </details>




                    <details><summary style={{fontSize: '13px', fontFamily: 'serif', backgroundColor: 'lightblue'}}>2º Finger!</summary>
                    <fieldset>
                        <center>
                            <h1>Playing at cello strings!</h1>
                            <br/>
                            <h3>First of all you must to learn about the fingers you have to touch</h3>
                            <h3>Let's play all the strings with the second finger! And discovery what notes this will take!!</h3>
                            <Tooltip title='If you are in doubt with on where to put the finger, go to the instrument and find the DÓ string!'>
                                <h3 style={{fotnFamily: 'serif', fontSize: '15px'}}>Doubts(?)</h3>
                            </Tooltip>
                            {secondFinger1.map(itemmm => (
                            <Button key={itemmm} onClick={() => setEscolha(itemmm)}>{itemmm}</Button>
                            ))}
                            <Button style={{backgroundColor: 'lightgreen'}} onClick={checkFinger1Cello}>Verify the answers!</Button>
                            <br/><Divider style={{borderColor: 'blue'}}/>
                            <h3>What will be the note of the second finger at the SOL string?</h3>
                            <Tooltip title='If you are in doubt with on where to put the finger, go to the instrument and find the SOL string!'>
                                <h3 style={{fotnFamily: 'serif', fontSize: '15px'}}>Doubts(?)</h3>
                            </Tooltip>
                            {secondFinger2.map(itemmm => (
                            <Button key={itemmm} onClick={() => setEscolha(itemmm)}>{itemmm}</Button>
                            ))}
                            <Button style={{backgroundColor: 'lightgreen'}} onClick={checkFinger2Cello}>Verify the answers!</Button>
                            <br/><Divider style={{borderColor: 'blue'}}/>
                            <h3>What will be the note of the second finger at the RÉ string?</h3>
                            <Tooltip title='If you are in doubt with on where to put the finger, go to the instrument and find the SOL string!'>
                                <h3 style={{fotnFamily: 'serif', fontSize: '15px'}}>Doubts(?)</h3>
                            </Tooltip>
                            {secondFinger3.map(itemmm => (
                            <Button key={itemmm} onClick={() => setEscolha(itemmm)}>{itemmm}</Button>
                            ))}
                            <Button style={{backgroundColor: 'lightgreen'}} onClick={checkFinger3Cello}>Verify the answers!</Button>
                            <br/><Divider style={{borderColor: 'blue'}}/>
                            <h3>What will be the note of the second finger at the LÁ string?</h3>
                            <Tooltip title='If you are in doubt with on where to put the finger, go to the instrument and find the SOL string!'>
                                <h3 style={{fotnFamily: 'serif', fontSize: '15px'}}>Doubts(?)</h3>
                            </Tooltip>
                            {secondFinger4.map(itemmm => (
                            <Button key={itemmm} onClick={() => setEscolha(itemmm)}>{itemmm}</Button>
                            ))}
                            <Button style={{backgroundColor: 'lightgreen'}} onClick={checkFinger4Cello}>Verify the answers!</Button>
                        </center>
                    </fieldset>
                    </details>


                    


                    <details><summary style={{fontSize: '13px', fontFamily: 'serif', backgroundColor: 'lightblue'}}>3º Finger!</summary>
                    <fieldset>
                        <center>
                            <h1>Playing at cello strings!</h1>
                            <br/>
                            <h3>First of all you must to learn about the fingers you have to touch</h3>
                            <h3>Let's play all the strings with the third finger! And discovery what notes this will take!!</h3>
                            <Tooltip title='If you are in doubt with on where to put the finger, go to the instrument and find the DÓ string!'>
                                <h3 style={{fotnFamily: 'serif', fontSize: '15px'}}>Doubts(?)</h3>
                            </Tooltip>
                            {terceiroFinger1.map(itemmm => (
                            <Button key={itemmm} onClick={() => setEscolha(itemmm)}>{itemmm}</Button>
                            ))}
                            <Button style={{backgroundColor: 'lightgreen'}} onClick={checkerCelloFing1}>Verify the answers!</Button>
                            <br/><Divider style={{borderColor: 'blue'}}/>
                            <h3>What will be the note of the third finger at the SOL string?</h3>
                            <Tooltip title='If you are in doubt with on where to put the finger, go to the instrument and find the SOL string!'>
                                <h3 style={{fotnFamily: 'serif', fontSize: '15px'}}>Doubts(?)</h3>
                            </Tooltip>
                            {terceiroFinger2.map(itemmm => (
                            <Button key={itemmm} onClick={() => setEscolha(itemmm)}>{itemmm}</Button>
                            ))}
                            <Button style={{backgroundColor: 'lightgreen'}} onClick={checkerCelloFing2}>Verify the answers!</Button>
                            <br/><Divider style={{borderColor: 'blue'}}/>
                            <h3>What will be the note of the third finger at the RÉ string?</h3>
                            <Tooltip title='If you are in doubt with on where to put the finger, go to the instrument and find the SOL string!'>
                                <h3 style={{fotnFamily: 'serif', fontSize: '15px'}}>Doubts(?)</h3>
                            </Tooltip>
                            {terceiroFinger3.map(itemmm => (
                            <Button key={itemmm} onClick={() => setEscolha(itemmm)}>{itemmm}</Button>
                            ))}
                            <Button style={{backgroundColor: 'lightgreen'}} onClick={checkerCelloFing3}>Verify the answers!</Button>
                            <br/><Divider style={{borderColor: 'blue'}}/>
                            <h3>What will be the note of the third finger at the RÉ string?</h3>
                            <Tooltip title='If you are in doubt with on where to put the finger, go to the instrument and find the SOL string!'>
                                <h3 style={{fotnFamily: 'serif', fontSize: '15px'}}>Doubts(?)</h3>
                            </Tooltip>
                            {terceiroFinger4.map(itemmm => (
                            <Button key={itemmm} onClick={() => setEscolha(itemmm)}>{itemmm}</Button>
                            ))}
                            <Button style={{backgroundColor: 'lightgreen'}} onClick={checkerCelloFing4}>Verify the answers!</Button>
                        </center>
                    </fieldset>
                    </details>


                    


                    <details><summary style={{fontSize: '13px', fontFamily: 'serif', backgroundColor: 'lightblue'}}>4º Finger!</summary>
                    <fieldset>
                        <center>
                            <h1>Playing at cello strings!</h1>
                            <br/>
                            <h3>First of all you must to learn about the fingers you have to touch</h3>
                            <h3>Let's play all the strings with the fourth finger! And discovery what notes this will take!!</h3>
                            <Tooltip title='If you are in doubt with on where to put the finger, go to the instrument and find the DÓ string!'>
                                <h3 style={{fotnFamily: 'serif', fontSize: '15px'}}>Doubts(?)</h3>
                            </Tooltip>
                            {quartoFinger1.map(itemmm => (
                            <Button key={itemmm} onClick={() => setEscolha(itemmm)}>{itemmm}</Button>
                            ))}
                            <Button style={{backgroundColor: 'lightgreen'}} onClick={checkQuart1}>Verify the answers!</Button>
                            <br/><Divider style={{borderColor: 'blue'}}/>
                            <h3>What will be the note of the fourth finger at the SOL string?</h3>
                            <Tooltip title='If you are in doubt with on where to put the finger, go to the instrument and find the SOL string!'>
                                <h3 style={{fotnFamily: 'serif', fontSize: '15px'}}>Doubts(?)</h3>
                            </Tooltip>
                            {quartoFinger2.map(itemmm => (
                            <Button key={itemmm} onClick={() => setEscolha(itemmm)}>{itemmm}</Button>
                            ))}
                            <Button style={{backgroundColor: 'lightgreen'}} onClick={checkQuart2}>Verify the answers!</Button>
                            <br/><Divider style={{borderColor: 'blue'}}/>
                            <h3>What will be the note of the fourth finger at the RÉ string?</h3>
                            <Tooltip title='If you are in doubt with on where to put the finger, go to the instrument and find the SOL string!'>
                                <h3 style={{fotnFamily: 'serif', fontSize: '15px'}}>Doubts(?)</h3>
                            </Tooltip>
                            {quartoFinger3.map(itemmm => (
                            <Button key={itemmm} onClick={() => setEscolha(itemmm)}>{itemmm}</Button>
                            ))}
                            <Button style={{backgroundColor: 'lightgreen'}} onClick={checkQuart3}>Verify the answers!</Button>
                            <br/><Divider style={{borderColor: 'blue'}}/>
                            <h3>What will be the note of the fourth finger at the RÉ string?</h3>
                            <Tooltip title='If you are in doubt with on where to put the finger, go to the instrument and find the SOL string!'>
                                <h3 style={{fotnFamily: 'serif', fontSize: '15px'}}>Doubts(?)</h3>
                            </Tooltip>
                            {quartoFinger4.map(itemmm => (
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
            </div>
        )
}