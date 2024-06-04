import React, { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

    const [ inputValue, setInputValue ] = useState();
    
    const onInputChange = ( {target: { value }} ) => {
        setInputValue( value );
    }

    const onSubmit = ( e ) => {
        e.preventDefault();

        if( inputValue.trim().length <= 1 ) return;

        // setCategories(categories => [inputValue, ...categories]);
        onNewCategory( inputValue.trim() );
        setInputValue('');
    }


    return(
        <form onSubmit={ onSubmit }>
            <input
                type= "text" 
                placeholder= "Buscar Gifs"
                value= { inputValue }
                // Cada vez que se cambie algo en el input se va a lanzar la función onInputChange que va a recibir el event.target.value
                onChange= { onInputChange }
            />
        </form>
    )
}