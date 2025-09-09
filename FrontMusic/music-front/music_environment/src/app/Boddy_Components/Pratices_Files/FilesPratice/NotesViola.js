import { Button, Divider, Fab, Grid } from '@mui/material';
import React, {useState} from 'react';
//import { Excer } from '../style';
import Popup from 'reactjs-popup';

export default function NotesViola(){
    const [freeString, setFreeString] = useState(false);
    const handleAddFreeStrings = () => {
        setFreeString(true);
    };
    const [finger1, setFinger1] = useState(false);
    const handleAddFinger1 = () => {
        setFinger1(true);
    };
    const [finger2, setFinger2] = useState(false);
    const handleAddFinger2 = () => {
        setFinger2(true);
    };
    const [finger3, setFinger3] = useState(false);
    const handleAddFinger3 = () => {
        setFinger3(true);
    };
    const [finger4, setFinger4] = useState(false);
    const handleAddFinger4 = () => {
        setFinger4(true);
    };
    return(
        <div>
            <Popup trigger={<Fab style={{backgroundColor: 'Highlight', color: 'white', borderColor: 'blue', borderStyle: 'double', borderWidth: '2px', width: '200px', height: '200px'}}>Violas Note</Fab>}>
            <fieldset style={{borderColor: 'blue'}}>
            <img style={{width: '500px', height: '700px'}} src='https://th.bing.com/th/id/R.691050fa9c425ca48d653b34388771f9?rik=F%2bJ%2f5xnldlF99Q&pid=ImgRaw&r=0' alt='pentblank'/>
            <Grid style={{float: 'left', paddingLeft: '800px'}} container spacing={78.3}>
                {freeString && <p style={{color: 'black', position: 'relative', fontSize: '10px', fontFamily: 'serif'}}>DÓ<br/>0</p>}
            </Grid>
            <Grid style={{float: 'left', paddingLeft: '900px'}} container spacing={80.5}>
                {freeString && <p style={{color: 'black', position: 'relative',fontSize: '10px', fontFamily: 'serif'}}>SOL<br/>0</p>}
            </Grid>
            <Grid style={{float: 'left', paddingLeft: '1000px'}} container spacing={82}>
                {freeString && <p style={{color: 'black', position: 'relative', fontSize: '10px', fontFamily: 'serif'}}>RÉ<br/>0</p>}
            </Grid>
            <Grid style={{float: 'left', paddingLeft: '1100px'}} container spacing={83.5}>
                {freeString && <p style={{color: 'black', position: 'relative', fontSize: '10px', fontFamily: 'serif'}}>LÁ<br/>0</p>}
            </Grid>
            <Grid style={{float: 'left', paddingLeft: '814px'}} container spacing={80}>
                {freeString && <p style={{color: 'black', position: 'relative', fontSize: '12px', fontFamily: 'serif'}}>___</p>}
            </Grid>
            <Grid style={{float: 'left', paddingLeft: '1100px'}} container spacing={87}>
                {freeString && <p style={{color: 'black', position: 'relative', fontSize: '12px', fontFamily: 'serif'}}>Loose Strings</p>}
            </Grid>
            <Grid style={{float: 'left', paddingLeft: '850px'}} container spacing={87}>
                <Button style={{backgroundColor: 'black', fontFamily: 'serif'}} onClick={handleAddFreeStrings}>Add Notes</Button>
            </Grid>
            <Divider/>
            <Grid style={{float: 'left', paddingLeft: '770px'}} container spacing={72}>
                {finger1 && <p style={{color: 'black', position: 'relative', fontSize: '12px', fontFamily: 'serif'}}>RÉ<br/>1</p>}
            </Grid>
            <Grid style={{float: 'left', paddingLeft: '775px'}} container spacing={73}>
                {finger1 && <p style={{color: 'black', position: 'relative', fontSize: '12px', fontFamily: 'serif'}}>___</p>}
            </Grid>
            <Grid style={{float: 'left', paddingLeft: '850px'}} container spacing={73.5}>
                {finger1 && <p style={{color: 'black', position: 'relative', fontSize: '10px', fontFamily: 'serif'}}>LÁ<br/>1</p>}
            </Grid>
            <Grid style={{float: 'left', paddingLeft: '930px'}} container spacing={75}>
                {finger1 && <p style={{color: 'black', position: 'relative', fontSize: '10px', fontFamily: 'serif'}}>MI<br/>1</p>}
            </Grid>
            <Grid style={{float: 'left', paddingLeft: '1000px'}} container spacing={76.5}>
                {finger1 && <p style={{color: 'black', position: 'relative', fontSize: '10px', fontFamily: 'serif'}}>SI<br/>1</p>}
            </Grid>
            <Grid style={{float: 'left', paddingLeft: '1000px'}} container spacing={77}>
                {finger1 && <p style={{color: 'black', position: 'relative', fontSize: '10px', fontFamily: 'serif'}}>____</p>}
            </Grid>
            <Grid style={{float: 'left', paddingLeft: '750px'}} container spacing={76}>
                {finger1 && <p style={{color: 'black', position: 'relative', fontSize: '12px', fontFamily: 'serif'}}>First Fingers Note</p>}
            </Grid>
            <Grid style={{float: 'left', paddingLeft: '1053px'}} container spacing={75}>
                <Button style={{backgroundColor: 'midnightblue', fontFamily: 'serif'}} onClick={handleAddFinger1}>1º Finger</Button>
            </Grid>
            <Divider/>
            <Grid style={{float: 'left', paddingLeft: '750px'}} container spacing={64.5}>
                {finger2 && <p style={{color: 'black', position: 'relative', fontSize: '10px', fontFamily: 'serif'}}>MI<br/>2</p>}
            </Grid>
            <Grid style={{float: 'left', paddingLeft: '820px'}} container spacing={66.5}>
                {finger2 && <p style={{color: 'black', position: 'relative', fontSize: '10px', fontFamily: 'serif'}}>SI<br/>2</p>}
            </Grid>
            <Grid style={{float: 'left', paddingLeft: '880px'}} container spacing={68}>
                {finger2 && <p style={{color: 'black', position: 'relative', fontSize: '10px', fontFamily: 'serif'}}>FÁ<br/>2</p>}
            </Grid>
            <Grid style={{float: 'left', paddingLeft: '950px'}} container spacing={69.5}>
                {finger2 && <p style={{color: 'black', position: 'relative', fontSize: '10px', fontFamily: 'serif'}}>DÓ<br/>2</p>}
            </Grid>
            <Grid style={{float: 'left', paddingLeft: '700px'}} container spacing={68}>
                {finger2 && <p style={{color: 'black', position: 'relative', fontSize: '12px', fontFamily: 'serif'}}>Second Fingers Notes</p>}
            </Grid>
            <Grid style={{float: 'left', paddingLeft: '993px'}} container spacing={67.3}>
                <Button style={{backgroundColor: 'midnightblue', fontFamily: 'serif'}} onClick={handleAddFinger2}>2º Finger</Button>
            </Grid>
            <Divider/>
            <Grid style={{float: 'left', paddingLeft: '908px'}} container spacing={62.4}>
                {finger3 && <p style={{color: 'black', position: 'relative', fontSize: '10px', fontFamily: 'serif'}}>RÉ<br/>3</p>}
            </Grid>
            <Grid style={{float: 'left', paddingLeft: '830px'}} container spacing={61.4}>
                {finger3 && <p style={{color: 'black', position: 'relative', fontSize: '10px', fontFamily: 'serif'}}>SOL<br/>3</p>}
            </Grid>
            <Grid style={{float: 'left', paddingLeft: '750px'}} container spacing={59.4}>
                {finger3 && <p style={{color: 'black', position: 'relative', fontSize: '10px', fontFamily: 'serif'}}>DÓ<br/>3</p>}
            </Grid>
            <Grid style={{float: 'left', paddingLeft: '670px'}} container spacing={57.8}>
                {finger3 && <p style={{color: 'black', position: 'relative', fontSize: '10px', fontFamily: 'serif'}}>FÁ<br/>3</p>}
            </Grid>
            <Grid style={{float: 'left', paddingLeft: '910px'}} container spacing={63.5}>
                {finger3 && <p style={{color: 'black', position: 'relative', fontSize: '12px', fontFamily: 'serif'}}>____</p>}
            </Grid>
            <Grid style={{float: 'left', paddingLeft: '630px'}} container spacing={60}>
                {finger3 && <p style={{color: 'black', position: 'relative', fontSize: '12px', fontFamily: 'serif'}}>Third Fingers Notes</p>}
            </Grid>
            <Grid style={{float: 'left', paddingLeft: '935px'}} container spacing={60}>
                <Button style={{backgroundColor: 'midnightblue', fontFamily: 'serif'}} onClick={handleAddFinger3}>3º Finger</Button>
            </Grid>
            <Divider/>
            <Grid style={{float: 'left', paddingLeft: '755px'}} container spacing={55.9}>
                {finger4 && <p style={{color: 'black', position: 'relative', fontSize: '12px', fontFamily: 'serif'}}>___</p>}
            </Grid>
            <Grid style={{float: 'left', paddingLeft: '830px'}} container spacing={55.3}>
                {finger4 && <p style={{color: 'black', position: 'relative', fontSize: '10px', fontFamily: 'serif'}}>MI<br/>4</p>}
            </Grid>
            <Grid style={{float: 'left', paddingLeft: '830px'}} container spacing={55.9}>
                {finger4 && <p style={{color: 'black', position: 'relative', fontSize: '12px', fontFamily: 'serif'}}>___</p>}
            </Grid>
            <Grid style={{float: 'left', paddingLeft: '750px'}} container spacing={54.7}>
                {finger4 && <p style={{color: 'black', position: 'relative', fontSize: '10px', fontFamily: 'serif'}}>LÁ<br/>4</p>}
            </Grid>
            <Grid style={{float: 'left', paddingLeft: '680px'}} container spacing={52.7}>
                {finger4 && <p style={{color: 'black', position: 'relative', fontSize: '10px', fontFamily: 'serif'}}>RÉ<br/>4</p>}
            </Grid>
            <Grid style={{float: 'left', paddingLeft: '590px'}} container spacing={51}>
                {finger4 && <p style={{color: 'black', position: 'relative', fontSize: '10px', fontFamily: 'serif'}}>SOL<br/>4</p>}
            </Grid>
            <Grid style={{float: 'left', paddingLeft: '580px'}} container spacing={54}>
                {finger4 && <p style={{color: 'black', position: 'relative', fontSize: '12px', fontFamily: 'serif'}}>Fourth Fingers Notes</p>}
            </Grid>
            <Grid style={{float: 'left', paddingLeft: '880px'}} container spacing={53}>
                <Button style={{backgroundColor: 'midnightblue', fontFamily: 'serif'}} onClick={handleAddFinger4}>4º Finger</Button>
            </Grid>
            <Divider/>
            <Grid style={{float: 'left', paddingLeft: '1130px'}} container spacing={82}>
                <p style={{position: 'relative'}}>Click</p>
            </Grid>
            <Grid style={{float: 'left', paddingLeft: '1060px'}} container spacing={74}>
                <p style={{position: 'relative'}}>Click</p>
            </Grid>
            <Grid style={{float: 'left', paddingLeft: '1000px'}} container spacing={66}>
                <p style={{position: 'relative'}}>Click</p>
            </Grid>
            <Grid style={{float: 'left', paddingLeft: '950px'}} container spacing={59.5}>
                <p style={{position: 'relative'}}>Click</p>
            </Grid>
            <Grid style={{float: 'left', paddingLeft: '730px'}} container spacing={28}>
                <p style={{position: 'relative'}}>Click</p>
            </Grid>
            </fieldset>
            </Popup>
        </div>
    )
}