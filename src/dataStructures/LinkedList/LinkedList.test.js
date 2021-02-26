import LinkedList from './LinkedList';
import Node from '../Node/Node';

describe('LinkedList Class tests', () => {
  it(`Singly linked LinkedList initializes, adds/removes/gets First, 
  adds/removes/gets Last, and clears correctly`, () => {
    const newNode = new Node(1);
    let newList = new LinkedList(newNode);

    expect(newList).toEqual({ head: { next: null, prev: null, val: 1 } });

    newList.addFirst(3);

    expect(newList).toEqual({
      head: { next: { next: null, prev: null, val: 1 }, prev: null, val: 3 },
    });

    newList.addLast(5);

    expect(newList).toEqual({
      head: {
        next: { next: { next: null, prev: null, val: 5 }, prev: null, val: 1 },
        prev: null,
        val: 3,
      },
    });

    const first = newList.getFirst();
    expect(first).toEqual({
      next: { next: { next: null, prev: null, val: 5 }, prev: null, val: 1 },
      prev: null,
      val: 3,
    });

    const last = newList.getLast();
    expect(last).toEqual({ next: null, prev: null, val: 5 });

    newList.removeLast();

    expect(newList).toEqual({
      head: { next: { next: null, prev: null, val: 1 }, prev: null, val: 3 },
    });

    newList.removeFirst();

    expect(newList).toEqual({ head: { next: null, prev: null, val: 1 } });

    newList.clear();

    expect(newList).toEqual({ head: null });
  });
});
