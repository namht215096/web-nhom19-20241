import { Layout, Menu } from "antd";
import { Content } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import Title from "antd/es/skeleton/Title";
import React, { useState } from "react";
import {
  PieChartOutlined,
  PayCircleOutlined,
  TruckOutlined,
  SolutionOutlined,
  UserOutlined,
} from "@ant-design/icons";
import DashboardOverall from "./DashboardOverall";
import DashboardProducts from "./DashboardProducts";
import DashboardUsers from "./DashboardUsers";
const items = [
  { label: "Tổng quan", key: "1", icon: <PieChartOutlined /> },
  { label: "Quản lý sản phẩm", key: "2", icon: <PayCircleOutlined /> },
  { label: "Quản lý người dùng", key: "3", icon: <TruckOutlined /> },
];

const Dashboard = () => {
  const [selectedKey, setSelectedKey] = useState("1");

  const handleMenuClick = (e) => {
    setSelectedKey(e.key);
  };

  const renderContent = () => {
    switch (selectedKey) {
      case "1":
        return (
          <div>
            <DashboardOverall />
          </div>
        );
      case "2":
        return (<DashboardProducts />);
      case "3":
        return <DashboardUsers />;
      default:
        return <Title level={4}>Quản lý kho</Title>;
    }
  };

  return (
    <div>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          breakpoint="lg"
        >
          <Menu
            theme="dark"
            defaultSelectedKeys={["1"]}
            mode="inline"
            items={items}
            onClick={handleMenuClick}
          />
        </Sider>

        <Layout>
          <Content style={{ margin: "0 3%" }}>
                {renderContent()}
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default Dashboard;
