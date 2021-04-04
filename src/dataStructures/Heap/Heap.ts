import { swap } from '../../utility/utilityFunctions';

export default class Heap {
  arr: number[];
  rawCompareFunction: (a: number, b: number) => number;
  compareFunction: Function;

  constructor(
    arr: number[] = [],
    compareFunction = (a: number, b: number) => a - b
  ) {
    this.arr = arr;
    this.rawCompareFunction = compareFunction;
    this.compareFunction = (index1: number, index2: number) => {
      return compareFunction(this.arr[index1], this.arr[index2]);
    };
  }

  insert(val: number) {
    this.arr.push(val);
    this.bubbleUp();
  }

  remove(index: number = 0) {
    if (this.arr.length < 1) return;
    swap(this.arr, index, this.arr.length - 1);
    this.arr.pop();
    this.bubbleDown();
  }

  bubbleUp() {
    let index = this.arr.length - 1;
    const getParent = (index: number) => Math.ceil(index / 2 - 1);
    while (
      getParent(index) >= 0 &&
      this.compareFunction(getParent(index), index) > 0
    ) {
      swap(this.arr, getParent(index), index);
      index = getParent(index);
    }
  }

  bubbleDown(startingIndex: number = 0) {
    let curr = startingIndex;

    while (
      this.getLeftChild(curr) < this.arr.length &&
      this.compareFunction(curr, this.getHigherChild(curr)) > 0
    ) {
      const next = this.getHigherChild(curr);
      swap(this.arr, curr, next);
      curr = next;
    }
  }

  toLevelOrderArray() {
    if (this.arr.length < 1) return [];

    let levelArr: (number | string)[][] = [] as (number | string)[][];

    const traverse = (node: number, level: number = 0) => {
      // for each level, creates a new blank subarray
      if (!levelArr[level]) levelArr[level] = [];

      if (node < 0 || node > this.arr.length - 1) {
        // if arr[level] already exists, adds a null node for each non-existent node found
        if (levelArr[level]) levelArr[level].push('null');
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

  getLeftChild(index: number) {
    return 2 * index + 1;
  }
  getRightChild(index: number) {
    return 2 * index + 2;
  }
  getHigherChild(index: number) {
    return this.getRightChild(index) < this.arr.length &&
      this.compareFunction(
        this.getLeftChild(index),
        this.getRightChild(index)
      ) > 0
      ? this.getRightChild(index)
      : this.getLeftChild(index);
  }

  reorderHeap() {
    this.arr = this.arr.sort(this.rawCompareFunction);
    this.bubbleDown();
    this.bubbleUp();
  }

  clear() {
    this.arr = [];
  }
}
