export const bubbleSortDescription = `Bubble sort is an in-place sorting algorithm that sorts items by comparing each adjacent pair of items in turn,
   swapping the items if necessary, and repeating iterating through the items until no swaps are done.`;
export const bubbleSortCode = `const handleBubbleSort = (array) => {
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
  };`;
export const insertionSortDescription = `Insertion sort is an in-place sorting algorithm that sorts items by building up a sorted sublist. 
  The algorithm sequentially compares items with the preceding items in the sorted sublist. 
  If items preceding the examined item are less than the examined item,
   the examined item is swapped with the lesser items until the item is in its appropriate place in the sorted portion of the list.`;
export const insertionSortCode = `const handleInsertionSort = (array) => {
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
  };`;
export const selectionSortDescription = `Selection sort is an in-place sorting algorithm that sorts items by building up a sorted sublist. 
  The algorithm sequentially iterates through the unsorted portion of the list and, if the left-most item is greater than the compared item,
   the two items are swapped.`;
export const selectionSortCode = `const handleSelectionSort = (array) => {
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
  };`;
export const quickSortDescription = ` Quick sort is a divide and conquer, in-place sorting algorithm that divides a list of items on a pivot item. The algorithm then
 partitions the list so all items smaller than the pivot are to the left of the pivot and all items greater than the pivot are to the right of the pivot. 
 This process is repeated until the list is sorted.`;
export const quickSortCode = `const handleQuickSort = (array, start = 0, end = array.length - 1) => {
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
}`;
export const heapSortDescription = `Heap sort is an in-place sorting algorithm that uses a binary heap to sort items.
  The algorithm builds a max heap from a list. The max item is then stored at the root of the heap, 
  the item previously in that position is swapped and placed at the top of the heap, and the heap size is reduced by one.
  The list is heapified again. This process is repeated until the list is sorted. `;
export const heapSortCode = ``;
export const bogoSortDescription =
  'Bogo sort is an inefficient, in-place algorithm that shuffles a list of items until the list is sorted.';
export const bogoSortCode = `  const handleBogoSort = (array) => {
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
  }`;
