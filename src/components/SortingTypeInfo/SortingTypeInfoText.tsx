export const bubbleSortInfo = {
  description: `Bubble sort is an in-place sorting algorithm that sorts items by comparing each adjacent pair of items in turn,
   swapping the items if necessary, and repeating iterating through the items until no swaps are done.`,
  code: `const handleBubbleSort = (array) => {
    for (let i = 1; i < array.length; i++) {
      let swapped = false;
      for (let current = 0; current < array.length - i; current++) {
        if (array[current] > array[current + 1]) {
          // swaps items if the current item is greater than the next item in the array
          [array[current], array[current + 1]] = [
            array[current + 1],
            array[current],
          ];
          swapped = true;
        }
      }
      // if no items have been swapped on the current iteration, the array is sorted
      // break out of the outer for loop as the array is sorted
      if (!swapped) break;
    }
    return array;
  };`,
  list: (
    <ul>
      <li>Stable</li>
      <li>Adaptive</li>
      <li>
        Average Time Complexity: O(n<sup>2</sup>) swaps and comparisons
      </li>
      <li>
        Worst Time Complexity: O(n<sup>2</sup>) swaps and comparisons
      </li>
      <li>Best Time Complexity: O(n) comparisons and O(1) swaps</li>
      <li>Space Complexity: O(1)</li>
    </ul>
  ),
};
export const insertionSortInfo = {
  description: `Insertion sort is an in-place sorting algorithm that sorts items by building up a sorted subarray. 
  The algorithm sequentially compares items with the preceding items in the sorted subarray. 
  If items preceding the examined item are less than the examined item,
   the examined item is swapped with the lesser items until the item is in its appropriate place in the sorted portion of the array.`,
  code: `const handleInsertionSort = (array) => {
    for (let right = 1; right < array.length; right++) {
      for (
        let left = right;
        array[left - 1] !== undefined && array[left - 1] > array[left];
        left--
      ) {
        // swaps items if the current item is less than the item that precedes it
        [array[left - 1], array[left]] = [array[left], array[left - 1]];
      }
    }
    return array;
  };`,
  list: (
    <ul>
      <li>Stable</li>
      <li>Adaptive</li>
      <li>
        Average Time Complexity: O(n<sup>2</sup>) swaps and comparisons
      </li>
      <li>
        Worst-case Time Complexity: O(n<sup>2</sup>) swaps and comparisons
      </li>
      <li>Best-case Time Complexity: O(n) comparisons and O(1) swaps</li>
      <li>Space Complexity: O(1)</li>
    </ul>
  ),
};
export const selectionSortInfo = {
  description: `Selection sort is an in-place sorting algorithm that sorts items by building up a sorted subarray. 
  The algorithm sequentially iterates through the unsorted portion of the array and, if the left-most item is greater than the compared item,
   the two items are swapped.`,
  code: `const handleSelectionSort = (array) => {
    for (let left = 0; left < array.length; left++) {
      let selection = left;
      // iterates through every item to the right of the left pointer
      for (let right = left + 1; right < array.length; right++) {
        // if right is greater than the current selection, selection is set to right
        if (array[selection] > array[right]) {
          selection = right;
        }
        // if selection has been changed and the left pointer is greater than the selection, they are swapped
        if (selection !== left && array[selection] < array[left]) {
          [array[selection], array[left]] = [array[left], array[selection]];
        }
      }
    }
    return array;
  };`,
  list: (
    <ul>
      <li>Not Stable</li>
      <li>Not Adaptive</li>
      <li>
        Average Time Complexity: O(n<sup>2</sup>) comparisons and O(n) swaps
      </li>
      <li>
        Worst-case Time Complexity: O(n<sup>2</sup>) comparisons and O(n) swaps
      </li>
      <li>
        Best-case Time Complexity: O(n<sup>2</sup>) comparisons and O(1) swaps
      </li>
      <li>Space Complexity: O(1)</li>
    </ul>
  ),
};
export const quickSortInfo = {
  description: ` Quick sort is a divide and conquer, in-place sorting algorithm that divides an array of items on a pivot item. The algorithm then
 partitions the array so all items smaller than the pivot are to the left of the pivot and all items greater than the pivot are to the right of the pivot. 
 This process is repeated until the array is sorted.`,
  code: `const handleQuickSort = (array, start = 0, end = array.length - 1) => {
  let pivotIndex = getQuickSortPivot(array, start, end);

  if (start >= end) return array;
  handleQuickSort(array, start, pivotIndex);
  handleQuickSort(array, pivotIndex + 1, end);

  return array;
};

function getQuickSortPivot(array, start, end) {
  let pivot = array[start],
    pointer = start;

  for (let i = start; i <= end; i++) {
    if (array[i] < pivot) {
      pointer++;
      [array[pointer], array[i]] = [array[i], array[pointer]];
    }
  }
  [array[start], array[pointer]] = [array[pointer], array[start]];

  return pointer;
}`,
  list: (
    <ul>
      <li>Not Stable</li>
      <li>Not Adaptive</li>
      <li>Average Time Complexity: O(n log n)</li>
      <li>
        Worst-case Time Complexity: O(n<sup>2</sup>)
      </li>
      <li>Best-case Time Complexity: O(n log n)</li>
      <li>
        Space Complexity: O(n) or O(log n) depending on the type of quick sort
        algorithm chosen
      </li>
    </ul>
  ),
};
export const heapSortInfo = {
  description: `Heap sort is an in-place sorting algorithm that uses a binary heap to sort items.
  The algorithm builds a max heap from an array. The max item is then stored at the root of the heap, 
  the item previously in that position is swapped and placed at the top of the heap, and the heap size is reduced by one.
  The array is heapified again. This process is repeated until the array is sorted. `,
  code: `const handleHeapSort = (array) => {
  // creates max heap
  buildMaxHeap(array);

  //gets the last element of the heap
  let lastElement = array.length - 1;

  while (lastElement > 0) {
    //swaps the max item in the heap and the last element
    [array[0], array[lastElement]] = [array[lastElement], array[0]];

    // heapifies the array
    heapify(array, 0, lastElement);

    lastElement -= 1;
  }
  return array;
};

function buildMaxHeap(array) {
  let i = Math.floor(array.length / 2 - 1);

  while (i >= 0) {
    heapify(array, i, array.length);
    i -= 1;
  }
}

function heapify(heap, i, max) {
  let index, leftChild, righChild;

  while (i < max) {
    index = i;

    leftChild = 2 * i + 1;
    righChild = leftChild + 1;

    if (leftChild < max && heap[leftChild] > heap[index]) {
      index = leftChild;
    }

    if (righChild < max && heap[righChild] > heap[index]) {
      index = righChild;
    }

    if (index === i) {
      return;
    }

    // swaps i and the index
    [heap[i], heap[index]] = [heap[index], heap[i]];

    i = index;
  }
}`,
  list: (
    <ul>
      <li>Not Stable</li>
      <li>Slightly Adaptive</li>
      <li>Average Time Complexity: O(n log n)</li>
      <li>Worst-case Time Complexity: O(n log n)</li>
      <li>Best-case Time Complexity: O(n log n)</li>
      <li>Space Complexity: O(1)</li>
    </ul>
  ),
};
export const mergeSortInfo = {
  description: `Merge sort is a divide and conquer algorithm that sorts items by breaking down the unsorted array into smaller, subarrays.
  The algoritms then sorts the subarrays and merges the subarrays together, with items being inserted into a new array in the appropriate position.
  This process is continued until the new array is sorted.`,
  code: `const handleMergeSort = (arr) => {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2),
      left = handleMergeSort(arr.slice(0, mid)),
      right = handleMergeSort(arr.slice(mid));
  
    return merge(left, right);
  };
  
  function merge(arr1, arr2) {
    let sorted = [];
  
    while (arr1.length && arr2.length) {
      if (arr1[0] < arr2[0]) sorted.push(arr1.shift());
      else sorted.push(arr2.shift());
    }
  
    return sorted.concat(arr1.slice().concat(arr2.slice()));
  }`,
  list: (
    <ul>
      <li>Stable</li>
      <li>Not Adaptive</li>
      <li>Average Time Complexity: O(n log n)</li>
      <li>Worst-case Time Complexity: O(n log n)</li>
      <li>Best-case Time Complexity: O(n log n)</li>
      <li>Space Complexity: O(n)</li>
    </ul>
  ),
};
export const bogoSortInfo = {
  description:
    'Bogo sort is an inefficient, in-place algorithm that shuffles an array of items until the array is sorted.',
  code: `  const handleBogoSort = (array) => {
    while (!isSorted(array)) {
      shuffle(array);
    }
    return array;
  };
  
  function isSorted(array) {
    for (let i = 1; i < array.length; i++) {
      if (array[i - 1] > array[i]) {
        return false;
      }
    }
    return true;
  }
  
  function shuffle(array) {
    for (let index = 0; index < array.length; index++) {
      const newIndex = Math.floor(Math.random() * array.length);
      [array[index], array[newIndex]] = [array[newIndex], array[index]];
    }
    return array;
  }`,
  list: (
    <ul>
      <li>Not Stable</li>
      <li>Not Adaptive</li>
      <li>Average Time Complexity: O((n+1)!)</li>
      <li>Worst-case Time Complexity: O((n+1)!)</li>
      <li>Best-case Time Complexity: O(n)</li>
      <li>Space Complexity: O(1)</li>
    </ul>
  ),
};
