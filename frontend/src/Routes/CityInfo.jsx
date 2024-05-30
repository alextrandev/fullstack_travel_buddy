import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CityInfo = () => {
  const { cityName } = useParams();
  const [cityData, setCityData] = useState(null);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}destinations/${cityName}`)
      .then((res) => setCityData(res.data))
      .catch((err) => console.log(err));
  }, [cityName]);

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
