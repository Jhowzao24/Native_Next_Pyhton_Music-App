/* eslint-disable @next/next/no-img-element */
import { Card, Modal, Button, Col, Divider, Tooltip,Steps,} from 'antd';
import React from 'react';
import BackspaceIcon from '@mui/icons-material/Backspace';
import ArrowRighAltIcon from '@mui/icons-material/ArrowRightAlt';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import { motion } from 'framer-motion';

export default function ViolinPratice(){
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 900,
        height: 260,
        bgcolor: 'Highlight',
        border: '2px solid #000',
        boxShadow: 10,
        p: 1,
      };
      const [open, setOpen] = React.useState(false);
      const handleOpen = () => setOpen(true);
      const handleClose = () => setOpen(false);
    return(
        <div>
            <Button style={{color: 'midnightblue', fontFamily: 'fantasy', letterSpacing: '2px'}} onClick={handleOpen}>
                <Col style={{paddingRight: '3px'}}>
                    <img style={{width: '50px', height: '50px', borderRadius: '20px', boxShadow: '0 0 3px 5px', margin: '-15px'}} src='https://th.bing.com/th/id/OIP.KBS23lshqRu4LcIRoOlv-QHaFj?pid=ImgDet&rs=1' alt='violinoprati'/>
                </Col>
                <div style={{paddingLeft: '30px'}}>Pratice with Violin</div>
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                    <motion.div
                    initial={{scale: 0}}
                    animate={{scale: 1}}
                    transition={{duration: 1}}
                    >
                <Card sx={style}>
                    <Card>
                        <center>
                            <h2>First steps with the Violin</h2>
                        </center>
                        <Col style={{paddingLeft: '200px'}}>
                            <Steps>Positioning</Steps>
                            <motion.div
                            initial={{rotate: -180}}
                            animate={{rotate: 0}}
                            transition={{duration: 1}}>
                        <Button style={{transition: 'step-start'}}>
                            <details style={{fontSize: '5px'}}><summary style={{color: 'aqua', fontFamily: 'fantasy', fontSize: '5px', letterSpacing: '10px'}}>
                                <img style={{width: '60px', height: '60px', borderRadius: '30px'}} src='https://i.pinimg.com/200x150/f3/fc/1e/f3fc1e583ced1e778e0ffd0143412217.jpg' alt='solfejo'/>
                            </summary>
                            <Card style={{width: '900px', height: '580px'}}>
                            <Divider style={{borderColor: 'midnightblue', borderWidth: '3px'}}/>
                                <Col style={{paddingRight: '300px', paddingTop: '15px'}}>
                                <Button style={{width: '900px', backgroundColor: 'Highlight'}}> 
                                <motion.div
                                initial={{scale: 0}}
                                animate={{scale: 1}}
                                transition={{duration: 5}}>
                                    <Card style={{width: '880px', height: '700px'}}>
                                        <motion.div
                                        initial={{rotate: -280}}
                                        animate={{rotate: 0}}
                                        transition={{duration: 3}}>
                                        <Col style={{float: 'left', paddingLeft: '50px'}}>
                                        <Tooltip title='Essa posição é a mais bela entre todas, pois da para se notar que, ela tocando nos mostra a suavidade que nos transmite somente ao olhar a forma em que ela toca e passa o arco e a maneira como ela esta com o seu corpo posicionado, bem mais flexibilidade esuavidade e liberdade no tocar, com classe, sem fazer bagunças e também trazendo a quem esta assistindo a calma que a musica pode transmitir sem ao menos tem um som se quer, então é essa a forma correta que se deve utilizar ao tocar esse instrumento de cordas!!'>
                                            <img style={{width: '300px', height: '200px'}} src='https://media2.giphy.com/media/Eg8NUd6YCs2TJHJmnE/giphy.gif?cid=ecf05e47xugf16zlc9v88mdpf3uisqira27jqoak9zoaruu9&ep=v1_gifs_search&rid=giphy.gif&ct=g' alt='softviolin'/>
                                        </Tooltip>
                                        </Col>
                                        </motion.div>
                                        <Col style={{float: 'left', paddingLeft: '150px'}}>
                                            <motion.div
                                            initial={{rotate: -180}}
                                            animate={{rotate: 0}}
                                            transition={{duration: 3}}>
                                        <Tooltip title='Essa posição em específico, não deve ser repetida de maneira alguma cotidianamente e repetidamente, porque ela so te trara dores nas juntas dos braços das pernas, nas juntas de todo o corpo, e também das costas principal parte onde mais o violinista sente dores, então voce terá que se alto disciplinar com isso, e nunca se esquecer deste fator, com tudo isso, algumas vezes pode acontecer de destrair e mudar a posição o angulo onde esta sentado ou de pe, porém sem fazer movimentos bruscos para que não afete seus musculos causando distensões e ficando com algumas sequelas que vao levar tempo para sair de seu corpo, e voce sentira as dores todas as vezes que for tocar até que elas sumam!'>
                                            <img style={{width: '300px', height: '200px'}} src='https://media2.giphy.com/media/l2YWpJB3n7DL097Z6/giphy.gif?cid=ecf05e47g8gw1lym75lf5o139szj3xlji3bpsnw717q9bc91&ep=v1_gifs_search&rid=giphy.gif&ct=g' alt='softviolin'/>
                                        </Tooltip>
                                        </motion.div>
                                        </Col>
                                        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                                        <Divider style={{backgroundColor: 'blue'}}/>
                                        <motion.div
                                        initial={{x: -180}}
                                        animate={{x: 3}}
                                        transition={{duration: 3}}>
                                        <Col style={{float: 'left', paddingLeft: '50px', paddingTop: '10px'}} span={0}>
                                            <Tooltip title='Look, the write position is more classic, because, the musician violinist can relax while he playing the music, and his back doesnt sore, because what is more important for all violinist is, you cant feell sore while you playing! You will be unmotivated if you play your sound with body sore, of course, sore everyone will feel it to the time on that to start violin for the first time, but with all the time, you will notice that your muscles will be more flexible, and the sores will disappear'>
                                            <img style={{width: '300px', height: '200px'}} src='https://pbs.twimg.com/media/CVwMrUgUsAAgaoA.jpg' alt='expresion'/>
                                            </Tooltip>
                                        </Col>
                                        </motion.div>
                                        <Divider/>
                                    </Card> 
                                    </motion.div>
                                </Button>
                                </Col>
                                <Button onClick={handleClose}><BackspaceIcon/></Button>
                            </Card>
                            </details>
                        </Button></motion.div></Col>
                        <motion.div
                        initial={{rotate: -130}}
                        animate={{rotate: 0}}
                        transition={{duration: 2}}>
                        <Col style={{paddingLeft: '740px'}} span={7}>
                            <Col span={3}>
                            <Steps>Notes at the mirror</Steps>
                            </Col>
                        <Button style={{transition: 'step-start'}}>
                            <details style={{fontSize: '5px'}}><summary>
                                <img style={{width: '60px', height: '60px', borderRadius: '30px'}} src='https://4.bp.blogspot.com/-ISs4OVRzZSk/TbMMY93mR0I/AAAAAAAAAUI/ehQRxHhyRtU/s1600/violin.jpg' alt='noteviolin'/>
                            </summary>
                                <Card style={{width: '900px', height: '600px'}}>
                                    <Col>
                                        <Card style={{color: 'gold', backgroundColor: 'Highlight', fontFamily: 'fantasy', letterSpacing: '7px', height: '30px', fontSize: '20px'}}>Notess Positions Natural</Card>
                                    </Col><br/>
                                    <Divider/><br/>
                                    <Col>
                                        <Card>
                                            <img style={{width: '800px',  height: '800px'}} src='https://i.pinimg.com/originals/64/d1/6f/64d16ffa2c8ecda68530271ebe50ed29.jpg' alt='dedoespelho'/>
                                        </Card>
                                    </Col>
                                    <Col span={40}>
                                    <Col style={{paddingLeft: '1062px'}} span={40}>
                                        <Tooltip title='Nota LÁ, Primeiro Dedo' placement='top-start'>
                                            <p style={{width: '6px', height: '6px', fontSize: '12px', color: 'yellow', backgroundColor: 'gold', borderRadius: '15px'}}></p>
                                        </Tooltip>
                                    </Col>
                                    <Col style={{paddingLeft: '1036px'}} span={37}>
                                        <Tooltip title='Nota SÍ, Segundo Dedo' placement='top-start'>
                                            <p style={{width: '6px', height: '6px', borderRadius: '15px', fontSize: '12px', color: 'yellow', backgroundColor: 'gold'}}></p>
                                        </Tooltip>
                                    </Col>
                                    <Col style={{paddingLeft: '1022px'}} span={35.2}>
                                        <Tooltip title='Nota DÓ, Terceiro Dedo' placement='top-start'>
                                            <p style={{width: '6px', height: '6px', borderRadius: '15px', fontSize: '12px', color: 'Highlight', backgroundColor: 'gold'}}></p>
                                        </Tooltip>
                                    </Col>
                                    <Col style={{paddingLeft: '1003px'}} span={33}>
                                        <Tooltip title='Nota RÉ, Quarto Dedo' placement='top-start'>
                                            <p style={{width: '6px', height: '6px', fontSize: '12px', color: 'Highlight', backgroundColor: 'gold', borderRadius: '15px'}}></p>
                                        </Tooltip>
                                    </Col>
                                    </Col>
                                    <Col>
                                    <Col style={{paddingLeft: '750px'}} span={40}>
                                        <Tooltip title='Nota MI, primeiro dedo' placement='top-start'>
                                            <p style={{width: '6px', height: '6px', fontSize: '12px', color: 'Highlight', backgroundColor: 'gold', borderRadius: '15px'}}></p>
                                        </Tooltip>
                                    </Col>
                                    <Col style={{paddingLeft: '449px'}} span={2.4}>
                                        <Tooltip title='Nota FÁ, segundo dedo' placement='top-start'>
                                            <p style={{width: '6px', height: '6px', fontSize: '12px', color: 'Highlight', backgroundColor: 'gold', borderRadius: '15px'}}></p>
                                        </Tooltip>
                                    </Col>
                                    <Col style={{paddingLeft: '433px'}} span={0.4}>
                                        <Tooltip title='Nota SOL, Terceiro Dedo' placement='top-start'>
                                            <p style={{width: '6px', height: '6px', fontSize: '12px', color: 'Highlight', backgroundColor: 'gold', borderRadius: '15px'}}></p>
                                        </Tooltip>
                                    </Col>
                                    <Col style={{paddingLeft: '440px'}} span={1.4}>
                                        <Tooltip title='Nota LÁ, Quarto Dedo' placement='top-start'>
                                            <p style={{width: '6px', height: '6px', fontSize: '12px', color: 'Highlight', backgroundColor: 'gold', borderRadius: '15px'}}></p>
                                        </Tooltip>
                                    </Col>
                                    </Col>
                                    <Col>
                                    <Col style={{paddingLeft: '526px'}} span={10.8}>
                                        <Tooltip title='Nota SÍ, Primeiro Dedo' placement='top-start'>
                                            <p style={{width: '6px', height: '6px', fontSize: '12px', color: 'Highlight', backgroundColor: 'gold', borderRadius: '15px'}}></p>
                                        </Tooltip>
                                    </Col>
                                    <Col style={{paddingLeft: '459px'}} span={2.4}>
                                        <Tooltip title='Nota DÓ, Segundo Dedo' placement='top-start'>
                                            <p style={{width: '6px', height: '6px', fontSize: '12px', color: 'Highlight', backgroundColor: 'gold', borderRadius: '15px'}}></p>
                                        </Tooltip>
                                    </Col>
                                    <Col style={{paddingLeft: '443px'}} span={0.4}>
                                        <Tooltip title='Nota RÉ, Terceiro Dedo' placement='top-start'>
                                            <p style={{width: '6px', height: '6px', fontSize: '12px', color: 'Highlight', backgroundColor: 'gold', borderRadius: '15px'}}></p>
                                        </Tooltip>
                                    </Col>
                                    <Col style={{paddingLeft: '453px'}} span={1.6}>
                                        <Tooltip title='Nota MI, Quarto Dedo' placement='top-start'>
                                            <p style={{width: '6px', height: '6px', fontSize: '12px', color: 'Highlight', backgroundColor: 'gold', borderRadius: '15px'}}></p>
                                        </Tooltip>
                                    </Col>
                                    <Col style={{paddingLeft: '549px'}} span={12.6}>
                                        <Tooltip title='Nota FÁ, Primeiro Dedo' placement='top-start'>
                                            <p style={{width: '6px', height: '6px', fontSize: '12px', color: 'Highlight', backgroundColor: 'gold', borderRadius: '15px'}}></p>
                                        </Tooltip>
                                    </Col>
                                    <Col style={{paddingLeft: '451px'}} span={0.4}>
                                        <Tooltip title='Nota SOL, Segundo Dedo' placement='top-start'>
                                            <p style={{width: '6px', height: '6px', fontSize: '12px', color: 'Highlight', backgroundColor: 'gold', borderRadius: '15px'}}></p>
                                        </Tooltip>
                                    </Col>
                                    <Col style={{paddingLeft: '452px'}} span={0.4}>
                                        <Tooltip title='Nota LÁ, Terceiro Dedo' placement='top-start'>
                                            <p style={{width: '6px', height: '6px', fontSize: '12px', color: 'Highlight', backgroundColor: 'gold', borderRadius: '15px'}}></p>
                                        </Tooltip>
                                    </Col>
                                    <Col style={{paddingLeft: '461px'}} span={1.5}>
                                        <Tooltip title='Nota SI, Quarto Dedo' placement='top-start'>
                                            <p style={{width: '6px', height: '6px', fontSize: '12px', color: 'Highlight', backgroundColor: 'gold', borderRadius: '15px'}}></p>
                                        </Tooltip>
                                    </Col>
                                    </Col>
                                    <Col style={{paddingLeft: '320px'}} span={8}>
                                        <Tooltip title='Notas em altura média naturais'>
                                            <Button style={{color: 'orange', backgroundColor: 'blue'}}>Medium sound <ArrowRighAltIcon/></Button>
                                        </Tooltip>
                                    </Col>
                                    <Col style={{paddingTop: '16px', paddingRight: '19px'}} span={0}>
                                        <hr style={{borderColor: 'orange', width: '200px'}}/>
                                    </Col>
                                    <Col style={{paddingLeft: '422px'}} span={0.4}>
                                        <Tooltip title='MI, Primeiro Dedo/5ª posição'>
                                            <p style={{backgroundColor: 'Highlight', width: '6px', height: '6px', fontSize: '12px', borderRadius: '15px'}}></p>
                                        </Tooltip>
                                    </Col>
                                    <Col style={{paddingLeft: '436px'}} span={2.3}>
                                        <Tooltip title='FÁ, Segundo Dedo/5ª posição'>
                                            <p style={{backgroundColor: 'Highlight', width: '6px', height: '6px', fontSize: '12px', borderRadius: '15px'}}></p>
                                        </Tooltip>
                                    </Col>
                                    <Col style={{paddingLeft: '428px'}} span={1.4}>
                                        <Tooltip title='SOL, Terceiro Dedo/5ª posição'>
                                            <p style={{backgroundColor: 'Highlight', width: '6px', height: '6px', fontSize: '12px', borderRadius: '15px'}}></p>
                                        </Tooltip>
                                    </Col>
                                    <Col style={{paddingLeft: '428px'}} span={1.4}>
                                        <Tooltip title='LÁ, Quarto Dedo/5ª posição'>
                                            <p style={{backgroundColor: 'Highlight', width: '6px', height: '6px', fontSize: '12px', borderRadius: '15px'}}></p>
                                        </Tooltip>
                                    </Col>
                                    <Col style={{paddingLeft: '508px'}} span={9.9}>
                                        <Tooltip title='SI, Primeiro Dedo/5ª posição'>
                                            <p style={{backgroundColor: 'Highlight', width: '6px', height: '6px', fontSize: '12px', borderRadius: '15px'}}></p>
                                        </Tooltip>
                                    </Col>
                                    <Col style={{paddingLeft: '447px'}} span={2.4}>
                                        <Tooltip title='DÓ, Segundo Dedo/5ª posição'>
                                            <p style={{backgroundColor: 'Highlight', width: '6px', height: '6px', fontSize: '12px', borderRadius: '15px'}}></p>
                                        </Tooltip>
                                    </Col>
                                    <Col style={{paddingLeft: '438px'}} span={1.4}>
                                        <Tooltip title='RÉ, Terceiro Dedo/5ª posição'>
                                            <p style={{backgroundColor: 'Highlight', width: '6px', height: '6px', fontSize: '12px', borderRadius: '15px'}}></p>
                                        </Tooltip>
                                    </Col>
                                    <Col style={{paddingLeft: '437px'}} span={1.3}>
                                        <Tooltip title='MI, Quarto Dedo/5ª posição'>
                                            <p style={{backgroundColor: 'Highlight', width: '6px', height: '6px', fontSize: '12px', borderRadius: '15px'}}></p>
                                        </Tooltip>
                                    </Col>
                                    <Col style={{paddingLeft: '528px'}} span={11}>
                                        <Tooltip title='FÁ, Primeiro Dedo/5ª posição'>
                                            <p style={{backgroundColor: 'Highlight', width: '6px', height: '6px', fontSize: '12px', borderRadius: '15px'}}></p>
                                        </Tooltip>
                                    </Col>
                                    <Col style={{paddingLeft: '449px'}} span={1.2}>
                                        <Tooltip title='SOL, Segundo Dedo/5ª posição'>
                                            <p style={{backgroundColor: 'Highlight', width: '6px', height: '6px', fontSize: '12px', borderRadius: '15px'}}></p>
                                        </Tooltip>
                                    </Col>
                                    <Col style={{paddingLeft: '448px'}} span={1.3}>
                                        <Tooltip title='LÁ, Terceiro Dedo/5ª posição'>
                                            <p style={{backgroundColor: 'Highlight', width: '6px', height: '6px', fontSize: '12px', borderRadius: '15px'}}></p>
                                        </Tooltip>
                                    </Col>
                                    <Col style={{paddingLeft: '450px'}} span={1.5}>
                                        <Tooltip title='SI, Quarto Dedo/5ª posição'>
                                            <p style={{backgroundColor: 'Highlight', width: '6px', height: '6px', fontSize: '12px', borderRadius: '15px'}}></p>
                                        </Tooltip>
                                    </Col>
                                    <Col style={{paddingLeft: '537px'}} span={11}>
                                        <Tooltip title='DÓ, Primeiro Dedo/5ª posição'>
                                            <p style={{backgroundColor: 'Highlight', width: '6px', height: '6px', fontSize: '12px', borderRadius: '15px'}}></p>
                                        </Tooltip>
                                    </Col>
                                    <Col style={{paddingLeft: '459px'}} span={1.2}>
                                        <Tooltip title='RÉ, Segundo Dedo/5ª posição'>
                                            <p style={{backgroundColor: 'Highlight', width: '6px', height: '6px', fontSize: '12px', borderRadius: '15px'}}></p>
                                        </Tooltip>
                                    </Col>
                                    <Col style={{paddingLeft: '459px'}} span={1.3}>
                                        <Tooltip title='MI, Terceiro Dedo/5ª posição'>
                                            <p style={{backgroundColor: 'Highlight', width: '6px', height: '6px', fontSize: '12px', borderRadius: '15px'}}></p>
                                        </Tooltip>
                                    </Col>
                                    <Col style={{paddingLeft: '468px'}} span={2.4}>
                                        <Tooltip title='FÁ, Quarto Dedo/5ª posição'>
                                            <p style={{backgroundColor: 'Highlight', width: '6px', height: '6px', fontSize: '12px', borderRadius: '15px'}}></p>
                                        </Tooltip>
                                    </Col>
                                    <Col style={{paddingRight: '14px'}} span={1}>
                                        <Tooltip title='Este grau de afinação é o agudo natural não muito elevado, porém já considerado bem agudo para o ouvido humano!'>
                                            <hr style={{width: '200px', borderColor: 'blue'}}/>
                                        </Tooltip>
                                    </Col>
                                    <Col style={{paddingLeft: '210px'}} span={8}>
                                        <Tooltip title='Notas mais altas, sons mais finos ao ouvir'>
                                            <Button style={{color: 'orange', backgroundColor: 'blue'}}>High-pitched-sound sound <ArrowRighAltIcon/></Button>
                                        </Tooltip>
                                    </Col><br/><br/><br/>
                                    <Col style={{paddingLeft: '415px'}} span={0}>
                                        <Tooltip title='SI, Primeiro Dedo/10ª posição'>
                                            <p style={{backgroundColor: 'aqua', width: '6px', height: '6px', fontSize: '12px', borderRadius: '15px'}}></p>
                                        </Tooltip>
                                    </Col>
                                    <Col style={{paddingLeft: '467px'}} span={5}>
                                        <Tooltip title='FÁ, Primeiro Dedo/10ª posição'>
                                            <p style={{backgroundColor: 'aqua', width: '6px', height: '6px', fontSize: '12px', borderRadius: '15px'}}></p>
                                        </Tooltip>
                                    </Col>
                                    <Col style={{paddingLeft: '469px'}} span={3.7}>
                                        <Tooltip title='DÓ, Primeiro Dedo/10ª posição'>
                                            <p style={{backgroundColor: 'aqua', width: '6px', height: '6px', fontSize: '12px', borderRadius: '15px'}}></p>
                                        </Tooltip>
                                    </Col>
                                    <Col style={{paddingLeft: '480px'}} span={3.8}>
                                        <Tooltip title='SOL, Primeiro Dedo/10ª posição'>
                                            <p style={{backgroundColor: 'aqua', width: '6px', height: '6px', fontSize: '12px', borderRadius: '15px'}}></p>
                                        </Tooltip>
                                    </Col>
                                    <Col style={{paddingLeft: '425px'}} span={1.4}>
                                        <Tooltip title='DÓ, Segundo Dedo/10ª posição'>
                                            <p style={{backgroundColor: 'aqua', width: '6px', height: '6px', fontSize: '12px', borderRadius: '15px'}}></p>
                                        </Tooltip>
                                    </Col>
                                    <Col style={{paddingLeft: '425px'}} span={1.4}>
                                        <Tooltip title='RÉ, Terceiro Dedo/10ª posição'>
                                            <p style={{backgroundColor: 'aqua', width: '6px', height: '6px', fontSize: '12px', borderRadius: '15px'}}></p>
                                        </Tooltip>
                                    </Col>
                                    <Col style={{paddingLeft: '474px'}} span={6}>
                                        <Tooltip title='SOL, Segundo Dedo/10ª posição'>
                                            <p style={{backgroundColor: 'aqua', width: '6px', height: '6px', fontSize: '12px', borderRadius: '15px'}}></p>
                                        </Tooltip>
                                    </Col>
                                    <Col style={{paddingLeft: '469px'}} span={3.8}>
                                        <Tooltip title='RÉ, Segundo Dedo/10ª posição'>
                                            <p style={{backgroundColor: 'aqua', width: '6px', height: '6px', fontSize: '12px', borderRadius: '15px'}}></p>
                                        </Tooltip>
                                    </Col>
                                    <Col style={{paddingLeft: '480px'}} span={3.8}>
                                        <Tooltip title='LÁ, Segundo Dedo/10ª posição'>
                                            <p style={{backgroundColor: 'aqua', width: '6px', height: '6px', fontSize: '12px', borderRadius: '15px'}}></p>
                                        </Tooltip>
                                    </Col>
                                    <Col style={{paddingLeft: '437px'}} span={1.5}>
                                        <Tooltip title='LÁ, Terceiro Dedo/10ª posição'>
                                            <p style={{backgroundColor: 'aqua', width: '6px', height: '6px', fontSize: '12px', borderRadius: '15px'}}></p>
                                        </Tooltip>
                                    </Col>
                                    <Col style={{paddingLeft: '467px'}} span={3.7}>
                                        <Tooltip title='MI, Terceiro Dedo/10ª posição'>
                                            <p style={{backgroundColor: 'aqua', width: '6px', height: '6px', fontSize: '12px', borderRadius: '15px'}}></p>
                                        </Tooltip>
                                    </Col>
                                    <Col style={{paddingLeft: '480px'}} span={3.8}>
                                        <Tooltip title='SI, Terceiro Dedo/10ª posição'>
                                            <p style={{backgroundColor: 'aqua', width: '6px', height: '6px', fontSize: '12px', borderRadius: '15px'}}></p>
                                        </Tooltip>
                                    </Col>
                                    <Col style={{paddingLeft: '424px'}} span={1.5}>
                                        <Tooltip title='MI, Quarto Dedo/10ª posição'>
                                            <p style={{backgroundColor: 'aqua', width: '6px', height: '6px', fontSize: '12px', borderRadius: '15px'}}></p>
                                        </Tooltip>
                                    </Col>
                                    <Col style={{paddingLeft: '454px'}} span={3.7}>
                                        <Tooltip title='SI, Quarto Dedo/10ª posição'>
                                            <p style={{backgroundColor: 'aqua', width: '6px', height: '6px', fontSize: '12px', borderRadius: '15px'}}></p>
                                        </Tooltip>
                                    </Col>
                                    <Col style={{paddingLeft: '477px'}} span={5}>
                                        <Tooltip title='FÁ, Quarto Dedo/10ª posição'>
                                            <p style={{backgroundColor: 'aqua', width: '6px', height: '6px', fontSize: '12px', borderRadius: '15px'}}></p>
                                        </Tooltip>
                                    </Col>
                                    <Col style={{paddingLeft: '480px'}} span={3.7}>
                                        <Tooltip title='DÓ, Quarto Dedo/10ª posição'>
                                            <p style={{backgroundColor: 'aqua', width: '6px', height: '6px', fontSize: '12px', borderRadius: '15px'}}></p>
                                        </Tooltip>
                                    </Col>
                                    <Col style={{paddingLeft: '30px'}} span={0.5}>
                                        <Tooltip title='Esse é o último grau da afinação do Violino'>
                                            <hr style={{width: '250px'}}/>
                                        </Tooltip>
                                    </Col>
                                    <Col style={{paddingLeft: '220px'}} span={7}>
                                        <Tooltip title='Esse grau é o alto das agudas elevadas deste instrumento!'>
                                            <Button style={{fontSize: '13px', backgroundColor: 'blue', color: 'orange'}}>Super High-pitched-sound<ArrowRighAltIcon/>
                                            </Button>
                                        </Tooltip>
                                    </Col>
                                    <Col style={{paddingLeft: '411px', paddingTop: '7px'}} span={0}>
                                        <Tooltip title='FÁ, Primeiro Dedo/14ª posição'>
                                            <p style={{backgroundColor: 'aqua', width: '6px', height: '6px', fontSize: '12px', borderRadius: '15px'}}></p>
                                        </Tooltip>
                                    </Col>
                                    <Col style={{paddingLeft: '461px', paddingTop: '7px'}} span={4.6}>
                                        <Tooltip title='DÓ, Primeiro Dedo/14ª posição'>
                                            <p style={{backgroundColor: 'aqua', width: '6px', height: '6px', fontSize: '12px', borderRadius: '15px'}}></p>
                                        </Tooltip>
                                    </Col>
                                    <Col style={{paddingLeft: '475px', paddingTop: '7px'}} span={4.6}>
                                        <Tooltip title='SOL, Primeiro Dedo/14ª posição'>
                                            <p style={{backgroundColor: 'aqua', width: '6px', height: '6px', fontSize: '12px', borderRadius: '15px'}}></p>
                                        </Tooltip>
                                    </Col>
                                    <Col style={{paddingLeft: '487px', paddingTop: '7px'}} span={4.6}>
                                        <Tooltip title='RÉ, Primeiro Dedo/14ª posição'>
                                            <p style={{backgroundColor: 'aqua', width: '6px', height: '6px', fontSize: '12px', borderRadius: '15px'}}></p>
                                        </Tooltip>
                                    </Col>
                                    <Col style={{paddingLeft: '426px', paddingTop: '7px'}} span={2}>
                                        <Tooltip title='SOL, Segundo Dedo/14ª posição'>
                                            <p style={{backgroundColor: 'aqua', width: '6px', height: '6px', fontSize: '12px', borderRadius: '15px'}}></p>
                                        </Tooltip>
                                    </Col>
                                    <Col style={{paddingLeft: '462px', paddingTop: '7px'}} span={4.7}>
                                        <Tooltip title='RÉ, Primeiro Dedo/14ª posição'>
                                            <p style={{backgroundColor: 'aqua', width: '6px', height: '6px', fontSize: '12px', borderRadius: '15px'}}></p>
                                        </Tooltip>
                                    </Col>
                                    <Col style={{paddingLeft: '474px', paddingTop: '7px'}} span={4.6}>
                                        <Tooltip title='LÁ, Primeiro Dedo/14ª posição'>
                                            <p style={{backgroundColor: 'aqua', width: '6px', height: '6px', fontSize: '12px', borderRadius: '15px'}}></p>
                                        </Tooltip>
                                    </Col>
                                    <Col style={{paddingLeft: '487px', paddingTop: '7px'}} span={4.6}>
                                        <Tooltip title='MI, Primeiro Dedo/14ª posição'>
                                            <p style={{backgroundColor: 'aqua', width: '6px', height: '6px', fontSize: '12px', borderRadius: '15px'}}></p>
                                        </Tooltip>
                                    </Col>
                                    <Col style={{paddingLeft: '425px', paddingTop: '7px'}} span={2}>
                                        <Tooltip title='LÁ, Terceiro Dedo/14ª posição'>
                                            <p style={{backgroundColor: 'aqua', width: '6px', height: '6px', fontSize: '12px', borderRadius: '15px'}}></p>
                                        </Tooltip>
                                    </Col>
                                    <Col style={{paddingLeft: '460px', paddingTop: '7px'}} span={4.6}>
                                        <Tooltip title='MI, Terceiro Dedo/14ª posição'>
                                            <p style={{backgroundColor: 'aqua', width: '6px', height: '6px', fontSize: '12px', borderRadius: '15px'}}></p>
                                        </Tooltip>
                                    </Col>
                                    <Col style={{paddingLeft: '475px', paddingTop: '7px'}} span={4.6}>
                                        <Tooltip title='SI, Terceiro Dedo/14ª posição'>
                                            <p style={{backgroundColor: 'aqua', width: '6px', height: '6px', fontSize: '12px', borderRadius: '15px'}}></p>
                                        </Tooltip>
                                    </Col>
                                    <Col style={{paddingLeft: '488px', paddingTop: '7px'}} span={4.7}>
                                        <Tooltip title='MI, Terceiro Dedo/14ª posição'>
                                            <p style={{backgroundColor: 'aqua', width: '6px', height: '6px', fontSize: '12px', borderRadius: '15px'}}></p>
                                        </Tooltip>
                                    </Col>
                                    <Col style={{paddingLeft: '200px'}} span={7}>
                                        <Tooltip title='Deste grau deriva para todas as cordas, seu som agudo mais extremo, qual vai até haver falhas na sonoridade oor conta da vibração extremamente curta qual deixa o som muito mais fino para cada tipo de cada corda, desde a mais grave até a mais aguda!'>
                                            <Button style={{fontSize: '13px', backgroundColor: 'blue', color: 'orange'}}>Extreme High-pitched-sound<ArrowRighAltIcon/>
                                            </Button>
                                        </Tooltip>
                                    </Col>
                                    <Col style={{paddingLeft: '460px'}} span={50}>
                                        <Tooltip title='Antes de iniciar, saiba que cada notas são todas repetidas, porém o bonita da prática musical é que, elas tendo várias repetições, ela acaba mudando de posições, causando assim, um efeito de alturas distintas, definindo a melodia em vários pontos estratégicos do instrumentos, dando mais sombra e segredo ao músico que descobre ali uma fonte de vários ouros de notas e diferentes alturas e timbres que o fara utilizar de apenas 7 notas com uma variedade de sons, em um único e pequeno instrumento!!'>
                                            <Button style={{fontSize: '13px', backgroundColor: 'Highlight', color: 'orange'}}>Please Read<ArrowDropDownCircleIcon/>
                                            </Button>
                                        </Tooltip>
                                    </Col>
                                    <Col style={{paddingLeft: '600px'}} span={4.5}>
                                        <Tooltip title='As áreas que estão sem o pontilhado, são áreas aonde acontecem os acidnetes musicais, por isso estão sem preencher, porque aqui se trata das notas naturais, não vou mostrar ainda a posição das notas acidnetadas, como será mostrado na proxima etapa!'>
                                            <Button style={{fontSize: '13px', backgroundColor: 'blue', color: 'orange'}}>
                                                Details!
                                            </Button>
                                        </Tooltip>
                                    </Col>
                                </Card>
                            </details>
                        </Button>
                        </Col>
                        </motion.div>
                    </Card>
                    <Col style={{paddingLeft: '250px'}} span={20}>
                        <img style={{width: '100px', height: '100px', borderRadius: '50px', borderColor: 'aqua', borderWidth: '2px', borderStyle: 'outset'}}
                        src='https://th.bing.com/th/id/R.c3616f5b1f307cccad484460631dd251?rik=0Ka%2fNH5s6%2fSM7A&pid=ImgRaw&r=0' alt='layout'/>
                    </Col>
                </Card>
                </motion.div>
            </Modal>
        </div>
    )
}