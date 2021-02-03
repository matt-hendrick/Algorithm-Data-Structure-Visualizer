import React, { useState, useEffect, forwardRef } from 'react';
import {
  useInterval,
  getRandomInt,
  shuffle,
  swap,
} from '../utility/utilityFunctions';

function Sorting() {
  const [arr, setArr] = useState();
  const [originalArr, setOriginalArr] = useState();
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
      if (
        sortingType === 'Bubble Sort' ||
        sortingType === 'Insertion Sort' ||
        sortingType === 'Selection Sort' ||
        sortingType === 'Quick Sort'
      ) {
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
      } else {
        if (sortingSteps[currentStep] !== null) {
          setArr(sortingSteps[currentStep]);
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
    setOriginalArr();
    setIsRunning(false);
    setCurrentStep(0);
    setSortingType(null);
    setSortingSpeed(500);
  };

  let tempSortingStepsArray = [];

  const handleBubbleSort = () => {
    let tempArr = originalArr ? [...originalArr] : [...arr];
    for (let i = 1; i < tempArr.length; i++) {
      let swapped = false;

      for (let current = 0; current < tempArr.length - i; current++) {
        if (tempArr[current][0] > tempArr[current + 1][0]) {
          tempSortingStepsArray.push([current, current + 1]);
          swap(tempArr, current, current + 1);
          swapped = true;
        }
        // create null entries in steps array to indicate that items were not swapped
        else tempSortingStepsArray.push(null);
      }

      if (!swapped) break;
    }
    setSortingSteps(tempSortingStepsArray);
    if (originalArr) {
      setArr(originalArr);
      setOriginalArr();
    }
    setCurrentStep(0);
    setIsRunning(true);
    setSortingType('Bubble Sort');
    setSortingSpeed(500);
  };

  const handleInsertionSort = () => {
    let tempArr = originalArr ? [...originalArr] : [...arr];

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
    if (originalArr) {
      setArr(originalArr);
      setOriginalArr();
    }
    setCurrentStep(0);
    setIsRunning(true);
    setSortingType('Insertion Sort');
    setSortingSpeed(500);
  };

  const handleSelectionSort = () => {
    let tempArr = originalArr ? [...originalArr] : [...arr];
    tempSortingStepsArray = [];

    for (let left = 0; left < tempArr.length; left++) {
      let selection = left;

      for (let right = left + 1; right < tempArr.length; right++) {
        if (tempArr[selection][0] > tempArr[right][0]) {
          selection = right;
        }
        if (selection !== left && tempArr[selection][0] < tempArr[left][0]) {
          tempSortingStepsArray.push([selection, left]);
          swap(tempArr, selection, left);
        } else tempSortingStepsArray.push(null);
      }
    }
    setSortingSteps(tempSortingStepsArray);
    if (originalArr) {
      setArr(originalArr);
      setOriginalArr();
    }
    setCurrentStep(0);
    setIsRunning(true);
    setSortingType('Selection Sort');
    setSortingSpeed(500);
  };

  const handleMergeSort = () => {
    let tempArr = [...arr];
    let len = tempArr.length;

    let buffer = [];

    for (let size = 1; size < len; size *= 2) {
      for (let leftStart = 0; leftStart < len; leftStart += 2 * size) {
        let left = leftStart;

        let right = Math.min(left + size, len);

        let leftLimit = right;

        let rightLimit = Math.min(right + size, len);

        let i = left;

        while (left < leftLimit && right < rightLimit) {
          if (tempArr[left][0] <= tempArr[right][0]) {
            buffer[i] = tempArr[left];
            tempSortingStepsArray.push([...buffer]);
            left++;
            i++;
          } else {
            buffer[i] = tempArr[right];
            tempSortingStepsArray.push([...buffer]);
            right++;
            i++;
          }
        }

        while (left < leftLimit) {
          buffer[i] = tempArr[left];
          tempSortingStepsArray.push([...buffer]);
          left++;
          i++;
        }

        while (right < rightLimit) {
          buffer[i] = tempArr[right];
          tempSortingStepsArray.push([...buffer]);
          right++;
          i++;
        }
      }
      [tempArr, buffer] = [buffer, tempArr];
    }
    setSortingSteps(tempSortingStepsArray);
    setOriginalArr(arr);
    setSortingType('Merge Sort');
    setCurrentStep(0);
    setIsRunning(true);
    setSortingSpeed(500);
  };

  function quickSortPartition(array, low, high) {
    const pivotIndex = low;
    let pivotFinalIndex = pivotIndex;

    for (let current = pivotIndex + 1; current <= high; current++) {
      if (array[current][0] < array[pivotIndex][0]) {
        pivotFinalIndex += 1;
        tempSortingStepsArray.push([current, pivotFinalIndex]);
        swap(array, current, pivotFinalIndex);
      }
    }

    tempSortingStepsArray.push([pivotIndex, pivotFinalIndex]);
    swap(array, pivotIndex, pivotFinalIndex);

    return pivotFinalIndex;
  }

  function quickSort(array, low = 0, high = array.length - 1) {
    if (low < high) {
      const partitionIndex = quickSortPartition(array, low, high);
      quickSort(array, low, partitionIndex - 1);
      quickSort(array, partitionIndex + 1, high);
    }
    setSortingSteps(tempSortingStepsArray);
    if (originalArr) {
      setArr(originalArr);
      setOriginalArr();
    }
    setSortingType('Quick Sort');
    setCurrentStep(0);
    setIsRunning(true);
    setSortingSpeed(500);
    return array;
  }

  const handleQuickSort = () => {
    let tempArr = originalArr ? [...originalArr] : [...arr];
    return quickSort(tempArr);
  };

  const handleShuffle = () => {
    let tempArr = originalArr ? [...originalArr] : [...arr];
    if (originalArr) {
      setArr(originalArr);
      setOriginalArr();
    }
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
    <div ref={ref} style={{ backgroundColor: 'blue', width: props.size }}>
      {props.children}
    </div>
  ));

  return (
    <div>
      <div>
        <div>Select Placeholder</div>
        <button onClick={handleBubbleSort}>Bubble Sort!</button>
        <button onClick={handleInsertionSort}>Insertion Sort!</button>
        <button onClick={handleSelectionSort}>Selection Sort!</button>
        <button onClick={handleMergeSort}>Merge Sort!</button>
        <button onClick={handleQuickSort}>Quick Sort!</button>
        <button onClick={handleShuffle}>Shuffle!</button>
        <button onClick={generateArray}>Generate a New Array!</button>
        {currentStep > 0 ? (
          <div>
            <button onClick={togglePause}>
              {isRunning ? 'Pause' : 'Continue'}
            </button>
            <button onClick={() => handleSortingSpeedChange(2000)}>
              Slowest Sorting Speed
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
            <button onClick={() => handleSortingSpeedChange(10)}>
              Fastest Sorting Speed
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

      <div style={{ display: 'flex' }}>
        {originalArr ? (
          <div>
            {originalArr.map((item) => (
              <ItemCard key={item[1]} size={item[0]}>
                {item[0]}
              </ItemCard>
            ))}
          </div>
        ) : null}

        {arr ? (
          <div style={{ display: 'flex' }}>
            <div>
              {arr.map((item) => (
                <ItemCard key={item[1]} size={item[0]}>
                  {item[0]}
                </ItemCard>
              ))}
            </div>
            {sortingSteps[currentStep] === null && isRunning ? (
              <div>No Change Made</div>
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Sorting;
