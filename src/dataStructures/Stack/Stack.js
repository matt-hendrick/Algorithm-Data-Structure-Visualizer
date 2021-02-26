import Node from '../Node/Node';

export default class Stack {
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
      const tempFirst = this.first;
      this.first = tempNode;
      this.first.next = tempFirst;
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
