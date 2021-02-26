export default class Node {
  constructor(val = null, next = null, prev = null) {
    this.val = val;
    this.next = next;
    this.prev = prev;
  }
}
