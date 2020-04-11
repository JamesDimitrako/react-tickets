import React, { useState, useEffect }  from "react";
import { Layout } from "antd";
import axios from "axios";
import NavBar from "../../features/nav/NavBar";
import TicketDashboard from "../../features/tickets/dashboard/TicketDashboard";
import SiderMenu from "../../features/nav/SiderMenu";
import { ITicket } from "../models/ticket";

const { Footer } = Layout;

const App = () => {
  const [tickets, setTickets] = useState<ITicket[]>([]);
  useEffect(() => {
    axios.get<ITicket[]>("http://localhost:5000/api/tickets").then(response => {
      setTickets(response.data);
    });
  }, []);

  return (
    <Layout>
     <SiderMenu />
      <Layout className="site-layout" style={{ padding: 0 }}>
       <NavBar />
        <TicketDashboard tickets={tickets}/>
        <Footer style={{ textAlign: "center" }}>
          ©2020 Created by James Dimitrako
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
