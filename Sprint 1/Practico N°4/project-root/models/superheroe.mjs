//superheroe.mjs nos sirve para almacenar los datos de los superheroes

import fs from 'fs';

//Clase Superheroe nos sirve para almacenar los datos de los superheroes
class Superheroe {
    constructor(id, nombreSuperheroe, nombreReal, nombreSociedad, edad,
        planetaOrigen, debilidad, poder, habilidadEspecial, aliado,
        enemigo
    ){
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
