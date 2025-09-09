import { Card, Button, StepButton } from '@mui/material';
import React, { useState } from 'react';
import AppDialog from './FilesPratice/DialogsFiles/Dialog';
import TrainerNoteDialog from './FilesPratice/DialogsFiles/DialogChord';
import DialogMemoryGame from './FilesPratice/DialogsFiles/MemoryDialog';
import DialogPuzzle from './FilesPratice/DialogsFiles/DialogPuzzle';
import DialogRhythm from './FilesPratice/DialogsFiles/DialogRhythm';
import DialogTriviaSong from './FilesPratice/DialogsFiles/DialogTrivia';
import DialogSongString from './FilesPratice/DialogsFiles/DialogStringSong';
import DialogMusicQuizzess from './FilesPratice/DialogsFiles/DialogQuizzMusic';
import DialogMemorization from './FilesPratice/DialogsFiles/DialogMemorization';
import DialogAcerts from './FilesPratice/DialogsFiles/DialogAcerts';
import DialogCatch from './FilesPratice/DialogsFiles/DialogNotesPlay';
import DialogFingeringViolin from './FilesPratice/DialogsFiles/DialogFingering';
import DialogTestCompass from './FilesPratice/DialogsFiles/DialogCompassFormule';
import DialogSightTrainer from './FilesPratice/DialogsFiles/DialogSightTrainer';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Violin from './PraticNotas.tsx';
import ViolinDominion from '../String_Interpreter/Violin_Interpretor/Violin_Pratices.js';
import ViolaDominion from '../String_Interpreter/Viola_Interpretor/Pratice_Lesson_Viola.js';
import CelloPratice from '../String_Interpreter/Interpretor_Cello/Cello_Pratice.js';
import Metronome from './FilesPratice/SortingInputs.js';
import DialogClaves from './FilesPratice/DialogsFiles/DialogCelloPauta.js';
import DialogNotesFigures from './FilesPratice/DialogsFiles/DialogNotesFigures.js';
import AppWallet from '../Card_Creator/Card_Wallet.js';
import MyApp from '../Card_Creator/Card_Creator.js';
import RecognizeNote from '../Card_Creator/FoundNote.js';
import { Carousel, Col } from 'antd';
import { useRouter } from "next/navigation";

export default function FirstStud(){
    const [trueOpen, setTrueOpen] = useState(false);
    const openingModal = () => {
        setTrueOpen(!trueOpen);
    };
    const StyleButton = {
        botao: {
            backgroundColor: 'lightblue',
            color: 'black',
            fontFamily: 'serif',
        }
    };
    const router = useRouter();
    return(
        <div style={{backgroundColor: 'blue', float: 'left', height: '6300px'}}>
            <div style={{width: '850px', height: '6300px'}}>
                <Carousel style={{margin: '10px', padding: '30px', backgroundColor: 'black', color: 'black', borderRadius: '60px'}}>
                    <ViolinDominion/>
                    <ViolaDominion/>
                    <CelloPratice/>
                </Carousel>
            <br/><br/>
            <fieldset><br/><hr/>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <Card style={{width: '700px', margin :'35px', height: '1700px',backgroundColor: 'darkcyan'}}>
                                <StepButton style={{backgroundColor: 'midnightblue'}}>
                                    <details><summary style={{color: 'gold'}}>Rhythm Game</summary>
                                        <br/><br/>
                                        <DialogRhythm/>
                                            </details>
                                        </StepButton>
                                        <br/>
                                        <hr/>
                                        <br/>
                                        <StepButton style={{backgroundColor: 'midnightblue'}}>
                                            <details><summary style={{color: 'gold'}}>Pratices questionary Game</summary>
                                        <DialogMusicQuizzess/>
                                    </details>
                                </StepButton>
                                <br/>
                                <hr/>
                                <br/>
                                <StepButton style={{backgroundColor: 'midnightblue'}}>
                                    <details><summary style={{color: 'gold'}}>Questionary 1 Game</summary>
                                        <DialogSongString/>
                                    </details>
                                </StepButton>
                                <br/>
                                <hr/>
                                <br/>
                                <StepButton style={{backgroundColor: 'midnightblue'}}>
                                    <details><summary style={{color: 'gold'}}>Questionary 2 Game</summary>
                                        <DialogTriviaSong/>
                                    </details>
                                </StepButton>
                                <br/><hr/><br/>
                                <StepButton style={{backgroundColor: 'midnightblue'}}>
                                    <details><summary style={{color: 'gold'}}>Puzzle Game</summary>
                                        <DialogPuzzle/>
                                    </details>
                                </StepButton>
                                <br/><hr/><br/>
                                <StepButton style={{backgroundColor: 'midnightblue'}}>
                                    <details><summary style={{color: 'gold'}}>Add notes at a pentagrams</summary>
                                        <DialogMemoryGame/>
                                    </details>
                                </StepButton>
                                <br/><hr/><br/>
                                <StepButton style={{backgroundColor: 'midnightblue'}}>
                                    <details><summary style={{color: 'gold'}}>Trainer of Notes</summary>
                                        <TrainerNoteDialog/>
                                    </details>
                                </StepButton>
                                <br/><hr/><br/>
                                <StepButton style={{backgroundColor: 'midnightblue'}}>
                                    <details><summary style={{color: 'gold'}}>Notes Marker</summary>
                                        <AppDialog/>
                                    </details>
                                </StepButton>
                                <br/><hr/><br/>
                                <StepButton style={{backgroundColor: 'midnightblue'}}>
                                    <details><summary style={{color: 'gold'}}>Memory Timer</summary>
                                        <DialogMemorization/>
                                    </details>
                                </StepButton>
                                <br/><hr/><br/>
                                <StepButton style={{backgroundColor: 'midnightblue'}}>
                                    <details><summary style={{color: 'gold'}}>Guess the Arpejos and the Scales</summary>
                                        <DialogAcerts/>
                                    </details>
                                </StepButton>
                                <br/><hr/><br/>
                                <StepButton style={{backgroundColor: 'midnightblue'}}>
                                    <details><summary style={{color: 'gold'}}>Catch Game</summary>
                                        <DialogCatch/>
                                    </details>
                                </StepButton>
                                <br/><hr/><br/>
                                <StepButton style={{backgroundColor: 'midnightblue'}}>
                                    <details><summary style={{color: 'gold'}}>Put note and the Fermata</summary>
                                        <DialogFingeringViolin/>
                                    </details>
                                </StepButton>
                                <br/><hr/><br/>
                                <StepButton style={{backgroundColor: 'midnightblue'}}>
                                    <details><summary style={{color: 'gold'}}>Compass Formule Game</summary>
                                        <DialogTestCompass/>
                                    </details>
                                </StepButton>
                                <br/><hr/><br/>
                                <StepButton style={{backgroundColor: 'midnightblue'}}>
                                    <details><summary style={{color: 'gold'}}>Sigth Trainer Game</summary>
                                        <DialogSightTrainer/>
                                    </details>
                                </StepButton>
                                <br/><br/><br/>
                                <StepButton style={{backgroundColor: 'midnightblue'}}>
                                    <details><summary style={{color: 'gold'}}>Sounds Notes Violin</summary>
                                        <Violin/>
                                    </details>
                                </StepButton><br/><br/><hr/><br/>
                                <StepButton style={{backgroundColor: 'midnightblue'}}>
                                    <details><summary style={{color: 'gold', fontFamily: 'revert'}}>Clave Exercise</summary>
                                        <DialogClaves/>
                                    </details>
                                </StepButton>
                                <br/><br/><br/>
                                <StepButton style={{backgroundColor: 'midnightblue'}}>
                                    <details><summary style={{color: 'gold', fontFamily: 'revert'}}>Add figures!</summary>
                                        <DialogNotesFigures/>
                                    </details>
                                </StepButton>
                                <br/><br/><br/>
                                <StepButton style={{backgroundColor: 'midnightblue'}}>
                                    <details><summary style={{color: 'gold', fontFamily: 'revert'}}>Get the right note!!!!!</summary>
                                        <RecognizeNote/>
                                    </details>
                                </StepButton>
                            </Card>
                            </td>
                        </tr>
                    </tbody>
                </table><br/><br/>
                <fieldset>
                    <center style={{padding: '150px', color: 'white'}}>
                        <h1>Keep going ahead on the scale formulary</h1>
                        <br/>
                        <h3 style={{padding: '60px', color: 'white'}}>Create an Card and put the first note of the scale on the title and after you will must to put the whole scale at the description below the titel</h3>
                        <AppWallet/>
                        <MyApp/>
                    </center>
                </fieldset>
                <br/><hr/><br/>
                <Button style={StyleButton.botao} onClick={openingModal}>Chords lesson here! (Click)</Button>
                <br/><br/>
                {trueOpen && (
                    <Metronome/>
                )}
                <br/>
            </fieldset>
            </div>
            <Col style={{paddingLeft: '260px'}} span={25}>
                <Button onClick={() => router.back()} style={{backgroundColor: 'midnightblue'}}>
                    <ArrowBackIcon/>
                </Button>
            </Col>
        </div>
    )
}