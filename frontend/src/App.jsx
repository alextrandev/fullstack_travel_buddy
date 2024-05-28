import HeroBanner from "./Components/HeroBanner"
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Components/Navbar";

export default function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Navbar />
          <HeroBanner />
        </div>
      </Router>
    </>
  );
}
