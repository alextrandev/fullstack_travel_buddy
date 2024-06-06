import DestinationCard from "./DestinationCard";
import LoadingImage from "./LoadingImage";

export default function DestinationCardGrid({ destinations }) {
  return (
    <div className="popular-destinations">
      {Array.isArray(destinations) && destinations.length > 0
        ? destinations.map((destination) => (
          <DestinationCard
            key={destination.city}
            destination={destination}
          />
        ))
        : <LoadingImage size={500} />
      }
    </div>
  )
}
