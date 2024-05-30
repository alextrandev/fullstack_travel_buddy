import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./CityInfo.css";

const CityInfo = () => {
  const { cityName } = useParams();
  const [cityData, setCityData] = useState(null);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}destinations/${cityName}`)
      .then((res) => setCityData(res.data))
      .catch((err) => console.log(err));
  }, [cityName]);

  console.log(cityData);

  return (
    <div className="city-info">
      <p>To do: add page content here</p>
    </div>
  );
};

export default CityInfo;
