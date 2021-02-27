import React, { useState } from 'react';
import * as classes from './LinkedListVisualizer.module.css';

// Data Structures
import LinkedList from '../../dataStructures/LinkedList/LinkedList';
import Node from '../../dataStructures/Node/Node';

// Components
import MyButton from '../../components/MyButton/MyButton';

function LinkedListVisualizer() {
  const [list, setList] = useState(null);
  const [arr, setArr] = useState(null);
  const [newNodeValue, setNewNodeValue] = useState('');

  const updateAddNodeValue = (event) => {
    const updatedValue = event.target.value;
    setNewNodeValue(updatedValue);
  };

  const addFirst = () => {
    console.log('ran');
    if (newNodeValue !== '') {
      if (!list) {
        const newNode = new Node(newNodeValue);
        let newList = new LinkedList(newNode);
        setList(newList);
        setArr(newList.toArray());
        setNewNodeValue('');
      } else {
        let newList = new LinkedList(list.head);
        newList.addFirst(newNodeValue);
        setList(newList);
        setArr(newList.toArray());
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
        setArr(newList.toArray());
        setNewNodeValue('');
      } else {
        let newList = new LinkedList(list.head);
        newList.addLast(newNodeValue);
        setList(newList);
        setArr(newList.toArray());
        setNewNodeValue('');
      }
    }
  };

  const removeFirst = () => {
    if (list) {
      let newList = new LinkedList(list.head);
      newList.removeFirst();
      setList(newList);
      setArr(newList.toArray());
    }
  };

  const removeLast = () => {
    if (list) {
      let newList = new LinkedList(list.head);
      newList.removeLast();
      setList(newList);
      setArr(newList.toArray());
    }
  };

  const reverseList = () => {
    if (list) {
      let newList = new LinkedList(list.head);
      newList.reverseList();
      setList(newList);
      setArr(newList.toArray());
    }
  };

  return (
    <div>
      <div className={classes.ButtonRow}>
        <input
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
      </div>
      <div className={classes.LinkedListContainer}>
        <div className={classes.BorderColumn}>List Start</div>
        <div className={classes.LinkedListColumn}>
          {arr ? (
            arr.map((val, index) => {
              return (
                <div key={[val, index]} className={classes.LinkedListNode}>
                  <div className={classes.LinkedListValWrapper}>
                    <div className={classes.LinkedListVal}>{val}</div>
                  </div>
                  {index !== arr.length - 1 ? (
                    <div className={classes.LinkedListArrowShaft}></div>
                  ) : null}
                  {index !== arr.length - 1 ? (
                    <div className={classes.LinkedListArrowHead}></div>
                  ) : null}
                </div>
              );
            })
          ) : (
            <h6 className={classes.EnterNodePrompt}>
              Add a new Node to visualize a new Linked List
            </h6>
          )}
        </div>
        <div className={classes.BorderColumn}>List End</div>
      </div>
    </div>
  );
}

export default LinkedListVisualizer;
