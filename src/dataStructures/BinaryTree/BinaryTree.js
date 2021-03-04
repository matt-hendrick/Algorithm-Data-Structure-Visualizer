import BinaryTreeNode from '../BinaryTreeNode/BinaryTreeNode';

export default class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  insert(val) {
    if (Number.isInteger(val)) {
      const newNode = new BinaryTreeNode(val);
      if (!this.root) {
        this.root = newNode;
      } else {
        this.insertNode(this.root, newNode);
      }
    }
  }

  insertNode(node, newNode) {
    if (node.val > newNode.val) {
      if (!node.left) node.left = newNode;
      else this.insertNode(node.left, newNode);
    } else if (node.val < newNode.val) {
      if (!node.right) node.right = newNode;
      else this.insertNode(node.right, newNode);
    }
  }

  toLevelOrderArray() {
    let arr = [];
    let queue = [];
    if (this.root) {
      queue.push(this.root);
      while (queue.length > 0) {
        let tempNode = queue.shift();
        arr.push(tempNode.val);
        if (tempNode.left) queue.push(tempNode.left);
        if (tempNode.right) queue.push(tempNode.right);
      }
      return arr;
    } else return null;
  }
}
