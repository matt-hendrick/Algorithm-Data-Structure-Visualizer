import React, { useState } from 'react';

import * as classes from './BinaryTreeVisualizer.module.scss';

// Components
import MyButton from '../../components/MyButton/MyButton';

// Data Structures
import BinaryTree from '../../dataStructures/BinaryTree/BinaryTree';

function BinaryTreeVisualizer() {
  const [newNodeValue, setNewNodeValue] = useState(0);
  const [tree, setTree] = useState(null);
  const [arr, setArr] = useState(null);

  const insertNode = () => {
    const intNodeVal = parseInt(newNodeValue);
    if (Number.isInteger(intNodeVal)) {
      if (!tree) {
        let tempTree = new BinaryTree();
        tempTree.insert(intNodeVal);
        setTree(tempTree);
        setArr(tempTree.toLevelOrderArray());
      } else {
        let tempTree = new BinaryTree(tree.root);
        tempTree.insert(intNodeVal);
        setTree(tempTree);
        setArr(tempTree.toLevelOrderArray());
      }
    }
  };

  const updateNewNodeValue = (event) => {
    const updatedNodeValue = event.target.value;
    setNewNodeValue(updatedNodeValue);
  };

  return (
    <div>
      <div className={classes.ButtonRow}>
        <input
          value={newNodeValue}
          placeholder="Enter a new Node value"
          onChange={updateNewNodeValue}
        />
        <MyButton onClick={insertNode} disabled={!newNodeValue}>
          Insert Node
        </MyButton>
      </div>
      <div className={classes.Tree}>
        {arr
          ? arr.map((item, index) => (
              <ul key={item + index}>
                {item.map((subitem) => (
                  <li
                    key={subitem + index + item}
                    style={{ width: `${index * 30 + 10}%` }}
                  >
                    <button disabled>{subitem}</button>
                  </li>
                ))}
              </ul>
            ))
          : null}
      </div>
    </div>
  );
}

export default BinaryTreeVisualizer;
