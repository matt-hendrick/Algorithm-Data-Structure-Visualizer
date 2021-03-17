import React, { useState } from 'react';
import * as classes from './QueueVisualizer.module.css';

// Data Structures
import Queue from '../../dataStructures/Queue/Queue';

// Components
import MyButton from '../../components/MyButton/MyButton';

function QueueVisualizer() {
  const [queue, setQueue] = useState(null);
  const [arr, setArr] = useState(null);
  const [newNodeValue, setNewNodeValue] = useState('');

  const addNode = () => {
    if (newNodeValue !== '') {
      if (!queue) {
        let newQueue = new Queue();
        newQueue.add(newNodeValue);
        setQueue(newQueue);
        setArr(newQueue.toArray());
        setNewNodeValue('');
      } else {
        let newQueue = new Queue(queue.first, queue.last);
        newQueue.add(newNodeValue);
        setQueue(newQueue);
        setArr(newQueue.toArray());
        setNewNodeValue('');
      }
    }
  };

  const removeNode = () => {
    if (queue.first) {
      let newQueue = new Queue(queue.first, queue.last);
      newQueue.remove();
      setQueue(newQueue);
      setArr(newQueue.toArray());
    }
  };

  const clearQueue = () => {
    if (queue) {
      setQueue(null);
      setArr(null);
    }
  };

  const updateNodeValue = (event) => {
    const updatedValue = event.target.value;
    setNewNodeValue(updatedValue);
  };

  return (
    <div>
      <div className={classes.ButtonRow}>
        <input
          onChange={updateNodeValue}
          value={newNodeValue}
          placeholder="Enter a new node value"
        />
        <MyButton onClick={addNode} disabled={!newNodeValue}>
          Add to Queue
        </MyButton>
        <MyButton onClick={removeNode} disabled={!arr}>
          Remove from Queue
        </MyButton>
        <MyButton onClick={clearQueue} disabled={!arr}>
          Clear Queue
        </MyButton>
      </div>
      <div className={classes.QueueContainer}>
        <div className={classes.BorderColumn}>Queue Start</div>
        <div className={classes.QueueColumn}>
          {arr ? (
            arr.map((val, index) => {
              return (
                <div key={[val, index]} className={classes.QueueNode}>
                  <div className={classes.QueueVal}>{val}</div>
                </div>
              );
            })
          ) : (
            <h6 className={classes.EnterNodePrompt}>
              Add a new Node to visualize a new Queue
            </h6>
          )}
        </div>
        <div className={classes.BorderColumn}>Queue End</div>
      </div>
    </div>
  );
}

export default QueueVisualizer;
