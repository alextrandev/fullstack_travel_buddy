import LoadingImage from "../utility/LoadingImage";
import "./CountryInfo.css";

export default function CountryInfo({ countryInfo, cityData }) {
  if (countryInfo) {
    console.log(countryInfo);
  }
  if (cityData) {
    console.log(cityData.wikiLink);
  }
  return (
    <div className="country-info">
      <h1>Destination facts</h1>
      {!countryInfo
        ? <LoadingImage size={400} text={'Fetching destination infos'} />
        : <ul className="country-info-grid">
          <li><span></span><b></b></li>
          <li><span></span><b></b></li>
          <li><span></span><b></b></li>
          <li><span></span><b></b></li>
          <li><span></span><b></b></li>
          <li><span></span><b></b></li>
          <li><span></span><b></b></li>
          <li><a href="">Read more on Wikipedia &gt;</a></li>
        </ul>
      }
    </div>
  )
}
