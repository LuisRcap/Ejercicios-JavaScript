'use strict'

var express = require('express');

var app = express();

// Cargar archivos de rutas
var project_routes = require('./routes/project');

//Middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// CORS

// Rutas
app.use('/api', project_routes);

// Exportar el módulo
module.exports = app;