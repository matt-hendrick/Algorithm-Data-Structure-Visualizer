import BinaryTree from './BinaryTree';

describe('BinaryTree Class tests', () => {
  it('BinaryTree works correctly', () => {});
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

  expect(testTree.has(1)).toEqual(true);
  expect(testTree.has(5)).toEqual(false);

  expect(testTree.get(1)).toEqual({
    left: null,
    right: null,
    val: 1,
  });
  expect(testTree.get(5)).toEqual(null);

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

  expect(testTree.has(1)).toEqual(true);
  expect(testTree.has(5)).toEqual(false);

  expect(testTree.get(1)).toEqual({
    left: { left: null, right: null, val: 2 },
    right: { left: null, right: null, val: -4 },
    val: 1,
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

  testTree.insert(1);

  expect(testTree).toEqual({
    root: {
      left: null,
      right: null,
      val: 1,
    },
  });

  testTree.clear();

  expect(testTree).toEqual({ root: null });
});
