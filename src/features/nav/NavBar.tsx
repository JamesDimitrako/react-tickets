import React from 'react';
import { Layout} from "antd";
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined
  } from "@ant-design/icons";
  
const { Header } = Layout;


  // toggle = () => {
  //   this.setState({
  //     collapsed: !this.state.collapsed
  //   });
  // };


const NavBar = () => {
    return (
        <Header className="site-layout-background" style={{ padding: 0 }}>
        {React.createElement(
          true ? MenuUnfoldOutlined : MenuFoldOutlined,
          {  
            className: "trigger",
            // onClick: 
          }
        )}
      </Header>
    )
}


export default NavBar