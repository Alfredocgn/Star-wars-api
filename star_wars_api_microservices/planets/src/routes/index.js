const {Router} = require('express');
const controllers = require('../controllers');
const middlewares = require('../middlewares')

const router = Router();

router.get('/planets',controllers.getPlanets);

router.post('/planets',middlewares.characterValidation,controllers.createPlanet);

module.exports = router;