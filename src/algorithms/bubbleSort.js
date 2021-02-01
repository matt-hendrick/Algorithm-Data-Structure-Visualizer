const { swap } = require('./sortingUtilityFunctions');

function bubbleSort(inputArray) {
  let arr = [...inputArray];
  for (let i = 1; i < arr.length; i++) {
    let swapped = false;

    for (let current = 0; current < arr.length - i; current++) {
      if (arr[current][0] > arr[current + 1][0]) {
        swap(arr, current, current + 1);
        swapped = true;
      }
    }

    if (!swapped) break;
  }

  return arr;
}

module.exports = { bubbleSort };
