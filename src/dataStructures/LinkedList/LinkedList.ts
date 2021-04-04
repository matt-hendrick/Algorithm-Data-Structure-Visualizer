import Node from '../Node/Node';
export default class LinkedList {
  head: Node | null;
  constructor(node: Node | null = null) {
    this.head = node;
  }

  addFirst(val: number | string) {
    const tempNode = new Node(val, this.head);
    this.head = tempNode;
  }

  addLast(val: number | string) {
    const tempNode = new Node(val);
    if (!this.head) this.head = tempNode;
    else {
      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = tempNode;
    }
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
        while (curr?.next?.next) {
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
        curr = curr.next as Node;
      }
      return arr;
    }
    return;
  }

  reverseList() {
    let curr = this.head;
    let prev = null;

    while (curr) {
      [curr.next, curr, prev] = [prev, curr.next, curr];
    }

    this.head = prev;
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
