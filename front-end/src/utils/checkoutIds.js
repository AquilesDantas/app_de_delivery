const BASE_ID = 'customer_checkout__';

const checkoutIds = {
  itemNumberId: (id) => `${BASE_ID}element-order-table-item-number-${id}`,
  itemNameId: (id) => `${BASE_ID}element-order-table-name-${id}`,
  itemQuantityId: (id) => `${BASE_ID}element-order-table-quantity-${id}`,
  itemPriceId: (id) => `${BASE_ID}element-order-table-unit-price-${id}`,
  itemSubTotalId: (id) => `${BASE_ID}element-order-table-sub-total-${id}`,
  itemRemovalId: (id) => `${BASE_ID}element-order-table-remove-${id}`,
  totalPriceID: () => `${BASE_ID}element-order-total-price`,
  selectSellerId: () => `${BASE_ID}select-seller`,
  inputAddressId: () => `${BASE_ID}input-address`,
  inputNumberId: () => `${BASE_ID}input-addressNumber`,
  submitOrderId: () => `${BASE_ID}button-submit-order`,
};

export default checkoutIds;
