import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icon issue
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    'https://raw.githubusercontent.com/MohyiddineDilmi/data/main/bino/images/bino.svg',
  iconUrl:
    'https://raw.githubusercontent.com/MohyiddineDilmi/data/main/bino/images/bino.svg',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const center = [45.5493, -73.6061]; // Coordinates for Montreal

const StoreLocation = () => {
  return (
    <MapContainer
      center={center}
      zoom={13}
      style={{ height: '400px', width: '400px', borderRadius: '40px' }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={center}>
        <Popup>Marche Bino 1951 Rue Jean-Talon E, Montréal, QC H2E 1T9</Popup>
      </Marker>
    </MapContainer>
  );
};

export default StoreLocation;
