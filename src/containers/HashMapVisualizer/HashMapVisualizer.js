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

  const insertNode = () => {
    if (!hashMap) {
      let tempHashMap = new HashMap();
      tempHashMap.set(newKey, newValue);
      setHashMap(tempHashMap);
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
            <div>
              HashMap Size: {hashMap.size}, HashMap Buckets:
              {hashMap.buckets.length}, HashMap Collisions: {hashMap.collisions}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              {hashMap.buckets.map((bucket, index) =>
                bucket.length > 0 ? (
                  <div
                    style={{
                      margin: '10px',
                      padding: '5px',
                      backgroundColor: '#39cccc',
                      color: '#ffffff',
                    }}
                  >
                    <h5>Bucket # {index + 1}</h5>
                    {bucket.map((item, index) => (
                      <div>
                        Item #{index + 1} = {item.key}, {item.value}
                      </div>
                    ))}
                  </div>
                ) : null
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
