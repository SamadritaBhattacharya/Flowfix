import React, { useState, useEffect } from 'react';
import 'leaflet/dist/leaflet.css'; 
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet'; // Import leaflet library

// Custom icon for the user's location marker
const redIcon = new L.Icon({
  iconUrl: '../redmarker.png', // URL to red marker icon
  iconSize: [30, 55], // Size of the icon
  iconAnchor: [12, 41], // Anchor point of the icon
  
  popupAnchor: [1, -34] // Popup anchor point relative to the icon
});

const Maps = () => {
  const [center, setCenter] = useState([0, 0]);
  const [doctorsLocations, setDoctorsLocations] = useState([]);

  useEffect(() => {
    // Get user's current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCenter([latitude, longitude]);
          generateRandomDoctorsLocations(latitude, longitude);
        },
        (error) => {
          console.error('Error getting user location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  const generateRandomDoctorsLocations = (latitude, longitude) => {
    // Generate random locations around the user's location
    const numDoctors = 13;
    const randomLocations = [];
    for (let i = 0; i < numDoctors; i++) {
      const lat = latitude + (Math.random() - 0.5) * 0.1;
      const lng = longitude + (Math.random() - 0.5) * 0.1;
      randomLocations.push([lat, lng]);
    }
    setDoctorsLocations(randomLocations);
  };

  const MyComponent = () => {
    const map = useMap();
    useEffect(() => {
      if (center[0] !== 0 && center[1] !== 0) {
        map.setView(center, 13);
      }
    }, [center, map]);

    return null;
  };

  return (
    <div>
      <div id="map" className='mt-4 h-[650px] w-[1450px]  p-4 m-6 flex justify-center items-center'>
        <MapContainer center={center} zoom={13} style={{ width: '100%', height: '100%' }} className='w-[1500px]'>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={center} icon={redIcon}>
            <Popup >My Location</Popup>
          </Marker>
          {doctorsLocations.map((pos, index) => (
            <Marker key={index} position={pos}>
              <Popup>Doctor {index + 1} Location</Popup>
            </Marker>
          ))}
          <MyComponent />
        </MapContainer>
      </div>
    </div>
  );
};

export default Maps;
