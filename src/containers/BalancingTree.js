import React, { useState } from 'react';

import AVLTree from '../data-structures/AVLTree';

import CircularNode from '../components/CircularNode';
import Input from '../components/Input';

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

const BalancingTree = () => {
  const [max, setMax] = useState(10);

  const handleMaxChange = (event) => {
    const updatedMax = event.target.value;
    setMax(updatedMax);
  };

  let arr = [];
  for (let i = 0; i < max; i++) arr.push(getRandomInt(1000));
  let avlTree = new AVLTree();
  arr.forEach((item) => avlTree.add(item));
  return (
    <div>
      <Input
        value={max}
        onChange={handleMaxChange}
        placeholder="Set a maximum number of tree nodes"
      />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {avlTree.toArray().map((item, index) => {
          if (item === null) return null;
          else if (index === 0) {
            return (
              <div style={{ justifyContent: 'center' }}>
                <CircularNode key={item}>{item}</CircularNode>
              </div>
            );
          } else if (index > 0 && index < 3)
            return (
              <div style={{ justifyContent: 'space-around' }}>
                <CircularNode key={item}>{item}</CircularNode>
              </div>
            );
        })}
      </div>
    </div>
  );
};

export default BalancingTree;
