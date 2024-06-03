import React from "react";
import { Link } from "react-router-dom";

const DestinationCard = ({ destination }) => {
  return (
    <div className="destination-card" key={destination.city}>
      <Link to={`/city/${destination.city}`}>
        <img
          src={destination.imageUrl}
          alt={`Image of ${destination.city}`}
          className="destination-image"
        />
        <h1>{destination.city}</h1>
        <p>{destination.description}</p>
      </Link>
    </div>
  );
};

export default DestinationCard;
