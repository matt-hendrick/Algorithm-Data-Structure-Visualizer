import React from 'react';

import * as classes from './Input.module.css';

const Input = (props) => {
  return (
    <input
      className={classes.Input}
      type={props.elementType}
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder}
    />
  );
};

export default Input;
