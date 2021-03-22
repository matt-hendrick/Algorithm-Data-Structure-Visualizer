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
    if (!tree) {
      let tempTree = new BinaryTree();
      tempTree.insert(newNodeValue);
      setTree(tempTree);
      setArr(tempTree.toLevelOrderArray());
      setNewNodeValue('');
    } else {
      let tempTree = new BinaryTree(tree.root);
      tempTree.insert(newNodeValue);
      setTree(tempTree);
      setArr(tempTree.toLevelOrderArray());
      setNewNodeValue('');
    }
  };

  const removeNode = () => {
    let tempTree = new BinaryTree(tree.root);
    tempTree.remove(newNodeValue);
    setTree(tempTree);
    setArr(tempTree.toLevelOrderArray());
    setNewNodeValue('');
  };

  const invertTree = () => {
    if (tree) {
      let tempTree = new BinaryTree(tree.root);
      tempTree.invertTree();
      setTree(tempTree);
      setArr(tempTree.toLevelOrderArray());
    }
  };

  const clearTree = () => {
    if (tree) {
      setTree(null);
      setArr(null);
    }
  };

  const updateNewNodeValue = (event) => {
    if (Number.isInteger(parseInt(event.target.value))) {
      const updatedNodeValue = parseInt(event.target.value);
      setNewNodeValue(updatedNodeValue);
    } else if (event.target.value === '' || event.target.value === '-') {
      const updatedNodeValue = event.target.value;
      setNewNodeValue(updatedNodeValue);
    } else return;
  };

  const isNewNodeValueInTree = () => {
    if (arr?.length > 0 && arr.flat().includes(parseInt(newNodeValue)))
      return true;
    else return false;
  };

  return (
    <div>
      <div className={classes.ButtonRow}>
        <input
          value={newNodeValue}
          placeholder="Enter a new Node value"
          onChange={updateNewNodeValue}
        />
        <MyButton
          onClick={insertNode}
          disabled={!newNodeValue || isNewNodeValueInTree()}
        >
          Insert Specified Node
        </MyButton>
        <MyButton
          onClick={removeNode}
          disabled={!newNodeValue || !tree || !isNewNodeValueInTree()}
        >
          Remove Specified Node
        </MyButton>
        <MyButton onClick={invertTree} disabled={!tree || arr?.length < 2}>
          Invert Tree
        </MyButton>
        <MyButton onClick={clearTree} disabled={!tree || arr?.length < 1}>
          Clear Tree
        </MyButton>
      </div>
      <div className={classes.Tree}>
        {arr?.length > 0 ? (
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
