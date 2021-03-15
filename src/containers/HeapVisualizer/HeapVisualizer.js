import React, { useState } from 'react';

import * as classes from './HeapVisualizer.module.scss';

// Components
import MyButton from '../../components/MyButton/MyButton';

// Data Structures
import Heap from '../../dataStructures/Heap/Heap';

function HeapVisualizer() {
  const [newNodeValue, setNewNodeValue] = useState('');
  const [heap, setHeap] = useState(null);
  const [arr, setArr] = useState(null);

  const insertNode = () => {
    const intNodeVal = parseInt(newNodeValue);
    if (Number.isInteger(intNodeVal)) {
      if (!heap) {
        let tempHeap = new Heap();
        tempHeap.insert(intNodeVal);
        setHeap(tempHeap);
        setArr(tempHeap.toLevelOrderArray());
        setNewNodeValue('');
      } else {
        let tempHeap = new Heap(heap.arr);
        tempHeap.insert(intNodeVal);
        setHeap(tempHeap);
        setArr(tempHeap.toLevelOrderArray());
        setNewNodeValue('');
      }
    }
  };

  const removeNode = () => {
    let tempHeap = new Heap(heap.arr);
    tempHeap.remove();
    setHeap(tempHeap);
    setArr(tempHeap.toLevelOrderArray());
    setNewNodeValue('');
  };

  const updateNewNodeValue = (event) => {
    const updatedNodeValue = event.target.value;
    setNewNodeValue(updatedNodeValue);
  };

  console.log(heap?.toLevelOrderArray());

  return (
    <div>
      <div className={classes.ButtonRow}>
        <input
          value={newNodeValue}
          placeholder="Enter a new Node value"
          onChange={updateNewNodeValue}
        />
        <MyButton onClick={insertNode} disabled={!newNodeValue}>
          Insert Node
        </MyButton>
        <MyButton onClick={removeNode} disabled={!heap}>
          Remove Node
        </MyButton>
      </div>
      <div className={classes.Tree}>
        {arr?.length > 0 ? (
          arr.map((item, index) => (
            <ul key={item + index}>
              {item.map((subitem) => (
                <li
                  key={subitem + index + item}
                  style={{ width: `${index * 30 + 10}%` }}
                >
                  <button disabled>{subitem}</button>
                </li>
              ))}
            </ul>
          ))
        ) : (
          <h6 className={classes.EnterNodePrompt}>
            Add a new Node to visualize a new Binary Tree
          </h6>
        )}
      </div>
    </div>
  );
}

export default HeapVisualizer;
