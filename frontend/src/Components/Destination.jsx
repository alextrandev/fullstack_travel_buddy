const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Tourist Destinations</h1>
      <div className="popular-destinations">
        {destinations.map((destination) => (
          <div className="destination-card" key={destination.city}>
            <img
              src={destination.imageUrl}
              alt={`Image of ${destination.city}`}
              className="destination-image"
            />
            <h3>{destination.city}</h3>
            <p>{destination.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destination;
