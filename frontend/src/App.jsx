import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Destination from "./Routes/Destination.jsx";
import CityInfo from "./Routes/CityInfo";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";


const App = () => {
  const [destinations, setDestinations] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [destinationsCoordinates, setDestinationsCoordinates] = useState([]);
  const [attractionsCoordinates, setAttractionsCoordinates] = useState([]);

  useEffect(() => {
    // get destinations data from backend
    axios
      .get(`${import.meta.env.VITE_API_URL}destinations`)
      .then((res) => setDestinations(res.data))
      .catch((err) => {
        console.log(err)
      });

    // get coordinate data for the map component from backend
    axios
      .get(`${import.meta.env.VITE_API_URL}coordinates`)
      .then((res) => setDestinationsCoordinates(res.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSubmit = query => {
    setShowSearchResults(true);
    axios
      .get(`${import.meta.env.VITE_API_URL}destinations`)
      .then(res => setSearchResults(res.data.filter(item => item.city.toLowerCase().includes(query.trim().toLowerCase()))))
      .catch((err) => console.log(err))
  };

  return (
    <>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <Destination
                  destinations={destinations}
                  handleSubmit={handleSubmit}
                  showSearchResults={showSearchResults}
                  searchResults={searchResults}
                  coordinates={destinationsCoordinates}
                />
              }
            />
            <Route
              path="/city/:cityName"
              element={
                <CityInfo
                  coordinates={attractionsCoordinates}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </>

  );
};
export default App;

