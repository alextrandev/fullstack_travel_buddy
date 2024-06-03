import Loading from "./Loading"
import Map from "./Map"

export default function ItineraryPlanner({ attractionCoordinates, citiesCoordinates, cityName }) {
  return (
    <>
      <h1>Itinerary Planner</h1>
      <div className="itinerary-planner">
        <div className="itinerary-map">
          <Map
            coordinates={attractionCoordinates}
            centerCoordinates={citiesCoordinates[cityName]}
            fullMap={false}
          />
        </div>
        {citiesCoordinates
          ? <ul className="itinerary-list">
            {attractionCoordinates.map((attraction, index) =>
              <li key={attraction.name} className="itinerary-attraction">
                {(index + 1) + ". " + attraction.name + ": " + (Math.floor(Math.random() * 4) + 1) + " hours"}
              </li>
            )}
          </ul>
          : < Loading type={'grid'} />
        }
      </div>
    </>
  )
}
