import Loading from "../utility/Loading"
import Map from "../utility/Map"

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
                <span>
                  {(index + 1) + ". " + attraction.name + ":"}&nbsp;
                </span>
                <span>
                  {(Math.floor(Math.random() * 4) + 1) + " hours"}
                </span>
              </li>
            )}
          </ul>
          : < Loading type={'grid'} />
        }
      </div>
    </>
  )
}
