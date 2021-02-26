import { isSorted, shuffle, swap } from './utilityFunctions';

describe('utilityFunctions tests', () => {
  it('isSorted returns correct boolean for sorted/unsorted arrays', () => {
    const unsortedArr = [[3], [2], [1], [4], [5], [62], [100], [-4]];
    const sortedArr = [[1], [2], [3], [4], [5], [6], [100], [1000]];

    expect(isSorted(sortedArr)).toEqual(true);
    expect(isSorted(unsortedArr)).toEqual(false);
  });

  it('shuffle correctly rearranges an array', () => {
    const sortedArr = [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
    ];
    let testArr = [...sortedArr];
    shuffle(testArr);
    expect(testArr).not.toEqual(sortedArr);
  });

  it('swap correctly swaps items in an array', () => {
    let testArr = [1, 2, 3, 4, 5];
    const expectedArr = [5, 2, 3, 4, 1];

    swap(testArr, 0, 4);

    expect(testArr).toEqual(expectedArr);
  });
});
