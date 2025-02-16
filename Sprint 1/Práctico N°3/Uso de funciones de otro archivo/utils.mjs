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


//Nueva funcion para agregar superheroes
//Lee los archivos de superheroes existentes y nuevos, los convierte en instancias de SuperHeroe, combina las dos listas y las guarda en el archivo original
export function agregarSuperHeroes(rutaOriginal, rutaNuevos) {
    //Lee el archivo de superheroes existente
    const datosOriginales = fs.readFileSync(rutaOriginal, 'utf-8');
    //Lee el archivo con los nuevos superheroes
    const datosNuevos = fs.readFileSync(rutaNuevos, 'utf-8');

    const superheroesOriginales = JSON.parse(datosOriginales);
    const superheroesNuevos = JSON.parse(datosNuevos);

    //Convertir los nuevos superheroes a instancias de SuperHeroe
    const instanciasNuevos = superheroesNuevos.map(hero => new SuperHeroe(hero.id, hero.nombreSuperheroe, hero.nombreReal, hero.nombreSociedad, hero.edad, hero.planetaOrigen, hero.debilidad, hero.poder, hero.habilidadEspecial, hero.aliado, hero.enemigo)
    );

    //Combinar listas originales y nuevos
    const listaActualizada = [...superheroesOriginales, ...instanciasNuevos];

    //Guardar lista actualizada en archivo original
    fs.writeFileSync(rutaOriginal, JSON.stringify(listaActualizada, null, 2), 'utf-8');
    console.log('Lista de superheroes actualizada con exito');
}