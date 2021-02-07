import React from 'react';

const Input = (props) => {
  return (
    <div className="Input">
      <input
        className="InputElement"
        type={props.elementType}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default Input;
