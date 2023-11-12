// brownieShop.js
class BrownieShop {
    constructor() {
      this.orderQueue = [];
    }
  
    placeOrder(order) {
      this.orderQueue.push(order);
    }
  
    fulfillOrder() {
      return this.orderQueue.shift();
    }
  }
  
  module.exports = BrownieShop;