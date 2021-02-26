import React, { useState } from 'react';
import Stack from '../../dataStructures/Stack/Stack';
import MyButton from '../../components/MyButton/MyButton';

function StackVisualizer() {
  const [stack, setStack] = useState(null);
  const [arr, setArr] = useState(null);
  const [newNodeValue, setNewNodeValue] = useState('');

  const updateNodeValue = (event) => {
    const updatedValue = event.target.value;
    setNewNodeValue(updatedValue);
  };

  const addNode = () => {
    if (newNodeValue !== '') {
      if (!stack) {
        let newStack = new Stack();
        newStack.add(newNodeValue);
        setStack(newStack);
        setArr(newStack.toArray());
        setNewNodeValue('');
      } else {
        let newStack = new Stack(stack.first, stack.last);
        newStack.add(newNodeValue);
        setStack(newStack);
        setArr(newStack.toArray());
        setNewNodeValue('');
      }
    }
  };

  const removeNode = () => {
    if (stack.first) {
      let newStack = new Stack(stack.first, stack.last);
      newStack.remove();
      setStack(newStack);
      setArr(newStack.toArray());
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
        <MyButton onClick={addNode}>Add to Stack</MyButton>
        <MyButton onClick={removeNode}>Remove from Stack</MyButton>
      </div>
      {arr ? (
        <div
          style={{
            display: 'flex',
            height: '65vh',
          }}
        >
          <div style={{ width: '15%' }}></div>
          <div
            style={{
              width: '70%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}
          >
            {arr.map((val, index) => {
              return (
                <div key={[val, index]} style={{ display: 'flex' }}>
                  <div>(====</div>
                  <div style={{ border: '1px solid black' }}>{val}</div>
                  <div>====)</div>
                </div>
              );
            })}{' '}
          </div>
          <div style={{ width: '15%' }}></div>
        </div>
      ) : null}
    </div>
  );
}

export default StackVisualizer;
