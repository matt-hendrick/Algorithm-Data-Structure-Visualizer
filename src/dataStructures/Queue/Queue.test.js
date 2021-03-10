import Queue from './Queue';
import Node from '../Node/Node';

describe('Queue Class tests', () => {
  it(`Queue initializes/adds/removes/turns to Array correctly`, () => {
    const newNode = new Node(1);
    let newQueue = new Queue(newNode);

    expect(newQueue).toEqual({
      first: { next: null, val: 1 },
      last: { next: null, val: 1 },
    });

    newQueue.add(3);

    expect(newQueue).toEqual({
      first: { next: { next: null, val: 3 }, val: 1 },
      last: { next: null, val: 3 },
    });

    newQueue.add(5);

    expect(newQueue).toEqual({
      first: {
        next: { next: { next: null, val: 5 }, val: 3 },

        val: 1,
      },
      last: { next: null, val: 5 },
    });

    newQueue.remove();

    expect(newQueue).toEqual({
      first: { next: { next: null, val: 5 }, val: 3 },
      last: { next: null, val: 5 },
    });

    const newQueueArray = newQueue.toArray();

    expect(newQueueArray).toEqual([3, 5]);

    newQueue.remove();
    newQueue.remove();

    expect(newQueue).toEqual({
      first: null,
      last: null,
    });

    newQueue.remove();

    expect(newQueue).toEqual({
      first: null,
      last: null,
    });

    newQueue.add(1);

    expect(newQueue).toEqual({
      first: { next: null, val: 1 },
      last: { next: null, val: 1 },
    });
  });
});
