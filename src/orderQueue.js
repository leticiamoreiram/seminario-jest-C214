// orderQueue.js
class OrderQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(order) {
    this.queue.push(order);
  }

  dequeue() {
    return this.queue.shift();
  }

  isEmpty() {
    return this.queue.length === 0;
  }
}

module.exports = OrderQueue;
