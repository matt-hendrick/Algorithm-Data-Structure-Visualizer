import React, { useState } from 'react';

// Data Structures
import BinaryTree from '../../dataStructures/BinaryTree/BinaryTree';

function BinaryTreeVisualizer() {
  const [newNodeValue, setNewNodeValue] = useState(0);
  const [tree, setTree] = useState(null);

  const insertNode = () => {
    const intNodeVal = parseInt(newNodeValue);
    if (Number.isInteger(intNodeVal)) {
      if (!tree) {
        let tempTree = new BinaryTree();
        tempTree.insert(intNodeVal);
        setTree(tempTree);
      } else {
        let tempTree = new BinaryTree(tree.root);
        tempTree.insert(intNodeVal);
        setTree(tempTree);
      }
    }
  };

  const updateNewNodeValue = (event) => {
    const updatedNodeValue = event.target.value;
    setNewNodeValue(updatedNodeValue);
  };

  console.log('Tree', tree);

  return (
    <div>
      <input
        value={newNodeValue}
        placeholder="Enter a new Node value"
        onChange={updateNewNodeValue}
      />
      <button onClick={insertNode}>Insert Node</button>
    </div>
  );
}

export default BinaryTreeVisualizer;
