import Node from './Node';

describe('Node Class tests', () => {
  it(`Node initializes correctly`, () => {
    const newNode = new Node(1);

    expect(newNode).toEqual({ next: null, val: 1 });
  });
});
