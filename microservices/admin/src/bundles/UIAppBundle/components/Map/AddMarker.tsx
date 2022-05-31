import React, { Fragment, useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import Geocode from "react-geocode";
import * as Ant from "antd";

type Props = {
  onChange: (val: Coordinates) => void;
  minHeight?: string;
  width?: string;
  isEditable?: boolean;
  show?: boolean;
};
type Coordinates = {
  lat: number;
  lng: number;
};
export const AddMarker: React.FunctionComponent<Props> = ({
  onChange,
  minHeight = "50vh",
  width = "100%",
  isEditable = true,
  show = true,
}) => {
  const [currentPosition, setCurrentPosition] = useState<Coordinates>();
  const [selectedPosition, setSelectedPosition] = useState<Coordinates>();
  const [address, setAddress] = useState<string>();

  Geocode.setApiKey("AIzaSyBa9CtZ1XtdrQePGh1WRwpvBXWBUAN2pFQ");
  Geocode.setLanguage("fr");

  const success = (position) => {
    const currentPosition = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    };

    setCurrentPosition(currentPosition);
    if (isEditable == false) {
      console.log(currentPosition);
      if (onChange) onChange(currentPosition);
    }
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      success(position);
    });
  }, [navigator.geolocation]);
  const onSelectedChange = (item: google.maps.MapMouseEvent) => {
    if (isEditable) {
      setSelectedPosition({ lat: item.latLng.lat(), lng: item.latLng.lng() });
      Geocode.fromLatLng(
        item.latLng.lat().toString(),
        item.latLng.lng().toString()
      ).then(
        (response) => {
          const address = response.results[0]["address_components"];
          setAddress(
            "Address: " +
              address[address.length - 2].long_name +
              ", " +
              address[address.length - 3].long_name +
              ", " +
              address[address.length - 4].long_name
          );
        },
        (error) => {
          console.error(error);
        }
      );
      onChange({ lat: item.latLng.lat(), lng: item.latLng.lng() });
    } else {
      Ant.notification.warn({
        message: "Not allowed",
        description: "You are not allowed to modify current location",
      });
    }
  };

  return (
    <div style={show ? { display: "block" } : { display: "none" }}>
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
      <h4 style={{ marginTop: "14px" }}>{address} </h4>
    </div>
  );
};
