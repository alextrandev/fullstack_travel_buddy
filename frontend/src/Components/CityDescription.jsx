import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./CityDescriptionPage.css";

const CityDescription = () => {
  const { cityName } = useParams();
  const [cityData, setCityData] = useState(null);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}destinations?city=${cityName}`)
      .then((res) => {
        const city = res.data.find(
          (item) => item.city.toLowerCase() === cityName.toLowerCase()
        );
        setCityData(city);
      })
      .catch((err) => console.log(err));
  }, [cityName]);

  if (!cityData) {
    return <div>Page loading</div>;
  }

  return (
    <div className="city-description">
      <Link to="/" className="back-link">
        Back to HomePage
      </Link>
      <h1>{cityData.city}</h1>

      <img
        src={cityData.imageUrl}
        alt={`Image of ${cityData.city}`}
        className="city-image"
      />
      
      <p>{cityData.description}</p>
      
      