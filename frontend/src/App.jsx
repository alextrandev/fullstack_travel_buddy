import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HeroBanner from "./Components/HeroBanner.jsx";
import Destination from "./Components/Destination.jsx";
import SearchBar from "./Components/SearchBar.jsx";
import SearchResult from "./Components/SearchResult.jsx"
import "./App.css";
import axios from "axios";
import { useState } from "react";


const App = () => {
  const [results, setResults] = useState([]);

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
          <Destination />
          <SearchBar handleSubmit={handleSubmit} />
          <SearchResult results={results} />


        </div>
      </Router>
    </>

  );
};
export default App;

