import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PeopleList from './component/PeopleList';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={PeopleList} />
      </Switch>
    </Router>
  );
}

export default App;
