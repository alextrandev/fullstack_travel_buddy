import "./Homepage.css";
import Map from "../Components/utility/Map.jsx";
import SearchBar from "../Components/home/SearchBar.jsx";
import SearchResult from "../Components/home/SearchResult.jsx";
import Divider from "../Components/layout/Divider.jsx";
import HeroBanner from "../Components/home/HeroBanner.jsx";
import RoulleteResult from "../Components/home/RoulleteResult.jsx";
import DestinationCardGrid from "../Components/home/DestinationCardGrid.jsx";

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
