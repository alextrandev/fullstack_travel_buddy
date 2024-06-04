import { Link } from "react-router-dom";
import Image from "./Image";

const SearchResults = ({ results }) => {
  if (results.length == 0) {
    return <div><p>No results found</p></div>
  }

  return (
    <div className="destination">
      <div className="popular-destinations">
        {results.map((destination) => (
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
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
