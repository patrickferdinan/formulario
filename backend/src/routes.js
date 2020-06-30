const express = require("express");

const UsuarioController = require('./controllers/UsuarioController');
const EmpresaController = require('./controllers/EmpresaController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
const ChamadosController = require('./controllers/ChamadosController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/usuario', UsuarioController.index);
routes.post('/usuario', UsuarioController.create); 

routes.get('/profile', ProfileController.index);

routes.get('/empresa', EmpresaController.index);
routes.post('/empresa', EmpresaController.create); 
routes.delete('/empresa/:id', EmpresaController.delete);

routes.get('/chamados', ChamadosController.index);
routes.post('/chamados', ChamadosController.create);


module.exports = routes;