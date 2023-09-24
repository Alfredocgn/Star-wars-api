const {Router} = require('express');
const {validateModel} = require('../middlewares')
const controllers = require('../controllers')

const router = Router();

router.get("/:model",validateModel,controllers.getDataList)

router.get('/:model/:id',validateModel,controllers.getDataById)


module.exports = router;