const handleBubbleSort = (array) => {
  for (let i = 1; i < array.length; i++) {
    let swapped = false;
    for (let current = 0; current < array.length - i; current++) {
      if (array[current] > array[current + 1]) {
        // swaps items if the current item is greater than the next item in the list
        [array[current], array[current + 1]] = [
          array[current + 1],
          array[current],
        ];
        swapped = true;
      }
    }

    // if no items have been swapped on the current iteration, the list is sorted
    // break out of the outer for loop as the list is sorted
    if (!swapped) break;
  }
  return array;
};

const handleInsertionSort = (array) => {
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
};

const handleSelectionSort = (array) => {
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
};

const handleBogoSort = (array) => {
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
}

const handleQuickSort = (array, start = 0, end = array.length - 1) => {
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
}

const handleHeapSort = (array) => {
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
}

// const handleMergeSort = (array) => {
//   let len = array.length;

//   // creates a second array necessary for merge sort
//   let buffer = [];

//   for (let size = 1; size < len; size *= 2) {
//     for (let leftStart = 0; leftStart < len; leftStart += 2 * size) {
//       let left = leftStart;

//       let right = Math.min(left + size, len);

//       let leftLimit = right;

//       let rightLimit = Math.min(right + size, len);

//       let i = left;

//       while (left < leftLimit && right < rightLimit) {
//         if (array[left][0] <= array[right][0]) {
//           buffer[i] = array[left];
//           left++;
//           i++;
//         } else {
//           buffer[i] = array[right];
//           right++;
//           i++;
//         }
//       }

//       while (left < leftLimit) {
//         buffer[i] = array[left];
//         left++;
//         i++;
//       }

//       while (right < rightLimit) {
//         buffer[i] = array[right];
//         right++;
//         i++;
//       }
//     }
//     [array, buffer] = [buffer, array];
//   }
//   return array;
// };

const handleMergeSort = (arr) => {
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
}

let array = [3, 2, 243, 44, 99, 5, 5, 4, 5, 6, 1, 2, 3, 100, 1231];

// console.log(handleBubbleSort(array));
// console.log(handleInsertionSort(array));
// console.log(handleSelectionSort(array));
// console.log(handleBogoSort(array));
// console.log(quickSort(array));
// console.log(handleHeapSort(array));
console.log(handleMergeSort(array));
