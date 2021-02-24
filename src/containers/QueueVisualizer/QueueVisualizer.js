import React, { useState } from 'react';
import { Queue } from '../../dataStructures/Queue';
import MyButton from '../../components/MyButton/MyButton';

function QueueVisualizer() {
  const [stack, setQueue] = useState(null);
  const [arr, setArr] = useState(null);
  const [newNodeValue, setNewNodeValue] = useState('');

  const updateNodeValue = (event) => {
    const updatedValue = event.target.value;
    setNewNodeValue(updatedValue);
  };

  const addNode = () => {
    if (newNodeValue !== '') {
      if (!stack) {
        let newQueue = new Queue();
        newQueue.add(newNodeValue);
        setQueue(newQueue);
        setArr(newQueue.toArray());
        setNewNodeValue('');
      } else {
        let newQueue = new Queue(stack.first, stack.last);
        newQueue.add(newNodeValue);
        setQueue(newQueue);
        setArr(newQueue.toArray());
        setNewNodeValue('');
      }
    }
  };

  const removeNode = () => {
    if (stack.first) {
      let newQueue = new Queue(stack.first, stack.last);
      newQueue.remove();
      setQueue(newQueue);
      setArr(newQueue.toArray());
    }
  };

  return (
    <div>
      <div
        style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}
      >
        <input
          onChange={updateNodeValue}
          value={newNodeValue}
          placeholder="Enter a new node value"
        />
        <MyButton onClick={addNode}>Add to Queue</MyButton>
        <MyButton onClick={removeNode}>Remove from Front of List</MyButton>
      </div>
      <div
        style={{
          display: 'flex',
        }}
      >
        <div style={{ width: '15%' }}>Start of the Queue</div>
        <div
          style={{
            width: '70%',
            display: 'flex',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
          }}
        >
          {arr
            ? arr.map((val, index) => {
                return (
                  <div key={[val, index]} style={{ display: 'flex' }}>
                    <div>(====</div>
                    <div style={{ border: '1px solid black' }}>{val}</div>
                    <div>====)</div>
                  </div>
                );
              })
            : null}
        </div>
        <div style={{ width: '15%' }}>End of the Queue</div>
      </div>
    </div>
  );
}

export default QueueVisualizer;
