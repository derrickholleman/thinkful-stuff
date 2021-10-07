import React from "react";
import Home from "./Home";
import Topics from "./Topics";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <div className="App" style={{ width: "75%", margin: "0 auto" }}>
      <Router>
        <ul>
          {/* creating home link */}
          <li>
            <Link to="/">Home</Link>
          </li>
          {/* creating topics link */}
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>
        <hr />

        {/* creating routes */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/topics">
            <Topics />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
