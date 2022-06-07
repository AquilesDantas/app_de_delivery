const { Router } = require('express');
const { ProductController } = require('../controller/productsController');
// const { ProductMiddleware } = require('../middleware/productMiddleware');

const router = Router();

router.get('/customer/products', ProductController.findAll);

module.exports = router;