import Node from '../Node/Node';

export default class Stack {
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
      let curr: Node | null = this.first;
      let arr = [];
      while (curr) {
        arr.push(curr.val);
        curr = curr.next;
      }
      return arr as string[];
    }
    return;
  }
}
