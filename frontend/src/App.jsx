import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HeroBanner from "./Components/HeroBanner.jsx";
import Destination from "./Components/Destination.jsx";
import SearchBar from "./Components/SearchBar.jsx";
import SearchResult from "./Components/SearchResult.jsx"
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";


const App = () => {
  const [results, setResults] =useState([]);
  const handleSearch = (query) => {
    //console.log('Searching for:', query);
    useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}destinations/`)
      .then((res) => setDestinations(res.data))
      .catch((err) => console.log(err));
  }, []);
  };
  


  return (
    <>
      <Router>
        <div className="App">
          <Navbar />
          <HeroBanner />
          <Destination />
          <SearchBar onSearch={handleSearch } />
          <SearchResult results={results} />
          

        </div>
      </Router>
      </>
    
  );
};
export default App;
  
