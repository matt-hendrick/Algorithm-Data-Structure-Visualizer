import { useState } from 'react';

import './HashTableVisualizer.css';

// Components
import MyButton from '../../components/MyButton/MyButton';
import Input from '../../components/Input/Input';

// Data Structures
import HashTable from '../../dataStructures/HashTable/HashTable';

// Utility
import { getRandomInt } from '../../utility/utilityFunctions';

function HashTableVisualizer() {
  const [newKey, setNewKey] = useState('');
  const [newValue, setNewValue] = useState('');
  const [hashTable, setHashTable] = useState<HashTable>();
  const [arr, setArr] =
    useState<
      {
        key: string | number;
        value: string | number;
        keyIndex: number;
        valueIndex: number;
      }[][]
    >();

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
        hashTable.keysArray,
        hashTable.valuesArray
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
    if (newKey && hashTable) {
      let tempHashTable = new HashTable(
        hashTable.initialCapacity,
        hashTable.buckets,
        hashTable.loadFactor,
        hashTable.size,
        hashTable.collisions,
        hashTable.keysArray,
        hashTable.valuesArray
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
      setHashTable(undefined);
      setArr(undefined);
      setNewKey('');
      setNewValue('');
    }
  };

  const generateRandomTable = () => {
    let newHashTable = new HashTable();
    let tableMaxSize = getRandomInt(1, 50);
    for (let i = 0; i < tableMaxSize; i++) {
      newHashTable.set(
        Math.random().toString(36).substring(7),
        Math.random().toString(36).substring(7)
      );
    }
    setHashTable(newHashTable);
    let newArr = Array.from(newHashTable.buckets, (item) => item || null);
    setArr(newArr);
  };

  const updateNewKey = (event: React.ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    if (target) {
      const updatedKey = target.value;
      setNewKey(updatedKey);
    }
  };

  const updateNewValue = (event: React.ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    if (target) {
      const updatedValue = target.value;
      setNewValue(updatedValue);
    }
  };

  return (
    <div>
      <div className="button-row">
        <Input
          id="KeyInput"
          value={newKey}
          placeholder="Enter a new key"
          onChange={updateNewKey}
        />
        <Input
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
        <MyButton onClick={generateRandomTable}>
          Generate Random Hash Table
        </MyButton>
      </div>
      <div>
        {hashTable && hashTable.size > 0 ? (
          <div>
            <h4 className="hash-table-info-header">
              Hash Table Size: {hashTable.size}, Hash Table Buckets:{' '}
              {hashTable.buckets.length}, Hash Table Collisions:{' '}
              {hashTable.collisions}
            </h4>
            <div className="hash-table-buckets-container">
              {arr?.map((bucket, index) =>
                bucket?.length > 0 ? (
                  <div
                    className="hash-table-bucket-container"
                    key={bucket.join('') + index}
                  >
                    <h5 className="hash-table-bucket-header">
                      Bucket # {index + 1}
                    </h5>
                    <div className="hash-table-items-container">
                      {bucket.map((item, index) => (
                        <div className="hash-table-item" key={item.key}>
                          Key: {item.key}, Value: {item.value}
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="hash-table-bucket-container" key={index}>
                    <h5 className="hash-table-bucket-header">
                      Bucket # {index + 1}
                    </h5>
                    <div>No items in this bucket</div>
                  </div>
                )
              )}
            </div>
          </div>
        ) : (
          <h6 className="enter-node-prompt-margin-top">
            Add a new Node to visualize a new Hash Table
          </h6>
        )}
      </div>
    </div>
  );
}

export default HashTableVisualizer;
