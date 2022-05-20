import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useGuardian, useRouter } from "@bluelibs/x-ui";
import { LockOutlined, DashboardFilled, ToolOutlined } from "@ant-design/icons";
import { Routes } from "@bundles/UIAppBundle";
import { Button, Space, Row, Col, Alert, Card } from "antd";

import {
  GoogleMap,
  InfoBox,
  LoadScript,
  useLoadScript,
} from "@react-google-maps/api";
export function InfoBoxComponent() {
  const guardian = useGuardian();
  const router = useRouter();

  const mapContainerStyle = {
    height: "400px",
    width: "800px",
  };

  const google = window.google;

  const options = { closeBoxURL: "", enableEventPropagation: true };
  const style = { minHeight: "100vh" };

  const onLoad = (infoBox) => {
    console.log("infoBox: ", infoBox);
  };
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyBa9CtZ1XtdrQePGh1WRwpvBXWBUAN2pFQ", // ,
    // ...otherOptions
  });

  return (
    isLoaded && (
      <Row justify="center" align="middle" style={style}>
        <GoogleMap
          id="InfoBox-example"
          mapContainerStyle={mapContainerStyle}
          zoom={10}
          center={new google.maps.LatLng(33.772, -117.214)}
        >
          <InfoBox
            onLoad={onLoad}
            options={options}
            position={new google.maps.LatLng(33.772, -117.214)}
          >
            <div
              style={{ backgroundColor: "yellow", opacity: 0.75, padding: 12 }}
            >
              <div style={{ fontSize: 16 }}>Hello, World!</div>
            </div>
          </InfoBox>
        </GoogleMap>
      </Row>
    )
  );
}

const mapStyles = {
  width: "100%",
  height: "100%",
};
