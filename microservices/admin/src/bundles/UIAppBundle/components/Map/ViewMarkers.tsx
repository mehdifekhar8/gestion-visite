import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  InfoWindow,
  LoadScript,
  Marker,
} from "@react-google-maps/api";

type Props = {
  currentLocation?: {
    location: { lat: number; lng: number };
    information: string;
  }[];
};

export const ViewMarkers: React.FunctionComponent<Props> = ({
  currentLocation = [
    {
      location: { lat: 36.72144321160527, lng: 3.1360724480730218 },
      information: "hello 1",
    },
    { location: { lat: 36.7, lng: 3.28 }, information: "hello 2" },
    {
      location: { lat: 36.82144321160527, lng: 3.4360724480730218 },
      information: "hello 3",
    },
  ],
}) => {
  const mapStyles = {
    minHeight: "50vh",
    width: "100%",
  };
  const [currentPosition, setCurrentPosition] = useState({
    lat: null,
    lng: null,
  });
  const [selected, setSelected] = useState({
    location: { lat: null, lng: null },
    information: "",
  });

  const success = (position) => {
    const currentPosition = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    };
    setCurrentPosition(currentPosition);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  }, [navigator.geolocation]);

  return (
    <LoadScript googleMapsApiKey="AIzaSyBa9CtZ1XtdrQePGh1WRwpvBXWBUAN2pFQ">
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={15}
        center={currentPosition}
      >
        {currentPosition.lat && (
          <Marker
            icon={"http://maps.google.com/mapfiles/kml/paddle/blu-blank.png"}
            position={currentPosition}
          />
        )}

        {currentLocation.map((doctor) => (
          <Marker
            position={doctor.location}
            onClick={() => setSelected(doctor)}
          />
        ))}
        {selected.location.lat && (
          <div style={{ position: "relative", top: "10px", color: "red" }}>
            <InfoWindow
              position={selected.location}
              onCloseClick={() =>
                setSelected({
                  location: { lat: null, lng: null },
                  information: "",
                })
              }
            >
              <p>{selected.information}</p>
            </InfoWindow>
          </div>
        )}
      </GoogleMap>
    </LoadScript>
  );
};
