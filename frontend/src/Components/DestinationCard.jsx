import { Link } from "react-router-dom";
import "../Routes/Destination.css";
import Image from "./Image.jsx";

const DestinationCard = ({ destination }) => {
  return (
    <Link key={destination.city} to={`/city/${destination.city}`}>
      <div className="destination-card">
        <Image
          url={destination.imageUrl}
          className="destination-image"
          size={250}
          text={false}
        />
      </div>
      <h3 className="destination-name">{destination.city}</h3>
    </Link>
  );
};

export default DestinationCard;
