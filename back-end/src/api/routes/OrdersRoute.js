const { Router } = require('express');
const { OrdersController } = require('../controller/ordersController');
const AuthMiddleware = require('../middleware/authMiddleware');

const router = Router();

router.get(
  '/customer/orders',
  AuthMiddleware.auhtenticate,
  OrdersController.findAll,
);
router.get(
  '/customer/orders/:id',
  AuthMiddleware.auhtenticate,
  OrdersController.findOneBySaleId,
);

module.exports = router;
