import React, { useState, useEffect } from 'react';
import * as classes from './Sorting.module.css';
import { Flipper, Flipped } from 'react-flip-toolkit';

import {
  useInterval,
  getRandomInt,
  shuffle,
  swap,
  isSorted,
} from '../../utility/utilityFunctions';

import MyButton from '../../components/MyButton/MyButton';
import SortingTypeInfo from '../../components/SortingTypeInfo/SortingTypeInfo';
import SortingListItem from '../../components/SortingListItem/SortingListItem';

const Sorting = () => {
  const [arr, setArr] = useState();
  // originalArr is set to arr when merge sort is run
  // originalArr is displayed alongside the new array built by the merge sort function
  const [originalArr, setOriginalArr] = useState();
  const [sortingType, setSortingType] = useState(null);
  const [sortingSteps, setSortingSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [sortingSpeed, setSortingSpeed] = useState(10000);

  let tempSortingStepsArray = [];

  useEffect(() => {
    generateArray();
  }, []);

  useInterval(() => {
    if (
      sortingSteps &&
      currentStep < sortingSteps.length &&
      isRunning &&
      sortingType !== 'Bogo Sort'
    ) {
      // Bubble/Insertion/Selection/Quick/Heap Sort
      if (
        sortingType === 'Bubble Sort' ||
        sortingType === 'Insertion Sort' ||
        sortingType === 'Selection Sort' ||
        sortingType === 'Quick Sort' ||
        sortingType === 'Heap Sort'
      ) {
        let tempArr = [...arr];
        if (
          sortingSteps[currentStep] !== null &&
          sortingSteps[currentStep][0] < 25
        ) {
          swap(
            tempArr,
            sortingSteps[currentStep][0],
            sortingSteps[currentStep][1]
          );
          setArr(tempArr);
        }
        setCurrentStep(currentStep + 1);
      }
      // Merge Sort
      else if (sortingType === 'Merge Sort') {
        if (sortingSteps[currentStep] !== null) {
          setArr(sortingSteps[currentStep]);
        }
        setCurrentStep(currentStep + 1);
      }
    }
    // Bogo sort
    else if (sortingType === 'Bogo Sort' && isRunning) {
      let tempArr = [...arr];
      if (!isSorted(tempArr)) {
        shuffle(tempArr);
        setArr(tempArr);
        setCurrentStep(currentStep + 1);
      } else setIsRunning(false);
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
    setSortingSpeed(10000);
  };

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
        // create null entries in steps array to indicate that items were compared but not swapped
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

    for (let left = 0; left < tempArr.length; left++) {
      let selection = left;

      // iterates through every item to the right of the left pointer
      for (let right = left + 1; right < tempArr.length; right++) {
        // if right is greater than the current selection, selection is set to right
        if (tempArr[selection][0] > tempArr[right][0]) {
          selection = right;
        }
        // if selection is is not greater than right, adds a null step to the temp array
        else tempSortingStepsArray.push(null);
        // if selection has been changed and the left pointer is greater than the selection,
        // the selection and left pointer are swapped
        if (selection !== left && tempArr[selection][0] < tempArr[left][0]) {
          tempSortingStepsArray.push([selection, left]);
          swap(tempArr, selection, left);
        }
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
    let tempArr = originalArr ? [...originalArr] : [...arr];
    let len = tempArr.length;

    // creates a second array necessary for merge sort
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
    if (arr.length === 25) {
      setOriginalArr(arr);
    }
    setSortingType('Merge Sort');
    setCurrentStep(0);
    setIsRunning(true);
    setSortingSpeed(500);
  };

  const getQuickSortPivot = (array, start, end) => {
    let pivot = array[start],
      pointer = start;

    for (let i = start; i <= end; i++) {
      if (array[i][0] < pivot[0]) {
        pointer++;
        tempSortingStepsArray.push([pointer, i]);
        swap(array, pointer, i);
      }
    }
    tempSortingStepsArray.push([start, pointer]);
    swap(array, start, pointer);

    return pointer;
  };

  const quickSort = (array, start = 0, end = array.length - 1) => {
    let pivotIndex = getQuickSortPivot(array, start, end);

    if (start >= end) return array;
    quickSort(array, start, pivotIndex);
    quickSort(array, pivotIndex + 1, end);
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
  };

  const handleQuickSort = () => {
    let tempArr = originalArr ? [...originalArr] : [...arr];
    return quickSort(tempArr);
  };

  const buildMaxHeap = (array) => {
    let i = Math.floor(array.length / 2 - 1);

    while (i >= 0) {
      heapify(array, i, array.length);
      i -= 1;
    }
  };

  const heapify = (heap, i, max) => {
    let index, leftChild, righChild;

    while (i < max) {
      index = i;

      leftChild = 2 * i + 1;
      righChild = leftChild + 1;

      if (leftChild < max && heap[leftChild][0] > heap[index][0]) {
        index = leftChild;
      }

      if (righChild < max && heap[righChild][0] > heap[index][0]) {
        index = righChild;
      }

      if (index == i) {
        return;
      }

      tempSortingStepsArray.push([i, index]);
      swap(heap, i, index);

      i = index;
    }
  };

  const handleHeapSort = () => {
    let tempArr = originalArr ? [...originalArr] : [...arr];
    buildMaxHeap(tempArr);

    let lastElement = tempArr.length - 1;

    while (lastElement > 0) {
      tempSortingStepsArray.push([0, lastElement]);
      swap(tempArr, 0, lastElement);

      heapify(tempArr, 0, lastElement);

      lastElement -= 1;
    }
    setSortingSteps(tempSortingStepsArray);
    if (originalArr) {
      setArr(originalArr);
      setOriginalArr();
    }
    setCurrentStep(0);
    setIsRunning(true);
    setSortingType('Heap Sort');
    setSortingSpeed(500);
  };

  const handleBogoSort = () => {
    if (originalArr) {
      setArr(originalArr);
      setOriginalArr();
    }
    setCurrentStep(0);
    setIsRunning(true);
    setSortingType('Bogo Sort');
    setSortingSpeed(500);
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

  return (
    <div>
      <div className={classes.ButtonRow}>
        <MyButton onClick={handleBubbleSort}>Bubble Sort!</MyButton>
        <MyButton onClick={handleInsertionSort}>Insertion Sort!</MyButton>
        <MyButton onClick={handleSelectionSort}>Selection Sort!</MyButton>
        <MyButton onClick={handleMergeSort}>Merge Sort!</MyButton>
        <MyButton onClick={handleQuickSort}>Quick Sort!</MyButton>
        <MyButton onClick={handleHeapSort}>Heap Sort!</MyButton>
        <MyButton onClick={handleBogoSort}>Bogo Sort!</MyButton>
        <MyButton onClick={handleShuffle}>Shuffle!</MyButton>
        <MyButton onClick={generateArray}>Generate a New Array!</MyButton>
      </div>

      <div>
        {originalArr ? (
          <div className={classes.OriginalArrWrapper}>
            {originalArr.map((item) => (
              <SortingListItem key={item[1]} size={item[0] * 2}>
                {item[0]}
              </SortingListItem>
            ))}
          </div>
        ) : null}

        {arr ? (
          <Flipper flipKey={arr.join('')}>
            <ul className={classes.FlipperUL}>
              {arr.map((item) => (
                <li key={item[1]} className={classes.FlipperLI}>
                  <Flipped flipId={item[1]}>
                    <div
                      className={classes.FlippedDiv}
                      style={{
                        height: item[0] * 2,
                      }}
                    ></div>
                  </Flipped>
                </li>
              ))}
            </ul>
          </Flipper>
        ) : null}
      </div>
      {currentStep > 0 ? (
        <div className={classes.ButtonRow}>
          <MyButton onClick={togglePause}>
            {isRunning ? 'Pause' : 'Continue'}
          </MyButton>
          <MyButton onClick={() => handleSortingSpeedChange(2000)}>
            Slowest Sorting Speed
          </MyButton>
          <MyButton onClick={() => handleSortingSpeedChange(1000)}>
            Slow Sorting Speed
          </MyButton>
          <MyButton onClick={() => handleSortingSpeedChange(500)}>
            Normal Sorting Speed
          </MyButton>
          <MyButton onClick={() => handleSortingSpeedChange(100)}>
            Fast Sorting Speed
          </MyButton>
          <MyButton onClick={() => handleSortingSpeedChange(50)}>
            Fastest Sorting Speed
          </MyButton>
        </div>
      ) : null}
      {sortingType ? (
        <div>
          <div>
            <h3>
              Number of steps required to sort this array with{' '}
              {sortingType.toLowerCase()}
              {sortingType !== 'Bogo Sort'
                ? `: ${sortingSteps.length}`
                : " is unknown as bogo sort's average run time is O(n!)"}
            </h3>
            <h3>Current Step: {currentStep}</h3>
          </div>
          <SortingTypeInfo sortingType={sortingType} />
        </div>
      ) : null}
    </div>
  );
};

export default Sorting;
