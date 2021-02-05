import React from 'react';
import './MyButton.css';

function MyButton(props) {
  return (
    <button onClick={props.onClick} className="MyButton">
      {props.children}
    </button>
  );
}

export default MyButton;
