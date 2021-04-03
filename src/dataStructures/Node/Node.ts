export default class Node {
  val: number | string | null;
  next: Node | null;

  constructor(val: string | number | null = null, next: Node | null = null) {
    this.val = val;
    this.next = next;
  }
}
