import React from 'react';

function RectangularNode(props) {
  return (
    <div
      style={{
        width: '100%',
        height: '10vh',
        border: '1px solid black',
        textAlign: 'center',
        justifyItems: 'center',
      }}
    >
      <div style={{ paddingTop: '3.3vh' }}>{props.children}</div>
    </div>
  );
}

export default RectangularNode;
