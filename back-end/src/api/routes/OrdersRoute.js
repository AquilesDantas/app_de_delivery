const { Router } = require('express');
const { OrdersController } = require('../controller/ordersController');
const AuthMiddleware = require('../middleware/authMiddleware');

const router = Router();

router.get(
  '/customer/orders',
  AuthMiddleware.authenticate,
  OrdersController.findOrdersByUserId,
);
router.get(
  '/orders/:id',
  AuthMiddleware.authenticate,
  OrdersController.findOneBySaleId,
);
router.get(
  '/seller/orders',
  AuthMiddleware.authenticate,
  OrdersController.findOrdersBySellerId,
);

router.patch(
  '/orders/:id/update',
  AuthMiddleware.authenticate,
  OrdersController.updateSaleStatus,
);

module.exports = router;
