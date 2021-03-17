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
      let tempHashMap = hashMap;
      tempHashMap.set(newKey, newValue);
      setHashMap(tempHashMap);
      setNewKey('');
      setNewValue('');
    }
  };

  const removeNode = () => {
    if (newKey) {
      let tempHashMap = hashMap;
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

  console.log(hashMap);

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
        {hashMap ? (
          hashMap.buckets.map((bucket, index) => (
            <div>
              <div>Bucket # {index}</div>
              {bucket.map((item) => (
                <div>
                  {item.key}, {item.value}
                </div>
              ))}
            </div>
          ))
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
