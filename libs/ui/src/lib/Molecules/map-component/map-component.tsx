import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

export interface MapComponentProps {}
const containerStyle = {
  width: '500px',
  height: '500px',
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

function MapComponent() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyCjcBkWQ3IUwkMkzSnClkCR1iHIh-MlETk">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      ></GoogleMap>
    </LoadScript>
  );
}

export default React.memo(MapComponent);
