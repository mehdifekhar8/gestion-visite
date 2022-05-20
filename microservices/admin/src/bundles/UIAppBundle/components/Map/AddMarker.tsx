import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

type Props = {
  onChange: (val: Coordinates) => void;
  minHeight?: string;
  width?: string;
};
type Coordinates = {
  lat: number;
  lng: number;
};
export const AddMarker: React.FunctionComponent<Props> = ({
  onChange,
  minHeight = "50vh",
  width = "100%",
}) => {
  const [currentPosition, setCurrentPosition] = useState<
    Coordinates | undefined
  >();

  const [selectedPosition, setSelectedPosition] = useState<
    Coordinates | undefined
  >();

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

  const onSelectedChange = (item: google.maps.MapMouseEvent) => {
    setSelectedPosition({ lat: item.latLng.lat(), lng: item.latLng.lng() });
    onChange({ lat: item.latLng.lat(), lng: item.latLng.lng() });
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyBa9CtZ1XtdrQePGh1WRwpvBXWBUAN2pFQ">
      <GoogleMap
        mapContainerStyle={{ minHeight, width }}
        zoom={20}
        center={currentPosition}
        onClick={onSelectedChange}
      >
        {currentPosition && (
          <Marker
            icon={"http://maps.google.com/mapfiles/kml/paddle/blu-blank.png"}
            position={currentPosition}
          />
        )}
        {selectedPosition && <Marker position={selectedPosition} />}
      </GoogleMap>
    </LoadScript>
  );
};
