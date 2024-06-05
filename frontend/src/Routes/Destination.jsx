import "./Destination.css";
import Map from "../Components/Map.jsx";
import SearchBar from "../Components/SearchBar.jsx";
import SearchResult from "../Components/SearchResult.jsx";
import Divider from "../Components/Divider.jsx";
import HeroBanner from "../Components/HeroBanner.jsx";
import DestinationCard from "../Components/DestinationCard.jsx";
import RoulleteResult from "../Components/RoulleteResult.jsx";
import LoadingImage from "../Components/LoadingImage.jsx";

const Destination = ({ destinations, handleSubmit, showSearchResults, searchResults, showRoullete, handleRoullete, coordinates }) => {
  return (
    <>
      <HeroBanner />
      <div className="destination">
        <Divider />
        <div className="search">
          <SearchBar handleSubmit={handleSubmit} handleRoullete={handleRoullete} />
          {showSearchResults && <SearchResult results={searchResults} />}
          {showRoullete && <RoulleteResult destinations={destinations} />}
        </div>
        <Divider />
        <h1>Popular Tourist Destinations</h1>
        <div className="popular-destinations">
          {Array.isArray(destinations) && destinations.length > 0
            ? destinations.map((destination) => (
              <DestinationCard
                key={destination.city}
                destination={destination}
              />
            ))
            : <LoadingImage size={500} />
          }
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
