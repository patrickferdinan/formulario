const express = require('express');

const FichaController = require('./controllers/FichaController');

const routes = express.Router();

routes.get('/ficha', FichaController.index);
routes.post('/ficha', FichaController.create);
routes.delete('/ficha/:id', FichaController.delete);
module.exports = routes;
 