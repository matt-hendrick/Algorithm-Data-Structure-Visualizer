const LinkedList = require('./LinkedList');

// tag::constructor[]
/**
 * Data structure where we add and remove elements in a first-in, first-out (FIFO) fashion
 */
class Queue {
  constructor(iterable = []) {
    this.items = new LinkedList(iterable);
  }
  // end::constructor[]

  // tag::enqueue[]
  /**
   * Add element to the back of the queue.
   * Runtime: O(1)
   * @param {any} item
   * @returns {queue} instance to allow chaining.
   */
  enqueue(item) {
    this.items.addLast(item);
    return this;
  }
  // end::enqueue[]

  // tag::dequeue[]
  /**
   * Remove element from the front of the queue.
   * Runtime: O(1)
   * @returns {any} removed value.
   */
  dequeue() {
    return this.items.removeFirst();
  }

  // end::dequeue[]
  /**
   * Size of the queue
   */
  get size() {
    return this.items.size;
  }

  /**
   * Return true if is empty false otherwise true
   */
  isEmpty() {
    return !this.items.size;
  }

  /**
   * Return the most recent value or null if empty.
   */
  back() {
    if (this.isEmpty()) return null;
    return this.items.last.value;
  }

  /**
   * Return oldest value from the queue or null if empty.
   * (Peek at the next value to be dequeue)
   */
  front() {
    if (this.isEmpty()) return null;
    return this.items.first.value;
  }
}

module.exports = Queue;

// const queue = new Queue();
// queue.enqueue('a');
// queue.enqueue('b');
// console.log(queue);
// queue.dequeue(); //↪️ a
// queue.enqueue('c');
// console.log(queue);
// queue.dequeue(); //↪️ b
// queue.dequeue(); //↪️ c
