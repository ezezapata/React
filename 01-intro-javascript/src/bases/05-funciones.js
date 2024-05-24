function saludar(nombre) {
    return `Hola ${nombre}!`;
}

console.log(saludar('Goku'));

// Es mejor crear funciones de la siguiente manera
// para evitar problemas a futuro, como querer asignar otro valor a saludar
const saludar2 =  function(nombre) {
    return `Hola desde saludar2(): ${nombre}.`;
}

// funciones de flecha
const saludar3 = nombre => `Hola desde saludar3(): ${nombre}`;

console.log(saludar2('Ezequiel'));
console.log(saludar3('Pepito'));

// envolver el objeto en parentesis si es lo único que retorna la función
const getUser = () => ({
    uuid: '123412341234',
    name: 'Ezequiel',
});

console.log(getUser());


const getUsuarioActivo = (nombre) => ({
    uid: 'abc123',
    username: nombre,
});

console.log(getUsuarioActivo('Ezequiel|'));