const { Router } = require('express');
const CheckoutController = require('../controller/checkoutController');
const AuthMiddleware = require('../middleware/authMiddleware');

const router = Router();

router.get(
  '/sellers',
  AuthMiddleware.auhtenticate,
  CheckoutController.getSellers,
);
router.post(
  '/customer/checkout',
  AuthMiddleware.auhtenticate,
  CheckoutController.createSale,
);

module.exports = router;
