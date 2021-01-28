import React from 'react';

function QueueNode(props) {
  return (
    <div
      style={{
        padding: '30px 10px 30px 10px',
        border: '1px solid black',
        alignSelf: 'center',
      }}
    >
      {props.children}
    </div>
  );
}

export default QueueNode;
