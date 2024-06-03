import "./Destination.css";
import Map from "../Components/Map.jsx";
import SearchBar from "../Components/SearchBar.jsx";
import SearchResult from "../Components/SearchResult.jsx";
import Divider from "../Components/Divider.jsx";
import HeroBanner from "../Components/HeroBanner.jsx";
import DestinationCard from "../Components/DestinationCard.jsx";
import RoulleteResult from "../Components/RoulleteResult.jsx";

const Destination = ({ destinations, handleSubmit, showSearchResults, searchResults, coordinates }) => {
  return (
    <>
      <HeroBanner />
      <div className="destination">
        <Divider />
        <h1>Popular Tourist Destinations</h1>
        <div className="popular-destinations">
          {destinations.map((destination) => (
            <DestinationCard
              key={destination.city}
              destination={destination}
            />
          ))}
        </div>
        <Divider />
        <div className="search">
          <SearchBar handleSubmit={handleSubmit} />
          {showSearchResults && <SearchResult results={searchResults} />}
          <RoulleteResult destinations={destinations} />
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
