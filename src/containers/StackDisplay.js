import React, { useState } from 'react';

import Stack from '../data-structures/Stack';

import Input from '../components/Input';

let stack = new Stack();

function StackDisplay() {
  const [userValue, setUserValue] = useState('');
  const [stackDisplayArray, setStackDisplayArray] = useState([]);

  const handleUserValueChange = (event) => {
    const updatedUserValue = event.target.value;
    setUserValue(updatedUserValue);
  };

  const handleAddToStack = (event) => {
    event.preventDefault();
    stack.add(userValue);
    setStackDisplayArray([userValue, ...stackDisplayArray]);
  };

  const handleRemoveFromStack = () => {
    stack.remove();
    let tempStackArr = [...stackDisplayArray];
    tempStackArr.shift();
    setStackDisplayArray(tempStackArr);
  };

  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',
        }}
      >
        {stack.size >= 1 ? (
          <div>
            {stack.size > 1 ? <div>{stack.items.last.value}</div> : null}
            {stackDisplayArray.map((item, index) => {
              if (index !== 0 && index !== stack.size - 1) {
                return <div key={item}>{item}</div>;
              } else return null;
            })}
            <div>{stack.items.first.value}</div>
          </div>
        ) : null}
        <form onSubmit={handleAddToStack}>
          <Input
            value={userValue}
            onChange={handleUserValueChange}
            placeholder="Value"
          />
          <button>Add to Stack</button>
        </form>
        <button onClick={handleRemoveFromStack}>Remove from Stack</button>
      </div>
    </div>
  );
}

export default StackDisplay;
