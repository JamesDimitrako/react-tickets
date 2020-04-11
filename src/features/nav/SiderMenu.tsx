import React from 'react'
import { Menu, Layout } from 'antd'
import {
    UserOutlined,
    UploadOutlined,
    VideoCameraOutlined
  } from "@ant-design/icons";


const { Sider } = Layout;

const SiderMenu = () => {
    return (
        <Sider
        style={{
          overflow: "auto",
          height: "100vh",
          left: 0
        }}
        trigger={null}
        collapsible
        collapsed={true}
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">
            <UserOutlined />
            <span>nav 1</span>
          </Menu.Item>
          <Menu.Item key="2">
            <VideoCameraOutlined />
            <span>nav 2</span>
          </Menu.Item>
          <Menu.Item key="3">
            <UploadOutlined />
            <span>nav 3</span>
          </Menu.Item>
        </Menu>
      </Sider>
    )
}


export default SiderMenu
