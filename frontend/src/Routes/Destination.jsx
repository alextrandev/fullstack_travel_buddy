import { Link } from "react-router-dom";
import "./Destination.css";
import Map from "../Components/Map.jsx";
import SearchBar from "../Components/SearchBar.jsx";
import SearchResult from "../Components/SearchResult.jsx";
import Divider from "../Components/Divider.jsx";
import HeroBanner from "../Components/HeroBanner.jsx";
import Image from "../Components/Image.jsx";

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
        <Divider />
        <div className="search">
          <SearchBar handleSubmit={handleSubmit} />
          {showSearchResults && <SearchResult results={searchResults} />}
        </div>
        <Divider />
        <h1>World Map</h1>
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
