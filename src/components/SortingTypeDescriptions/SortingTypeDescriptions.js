import React from 'react';
import * as classes from './SortingTypeDescriptions.module.css';

const bubbleSortDescription =
  'Bubble sort is a sorting algorithm that sorts items by comparing each adjacent pair of items in a list in turn, swapping the items if necessary, and repeating the pass through the list until no swaps are done.';
const bubbleSortCode = `const handleBubbleSort = (unsortedArray) => {
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
      if (!swapped) break;
    }
    return tempArray;
  };`;

function SortingTypeDescriptions(props) {
  let sortingDescription;
  let code;

  const { sortingType } = props;

  if (sortingType === 'Bubble Sort') {
    sortingDescription = bubbleSortDescription;
    code = bubbleSortCode;
  }

  return (
    <div className={classes.SortingTypeWrapper}>
      <pre className={classes.SortingTypeCodeBlock}>
        <code> {code}</code>
      </pre>
      <div className={classes.SortingTypeDescriptionBlock}>
        <h4>{sortingType}</h4>
        <div>{sortingDescription}</div>
      </div>
    </div>
  );
}

export default SortingTypeDescriptions;
