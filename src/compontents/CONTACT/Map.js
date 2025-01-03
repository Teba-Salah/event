import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Map.css";
import L from "leaflet";

// Define a custom icon for the marker
const markerIcon = new L.Icon({
  iconUrl: "https://leafletjs.com/examples/custom-icons/leaf-red.png",
  iconSize: [24, 36],
  iconAnchor: [12, 36],
});

function MapWithInfo() {
  // Coordinates for the map center
  const position = [51.5074, -0.1278]; // Replace with actual coordinates if needed

  return (
    <div className="map-container">
      <MapContainer center={position} zoom={14} scrollWheelZoom={false} className="leaflet-map">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position} icon={markerIcon}>
          <Popup>Grand Ballroom, Fairmont Hotel</Popup>
        </Marker>
      </MapContainer>

      <div className="info-footer">
        <div>
          <strong>GRAND BALLROOM, FAIRMONT HOTEL</strong>
          <p>Venue</p>
        </div>
        <div>
          <p>123 Street, Suite 45, Anytown, England 12345</p>
          <p>Address</p>
        </div>
        <div>
          <p>+1 (555) 123-4567</p>
          <p>Contact Info</p>
        </div>
        <div>
          <p>info@eventify.com</p>
          <p>Email</p>
        </div>
      </div>
    </div>
  );
}

export default MapWithInfo;