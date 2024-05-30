import axios from "axios";
import { useEffect, useState } from "react";
import "./Destination.css";

const Destination = () => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}destinations/dawdw`)
      .then((res) => setDestinations(res.data))
      .catch((err) => {
        console.log(err)
        setDestinations([
          { city: 'Paris', imageUrl: 'https://source.unsplash.com/400x400/?paris' },
          { city: 'New York', imageUrl: 'https://source.unsplash.com/400x400/?New York' },
          { city: 'Tokyo', imageUrl: 'https://source.unsplash.com/400x400/?Tokyo' },
          { city: 'Sydney', imageUrl: 'https://source.unsplash.com/400x400/?Sydney' },
          { city: 'Cape Town', imageUrl: 'https://source.unsplash.com/400x400/?Cape Town' },
          { city: 'Rio de Janeiro', imageUrl: 'https://source.unsplash.com/400x400/?Rio de Janeiro' },
          { city: 'London', imageUrl: 'https://source.unsplash.com/400x400/?London' },
          { city: 'Dubai', imageUrl: 'https://source.unsplash.com/400x400/?Dubai' },
          { city: 'Rome', imageUrl: 'https://source.unsplash.com/400x400/?Rome' },
          { city: 'Barcelona', imageUrl: 'https://source.unsplash.com/400x400/?Barcelona' },
          { city: 'St. Petersburg', imageUrl: 'https://source.unsplash.com/400x400/?St. Petersburg' },
          { city: 'Bangkok', imageUrl: 'https://source.unsplash.com/400x400/?Bangkok' },
        ]) // this workaround just to help migitate a problem during development. delete it in production build
      });
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
