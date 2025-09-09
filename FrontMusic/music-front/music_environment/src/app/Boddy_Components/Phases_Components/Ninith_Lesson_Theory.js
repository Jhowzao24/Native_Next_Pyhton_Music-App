import { ButtonBase, Divider, Grid, Tooltip, Button, Fab } from '@mui/material';
import React, { useState } from 'react';
import QuizzNono from '../Avaliation_Files/Theory_Quizz/Quizz_Phase_Nine';


export default function NonoFase(){
  const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
    return(
      <div>
        <header>
        <Button onClick={openModal}>Abrir Janela</Button>
        {isOpen && (
            <div style={styles.overlay}>
                <div style={styles.content}>
                    <Fab style={{width: '30px', height: '30px', backgroundColor: 'red', color: 'white', fontFamily: 'fantasy', fontSize: '25px'}} onClick={closeModal}>x</Fab>
                    <FaseNona/>
                </div>
            </div>
        )}
        </header>
      </div>
    )
  }


  const styles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fundo semi-transparente
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000, // Garante que o modal fique acima de outros elementos
    },
    content: {
      width: '100%',
      height: '100%',
      backgroundColor: '#fff',
      padding: '20px',
      boxSizing: 'border-box',
      overflowY: 'auto', // Permite scroll caso o conteúdo ultrapasse a altura da tela
    },
}


function FaseNona(){
    const HomemBar = [
        <div style={{width: '400px', backgroundColor: 'Highlight'}}>
            <h2>By times the author can to determine that the musician play that part repeat with the change at the last compasso, when it happen, he will indicate the repeation using the Homes of Ritornelo at the end of the repeat section</h2>
            <img style={{width: '650px', height: '85px'}} src='https://4.bp.blogspot.com/-Uqd-Gqy1_68/VVUI31HYLVI/AAAAAAAAALw/4q3RIFbU8sw/s1600/Melodia%2Bcom%2Bcasa%2Bde%2B1%C2%AA%2Be%2B2[%2Bvez%2Bcom%2Britornello-%2Bn%C2%BA%2Bcompassos%2Bescritos%2Btocados.jpg' alt='casaritornelo'/>
        </div>
    ]
    const rittor = [
        <div style={{width: '400px', backgroundColor: 'dodgerblue', margin: '20px'}}>
            <h3><h2>Beginner barra of the compasso</h2>This is 2 vertical paralels lines, being the first more thick than the second, followed by colon alined to the center of the second, that it indicate the begin of the secction that will be repated</h3>
            <img style={{width: '450px', height: '150px'}} src='https://3.bp.blogspot.com/-RZeFN_LJy1Q/T11Tfl8GGqI/AAAAAAAAALA/uL96aDgiHA8/s1600/Ritornello.jpg' alt='begBar'/>
            <h3><h2>Final Barra of the compasso</h2>This is two paralels vertical lines, the second is more thick than the first, being the first procceded by a colon alined to it center, that indicate the final of the secction that wioll be repeated</h3>
        </div>
    ]
    const Bardouble = [
        <div>
            <h3>Double Bar</h3>
            <h4>This is the bar that will divider two snippets of the music or hymn, see it atte next image below:</h4>
            <Tooltip title='As you can to see here, this bar will divider two different snippets that ot has a different compasso number'>
            <img style={{width: '400px', height: '100px'}} src='https://th.bing.com/th/id/R.86413f9c5f3d7fc419a19d7c2b0cccd3?rik=7d%2fIHTa3eM3iEg&riu=http%3a%2f%2f3.bp.blogspot.com%2f-6y8CyU98Vrc%2fT11QW7ZpayI%2fAAAAAAAAAKw%2foJBtMF7AGwM%2fs1600%2fBarra_Dupla.jpg&ehk=cRjEpGiO2aYVyBn1cgMLJo9fLTaxFPm7bdNqllbAszA%3d&risl=&pid=ImgRaw&r=0' alt='doublebar'/>
            </Tooltip>
        </div>
    ]
    const barRit = [
        <div style={{margin: '-30px', backgroundColor: 'blue'}}>
            <h3>Ritornelos Bar in 3</h3>
            <h4>In case there is the indication of house 3, the interpreter will must to repeat the snippets again, jump the houses 1 and 2, and, play what isat the house 3, keepping until the end!</h4>
            <img style={{width: '600px'}} src='https://4.bp.blogspot.com/-Uqd-Gqy1_68/VVUI31HYLVI/AAAAAAAAALw/4q3RIFbU8sw/s1600/Melodia%2Bcom%2Bcasa%2Bde%2B1%C2%AA%2Be%2B2[%2Bvez%2Bcom%2Britornello-%2Bn%C2%BA%2Bcompassos%2Bescritos%2Btocados.jpg' alt='rit3'/>
        </div>
    ]
    return(
        <div style={{width: '1300px', height: '400px', backgroundColor: 'blueviolet', borderRadius: '30px'}}>
            <center><img style={{width: '500px'}} src='https://th.bing.com/th/id/R.0fcdce2f71cb4e56decf9d5789c19748?rik=%2fPbEW%2f24l%2bPNXA&riu=http%3a%2f%2f3.bp.blogspot.com%2f_El6bIorKjZI%2fS7V3SBdvaVI%2fAAAAAAAAAMU%2f9vOEnyTyNFc%2fs1600%2ffinal.JPG&ehk=d83i8F5ypWSwiCHUoP8FlkpPIJl6gCBHbZ9zpFWxDjo%3d&risl=&pid=ImgRaw&r=0' alt='bar'/></center>
            <br/>
            <Divider/>
            <br/>
            <Grid style={{paddingLeft: '100px'}} container spacing={3}>
                <Tooltip title={rittor}>
                    <ButtonBase style={{backgroundColor: 'dodgerblue', color: 'gold', width: '150px', height: '50px', fontFamily: 'serif'}}>Ritornelo</ButtonBase>
                </Tooltip>
            </Grid>
            <Grid style={{paddingLeft: '300px'}} container spacing={6.3}>
                <Tooltip title={HomemBar}>
                    <ButtonBase style={{backgroundColor: 'dodgerblue', color: 'gold', width: '150px', height: '50px', fontFamily: 'serif'}}>Houses of ritornelo</ButtonBase>
                </Tooltip>
            </Grid>
            <Grid style={{paddingLeft: '75px', paddingTop: '10px'}}>
                <Tooltip title={Bardouble}>
                    <ButtonBase style={{backgroundColor: 'dodgerblue', color: 'gold', width: '150px', height: '50px', fontFamily: 'serif'}}>Double Bar</ButtonBase>
                </Tooltip>
            </Grid>
            <Grid style={{paddingLeft: '310px', paddingTop: '10px'}} container spacing={7.5}>
                <Tooltip title={barRit}>
                    <ButtonBase style={{backgroundColor: 'dodgerblue', color: 'gold', width: '150px', height: '50px', fontFamily: 'serif'}}>Bar of Ritornelo in 3</ButtonBase>
                </Tooltip>
            </Grid>
            <fieldset style={{borderRadius: '30px', borderColor: 'dodgerblue'}}>
                <QuizzNono/>
            </fieldset>
        </div>
    )
}