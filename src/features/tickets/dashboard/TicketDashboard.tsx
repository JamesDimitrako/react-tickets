import React from "react";
import { ITicket } from "../../../app/models/ticket";
import { Layout, Row, Col } from "antd";
import TicketList from "./TicketList";

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
      <TicketList tickets={tickets}/>
      </Content>
      <Col span={8}></Col>
    </Row>
  );
};

export default TicketDashboard;
