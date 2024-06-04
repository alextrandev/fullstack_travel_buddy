import DestinationCard from "./DestinationCard";
import LoadingImage from "./LoadingImage";

export default function Attractions({ attractions }) {
  return (
    <div className="popular-destinations attractions">
      {Array.isArray(attractions) && attractions.length > 0
        ? attractions.map(attraction =>
          <a
            href={`https://en.wikipedia.org/wiki/${attraction.name}`}
            target="blank"
            key={attraction.name}
          >
            <DestinationCard
              destination={{
                "city": attraction.name,
                "imageUrl": attraction.photo
              }}
              disableLink={true}
            />
          </a>
        )
        : <LoadingImage size={200} text={'Fetching attractions info '} />
      }
    </div>
  )
}
