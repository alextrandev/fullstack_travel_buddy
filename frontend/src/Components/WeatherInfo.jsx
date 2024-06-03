import LoadingImage from "./LoadingImage";
import './WeatherInfo.css';
import { roundTemp, capitalized } from "../functions/functions";

export default function WeatherInfo({ weatherData }) {
  let dateTimeString;
  if (weatherData) {
    const utcDate = new Date(); // get current utc date time
    const localDate = new Date(utcDate.getTime() + weatherData.timezone * 1000);
    dateTimeString = localDate.toLocaleString();
  } // convert current utc time into milisec, add the timezone offset, convert back into date and finillay to string

  return (
    <div className="weather-container">
      <div className="weather-content">
        {!weatherData
          ? <LoadingImage size={400} text={'Fetching weather data'} />
          : <>
            <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="" />
            <div className="text-container">
              <p>
                <b>{weatherData.name}</b>&nbsp;
                <span>{dateTimeString}</span>
              </p>
              <div className="weather-info">
                <div className="main-info">
                  <p className="temperature">{roundTemp(weatherData.main.temp)}&deg;C</p>
                  <p>{capitalized(weatherData.weather[0].description)}</p>
                </div>
                <div className="extra-info">
                  <p>Feels like: <span>{roundTemp(weatherData.main.feels_like)}&deg;C</span></p>
                  <p>High: <span>{roundTemp(weatherData.main.temp_max)}&deg;C</span></p>
                  <p>Low: <span>{roundTemp(weatherData.main.temp_min)}&deg;C</span></p>
                  <p>Humidity: <span>{weatherData.main.humidity}</span></p>
                </div>
              </div>
            </div>
          </>
        }
      </div>
    </div>
  )
}
