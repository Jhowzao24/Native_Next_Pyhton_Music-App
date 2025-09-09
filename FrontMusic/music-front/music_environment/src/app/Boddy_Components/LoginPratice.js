/* eslint-disable @next/next/no-img-element */
import {Button, Divider, Input } from 'antd';
import React, { Component } from 'react';
import { Card, FormLabel } from '@material-ui/core';
import {Grid} from '@mui/material';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AtualizarPagina from './Pratice_Files/FilesPratices/UpdateLayout';
import PraticeComponents from './Component_Pratice';

class LoginPratice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question1: 0,
      question2: 0,
      question3: '',
      question4: 0,
      question5: '',
      loggedIn: false,
    };
  };

  handleConfirm() { 
    this.setState({ isConfirmed: true }); 
  };

  handleFirstChange = (event) => {
    this.setState({ question1: event.target.value });
  };

  handleSecondChange = (event) => {
    this.setState({ question2: event.target.value });
  };

  handleThirdChange = (event) => {
    this.setState({ question3: event.target.value });
  };

  handleFourthChange = (event) => {
    this.setState({ question4: event.target.value });
  };

  handleFifthChange = (event) => {
    this.setState({ question5: event.target.value });
  };

  handleLogin = () => {
    const { question1, question2, question3, question4, question5 } = this.state;
    if (question1 === 7 && question2 === 7 && question3 === 'si do mi fa' && question4 === 5 && question5 === 'aumenta meio tom') {
      this.setState({ loggedIn: true });
    } else {
      console.log('Login failed');
    }
  };

  render() {
    const { question1, question2, question3, question4, question5, loggedIn } = this.state;
    const styles = {
        container: {
            borderRadius: '55px',
            backgroundColor: 'midnightblue',
            borderColor: 'cyan',
            borderStyle: 'ridge',
            borderWidth: '1px',
        },
        title: {
          fontSize: '20px',
          fontWeight: 'serif',
          float: 'right',
          color: 'dodgerblue',
        },
        imagem: {
            width: '100px', 
            borderRadius: '55px',
            borderColor: 'cyan',
            borderStyle: 'ridge',
            padding: '5px',
            borderWidth: '1px'
        }
      };

    return (
      <div>
        <Grid style={{float: 'left'}}>
            <Accordion style={styles.container}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{color: 'cyan'}}/>}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  <img 
                    style={styles.imagem}
                    src='https://thumbs.dreamstime.com/b/festive-alphabet-colorful-confetti-isolated-white-background-question-mark-d-rendering-festive-alphabet-colorful-122629744.jpg'
                    alt='interrogação'
                  />
                    <h1 style={styles.title}>Answer it to open the Pratices</h1>
                      <Grid container spacing={10} style={{paddingLeft: '300px'}}>
                        <AtualizarPagina/>
                      </Grid>
                      </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                      <Typography>
                      <Card style={{width: '300px', backgroundColor: 'midnightblue', fontFamily: 'serif'}}>
                        <center>
                          <FormLabel style={{color: 'dodgerblue', fontFamily: 'serif', fontSize: '20px'}}>How many bemois can be wrote at the pentagram?</FormLabel><br/>
                          <Input style={{color: 'dodgerblue', fontFamily: 'serif', fontSize: '20px'}} type="number" placeholder="Question-1" value={question1} onChange={this.handleFirstChange} /><br/>
                          <FormLabel style={{color: 'dodgerblue', fontFamily: 'serif', fontSize: '20px'}}>How many sustenidos can be wrote at the pentagram?</FormLabel><br/>
                          <Input style={{color: 'dodgerblue', fontFamily: 'serif', fontSize: '20px'}} type="number" placeholder="Question-2" value={question2} onChange={this.handleSecondChange} /><br/>
                          <FormLabel style={{color: 'dodgerblue', fontFamily: 'serif', fontSize: '20px'}}>On what notes can we find a Semitone?</FormLabel><br/>
                          <Input style={{color: 'dodgerblue', fontFamily: 'serif', fontSize: '20px'}} type="text" placeholder="Question-3" value={question3} onChange={this.handleThirdChange} /><br/>
                          <FormLabel style={{color: 'dodgerblue', fontFamily: 'serif', fontSize: '20px'}}>On what line the FÁ sustenido is putted?</FormLabel><br/>
                          <Input style={{color: 'dodgerblue', fontFamily: 'serif', fontSize: '20px'}} type="number" placeholder="Question-4" value={question4} onChange={this.handleFourthChange} /><br/>
                          <FormLabel style={{color: 'dodgerblue', fontFamily: 'serif', fontSize: '20px'}}>For what serve the accidents as the sustenido?</FormLabel><br/>
                          <Input style={{color: 'dodgerblue', fontFamily: 'serif', fontSize: '20px'}} type="text" placeholder="Question-5" value={question5} onChange={this.handleFifthChange} /><br/>
                          <Divider/>
                          <Button onClick={this.handleLogin}>Access</Button><br/>
                        </center>
                      </Card>
                    </Typography>
                  </AccordionDetails>
              </Accordion>
        </Grid>
        <br/><Divider/><br/>
        {
            loggedIn && <PraticeComponents/>
        }
      </div>
    );
  }
}

export default LoginPratice;