/*CODIGO DE PRUEBA PARA CORRER SERVIDOR EN NODE.JS*/
// const express = require('express');
// const app = express();
// const PORT = 3000;

// // Ruta principal
// app.get('/', (req, res) => {
//     res.send('¡Hola, Express!');
// });

// // Iniciar el servidor
// app.listen(PORT, () => {
//     console.log(`Servidor corriendo en http://localhost:${PORT}`);
// });

// import express from 'express';
// import { 
//     obtenerSuperheroePorIdController, 
//     buscarSuperheroesPorAtributoController, 
//     obtenerSuperheroesMayoresDe30Controller 
// } from './controllers/superheroesController.mjs';

// const app = express();
// const PORT = 3005;

// // Rutas
// app.get('/superheroes/id/:id', obtenerSuperheroePorIdController);
// app.get('/superheroes/atributo/:atributo/:valor', buscarSuperheroesPorAtributoController);
// app.get('/superheroes/edad/mayorA30', obtenerSuperheroesMayoresDe30Controller);

// // Levantar el servidor en el puerto 3005
// app.listen(PORT, () => {
//     console.log(`Servidor corriendo en el puerto ${PORT}`);
// });