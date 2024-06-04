import "./CityDescription.css";
import Image from './Image';
import LoadingImage from "./LoadingImage";
import Loading from "./Loading";

const CityDescription = ({ cityData, flag }) => {
  return (
    <div className="city-description">
      {
        cityData
          ? <>
            <Image
              url={cityData.photoUrl}
              size={400}
              className={'city-image'}
              text={false}
            />
            <div className="city-info-container">
              <h1>{cityData.city} - {cityData.country} {flag ?? <Loading type="grid" />}</h1>
              <p>{cityData.description}</p>
              <a href={cityData.wikiLink} target="blank">
                <b>Read more about {cityData.city} on Wikipedia &gt;</b>
              </a>
            </div>
          </>
          : <LoadingImage size={400} text={'Fetching destination info '} />
      }
    </div>
  );
};

export default CityDescription;
