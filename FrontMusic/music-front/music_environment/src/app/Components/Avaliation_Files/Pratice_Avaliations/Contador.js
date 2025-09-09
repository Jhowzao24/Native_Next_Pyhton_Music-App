import React, {useEffect, useState} from 'react';

export default function Contadores(){
    const [contador, setContador] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
            setContador(contador + 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [contador]);
    return(
        <div style={{width: '300px', height: '350px', backgroundColor: 'blue', color: 'gold', boxShadow: '0 0 20px 10px'}}>
            <h3>An arcade will be given when a number appears</h3>
            <h4>With each change of number, you will have to move the arc in the opposite direction.</h4>
            <h2>{contador}</h2>
        </div>
    )
}