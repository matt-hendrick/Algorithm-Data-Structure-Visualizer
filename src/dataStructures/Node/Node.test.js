import Node from './Node';

describe('Node Class tests', () => {
  it(`Node initializes correctly when passed in value`, () => {
    const newNode = new Node(1);

    expect(newNode).toEqual({ next: null, val: 1 });
  });

  it(`Node initializes correctly when no value passed in`, () => {
    const newNode2 = new Node();

    expect(newNode2).toEqual({ next: null, val: null });
  });
});
