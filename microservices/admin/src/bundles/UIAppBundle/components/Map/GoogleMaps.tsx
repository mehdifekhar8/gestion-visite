import React, { useEffect, useState } from "react";
import {
  Autocomplete,
  GoogleMap,
  LoadScript,
  Marker,
  StandaloneSearchBox,
} from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};


const onLoad = (autocomplete) => {
  console.log("autocomplete: ", autocomplete);
};
const onPlaceChanged = () => {
  console.log("Autocomplete is not loaded yet!");
};
const position = {
  lat: 37.772,
  lng: -122.214,
};
export function MyComponent( {geometry}) {
  const [center, setCenter] = useState({
  lat: -33.92432999999999,
  lng: 18.42043
});
useEffect(() => {
  if (geometry) {
    setCenter({
      lat: geometry.latitude,
      lng: geometry.longitude
    });
  }
}, [geometry]);
  return (
    <LoadScript
      libraries={["places"]}
      googleMapsApiKey="AIzaSyBa9CtZ1XtdrQePGh1WRwpvBXWBUAN2pFQ"
    >
      <GoogleMap
        id="searchbox-example"
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        {/* Child components, such as markers, info windows, etc. */}
        <StandaloneSearchBox onLoad={onLoad} onPlacesChanged={onPlaceChanged}>
          <input
            type="text"
            placeholder="Customized your placeholder"
            style={{
              boxSizing: `border-box`,
              border: `1px solid transparent`,
              width: `240px`,
              height: `32px`,
              padding: `0 12px`,
              borderRadius: `3px`,
              boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
              fontSize: `14px`,
              outline: `none`,
              textOverflow: `ellipses`,
              position: "absolute",
              left: "50%",
              marginLeft: "-120px",
            }}
          />
        </StandaloneSearchBox>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(MyComponent);
