import React from "react";
import { Route } from "react-router-dom";
import Users from "./Users";
import users from "./data.json";
import User from "./User";

function App() {
  return (
    <div className="App">
      <Route exact={true} path="/">
        {/* home page */}
        <Users users={users} />
      </Route>

      {/* /users/1 */}
      <Route path="/users/:userId">
        <User users={users} />
      </Route>
    </div>
  );
}

export default App;
