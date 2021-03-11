import React from 'react';

function HomeCard(props) {
  return (
    <div
      style={{
        border: '1px solid black',
        width: '30%',
        textAlign: 'center',
        textDecoration: 'none',
      }}
    >
      <h5>
        <a href={props.link}>{props.header}</a>
      </h5>
    </div>
  );
}

export default HomeCard;
