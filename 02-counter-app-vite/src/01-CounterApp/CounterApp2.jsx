import PropTypes from 'prop-types';
import { useState } from 'react';

export const CounterApp2 = ({value}) => {
    const [counter, setCounter] = useState(value);

    const handleAdd = () => {
        setCounter(counter + 2);
    }
    
    return(<>
        <h1>CounterApp 2</h1>
        <p> {counter} </p>
        <button onClick={handleAdd}>
            +2
        </button>
    </>)
}

CounterApp2.propTypes = {
    value: PropTypes.number.isRequired,
}

CounterApp2.defaultProps = {
    value: 0,
}