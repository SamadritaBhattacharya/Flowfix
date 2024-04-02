import React , {useState} from 'react';
import 'leaflet/dist/leaflet.css'; 
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import '../index.css';


const Maps = () => {

  
  //const center = [22.54707592819581, 88.35626242788365];
  // const center = [22.571551917289916, 88.36588697476917];
  const center = [22.612202766952453, 88.42651639443852];

  

  return (
    <div className=' bg-slate-900'>
      <div id="map" className=' mt-4 h-screen w-[1400px] m-10 p-4'>
      <MapContainer center={center} zoom={15} style={{ width: '100%', height: '100%' }} className=' w-[1500px]'>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={center}>
          <Popup>
           Hi! I am here! <br /> Happy.
          </Popup>
        </Marker>
      </MapContainer>

        

    </div>
    </div>
    


    // <MapContainer>

    //   center = {center}
    //   zoom = {10}
    //   style=({width= '100vh' , height= '100vh'})

    // </MapContainer>
  );
}

export default Maps;


