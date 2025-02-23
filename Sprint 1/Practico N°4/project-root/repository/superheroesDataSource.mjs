//superheroesDataSource.mjs nos sirve para obtener todos los superheroes de la base de datos

//Clase abstracta para obtener todos los superheroes
export default class SuperheroesDataSource {
    // Metodo abstracto para obtener todos los superheroes
    obtenerTodos() {
        //Si no se implemento en la subclase, lanzamos una error
        throw new Error('Este metodo debe estar implementado por la subclase');
    }
}
