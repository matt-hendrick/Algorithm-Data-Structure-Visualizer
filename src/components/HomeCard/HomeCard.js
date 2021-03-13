import React from 'react';

import * as classes from './HomeCard.module.css';

function HomeCard(props) {
  return (
    <div className={classes.HomeCardBox}>
      <a href={props.link}>
        <img
          src={props.image}
          alt={props.header}
          className={classes.HomeCardImage}
        />
      </a>
      <h5>
        <a href={props.link} className={classes.HomeCardLink}>
          {props.header}
        </a>
      </h5>
    </div>
  );
}

export default HomeCard;
