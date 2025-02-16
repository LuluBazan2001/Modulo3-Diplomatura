//Importamos la funcion leerSuperHeroes y agregarSuperheroes desde utils.mjs
import { leerSuperHeroes, agregarSuperHeroes } from './utils.mjs';

const archivoOriginal = './superheroes.txt';
const archivoNuevos = './agregarSuperheroes.txt';

//Agregar superheroes nuevos
//Llamamos a agregarSuperHeroes con los archivos de superheroes originales y nuevos, y los combinamos
agregarSuperHeroes(archivoOriginal, archivoNuevos);



//Leer y mostrar la lista de superheroes ordenada
const superheroes = leerSuperHeroes(archivoOriginal);
console.log('Superheroes ordenados: ');
console.log(superheroes);