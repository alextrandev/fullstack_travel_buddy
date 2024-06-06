import Loading from "../utility/Loading";
import LoadingImage from "../utility/LoadingImage";
import "./CountryInfo.css";

export default function CountryInfo({ countryInfo, cityData }) {
  let currencies, continents, languages, timezones = '';
  if (countryInfo) {
    //turn arrays, objects and nested objects into string
    currencies = Object.values(countryInfo.currencies).map(currency => Object.values(currency).join(" ")).join(", ");
    continents = countryInfo.continents.join(", ");
    languages = Object.values(countryInfo.languages).join(", ");
    timezones = `${countryInfo.timezones[0]} - ${countryInfo.timezones.slice(-1)}`;
  }
  return (
    <div className="country-info">
      <h1>Destination facts</h1>
      {!countryInfo
        ? <LoadingImage size={400} text={'Fetching destination infos'} />
        : <ul className="country-info-grid">
          <li><span>Country: </span><b>{countryInfo.country}</b></li>
          <li><span>Country flag: </span><b>{countryInfo.flag}</b></li>
          <li><span>Region: </span><b>{countryInfo.subregion}</b></li>
          <li><span>Continents: </span><b>{continents}</b></li>
          <li><span>Currencies: </span><b>{currencies}</b></li>
          <li><span>Language: </span><b>{languages}</b></li>
          <li><span>Timezone: </span><b>{timezones}</b></li>
          <li>
            {cityData
              ? <a href={cityData.wikiLink}>Read more on Wikipedia &gt;</a>
              : <p>Finding wiki link <Loading type={"dot"} /></p>
            }
          </li>
        </ul>
      }
    </div>
  )
}
