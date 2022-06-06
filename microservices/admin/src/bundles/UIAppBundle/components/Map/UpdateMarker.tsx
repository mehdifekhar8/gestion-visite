import React, { Fragment, useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import Geocode from "react-geocode";

type Props = {
  onChange: (val: any) => void;
  value: { lat: number; lng: number };
  minHeight?: string;
  width?: string;
};

type Coordinates = {
  lat: number;
  lng: number;
};

export const UpdateMarker: React.FunctionComponent<Props> = ({
  onChange,
  value,
  minHeight = "50vh",
  width = "100%",
}) => {
  const [currentPosition, setCurrentPosition] = useState<Coordinates>();
  const [selectedPosition, setSelectedPosition] = useState<Coordinates>();
  const [address, setAddress] = useState<string>();
  Geocode.setApiKey("AIzaSyBa9CtZ1XtdrQePGh1WRwpvBXWBUAN2pFQ");
  Geocode.setLanguage("fr");
  Geocode.fromLatLng(value.lat, value.lng).then(
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
  };

  return (
    <Fragment>
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

          {selectedPosition ? (
            <Marker position={selectedPosition} />
          ) : (
            <Marker position={value} />
          )}
        </GoogleMap>
      </LoadScript>
      <h4>{address}</h4>
    </Fragment>
  );
};
