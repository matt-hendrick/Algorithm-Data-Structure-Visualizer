import { Node } from '../Node/Node';

export class Queue {
  constructor(first = null, last = null) {
    this.first = first;
    this.last = last ? last : first;
  }

  add(val) {
    const tempNode = new Node(val);
    if (!this.first) {
      this.first = tempNode;
      this.last = tempNode;
    } else {
      this.last.next = tempNode;
      this.last = tempNode;
    }
  }

  remove() {
    if (this.first) {
      if (this.first === this.last) {
        this.last = null;
        this.first = null;
      } else {
        this.first = this.first.next;
      }
    }
  }

  toArray() {
    if (this.first) {
      let curr = this.first;
      let arr = [];
      while (curr) {
        arr.push(curr.val);
        curr = curr.next;
      }
      return arr;
    }
  }
}
