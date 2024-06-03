import { Link } from "react-router-dom";
import "../Routes/Destination.css";

const DestinationCard = ({ destination }) => {
  return (
    <Link to={`/city/${destination.city}`}>
      <div className="destination-card">
        <img
          src={destination.imageUrl}
          alt={`Image of ${destination.city}`}
          className="destination-image"
        />
      </div>
      <h3 className="destination-name">{destination.city}</h3>
    </Link>
  );
};

export default DestinationCard;
