'use strict'

var express = require('express');

var app = express();

// Cargar archivos de rutas

//Middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// CORS

// Rutas
app.get('/', (req, res) =>
{
    res.status(200).send(
        "<h1>Página de inicio</h1>"
    );
});

app.get('/test', (req, res) =>
{
    res.status(200).send({
        message: "Hola mundo desde mi API de NodeJS"
    });
});

// Exportar el módulo
module.exports = app;