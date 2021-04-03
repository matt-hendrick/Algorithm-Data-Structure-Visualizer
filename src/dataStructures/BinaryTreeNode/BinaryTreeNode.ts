export default class BinaryTreeNode {
  val: number | null;
  right: BinaryTreeNode | null;
  left: BinaryTreeNode | null;

  constructor(
    val: number | null = null,
    right: BinaryTreeNode | null = null,
    left: BinaryTreeNode | null = null
  ) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
