import { useState } from 'react';
import PropTypes from 'prop-types';

export const CounterApp3 = ({number}) => {
    // Por ahora, cuando cambia el estado, el componente se vuelve a ejecutar. Hay formas de evitar esto, lo voy a ver a futuro
    // console.log('render');

    const [counter, setCounter] = useState(number);

    const handleSubstract = () => {
        setCounter(counter - 1);
    }

    const handleAdd = () => {
        setCounter(counter + 1);
    }

    const handleReset = () => {
        setCounter(number);
    }

    return(
        <>
            <h1>CounterApp 3</h1>
            <p> {counter} </p>
            <button onClick={handleAdd}>+1</button>
            <button onClick={handleSubstract}>-1</button>
            <button aria-label='btn-reset' onClick={handleReset}>Reset</button>
        </>
    )
}

CounterApp3.propTypes = {
    number: PropTypes.number.isRequired,
}