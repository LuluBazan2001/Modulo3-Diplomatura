import fs from 'fs';

//Clase para representar un Superhéroe
//Definimos un modelo para los superheroes con todas las propiedades necesarias
class SuperHeroe {
    constructor(id, nombreSuperheroe, nombreReal, nombreSociedad, edad, planetaOrigen, debilidad, poder, habilidadEspecial, aliado, enemigo){
        this.id = id;
        this.nombreSuperheroe = nombreSuperheroe;
        this.nombreReal = nombreReal;
        this.nombreSociedad = nombreSociedad;
        this.edad = edad;
        this.planetaOrigen = planetaOrigen;
        this.debilidad = debilidad;
        this.poder = poder;
        this.habilidadEspecial = habilidadEspecial;
        this.aliado = aliado;
        this.enemigo = enemigo;
    }
}

//Funcion para leer y ordenar los superheroes
//Lee el archivo JSON, lo convierte en objetos Superheroe, los ordena por el nombre del superheroe y devuelve la lista ordenada
export function leerSuperHeroes(ruta) {
    const datos = fs.readFileSync(ruta, 'utf-8');
    const superheroesArray = JSON.parse(datos);

    //Convertir a instancias de SuperHeroe
    const superheroes = superheroesArray.map(hero => new SuperHeroe(hero.id, hero.nombreSuperheroe, hero.nombreReal, hero.nombreSociedad, hero.edad, hero.planetaOrigen, hero.debilidad, hero.poder, hero.habilidadEspecial, hero.aliado, hero.enemigo)
    );

    //Ordenar por nombre de superheroe
    superheroes.sort((a, b) => a.nombreSuperheroe.localeCompare(b.nombreSuperheroe));
    return superheroes;
}
