import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HeroBanner from "./Components/Herobanner.jsx";
import Destination from "./Components/Destination.jsx";
import TestApi from "./Components/TestApi";

export default function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Navbar />
          <HeroBanner />
          <Destination />
          <TestApi />
        </div>
      </Router>
    </>
  );
}
