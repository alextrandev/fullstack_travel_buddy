import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Herobanner from "./Components/Herobanner";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Herobanner />
      </div>
    </Router>
  );
}

export default App;
