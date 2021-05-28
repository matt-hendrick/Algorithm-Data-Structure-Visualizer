import React, { useState } from 'react';

import './BinaryTreeVisualizer.scss';

// Components
import MyButton from '../../components/MyButton/MyButton';
import Input from '../../components/Input/Input';

// Data Structures
import BinaryTree from '../../dataStructures/BinaryTree/BinaryTree';

// Utility
import { getRandomInt } from '../../utility/utilityFunctions';

function BinaryTreeVisualizer() {
  const [newNodeValue, setNewNodeValue] = useState<number | '' | '-'>('');
  const [tree, setTree] = useState<BinaryTree | null>(null);
  const [arr, setArr] = useState<(string | number)[][] | null>(null);

  const insertNode = () => {
    if (!tree) {
      let tempTree = new BinaryTree();
      tempTree.insert(newNodeValue as number);
      setTree(tempTree);
      setArr(tempTree.toLevelOrderArray() as (string | number)[][]);
      setNewNodeValue('');
    } else {
      let tempTree = new BinaryTree(tree.root);
      tempTree.insert(newNodeValue as number);
      setTree(tempTree);
      setArr(tempTree.toLevelOrderArray() as (string | number)[][]);
      setNewNodeValue('');
    }
  };

  const removeNode = () => {
    if (tree?.root) {
      let tempTree = new BinaryTree(tree.root);
      tempTree.remove(newNodeValue as number);
      setTree(tempTree);
      setArr(tempTree.toLevelOrderArray() as (string | number)[][]);
      setNewNodeValue('');
    }
  };

  const invertTree = () => {
    if (tree) {
      let tempTree = new BinaryTree(tree.root);
      tempTree.invertTree();
      setTree(tempTree);
      setArr(tempTree.toLevelOrderArray() as (string | number)[][]);
    }
  };

  const clearTree = () => {
    if (tree) {
      setTree(null);
      setArr(null);
    }
  };

  const generateRandomTree = () => {
    let newTree = new BinaryTree();
    let treeMaxSize = getRandomInt(1, 10);
    for (let i = 0; i < treeMaxSize; i++) {
      newTree.insert(getRandomInt(1, 100));
    }
    setTree(newTree);
    setArr(newTree.toLevelOrderArray() as (string | number)[][]);
  };

  const updateNewNodeValue = (event: React.ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    if (target) {
      if (Number.isInteger(parseInt(target.value))) {
        const updatedNodeValue = parseInt(target.value);
        setNewNodeValue(updatedNodeValue);
      } else if (target.value === '' || target.value === '-') {
        const updatedNodeValue = target.value;
        setNewNodeValue(updatedNodeValue);
      } else return;
    }
  };

  const isNewNodeValueInTree = () => {
    if (
      arr &&
      arr?.length > 0 &&
      arr.flat().includes(parseInt(newNodeValue as string))
    )
      return true;
    else return false;
  };

  return (
    <div>
      <div className="button-row">
        <Input
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
        <MyButton
          onClick={invertTree}
          disabled={!tree || !!(arr && arr?.length < 2)}
        >
          Invert Tree
        </MyButton>
        <MyButton
          onClick={clearTree}
          disabled={!tree || !!(arr && arr?.length < 1)}
        >
          Clear Tree
        </MyButton>
        <MyButton onClick={generateRandomTree}>Generate Random Tree</MyButton>
      </div>
      <div className="tree">
        {arr && arr?.length > 0 ? (
          arr.map((item, index) => (
            <ul key={item.toString() + index}>
              {item.map((subitem) => (
                <li
                  key={subitem.toString() + index + item}
                  style={{ width: `${index * 30 + 10}%` }}
                >
                  <button disabled>{subitem}</button>
                </li>
              ))}
            </ul>
          ))
        ) : (
          <h6 className="enter-node-prompt-margin-top">
            Add a new Node to visualize a new Binary Tree
          </h6>
        )}
      </div>
    </div>
  );
}

export default BinaryTreeVisualizer;
