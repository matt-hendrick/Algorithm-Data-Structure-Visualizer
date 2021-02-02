const merge = (array1, array2 = []) => {
  const mergedLength = array1.length + array2.length;
  const mergedArray = Array(mergedLength);

  // merge elements on a and b in asc order. Run-time O(a + b)
  for (let index = 0, i1 = 0, i2 = 0; index < mergedLength; index++) {
    if (
      i2 >= array2.length ||
      (i1 < array1.length && array1[i1] <= array2[i2])
    ) {
      mergedArray[index] = array1[i1];
      i1 += 1;
    } else {
      mergedArray[index] = array2[i2];
      i2 += 1;
    }
  }
  return mergedArray;
};

const splitSort = (array) => {
  const size = array.length;
  // base case
  if (size < 2) {
    return array;
  }
  if (size === 2) {
    return array[0] < array[1] ? array : [array[1], array[0]];
  }

  // recursive split in half and merge back
  const half = Math.ceil(size / 2);
  return merge(splitSort(array.slice(0, half)), splitSort(array.slice(half)));
};

const handleMergeSort = () => {
  const tempArr = [...arr];
  return splitSort(tempArr);
};

const handleMergeSort = () => {
  let tempArr = [...arr];
  let len = tempArr.length;
  // Creates a buffer to push all result elements into on each
  // iteration
  let buffer = [];

  // size increases by 2 every loop
  for (let size = 1; size < len; size *= 2) {
    // leftStart increases by 2 * size every loop
    // This acts as the first index of each pair in the arr
    for (let leftStart = 0; leftStart < len; leftStart += 2 * size) {
      // The left index is a copy of the leftStart
      let left = leftStart;

      // The right index will be the smaller of the left +
      // the current size or the length of the array
      let right = Math.min(left + size, len);

      // The left limit will be whatever the right index is
      let leftLimit = right;
      // The right limit will be the smaller of the right +
      // the current size or the length of the array
      let rightLimit = Math.min(right + size, len);
      // The iterator will be a copy of the left
      let i = left;
      // The first while loop will check if the left and right
      // indexes are both less than their limits
      // Then it will push which ever value is smaller into
      // the buffer array, increases the iterator and the
      // index values, exit the loop
      while (left < leftLimit && right < rightLimit) {
        if (tempArr[left][0] <= tempArr[right][0]) {
          buffer[i] = tempArr[left];
          tempBufferArray[i] = buffer[i];
          left++;
          i++;
        } else {
          buffer[i] = tempArr[right];
          tempBufferArray[i] = buffer[i];
          right++;
          i++;
        }
      }
      // This loop checks if the left index is smaller than its
      // limit if true it adds that value to the buffer
      while (left < leftLimit) {
        buffer[i] = tempArr[left];
        tempBufferArray[i] = buffer[i];
        left++;
        i++;
      }
      // This loop checks if the right index is smaller than its
      // limit if true it adds that value to the buffer
      while (right < rightLimit) {
        buffer[i] = tempArr[right];
        tempBufferArray[i] = buffer[i];
        right++;
        i++;
      }
    }
    // These are created after each inner loop completes
    // Create a temp array that is a copy of the original tempArr
    // array (unsorted values)
    // The tempArr array replaces all of its values with the buffer
    // array (fully or partially sorted)
    // The buffer then copies the unsorted temp array, which is
    // used again in the next inner loop iteration
    tempSortingStepsArray.push(tempBufferArray);
    let temp = tempArr;
    tempArr = buffer;
    buffer = temp;
  }

  setSortingSteps(tempSortingStepsArray);
  setCurrentStep(0);
  setIsRunning(true);
  setSortingType('Merge Sort');
  setSortingSpeed(500);
  // return tempArr;
};

const handleMergeSortV2 = () => {
  let tempArr = [...arr];
  let len = tempArr.length;
  // Creates a buffer to push all result elements into on each
  // iteration
  let buffer = [];

  // size increases by 2 every loop
  for (let size = 1; size < len; size *= 2) {
    // leftStart increases by 2 * size every loop
    // This acts as the first index of each pair in the arr
    for (let leftStart = 0; leftStart < len; leftStart += 2 * size) {
      // The left index is a copy of the leftStart
      let left = leftStart;

      // The right index will be the smaller of the left +
      // the current size or the length of the array
      let right = Math.min(left + size, len);

      // The left limit will be whatever the right index is
      let leftLimit = right;
      // The right limit will be the smaller of the right +
      // the current size or the length of the array
      let rightLimit = Math.min(right + size, len);
      // The iterator will be a copy of the left
      let i = left;
      // The first while loop will check if the left and right
      // indexes are both less than their limits
      // Then it will push which ever value is smaller into
      // the buffer array, increases the iterator and the
      // index values, exit the loop
      console.log(left, buffer);
      while (left < leftLimit && right < rightLimit) {
        if (tempArr[left][0] <= tempArr[right][0]) {
          buffer[i] = tempArr[left];
          tempSortingStepsArray.push(buffer);
          left++;
          i++;
        } else {
          buffer[i] = tempArr[right];
          tempSortingStepsArray.push(buffer);
          right++;
          i++;
        }
      }
      // This loop checks if the left index is smaller than its
      // limit if true it adds that value to the buffer
      while (left < leftLimit) {
        buffer[i] = tempArr[left];
        tempSortingStepsArray.push(buffer);
        left++;
        i++;
      }
      // This loop checks if the right index is smaller than its
      // limit if true it adds that value to the buffer
      while (right < rightLimit) {
        buffer[i] = tempArr[right];
        tempSortingStepsArray.push(buffer);
        right++;
        i++;
      }
    }
    // These are created after each inner loop completes
    // Create a temp array that is a copy of the original tempArr
    // array (unsorted values)
    // The tempArr array replaces all of its values with the buffer
    // array (fully or partially sorted)
    // The buffer then copies the unsorted temp array, which is
    // used again in the next inner loop iteration
    tempSortingStepsArray.push(buffer);
    let temp = tempArr;
    tempArr = buffer;
    buffer = temp;
  }

  setSortingSteps(tempSortingStepsArray);
  setCurrentStep(0);
  setIsRunning(true);
  setSortingType('Merge Sort');
  setSortingSpeed(500);
  // return tempArr;
};
