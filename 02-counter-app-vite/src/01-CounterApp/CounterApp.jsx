import { useState } from 'react'
import PropTypes from 'prop-types';


export const CounterApp = ({value}) => {
    const [counter, setCounter] = useState( value );
    const handleAdd = () => { 
        setCounter(counter + 1);
    }
     
    return(
        <>
            <h1>CounterApp</h1>
            <p> {counter} </p>

            <button onClick={handleAdd}>
                +1
            </button>
        </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
}

CounterApp.defaultProps = {
    value: 0,
}