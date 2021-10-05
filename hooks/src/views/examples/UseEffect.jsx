import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle';

const UseEffect = (props) => {
    const [number, setNumber] = useState(1);
    const [fatorial, setFatorial] = useState(1);
    const [status, setStatus] = useState(false);

    const calcFatorial = number => {
        if(number < 0) return -1;
        if(number === 0) return 1;
        if(number === 1) return number;
        return number * calcFatorial(number - 1);
    }

    const isPar = number => {
        if(number % 2 == 0) return true;
        return false;
    }

    useEffect(() => {
        setFatorial(calcFatorial(number));
    }, [number])

    useEffect(() => {
        setStatus(isPar(number));
    }, [number])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

            <SectionTitle title="Exercício #01" />

            <div className="center">
                <span className="text">Fatorial:</span>
                <span className="text red">{ number > 0 && fatorial}</span>
                <input type="number" value={number} 
                    className="input" onChange={e => setNumber(e.target.value)}/>
            </div>

            <SectionTitle title="Exercício #02" />
            <div className="center">
                <div className="text">Status:</div>
                <span className="text red"> { status ? "Par" : "Ímpar" } </span>
            </div>  
        </div>
    )
}

export default UseEffect
