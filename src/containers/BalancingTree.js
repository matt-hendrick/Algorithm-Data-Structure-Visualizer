import React from 'react';
import AVLTree from '../data-structures/AVLTree';

function getRandomInt(min = 1, max = 10) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function BalancingTree() {
  let arrLength = getRandomInt(2, 13);
  let arr = [];
  for (let i = 0; i < arrLength; i++) arr.push(getRandomInt(25));
  let avlTree = new AVLTree();
  arr.forEach((item) => avlTree.add(item));
  console.log(avlTree);
  return avlTree.toArray().map((item, index) => {
    if (item === null) return null;
    if (index === avlTree.size) {
      return <div key={item}>{item}</div>;
    } else {
      return <div key={item}>{item},</div>;
    }
  });
}

export default BalancingTree;
