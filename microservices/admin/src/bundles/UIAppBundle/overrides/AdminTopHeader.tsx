import React, { Fragment } from "react";
import { DownOutlined } from "@ant-design/icons";
import { useGuardian, useRouter } from "@bluelibs/x-ui";
import { Button, Dropdown, Menu, Space, Typography, Row, Col, Tag } from "antd";
import { Routes } from "../";

export function AdminTopHeader() {
  const guardian = useGuardian();
  const router = useRouter();
  const { user } = guardian.state;
  const { Title } = Typography;

  if (!guardian.state.initialised || !user) {
    return null;
  }

  return (
    <Fragment>
      <Row>
        <Col span={6} push={18}>
          <Button
            key="2"
            onClick={() =>
              guardian.logout().then(() => {
                router.go(Routes.LOGIN);
              })
            }
          >
            Logout
          </Button>
        </Col>
        <Col span={18} pull={6} style={{ textAlign: "center" }}>
          <Space align="center" size={8}>
            <Tag color="green">
              user : {user.profile.firstName + " " + user.profile.lastName}
            </Tag>
            <Tag color="cyan">roles : {user.roles}</Tag>
          </Space>
        </Col>
      </Row>
 
    </Fragment>
  );
}
