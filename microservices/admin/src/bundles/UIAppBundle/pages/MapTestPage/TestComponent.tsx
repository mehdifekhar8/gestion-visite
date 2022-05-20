import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useGuardian, useRouter } from "@bluelibs/x-ui";
import { LockOutlined, DashboardFilled, ToolOutlined } from "@ant-design/icons";
import { Routes } from "@bundles/UIAppBundle";
import { Button, Space, Row, Col, Alert, Card } from "antd";

import { AddMarker } from "@bundles/UIAppBundle/components/Map/AddMarker";
import { UpdateMarker } from "@bundles/UIAppBundle/components/Map/UpdateMarker";
import { ViewMarkers } from "@bundles/UIAppBundle/components/Map/ViewMarkers";
export function TestComponent() {
  const style = { minHeight: "100vh" };

  // const onChange = (val:google.maps.LatLng) => {
    
    
  // };
  return <>
  {/* <AddMarker onChange={onChange} />
  <UpdateMarker onChange={onChange}   /> */}
  {/* <ViewMarkers    /> */}
  </>;
}

