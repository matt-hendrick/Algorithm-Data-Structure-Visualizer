import React, { useState } from 'react';
import { LinkedList } from '../../dataStructures/LinkedList/LinkedList';
import { Node } from '../../dataStructures/Node/Node';
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
      <div
        style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}
      >
        <input
          onChange={updateAddNodeValue}
          value={newNodeValue}
          placeholder="Enter a new node value"
        />
        <MyButton onClick={addFirst}>Add to Front of the List</MyButton>
        <MyButton onClick={addLast}>Add to End of the List</MyButton>
        <MyButton onClick={removeFirst}>Remove from Front of the List</MyButton>
        <MyButton onClick={removeLast}>Remove from End of the List</MyButton>
        <MyButton onClick={reverseList}>Reverse the List</MyButton>
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
