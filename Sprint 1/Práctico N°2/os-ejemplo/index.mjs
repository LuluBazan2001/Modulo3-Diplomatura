import os from 'os';

//Obtener la arquitectura del sistema operativo
console.log('Arquitectura del sistema operativo:', os.arch());

//Obtener el tipo de sistema operativo
console.log('Plataforma:', os.platform());

//Obtener la cantidad total de memoria del sistema
console.log('Memoria total:', os.totalmem());

//Obtener la cantidad de memoria libre del sistema
console.log('Memoria libre:', os.freemem());

//Obtener la informacion de la CPU
console.log('Informacion de la CPU:', os.cpus());