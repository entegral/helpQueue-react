import React from 'react';
import TicketList from './TicketList';
import NewTicketControl from './NewTicketControl'
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      masterTicketList: []
    };
  }

  render(){
    return (
      <div>
        <Switch>
          <Route exact path='/' component={TicketList} />
          <Route path='/newticket' component={NewTicketControl} />
        </Switch>
      </div>
    );

  }
}

export default App;
