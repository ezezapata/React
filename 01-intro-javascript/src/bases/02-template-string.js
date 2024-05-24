const nombre = 'Ezequiel';
const apellido = 'Zapata';

console.log(`Este es el template string de ${nombre} ${apellido}`);

function getSaludo(nombre) {
    return `Hola ${nombre}!`;
}

console.log(`Este es un texto: ${getSaludo(nombre)}`);