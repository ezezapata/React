// Asignación Desestructurante
const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
}

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.clave);

const {nombre, edad, clave} = persona;

console.log(nombre);
console.log(edad);
console.log(clave);

const retornaPersona = ({nombre, edad, clave, rango = 'capitan'}) => {
    return {
        nombreClave: clave,
        anios: edad,
    }
}

retornaPersona(persona);

const otraCosa = ({nombre, edad, clave, rango = 'capitan'}) => {
    return {
        nombreClave: clave,
        anios: edad,
        direccion: {
            calle: 'lapacha',
            lat: 1034234,
            lng: 43243,
        }
    }
}


const {nombreClave, anios, direccion: {calle, lat, lng}} = otraCosa(persona);

console.log(nombreClave, anios, calle, lat, lng);