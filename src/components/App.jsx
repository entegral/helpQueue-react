import React from 'react';
import Header from './Header';
import Home from './Home';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (  
    <div>
      <Header/>
      <hr />
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
      <hr />
    </div>
  );
}

export default App;
