import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
  DesktopOutlined,
  UserOutlined,
} from '@ant-design/icons';
import Footer from './Footer';
import Navbar from './Navbar';
import Cart from './Cart';
const { Sider, Content } = Layout;

const Profile = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState('1'); // State for selected menu item

  const handleMenuClick = (e) => {
    setSelectedMenuItem(e.key); // Update state with selected menu item key
  };

  const renderContent = () => {
    switch (selectedMenuItem) {
      case '1':
        return <div>Thông tin cá nhân</div>;
      case '2':
        return <Cart/>;
      case '3':
        return <div>Lịch sử mua hàng</div>;
      default:
        return <div>Welcome to the profile page!</div>;
    }
  };

  return (
    <>
    <Navbar/>
    <Layout style={{ minHeight: '100vh', marginTop: 72 }}>
      <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed} trigger={null}>
        <Menu
          theme="light"
          defaultSelectedKeys={['1']}
          mode="inline"
          onClick={handleMenuClick}

        >
          <Menu.Item key="1" icon={<UserOutlined />}>
            Thông tin cá nhân
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            Giỏ hàng
          </Menu.Item>
          <Menu.Item key="3" icon={<UserOutlined />}>
            Lịch sử mua hàng
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Content style={{ margin: '0 16px' }}>
          {renderContent()} {/* Render content based on selected menu item */}
        </Content>
      </Layout>
    </Layout>
    <Footer />
    </>
  );
};

export default Profile;