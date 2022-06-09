const { Router } = require('express');
const { ProductController } = require('../controller/productsController');
const AuthMiddleware = require('../middleware/authMiddleware');

const router = Router();

router.get(
  '/costumer/products',
  AuthMiddleware.auhtenticate, 
  ProductController.findAll,
);

module.exports = router;