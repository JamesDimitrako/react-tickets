import React from "react";
import { ITicket } from "../../../app/models/ticket";
import { Layout, List, Avatar, Row, Col } from "antd";

const { Content } = Layout;

interface IProps {
  tickets: ITicket[];
}

const TicketDashboard: React.FC<IProps> = ({ tickets }) => {
  return (
    <Row>
      <Content
        className="site-layout-background"
        style={{
          margin: "24px 16px",
          padding: 24,
          minHeight: 280
        }}
      >
        <List itemLayout="horizontal">
          {tickets.map(ticket => (
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
      <Col span={8}></Col>
    </Row>
  );
};

export default TicketDashboard;
