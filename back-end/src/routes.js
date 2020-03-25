const express = require('express');
const ongController = require('./controllers/ongControllers');
const incidentsController = require('./controllers/incidentsControllers');
const profileController = require('./controllers/profileController');
const sessionController = require('./controllers/sessionController');

const routes = express.Router();

routes.post('/incidents', incidentsController.create)
routes.get('/incidents', incidentsController.list)
routes.delete('/incidents/:id', incidentsController.delete)

routes.get('/list', profileController.index);

routes.post('/session', sessionController.create);

routes.get('/ongs', ongController.list);
routes.post('/ongs', ongController.create);

module.exports = routes