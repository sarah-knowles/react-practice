import React from 'react';
import Navbar from './Navbar';
import Homepage from './Homepage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';


function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className='content'>
          <Switch>
            <Route exact path='/'>
              <Homepage />
            </Route>
            <Route path='/create'>
              <Create />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
