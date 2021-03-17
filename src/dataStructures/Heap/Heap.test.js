import Heap from './Heap';

describe('Heap Class tests', () => {
  it('MinHeap works correctly', () => {
    let testHeap = new Heap();

    expect(testHeap.arr).toEqual([]);

    testHeap.insert(1);

    expect(testHeap.arr).toEqual([1]);

    testHeap.insert(0);

    expect(testHeap.arr).toEqual([0, 1]);

    testHeap.insert(2);
    testHeap.insert(4);
    testHeap.insert(5);

    expect(testHeap.arr).toEqual([0, 1, 2, 4, 5]);

    testHeap.remove();

    expect(testHeap.arr).toEqual([1, 4, 2, 5]);
    expect(testHeap.toLevelOrderArray()).toEqual([
      [1],
      [4, 2],
      [5, ['null'], ['null'], ['null']],
    ]);

    testHeap.clear();

    expect(testHeap.arr).toEqual([]);
  });

  it('MaxHeap works correctly', () => {
    let testHeap = new Heap([], (a, b) => b - a);

    expect(testHeap.arr).toEqual([]);

    testHeap.insert(1);

    expect(testHeap.arr).toEqual([1]);

    testHeap.insert(0);

    expect(testHeap.arr).toEqual([1, 0]);

    testHeap.insert(2);
    testHeap.insert(4);
    testHeap.insert(5);

    expect(testHeap.arr).toEqual([5, 4, 1, 0, 2]);

    testHeap.remove();

    expect(testHeap.arr).toEqual([4, 2, 1, 0]);
    expect(testHeap.toLevelOrderArray()).toEqual([
      [4],
      [2, 1],
      [0, ['null'], ['null'], ['null']],
    ]);

    testHeap.clear();

    expect(testHeap.arr).toEqual([]);
  });
});
