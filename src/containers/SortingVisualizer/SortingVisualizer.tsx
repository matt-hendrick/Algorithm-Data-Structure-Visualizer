import { useState, useEffect } from 'react';
import './SortingVisualizer.css';
import { Flipper, Flipped } from 'react-flip-toolkit';

// Utility Functions
import {
  useInterval,
  getRandomInt,
  shuffle,
  swap,
  isSorted,
} from '../../utility/utilityFunctions';

// Components
import MyButton from '../../components/MyButton/MyButton';
import SortingTypeInfo from '../../components/SortingTypeInfo/SortingTypeInfo';
import SortingListItem from '../../components/SortingListItem/SortingListItem';

const Sorting = () => {
  const [arr, setArr] = useState<number[][]>([]);
  // originalArr is set to arr when merge sort is run
  // originalArr is displayed alongside the new array built by the merge sort function
  const [originalArr, setOriginalArr] = useState<number[][]>([]);
  const [sortingType, setSortingType] = useState('');
  // sortingSteps is an array of sorting steps that useInterval iterates through for the visualization
  const [sortingSteps, setSortingSteps] = useState<
    Array<number[] | null> | any
  >([]);
  const [currentStep, setCurrentStep] = useState(0);
  // pointerSteps is an array of pointer locations that useInterval iterates through to mark locations of the pointers
  const [pointerSteps, setPointerSteps] = useState<number[][]>([]);
  const [currentPointer, setCurrentPointer] = useState<number[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [sortingSpeed, setSortingSpeed] = useState(10000);

  // these temp arrays are used to store sorting steps and pointer locations through each iteration of the sorting algorithms
  let tempSortingStepsArray = [] as Array<number[] | null> | any;
  let tempPointerStepsArray = [] as number[][];

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
        if (pointerSteps) {
          setCurrentPointer(pointerSteps[currentStep]);
        }
        if (
          sortingSteps[currentStep] !== null &&
          sortingSteps[currentStep]![0] < 25
        ) {
          swap(
            tempArr,
            sortingSteps[currentStep]![0],
            sortingSteps[currentStep]![1]
          );
          setArr(tempArr);
        }
        setCurrentStep(currentStep + 1);
      }
      // Merge Sort
      else if (sortingType === 'Merge Sort') {
        if (sortingSteps[currentStep] !== null) {
          setArr(sortingSteps[currentStep]!);
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
    setOriginalArr([]);
    setIsRunning(false);
    setCurrentStep(0);
    setSortingType('');
    setCurrentPointer([]);
    setPointerSteps([]);
    setSortingSpeed(10000);
  };

  // sets state to begin sorting
  const startSorting = (nameOfSortingType: string) => {
    // options shared by all sorting algos
    setCurrentStep(0);
    setCurrentPointer([]);
    setIsRunning(true);
    setSortingType(nameOfSortingType);
    setSortingSpeed(500);

    // Non Bogo sort set sorting steps
    if (nameOfSortingType !== 'Bogo Sort') {
      setSortingSteps(tempSortingStepsArray);
    }
    // Bogo sort clear out sorting steps
    else {
      setSortingSteps([]);
    }

    // Sorting algos with pointers
    if (
      nameOfSortingType === 'Bubble Sort' ||
      nameOfSortingType === 'Insertion Sort' ||
      nameOfSortingType === 'Selection Sort'
    ) {
      setPointerSteps(tempPointerStepsArray);
    }
    // Clear pointer steps if selected sorting algo does not have pointers set up
    else {
      setPointerSteps([]);
    }

    // Non Merge Sort sorting options
    if (nameOfSortingType !== 'Merge Sort') {
      if (originalArr.length > 0) {
        setArr(originalArr);
        setOriginalArr([]);
      }
    }
    // Merge Sort Specific options
    if (nameOfSortingType === 'Merge Sort') {
      if (arr.length === 25) {
        setOriginalArr(arr);
      }
    }
  };

  // Bubble Sort
  const handleBubbleSort = () => {
    let tempArr = originalArr.length > 0 ? [...originalArr] : [...arr];

    for (let i = 1; i < tempArr.length; i++) {
      let swapped = false;

      for (let current = 0; current < tempArr.length - i; current++) {
        tempPointerStepsArray.push([
          tempArr[current][1],
          tempArr[current + 1][1],
        ]);
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
    startSorting('Bubble Sort');
  };

  // Insertion Sort
  const handleInsertionSort = () => {
    let tempArr = originalArr.length > 0 ? [...originalArr] : [...arr];

    for (let right = 1; right < tempArr.length; right++) {
      for (
        let left = right;
        tempArr[left - 1] !== undefined &&
        tempArr[left - 1][0] > tempArr[left][0];
        left--
      ) {
        tempPointerStepsArray.push([tempArr[left - 1][1], tempArr[left][1]]);
        tempSortingStepsArray.push([left - 1, left]);
        swap(tempArr, left - 1, left);
      }
    }
    startSorting('Insertion Sort');
  };

  // Selection Sort
  const handleSelectionSort = () => {
    let tempArr = originalArr.length > 0 ? [...originalArr] : [...arr];

    for (let left = 0; left < tempArr.length; left++) {
      let selection = left;

      // iterates through every item to the right of the left pointer
      for (let right = left + 1; right < tempArr.length; right++) {
        tempPointerStepsArray.push([tempArr[left][1], tempArr[right][1]]);
        // if right is greater than the current selection, selection is set to right
        if (tempArr[selection][0] > tempArr[right][0]) {
          selection = right;
        }
        // if selection has been changed and the left pointer is greater than the selection,
        // the selection and left pointer are swapped
        if (selection !== left && tempArr[selection][0] < tempArr[left][0]) {
          tempSortingStepsArray.push([selection, left]);
          swap(tempArr, selection, left);
        }
        // if selection is is not greater than right, adds a null step to the temp array
        else tempSortingStepsArray.push(null);
      }
    }
    startSorting('Selection Sort');
  };

  // Merge Sort
  const handleMergeSort = () => {
    let tempArr = originalArr.length > 0 ? [...originalArr] : [...arr];
    let len = tempArr.length;

    // creates a second array necessary for merge sort
    let buffer = [] as number[][];

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
    startSorting('Merge Sort');
  };

  // Quick Sort
  const getQuickSortPivot = (array: number[][], start: number, end: number) => {
    let pivot = array[start],
      pointer = start;

    for (let i = start; i <= end; i++) {
      if (array[i][0] < pivot[0]) {
        pointer++;
        tempSortingStepsArray.push([pointer, i]);
        swap(array, pointer, i);
      } else tempSortingStepsArray.push(null);
    }
    tempSortingStepsArray.push([start, pointer]);
    swap(array, start, pointer);

    return pointer;
  };

  const quickSort = (array: number[][], start = 0, end = array.length - 1) => {
    if (start < end) {
      let pivotIndex = getQuickSortPivot(array, start, end);
      quickSort(array, start, pivotIndex);
      quickSort(array, pivotIndex + 1, end);
    }
    startSorting('Quick Sort');
    return array;
  };

  const handleQuickSort = () => {
    let tempArr = originalArr.length > 0 ? [...originalArr] : [...arr];
    return quickSort(tempArr);
  };

  // Heap Sort
  const buildMaxHeap = (array: number[][]) => {
    let i = Math.floor(array.length / 2 - 1);

    while (i >= 0) {
      heapify(array, i, array.length);
      i -= 1;
    }
  };

  const heapify = (heap: number[][], i: number, max: number) => {
    let index, leftChild, rightChild;

    while (i < max) {
      index = i;

      leftChild = 2 * i + 1;
      rightChild = leftChild + 1;

      if (leftChild < max && heap[leftChild][0] > heap[index][0]) {
        index = leftChild;
      }

      if (rightChild < max && heap[rightChild][0] > heap[index][0]) {
        index = rightChild;
      }

      if (index === i) {
        return;
      }
      tempSortingStepsArray.push([i, index]);
      swap(heap, i, index);

      i = index;
    }
  };

  const handleHeapSort = () => {
    let tempArr = originalArr.length > 0 ? [...originalArr] : [...arr];
    buildMaxHeap(tempArr);

    let lastElement = tempArr.length - 1;

    while (lastElement > 0) {
      tempSortingStepsArray.push([0, lastElement]);
      swap(tempArr, 0, lastElement);

      heapify(tempArr, 0, lastElement);

      lastElement -= 1;
    }
    startSorting('Heap Sort');
  };

  // Bogo Sort
  const handleBogoSort = () => {
    startSorting('Bogo Sort');
  };

  // Shuffle
  const handleShuffle = () => {
    let tempArr = originalArr.length > 0 ? [...originalArr] : [...arr];
    if (originalArr.length > 0) {
      setArr(originalArr);
      setOriginalArr([]);
    }
    shuffle(tempArr);
    setArr(tempArr);
    setIsRunning(false);
    setCurrentStep(0);
    setCurrentPointer([]);
    setPointerSteps([]);
    setSortingType('');
    setSortingSpeed(500);
  };

  // Change Sorting Speed
  const handleSortingSpeedChange = (newSpeed: number) => {
    setSortingSpeed(newSpeed);
  };

  // Toggle Pause
  const togglePause = () => {
    setIsRunning(!isRunning);
  };

  // initialize variables for conditionally displaying dom elements dependent on state changes
  let originalArrDisplay, arrDisplay, pointerDisplay, playButtonsDisplay;

  // originalArr displayed when using sorting algos that aren't in-place
  if (originalArr.length > 0) {
    originalArrDisplay = (
      <div className="original-arr-wrapper">
        {originalArr.map((item) => (
          <SortingListItem key={item[1]} size={item[0] * 2}></SortingListItem>
        ))}
      </div>
    );
  }

  if (arr && arr.length > 0) {
    arrDisplay = (
      <Flipper flipKey={arr.join('')}>
        <ul className="flipper-ul">
          {arr.map((item) => (
            <li key={item[1]} className="arr-flipper-li">
              <Flipped flipId={item[1]}>
                <div
                  className="flipped-div"
                  style={{
                    height: item[0] * 2,
                  }}
                ></div>
              </Flipped>
            </li>
          ))}
        </ul>
      </Flipper>
    );
  }

  // Display pointer if bubble, insertion, or selection sort
  if (arr && arr.length > 0 && currentPointer && currentPointer.length > 0) {
    if (
      sortingType === 'Bubble Sort' ||
      sortingType === 'Insertion Sort' ||
      sortingType === 'Selection Sort'
    ) {
      pointerDisplay = (
        <Flipper flipKey={arr.join('')}>
          <ul className="flipper-ul">
            {arr.map((item) => (
              <li key={item[1] + currentStep} className="pointer-flipper-li">
                <Flipped flipId={item[1]}>
                  {item[1] === currentPointer[0] ||
                  item[1] === currentPointer[1] ? (
                    <div className="arrow-up"></div>
                  ) : null}
                </Flipped>
              </li>
            ))}
          </ul>
        </Flipper>
      );
    }
  }

  // Display Pause/Continue and Change Speed buttons if current step > 0
  if (currentStep > 0) {
    playButtonsDisplay = (
      <div className="button-row">
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
    );
  }

  return (
    <div>
      <div className="button-row">
        <MyButton onClick={handleBubbleSort}>Bubble Sort</MyButton>
        <MyButton onClick={handleInsertionSort}>Insertion Sort</MyButton>
        <MyButton onClick={handleSelectionSort}>Selection Sort</MyButton>
        <MyButton onClick={handleMergeSort}>Merge Sort</MyButton>
        <MyButton onClick={handleQuickSort}>Quick Sort</MyButton>
        <MyButton onClick={handleHeapSort}>Heap Sort</MyButton>
        <MyButton onClick={handleBogoSort}>Bogo Sort</MyButton>
        <MyButton onClick={handleShuffle}>Shuffle</MyButton>
        <MyButton onClick={generateArray}>Generate a New Array</MyButton>
      </div>

      <div>
        {originalArrDisplay}

        {arrDisplay}

        {pointerDisplay}
      </div>

      {playButtonsDisplay}

      {sortingType ? (
        <SortingTypeInfo
          sortingType={sortingType}
          sortingSteps={sortingSteps}
          currentStep={currentStep}
        />
      ) : null}
    </div>
  );
};

export default Sorting;
