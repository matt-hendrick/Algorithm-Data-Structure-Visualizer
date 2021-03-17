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

  remove(val) {
    if (!Number.isInteger(val)) return;
    this.root = this.removeNode(this.root, val);
  }

  removeNode(node, val) {
    if (!node) return null;
    else if (val < node.val) {
      node.left = this.removeNode(node.left, val);
      return node;
    } else if (val > node.val) {
      node.right = this.removeNode(node.right, val);
      return node;
    } else {
      if (!node.left && !node.right) {
        node = null;
        return node;
      }

      if (!node.left) {
        node = node.right;
        return node;
      } else if (!node.right) {
        node = node.left;
        return node;
      }

      const aux = this.findMinimumNode(node.right);
      node.val = aux.val;

      node.right = this.removeNode(node.right, aux.key);
      return node;
    }
  }

  findMinimumNode(node) {
    if (node.left === null) return node;
    else return this.findMinimumNode(node.left);
  }

  toLevelOrderArray() {
    if (!this.root) return [];

    let arr = [];

    const traverse = (node, level = 0) => {
      // for each level, creates a new blank subarray
      if (!arr[level]) arr[level] = [];

      if (!node) {
        // if arr[level] already exists, adds a null node for each non-existent node found
        if (arr[level]) arr[level].push(['null']);
        return null;
      }
      //for each node in level, push to that level's subarray
      arr[level].push(node.val);
      // increment level
      level++;
      traverse(node.left, level);
      traverse(node.right, level);
    };

    traverse(this.root);

    // checks if all nodes in last level are null
    if (
      arr[arr.length - 1].some((node) => {
        return node !== null;
      })
    ) {
      // if all elements are null, removes the last level
      arr.pop();
    }
    return arr;
  }

  invertTree() {
    const invert = (root) => {
      if (!root) return root;
      [root.left, root.right] = [invert(root.right), invert(root.left)];
      return root;
    };
    invert(this.root);
  }

  clear() {
    this.root = null;
  }
}
