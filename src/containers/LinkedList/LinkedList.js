import React, { useState } from 'react';
import { LinkedList, LinkedListNode } from '../../dataStructures/LinkedList';

function LinkedListVisualizer() {
  const [list, setList] = useState(null);
  const [arr, setArr] = useState(null);
  const [addValue, setAddValue] = useState('');

  const updateAddNodeValue = (event) => {
    const updatedValue = event.target.value;
    setAddValue(updatedValue);
  };

  const submitAddFirst = (event) => {
    event.preventDefault();
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

  const submitAddLast = (event) => {
    event.preventDefault();
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

  const removeFirst = (event) => {
    event.preventDefault();
    if (list) {
      let newList = new LinkedList(list.head);
      newList.removeFirst();
      setList(newList);
      setArr(newList.toArray());
    }
  };

  const removeLast = (event) => {
    event.preventDefault();
    if (list) {
      let newList = new LinkedList(list.head);
      newList.removeLast();
      setList(newList);
      setArr(newList.toArray());
      setAddValue('');
    }
  };

  return (
    <div>
      <form>
        <input onChange={updateAddNodeValue} value={addValue} />
        <button onClick={submitAddFirst}>Add to Front of List</button>
        <button onClick={submitAddLast}>Add to End of List</button>
      </form>
      <form>
        <button onClick={removeFirst}>Remove from Front of List</button>
        <button onClick={removeLast}>Remove from End of List</button>
      </form>
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
