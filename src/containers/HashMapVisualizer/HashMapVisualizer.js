import React, { useState } from 'react';

import * as classes from './HashMapVisualizer.module.css';

// Components
import MyButton from '../../components/MyButton/MyButton';

// Data Structures
import HashMap from '../../dataStructures/HashMap/HashMap';

function HashMapVisualizer() {
  const [newKey, setNewKey] = useState('');
  const [newValue, setNewValue] = useState('');
  const [hashMap, setHashMap] = useState(null);
  const [arr, setArr] = useState(null);

  const insertNode = () => {
    if (!hashMap) {
      let tempHashMap = new HashMap();
      tempHashMap.set(newKey, newValue);
      setHashMap(tempHashMap);
      let tempArr = Array.from(tempHashMap.buckets, (item) => item || null);
      setArr(tempArr);
      setNewKey('');
      setNewValue('');
    } else {
      let tempHashMap = new HashMap(
        hashMap.initialCapacity,
        hashMap.buckets,
        hashMap.loadFactor,
        hashMap.size,
        hashMap.collisions,
        hashMap.keys
      );
      tempHashMap.set(newKey, newValue);
      setHashMap(tempHashMap);
      let tempArr = Array.from(tempHashMap.buckets, (item) => item || null);
      setArr(tempArr);
      setNewKey('');
      setNewValue('');
    }
  };

  const removeNode = () => {
    if (newKey) {
      let tempHashMap = new HashMap(
        hashMap.initialCapacity,
        hashMap.buckets,
        hashMap.loadFactor,
        hashMap.size,
        hashMap.collisions,
        hashMap.keys
      );
      tempHashMap.remove(newKey);
      setHashMap(tempHashMap);
      let tempArr = Array.from(tempHashMap.buckets, (item) => item || null);
      setArr(tempArr);
      setNewKey('');
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

  console.log(arr);

  return (
    <div>
      <div className={classes.ButtonRow}>
        <input
          value={newKey}
          placeholder="Enter a new key"
          onChange={updateNewKey}
        />
        <input
          value={newValue}
          placeholder="Enter a new value"
          onChange={updateNewValue}
        />
        <MyButton onClick={insertNode} disabled={!newKey || !newValue}>
          Insert Key/Value Pair
        </MyButton>
        <MyButton onClick={removeNode} disabled={!newKey || !hashMap}>
          Remove Specified Key
        </MyButton>
      </div>
      <div>
        {hashMap?.size > 0 ? (
          <div>
            <h4 className={classes.HashMapInfoHeader}>
              HashMap Size: {hashMap.size}, HashMap Buckets:{' '}
              {hashMap.buckets.length}, HashMap Collisions: {hashMap.collisions}
            </h4>
            <div className={classes.HashMapBucketsContainer}>
              {arr.map((bucket, index) =>
                bucket?.length > 0 ? (
                  <div className={classes.HashMapBucketContainer}>
                    <h5 className={classes.HashMapBucketHeader}>
                      Bucket # {index + 1}
                    </h5>
                    <div className={classes.HashMapItemsContainer}>
                      {bucket.map((item, index) => (
                        <div className={classes.HashMapItem}>
                          Item #{index + 1} = {item.key}, {item.value}
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div
                    style={{
                      margin: '10px',
                      padding: '5px',
                      width: '20%',
                      border: '1px solid #80d6c2',
                    }}
                  >
                    <h5
                      style={{
                        backgroundColor: '#39cccc',
                        color: '#ffffff',
                        padding: '5px',
                      }}
                    >
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
            Add a new Node to visualize a new HashMap
          </h6>
        )}
      </div>
    </div>
  );
}

export default HashMapVisualizer;
