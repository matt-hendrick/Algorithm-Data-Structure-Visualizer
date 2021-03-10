import BinaryTree from './BinaryTree';

describe('BinaryTree Class tests', () => {
  it('BinaryTree initializes correctly', () => {});
  let testTree = new BinaryTree();

  expect(testTree).toEqual({ root: null });

  testTree.insert(1);

  expect(testTree).toEqual({
    root: {
      left: null,
      right: null,
      val: 1,
    },
  });

  testTree.insert(2);

  expect(testTree).toEqual({
    root: {
      left: null,
      right: {
        left: null,
        right: null,
        val: 2,
      },
      val: 1,
    },
  });

  testTree.insert(-4);

  expect(testTree).toEqual({
    root: {
      left: {
        left: null,
        right: null,
        val: -4,
      },
      right: {
        left: null,
        right: null,
        val: 2,
      },
      val: 1,
    },
  });

  expect(testTree.toLevelOrderArray()).toEqual([[1], [-4, 2]]);

  testTree.invertTree();

  expect(testTree).toEqual({
    root: {
      right: {
        left: null,
        right: null,
        val: -4,
      },
      left: {
        left: null,
        right: null,
        val: 2,
      },
      val: 1,
    },
  });

  testTree.remove(1);

  expect(testTree).toEqual({
    root: {
      left: {
        left: null,
        right: null,
        val: 2,
      },
      right: null,
      val: -4,
    },
  });

  testTree.remove(-4);

  expect(testTree).toEqual({ root: { left: null, right: null, val: 2 } });

  testTree.remove(2);

  expect(testTree).toEqual({ root: null });
});
