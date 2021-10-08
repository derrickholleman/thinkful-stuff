import React from "react";
import topics from "./data";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./Home";
import Topics from "./Topics";
import NoMatch from "./NoMatch";

function App() {
  return (
    <Router>
      <div className="App">
        {/* overall page links */}
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <Switch>
          {/* route to home page */}
          <Route exact path="/">
            <Home />
          </Route>

          {/* route to topics */}
          <Route path="/topics">
            <Topics topics={topics} />
          </Route>

          <NoMatch />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
