import React, { useState } from 'react';
import { LinkedList, LinkedListNode } from '../../dataStructures/LinkedList';
import MyButton from '../../components/MyButton/MyButton';

function LinkedListVisualizer() {
  const [list, setList] = useState(null);
  const [arr, setArr] = useState(null);
  const [addValue, setAddValue] = useState('');

  const updateAddNodeValue = (event) => {
    const updatedValue = event.target.value;
    setAddValue(updatedValue);
  };

  const submitAddFirst = () => {
    if (addValue !== '') {
      if (!list) {
        const newNode = new LinkedListNode(addValue);
        let newList = new LinkedList(newNode);
        setList(newList);
        setArr(newList.toArray());
        setAddValue('');
      } else {
        let newList = new LinkedList(list.head);
        newList.addFirst(addValue);
        setList(newList);
        setArr(newList.toArray());
        setAddValue('');
      }
    }
  };

  const submitAddLast = () => {
    if (addValue !== '') {
      if (!list) {
        const newNode = new LinkedListNode(addValue);
        let newList = new LinkedList(newNode);
        setList(newList);
        setArr(newList.toArray());
        setAddValue('');
      } else {
        let newList = new LinkedList(list.head);
        newList.addLast(addValue);
        setList(newList);
        setArr(newList.toArray());
        setAddValue('');
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
      <div
        style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}
      >
        <input
          onChange={updateAddNodeValue}
          value={addValue}
          placeholder="Enter a new node value"
        />
        <MyButton onClick={submitAddFirst}>Add to Front of List</MyButton>
        <MyButton onClick={submitAddLast}>Add to End of List</MyButton>
        <MyButton onClick={removeFirst}>Remove from Front of List</MyButton>
        <MyButton onClick={removeLast}>Remove from End of List</MyButton>
        <MyButton onClick={reverseList}>Reverse List</MyButton>
      </div>
      {arr ? (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
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
      ) : null}
    </div>
  );
}

export default LinkedListVisualizer;
