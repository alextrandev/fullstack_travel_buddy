import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import About from "./Routes/About.jsx";
import "./App.css";
import Footer from "./Components/Footer.jsx";
import axios from "axios";
import { useEffect, useState } from "react";
import Homepage from "./Routes/Homepage.jsx";
import Destination from "./Routes/Destination.jsx";

const App = () => {
  const [destinations, setDestinations] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [showRoullete, setShowRoullete] = useState(false);
  const [destinationsCoordinates, setDestinationsCoordinates] = useState([]);

  useEffect(() => {
    // get destinations data from backend
    axios
      .get(`${import.meta.env.VITE_API_URL}destinations`)
      .then((res) => setDestinations(res.data))
      .catch((err) => {
        console.log(err);
      });

    // get coordinate data for the map component from backend
    axios
      .get(`${import.meta.env.VITE_API_URL}coordinates`)
      .then((res) => setDestinationsCoordinates(res.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSubmit = (query) => {
    setShowSearchResults(true);
    setShowRoullete(false);
    axios
      .get(`${import.meta.env.VITE_API_URL}destinations`)
      .then((res) =>
        setSearchResults(
          res.data.filter((item) =>
            item.city.toLowerCase().includes(query.trim().toLowerCase())
          )
        )
      )
      .catch((err) => console.log(err));
  };

  const handleRoullete = (e) => {
    e.preventDefault();
    setShowSearchResults(false);
    setShowRoullete(true);
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
                <Homepage
                  destinations={destinations}
                  handleSubmit={handleSubmit}
                  handleRoullete={handleRoullete}
                  showSearchResults={showSearchResults}
                  showRoullete={showRoullete}
                  searchResults={searchResults}
                  coordinates={destinationsCoordinates}
                />
              }
            />
            <Route
              path="/city/:cityName"
              element={
                <Destination />
              }
            />
            <Route
              path="/about"
              element={
                <About />
              }
            />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
};
export default App;
