import React, { useState, useEffect, forwardRef } from 'react';
import { shuffle, swap } from '../algorithms/sortingUtilityFunctions';
import useInterval from '../utility/utilityFunctions';
import FlipMove from 'react-flip-move';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function Sorting() {
  const [arr, setArr] = useState();
  const [sortingType, setSortingType] = useState(null);
  const [sortingSteps, setSortingSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [sortingSpeed, setSortingSpeed] = useState(500);

  useEffect(() => {
    generateArray();
  }, []);

  useInterval(() => {
    if (sortingSteps && currentStep < sortingSteps.length && isRunning) {
      // step through bubbleSort on interval
      if (sortingType === 'Bubble Sort') {
        let tempArr = [...arr];
        if (sortingSteps[currentStep] !== null) {
          swap(
            tempArr,
            sortingSteps[currentStep][0],
            sortingSteps[currentStep][1]
          );
          setArr(tempArr);
        }
        setCurrentStep(currentStep + 1);
      } else if (sortingType === 'Insertion Sort') {
        let tempArr = [...arr];
        if (sortingSteps[currentStep] !== null) {
          swap(
            tempArr,
            sortingSteps[currentStep][0],
            sortingSteps[currentStep][1]
          );
          setArr(tempArr);
        }
        setCurrentStep(currentStep + 1);
      }
    }
  }, sortingSpeed);

  const generateArray = () => {
    let tempArr = [];
    for (let i = 0; i < 25; i++) {
      tempArr.push([getRandomInt(1, 100), i]);
    }
    setArr(tempArr);
    setIsRunning(false);
    setCurrentStep(0);
    setSortingType(null);
    setSortingSpeed(500);
  };

  let tempSortingStepsArray = [];

  const handleBubbleSort = () => {
    let tempArr = [...arr];
    for (let i = 1; i < tempArr.length; i++) {
      let swapped = false;

      for (let current = 0; current < tempArr.length - i; current++) {
        if (tempArr[current][0] > tempArr[current + 1][0]) {
          swap(tempArr, current, current + 1);
          swapped = true;
          tempSortingStepsArray.push([current, current + 1]);
        }
        // create null entries in steps array to indicate that items were not swapped
        else tempSortingStepsArray.push(null);
      }

      if (!swapped) break;
    }
    setSortingSteps(tempSortingStepsArray);
    setCurrentStep(0);
    setIsRunning(true);
    setSortingType('Bubble Sort');
    setSortingSpeed(500);
  };

  const handleInsertionSort = () => {
    let tempArr = [...arr];

    for (let right = 1; right < tempArr.length; right++) {
      for (
        let left = right;
        tempArr[left - 1] !== undefined &&
        tempArr[left - 1][0] > tempArr[left][0];
        left--
      ) {
        tempSortingStepsArray.push([left - 1, left]);
        swap(tempArr, left - 1, left);
      }
    }
    setSortingSteps(tempSortingStepsArray);
    setCurrentStep(0);
    setIsRunning(true);
    setSortingType('Insertion Sort');
    setSortingSpeed(500);
  };

  const handleShuffle = () => {
    let tempArr = [...arr];
    shuffle(tempArr);
    setArr(tempArr);
    setIsRunning(false);
    setCurrentStep(0);
    setSortingType(null);
    setSortingSpeed(500);
  };

  const handleSortingSpeedChange = (newSpeed) => {
    setSortingSpeed(newSpeed);
  };

  const togglePause = () => {
    setIsRunning(!isRunning);
  };

  const ItemCard = forwardRef((props, ref) => (
    <div ref={ref}>{props.children}</div>
  ));

  return (
    <div>
      <div>
        <div>Select Placeholder</div>
        <button onClick={handleBubbleSort}>Bubble Sort!</button>
        <button onClick={handleInsertionSort}>Insertion Sort!</button>
        <button onClick={handleShuffle}>Shuffle!</button>
        <button onClick={generateArray}>Generate a New Array!</button>
        {currentStep > 0 ? (
          <div>
            <button onClick={togglePause}>
              {isRunning ? 'Pause' : 'Continue'}
            </button>
            <button onClick={() => handleSortingSpeedChange(1000)}>
              Slow Sorting Speed
            </button>
            <button onClick={() => handleSortingSpeedChange(500)}>
              Normal Sorting Speed
            </button>
            <button onClick={() => handleSortingSpeedChange(100)}>
              Fast Sorting Speed
            </button>
          </div>
        ) : null}

        {sortingType ? (
          <div>
            <h3>
              Number of Steps Required to Sort this Array with {sortingType}:{' '}
              {sortingSteps.length}{' '}
            </h3>
            <h3>Current Step: {currentStep}</h3>
          </div>
        ) : null}
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
