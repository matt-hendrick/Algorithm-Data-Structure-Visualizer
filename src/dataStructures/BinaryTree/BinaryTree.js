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

  // recursive level order func
  // may use to assign level to every node
  toLevelOrderArray() {
    if (!this.root) return [];

    let arr = [];

    const traverse = (node, level = 0) => {
      if (!node) {
        if (arr[level]) arr[level].push(['null']);
        return null;
      }
      // for each level, creates a new blank subarray
      if (!arr[level]) arr[level] = [];
      //for each node in level, push to that level's subarray
      arr[level].push(node.val);
      // increment level
      level++;
      traverse(node.left, level);
      traverse(node.right, level);
    };

    traverse(this.root);

    return arr;
  }

  // toLevelOrderArray() {
  //   let arr = [];
  //   let queue = [];
  //   if (this.root) {
  //     queue.push(this.root);
  //     while (queue.length > 0) {
  //       let tempNode = queue.shift();
  //       arr.push(tempNode.val);
  //       if (tempNode.left) queue.push(tempNode.left);
  //       if (tempNode.right) queue.push(tempNode.right);
  //     }
  //     return arr;
  //   } else return null;
  // }
}
