// Cuando hay una exportación por defecto no es necesario utilizar las llaves {} en el import
import heroes, {owners} from './data/heroes';


const getHeroeById = id => heroes.find(h => h.id === id);
const getHeroeByOwner = owner => heroes.filter(h => h.owner === owner);

console.log(getHeroeById(3));
console.log(getHeroeByOwner('Marvel'));