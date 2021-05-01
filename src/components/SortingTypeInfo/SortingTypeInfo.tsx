import './SortingTypeInfo.css';
import {
  bubbleSortInfo,
  insertionSortInfo,
  selectionSortInfo,
  quickSortInfo,
  heapSortInfo,
  mergeSortInfo,
  bogoSortInfo,
} from './SortingTypeInfoText';

interface Props {
  sortingType: string;
  sortingSteps?: number[];
  currentStep: number | string;
}

interface SortingInfo {
  description: string;
  code: string;
  list: JSX.Element;
}

const SortingTypeDescriptions = (props: Props) => {
  let sortingInfo: SortingInfo | null = null;

  const { sortingType, sortingSteps, currentStep } = props;

  if (sortingType === 'Bubble Sort') {
    sortingInfo = bubbleSortInfo;
  } else if (sortingType === 'Insertion Sort') {
    sortingInfo = insertionSortInfo;
  } else if (sortingType === 'Selection Sort') {
    sortingInfo = selectionSortInfo;
  } else if (sortingType === 'Quick Sort') {
    sortingInfo = quickSortInfo;
  } else if (sortingType === 'Heap Sort') {
    sortingInfo = heapSortInfo;
  } else if (sortingType === 'Merge Sort') {
    sortingInfo = mergeSortInfo;
  } else if (sortingType === 'Bogo Sort') {
    sortingInfo = bogoSortInfo;
  }

  return (
    <div>
      <div>
        <h3>
          Number of steps required to sort this array with{' '}
          {sortingType.toLowerCase()}
          {sortingType !== 'Bogo Sort' && sortingSteps
            ? `: ${sortingSteps.length}`
            : " is unknown as bogo sort's average run time is O((n+1)!)"}
        </h3>
        <h3>Current Step: {currentStep}</h3>
      </div>
      <div className="sorting-type-wrapper">
        <pre className="sorting-type-code-block">
          <code>{sortingInfo?.code}</code>
        </pre>
        <div className="sorting-type-description-block">
          <h4>{sortingType}</h4>
          <div>{sortingInfo?.description}</div>
          {sortingInfo?.list}
        </div>
      </div>
    </div>
  );
};

export default SortingTypeDescriptions;
