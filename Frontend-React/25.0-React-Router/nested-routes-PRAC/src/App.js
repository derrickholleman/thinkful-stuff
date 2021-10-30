import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";
import Users from "./Users";
import User from "./User";
import Posts from "./Posts";
import Post from "./Post";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          {/* post routes */}
          <Route path="/users/:userId/posts/:postId">
            <Post />
          </Route>
          <Route path="/users/:userId/posts">
            <Posts />
          </Route>
          {/* user routes */}
          <Route path="/users/:userId">
            <User />
          </Route>
          <Route exact path="/">
            <Users />
          </Route>

          {/* rerouting and not found handling */}
          <Route path="/users">
            <Redirect to="/" />
          </Route>
          <Route path="*">
            <h1>Page Not Found!</h1>
            <Link to="/">Back to home page</Link>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
