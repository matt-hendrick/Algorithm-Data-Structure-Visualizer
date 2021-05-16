import HashTable from './HashTable';

describe('Hash Table tests', () => {
  it('Hash Tables initializes, adds, removes, rehashes, and clears correctly', () => {
    let testHashTable = new HashTable(3);

    expect(testHashTable).toEqual({
      buckets: new Array(3),
      collisions: 0,
      keysArray: [],
      valuesArray: [],
      loadFactor: 0.75,
      size: 0,
      initialCapacity: 3,
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
            valueIndex: 0,
          },
        ],
      ],
      collisions: 0,
      keysArray: [{ content: 1 }],
      valuesArray: [{ content: 5 }],
      loadFactor: 0.75,
      size: 1,
      initialCapacity: 3,
    });

    testHashTable.remove(1);

    expect(testHashTable).toEqual({
      buckets: [undefined, undefined, []],
      collisions: 0,
      keysArray: [undefined],
      valuesArray: [undefined],
      loadFactor: 0.75,
      size: 0,
      initialCapacity: 3,
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
            valueIndex: 1,
          },
        ],
        [],
      ],
      collisions: 0,
      keysArray: [undefined, { content: 12 }],
      valuesArray: [undefined, { content: 20 }],
      loadFactor: 0.75,
      size: 1,
      initialCapacity: 3,
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
            valueIndex: 1,
          },
        ],
        [
          {
            key: 5,
            keyIndex: 2,
            value: 13,
            valueIndex: 2,
          },
        ],
        [
          {
            key: 12,
            keyIndex: 0,
            value: 20,
            valueIndex: 0,
          },
        ],
        undefined,
      ],
      collisions: 0,
      keysArray: [{ content: 12 }, { content: 4 }, { content: 5 }],
      valuesArray: [{ content: 20 }, { content: 21 }, { content: 13 }],
      loadFactor: 0.75,
      size: 3,
      initialCapacity: 3,
    });

    expect(testHashTable.has(4)).toEqual(true);
    expect(testHashTable.getBucketIndex(4)).toEqual(2);
    expect(testHashTable.getIndexes(4)).toEqual({
      bucketIndex: 2,
      itemIndex: 0,
      keyIndex: 1,
      valueIndex: 1,
    });
    expect(testHashTable.get(4)).toEqual(21);
    expect(testHashTable.getLoadFactor()).toEqual(0.5);

    testHashTable.clear();

    expect(testHashTable).toEqual({
      buckets: new Array(16),
      collisions: 0,
      keysArray: [],
      valuesArray: [],
      loadFactor: 0.75,
      size: 0,
      initialCapacity: 3,
    });
  });
});
