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

let array = [3, 2, 99, 5, 5, 4, 5, 6, 1, 2, 3, 100];

// console.log(handleBubbleSort(array));
// console.log(handleInsertionSort(array));
// console.log(handleSelectionSort(array));
console.log(handleBogoSort(array));
