const handleBubbleSort = (unsortedArray) => {
  const tempArray = [...unsortedArray];
  for (let i = 1; i < tempArray.length; i++) {
    let swapped = false;
    for (let current = 0; current < tempArray.length - i; current++) {
      if (tempArray[current] > tempArray[current + 1]) {
        // swaps items if the current item is greater than the next item in the list
        [tempArray[current], tempArray[current + 1]] = [
          tempArray[current + 1],
          tempArray[current],
        ];
        swapped = true;
      }
    }

    // if no items have been swapped on the current iteration, the list is sorted
    // break out of the outer for loop as the list is sorted
    if (!swapped) break;
  }
  return tempArray;
};

let array = [3, 2, 4, 5, 6, 1, 2, 3, 100];

console.log(handleBubbleSort(array));
