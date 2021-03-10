import Stack from './Stack';
import Node from '../Node/Node';

describe('Stack Class tests', () => {
  it(`Stack initializes/adds/removes/turns to Array correctly`, () => {
    const newNode = new Node(1);
    let newStack = new Stack(newNode);

    expect(newStack).toEqual({
      first: { next: null, val: 1 },
      last: { next: null, val: 1 },
    });

    newStack.add(3);

    expect(newStack).toEqual({
      first: { next: { next: null, val: 1 }, val: 3 },
      last: { next: null, val: 1 },
    });

    newStack.add(5);

    expect(newStack).toEqual({
      first: {
        next: {
          next: {
            next: null,

            val: 1,
          },

          val: 3,
        },

        val: 5,
      },
      last: { next: null, val: 1 },
    });

    newStack.remove();

    expect(newStack).toEqual({
      first: { next: { next: null, val: 1 }, val: 3 },
      last: { next: null, val: 1 },
    });

    const newStackArray = newStack.toArray();

    expect(newStackArray).toEqual([3, 1]);

    newStack.remove();
    newStack.remove();

    expect(newStack).toEqual({
      first: null,
      last: null,
    });

    newStack.remove();

    expect(newStack).toEqual({
      first: null,
      last: null,
    });

    newStack.add(1);

    expect(newStack).toEqual({
      first: { next: null, val: 1 },
      last: { next: null, val: 1 },
    });
  });
});
