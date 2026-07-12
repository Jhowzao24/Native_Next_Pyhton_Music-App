/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Button, Grid } from '@mui/material';
import { Tooltip, Card } from 'antd';
import Popup from 'reactjs-popup';

class ComponenteFÁ extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      elementSI_FÁ: [],
      elementDÓ_FÁ: [],
      elementRÉ_FÁ: [],
      elementMI_FÁ: [],
      elementFÁ_FÁ: [],
      elementSOL_FÁ: [],
      elementLÁ_FÁ: [],
      elementSIUp_FÁ: [],
    };
  };
  addElementSI_FA = () => {
    const newElement = React.createElement('card', { key: Date.now() }, <Tooltip title='Note SI, See here on this line, the note SO came it out the note SI!'><h1 style={{fontSize: '50px', cursor: 'pointer'}}>♪</h1></Tooltip>);
    this.setState(prevState => ({
      elementSI_FÁ: [...prevState.elementSI_FÁ, newElement]
    }));
  };

  addElementDO_FA = () => {
    const newElement = React.createElement('card', { key: Date.now() }, <Tooltip title='Note LÁ, this is the nest note!'><h1 style={{fontSize: '50px', cursor: 'pointer'}}>♪</h1></Tooltip>);
    this.setState(prevState => ({
      elementDÓ_FÁ: [...prevState.elementDÓ_FÁ, newElement]
    }));
  };

  addElementRE_FA = () => {
    const newElement = React.createElement('card', { key: Date.now() }, <Tooltip title='Note LÁ, this is the nest note!'><h1 style={{fontSize: '50px', cursor: 'pointer'}}>♪</h1></Tooltip>);
    this.setState(prevState => ({
      elementRÉ_FÁ: [...prevState.elementRÉ_FÁ, newElement]
    }));
  };

  addElementMI_FA = () => {
    const newElement = React.createElement('card', { key: Date.now() }, <Tooltip title='Note LÁ, this is the nest note!'><h1 style={{fontSize: '50px', cursor: 'pointer'}}>♪</h1></Tooltip>);
    this.setState(prevState => ({
      elementMI_FÁ: [...prevState.elementMI_FÁ, newElement]
    }));
  };

  addElementFA_FA = () => {
    const newElement = React.createElement('card', { key: Date.now() }, <Tooltip title='Note LÁ, this is the nest note!'><h1 style={{fontSize: '50px', cursor: 'pointer'}}>♪</h1></Tooltip>);
    this.setState(prevState => ({
      elementFÁ_FÁ: [...prevState.elementFÁ_FÁ, newElement]
    }));
  };

  addElementSOL_FA = () => {
    const newElement = React.createElement('card', { key: Date.now() }, <Tooltip title='Note LÁ, this is the nest note!'><h1 style={{fontSize: '50px', cursor: 'pointer'}}>♪</h1></Tooltip>);
    this.setState(prevState => ({
      elementSOL_FÁ: [...prevState.elementSOL_FÁ, newElement]
    }));
  };

  addElementLA_FA = () => {
    const newElement = React.createElement('card', { key: Date.now() }, <Tooltip title='Note LÁ, this is the nest note!'><h1 style={{fontSize: '50px', cursor: 'pointer'}}>♪</h1></Tooltip>);
    this.setState(prevState => ({
      elementLÁ_FÁ: [...prevState.elementLÁ_FÁ, newElement]
    }));
  };

  addElementSIUp_FA = () => {
    const newElement = React.createElement('card', { key: Date.now() }, <Tooltip title='Note LÁ, this is the nest note!'><h1 style={{fontSize: '50px', cursor: 'pointer'}}>♪</h1></Tooltip>);
    this.setState(prevState => ({
      elementSIUp_FÁ: [...prevState.elementSIUp_FÁ, newElement]
    }));
  };

  render(){
    return(
      <div>
        <Grid container spacing={0} style={{padding: '50px'}}>
        <img style={{width: '480px'}} src='https://th.bing.com/th/id/OIP.J1e0Cw0G3FTybuE449AHPQHaBq?rs=1&pid=ImgDetMain' alt='CelloPauta'/>
        </Grid>
        <Grid container spacing={30} style={{paddingLeft: '800px'}}>
            <Popup trigger={<Button style={{fontSize: '30px', color: 'cyan', width: '45px', heigth: '35px'}}><h1>𝄢</h1></Button>} style={{backgroundColor: 'gold', color: 'white'}}>
              <Button style={{backgroundColor: 'Highlight', color: 'white'}} onClick={this.addElementSI_FA}>SI</Button><br/>
              <Button style={{backgroundColor: 'Highlight', color: 'white'}} onClick={this.addElementDO_FA}>DÓ</Button><br/>
              <Button style={{backgroundColor: 'Highlight', color: 'white'}} onClick={this.addElementRE_FA}>RÉ</Button>
              <Button style={{backgroundColor: 'Highlight', color: 'white'}} onClick={this.addElementMI_FA}>MI</Button>
              <Button style={{backgroundColor: 'Highlight', color: 'white'}} onClick={this.addElementFA_FA}>FÁ</Button>
              <Button style={{backgroundColor: 'Highlight', color: 'white'}} onClick={this.addElementSOL_FA}>SOL</Button>
              <Button style={{backgroundColor: 'Highlight', color: 'white'}} onClick={this.addElementLA_FA}>LÁ</Button>
              <Button style={{backgroundColor: 'Highlight', color: 'white'}} onClick={this.addElementSIUp_FA}>SI</Button>
            </Popup>
          </Grid>
          <Grid style={{psition: 'relative'}}>
          <Grid container spacing={16.3} style={{paddingLeft: '300px'}}>
              {this.state.elementSI_FÁ.map(element => element)}
          </Grid>
          <Grid container spacing={17.5} style={{paddingLeft: '360px'}}>
              {this.state.elementDÓ_FÁ.map(element => element)}
          </Grid>
          <Grid container spacing={17.7} style={{paddingLeft: '410px'}}>
              {this.state.elementRÉ_FÁ.map(element => element)}
          </Grid>
          <Grid container spacing={17.5} style={{paddingLeft: '460px'}}>
              {this.state.elementMI_FÁ.map(element => element)}
          </Grid>
          <Grid container spacing={17.8} style={{paddingLeft: '500px'}}>
              {this.state.elementFÁ_FÁ.map(element => element)}
          </Grid>
          <Grid container spacing={18} style={{paddingLeft: '540px'}}>
              {this.state.elementSOL_FÁ.map(element => element)}
          </Grid>
          <Grid container spacing={17.5} style={{paddingLeft: '580px'}}>
              {this.state.elementLÁ_FÁ.map(element => element)}
          </Grid>
          <Grid container spacing={17.5} style={{paddingLeft: '630px'}}>
              {this.state.elementSIUp_FÁ.map(element => element)}
          </Grid>
        </Grid>
      </div>
    )
  }
}

class Component extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      elementSOL_SOL: [],
      elementLÁ_SOL: [],
      elementSI_SOL: [],
      elementDÓ_SOL: [],
      elementRÉ_SOL: [],
      elementMI_SOL: [],
      elementFÁ_SOL: [],
      elementSOLUp_SOL: [],
      /*Elementos da clave de sol iniico em nota sol*/
    };
  };

  /*Funções para Adicionar notas na clave de Sol*/
  addElementSOL = () => {
    const newElement = React.createElement('card', { key: Date.now() }, <Tooltip title='Note SOL, affination in this Clave'><h1 style={{fontSize: '50px', cursor: 'pointer'}}>♪</h1></Tooltip>);
    this.setState(prevState => ({
      elementSOL_SOL: [...prevState.elementSOL_SOL, newElement]
    }));
  };

  addElementSOLUp = () => {
    const newElement = React.createElement('card', { key: Date.now() }, <Tooltip title='Note SOL, this position is the high-pitched-sound of the SOL'><h1 style={{fontSize: '50px', cursor: 'pointer'}}>♪</h1></Tooltip>);
    this.setState(prevState => ({
      elementSOLUp_SOL: [...prevState.elementSOLUp_SOL, newElement]
    }));
  };

  addElementLÁ = () => {
    const newElement = React.createElement('card', { key: Date.now() }, <Tooltip title='Note LÁ, this is the nest note!'><h1 style={{fontSize: '50px', cursor: 'pointer'}}>♪</h1></Tooltip>);
    this.setState(prevState => ({
      elementLÁ_SOL: [...prevState.elementLÁ_SOL, newElement]
    }));
  };

  addElementSI = () => {
    const newElement = React.createElement('card', { key: Date.now() }, <Tooltip title='Note LÁ, this is the nest note!'><h1 style={{fontSize: '50px', cursor: 'pointer'}}>♪</h1></Tooltip>);
    this.setState(prevState => ({
      elementSI_SOL: [...prevState.elementSI_SOL, newElement]
    }));
  };

  addElementDO = () => {
    const newElement = React.createElement('card', { key: Date.now() }, <Tooltip title='Note LÁ, this is the nest note!'><h1 style={{fontSize: '50px', cursor: 'pointer'}}>♪</h1></Tooltip>);
    this.setState(prevState => ({
      elementDÓ_SOL: [...prevState.elementDÓ_SOL, newElement]
    }));
  };

  addElementMI = () => {
    const newElement = React.createElement('card', { key: Date.now() }, <Tooltip title='Note LÁ, this is the nest note!'><h1 style={{fontSize: '50px', cursor: 'pointer'}}>♪</h1></Tooltip>);
    this.setState(prevState => ({
      elementMI_SOL: [...prevState.elementMI_SOL, newElement]
    }));
  };

  addElementFA = () => {
    const newElement = React.createElement('card', { key: Date.now() }, <Tooltip title='Note LÁ, this is the nest note!'><h1 style={{fontSize: '50px', cursor: 'pointer'}}>♪</h1></Tooltip>);
    this.setState(prevState => ({
      elementFÁ_SOL: [...prevState.elementFÁ_SOL, newElement]
    }));
  };

  addElementRE = () => {
    const newElement = React.createElement('card', { key: Date.now() }, <Tooltip title='Note LÁ, this is the nest note!'><h1 style={{fontSize: '50px', cursor: 'pointer'}}>♪</h1></Tooltip>);
    this.setState(prevState => ({
      elementRÉ_SOL: [...prevState.elementRÉ_SOL, newElement]
    }));
  };

  render() {
    return (
      <div style={{color: 'black'}}>
        <Grid container spacing={0} style={{padding: '50px'}}>
        <img style={{width: '480px'}} src='https://th.bing.com/th/id/R.df345b14520b0afd5ebeded845a6270e?rik=bN%2f3uOu5UgCFoQ&pid=ImgRaw&r=0' alt='CelloPauta'/>
        </Grid>
          <Grid container spacing={30} style={{paddingLeft: '200px'}}>
            <Popup trigger={<Button style={{fontSize: '25px', color: 'blue', backgroundColor: 'lightblue'}}><h1>𝄞</h1></Button>}>
              <Button style={{backgroundColor: 'Highlight', color: 'white', width: '10px'}} onClick={this.addElementSOL}>SOL</Button><br/>
              <Button style={{backgroundColor: 'Highlight', color: 'white'}} onClick={this.addElementLÁ}>LÁ</Button><br/>
              <Button style={{backgroundColor: 'Highlight', color: 'white'}} onClick={this.addElementSI}>SI</Button><br/>
              <Button style={{backgroundColor: 'Highlight', color: 'white'}} onClick={this.addElementDO}>DÓ</Button><br/>
              <Button style={{backgroundColor: 'Highlight', color: 'white'}} onClick={this.addElementRE}>RÉ</Button><br/>
              <Button style={{backgroundColor: 'Highlight', color: 'white'}} onClick={this.addElementMI}>MI</Button><br/>
              <Button style={{backgroundColor: 'Highlight', color: 'white'}} onClick={this.addElementFA}>FA</Button>
              <Button style={{backgroundColor: 'Highlight', color: 'white', width: '10px'}} onClick={this.addElementSOLUp}>SOL</Button>
            </Popup>
          </Grid>
          <Grid style={{psition: 'relative'}}>
          <Grid container spacing={14.5} style={{paddingLeft: '270px'}}>
              {this.state.elementSOL_SOL.map(element => element)}
          </Grid>
          <Grid container spacing={17.5} style={{paddingLeft: '360px'}}>
              {this.state.elementLÁ_SOL.map(element => element)}
          </Grid>
          <Grid container spacing={18} style={{paddingLeft: '415px'}}>
              {this.state.elementSI_SOL.map(element => element)}
          </Grid>
          <Grid container spacing={17.5} style={{paddingLeft: '460px'}}>
              {this.state.elementDÓ_SOL.map(element => element)}
          </Grid>
          <Grid container spacing={17.8} style={{paddingLeft: '500px'}}>
              {this.state.elementRÉ_SOL.map(element => element)}
          </Grid>
          <Grid container spacing={18} style={{paddingLeft: '560px'}}>
              {this.state.elementMI_SOL.map(element => element)}
          </Grid>
          <Grid container spacing={17.7} style={{paddingLeft: '600px'}}>
              {this.state.elementFÁ_SOL.map(element => element)}
          </Grid>
          <Grid container spacing={17.5} style={{paddingLeft: '650px'}}>
              {this.state.elementSOLUp_SOL.map(element => element)}
          </Grid>
        </Grid>
      </div>
    );
  }
}

/*
          <Grid container spacing={30} style={{paddingLeft: '800px'}}>
            <Popup trigger={<Button style={{fontSize: '30px', color: 'cyan', width: '45px', heigth: '35px'}}><h1>𝄢</h1></Button>} style={{backgroundColor: 'gold', color: 'white'}}>
              <Button style={{backgroundColor: 'Highlight', color: 'white'}} onClick={this.addElementSI_FA}>SOL</Button><br/>
              <Button style={{backgroundColor: 'Highlight', color: 'white'}} onClick={this.addElementDO_FA}>LÁ</Button><br/>
              <Button style={{backgroundColor: 'Highlight', color: 'white'}} onClick={this.addElementRE_FA}>SI</Button>
              <Button style={{backgroundColor: 'Highlight', color: 'white'}} onClick={this.addElementDO}>DÓ</Button>
              <Button style={{backgroundColor: 'Highlight', color: 'white'}} onClick={this.addElementRE}>RÉ</Button>
              <Button style={{backgroundColor: 'Highlight', color: 'white'}} onClick={this.addElementMI}>MI</Button>
              <Button style={{backgroundColor: 'Highlight', color: 'white'}} onClick={this.addElementFA}>FA</Button>
            </Popup>
          </Grid> 
          
                    </Grid>
          <Grid style={{position: 'absolute'}}>
          <Grid container spacing={13.5} style={{paddingLeft: '230px', paddingTop: '83px'}}>
              {this.state.elementSI_FÁ.map(element => element)}
          </Grid>
          <Grid container spacing={17.5} style={{paddingLeft: '350px'}}>
              {this.state.elementDÓ_FÁ.map(element => element)}
          </Grid>
          <Grid container spacing={20} style={{paddingLeft: '790px'}}>
              {this.state.elementRÉ_FÁ.map(element => element)}
          </Grid>
          <Grid container spacing={20} style={{paddingLeft: '890px', paddingTop: '19px'}}>
              {this.state.elementMI_FÁ.map(element => element)}
          </Grid>
          <Grid container spacing={20} style={{paddingLeft: '890px', paddingTop: '19px'}}>
              {this.state.elementFÁ_FÁ.map(element => element)}
          </Grid>
          <Grid container spacing={20} style={{paddingLeft: '890px', paddingTop: '19px'}}>
              {this.state.elementSOL_FÁ.map(element => element)}
          </Grid>
          <Grid container spacing={20} style={{paddingLeft: '890px', paddingTop: '19px'}}>
              {this.state.elementLÁ_FÁ.map(element => element)}
          </Grid>
          </Grid>
          
          
          
          
          */



function MeuCompApp() {
  /*
  const Pizzicato = {
    "descripts": "Play with the finger(Pizzicato)",
    "Categories": "Cello, Violin and Viola",
    "StyleMusic": "Classic",
  };
  const Harmonics = {
    "Description": "Play the notes with the point of the finger",
    "Category": "Cello, Violin and Viola",
    "StyleMusic": "Classic",
  };
  const Flautato = {
    "Descrip": "The bown is used near the bown point",
    "Categoria": "Cello, Viola and Violin",
  };
  const Sul_ponticello_e_sul_tasto = {
    "Descri": "These are techniques in which the bow is used on different parts of the strings. Sul ponticello is close to the bridge, producing a more shrill, metallic sound, while sul tasto is close to the neck, producing a softer, more ethereal sound",
    "Categ": "Cello, Violin and Viola",
  }
  const PautaCello = {
    "descript": "Vibratto",
    "descript": "Clave",
    "descript": "Key Signature",
    "descript": "Five lines and the four spaces",
    "descript": "Expression",
  }
  */
  return (
    <div>
      <details><summary style={{fontSize: '5px'}}><Card style={{cursor: 'pointer'}}><h3>Cello Lessons</h3></Card></summary>
      <fieldset style={{borderColor: 'cyan', borderWidth: '3px', color: 'cyan', borderStyle: 'revert-layer' }}>
        <h1>Start put the notes from the first button please! Make notice of the sequence!</h1>
        <h4 style={{backgroundColor: 'gold', color: 'red', borderRadius: '30%'}}>Lesson for Cello</h4>
        <h6 style={{backgroundColor: 'red', color: 'yellow', borderRadius: '30px'}}>Difference between clave of SOL x Clave FÁ</h6>
      </fieldset>
      <Component/>
      <br/>
      <br/>
      <br/>
      <br/>
      <ComponenteFÁ/>
      </details>
    </div>
  );
}

export default MeuCompApp;