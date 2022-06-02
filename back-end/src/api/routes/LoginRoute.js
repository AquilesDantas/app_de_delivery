const { Router } = require('express');
const { LoginController } = require('../controller/loginController');
const { LoginMiddleware } = require('../middleware/loginMiddleware');

const router = Router();

router.post('/login', LoginMiddleware.validate, LoginController.login);

module.exports = router;