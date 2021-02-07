import React from 'react';
import * as classes from './SortingListItem.module.css';

function SortingListItem(props) {
  const { size } = props;
  return (
    <div className={classes.SortingListItemOuterDiv}>
      <div
        className={classes.SortingListItemInnerDiv}
        style={{
          height: size,
        }}
      ></div>
    </div>
  );
}

export default SortingListItem;
