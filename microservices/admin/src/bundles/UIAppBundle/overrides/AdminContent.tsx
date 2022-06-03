import * as React from "react";
import { Layout } from "antd";
import { Content } from "antd/lib/layout/layout";
import { useUIComponents } from "@bluelibs/x-ui";
import useWindowDimensions from "../components/ViewPort/ViewPort";

export type AdminContentProps = {
  children?: any;
};

const contentStyles = {
  margin: "16px",
  padding: "16px",
  background: "#FFF",
};

export function AdminContent(props: AdminContentProps) {
  const UIComponents = useUIComponents();
  const {height , width } = useWindowDimensions()
  return (
    <UIComponents.ErrorBoundary>
      <Content style={width < 900 ? {...contentStyles , height:height- 115 , overflow:"auto"} : contentStyles}>{props.children}</Content>
    </UIComponents.ErrorBoundary>
  );
}