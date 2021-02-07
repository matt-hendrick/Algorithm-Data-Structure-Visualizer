import React from 'react';
import * as classes from './SortingTypeInfo.module.css';
import {
  bubbleSortCode,
  bubbleSortDescription,
  insertionSortCode,
  insertionSortDescription,
  selectionSortCode,
  selectionSortDescription,
  bogoSortCode,
  bogoSortDescription,
} from './SortingTypeInfoText';

const SortingTypeDescriptions = (props) => {
  let sortingDescription;
  let code;

  const { sortingType } = props;

  if (sortingType === 'Bubble Sort') {
    sortingDescription = bubbleSortDescription;
    code = bubbleSortCode;
  } else if (sortingType === 'Insertion Sort') {
    sortingDescription = insertionSortDescription;
    code = insertionSortCode;
  } else if (sortingType === 'Selection Sort') {
    sortingDescription = selectionSortDescription;
    code = selectionSortCode;
  } else if (sortingType === 'Bogo Sort') {
    sortingDescription = bogoSortDescription;
    code = bogoSortCode;
  }

  return (
    <div className={classes.SortingTypeWrapper}>
      <pre className={classes.SortingTypeCodeBlock}>
        <code>{code}</code>
      </pre>
      <div className={classes.SortingTypeDescriptionBlock}>
        <h4>{sortingType}</h4>
        <div>{sortingDescription}</div>
      </div>
    </div>
  );
};

export default SortingTypeDescriptions;
