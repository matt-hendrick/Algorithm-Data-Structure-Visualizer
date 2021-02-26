import React, { useState } from 'react';
import * as classes from './StackVisualizer.module.css';

// Components
import Stack from '../../dataStructures/Stack/Stack';
import MyButton from '../../components/MyButton/MyButton';
import Alert from '../../components/Alert/Alert';

function StackVisualizer() {
  const [stack, setStack] = useState(null);
  const [arr, setArr] = useState(null);
  const [newNodeValue, setNewNodeValue] = useState('');
  const [stackOverFlow, setStackOverflow] = useState(false);

  const updateNodeValue = (event) => {
    const updatedValue = event.target.value;
    setNewNodeValue(updatedValue);
  };

  const addNode = () => {
    setStackOverflow(false);
    if (newNodeValue !== '') {
      if (!stack) {
        let newStack = new Stack();
        newStack.add(newNodeValue);
        setStack(newStack);
        setArr(newStack.toArray());
        setNewNodeValue('');
      } else if (stack.toArray().length >= 14) {
        setStackOverflow(true);
        setStack(null);
        setArr(null);
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
    setStackOverflow(false);
    if (stack?.first) {
      let newStack = new Stack(stack.first, stack.last);
      newStack.remove();
      setStack(newStack);
      setArr(newStack.toArray());
    }
  };

  return (
    <div>
      {stackOverFlow ? <Alert /> : null}
      <div className={classes.ButtonRow}>
        <input
          onChange={updateNodeValue}
          value={newNodeValue}
          placeholder="Enter a new node value"
        />
        <MyButton onClick={addNode}>Add to Stack</MyButton>
        <MyButton onClick={removeNode}>Remove from Stack</MyButton>
      </div>
      {arr ? (
        <div className={classes.StackDisplayContainer}>
          <div className={classes.EmptyBorderColumn}></div>
          <div className={classes.StackColumn}>
            {arr.map((val, index) => {
              return (
                <div key={[val, index]} className={classes.StackNode}>
                  <div className={classes.StackVal}>{val}</div>
                </div>
              );
            })}{' '}
          </div>
          <div className={classes.EmptyBorderColumn}></div>
        </div>
      ) : null}
    </div>
  );
}

export default StackVisualizer;
