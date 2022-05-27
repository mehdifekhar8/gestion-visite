import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  InfoWindow,
  LoadScript,
  Marker,
} from "@react-google-maps/api";
import { useUIComponents } from "@bluelibs/x-ui";

type Props = {
  currentLocation: {
    _id: string;
    coordinates: { lat: number; lng: number };
    fullName: string;
    phone: string;
  }[];
  minHeight?: string;
  width?: string;
} &any;

type Locations = {
  _id: string;
  coordinates: { lat: number; lng: number };
  fullName: string;
  phone: string;
};
type Coordinates = {
  lat: number;
  lng: number;
};
export const ViewMarkers: React.FunctionComponent<Props> = ({
  currentLocation,
  minHeight = "50vh",
  width = "100%",
}) => {
  // const UIComponents = useUIComponents();

  const [currentPosition, setCurrentPosition] = useState<Coordinates>();
  const [selected, setSelected] = useState<Locations | undefined>();

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
        mapContainerStyle={{ minHeight, width }}
        zoom={12}
        center={currentPosition}
      >
        {currentPosition && (
          <Marker
            icon={"http://maps.google.com/mapfiles/kml/paddle/blu-blank.png"}
            position={currentPosition}
          />
        )}

        {currentLocation.map((doctor) => (
          <Marker
            position={doctor.coordinates}
            onClick={() => setSelected(doctor)}
          />
        ))}
        {selected && (
          <div style={{ position: "relative", top: "10px", color: "red" }}>
            <InfoWindow
              position={selected.coordinates}
              onCloseClick={() => setSelected(undefined)}
            >
              {/* <UIComponents.AdminListItemRenderer {...props} /> */}
              <p>{selected.fullName}</p>
            </InfoWindow>
          </div>
        )}
      </GoogleMap>
    </LoadScript>
  );
};
