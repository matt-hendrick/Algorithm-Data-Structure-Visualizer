import { swap } from '../../utility/utilityFunctions';

export default class Heap {
  constructor(arr = [], compareFunction = (a, b) => a - b) {
    this.arr = arr;
    this.compareFunction = (index1, index2) => {
      return compareFunction(this.arr[index1], this.arr[index2]);
    };
  }

  get size() {
    return this.arr.length;
  }

  insert(val) {
    this.arr.push(val);
    this.bubbleUp();
  }

  remove(index = 0) {
    if (this.size < 1) return;
    swap(this.arr, index, this.size - 1);
    this.arr.pop();
    this.bubbleDown();
  }

  bubbleUp() {
    let index = this.size - 1;
    const getParent = (index) => Math.ceil(index / 2 - 1);
    while (
      getParent(index) >= 0 &&
      this.compareFunction(getParent(index), index) > 0
    ) {
      swap(this.arr, getParent(index), index);
      index = getParent(index);
    }
  }

  bubbleDown(startingIndex = 0) {
    let curr = startingIndex;

    while (
      this.getLeftChild(curr) < this.size &&
      this.compareFunction(curr, this.getHigherChild(curr)) > 0
    ) {
      const next = this.getHigherChild(curr);
      swap(this.arr, curr, next);
      curr = next;
    }
  }

  toLevelOrderArray() {
    if (this.size < 1) return [];

    let levelArr = [];

    const traverse = (node, level = 0) => {
      // for each level, creates a new blank subarray
      if (!levelArr[level]) levelArr[level] = [];

      if (node < 0 || node > this.size - 1) {
        // if arr[level] already exists, adds a null node for each non-existent node found
        if (levelArr[level]) levelArr[level].push(['null']);
        return null;
      }
      //for each node in level, push to that level's subarray
      levelArr[level].push(this.arr[node]);
      // increment level
      level++;
      traverse(this.getLeftChild(node), level);
      traverse(this.getRightChild(node), level);
    };

    traverse(0);

    // checks if all nodes in last level are null
    if (
      levelArr[levelArr.length - 1].some((node) => {
        return node !== null;
      })
    ) {
      // if all elements are null, removes the last level
      levelArr.pop();
    }
    return levelArr;
  }

  getLeftChild = (index) => 2 * index + 1;
  getRightChild = (index) => 2 * index + 2;
  getHigherChild = (index) =>
    this.getRightChild(index) < this.size &&
    this.compareFunction(this.getLeftChild(index), this.getRightChild(index)) >
      0
      ? this.getRightChild(index)
      : this.getLeftChild(index);

  toMinHeap() {
    return;
  }

  toMaxHeap() {
    return;
  }
}
