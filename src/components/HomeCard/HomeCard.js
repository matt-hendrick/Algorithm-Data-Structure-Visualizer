import React from 'react';

function HomeCard(props) {
  return (
    <div
      style={{
        width: '45%',
        textAlign: 'center',
        backgroundColor: '#1aab8a',
        color: '#fff',
        padding: '5px',
      }}
    >
      <a href={props.link}>
        <img src={props.image} alt={props.header} style={{ width: '60%' }} />
      </a>
      <h5>
        <a href={props.link} style={{ color: '#fff', fontSize: '.7em' }}>
          {props.header}
        </a>
      </h5>
    </div>
  );
}

export default HomeCard;
