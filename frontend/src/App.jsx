import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HeroBanner from "./Components/HeroBanner.jsx";
import Destination from "./Components/Destination.jsx";
import CityInfo from "./Routes/CityInfo";
import SearchBar from "./Components/SearchBar.jsx";
import SearchResult from "./Components/SearchResult.jsx"
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";


const App = () => {
  const [destinations, setDestinations] = useState([]);
  const [results, setResults] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}destinations`)
      .then((res) => setDestinations(res.data))
      .catch((err) => {
        console.log(err)
        setDestinations([
          { city: 'Paris', imageUrl: 'https://source.unsplash.com/400x400/?paris' },
          { city: 'New York', imageUrl: 'https://source.unsplash.com/400x400/?New York' },
          { city: 'Tokyo', imageUrl: 'https://source.unsplash.com/400x400/?Tokyo' },
          { city: 'Sydney', imageUrl: 'https://source.unsplash.com/400x400/?Sydney' },
          { city: 'Cape Town', imageUrl: 'https://source.unsplash.com/400x400/?Cape Town' },
          { city: 'Rio de Janeiro', imageUrl: 'https://source.unsplash.com/400x400/?Rio de Janeiro' },
          { city: 'London', imageUrl: 'https://source.unsplash.com/400x400/?London' },
          { city: 'Dubai', imageUrl: 'https://source.unsplash.com/400x400/?Dubai' },
          { city: 'Rome', imageUrl: 'https://source.unsplash.com/400x400/?Rome' },
          { city: 'Barcelona', imageUrl: 'https://source.unsplash.com/400x400/?Barcelona' },
          { city: 'St. Petersburg', imageUrl: 'https://source.unsplash.com/400x400/?St. Petersburg' },
          { city: 'Bangkok', imageUrl: 'https://source.unsplash.com/400x400/?Bangkok' },
        ]) // this workaround just to help migitate a problem during development. delete it in production build
      });
  }, []);

  const handleSubmit = query => {
    axios
      .get(`${import.meta.env.VITE_API_URL}destinations`)
      .then(res => setResults(res.data.filter(item => item.city.toLowerCase().includes(query.trim().toLowerCase()))))
      .catch((err) => console.log(err))
  };

  return (
    <>
      <Router>
        <div className="App">
          <Navbar />
          <HeroBanner />
          <Routes>
            <Route path="/" element={<Destination destinations={destinations} />} />
            <Route path="/city/:cityName" element={CityInfo} />
          </Routes>
          <SearchBar handleSubmit={handleSubmit} />
          <SearchResult results={results} />
        </div>
      </Router>
    </>

  );
};
export default App;

