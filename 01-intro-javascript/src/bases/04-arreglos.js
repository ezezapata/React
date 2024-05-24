// Un arreglo es una colección de información que se encuentra en una misma variable
const arreglo = [];
arreglo.push(1);
console.log(arreglo);

const arreglo2 = [1,2,3,4];
let arreglo3 = [...arreglo2, 5];

console.log(arreglo2);
console.log(arreglo3);

const arreglo4 = arreglo3.map(x => {
    return x*2;
})

console.log(arreglo4);