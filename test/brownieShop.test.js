const BrownieShop = require('../src/brownieShop');

test('Place order and fulfill', () => {
  const brownieShop = new BrownieShop();
  brownieShop.placeOrder('Chocolate Brownie');
  brownieShop.placeOrder('Walnut Brownie');
  expect(brownieShop.fulfillOrder()).toBe('Chocolate Brownie');
  expect(brownieShop.fulfillOrder()).toBe('Walnut Brownie');
});

test('Empty order queue', () => {
  const brownieShop = new BrownieShop();
  expect(brownieShop.fulfillOrder()).toBeUndefined();
});

test('Place and fulfill multiple orders', () => {
  const brownieShop = new BrownieShop();
  brownieShop.placeOrder('Chocolate Brownie');
  brownieShop.placeOrder('Walnut Brownie');
  brownieShop.placeOrder('Peanut Butter Brownie');
  expect(brownieShop.fulfillOrder()).toBe('Chocolate Brownie');
  expect(brownieShop.fulfillOrder()).toBe('Walnut Brownie');
  expect(brownieShop.fulfillOrder()).toBe('Peanut Butter Brownie');
});

test('Check if the order queue is empty after fulfilling all orders', () => {
  const brownieShop = new BrownieShop();
  brownieShop.placeOrder('Chocolate Brownie');
  brownieShop.fulfillOrder();
  expect(brownieShop.fulfillOrder()).toBeUndefined();
});

test('Place and fulfill orders with an order queue', () => {
  const brownieShop = new BrownieShop();
  const orderQueue = ['Chocolate Brownie', 'Walnut Brownie', 'Peanut Butter Brownie'];
  orderQueue.forEach((order) => brownieShop.placeOrder(order));
  
  const fulfilledOrders = orderQueue.map((order) => brownieShop.fulfillOrder());
  expect(fulfilledOrders).toEqual(['Chocolate Brownie', 'Walnut Brownie', 'Peanut Butter Brownie']);
});

test('Check if the order queue is empty after fulfilling orders with a queue', () => {
  const brownieShop = new BrownieShop();
  const orderQueue = ['Chocolate Brownie', 'Walnut Brownie', 'Peanut Butter Brownie'];
  orderQueue.forEach((order) => brownieShop.placeOrder(order));
  
  orderQueue.forEach(() => brownieShop.fulfillOrder());
  expect(brownieShop.fulfillOrder()).toBeUndefined();
});
