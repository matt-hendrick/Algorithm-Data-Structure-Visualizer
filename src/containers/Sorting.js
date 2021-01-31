import React, { useState, useEffect, forwardRef } from 'react';
import { shuffle } from '../algorithms/sortingUtilityFunctions';
import FlipMove from 'react-flip-move';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function Sorting() {
  const [arr, setArr] = useState();

  useEffect(() => {
    generateArray();
  }, []);

  const generateArray = () => {
    let tempArr = [];
    for (let i = 0; i < 25; i++) {
      tempArr.push([getRandomInt(1, 100), i]);
    }
    setArr(tempArr);
  };

  const handleSort = () => {
    let tempArr = [...arr];
    tempArr.sort((a, b) => a[0] - b[0]);
    setArr(tempArr);
  };

  const handleShuffle = () => {
    let tempArr = [...arr];
    shuffle(tempArr);
    setArr(tempArr);
  };

  const ItemCard = forwardRef((props, ref) => (
    <div ref={ref}>{props.children}</div>
  ));

  return (
    <div>
      <div>
        <div>Select Placeholder</div>
        <button onClick={handleSort}>Sort!</button>
        <button onClick={handleShuffle}>Shuffle!</button>
        <button onClick={generateArray}>Generate a New Array!</button>
        <button>Next Step</button>
        <button>Previous Step</button>
      </div>
      <div>Array</div>

      {arr ? (
        <FlipMove>
          {arr.map((item) => (
            <ItemCard key={item[1]}>{item[0]}</ItemCard>
          ))}
        </FlipMove>
      ) : null}
    </div>
  );
}

export default Sorting;
