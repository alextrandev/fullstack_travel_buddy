import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { Link } from "react-router-dom";
import 'leaflet/dist/leaflet.css';

export default function Map({ coordinates, centerCoordinates, fullMap }) {
  return (
    <>
      <h1>World Map</h1>
      <div className='container'>
        <MapContainer
          style={{ height: 600, overflow: 'hidden', borderRadius: '10px' }}
          center={centerCoordinates}
          zoom={2}
          scrollWheelZoom={true}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[48.854679, 2.347724]}>
            <Popup>
              <img src="https://source.unsplash.com/100x100/?paris" alt="Photo of Paris" />
              <br /><b>Paris, </b><span>France</span><br />
              <Link to={`/city/Paris`}>View destination</Link>
            </Popup>
          </Marker>
          {coordinates.map((location) =>
            <Marker key={location.name} position={location.coordinates}>
              <Popup>
                <img
                  src={`https://source.unsplash.com/130x130/?${location.name}`}
                  alt={`Photo of ${location.name}`}
                />
                <br /><b>{location.name}, </b><span>{location.country}</span><br />
                {fullMap && <Link to={`/city/${location.name}`}>View destination</Link>}
              </Popup>
            </Marker>
          )}
        </MapContainer>
      </div>
    </>
  )
}
