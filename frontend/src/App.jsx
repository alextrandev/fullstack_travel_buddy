import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Destination from "./Routes/Destination.jsx";
import CityInfo from "./Routes/CityInfo";
import CityDescription from "./Components/CityDescriptionPage";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
  const [destinations, setDestinations] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}destinations`)
      .then((res) => setDestinations(res.data))
      .catch((err) => {
        console.log(err);
        setDestinations([
          {
            city: "Paris",
            imageUrl: "https://source.unsplash.com/400x400/?paris",
          },
          {
            city: "New York",
            imageUrl: "https://source.unsplash.com/400x400/?New York",
          },
          {
            city: "Tokyo",
            imageUrl: "https://source.unsplash.com/400x400/?Tokyo",
          },
          {
            city: "Sydney",
            imageUrl: "https://source.unsplash.com/400x400/?Sydney",
          },
          {
            city: "Cape Town",
            imageUrl: "https://source.unsplash.com/400x400/?Cape Town",
          },
          {
            city: "Rio de Janeiro",
            imageUrl: "https://source.unsplash.com/400x400/?Rio de Janeiro",
          },
          {
            city: "London",
            imageUrl: "https://source.unsplash.com/400x400/?London",
          },
          {
            city: "Dubai",
            imageUrl: "https://source.unsplash.com/400x400/?Dubai",
          },
          {
            city: "Rome",
            imageUrl: "https://source.unsplash.com/400x400/?Rome",
          },
          {
            city: "Barcelona",
            imageUrl: "https://source.unsplash.com/400x400/?Barcelona",
          },
          {
            city: "St. Petersburg",
            imageUrl: "https://source.unsplash.com/400x400/?St. Petersburg",
          },
          {
            city: "Bangkok",
            imageUrl: "https://source.unsplash.com/400x400/?Bangkok",
          },
        ]); // this workaround just to help migitate a problem during development. delete it in production build
      });
  }, []);

  const handleSubmit = (query) => {
    setShowSearchResults(true);
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
                />
              }
            />
            <Route path="/city/:cityName" element={CityDescription} />
          </Routes>
        </div>
      </Router>
    </>
  );
};
export default App;
