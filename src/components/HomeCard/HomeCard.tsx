import React from 'react';

import './HomeCard.css';

interface Props {
  header: string;
  link: string;
  image: any;
}

function HomeCard(props: Props) {
  return (
    <div className="HomeCardBox">
      <h5>
        <a href={props.link} className="HomeCardLink">
          <img src={props.image} alt={props.header} className="HomeCardImage" />
          {props.header}
        </a>
      </h5>
    </div>
  );
}

export default HomeCard;
