const { Router } = require('express');
const { OrdersController } = require('../controller/ordersController');
const AuthMiddleware = require('../middleware/authMiddleware');

const router = Router();

router.get(
  '/customer/orders',
  AuthMiddleware.auhtenticate,
  OrdersController.findOrdersByUserId,
);
router.get(
  '/customer/orders/:id',
  AuthMiddleware.auhtenticate,
  OrdersController.findOneBySaleId,
);
router.get(
  '/seller/orders',
  AuthMiddleware.auhtenticate,
  OrdersController.findOrdersBySellerId,
);
module.exports = router;
