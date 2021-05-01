import React, { useState } from 'react';
import './QueueVisualizer.css';

// Data Structures
import Queue from '../../dataStructures/Queue/Queue';

// Components
import MyButton from '../../components/MyButton/MyButton';
import Input from '../../components/Input/Input';

function QueueVisualizer() {
  const [queue, setQueue] = useState<Queue | null>(null);
  const [arr, setArr] = useState<string[] | null>(null);
  const [newNodeValue, setNewNodeValue] = useState('');

  const addNode = () => {
    if (newNodeValue !== '') {
      if (!queue) {
        let newQueue = new Queue();
        newQueue.add(newNodeValue);
        setQueue(newQueue);
        setArr(newQueue.toArray() as string[]);
        setNewNodeValue('');
      } else {
        let newQueue = new Queue(queue.first, queue.last);
        newQueue.add(newNodeValue);
        setQueue(newQueue);
        setArr(newQueue.toArray() as string[]);
        setNewNodeValue('');
      }
    }
  };

  const removeNode = () => {
    if (queue?.first) {
      let newQueue = new Queue(queue.first, queue.last);
      newQueue.remove();
      setQueue(newQueue);
      setArr(newQueue.toArray() as string[]);
    }
  };

  const clearQueue = () => {
    if (queue) {
      setQueue(null);
      setArr(null);
    }
  };

  const updateNodeValue = (event: React.ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    if (target) {
      const updatedValue = target.value;
      setNewNodeValue(updatedValue);
    }
  };

  return (
    <div>
      <div className="button-row">
        <Input
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
      <div className="queue-container">
        <div className="queue-border-column">Queue Start</div>
        <div className="queue-column">
          {arr ? (
            arr.map((val, index) => {
              return (
                <div key={val + index + Math.random()} className="queue-node">
                  <div className="queue-val">{val}</div>
                </div>
              );
            })
          ) : (
            <h6 className="enter-node-prompt-no-margin">
              Add a new Node to visualize a new Queue
            </h6>
          )}
        </div>
        <div className="queue-border-column">Queue End</div>
      </div>
    </div>
  );
}

export default QueueVisualizer;
