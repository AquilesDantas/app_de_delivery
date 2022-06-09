const { Router } = require('express');
const AdminController = require('../controller/adminController');
const AuthMiddleware = require('../middleware/authMiddleware');
const { RegisterMiddleware } = require('../middleware/registerMiddleware');

const router = Router();

router.get('/users', AuthMiddleware.authenticate, AdminController.listAllUsers);
router.post(
  '/users', 
  AuthMiddleware.authenticate, 
  RegisterMiddleware.validate, 
  AdminController.createUser,
);

module.exports = router;