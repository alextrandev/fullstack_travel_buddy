import { useState } from 'react';
import { Link } from "react-router-dom";
import LoadingImage from "../utility/LoadingImage";
import Image from '../utility/Image';

export default function RouletteResult({ destinations }) {
  const [clickedIndex, setClickedIndex] = useState(null);

  if (destinations.length === 0) {
    return <LoadingImage size={400} />;
  }

  // create an array of destinations array index, shuffle it and take 3
  const rouletteLottery = destinations.map((destinations, index) => index).sort(() => Math.random() - 0.5).slice(0, 3);
  // get the destinations element match the lottery index
  const rouletteResults = rouletteLottery.map(index => destinations[index]);

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
      <h2>Pick a card to see your mystery destination!</h2>
      <div className="popular-destinations roulette-grid" >
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
                <Image
                  url={destination.imageUrl}
                  className="destination-image"
                  size={250}
                  text={false}
                />
              </div>
              <h3 className="destination-name">{destination.city}</h3>
            </Link>
          </div>
        ))}
      </div>
      {clickedIndex !== null && <h2>The Tarot reader said: You going to {rouletteResults[clickedIndex].city}!</h2>}
    </div >
  );
}
