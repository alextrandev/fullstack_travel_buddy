import "./Homepage.css";
import Map from "../Components/Map.jsx";
import SearchBar from "../Components/SearchBar.jsx";
import SearchResult from "../Components/SearchResult.jsx";
import Divider from "../Components/Divider.jsx";
import HeroBanner from "../Components/HeroBanner.jsx";
import RoulleteResult from "../Components/RoulleteResult.jsx";
import DestinationCardGrid from "../Components/DestinationCardGrid.jsx";

const Homepage = ({ destinations, handleSubmit, showSearchResults, searchResults, showRoullete, handleRoullete, coordinates }) => {
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
        <DestinationCardGrid destinations={destinations} />
        <Divider />
        <h1 id="map">World Map</h1>
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

export default Homepage;
