import { swap } from '../../utility/utilityFunctions';

export default class Heap {
  constructor(arr = [], compareFunction = (a, b) => a - b) {
    this.arr = arr;
    this.compareFunction = (item1, item2) => {
      const value = compareFunction(this.arr[item1], this.arr[item2]);
      if (Number.isNaN(value)) {
        throw new Error(
          `CompareFunction should evaluate to a number. Got ${value} when comparing ${this.arr[item1]} with ${this.arr[item2]}`
        );
      }
      return value;
    };
  }

  insert(val) {
    this.arr.push(val);
    this.bubbleUp();
  }

  remove(index = 0) {
    if (!this.arr.length) return;
    swap(this.arr, index, this.arr.length - 1);
    this.arr.pop();
    this.bubbleDown();
  }

  bubbleUp() {
    let index = this.arr.length - 1;
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
    const getLeftChild = (index) => 2 * index + 1;
    const getRightChild = (index) => 2 * index + 2;
    const getHigherChild = (index) =>
      getRightChild(index) < this.arr &&
      this.compareFunction(getLeftChild(index), getRightChild(index)) > 0
        ? getRightChild(index)
        : getLeftChild(index);

    while (
      getLeftChild(curr) < this.arr.length &&
      this.compareFunction(curr, getHigherChild(curr)) > 0
    ) {
      const next = getHigherChild(curr);
      swap(this.arr, curr, next);
      curr = next;
    }
  }

  toMinHeap() {
    return;
  }

  toMaxHeap() {
    return;
  }
}
