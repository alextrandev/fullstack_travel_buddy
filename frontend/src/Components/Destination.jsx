import { Link } from "react-router-dom";
import "./Destination.css";
import Map from "./Map.jsx";
import SearchBar from "./SearchBar.jsx";
import SearchResult from "./SearchResult.jsx";
import Divider from "./Divider.jsx";
import HeroBanner from "./HeroBanner.jsx";

const Destination = ({ destinations, handleSubmit, showSearchResults, searchResults }) => {

  return (
    <>
      <HeroBanner />
      <div className="destination">
        <Divider />
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
        <Divider />
        <div className="search">
          <SearchBar handleSubmit={handleSubmit} />
          {showSearchResults && <SearchResult results={searchResults} />}
        </div>
        <Divider />
        <div className="map">
          <Map />
        </div>
        <Divider />
      </div>
    </>
  );
};

export default Destination;
