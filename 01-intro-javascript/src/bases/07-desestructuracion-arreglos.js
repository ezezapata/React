const personajes = ['goku', 'vegeta', 'trunks'];

const [p1, , p3] = personajes;
console.log(p1, p3);

const uState = valor => {
    return [valor, () => {console.log('hola mundo')}];
}

const [valor, sNombre] = uState('Prueba');

console.log(valor);
sNombre();