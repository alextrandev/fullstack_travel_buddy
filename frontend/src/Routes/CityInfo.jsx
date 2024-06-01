import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./CityInfo.css";
import Divider from "../Components/Divider";
import Map from "../Components/Map";

const CityInfo = ({ destinationCoordinates }) => {
  const { cityName } = useParams();
  const [cityData, setCityData] = useState(null);
  const [attractionCoordinates, setAttractionCoordinates] = useState([]);

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
      .then((res) => setCityData(res.data))
      .catch((err) => console.log(err));

    // setCenterCoordinates(citiesCoordinates.cityName)
  }, [cityName]);

  useEffect(() => {
    // get this destination attraction coordinates
    axios
      .get(`${import.meta.env.VITE_API_URL}coordinates/${cityName}`)
      .then((res) => setAttractionCoordinates(res.data))
      .catch((err) => console.log(err));

    // destinationCoordinates.forEach(destination => destination.name == cityName ? setCenterCoordinates(destination.coordinates) : null)
  }, [cityName, destinationCoordinates]);

  return (
    <div className="destination">

      <div className="city-info">
        <p>To do: add page content here</p>
      </div>
      <Divider />
      <h1>Itinerary Planner</h1>
      <div className="itinerary-planner">
        <div className="itinerary-map">
          <Map
            coordinates={attractionCoordinates}
            centerCoordinates={citiesCoordinates[cityName]}
            fullMap={false}
          />
        </div>
        <ul className="itinerary-list">
          {attractionCoordinates.map((attraction, index) =>
            <li key={attraction.name} className="itinerary-attraction">
              {(index + 1) + ". " + attraction.name + ": " + (Math.floor(Math.random() * 4) + 1) + " hours"}
            </li>
          )}
        </ul>
      </div>
      <Divider />
    </div>
  );
};

export default CityInfo;
