import Heap from './Heap';

export default class MaxHeap extends Heap {
  constructor() {
    super((a, b) => b - a);
  }
}
