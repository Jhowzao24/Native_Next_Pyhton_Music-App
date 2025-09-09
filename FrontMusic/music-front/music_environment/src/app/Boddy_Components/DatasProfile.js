import { Button } from '@mui/material';
import React, {useEffect, useState} from 'react';
import Popup from 'reactjs-popup';


export default function ProfileDatas(){
    const [Dreg, setDreg] = useState([]);
    useEffect(() => {
        fetch('http://127.0.0.1:8000/Urls/ViewsStudy/', {
            'method':'GET',
            headers:{
                'Content-Type': 'application/json',
            }
        })
        .then(resp => resp.json())
        .then(resp => setDreg(resp))
        .catch(error => console.log(error))
    }, [])
    return(
        <div>
            {Dreg.map(told => {
                return(
                    <div>
                        <Popup trigger={<Button style={{backgroundColor: 'ButtonHighlight'}}>Datas Profile</Button>}>
                            <div key={told.id}>
                                <h3><i>Name:{told.FullName}</i></h3>
                                <h3><i>Age: {told.Age}</i></h3>
                                <h3><i>Phone: {told.ResidencePhone}</i></h3>
                                <h3><i>CellPhone: {told.WhatsApp}</i></h3>
                                <h3><i>Adress: {told.Adress}</i></h3>
                                <h3><i>Description: {told.SelfDescription}</i></h3>
                                <h3><i>Instrument: {told.InstrumentChoice}</i></h3>
                                <h3><i>Timer: {told.DateCreation}</i></h3>
                            </div>
                        </Popup>
                    </div>
                ) 
            })}
        </div>
    )
}