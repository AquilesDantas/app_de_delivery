const { Router } = require('express');
const { LoginController } = require('../controller/loginController');

const router = Router();

router.post('/login', LoginController.login);

module.exports = router;