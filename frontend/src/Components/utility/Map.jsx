import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { Link } from "react-router-dom";
import 'leaflet/dist/leaflet.css';
import Image from './Image';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

// Set up the default icon for markers
const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

export default function Map({ coordinates, centerCoordinates, fullMap }) {
  return (
    <>
      <div className='container'>
        <MapContainer
          style={{
            height: 600,
            minWidth: '40vw',
            overflow: 'hidden', borderRadius: '10px',
            border: '2px dashed black',
            boxShadow: '0 0 10px gray',
          }}
          center={centerCoordinates}
          zoom={fullMap ? 2 : 11}
          scrollWheelZoom={false}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {Array.isArray(coordinates) && coordinates.length > 0 && coordinates.map((location) =>
            <Marker key={location.name} position={location.coordinates}>
              <Popup>
                <div style={{ width: 130, height: 130 }} >
                  <Image size={130} url={`https://picsum.photos/130/130?grayscale${location.name}`} />
                </div>
                <br />
                <b>{location.name}</b>
                {location.country && `, ${location.country}`}
                <br />
                {fullMap && <Link to={`/city/${location.name}`}>View destination</Link>}
              </Popup>
            </Marker>
          )}
        </MapContainer>
      </div >
    </>
  )
}
