const { Router } = require('express');
const { RegisterController } = require('../controller/registerController');
const { RegisterMiddleware } = require('../middleware/registerMiddleware');

const router = Router();

router.post('/register', RegisterMiddleware.validate, RegisterController.create);

module.exports = router;