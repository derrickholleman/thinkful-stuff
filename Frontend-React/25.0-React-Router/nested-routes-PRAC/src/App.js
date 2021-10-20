import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import users from "./data";
import Users from "./Users";
import User from "./User";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Users users={users} />
          </Route>
          <Route path="/users/:userId">
            <User users={users}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
