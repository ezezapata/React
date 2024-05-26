// Si la función es una promesa, React va a devolver un error porque las promesas son objetos
const getObjInfo = ({message, title}) => {
    return [message, title];
}

// Si no estamos cambiando el valor de newMessage y no tiene relación con hooks, etc, entonces no es recomendado colocarlo dentro del functional component

// Tener en cuenta que en las Functional Component no podemos pasarle objetos a los elementos hijos, es decir, dentro de {} pero si podemos pasarle arreglos []
const obj = {
    message: 'Este es el cuerpo del mensaje',
    title: 'Este es el encabezado',
}
export const FirstApp = () => {
    return(// siempre tiene que estar el nodo padre
        <> 
            <h1>{ getObjInfo(obj) }</h1>
            {/* {<code>JSON.stringify( obj )</code>} */}
            <p>Que pasa!</p>
        </>
    )
}