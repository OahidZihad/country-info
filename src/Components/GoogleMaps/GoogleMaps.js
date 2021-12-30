import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "600px",
};

const center = {
  lat: 23.793993,
  lng: 90.404274,
};

const position = {
  lat: 23.793993,
  lng: 90.404274,
};

const onLoad = (marker) => {
  console.log("marker: ", marker);
};

function GoogleMaps() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyCVRJzWxAVF3_K6k7TRaAz1S83fRX_Vmw4">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
        {/* Child components, such as markers, info windows, etc. */}
        <Marker onLoad={onLoad} position={position} />
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(GoogleMaps);
