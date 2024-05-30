const CityInfo = () => {
  /* Display City name, image and description*/
  return (
    <div className="city-info">
      <h1>{cityData.city}</h1>
      <img
        src={cityData.imageUrl}
        alt={`Image of ${cityData.city}`}
        className="city-image"
      />
      <p>{cityData.description}</p>
    </div>
  );
};

export default CityInfo;
