import * as React from "react";
import { Layout, PageHeader } from "antd";
import { useState } from "react";
import { useUIComponents } from "@bluelibs/x-ui";
import useWindowDimensions from "../components/ViewPort/ViewPort";
import MobileMenu from "../components/Mobile/MobileMenu";

const { Header, Content, Footer, Sider } = Layout;

export type AdminLayoutProps = {
  children?: any;
  protect?: boolean;
};

export function AdminLayout(props: AdminLayoutProps) {
  const protect = props.protect === undefined ? true : props.protect;
  const [isCollapsed, setIsCollapsed] = useState(false);
  const Components = useUIComponents();
  const { height, width } = useWindowDimensions();

  const content = (
    <Layout style={{ minHeight: "100vh" }} className="x-ui-admin">
      {width > 900 && (
        <Sider
          breakpoint="md"
          theme={"dark"}
          collapsible
          collapsed={isCollapsed}
          onCollapse={(collapsed) => setIsCollapsed(collapsed)}
        >
          <div className="logo">
            <Components.AdminLogo />
          </div>
          <Components.AdminMenu />
        </Sider>
      )}
      <Layout className="x-ui-admin-layout">
        <Header className="x-ui-admin-header">
          <Components.AdminTopHeader />
        </Header>
        <Content className="x-ui-admin-content">
          <Components.AdminContent>{props.children}</Components.AdminContent>
        </Content>
       
      </Layout>
      {width < 900  && 
        <Header className="x-ui-admin-header">
       <MobileMenu></MobileMenu>
        </Header> }
    </Layout>
  );

  if (protect) {
    return <Components.Protect>{content}</Components.Protect>;
  } else {
    return content;
  }
}
