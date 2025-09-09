import {Button, Divider, Input, Card, Row, Col } from 'antd';
import React, { Component } from 'react';
import {Box, IconButton, FormLabel} from '@mui/material';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MinimizeIcon from '@mui/icons-material/Minimize';
import Accordion from '@mui/material/Accordion';
import RoteadorReact from './Router';
import { Toaster, toast } from 'react-hot-toast';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question1: '',
      question2: '',
      loggedIn: false,
      open: false,
      isClosed: false,
    };
    this.handleClose = this.handleClose.bind(this);
  };

  handleClose() { 
    this.setState({ isClosed: true }); 
  };

  ShowAccordion = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }));
  }

  handleUsernameChange = (event) => {
    this.setState({ question1: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ question2: event.target.value });
  };

  submitToast = () => {
    toast.success("Acessing...");
  }

  handleLogin = () => {
    const { question1, question2 } = this.state;
    if (question1 === 'som' && question2 === 'musica') {
      this.setState({ loggedIn: true });
      toast.success('Acessing...');
    } else {
      toast.error('Login Failed..., Wrong Datas..., Try it again!');
    }
  };

  render() {
    const { question1, question2, loggedIn } = this.state;
    const styles = {
        title: {
          fontSize: '13px',
          fontFamily: 'serif',
          float: 'right',
          color: 'white'
        },
        imagem: {
            width: '20px', 
            borderRadius: '55px',
            borderColor: 'cyan',
            borderStyle: 'ridge',
            padding: '10px',
            borderWidth: '1px'
        },
        LogButton: {
          backgroundColor: 'yellow',
          width: 'full'
        }
      };

      const { isClosed } = this.state; 
      const boxStyles = { 
        position: isClosed ? 'absolute' : 'relative', 
        top: isClosed ? '10px' : '50%',
        left: isClosed ? 'auto' : '50%',
        right: isClosed ? '10px' : 'auto', 
        transform: isClosed ? 'none' : 'translate(-50%, -50%)', 
        width: isClosed ? '100px' : '400px',
        height: isClosed ? '10px' : 'auto',
        transition: 'all 0.3s ease', 
        padding: '3px', 
        borderRadius: '8px', 
        backgroundColor: 'transparent', 
        boxShadow: 3, 
      };

      const accordionStyles = { 
        idth: isClosed ? '20px' : '90%',
        height: 'auto',
        transition: 'width 0.3s ease', 
        borderRadius: '55px',
        backgroundColor: 'dodgerblue',
        borderColor: 'cyan',
        borderStyle: 'ridge',
        borderWidth: '1px',
        opacity: '0.8',
      };

    return (
      <div>
        <Row style={{float: 'left', paddingLeft: '60px'}}>
          <Col span={10}>
            <Box style={boxStyles}>
              <Accordion style={accordionStyles}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{color: 'blue'}}/>}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                  <IconButton onClick={this.handleClose}> 
                    <MinimizeIcon style={{fontSize: '40px', color: 'cyan', accordionStyles}}/>
                  </IconButton>
                  <Typography>
                    <img 
                    style={styles.imagem}
                    src='https://thumbs.dreamstime.com/b/festive-alphabet-colorful-confetti-isolated-white-background-question-mark-d-rendering-festive-alphabet-colorful-122629744.jpg'
                    alt='interrogação'
                    />
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <Card style={{width: '300px', backgroundColor: 'transparent', fontFamily: 'serif', opacity: '1.5'}}>
                      <center>
                        <FormLabel style={{color: 'white', fontFamily: 'serif', fontSize: '15px'}}>Which is the Music raw Material?</FormLabel><br/>
                        <Input style={{color: 'blue', fontFamily: 'serif', fontSize: '15px', width: '130px'}} type="text" placeholder="Question-1" value={question1} onChange={this.handleUsernameChange} /><br/>
                        <FormLabel style={{color: 'white', fontFamily: 'serif', fontSize: '15px'}}>What is the art of sound?</FormLabel><br/>
                        <Input style={{color: 'blue', fontFamily: 'serif', fontSize: '15px', width: '130px'}} type="text" placeholder="Question-2" value={question2} onChange={this.handlePasswordChange} /><br/>
                        <Button variant="contained" fullwidth style={styles.LogButton} onClick={this.handleLogin}>Access</Button><br/>
                      </center>
                    </Card>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Card style={{width: '300px', backgroundColor: 'transparent', fontFamily: 'serif', opacity: '1.5'}}>
                      <center>
                        <FormLabel style={{color: 'white', fontFamily: 'serif', fontSize: '15px'}}>Which is the Music raw Material?</FormLabel><br/>
                        <Input style={{color: 'blue', fontFamily: 'serif', fontSize: '15px', width: '130px'}} type="text" placeholder="Question-1" value={question1} onChange={this.handleUsernameChange} /><br/>
                        <FormLabel style={{color: 'white', fontFamily: 'serif', fontSize: '15px'}}>What is the art of sound?</FormLabel><br/>
                        <Input style={{color: 'blue', fontFamily: 'serif', fontSize: '15px', width: '130px'}} type="text" placeholder="Question-2" value={question2} onChange={this.handlePasswordChange} /><br/>
                        <Button variant="contained" fullwidth style={styles.LogButton} onClick={this.handleLogin}>Access</Button><br/>
                      </center>
                    </Card>
            </Box>
          </Col>
        </Row>
        <br/><Divider/><br/>
        {
            loggedIn && <div style={{paddingTop: '150px', float: 'left'}}><RoteadorReact/></div>
        }
        <Toaster/>
      </div>
    );
  }
}

export default Login;