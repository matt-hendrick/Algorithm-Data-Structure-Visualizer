import './HomeCard.css';

interface Props {
  header: string;
  link: string;
  image: any;
}

function HomeCard(props: Props) {
  return (
    <div className="home-card-box">
      <h5>
        <a href={props.link} className="home-card-link">
          <img
            src={props.image}
            alt={props.header}
            className="home-card-image"
          />
          {props.header}
        </a>
      </h5>
    </div>
  );
}

export default HomeCard;
