import React, { useState } from 'react';

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

  console.log('Tree', tree, arr);

  return (
    <div>
      <div>
        <input
          value={newNodeValue}
          placeholder="Enter a new Node value"
          onChange={updateNewNodeValue}
        />
        <button onClick={insertNode}>Insert Node</button>
      </div>
      {arr ? arr.map((item) => <div>{item}</div>) : null}
    </div>
  );
}

export default BinaryTreeVisualizer;
