import LinkedList from './LinkedList';
import Node from '../Node/Node';

describe('LinkedList Class tests', () => {
  it(`When valid node passed in, Linked LinkedList initializes, adds/removes/gets First, 
  adds/removes/gets Last, and clears correctly`, () => {
    const newNode = new Node(1);
    let newList = new LinkedList(newNode);

    expect(newList).toEqual({ head: { next: null, val: 1 } });

    newList.addFirst(3);

    expect(newList).toEqual({
      head: { next: { next: null, val: 1 }, val: 3 },
    });

    expect(newList.size()).toEqual(2);

    newList.addLast(5);

    expect(newList).toEqual({
      head: {
        next: { next: { next: null, val: 5 }, val: 1 },

        val: 3,
      },
    });

    expect(newList.getFirst()).toEqual({
      next: { next: { next: null, val: 5 }, val: 1 },

      val: 3,
    });

    expect(newList.getLast()).toEqual({ next: null, val: 5 });

    newList.removeLast();

    expect(newList).toEqual({
      head: { next: { next: null, val: 1 }, val: 3 },
    });

    newList.removeFirst();

    expect(newList).toEqual({ head: { next: null, val: 1 } });

    newList.clear();

    expect(newList).toEqual({ head: null });
  });

  it(`When no node passed in, Linked LinkedList initializes, adds/removes/gets First, 
  adds/removes/gets Last, and clears correctly`, () => {
    let newList2 = new LinkedList();

    expect(newList2).toEqual({ head: null });
    expect(newList2.getFirst()).toEqual(null);
    expect(newList2.getLast()).toEqual(null);

    newList2.removeFirst();
    newList2.removeLast();

    newList2.addLast(5);

    expect(newList2).toEqual({
      head: { next: null, val: 5 },
    });

    newList2.clear();

    expect(newList2).toEqual({ head: null });

    newList2.addFirst(1);
    newList2.addFirst(3);

    expect(newList2).toEqual({
      head: { next: { next: null, val: 1 }, val: 3 },
    });

    expect(newList2.size()).toEqual(2);

    newList2.addLast(5);

    expect(newList2).toEqual({
      head: {
        next: { next: { next: null, val: 5 }, val: 1 },

        val: 3,
      },
    });

    expect(newList2.getFirst()).toEqual({
      next: { next: { next: null, val: 5 }, val: 1 },

      val: 3,
    });

    expect(newList2.getLast()).toEqual({ next: null, val: 5 });

    newList2.removeLast();

    expect(newList2).toEqual({
      head: { next: { next: null, val: 1 }, val: 3 },
    });

    newList2.removeFirst();

    expect(newList2).toEqual({ head: { next: null, val: 1 } });

    newList2.clear();

    expect(newList2).toEqual({ head: null });
  });
});
