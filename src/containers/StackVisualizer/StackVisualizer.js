import React, { useState } from 'react';
import * as classes from './StackVisualizer.module.css';

// Data Structures
import Stack from '../../dataStructures/Stack/Stack';

// Components
import MyButton from '../../components/MyButton/MyButton';
import Alert from '../../components/Alert/Alert';

function StackVisualizer() {
  const [stack, setStack] = useState(null);
  const [arr, setArr] = useState(null);
  const [newNodeValue, setNewNodeValue] = useState('');
  const [stackOverFlow, setStackOverflow] = useState(false);

  const addNode = () => {
    setStackOverflow(false);
    if (newNodeValue !== '') {
      if (!stack || !stack.first) {
        let newStack = new Stack();
        newStack.add(newNodeValue);
        setStack(newStack);
        setArr(newStack.toArray());
        setNewNodeValue('');
      }
      // if user attempts to add a 15th node, set flag for stack overflow alert and reset state
      else if (stack.toArray().length >= 14) {
        setStackOverflow(true);
        setStack(null);
        setArr(null);
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
    setStackOverflow(false);
    if (stack?.first) {
      let newStack = new Stack(stack.first, stack.last);
      newStack.remove();
      setStack(newStack);
      setArr(newStack.toArray());
    }
  };

  const clearStack = () => {
    if (stack) {
      setStack(null);
      setArr(null);
      setStackOverflow(false);
    }
  };

  const updateNodeValue = (event) => {
    const updatedValue = event.target.value;
    setNewNodeValue(updatedValue);
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
        <MyButton onClick={addNode} disabled={!newNodeValue}>
          Add to Stack
        </MyButton>
        <MyButton onClick={removeNode} disabled={!arr}>
          Remove from Stack
        </MyButton>
        <MyButton onClick={clearStack} disabled={!arr}>
          Clear Stack
        </MyButton>
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
            })}
          </div>
          <div className={classes.EmptyBorderColumn}></div>
        </div>
      ) : (
        <h6 className={classes.EnterNodePrompt}>
          Add a new Node to visualize a new Stack
        </h6>
      )}
    </div>
  );
}

export default StackVisualizer;
