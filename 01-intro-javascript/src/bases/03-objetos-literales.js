const persona = {
    // Los objetos trabajan con pares de valores
    nombre: 'Tony',
    apellido: 'Stark',
    edad: '45',
}

// es lo mismo que {persona:persona}
console.log({persona});

// el operador = crea una referencia al espacio en memoria de persona
// Si quiero modificar personaRef, en realidad estoy modificando persona
const personaRef = persona

// Para clonar objetos:
const persona2 = {...persona};
persona2.nombre = 'Pedrito';
console.log({persona2});

// Imprimo nuevamente el objeto persona para comprobar que no se modificó
console.log({persona});