import React from 'react';
import * as classes from './SortingTypeInfo.module.css';
import {
  bubbleSortCode,
  bubbleSortDescription,
  insertionSortCode,
  insertionSortDescription,
  selectionSortCode,
  selectionSortDescription,
  quickSortCode,
  quickSortDescription,
  heapSortCode,
  heapSortDescription,
  mergeSortCode,
  mergeSortDescription,
  bogoSortCode,
  bogoSortDescription,
} from './SortingTypeInfoText';

const SortingTypeDescriptions = (props) => {
  let sortingDescription;
  let code;

  const { sortingType, sortingSteps, currentStep } = props;

  if (sortingType === 'Bubble Sort') {
    sortingDescription = bubbleSortDescription;
    code = bubbleSortCode;
  } else if (sortingType === 'Insertion Sort') {
    sortingDescription = insertionSortDescription;
    code = insertionSortCode;
  } else if (sortingType === 'Selection Sort') {
    sortingDescription = selectionSortDescription;
    code = selectionSortCode;
  } else if (sortingType === 'Quick Sort') {
    sortingDescription = quickSortDescription;
    code = quickSortCode;
  } else if (sortingType === 'Heap Sort') {
    sortingDescription = heapSortDescription;
    code = heapSortCode;
  } else if (sortingType === 'Merge Sort') {
    sortingDescription = mergeSortDescription;
    code = mergeSortCode;
  } else if (sortingType === 'Bogo Sort') {
    sortingDescription = bogoSortDescription;
    code = bogoSortCode;
  }

  return (
    <div>
      <div>
        <h3>
          Number of steps required to sort this array with{' '}
          {sortingType.toLowerCase()}
          {sortingType !== 'Bogo Sort'
            ? `: ${sortingSteps.length}`
            : " is unknown as bogo sort's average run time is O(n!)"}
        </h3>
        <h3>Current Step: {currentStep}</h3>
      </div>
      <div className={classes.SortingTypeWrapper}>
        <pre className={classes.SortingTypeCodeBlock}>
          <code>{code}</code>
        </pre>
        <div className={classes.SortingTypeDescriptionBlock}>
          <h4>{sortingType}</h4>
          <div>{sortingDescription}</div>
        </div>
      </div>
    </div>
  );
};

export default SortingTypeDescriptions;
