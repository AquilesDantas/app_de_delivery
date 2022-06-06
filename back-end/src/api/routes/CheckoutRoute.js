const { Router } = require('express');
const CheckoutController = require('../controller/checkoutController');
// const { ProductMiddleware } = require('../middleware/productMiddleware');

const router = Router();

router.get('/sellers', CheckoutController.getSellers);

module.exports = router;