import "./Herobanner.css";
import heroImage from "../assets/hb_blur.jpg";

const HeroBanner = () => {
  return (
    <div
      className="hero-banner"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="hero-content"></div>
    </div>
  );
};

export default HeroBanner;
