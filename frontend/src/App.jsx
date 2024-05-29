import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HeroBanner from "./Components/HeroBanner.jsx";
import Destination from "./Components/Destination.jsx";

export default function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Navbar />
          <HeroBanner />
          <Destination />
        </div>
      </Router>
    </>
  );
}
