import React from 'react';
import * as classes from './MyButton.module.css';

function MyButton(props) {
  return (
    <button onClick={props.onClick} className={classes.MyButton}>
      {props.children}
    </button>
  );
}

export default MyButton;
