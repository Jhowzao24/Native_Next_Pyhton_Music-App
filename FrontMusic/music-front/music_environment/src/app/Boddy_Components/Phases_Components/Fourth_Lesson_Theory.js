import { ButtonBase, Card, Fab, Paper, CardActionArea, Grid, Button } from '@mui/material';
import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import QuizzQuarta from '../Avaliation_Files/Theory_Quizz/Quizz_Phase_Four';


export default function Phase4(){
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
    return(
      <div>
        <Button onClick={openModal}>Abrir Janela</Button>

        {isOpen && (
            <div style={styles.overlay}>
                <div style={styles.content}>
                    <Fab style={{width: '30px', height: '30px', backgroundColor: 'red', color: 'white', fontFamily: 'fantasy', fontSize: '25px'}} onClick={closeModal}>x</Fab>
                    <QuartaFase/>
                </div>
            </div>
        )}
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



function QuartaFase(){
    /*Manipulated datas from the Ligatures 4.1*/
    const Title_1 = `LIGATURE`
    const Ul_1 = `Ligature is a curve line that  is puted over or below two or more notes,
    and indicate that the sound must be extended of a note to other one, without interruption`
    const Title_Li = `There are three ligatures types`
    const SubTi = `Value Ligature`
    const Ul_i = `It is the ligature that make the connection between two note the same height`
    const Li_3 = `Carrier Ligature`
    const Ul_I = `This ligature connecttwo differente notes of different heights`
    const LigPhra = `Phrasing Ligation`
    const ContentLig = `This ligature connect three and more notes different or equal heights, at the same time
    , connecting extensive musical phrases with just a curve line under the notes`
    const SoundEx = `Examples on some musics!`
    const BachCar = `Bach / Carrier Ligature`
    const VivaldiCar = `Vivaldi / Carrier Ligature`
    const MozartCar = `Mozart / Value Ligature`
    const IdentLig = `Identify on where is the Carrier Ligature`
    const LigatureInfo = `Carrier Ligature`
    const LigaInfo1 = `Value Ligature`
    const IdentValuLi = `Identify on where is the Value Ligature`
    const IdentPhraseLig = `Identify on where is the Phrasing Ligation`

    /*Manipulated datas from the Increase point 4.2*/
    const IncreH3 = `Is a point that, puted at the right side of the musical figure head,
    increase half of its duration!
    It can be used in both musical notes or pauses!!`
    const IncreaseTypes = `There are three types of Increase Point!!<br/><br/>
    And i go to show you this three types now`
    const SimplePoint = `Simple Increase Point`
    const Consist = `It Consist on`
    const BasedIncrease = `The Increase Point is based on Increase half value of the note`
    const DoubleIncrease = `Double Increase Point`
    const ConsistDouble = `It Consist on`
    const BasedIncreDouble = `This Increase Point is based on Increasing half of the note, and more half
    of the before point`
    const TriplePoint = `Triple Increase Point`
    const TriplePointDeclar = `This point is so interesting, because it take three phases to increase more
    time to one note!`
    const ExplainingTriplePoint = `                                    Explaning it better!
    The first point increase half of the before note<br/>
    keeping go...
    The next point will increase half of the before point<br/>
    Crasy no?!...
    And to end this explanation, the last point will increase half 
    of the before point that already had increased half of the other before point`
    const BeLike = `This will be like that:`

    /*Intervals Variables 4.3*/
    const IntVal = `Intervals`
    const IntervalExplaining = `About the intervals we could say that formula of make any
    note to jump an interval of other notes to a distinct note under or over!<br/>
    This is called the distance between two sounds`
    const TypInterv = `So... We have two types of Intervals, that it is:`
    const MelInterv = `Melodic Interval`
    const HarmoInterv = `Harmonic Interval`
    const MelConsist = `Melodic Interval Consist on:`
    const RespofConsist = `when the notes sounds on suscession("One after the other one")`
    const HarmoIntervConsis = `Harmonic Interval Consist on:`
    const RespHarmoInterv = `When the notessounds simultaniously`
    const AllIntervClass = `But we have the calssifications of the all intervals`
    const ExplainAll = `The all itervals will be classificated as the total number of
    notes is in it;<br/> so.. notes contained inclusive between the firts sound
    to the second sound;<br/>
    being classificated as follow:`
    const SimpleNumbInterv = `2º / 3º / 4º / 5º / 6º / 7º / 8º`
    const RespSimInterv = `This all classificated interval is the simple`
    const RespExplainSimp = `Because the number of this interval goes until the 8º level`
    const GivDetailInt8 = `When the level of interval come to the level 8,
    the two sounds, first and the second, will repeat`
    const CompIntervDesc = `8º / 9º / 10º / 11º / 12º / 13º / 14º / Etc..`
    const CompInt = `Compound intervals`
    const AboutComp = `When the level of the interval pass the 8 level to over, this 
    interval is called as "COMPOUND INTERVALS"`
    const Int_2 = `2nd Interval`
    const UnderstandBetSecInt = `Understanding it better
    there is three types of classifications of the Second Interval`
    const Larg_2 = `2nd Largest`
    const ExpLarg2 = `Is based on that the distance between the two aproximatest
    notes is normal distance`
    const Min_2 = `2nd Minor`
    const ExpMin2 = `Is based on that the distance between the two aproximatest
    notes is like a distance of one semitone`
    const Incres_2nd = `2nd Increased`
    const ExpIncres2 = `Is based on that the distance between the two aproximatest
    notes is longest when the two notes suffer auterations of increasing`
    const Interv_3 = `3nd Interval`
    const ExpInt3 = `This interval is based on the distance between three notes`
    const Int_4 = `4nd Interval`
    const ExpInt4 = `This interval is based on the distance between Four notes`
    const Int_5 = `5nd Interval`
    const ExpInt5 = `This interval is based on the distance between five notes`
    const Int_6 = `6nd interval`
    const ExpInt6 = `This interval is based on the distance between six notes`
    const Int_7 = `7nd interval`
    const ExpInt7 = `This interval is based on the distance between Seven notes` 
    return(
        <div>
            <Card style={{width: '1300px', height: '1100px'}}>
                <img alt='music' style={{width:'100px', height: '100px', borderRadius: '30px',
                    paddingRight: '10px', backgroundColor: 'yellow', paddingLeft: '10px'}}
                     src='https://th.bing.com/th/id/OIP.c_yCvxMR4I_4jYtlSwTH1AHaHa?pid=ImgDet&rs=1'/>
                <h1 style={{float: 'right', paddingRight: '50px', color: 'Highlight'}}>Phase 4</h1><br/><br/>
                <Popup trigger={<ButtonBase style={{backgroundColor: 'blue', width: '170px', height: '100px',
            color: 'aqua', fontFamily: 'serif', letterSpacing: '3px', fontSize: '30px',
            borderRadius: '10px', borderColor: 'Highlight', borderStyle: 'inset', borderWidth: '4px'}}>
                <strong>Ligatures 4.1</strong></ButtonBase>}>
                <Card style={{width: '500px', height: '1200px', 
                backgroundColor: 'dodgerblue', color: 'gold'}}>
                <ul>
                    <h2>{Title_1}</h2>
                    <ul></ul>{Ul_1}<br/><br/>
                    <li>
                        {Title_Li}
                        <ul>
                            <li>
                                {SubTi}
                                <ul>
                                    <i>
                                        {Ul_i}
                                    </i>
                                    <i><br/></i>
                                    <Fab style={{width: '70px', height: '70px', backgroundColor: 'Highlight'}}>
                                        <img style={{width: '60px', height: '60px', borderRadius: '50px'}}
                                        src='https://th.bing.com/th/id/OIP.whuaSzP5hxmBSXk0lHAqEAAAAA?pid=ImgDet&rs=1' alt='valueligature'/>
                                    </Fab>
                                </ul>
                            </li>
                            <li>
                                {Li_3}
                                <ul>
                                    <i>
                                        {Ul_I}
                                    </i><br/>
                                    <Fab style={{width: '90px', height: '90px', backgroundColor: 'Highlight'}}>
                                        <img style={{width: '85px', height: '85px', borderRadius: '50px'}}
                                        src='https://th.bing.com/th/id/OIP.KcNCCnBszsUlTdsQob9xGgAAAA?pid=ImgDet&rs=1' alt='carrier'/>
                                    </Fab>
                                </ul>
                            </li>
                            <li>
                                {LigPhra}
                                <ul>
                                    <i>
                                        {ContentLig}
                                    </i><br/>
                                    <Fab style={{width: '100px', height: '100px', backgroundColor: 'Highlight'}}>
                                        <img style={{width: '95px', height: '95px', borderRadius: '80px'}}
                                        src='https://th.bing.com/th/id/OIP.GKI7EjysWMHW_2YEYlSYnAAAAA?pid=ImgDet&rs=1' alt='fraseado'/>
                                    </Fab>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <h4>{SoundEx}</h4>
                    <ul>
                        <strong><i>{BachCar}</i></strong><br/>
                        <li>
                            <i>{IdentLig}</i><br/>
                            <a href='https://s9.imslp.org/files/imglnks/usimg/9/98/IMSLP22074-PMLP50640-Bach,_J.S._-_Adagio_in_G,_BWV_968_(2p).pdf'>
                                <strong>{LigatureInfo}</strong></a>
                        </li>
                        <strong><i>{VivaldiCar}</i></strong><br/>
                        <li>
                            <i>{IdentValuLi}</i><br/>
                            <a href='https://s9.imslp.org/files/imglnks/usimg/8/87/IMSLP36903-PMLP04291-Bach-BWV1007klengel.pdf'>
                                <strong>{LigaInfo1}</strong>
                            </a>
                        </li>
                        <strong><i>{MozartCar}</i></strong><br/>
                        <li>
                            <i>{IdentPhraseLig}</i><br/>
                            <a href='https://s9.imslp.org/files/imglnks/usimg/e/ef/IMSLP01299-BWV1008.pdf'><strong>Phrasing Ligature</strong></a>
                        </li>
                    </ul>
                </ul>
                </Card>
                </Popup><br/><br/><br/><br/>



                <Grid style={{paddingLeft: '400px'}} container spacing={20}>
                <Popup trigger={<ButtonBase style={{backgroundColor: 'blue', color: 'aqua',
            fontSize: '30px', fontFamily: 'serif', letterSpacing: '3px', width: '170px', height: '100px',
            float: 'right',
            borderRadius: '10px', borderStyle: 'inset', borderWidth: '3px', borderColor: 'darkturquoise'}}>Increase Point 4.2</ButtonBase>}>
                    <Card style={{width: '500px', height: '1900px', borderStyle: 'outset', boderWidth: '10px',
                borderColor: 'cornflowerblue', backgroundColor: 'cadetblue', color: 'gold'}}>
                        <h3>{IncreH3}</h3>
                        <br/><br/>
                        <h5>{IncreaseTypes}</h5>
                        <br/>
                        <fieldset style={{borderColor: 'cyan', backgroundColor: 'mediumblue', color: 'cyan'}}>
                            <center><h2>{SimplePoint}</h2></center>
                            <ul>{Consist}</ul>
                            <ul>{BasedIncrease}</ul>
                            <img style={{width: '200px', height: '200px', borderRadius: '10px'}}
                            src='https://3.bp.blogspot.com/-RGzFjuJKIi0/VVduNAPyztI/AAAAAAAAAJI/80sH8ZIIKtU/s1600/pontodeaumento.jpg' alt='onepoint'/>
                        </fieldset><hr style={{borderColor: 'cyan'}}/>
                        <fieldset style={{borderColor: 'cyan', backgroundColor: 'Highlight', color: 'cyan'}}>
                            <center><h2>{DoubleIncrease}</h2></center>
                            <ul>{ConsistDouble}</ul>
                            <ul>{BasedIncreDouble}</ul>
                            <img style={{width: '250px', height: '100px'}}
                            src='https://th.bing.com/th/id/R.0ecbded03a5e95a66c22eb4e04bca13b?rik=vr9DojkVGKFAIg&pid=ImgRaw&r=0' alt='doublepoint'/>
                        </fieldset>
                        <hr style={{borderColor: 'cyan'}}/>
                        <fieldset style={{borderColor: 'cyan', backgroundColor: 'green', color: 'cyan'}}>
                            <center><h2>{TriplePoint}</h2></center>
                            <ul>{TriplePointDeclar}<li>
                                {ExplainingTriplePoint}
                                    <br/>
                                    {BeLike}<br/>
                                    <img style={{borderRadius: '20px'}}
                                    src='https://th.bing.com/th/id/OIP.UE8YFlt-yAZwZP1PHDnRkgAAAA?pid=ImgDet&rs=1' alt='triplepoint'/>
                                </li>
                            </ul>
                        </fieldset>
                    </Card>
                </Popup>
                </Grid><br/><br/><br/><br/>


                <Popup trigger={<ButtonBase style={{backgroundColor: 'blue', borderWidth: '3px', 
                borderColor: 'aqua', borderStyle: 'outset', borderRadius: '10px',
            color: 'darkturquoise', fontSize: '30px', fontFamily: 'serif',
            letterSpacing: '5px', width: '180px', height: '100px' }}>Interval 4.3</ButtonBase>}>
                    <Paper style={{width: '800px', height: '3600px'}}>
                        <center>
                            <Card>
                                <h1>{IntVal}</h1>
                            </Card>
                            <CardActionArea>
                                <p>{IntervalExplaining}</p>
                                <br/>
                                <h4>{TypInterv}
                                    <br/>
                                    <center style={{float: 'left', paddingLeft: '300px'}}><ul>
                                        <li>{MelInterv}</li>
                                        <li>{HarmoInterv}</li><br/><br/><hr/><br/><br/>
                                        <li>
                                            {MelConsist}
                                            <ul>
                                                {RespofConsist}
                                            </ul>
                                        </li><br/>
                                        <li>
                                            {HarmoIntervConsis}
                                            <ul>
                                                {RespHarmoInterv}
                                            </ul>
                                        </li>
                                    </ul>
                                    </center>
                                </h4>
                            </CardActionArea>
                            <Card>
                                <h5>{AllIntervClass}</h5>
                                <h5>Taking notice on it; See it:
                                    <p>
                                        {ExplainAll} 
                                        <h5><strong style={{color: 'blue'}}>{SimpleNumbInterv}</strong></h5>
                                        <p>{RespSimInterv}</p>
                                        <i >{RespExplainSimp}<br/>
                                            <li style={{paddingLeft: '50px'}}>
                                                <ul>{GivDetailInt8}</ul>
                                            </li><br/><br/><hr/><br/>
                                            <h5><strong style={{color: 'blue'}}>{CompIntervDesc}</strong></h5>
                                            <i>This all numbers is the {CompInt}
                                                <l>
                                                    <ul>{AboutComp}</ul>
                                                </l>
                                            </i>
                                        </i>
                                    </p>
                                    <body>If you don't understand yet, lets check it out the examples:
                                        <p>
                                            <i>This is called: {Int_2}</i>
                                            <img src='https://th.bing.com/th/id/R.9b1a9f7a78509ad0673f91438c61fbb4?rik=OCsrYwM4VG7hhg&riu=http%3a%2f%2fmusicaeadoracao.com.br%2frecursos%2fimagens%2ftecnicos%2fteoria%2fteoria_online%2fintervalos_05g.gif&ehk=P%2ft7vtm%2fuHpwsVCj%2fLSCUrTf25tyVtooA2j%2bj79hNoA%3d&risl=&pid=ImgRaw&r=0' alt='2interval'/>
                                            <br/><br/>
                                            <i>{UnderstandBetSecInt}</i>
                                            <i>
                                            </i>
                                        </p>

                                    </body>
                                </h5>
                            </Card>
                        </center>
                        <Grid container spacing={-80}>
                            <Paper style={{width: '200px', height: '160px', backgroundColor: 'darkturquoise'}}>
                                <h2>{Larg_2}</h2>
                                <ul>
                                    <li style={{fontSize: '13px', color: 'darkblue'}}>{ExpLarg2}</li>
                                </ul>
                            </Paper>
                        </Grid>
                        <Grid style={{float: 'right', paddingLeft: '400px'}} container spacing={20}>
                            <Paper style={{width: '200px', height: '160px', backgroundColor: 'darkturquoise'}}>
                                <h2>{Min_2}</h2>
                                <ul>
                                    <li style={{fontSize: '13px', color: 'darkblue'}}>{ExpMin2}</li>
                                </ul>
                            </Paper>
                        </Grid>
                        <Grid style={{float: 'right', paddingLeft: '700px'}} container spacing={20}>
                            <Paper style={{width: '200px', height: '170px', backgroundColor: 'darkturquoise'}}>
                                <h2>{Incres_2nd}</h2>
                                <ul>
                                    <li style={{fontSize: '13px', color: 'darkblue'}}>{ExpIncres2}</li>
                                </ul>
                            </Paper>
                        </Grid>
                        <a style={{fontFamily: 'monospace'}}
                        href='https://vocepergunta.com/library/artigo/read/633506-como-saber-se-um-intervalo-e-maior-ou-menor#:~:text=Um%20intervalo%20menor%2C%20quando%20decrescido%20de%20um%20semitom%2C,um%20intervalo%20mais%20que%20diminuto%2C%20ou%20super%20diminuto.'>Read more about the 2nd intervals clicking here</a>
                        <h4>There is also the 3nd interval</h4>
                        <p>Lets go to the example</p>
                        <ul>
                            <img src='https://www.encorda.com.br/wp-content/uploads/2021/04/Melodico.png' alt='3inter'/>
                        </ul>
                        <Grid container spacing={-20}>
                            <Paper style={{width: '400px', height: '180px', backgroundColor: 'darkviolet'}}>
                                <h2>{Interv_3}</h2>
                                <ul>
                                    <li style={{fontSize: '13px', color: 'cyan'}}>
                                        {ExpInt3}, But
                                        like the last one we saw, this will count only the first and the
                                        third note, the note thatis in the middle, is nulled!!
                                        This tips of interval will be important at the instrument play!
                                        By youwill jump notes at your instrument, and you'll be clear on what are you playing on it
                                    </li>
                                </ul>
                            </Paper>
                        </Grid>
                        <h4>There is also the 4nd interval</h4>
                        <p>Lets go to the example</p>
                        <ul>
                            <img src='https://musicaeadoracao.com.br/recursos/imagens/tecnicos/teoria/teoria_online/intervalos_07e.gif' alt='3inter'/>
                        </ul>
                        <Grid container spacing={-20}>
                            <Paper style={{width: '400px', height: '180px', backgroundColor: 'darkviolet'}}>
                                <h2>{Int_4}</h2>
                                <ul>
                                    <li style={{fontSize: '13px', color: 'cyan'}}>
                                        {ExpInt4}, But
                                        like the last one we saw, this will count only the first and the
                                        fourth note, the two notes that is in the middle, is nulled!!
                                        This tips of interval will be important at the instrument play!
                                        SO, you will jump notes at your instrument, and you'll get clear on what are you playing on it
                                    </li>
                                </ul>
                            </Paper>
                        </Grid>
                        <Grid style={{float: 'right', paddingLeft: '700px'}} container spacing={25}>
                            <Paper style={{width: '400px', height: '230px', backgroundColor: 'limegreen',
                        color: 'gold'}}>
                                <h4>From now on, you must to close atention here, because,
                                    this explanation will show you the best form to got the idea about
                                    on the future to solfege this interval on your instrument, but we know, 
                                    you will start this lesson of intervals at the solfege, and it already
                                    hard, for everyone that begin to learn solfege on this moduleof
                                    theory
                                </h4>
                            </Paper>
                        </Grid>
                        <h4>There is also the {Int_5}</h4>
                        <p>Lets go to the example</p>
                        <ul>
                            <img src='https://th.bing.com/th/id/R.65ad657e470565763bf33d48a5d2b0fe?rik=ZopYq9NBRJkb9g&pid=ImgRaw&r=0' alt='3inter'/>
                        </ul>
                        <Grid container spacing={-20}>
                            <Paper style={{width: '400px', height: '180px', backgroundColor: 'darkviolet'}}>
                                <h2>{Int_5}</h2>
                                <ul>
                                    <li style={{fontSize: '13px', color: 'cyan'}}>
                                        {ExpInt5}, But
                                        like the last one we saw, this will count also the first and the
                                        fifith note, the three notes that is in the middle, they will be nulled!!
                                        This tips of interval will be important at the instrument play!
                                        By youwill jump notes at your instrument, and you'll be clear on what are you playing on it
                                    </li>
                                </ul>
                            </Paper>
                        </Grid>
                        <h4>There is also the {Int_6}</h4>
                        <p>Lets go to the example</p>
                        <ul>
                            <img src='https://th.bing.com/th/id/R.bb63b14263cb025e61093cfaefd3c59b?rik=ckNbdGj6gPqFGQ&riu=http%3a%2f%2f3.bp.blogspot.com%2f-hE0VVQH_HHo%2fTcwWItEHdgI%2fAAAAAAAAADE%2fpFn33rFnS7U%2fw1200-h630-p-k-no-nu%2fINTERVALOS.png&ehk=%2ftCg%2b0XDCWqpETkBdXlXxMF%2b7btPhIi9Tna3hjIyKZ8%3d&risl=&pid=ImgRaw&r=0' alt='3inter'/>
                        </ul>
                        <Grid container spacing={-20}>
                            <Paper style={{width: '400px', height: '180px', backgroundColor: 'darkviolet'}}>
                                <h2>{Int_6}</h2>
                                <ul>
                                    <li style={{fontSize: '13px', color: 'cyan'}}>
                                        {ExpInt6}, But
                                        like the last one we saw, this will count only the first and the
                                        sixth note, the four notes that is in the middle, it will be nulled!!
                                        This tips of interval will be important at the instrument play!
                                        By youwill jump notes at your instrument, and you'll be clear on what are you playing on it
                                    </li>
                                </ul>
                            </Paper>
                        </Grid>
                        <h4>There is also the {Int_7}</h4>
                        <p>Lets go to the example</p>
                        <ul>
                            <img src='https://th.bing.com/th/id/OIP.ZWBrGf_5iP5b7CJkqsDgMAHaBu?pid=ImgDet&rs=1' alt='3inter'/>
                        </ul>
                        <Grid container spacing={-20}>
                            <Paper style={{width: '400px', height: '180px', backgroundColor: 'darkviolet'}}>
                                <h2>{Int_7}</h2>
                                <ul>
                                    <li style={{fontSize: '13px', color: 'cyan'}}>
                                        {ExpInt7}, But
                                        like the last one we saw, this will count only the first and the
                                        seventh note, the five notes that is in the middle, it will be nulled!!
                                        This tips of interval will be important at the instrument play!
                                        As you will jump notes at your instrument, and you'll be clear on what are you playing on it
                                    </li>
                                </ul>
                            </Paper>
                        </Grid>
                        <center>
                            <h5>GO and exercises every day the lessons on your MSA at the pages below:
                                <p>40, 41, 42, 43</p>
                            </h5>
                        </center>
                    </Paper>
                </Popup>
                <QuizzQuarta/>
            </Card><br/><br/>
    </div>
    )
}