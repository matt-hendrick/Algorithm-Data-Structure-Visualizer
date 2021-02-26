import { Stack } from './Stack';
import { Node } from '../Node/Node';

describe('Stack Class tests', () => {
  it(`Stack initializes/adds/removes/turns to Array correctly`, () => {
    const newNode = new Node(1);
    let newStack = new Stack(newNode);

    expect(newStack).toEqual({
      first: { next: null, prev: null, val: 1 },
      last: { next: null, prev: null, val: 1 },
    });

    newStack.add(3);

    expect(newStack).toEqual({
      first: { next: { next: null, prev: null, val: 1 }, prev: null, val: 3 },
      last: { next: null, prev: null, val: 1 },
    });

    newStack.add(5);

    expect(newStack).toEqual({
      first: {
        next: {
          next: {
            next: null,
            prev: null,
            val: 1,
          },
          prev: null,
          val: 3,
        },
        prev: null,
        val: 5,
      },
      last: { next: null, prev: null, val: 1 },
    });

    newStack.remove();

    expect(newStack).toEqual({
      first: { next: { next: null, prev: null, val: 1 }, prev: null, val: 3 },
      last: { next: null, prev: null, val: 1 },
    });

    const newStackArray = newStack.toArray();

    expect(newStackArray).toEqual([3, 1]);
  });
});
