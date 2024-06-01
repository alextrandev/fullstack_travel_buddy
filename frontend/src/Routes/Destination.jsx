import { Link } from "react-router-dom";
import "./Destination.css";
import Map from "../Components/Map.jsx";
import SearchBar from "../Components/SearchBar.jsx";
import SearchResult from "../Components/SearchResult.jsx";
import Divider from "../Components/Divider.jsx";
import HeroBanner from "../Components/HeroBanner.jsx";

const Destination = ({ destinations, handleSubmit, showSearchResults, searchResults, coordinates }) => {

  return (
    <>
      <HeroBanner />
      <div className="destination">
        <Divider />
        <h1>Popular Tourist Destinations</h1>
        <div className="popular-destinations">
          {destinations.map((destination) => (
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
        <Divider />
        <div className="search">
          <SearchBar handleSubmit={handleSubmit} />
          {showSearchResults && <SearchResult results={searchResults} />}
        </div>
        <Divider />
        <div className="map">
          <Map
            coordinates={coordinates}
            centerCoordinates={[33, 10]}
            fullMap={true}
          />
        </div>
        <Divider />
      </div>
    </>
  );
};

export default Destination;
