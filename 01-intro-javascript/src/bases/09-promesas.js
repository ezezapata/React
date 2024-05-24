import { getHeroeById } from "./bases/08-imp-export";

// const promesa = new Promise((resolve, reject) => {
//     // resolve callback que se ejectua cuando la promesa se resuelve correctamente
//     // reject lo llamamos cuando hay un error en la promesa
//     setTimeout(() => {
//         const heroe = getHeroeById(45);
//         // resolve(heroe);
//         reject('No se pudo encontrar el heroe');
//     }, 2000);
// });

// promesa.then( (heroe) => {
//     console.log(heroe);
//     console.log('Prueba');
// } )
// .catch(err => console.log( err ));

const getHeroeByIdAsync = id => {
    return new Promise((resolve, reject) => {
        // resolve callback que se ejectua cuando la promesa se resuelve correctamente
        // reject lo llamamos cuando hay un error en la promesa
        setTimeout(() => {
            const heroe = getHeroeById(id);
            if(!heroe) reject('No se pudo encontrar el heroe.');
            resolve(heroe);
        }, 2000);
    });
}

// si solo recibo un elemento, se lo puedo pasar directamente al callback de esta forma:
getHeroeByIdAsync(3)
    .then(console.log)
    .catch(console.log);