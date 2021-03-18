import HashTable from './HashTable';

describe('Hash Table tests', () => {
  it('Hash Tables initializes, adds, removes, rehashes, and clears correctly', () => {
    let testHashTable = new HashTable(3);

    expect(testHashTable).toEqual({
      buckets: new Array(3),
      collisions: 0,
      keys: [],
      loadFactor: 0.75,
      size: 0,
    });

    testHashTable.set(1, 5);

    expect(testHashTable).toEqual({
      buckets: [
        undefined,
        undefined,
        [
          {
            key: 1,
            keyIndex: 0,
            value: 5,
          },
        ],
      ],
      collisions: 0,
      keys: [{ content: 1 }],
      loadFactor: 0.75,
      size: 1,
    });

    testHashTable.remove(1);

    expect(testHashTable).toEqual({
      buckets: [undefined, undefined, []],
      collisions: 0,
      keys: [undefined],
      loadFactor: 0.75,
      size: 0,
    });

    testHashTable.set(12, 20);

    expect(testHashTable).toEqual({
      buckets: [
        undefined,
        [
          {
            key: 12,
            keyIndex: 1,
            value: 20,
          },
        ],
        [],
      ],
      collisions: 0,
      keys: [undefined, { content: 12 }],
      loadFactor: 0.75,
      size: 1,
    });

    testHashTable.set(4, 21);
    testHashTable.set(5, 13);

    expect(testHashTable).toEqual({
      buckets: [
        undefined,
        undefined,
        [
          {
            key: 4,
            keyIndex: 1,
            value: 21,
          },
        ],
        [
          {
            key: 5,
            keyIndex: 2,
            value: 13,
          },
        ],
        [
          {
            key: 12,
            keyIndex: 0,
            value: 20,
          },
        ],
        undefined,
      ],
      collisions: 0,
      keys: [{ content: 12 }, { content: 4 }, { content: 5 }],
      loadFactor: 0.75,
      size: 3,
    });

    expect(testHashTable.has(4)).toEqual(true);
    expect(testHashTable.getBucketIndex(4)).toEqual(2);
    expect(testHashTable.getIndexes(4)).toEqual({
      bucketIndex: 2,
      itemIndex: 0,
      keyIndex: 1,
    });
    expect(testHashTable.get(4)).toEqual(21);
    expect(testHashTable.getLoadFactor()).toEqual(0.5);

    testHashTable.clear();

    expect(testHashTable).toEqual({
      buckets: new Array(16),
      collisions: 0,
      keys: [],
      loadFactor: 0.75,
      size: 0,
    });
  });
});
