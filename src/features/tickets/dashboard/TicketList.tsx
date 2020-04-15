import React from 'react'
import { List, Avatar } from 'antd'
import { ITicket } from '../../../app/models/ticket'


interface IProps {
    tickets: ITicket[];
  }
  

const TicketList: React.FC<IProps> = ({tickets}) => {
    return (
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
    )
}

export default TicketList
