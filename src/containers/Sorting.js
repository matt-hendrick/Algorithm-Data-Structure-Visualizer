import React, { useState, useEffect, forwardRef } from 'react';
import { shuffle, swap } from '../algorithms/sortingUtilityFunctions';
import FlipMove from 'react-flip-move';
import useInterval from '../utility/utilityFunctions';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function Sorting() {
  const [arr, setArr] = useState();
  const [bubbleSortSteps, setBubbleSortSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    generateArray();
  }, []);

  useInterval(() => {
    if (bubbleSortSteps && currentStep < bubbleSortSteps.length && isRunning) {
      let tempArr = [...arr];
      if (bubbleSortSteps[currentStep] !== null) {
        swap(
          tempArr,
          bubbleSortSteps[currentStep][0],
          bubbleSortSteps[currentStep][1]
        );
        setArr(tempArr);
      }
      setCurrentStep(currentStep + 1);
      console.log('ran', tempArr, currentStep);
    }
  }, 100);

  const generateArray = () => {
    let tempArr = [];
    for (let i = 0; i < 25; i++) {
      tempArr.push([getRandomInt(1, 100), i]);
    }
    setArr(tempArr);
    setIsRunning(false);
    setCurrentStep(0);
  };

  const handleSort = () => {
    let tempArr = [...arr];
    tempArr.sort((a, b) => a[0] - b[0]);
    setArr(tempArr);
    setIsRunning(false);
    setCurrentStep(0);
  };

  let bubbleSortStepsArray = [];

  const handleBubbleSort = () => {
    let tempArr = [...arr];
    for (let i = 1; i < tempArr.length; i++) {
      let swapped = false;

      for (let current = 0; current < tempArr.length - i; current++) {
        // bubbleSortStepsArray.push(tempArr);
        if (tempArr[current][0] > tempArr[current + 1][0]) {
          swap(tempArr, current, current + 1);
          swapped = true;
          bubbleSortStepsArray.push([current, current + 1]);
        } // setBubbleSortSteps([...bubbleSortSteps, tempArr]);
        else bubbleSortStepsArray.push(null);
      }

      if (!swapped) break;
    }
    setBubbleSortSteps(bubbleSortStepsArray);
    setIsRunning(true);
  };

  console.log(bubbleSortSteps, bubbleSortStepsArray);

  const handleShuffle = () => {
    let tempArr = [...arr];
    shuffle(tempArr);
    setArr(tempArr);
    setIsRunning(false);
    setCurrentStep(0);
  };

  const ItemCard = forwardRef((props, ref) => (
    <div ref={ref}>{props.children}</div>
  ));

  return (
    <div>
      <div>
        <div>Select Placeholder</div>
        <button onClick={handleSort}>Sort!</button>
        <button onClick={handleBubbleSort}>Bubble Sort!</button>
        <button onClick={handleShuffle}>Shuffle!</button>
        <button onClick={generateArray}>Generate a New Array!</button>

        {/* <button
          onClick={() =>
            loopWithCallback(functionToRepeat, 1, bubbleSortSteps.length - 1)
          }
        >
          Run
        </button> */}
        <button>Next Step</button>
        <button>Previous Step</button>
      </div>

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
