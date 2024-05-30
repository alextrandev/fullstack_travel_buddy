import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HeroBanner from "./Components/HeroBanner.jsx";
import Destination from "./Components/Destination.jsx";
import CityInfo from "./Routes/CityInfo";

export default function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Navbar />
          <HeroBanner />
          <Routes>
            <Route path="/" Component={Destination} />
            <Route path="/city/:cityName" Component={CityInfo} />
          </Routes>
        </div>
      </Router>
    </>
  );
}
