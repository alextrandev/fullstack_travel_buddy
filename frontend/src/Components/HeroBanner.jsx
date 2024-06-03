import "./HeroBanner.css";
import heroImage from "../assets/herobaner1.jpeg";

const HeroBanner = () => {
  return (
    <div className="hero-banner" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="hero-banner__text">
        <h1>FOREMAP</h1>
        <p>Traveller little helper</p>
      </div>
    </div>
  );
};

export default HeroBanner;