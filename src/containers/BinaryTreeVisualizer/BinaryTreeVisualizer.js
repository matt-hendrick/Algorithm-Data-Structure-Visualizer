import React, { useState } from 'react';

import * as classes from './BinaryTreeVisualizer.module.scss';

// Components
import MyButton from '../../components/MyButton/MyButton';

// Data Structures
import BinaryTree from '../../dataStructures/BinaryTree/BinaryTree';

function BinaryTreeVisualizer() {
  const [newNodeValue, setNewNodeValue] = useState('');
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
        setNewNodeValue('');
      } else {
        let tempTree = new BinaryTree(tree.root);
        tempTree.insert(intNodeVal);
        setTree(tempTree);
        setArr(tempTree.toLevelOrderArray());
        setNewNodeValue('');
      }
    }
  };

  const removeNode = () => {
    const intNodeVal = parseInt(newNodeValue);
    if (newNodeValue) {
      let tempTree = new BinaryTree(tree.root);
      tempTree.remove(intNodeVal);
      setTree(tempTree);
      setArr(tempTree.toLevelOrderArray());
      setNewNodeValue('');
    }
  };

  const invertTree = () => {
    if (tree) {
      let tempTree = new BinaryTree(tree.root);
      tempTree.invertTree();
      setTree(tempTree);
      setArr(tempTree.toLevelOrderArray());
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
          Insert Specified Node
        </MyButton>
        <MyButton onClick={removeNode} disabled={!newNodeValue || !tree}>
          Remove Specified Node
        </MyButton>
        <MyButton onClick={invertTree} disabled={!tree}>
          Invert Tree
        </MyButton>
      </div>
      <div className={classes.Tree}>
        {arr.length > 0 ? (
          arr.map((item, index) => (
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
        ) : (
          <h6 className={classes.EnterNodePrompt}>
            Add a new Node to visualize a new Binary Tree
          </h6>
        )}
      </div>
    </div>
  );
}

export default BinaryTreeVisualizer;
