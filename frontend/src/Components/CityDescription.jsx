import "./CityDescription.css";

const CityDescription = ({ cityData }) => {
  return (
    <div className="city-description">
      <img
        src={cityData.photoUrl}
        alt={`Image of ${cityData.city}`}
        className="city-image"
      />
      <div className="city-info-container">
        <h1>{cityData.city} - {cityData.country} {cityData.cityInfo.flag}</h1>
        <p>{cityData.description}</p>
        <a href={cityData.wikiLink} target="blank">
          <b>Read more about {cityData.city} on Wikipedia &gt;</b>
        </a>
      </div>
    </div>
  );
};

export default CityDescription;
