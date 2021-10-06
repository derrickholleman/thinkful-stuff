import React from "react";
import { Route } from "react-router-dom";
import Users from "./Users";
import users from "./data.json";
import User from "./User";

function App() {
  return (
    <div className="App">
      <Route exact={true} path="/">
        {/* home page with all users */}
        <Users users={users} />
      </Route>
      {/* specify the path for each individual user, this is also the same as the profile path */}
      <Route path="/user/:userId">
        <User users={users} />
      </Route>
    </div>
  );
}

export default App;
