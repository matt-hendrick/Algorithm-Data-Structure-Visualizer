import React from 'react';

import * as classes from './HomeCard.module.css';

function HomeCard(props) {
  return (
    <div className={classes.HomeCardBox}>
      <h5>
        <a href={props.link} className={classes.HomeCardLink}>
          <img
            src={props.image}
            alt={props.header}
            className={classes.HomeCardImage}
          />
          {props.header}
        </a>
      </h5>
    </div>
  );
}

export default HomeCard;
