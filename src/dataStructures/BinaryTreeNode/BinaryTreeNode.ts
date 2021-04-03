export default class BinaryTreeNode {
  val: number | null;
  right: BinaryTreeNode | null;
  left: BinaryTreeNode | null;

  constructor(val = null, right = null, left = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
