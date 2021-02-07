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

function buildMaxHeap(array) {
  let i = Math.floor(array.length / 2 - 1);

  // Build a max heap out of
  // all array elements passed in.
  while (i >= 0) {
    heapify(array, i, array.length);
    i -= 1;
  }
}

function heapSort(array) {
  // Build our max heap.
  buildMaxHeap(array);

  // Find last element.
  let lastElement = array.length - 1;

  // Continue heap sorting until we have
  // just one element left in the array.
  while (lastElement > 0) {
    [array[0], array[lastElement]] = [array[lastElement], array[0]];

    heapify(array, 0, lastElement);

    lastElement -= 1;
  }
  return array;
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

    if (index == i) {
      return;
    }

    [heap[i], heap[index]] = [heap[index], heap[i]];

    i = index;
  }
}

let array = [3, 2, 243, 44, 99, 5, 5, 4, 5, 6, 1, 2, 3, 100, 1231];

// console.log(handleBubbleSort(array));
// console.log(handleInsertionSort(array));
// console.log(handleSelectionSort(array));
// console.log(handleBogoSort(array));
// console.log(quickSort(array));
console.log(heapSort(array));
