import './HeroBanner.css';
import heroImage from '../assets/hb_blur.jpg';
const HeroBanner = () => {
  return (
    <div className="hero-banner" style={{ backgroundImage: `url(${heroImage})` }}>
      {/* might need to make the text their own div and paragraph in the future for better mobile adaptation in the future */}
      <div className="hero-content"></div>
    </div>
  );
};

export default HeroBanner;
