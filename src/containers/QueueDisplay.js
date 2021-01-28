import React, { useState } from 'react';

import Queue from '../data-structures/Queue';

import Input from '../components/Input';

let queue = new Queue();

function QueueDisplay() {
  const [userValue, setUserValue] = useState('');
  const [queueDisplayArray, setQueueDisplayArray] = useState([]);

  const handleUserValueChange = (event) => {
    const updatedUserValue = event.target.value;
    setUserValue(updatedUserValue);
  };

  const handleAddToQueue = (event) => {
    event.preventDefault();
    queue.enqueue(userValue);
    setQueueDisplayArray([userValue, ...queueDisplayArray]);
  };

  const handleRemoveFromQueue = () => {
    queue.dequeue();
    let tempQueueArr = [...queueDisplayArray];
    tempQueueArr.pop();
    setQueueDisplayArray(tempQueueArr);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
      }}
    >
      {queue.size >= 1 ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
          }}
        >
          {queue.size > 1 ? <div>{queue.items.last.value}</div> : null}
          {queueDisplayArray.map((item, index) => {
            if (index !== 0 && index !== queue.size - 1) {
              return <div key={item}>{item}</div>;
            } else return null;
          })}
          <div>{queue.items.first.value}</div>
        </div>
      ) : null}
      <form onSubmit={handleAddToQueue}>
        <Input
          value={userValue}
          onChange={handleUserValueChange}
          placeholder="Value"
        />
        <button>Add to Queue</button>
      </form>
      <button onClick={handleRemoveFromQueue}>Remove from Queue</button>
    </div>
  );
}

export default QueueDisplay;
