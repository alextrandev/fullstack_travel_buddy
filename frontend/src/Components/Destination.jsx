import axios from "axios";
import { useEffect, useState } from "react";
import "./Destination.css";

const Destination = () => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}destinations/`)
      .then((res) => setDestinations(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="destination">
      <h1>Popular Tourist Destinations</h1>
      <div className="popular-destinations">
        {destinations.map((destination) => (
          <div className="destination-card" key={destination.city}>
            <img
              src={destination.imageUrl}
              alt={`Image of ${destination.city}`}
              className="destination-image"
            />
            <h3>{destination.city}</h3>
            <p>{destination.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destination;
