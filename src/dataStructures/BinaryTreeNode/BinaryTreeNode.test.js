import BinaryTreeNode from './BinaryTreeNode';

describe('BinaryTreeNode Class tests', () => {
  it(`BinaryTreeNode initializes correctly`, () => {
    const newNode = new BinaryTreeNode(1);

    expect(newNode).toEqual({ left: null, right: null, val: 1 });
  });
});
