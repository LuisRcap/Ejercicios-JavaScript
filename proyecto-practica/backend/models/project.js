'use strict'

var mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
var Schema = mongoose.Schema;

var ProjectSchema = Schema({
    name: String,
    description: String,
    category: String,
    langs: String,
    year: Number,
    image: String
});

module.exports = mongoose.model('Project', ProjectSchema);
// Con mongoose se genera 'projects' --> guarda los documentos en la colección