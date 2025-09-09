import { Button, Divider, Fab, Grid } from '@mui/material';
import React, {useState} from 'react';
//import { Excer } from '../style';
import GameMemory from './GameMemory';
import Popup from 'reactjs-popup';

/*    const [content, setContent] = useState('');
    const handleAddContent = () => {
        const newContent = prompt('Add an note:');
        setContent(content + '' +newContent);
    };*/

export default function NotesPositions(){
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
    const [allFingers, setAllFingers] = useState(false);
    const handleAddAll = () => {
        setAllFingers(true);
    }
    return(
        <div>
            <Popup trigger={<Fab style={{backgroundColor: 'midnightblue', color: 'white', borderColor: 'blue', borderWidth: '2px', borderStyle: 'double', width: '200px', height: '200px'}}>Notes Violin</Fab>}>
            <fieldset style={{borderColor: 'blue', borderRadius: '20px'}}>
            <img style={{width: '500px', height: '700px'}} src='https://imgv2-1-f.scribdassets.com/img/document/306970306/original/5bf4717b1c/1618620143?v=1' alt='pentblank'/>
            <Grid style={{float: 'left', paddingLeft: '800px'}} container spacing={73.5}>
                {freeString && <p style={{color: 'black', position: 'relative', fontSize: '12px', fontFamily: 'serif'}}>SOL<br/>0</p>}
            </Grid>
            <Grid style={{float: 'left', paddingLeft: '900px'}} container spacing={76.5}>
                {freeString && <p style={{color: 'black', position: 'relative',fontSize: '12px', fontFamily: 'serif'}}>RÉ<br/>0</p>}
            </Grid>
            <Grid style={{float: 'left', paddingLeft: '1000px'}} container spacing={79}>
                {freeString && <p style={{color: 'black', position: 'relative', fontSize: '12px', fontFamily: 'serif'}}>LÁ<br/>0</p>}
            </Grid>
            <Grid style={{float: 'left', paddingLeft: '1100px'}} container spacing={81}>
                {freeString && <p style={{color: 'black', position: 'relative', fontSize: '12px', fontFamily: 'serif'}}>MI<br/>0</p>}
            </Grid>
            <Grid style={{float: 'left', paddingLeft: '815px'}} container spacing={75.3}>
                {freeString && <p style={{color: 'black', position: 'relative', fontSize: '12px', fontFamily: 'serif'}}>___</p>}
            </Grid>
            <Grid style={{float: 'left', paddingLeft: '860px'}} container spacing={76.5}>
                {freeString && <p style={{color: 'black', position: 'relative', fontSize: '12px', fontFamily: 'serif'}}>___</p>}
            </Grid>
            <Grid style={{float: 'left', paddingLeft: '1100px'}} container spacing={83}>
                {freeString && <p style={{color: 'black', position: 'relative', fontSize: '12px', fontFamily: 'serif'}}>Loose Strings</p>}
            </Grid>
            <Grid style={{float: 'left', paddingLeft: '850px'}} container spacing={87}>
                <Button style={{backgroundColor: 'black', fontFamily: 'serif'}} onClick={handleAddFreeStrings}>Add Notes</Button>
            </Grid>
            <Divider/>
            <Grid style={{float: 'left', paddingLeft: '730px'}} container spacing={63.3}>
                {finger1 && <p style={{color: 'black', position: 'relative', fontSize: '12px', fontFamily: 'serif'}}>LÁ<br/>1</p>}
            </Grid>
            <Grid style={{float: 'left', paddingLeft: '735px'}} container spacing={64}>
                {finger1 && <p style={{color: 'black', position: 'relative', fontSize: '12px', fontFamily: 'serif'}}>___</p>}
            </Grid>
            <Grid style={{float: 'left', paddingLeft: '780px'}} container spacing={65.5}>
                {finger1 && <p style={{color: 'black', position: 'relative', fontSize: '12px', fontFamily: 'serif'}}>___</p>}
            </Grid>
            <Grid style={{float: 'left', paddingLeft: '830px'}} container spacing={66.5}>
                {finger1 && <p style={{color: 'black', position: 'relative', fontSize: '12px', fontFamily: 'serif'}}>MI<br/>1</p>}
            </Grid>
            <Grid style={{float: 'left', paddingLeft: '900px'}} container spacing={68.5}>
                {finger1 && <p style={{color: 'black', position: 'relative', fontSize: '12px', fontFamily: 'serif'}}>SI<br/>1</p>}
            </Grid>
            <Grid style={{float: 'left', paddingLeft: '970px'}} container spacing={71.1}>
                {finger1 && <p style={{color: 'black', position: 'relative', fontSize: '12px', fontFamily: 'serif'}}>FÁ<br/>1</p>}
            </Grid>
            <Grid style={{float: 'left', paddingLeft: '730px'}} container spacing={69}>
                {finger1 && <p style={{color: 'black', position: 'relative', fontSize: '12px', fontFamily: 'serif'}}>First Fingers Note</p>}
            </Grid>
            <Grid style={{float: 'left', paddingLeft: '1000px'}} container spacing={68.5}>
                <Button style={{backgroundColor: 'midnightblue', fontFamily: 'serif'}} onClick={handleAddFinger1}>1º Finger</Button>
            </Grid>
            <Divider/>
            <Grid style={{float: 'left', paddingLeft: '650px'}} container spacing={53.5}>
                {finger2 && <p style={{color: 'black', position: 'relative', fontSize: '12px', fontFamily: 'serif'}}>___</p>}
            </Grid>
            <Grid style={{float: 'left', paddingLeft: '655px'}} container spacing={53.5}>
                {finger2 && <p style={{color: 'black', position: 'relative', fontSize: '12px', fontFamily: 'serif'}}>SI<br/>2</p>}
            </Grid>
            <Grid style={{float: 'left', paddingLeft: '690px'}} container spacing={55}>
                {finger2 && <p style={{color: 'black', position: 'relative', fontSize: '12px', fontFamily: 'serif'}}>___</p>}
            </Grid>
            <Grid style={{float: 'left', paddingLeft: '740px'}} container spacing={56}>
                {finger2 && <p style={{color: 'black', position: 'relative', fontSize: '12px', fontFamily: 'serif'}}>FÁ<br/>2</p>}
            </Grid>
            <Grid style={{float: 'left', paddingLeft: '800px'}} container spacing={58.3}>
                {finger2 && <p style={{color: 'black', position: 'relative', fontSize: '12px', fontFamily: 'serif'}}>DÓ<br/>2</p>}
            </Grid>
            <Grid style={{float: 'left', paddingLeft: '870px'}} container spacing={60.5}>
                {finger2 && <p style={{color: 'black', position: 'relative', fontSize: '12px', fontFamily: 'serif'}}>SOL<br/>2</p>}
            </Grid>
            <Grid style={{float: 'left', paddingLeft: '650px'}} container spacing={58.5}>
                {finger2 && <p style={{color: 'black', position: 'relative', fontSize: '12px', fontFamily: 'serif'}}>Second Fingers Notes</p>}
            </Grid>
            <Grid style={{float: 'left', paddingLeft: '915px'}} container spacing={57.7}>
                <Button style={{backgroundColor: 'midnightblue', fontFamily: 'serif'}} onClick={handleAddFinger2}>2º Finger</Button>
            </Grid>
            <Divider/>
            <Grid style={{float: 'left', paddingLeft: '795px'}} container spacing={50.5}>
                {finger3 && <p style={{color: 'black', position: 'relative', fontSize: '12px', fontFamily: 'serif'}}>LÁ<br/>3</p>}
            </Grid>
            <Grid style={{float: 'left', paddingLeft: '800px'}} container spacing={51.6}>
                {finger3 && <p style={{color: 'black', position: 'relative', fontSize: '12px', fontFamily: 'serif'}}>____</p>}
            </Grid>
            <Grid style={{float: 'left', paddingLeft: '720px'}} container spacing={48.3}>
                {finger3 && <p style={{color: 'black', position: 'relative', fontSize: '12px', fontFamily: 'serif'}}>RÉ<br/>3</p>}
            </Grid>
            <Grid style={{float: 'left', paddingLeft: '640px'}} container spacing={46}>
                {finger3 && <p style={{color: 'black', position: 'relative', fontSize: '12px', fontFamily: 'serif'}}>SOL<br/>3</p>}
            </Grid>
            <Grid style={{float: 'left', paddingLeft: '560px'}} container spacing={43}>
                {finger3 && <p style={{color: 'black', position: 'relative', fontSize: '12px', fontFamily: 'serif'}}>DÓ<br/>3</p>}
            </Grid>
            <Grid style={{float: 'left', paddingLeft: '563px'}} container spacing={44}>
                {finger3 && <p style={{color: 'black', position: 'relative', fontSize: '12px', fontFamily: 'serif'}}>____</p>}
            </Grid>
            <Grid style={{float: 'left', paddingLeft: '570px'}} container spacing={48}>
                {finger3 && <p style={{color: 'black', position: 'relative', fontSize: '12px', fontFamily: 'serif'}}>Third Fingers Notes</p>}
            </Grid>
            <Grid style={{float: 'left', paddingLeft: '830px'}} container spacing={47}>
                <Button style={{backgroundColor: 'midnightblue', fontFamily: 'serif'}} onClick={handleAddFinger3}>3º Finger</Button>
            </Grid>
            <Divider/>
            <Grid style={{float: 'left', paddingLeft: '730px'}} container spacing={41}>
                {finger4 && <p style={{color: 'black', position: 'relative', fontSize: '12px', fontFamily: 'serif'}}>___</p>}
            </Grid>
            <Grid style={{float: 'left', paddingLeft: '730px'}} container spacing={41}>
                {finger4 && <p style={{color: 'black', position: 'relative', fontSize: '12px', fontFamily: 'serif'}}>SI<br/>4</p>}
            </Grid>
            <Grid style={{float: 'left', paddingLeft: '640px'}} container spacing={38}>
                {finger4 && <p style={{color: 'black', position: 'relative', fontSize: '12px', fontFamily: 'serif'}}>MI<br/>4</p>}
            </Grid>
            <Grid style={{float: 'left', paddingLeft: '570px'}} container spacing={36}>
                {finger4 && <p style={{color: 'black', position: 'relative', fontSize: '12px', fontFamily: 'serif'}}>LÁ<br/>4</p>}
            </Grid>
            <Grid style={{float: 'left', paddingLeft: '490px'}} container spacing={33.5}>
                {finger4 && <p style={{color: 'black', position: 'relative', fontSize: '12px', fontFamily: 'serif'}}>RÉ<br/>4</p>}
            </Grid>
            <Grid style={{float: 'left', paddingLeft: '490px'}} container spacing={38}>
                {finger4 && <p style={{color: 'black', position: 'relative', fontSize: '12px', fontFamily: 'serif'}}>Fourth Fingers Notes</p>}
            </Grid>
            <Grid style={{float: 'left', paddingLeft: '750px'}} container spacing={36.5}>
                <Button style={{backgroundColor: 'midnightblue', fontFamily: 'serif'}} onClick={handleAddFinger4}>4º Finger</Button>
            </Grid>
            <Divider/>
            <Grid style={{float: 'left', paddingLeft: '765px'}} container spacing={30}>
                {allFingers && <p style={{color: 'black', position: 'relative', fontSize: '12px', fontFamily: 'serif'}}>SI<br/>4</p>}
            </Grid>
            <Grid style={{float: 'left', paddingLeft: '760px'}} container spacing={30}>
                {allFingers && <p style={{color: 'black', position: 'relative', fontSize: '12px', fontFamily: 'serif'}}>____</p>}
            </Grid>
            <Grid style={{float: 'left', paddingLeft: '727px'}} container spacing={29}>
                {allFingers && <p style={{color: 'black', position: 'relative', fontSize: '12px', fontFamily: 'serif'}}>LÁ<br/>3</p>}
            </Grid>
            <Grid style={{float: 'left', paddingLeft: '730px'}} container spacing={30}>
                {allFingers && <p style={{color: 'black', position: 'relative', fontSize: '12px', fontFamily: 'serif'}}>____</p>}
            </Grid>
            <Grid style={{float: 'left', paddingLeft: '693px'}} container spacing={28.3}>
                {allFingers && <p style={{color: 'black', position: 'relative', fontSize: '12px', fontFamily: 'serif'}}>SOL<br/>2</p>}
            </Grid>
            <Grid style={{float: 'left', paddingLeft: '670px'}} container spacing={27.9}>
                {allFingers && <p style={{color: 'black', position: 'relative', fontSize: '12px', fontFamily: 'serif'}}>FÁ<br/>1</p>}
            </Grid>
            <Grid style={{float: 'left', paddingLeft: '645px'}} container spacing={27}>
                {allFingers && <p style={{color: 'black', position: 'relative', fontSize: '12px', fontFamily: 'serif'}}>MI<br/>0|4</p>}
            </Grid>
            <Grid style={{float: 'left', paddingLeft: '620px'}} container spacing={26.5}>
                {allFingers && <p style={{color: 'black', position: 'relative', fontSize: '12px', fontFamily: 'serif'}}>RÉ<br/>3</p>}
            </Grid>
            <Grid style={{float: 'left', paddingLeft: '595px'}} container spacing={26}>
                {allFingers && <p style={{color: 'black', position: 'relative', fontSize: '12px', fontFamily: 'serif'}}>DÓ<br/>2</p>}
            </Grid>
            <Grid style={{float: 'left', paddingLeft: '577px'}} container spacing={25.5}>
                {allFingers && <p style={{color: 'black', position: 'relative', fontSize: '12px', fontFamily: 'serif'}}>SI<br/>1</p>}
            </Grid>
            <Grid style={{float: 'left', paddingLeft: '553px'}} container spacing={25}>
                {allFingers && <p style={{color: 'black', position: 'relative', fontSize: '12px', fontFamily: 'serif'}}>LÁ<br/>0|4</p>}
            </Grid>
            <Grid style={{float: 'left', paddingLeft: '522px'}} container spacing={24.5}>
                {allFingers && <p style={{color: 'black', position: 'relative', fontSize: '12px', fontFamily: 'serif'}}>SOL<br/>3</p>}
            </Grid>
            <Grid style={{float: 'left', paddingLeft: '496px'}} container spacing={23.7}>
                {allFingers && <p style={{color: 'black', position: 'relative', fontSize: '12px', fontFamily: 'serif'}}>FÁ<br/>2</p>}
            </Grid>
            <Grid style={{float: 'left', paddingLeft: '470px'}} container spacing={23.2}>
                {allFingers && <p style={{color: 'black', position: 'relative', fontSize: '12px', fontFamily: 'serif'}}>MI<br/>1</p>}
            </Grid>
            <Grid style={{float: 'left', paddingLeft: '442px'}} container spacing={22.5}>
                {allFingers && <p style={{color: 'black', position: 'relative', fontSize: '12px', fontFamily: 'serif'}}>RÉ<br/>0|4</p>}
            </Grid>
            <Grid style={{float: 'left', paddingLeft: '408px'}} container spacing={21.8}>
                {allFingers && <p style={{color: 'black', position: 'relative', fontSize: '12px', fontFamily: 'serif'}}>DÓ<br/>3</p>}
            </Grid>
            <Grid style={{float: 'left', paddingLeft: '412px'}} container spacing={22.8}>
                {allFingers && <p style={{color: 'black', position: 'relative', fontSize: '12px', fontFamily: 'serif'}}>____</p>}
            </Grid>
            <Grid style={{float: 'left', paddingLeft: '385px'}} container spacing={21.5}>
                {allFingers && <p style={{color: 'black', position: 'relative', fontSize: '12px', fontFamily: 'serif'}}>SI<br/>2</p>}
            </Grid>
            <Grid style={{float: 'left', paddingLeft: '354px'}} container spacing={20.5}>
                {allFingers && <p style={{color: 'black', position: 'relative', fontSize: '12px', fontFamily: 'serif'}}>LÁ<br/>1</p>}
            </Grid>
            <Grid style={{float: 'left', paddingLeft: '357px'}} container spacing={21.5}>
                {allFingers && <p style={{color: 'black', position: 'relative', fontSize: '12px', fontFamily: 'serif'}}>____</p>}
            </Grid>
            <Grid style={{float: 'left', paddingLeft: '330px'}} container spacing={21.5}>
                {allFingers && <p style={{color: 'black', position: 'relative', fontSize: '12px', fontFamily: 'serif'}}>____</p>}
            </Grid>
            <Grid style={{float: 'left', paddingLeft: '320px'}} container spacing={20}>
                {allFingers && <p style={{color: 'black', position: 'relative', fontSize: '12px', fontFamily: 'serif'}}>SOL<br/>0|4</p>}
            </Grid>
            <Grid style={{float: 'left', paddingLeft: '400px'}} container spacing={25}>
                {allFingers && <p style={{color: 'black', position: 'relative', fontSize: '12px', fontFamily: 'serif'}}>All Fingers</p>}
            </Grid>
            <Grid style={{float: 'left', paddingLeft: '680px'}} container spacing={21}>
                <Button style={{backgroundColor: 'midnightblue', fontFamily: 'serif'}} onClick={handleAddAll}>All Fingers</Button>
            </Grid>
            <Grid style={{float: 'left', paddingLeft: '1075px'}} container spacing={76}>
                <p style={{position: 'relative'}}>Click</p>
            </Grid>
            <Grid style={{float: 'left', paddingLeft: '990px'}} container spacing={65}>
                <p style={{position: 'relative'}}>Click</p>
            </Grid>
            <Grid style={{float: 'left', paddingLeft: '900px'}} container spacing={54}>
                <p style={{position: 'relative'}}>Click</p>
            </Grid>
            <Grid style={{float: 'left', paddingLeft: '820px'}} container spacing={43}>
                <p style={{position: 'relative'}}>Click</p>
            </Grid>
            <Grid style={{float: 'left', paddingLeft: '730px'}} container spacing={28}>
                <p style={{position: 'relative'}}>Click</p>
            </Grid>
            <fieldset style={{borderColor: 'dodgerblue', borderRadius: '20px', boxShadow: '0 0 50px 20px', backgroundColor: 'midnightblue', textAlign: 'center'}}>
                <GameMemory/>
            </fieldset>
            </fieldset>
            </Popup>
        </div>
    )
}