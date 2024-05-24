const nombre = 'Ezequiel';

if(true) {
    // Variable dentro del scope del if
    const nombre = 'Pedro';
    console.log(nombre);
}

console.log(nombre);
