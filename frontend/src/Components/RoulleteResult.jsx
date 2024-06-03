import { Link } from "react-router-dom";
import { random } from "../functions/functions";
import LoadingImage from "./LoadingImage";

export default function RoulleteResult({ destinations }) {
  if (destinations.length == 0) {
    return <LoadingImage size={400} />
  }

  const rouletteResults = [];
  for (let i = 3; i--;) rouletteResults.push(destinations[random(destinations.length)])
  console.log(rouletteResults);

  return (
    <div className="destination">
      <div className="popular-destinations" style={{ gridTemplateColumns: '1fr 1fr 1fr' }}>
        {rouletteResults.map((destination) => (
          <Link key={destination.city} to={`/city/${destination.city}`}>
            <div className="destination-card">
              <img
                src={destination.imageUrl}
                alt={`Image of ${destination.city}`}
                className="destination-image"
              />
            </div>
            <h3 className="destination-name">{destination.city}</h3>
          </Link>
        ))}
      </div>
    </div>
  )
}
