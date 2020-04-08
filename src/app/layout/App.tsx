import React, { Component } from "react";
import axios from "axios";
import { ITicket } from "../models/ticket";
import { Layout, Menu, List, Avatar } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined
} from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;

interface IState {
  tickets: ITicket[];
  collapsed: boolean;
}

class App extends Component<{}, IState> {
  readonly state: IState = {
    tickets: [],
    collapsed: true
  };

  componentDidMount() {
    axios.get<ITicket[]>("http://localhost:5000/api/tickets").then(response => {
      this.setState({
        tickets: response.data
      });
    });
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };
  render() {
    return (
      <Layout>
        <Sider
          style={{
            overflow: "auto",
            height: "100vh",
            left: 0
          }}
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
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
        <Layout className="site-layout" style={{ padding: 0 }}>
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(
              this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: this.toggle
              }
            )}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280
            }}
          >
            <List itemLayout="horizontal">
              {this.state.tickets.map(ticket => (
                <List.Item key={ticket.id}>
                  <List.Item.Meta
                    avatar={
                      <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    }
                    title={<a href="https://ant.design">{ticket.title}</a>}
                    description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                  />
                </List.Item>
              ))}
            </List>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default App;
