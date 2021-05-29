import React, { useState } from 'react';

import './HeapVisualizer.scss';

// Components
import MyButton from '../../components/MyButton/MyButton';
import Input from '../../components/Input/Input';

// Data Structures
import Heap from '../../dataStructures/Heap/Heap';

// Utility
import { getRandomInt } from '../../utility/utilityFunctions';

function HeapVisualizer() {
  const [newNodeValue, setNewNodeValue] = useState<number | '' | '-'>('');
  const [heap, setHeap] = useState<Heap | null>(null);
  const [arr, setArr] = useState<(string | number)[][] | null>(null);
  const [isMinHeap, setIsMinHeap] = useState(true);

  const insertNode = () => {
    if (!heap) {
      let tempHeap = new Heap(
        [],
        isMinHeap ? (a, b) => a - b : (a, b) => b - a
      );
      tempHeap.insert(newNodeValue as number);
      setHeap(tempHeap);
      setArr(tempHeap.toLevelOrderArray());
      setNewNodeValue('');
    } else {
      let tempHeap = new Heap(
        heap.arr,
        isMinHeap ? (a, b) => a - b : (a, b) => b - a
      );
      tempHeap.insert(newNodeValue as number);
      setHeap(tempHeap);
      setArr(tempHeap.toLevelOrderArray());
      setNewNodeValue('');
    }
  };

  const removeNode = () => {
    let tempHeap = new Heap(
      heap?.arr,
      isMinHeap ? (a, b) => a - b : (a, b) => b - a
    );
    tempHeap.remove();
    setHeap(tempHeap);
    setArr(tempHeap.toLevelOrderArray());
    setNewNodeValue('');
  };

  const changeHeapType = () => {
    if (heap) {
      if (isMinHeap) {
        setIsMinHeap(false);
        let tempHeap = new Heap(heap.arr, (a, b) => b - a);
        tempHeap.reorderHeap();
        setHeap(tempHeap);
        setArr(tempHeap.toLevelOrderArray());
      } else {
        setIsMinHeap(true);
        let tempHeap = new Heap(heap.arr, (a, b) => a - b);
        tempHeap.reorderHeap();
        setHeap(tempHeap);
        setArr(tempHeap.toLevelOrderArray());
      }
    } else return;
  };

  const clearHeap = () => {
    if (heap) {
      setHeap(null);
      setArr(null);
    } else return;
  };

  const generateRandomHeap = () => {
    setIsMinHeap(getRandomInt(1, 50) > 25 ? true : false);
    let newHeap = new Heap([], isMinHeap ? (a, b) => a - b : (a, b) => b - a);
    let heapMaxSize = getRandomInt(1, 25);
    for (let i = 0; i < heapMaxSize; i++) {
      newHeap.insert(getRandomInt(1, 100));
    }
    setHeap(newHeap);
    setArr(newHeap.toLevelOrderArray());
  };

  const updateNewNodeValue = (event: React.ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    if (target) {
      if (Number.isInteger(parseInt(target.value))) {
        const updatedNodeValue = parseInt(target.value);
        setNewNodeValue(updatedNodeValue);
      } else if (target.value === '' || target.value === '-') {
        const updatedNodeValue = target.value;
        setNewNodeValue(updatedNodeValue);
      }
    } else return;
  };

  return (
    <div>
      <div className="button-row">
        <Input
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
        <MyButton onClick={clearHeap} disabled={!heap}>
          Clear Heap
        </MyButton>
        <MyButton onClick={generateRandomHeap}>Generate Random Heap</MyButton>
      </div>
      {arr && arr.length > 0 ? (
        <h4 className="heap-type-header">
          {isMinHeap ? 'Min Heap' : 'Max Heap'}
        </h4>
      ) : null}
      <div className="heap">
        {arr && arr.length > 0 ? (
          arr.map((item, index) => (
            <ul key={Math.random().toString(36).substring(7)}>
              {item.map((subitem) => (
                <li
                  key={Math.random().toString(36).substring(7)}
                  style={{ width: `${index * 30 + 10}%` }}
                >
                  <button disabled>{subitem}</button>
                </li>
              ))}
            </ul>
          ))
        ) : (
          <h6 className="enter-node-prompt-margin-top">
            Add a new Node to visualize a new Heap
          </h6>
        )}
      </div>
    </div>
  );
}

export default HeapVisualizer;
