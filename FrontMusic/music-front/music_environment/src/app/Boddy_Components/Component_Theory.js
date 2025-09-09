import React from 'react';
import '../App.css';
import { Button, FormLabel, Paper, Stepper, Grid } from '@mui/material';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import FirstComp from './Phases_Components/First_Lesson_Theory';
import Smodule from './Phases_Components/Second_Lesson_Theory';
import TerçaFase from './Phases_Components/Third_Lesson_Theory';
import Phase4 from './Phases_Components/Fourth_Lesson_Theory';
import Cinco from './Phases_Components/Fift_Lesson_Theory';
import SextoPh from './Phases_Components/Sixth_Lesson_Theory';
import SetimaFase from './Phases_Components/Seventh_Lesson_Theory';
import EithFase from './Phases_Components/Eight_Lesson_Theory';
import NonoFase from './Phases_Components/Ninith_Lesson_Theory';
import DecimaFase from './Phases_Components/Tenth_Lesson_Theory';
import ElevenFase from './Phases_Components/Elen_Lesson_Theory';
import DozeFase from './Phases_Components/Twoelventh_Lesson_Theory';
import Thirteenth from './Phases_Components/Thirthenth_Lesson_Theory';
import KtorzeF from './Phases_Components/Fourthenth_Lesson_Theory';
import DeciQuintaFase from './Phases_Components/Fifteen_Lesson_Theory';
import DecimaSestaFase from './Phases_Components/Sixteen_Lesson_Theory';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter } from 'next/navigation';

function TheoryComponents() {
  const router = useRouter();
  return (
    <div style={{margin: '60px', width: 'auto', height: '300px'}}>
      <div style={{width: '700px', height: '90px', paddingTop: '50px'}}>
      <Popup trigger={<Paper style={{backgroundColor: 'Highlight', cursor: 'pointer',
    color: 'gold'}}>Read Before Start</Paper>}>
        <Paper><h3 style={{color: 'Highlight', backgroundColor: 'gold'}}><p>The Theory of Music is hard so...!
          <br/>So! we must not forget that it is the case that we must spending time to study a lot and, 
          this is mustly at this case, it is up to you!
          Please...DONT GIVE UP</p></h3></Paper>
          <Popup trigger={<Button style={{color: 'Highlight', fontFamily: 'monospace',
        letterSpacing:'5px'}}>One more letter</Button>}>
            <Paper><h5 style={{color: 'Highlight', backgroundColor: 'gold'}}><i>We are here to help you and we together will come at your goals point!
              Keep going ahead</i></h5></Paper>
          </Popup>
      </Popup>
      <Button onClick={() => router.back()} style={{backgroundColor: 'orange'}}>
        <ArrowBackIcon style={{fontSize: '30px'}}/>
      </Button>
      </div>
      <div>
        <Grid style={{padding: '20px'}} container spacing={0}>
        <Stepper style={{paddingLeft: '50px'}}>
        <Paper style={{backgroundColor: 'Highlight', color: 'chartreuse', borderRadius: '10px', letterSpacing: '5px'}} variant="outlined">
          <FormLabel style={{color: 'white', letterSpacing: '5px'}}>1º Phase</FormLabel>
            <FirstComp/>
        </Paper></Stepper><hr style={{borderColor: 'Highlight'}}/>
        </Grid>
      </div>
      <div>
      <Grid style={{padding: '20px', paddingLeft: '300px'}} container spacing={12.5}>
        <Stepper style={{paddingLeft: '50px'}}>
        <Paper variant="outlined" style={{backgroundColor: 'Highlight', color: 'chartreuse',letterSpacing: '5px'}}>
        <FormLabel style={{color: 'white', letterSpacing: '5px'}}>2º Phase</FormLabel>
              <Smodule/>
        </Paper>
        </Stepper><hr style={{borderColor: 'Highlight'}}/>
        </Grid>
      </div>
      <div>
      <Grid style={{padding: '20px', paddingLeft: '500px'}} container spacing={12.5}>
        <Stepper style={{paddingLeft: '50px'}}>
        <Paper style={{backgroundColor: 'Highlight', color: 'chartreuse',letterSpacing: '5px'}} variant="outlined">
          <FormLabel style={{color: 'white', letterSpacing: '5px'}}>3º Phase</FormLabel>
              <TerçaFase/>
        </Paper></Stepper><hr style={{borderColor: 'Highlight'}}/>
        </Grid>
      </div>
      <div>
      <Grid style={{padding: '20px', paddingLeft: '700px'}} container spacing={12.7}>
        <Stepper style={{paddingLeft : '50px'}}>
        <Paper variant="outlined" style={{backgroundColor: 'Highlight', color: 'chartreuse', letterSpacing: '5px'}}>
          <FormLabel style={{color: 'white', letterSpacing: '5px'}}>4º Phase</FormLabel>
              <Phase4/>
        </Paper></Stepper><hr style={{borderColor: 'Highlight'}}/>
        </Grid>
      </div>
      <div>
      <Grid style={{padding: '20px'}} container spacing={0}>
        <Stepper style={{paddingLeft: '50px'}}>
        <Paper style={{backgroundColor: 'Highlight', color: 'chartreuse'}} variant="outlined">
          <FormLabel style={{color: 'white', letterSpacing: '5px'}}>5º Phase</FormLabel>
            <Cinco/>
        </Paper></Stepper><hr style={{borderColor: 'Highlight'}}/>
        </Grid>
      </div>
      <div>
      <Grid style={{padding: '20px', paddingLeft: '305px'}} container spacing={13}>
        <Stepper style={{paddingLeft: '50px'}}>
        <Paper variant="outlined" style={{backgroundColor: 'Highlight', color: 'chartreuse'}}>
          <FormLabel style={{color: 'white', letterSpacing: '5px'}}>6º Phase</FormLabel>
            <SextoPh/> 
        </Paper></Stepper>
        <hr style={{borderColor: 'Highlight'}}/>
        </Grid>
      </div>
      <div>
      <Grid style={{padding: '20px', paddingLeft: '505px'}} container spacing={13}>
        <Stepper style={{paddingLeft: '50px'}}>
        <Paper variant="outlined" style={{backgroundColor: 'Highlight', color: 'chartreuse'}}>
          <FormLabel style={{color: 'white', letterSpacing: '5px'}}>7º Phase</FormLabel>
            <SetimaFase/> 
        </Paper></Stepper>
        <hr style={{borderColor: 'Highlight'}}/>
        </Grid>
      </div>
      <div>
        <Grid style={{padding: '20px', paddingLeft: '750px'}} container spacing={13}>
        <Stepper>
        <Paper variant="outlined" style={{backgroundColor: 'Highlight', color: 'chartreuse'}}>
          <FormLabel style={{color: 'white', letterSpacing: '5px'}}>8º Phase</FormLabel>
            <EithFase/> 
        </Paper></Stepper></Grid>
      </div><br/>
      <div>
        <Grid style={{padding: '40px', paddingLeft: '110px'}} container spacing={5}>
        <Stepper>
        <Paper variant="outlined" style={{backgroundColor: 'Highlight', color: 'chartreuse'}}>
          <FormLabel style={{color: 'white', letterSpacing: '5px'}}>9º Phase</FormLabel>
            <NonoFase/> 
        </Paper></Stepper></Grid>
      </div><br/>
      <div>
        <Grid style={{padding: '20px', paddingLeft: '395px'}} container spacing={18}>
        <Stepper>
        <Paper variant="outlined" style={{backgroundColor: 'Highlight', color: 'chartreuse'}}>
          <FormLabel style={{color: 'white', letterSpacing: '5px'}}>10º Phase</FormLabel>
            <DecimaFase/> 
        </Paper></Stepper></Grid>
      </div><br/>
      <div>
        <Grid style={{padding: '20px', paddingLeft: '573px'}} container spacing={15.5}>
        <Stepper>
        <Paper variant="outlined" style={{backgroundColor: 'Highlight', color: 'chartreuse'}}>
          <FormLabel style={{color: 'white', letterSpacing: '5px'}}>11º Phase</FormLabel>
            <ElevenFase/> 
        </Paper></Stepper></Grid>
      </div><br/>
      <div>
        <Grid style={{padding: '20px', paddingLeft: '770px'}} container spacing={16}>
        <Stepper>
        <Paper variant="outlined" style={{backgroundColor: 'Highlight', color: 'chartreuse'}}>
          <FormLabel style={{color: 'white',
        letterSpacing: '5px'}}>12º Phase</FormLabel>
            <DozeFase/> 
        </Paper></Stepper></Grid>
      </div><br/>
      <div>
        <Grid style={{padding: '30px', paddingLeft: '110px'}} container spacing={5}>
        <Stepper>
        <Paper variant="outlined" style={{backgroundColor: 'Highlight', color: 'chartreuse'}}>
          <FormLabel style={{color: 'white',
        letterSpacing: '5px'}}>13º Phase</FormLabel>
            <Thirteenth/> 
        </Paper></Stepper></Grid>
      </div><br/>
      <div>
        <Grid style={{padding: '20px', paddingLeft: '380px'}} container spacing={16.7}>
        <Stepper>
        <Paper variant="outlined" style={{backgroundColor: 'Highlight', color: 'chartreuse'}}>
          <FormLabel style={{color: 'white',
        letterSpacing: '5px'}}>14º Phase</FormLabel>
            <KtorzeF/> 
        </Paper></Stepper></Grid>
      </div><br/>
      <div>
        <Grid style={{padding: '30px', paddingLeft: '585px'}} container spacing={17}>
        <Stepper>
        <Paper variant="outlined" style={{backgroundColor: 'Highlight', color: 'chartreuse'}}>
        <FormLabel style={{color: 'white',
        letterSpacing: '5px'}}>15º Phase</FormLabel>
            <DeciQuintaFase/> 
        </Paper></Stepper></Grid>
      </div><br/>
      <div>
        <Grid style={{padding: '30px', paddingLeft: '790px'}} container spacing={18.3}>
        <Stepper>
        <Paper variant="outlined" style={{backgroundColor: 'Highlight', color: 'chartreuse'}}>
        <FormLabel style={{color: 'white',
        letterSpacing: '5px'}}>16º Phase</FormLabel>
            <DecimaSestaFase/> 
        </Paper></Stepper></Grid>
      </div><br/>
    </div>
  )
}

export default TheoryComponents;