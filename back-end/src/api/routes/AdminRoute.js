const { Router } = require('express');
const AdminController = require('../controller/adminController');
const AuthMiddleware = require('../middleware/authMiddleware');

const router = Router();

router.get('/users', AuthMiddleware.authenticate, AdminController.listAllUsers);

module.exports = router;