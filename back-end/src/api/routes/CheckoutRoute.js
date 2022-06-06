const { Router } = require('express');
const CheckoutController = require('../controller/checkoutController');
// const { ProductMiddleware } = require('../middleware/productMiddleware');

const router = Router();

router.get('/sellers', CheckoutController.getSellers);
router.post('/checkout', CheckoutController.createSale);

module.exports = router;