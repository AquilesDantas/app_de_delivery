const { Router } = require('express');
const { ProductController } = require('../controller/productsController');
const AuthMiddleware = require('../middleware/authMiddleware');

const router = Router();

router.get(
  '/customer/products',
  AuthMiddleware.auhtenticate, 
  ProductController.findAll,
);

module.exports = router;