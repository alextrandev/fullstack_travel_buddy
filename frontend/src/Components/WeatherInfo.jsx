import LoadingImage from "./LoadingImage";
import './WeatherInfo.css';

export default function WeatherInfo({ weatherData }) {
  if (weatherData) {
    const utcDate = new Date(); // get current utc date time
    const date = new Date(utcDate.getTime() + weatherData.timezone * 1000);
    const dateTimeString = date.toLocaleString();
  }

  return (
    <div className="weather-container">
    </div>
  )
}
