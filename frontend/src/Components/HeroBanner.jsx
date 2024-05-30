import React from 'react';
import "./HeroBanner.css";
import heroImage from "../assets/hb_blur.jpg";

const HeroBanner = () => {
  const suggestedDestinations = [
    { city: 'Amsterdam', imageUrl: 'https://source.unsplash.com/400x400/?amsterdam' },
    { city: 'Berlin', imageUrl: 'https://source.unsplash.com/400x400/?berlin' },
    { city: 'Istanbul', imageUrl: 'https://source.unsplash.com/400x400/?istanbul' },
  ];

  return (
    <div className="hero-banner" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="hero-content">
        <h1>Discover the World's Best Destinations</h1>
        <Link to="/destinations" className="cta-button">Explore Destinations</Link>
        <div className="suggested-destinations">
          <h2>Suggested Destinations</h2>
          <div className="suggestion-cards">
            {suggestedDestinations.map((destination) => (
              <div className="suggestion-card" key={destination.city}>
                <img
                  src={destination.imageUrl}
                  alt={`Image of ${destination.city}`}
                  className="suggestion-image"
                />
                <h3>{destination.city}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;