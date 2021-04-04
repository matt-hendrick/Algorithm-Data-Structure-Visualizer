import Node from '../Node/Node';

export default class Queue {
  first: Node | null;
  last: Node | null;

  constructor(first: Node | null = null, last: Node | null = null) {
    this.first = first;
    this.last = last ? last : first;
  }

  add(val: number | string) {
    const tempNode = new Node(val);
    if (!this.first) {
      this.first = tempNode;
      this.last = tempNode;
    } else if (this.last) {
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
      let curr: Node | null = this.first;
      let arr = [];
      while (curr) {
        arr.push(curr.val);
        curr = curr.next;
      }
      return arr as string[];
    }
  }
}
