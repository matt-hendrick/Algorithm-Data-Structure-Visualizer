import React from 'react';
import * as classes from './MyButton.module.css';

const MyButton = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={props.disabled ? classes.MyButtonDisabled : classes.MyButton}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default MyButton;
