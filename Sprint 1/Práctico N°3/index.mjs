//Importamos la funcion leerSuperHeroes desde utils.mjs
import { leerSuperHeroes } from './utils.mjs';

//Leer y mostrar la lista de superheroes ordenada
const superheroes = leerSuperHeroes('./superheroes.txt');
console.log('Superheroes ordenados: ');
console.log(superheroes);