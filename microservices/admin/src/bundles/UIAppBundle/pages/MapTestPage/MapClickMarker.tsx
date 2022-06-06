import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useGuardian, useRouter } from "@bluelibs/x-ui";
import { LockOutlined, DashboardFilled, ToolOutlined } from "@ant-design/icons";
import { Routes } from "@bundles/UIAppBundle";
import { Button, Space, Row, Col, Alert, Card } from "antd";

import { GoogleMap, InfoWindow, LoadScript, Marker } from "@react-google-maps/api";

type marker = {
    location?:any,
    name?:any,
}

export function MapClickMarker() {
  const guardian = useGuardian();
  const router = useRouter();

  const style = { minHeight: "100vh" };

  const mapStyles = {
    height: "50vh",
    width: "50%",
  };

  const defaultCenter = {
    lat: 41.3851,
    lng: 2.1734,
  };
  const [ selected, setSelected ] = useState<marker>({});
  const onSelect = item => {
    setSelected(item);
  }
  const locations = [
    {
      name: "Location 1",
      location: { 
        lat: 41.3954,
        lng: 2.162 
      },
    },
    {
      name: "Location 2",
      location: { 
        lat: 41.3917,
        lng: 2.1649
      },
    },
    {
      name: "Location 3",
      location: { 
        lat: 41.3773,
        lng: 2.1585
      },
    },
    {
      name: "Location 4",
      location: { 
        lat: 41.3797,
        lng: 2.1682
      },
    },
    {
      name: "Location 5",
      location: { 
        lat: 41.4055,
        lng: 2.1915
      },
    }
  ];
  return (
    <Row justify="center" align="middle" style={style}>
      <LoadScript googleMapsApiKey="AIzaSyBa9CtZ1XtdrQePGh1WRwpvBXWBUAN2pFQ">
      <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}>
         {
            locations.map(item => {
              return (
              <Marker key={item.name} position={item.location}  onClick={() => onSelect(item)}/>
              )
            })
         }
          {
            selected.location && 
            (
              <InfoWindow
              position={selected.location}
             // clickable={true}
               
              onCloseClick={() => setSelected({})}
            >
              <p>{selected.name}</p>
            </InfoWindow>
            )
         }
     </GoogleMap>
      </LoadScript>
    </Row>
  );
}

const mapStyles = {
  width: "100%",
  height: "100%",
};
