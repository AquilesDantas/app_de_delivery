const BASE_ID = 'customer_order_details__';

const orderDetailsIds = {
  orderId: () => `${BASE_ID}element-order-details-label-order-id`,
  sellerName: () => `${BASE_ID}element-order-details-label-seller-name`,
  orderDate: () => `${BASE_ID}element-order-details-label-order-date`,
  deliveryStatus: () => `${BASE_ID}element-order-details-label-delivery-status`,
  itemNumber: (id) => `${BASE_ID}element-order-table-item-number-${id}`,
  name: (id) => `${BASE_ID}element-order-table-name-${id}`,
  quantity: (id) => `${BASE_ID}element-order-table-quantity-${id}`,
  subTotal: (id) => `${BASE_ID}element-order-table-sub-total-${id}`,
  totalPrice: () => `${BASE_ID}element-order-total-price`,
  unitPrice: (id) => `${BASE_ID}element-order-table-unit-price-${id}`,
  deliveryCheck: () => `${BASE_ID}button-delivery-check`,
};

export default orderDetailsIds;
