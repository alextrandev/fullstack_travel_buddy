import { Link } from "react-router-dom";
import "./Destination.css";
import Map from "./Map.jsx";

const Destination = ({ destinations }) => {

  return (
    <div className="destination">
      <h1>Popular Tourist Destinations</h1>
      <div className="popular-destinations">
        {destinations.map((destination) => (
          <div className="destination-card" key={destination.city}>
            <Link to={`/city/${destination.city}`}>
              <img
                src={destination.imageUrl}
                alt={`Image of ${destination.city}`}
                className="destination-image"
              />
              <h3>{destination.city}</h3>
              <p>{destination.description}</p>
            </Link>
          </div>
        ))}
      </div>
      <div className="map">
        <Map />
      </div>
    </div>
  );
};

export default Destination;
