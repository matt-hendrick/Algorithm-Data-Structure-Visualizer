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
  const [isMinHeap, setIsMinHeap] = useState(true);

  const insertNode = () => {
    const intNodeVal = parseInt(newNodeValue);
    if (Number.isInteger(intNodeVal)) {
      if (!heap) {
        let tempHeap = new Heap(
          [],
          isMinHeap ? (a, b) => a - b : (a, b) => b - a
        );
        tempHeap.insert(intNodeVal);
        setHeap(tempHeap);
        setArr(tempHeap.toLevelOrderArray());
        setNewNodeValue('');
      } else {
        let tempHeap = new Heap(
          heap.arr,
          isMinHeap ? (a, b) => a - b : (a, b) => b - a
        );
        tempHeap.insert(intNodeVal);
        setHeap(tempHeap);
        setArr(tempHeap.toLevelOrderArray());
        setNewNodeValue('');
      }
    }
  };

  const removeNode = () => {
    let tempHeap = new Heap(
      heap.arr,
      isMinHeap ? (a, b) => a - b : (a, b) => b - a
    );
    tempHeap.remove();
    setHeap(tempHeap);
    setArr(tempHeap.toLevelOrderArray());
    setNewNodeValue('');
  };

  const changeHeapType = () => {
    if (isMinHeap) {
      setIsMinHeap(false);
      let tempHeap = new Heap(heap.arr, (a, b) => b - a);
      tempHeap.switchHeapType();
      setHeap(tempHeap);
      setArr(tempHeap.toLevelOrderArray());
    } else {
      setIsMinHeap(true);
      let tempHeap = new Heap(heap.arr, (a, b) => a - b);
      tempHeap.switchHeapType();
      setHeap(tempHeap);
      setArr(tempHeap.toLevelOrderArray());
    }
  };

  const updateNewNodeValue = (event) => {
    const updatedNodeValue = event.target.value;
    setNewNodeValue(updatedNodeValue);
  };

  console.log(isMinHeap, arr);

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
          Remove Root Node
        </MyButton>
        <MyButton onClick={changeHeapType} disabled={!heap}>
          {isMinHeap ? 'Convert to Max Heap' : 'Convert to Min Heap'}
        </MyButton>
      </div>
      {heap ? (
        <h6 className={classes.HeapTypeHeader}>
          {isMinHeap ? 'Min Heap' : 'Max Heap'}
        </h6>
      ) : null}
      <div className={classes.Heap}>
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
            Add a new Node to visualize a new Heap
          </h6>
        )}
      </div>
    </div>
  );
}

export default HeapVisualizer;
