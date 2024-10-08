import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Destination.css";
import Divider from "../Components/layout/Divider";
import CityDescription from "../Components/destination/CityDescription";
import ItineraryPlanner from "../Components/destination/ItineraryPlanner";
import WeatherInfo from "../Components/destination/WeatherInfo";
import Attractions from "../Components/destination/Attractions";
import scrollToTop from "../functions/scrollToTop";
import CountryInfo from "../Components/destination/CountryInfo";

const Destination = ({ destinationCoordinates }) => {
  const { cityName } = useParams();
  const [cityData, setCityData] = useState(null);
  const [attractions, setAttractions] = useState([]);
  const [weatherData, setWeatherData] = useState(null);
  const [attractionCoordinates, setAttractionCoordinates] = useState([]);
  const [countryInfo, setCountryInfo] = useState(null);

  scrollToTop();

  const citiesCoordinates = {
    "Paris": [48.854679, 2.347724],
    "New York City": [40.712776, -74.005974],
    "Tokyo": [35.682839, 139.759455],
    "Sydney": [-33.86882, 151.209296],
    "Cape Town": [-33.92487, 18.424055],
    "Rio de Janeiro": [-22.906847, -43.172896],
    "London": [51.507351, -0.127758],
    "Dubai": [25.276987, 55.296249],
    "Rome": [41.902782, 12.496366],
    "Barcelona": [41.385064, 2.173404],
    "St. Petersburg": [59.93428, 30.335099],
    "Bangkok": [13.756331, 100.501765]
  }

  useEffect(() => {
    // get this destination data
    axios
      .get(`${import.meta.env.VITE_API_URL}destinations/${cityName}`)
      .then(res => {
        setCityData(res.data);
        setAttractions(res.data.attractions);
      })
      .catch(err => console.log(err));
  }, [cityName]);

  useEffect(() => {
    // get weather data
    axios
      .get(`${import.meta.env.VITE_API_URL}weather/${cityName}`)
      .then((res) => setWeatherData(res.data))
      .catch((err) => console.log(err));
  }, [cityName]);

  useEffect(() => {
    // get this destination attraction coordinates
    axios
      .get(`${import.meta.env.VITE_API_URL}coordinates/${cityName}`)
      .then((res) => setAttractionCoordinates(res.data))
      .catch((err) => console.log(err));
  }, [cityName, destinationCoordinates]);

  useEffect(() => {
    // get country info
    axios
      .get(`${import.meta.env.VITE_API_URL}destinations/${cityName}/country`)
      .then((res) => setCountryInfo(res.data))
      .catch((err) => console.log(err));
  }, [cityName]);

  return (
    <div className="destination">
      <CityDescription cityData={cityData} countryInfo={countryInfo} />
      <Divider />
      <Attractions attractions={attractions} />
      <Divider />
      <CountryInfo countryInfo={countryInfo} cityData={cityData} />
      <Divider />
      <WeatherInfo weatherData={weatherData} />
      <Divider />
      <ItineraryPlanner
        attractionCoordinates={attractionCoordinates}
        citiesCoordinates={citiesCoordinates}
        cityName={cityName}
      />
      <Divider />
    </div>
  );
};

export default Destination;
