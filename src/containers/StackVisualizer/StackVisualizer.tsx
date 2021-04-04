import React, { useState } from 'react';
import './StackVisualizer.css';

// Data Structures
import Stack from '../../dataStructures/Stack/Stack';

// Components
import MyButton from '../../components/MyButton/MyButton';
import Alert from '../../components/Alert/Alert';
import Input from '../../components/Input/Input';

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
      <div className="ButtonRow">
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
      </div>
      {arr ? (
        <div className="StackDisplayContainer">
          <div className="StackEmptyBorderColumn"></div>
          <div className="StackColumn">
            {arr.map((val, index) => {
              return (
                <div key={val + index + Math.random()} className="StackNode">
                  <div className="StackVal">{val}</div>
                </div>
              );
            })}
          </div>
          <div className="StackEmptyBorderColumn"></div>
        </div>
      ) : (
        <h6 className="StackEnterNodePrompt">
          Add a new Node to visualize a new Stack
        </h6>
      )}
    </div>
  );
}

export default StackVisualizer;
