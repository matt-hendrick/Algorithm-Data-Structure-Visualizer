import React, { useState } from 'react';
import './LinkedListVisualizer.css';

// Data Structures
import LinkedList from '../../dataStructures/LinkedList/LinkedList';
import Node from '../../dataStructures/Node/Node';

// Components
import MyButton from '../../components/MyButton/MyButton';
import Input from '../../components/Input/Input';

function LinkedListVisualizer() {
  const [list, setList] = useState<LinkedList | null>(null);
  const [arr, setArr] = useState<string[] | null>(null);
  const [newNodeValue, setNewNodeValue] = useState('');

  const addFirst = () => {
    if (newNodeValue !== '') {
      if (!list) {
        const newNode = new Node(newNodeValue);
        let newList = new LinkedList(newNode);
        setList(newList);
        setArr(newList.toArray() as string[]);
        setNewNodeValue('');
      } else {
        let newList = new LinkedList(list.head);
        newList.addFirst(newNodeValue);
        setList(newList);
        setArr(newList.toArray() as string[]);
        setNewNodeValue('');
      }
    }
  };

  const addLast = () => {
    if (newNodeValue !== '') {
      if (!list) {
        const newNode = new Node(newNodeValue);
        let newList = new LinkedList(newNode);
        setList(newList);
        setArr(newList.toArray() as string[]);
        setNewNodeValue('');
      } else {
        let newList = new LinkedList(list.head);
        newList.addLast(newNodeValue);
        setList(newList);
        setArr(newList.toArray() as string[]);
        setNewNodeValue('');
      }
    }
  };

  const removeFirst = () => {
    if (list) {
      let newList = new LinkedList(list.head);
      newList.removeFirst();
      setList(newList);
      setArr(newList.toArray() as string[]);
    }
  };

  const removeLast = () => {
    if (list) {
      let newList = new LinkedList(list.head);
      newList.removeLast();
      setList(newList);
      setArr(newList.toArray() as string[]);
    }
  };

  const reverseList = () => {
    if (list) {
      let newList = new LinkedList(list.head);
      newList.reverseList();
      setList(newList);
      setArr(newList.toArray() as string[]);
    }
  };

  const clearList = () => {
    if (list) {
      setList(null);
      setArr(null);
    }
  };

  const updateAddNodeValue = (event: React.ChangeEvent) => {
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
          onChange={updateAddNodeValue}
          value={newNodeValue}
          placeholder="Enter a new node value"
        />
        <MyButton onClick={addFirst} disabled={!newNodeValue}>
          Add to Front of the List
        </MyButton>
        <MyButton onClick={addLast} disabled={!newNodeValue}>
          Add to End of the List
        </MyButton>
        <MyButton onClick={removeFirst} disabled={!arr}>
          Remove from Front of the List
        </MyButton>
        <MyButton onClick={removeLast} disabled={!arr}>
          Remove from End of the List
        </MyButton>
        <MyButton onClick={reverseList} disabled={!arr}>
          Reverse the List
        </MyButton>
        <MyButton onClick={clearList} disabled={!arr}>
          Clear List
        </MyButton>
      </div>
      <div className="linked-list-container">
        <div className="linked-list-border-column">List Start</div>
        <div className="linked-list-column">
          {arr ? (
            arr.map((val, index) => {
              return (
                <div
                  key={val + index + Math.random()}
                  className="linked-list-node"
                >
                  <div className="linked-list-val-wrapper">
                    <div className="linked-list-val">{val}</div>
                  </div>
                  {index !== arr.length - 1 ? (
                    <div className="linked-list-arrow-shaft"></div>
                  ) : null}
                  {index !== arr.length - 1 ? (
                    <div className="linked-list-arrow-head"></div>
                  ) : null}
                </div>
              );
            })
          ) : (
            <h6 className="enter-node-prompt-no-margin">
              Add a new Node to visualize a new Linked List
            </h6>
          )}
        </div>
        <div className="linked-list-border-column">List End</div>
      </div>
    </div>
  );
}

export default LinkedListVisualizer;
