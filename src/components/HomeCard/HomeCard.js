import React from 'react';

function HomeCard(props) {
  return (
    <div
      style={{
        width: '34%',
        textAlign: 'center',
        backgroundColor: '#39cccc',
        color: '#fff',
      }}
    >
      <h5>
        <a href={props.link} style={{ color: '#fff' }}>
          {props.header}
        </a>
      </h5>
    </div>
  );
}

export default HomeCard;
