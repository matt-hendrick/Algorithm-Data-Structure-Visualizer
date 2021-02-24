export class LinkedListNode {
  constructor(val = null, next = null, prev = null) {
    this.val = val;
    this.next = next;
    this.prev = prev;
  }
}

export class LinkedList {
  constructor(node = null) {
    this.head = node;
  }

  addFirst(val) {
    const tempNode = new LinkedListNode(val, this.head);
    this.head = tempNode;
  }

  addLast(val) {
    let curr = this.head;
    const tempNode = new LinkedListNode(val);
    while (curr.next) {
      curr = curr.next;
    }
    curr.next = tempNode;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let curr = this.head;
    if (curr) {
      while (curr.next) {
        curr = curr.next;
      }
    }
    return curr;
  }

  removeFirst() {
    if (this.head) {
      this.head = this.head.next;
    }
  }

  removeLast() {
    if (this.head) {
      if (!this.head.next) this.head = null;
      let curr = this.head;
      if (curr?.next) {
        while (curr.next.next) {
          curr = curr.next;
        }
        curr.next = null;
      }
    }
  }

  toArray() {
    if (this.head) {
      let curr = this.head;
      let arr = [];
      while (curr) {
        arr.push(curr.val);
        curr = curr.next;
      }
      return arr;
    }
  }

  size() {
    let count = 0;
    let curr = this.head;
    while (curr) {
      count++;
      curr = curr.next;
    }
    return count;
  }

  clear() {
    this.head = null;
  }
}
