import { useState } from 'react';
import { Link } from "react-router-dom";
import { random } from "../functions/functions";
import LoadingImage from "./LoadingImage";
import './WeatherInfo.css';

export default function RouletteResult({ destinations }) {
  const [clickedIndex, setClickedIndex] = useState(null);

  if (destinations.length === 0) {
    return <LoadingImage size={400} />;
  }

  const rouletteResults = [];
  for (let i = 3; i--;) rouletteResults.push(destinations[random(destinations.length)]);

  const handleClick = (index) => {
    setClickedIndex(index);
  };

  const handleLinkClick = (e, index) => {
    if (clickedIndex === null || clickedIndex !== index) {
      e.preventDefault(); // Prevent the default behavior of the link
    }
  };

  return (
    <div className="destination">
      <h2>Choose a card to see your mistery destination!</h2>
      <div
        className="popular-destinations"
        style={{
          gridTemplateColumns: '1fr 1fr 1fr',
          padding: '70px',
          paddingTop: '20px'
        }}>
        {rouletteResults.map((destination, index) => (
          <div
            key={destination.city}
            className={clickedIndex === index ? "show" : clickedIndex === null ? "hide" : "hide disabled"}
            onClick={() => handleClick(index)}
          >
            <Link
              key={destination.city}
              to={`/city/${destination.city}`}
              onClick={e => handleLinkClick(e, index)}
            >
              <div className="destination-card">
                <img
                  src={destination.imageUrl}
                  alt={`Image of ${destination.city}`}
                  className="destination-image"
                />
              </div>
              <h3 className="destination-name">{destination.city}</h3>
            </Link>
          </div>
        ))}
      </div>
      {clickedIndex && <h2>The Oracle said: You going to {rouletteResults[clickedIndex].city}!</h2>}
    </div>
  );
}
