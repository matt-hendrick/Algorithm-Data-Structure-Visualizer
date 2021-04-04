import React from 'react';
import './SortingListItem.css';

interface Props {
  size: number | string;
}

const SortingListItem = (props: Props) => {
  const { size } = props;
  return (
    <div className="SortingListItemOuterDiv">
      <div
        className="SortingListItemInnerDiv"
        style={{
          height: size,
        }}
      ></div>
    </div>
  );
};

export default SortingListItem;
