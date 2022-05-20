import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGuardian, useRouter } from "@bluelibs/x-ui";
import { LockOutlined, DashboardFilled, ToolOutlined } from "@ant-design/icons";
import { Routes } from "@bundles/UIAppBundle";
import { Button, Space, Row, Col, Alert, Card } from "antd";

import {
  GoogleMap,
  LoadScript,
  Marker,
  MarkerProps,
  InfoBox 
} from "@react-google-maps/api";
export function CurrentPosition() {
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
  const [currentPosition, setCurrentPosition] = useState({
    lat: null,
    lng: null,
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
  });
  return (
    <Row justify="center" align="middle" style={style}>
      <LoadScript googleMapsApiKey="AIzaSyBa9CtZ1XtdrQePGh1WRwpvBXWBUAN2pFQ">
        
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={20}
          center={currentPosition}
        >
          {currentPosition.lat && <Marker position={currentPosition}   />}
        </GoogleMap>
      </LoadScript>
    </Row>
  );
}

const mapStyles = {
  width: "100%",
  height: "100%",
};
