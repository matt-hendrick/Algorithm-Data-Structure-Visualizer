import React, { useState } from 'react';

import * as classes from './HashTableVisualizer.module.css';

// Components
import MyButton from '../../components/MyButton/MyButton';

// Data Structures
import HashTable from '../../dataStructures/HashTable/HashTable';

function HashTableVisualizer() {
  const [newKey, setNewKey] = useState('');
  const [newValue, setNewValue] = useState('');
  const [hashTable, setHashTable] = useState(null);
  const [arr, setArr] = useState(null);

  const insertNode = () => {
    if (!hashTable) {
      let tempHashTable = new HashTable();
      tempHashTable.set(newKey, newValue);
      setHashTable(tempHashTable);
      let tempArr = Array.from(tempHashTable.buckets, (item) => item || null);
      setArr(tempArr);
      setNewKey('');
      setNewValue('');
    } else {
      let tempHashTable = new HashTable(
        hashTable.initialCapacity,
        hashTable.buckets,
        hashTable.loadFactor,
        hashTable.size,
        hashTable.collisions,
        hashTable.keys
      );
      tempHashTable.set(newKey, newValue);
      setHashTable(tempHashTable);
      let tempArr = Array.from(tempHashTable.buckets, (item) => item || null);
      setArr(tempArr);
      setNewKey('');
      setNewValue('');
    }
  };

  const removeNode = () => {
    if (newKey) {
      let tempHashTable = new HashTable(
        hashTable.initialCapacity,
        hashTable.buckets,
        hashTable.loadFactor,
        hashTable.size,
        hashTable.collisions,
        hashTable.keys
      );
      tempHashTable.remove(newKey);
      setHashTable(tempHashTable);
      let tempArr = Array.from(tempHashTable.buckets, (item) => item || null);
      setArr(tempArr);
      setNewKey('');
    }
  };

  const clearHashTable = () => {
    if (hashTable) {
      setHashTable(null);
      setArr(null);
      setNewKey('');
      setNewValue('');
    }
  };

  const updateNewKey = (event) => {
    const updatedKey = event.target.value;
    setNewKey(updatedKey);
  };

  const updateNewValue = (event) => {
    const updatedValue = event.target.value;
    setNewValue(updatedValue);
  };

  return (
    <div>
      <div className={classes.ButtonRow}>
        <input
          id="KeyInput"
          value={newKey}
          placeholder="Enter a new key"
          onChange={updateNewKey}
        />
        <input
          id="ValueInput"
          value={newValue}
          placeholder="Enter a new value"
          onChange={updateNewValue}
        />
        <MyButton onClick={insertNode} disabled={!newKey || !newValue}>
          Insert Key/Value Pair
        </MyButton>
        <MyButton
          onClick={removeNode}
          disabled={!newKey || !hashTable?.has(newKey)}
        >
          Remove Specified Key
        </MyButton>
        <MyButton onClick={clearHashTable} disabled={!hashTable}>
          Clear Hash Table
        </MyButton>
      </div>
      <div>
        {hashTable?.size > 0 ? (
          <div>
            <h4 className={classes.HashTableInfoHeader}>
              Hash Table Size: {hashTable.size}, Hash Table Buckets:{' '}
              {hashTable.buckets.length}, Hash Table Collisions:{' '}
              {hashTable.collisions}
            </h4>
            <div className={classes.HashTableBucketsContainer}>
              {arr.map((bucket, index) =>
                bucket?.length > 0 ? (
                  <div
                    className={classes.HashTableBucketContainer}
                    key={bucket.join('') + index}
                  >
                    <h5 className={classes.HashTableBucketHeader}>
                      Bucket # {index + 1}
                    </h5>
                    <div className={classes.HashTableItemsContainer}>
                      {bucket.map((item, index) => (
                        <div className={classes.HashTableItem} key={item.key}>
                          Key: {item.key}, Value: {item.value}
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className={classes.HashTableBucketContainer} key={index}>
                    <h5 className={classes.HashTableBucketHeader}>
                      Bucket # {index + 1}
                    </h5>
                    <div>No items in this bucket</div>
                  </div>
                )
              )}
            </div>
          </div>
        ) : (
          <h6 className={classes.EnterNodePrompt}>
            Add a new Node to visualize a new Hash Table
          </h6>
        )}
      </div>
    </div>
  );
}

export default HashTableVisualizer;
