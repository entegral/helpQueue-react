import React from 'react';
import Ticket from './Ticket';
import PropTypes from 'prop-types';

function TicketList(props){
  console.log(props.ticketList);
  return (
    <div>
      <hr/>
      {Object.keys(props.ticketList).map( (ticketId) => {
        var ticket = props.ticketList[ticketId];
        return <Ticket names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          key={ticket.id} 
          ticketId = {ticketId} />;
      })}
    </div>
  );
}

TicketList.propTypes = {
  ticketList: PropTypes.object
};

export default TicketList;
