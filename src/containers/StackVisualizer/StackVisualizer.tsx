import React, { useState } from 'react';
import './StackVisualizer.css';

// Data Structures
import Stack from '../../dataStructures/Stack/Stack';

// Components
import MyButton from '../../components/MyButton/MyButton';
import Alert from '../../components/Alert/Alert';
import Input from '../../components/Input/Input';

// Utility
import { getRandomInt } from '../../utility/utilityFunctions';

function StackVisualizer() {
  const [stack, setStack] = useState<Stack | null>(null);
  const [arr, setArr] = useState<string[] | null>(null);
  const [newNodeValue, setNewNodeValue] = useState('');
  const [stackOverFlow, setStackOverflow] = useState(false);

  const addNode = () => {
    setStackOverflow(false);
    if (newNodeValue !== '') {
      if (!stack || !stack.first) {
        let newStack = new Stack();
        newStack.add(newNodeValue);
        setStack(newStack);
        setArr(newStack.toArray() as string[]);
        setNewNodeValue('');
      }
      // if user attempts to add a 15th node, set flag for stack overflow alert and reset state
      else if ((stack.toArray()?.length as number) >= 14) {
        setStackOverflow(true);
        setStack(null);
        setArr(null);
        setNewNodeValue('');
      } else {
        let newStack = new Stack(stack.first, stack.last);
        newStack.add(newNodeValue);
        setStack(newStack);
        setArr(newStack.toArray() as string[]);
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
      setArr(newStack.toArray() as string[]);
    }
  };

  const clearStack = () => {
    if (stack) {
      setStack(null);
      setArr(null);
      setStackOverflow(false);
    }
  };

  const generateRandomStack = () => {
    setStackOverflow(false);
    let newStack = new Stack();
    let stackMaxHeight = getRandomInt(1, 13);
    for (let i = 0; i < stackMaxHeight; i++) {
      newStack.add(getRandomInt(1, 100));
    }
    setStack(newStack);
    setArr(newStack.toArray() as string[]);
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
      {stackOverFlow ? <Alert /> : null}
      <div className="button-row">
        <Input
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
        <MyButton onClick={generateRandomStack}>Generate Random Stack</MyButton>
      </div>
      {arr ? (
        <div className="stack-display-container">
          <div className="stack-empty-border-column"></div>
          <div className="stack-column">
            {arr.map((val, index) => {
              return (
                <div key={val + index + Math.random()} className="stack-node">
                  <div className="stack-val">{val}</div>
                </div>
              );
            })}
          </div>
          <div className="stack-empty-border-column"></div>
        </div>
      ) : (
        <h6 className="enter-node-prompt-margin-top">
          Add a new Node to visualize a new Stack
        </h6>
      )}
    </div>
  );
}

export default StackVisualizer;
