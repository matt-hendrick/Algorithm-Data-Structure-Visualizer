import React from 'react';

const RectangularNode = (props) => {
  return (
    <div
      style={{
        width: '100%',
        height: '5vh',
        border: '1px solid black',
        textAlign: 'center',
        justifyItems: 'center',
      }}
    >
      <div style={{ paddingTop: '1vh' }}>{props.children}</div>
    </div>
  );
};

export default RectangularNode;
