import Heap from './Heap';

export default class MinHeap extends Heap {
  constructor() {
    super((a, b) => a - b);
  }
}
