const SearchResults = ({ results }) => {
  if (results.length == 0) {
    return <div><p>No results found</p></div>
  }

  return (
    <div className="destination">
      <div className="popular-destinations">
        {results.map((destination) => (
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

export default SearchResults;
