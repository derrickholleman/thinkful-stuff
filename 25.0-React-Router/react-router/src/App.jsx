import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import NoMatch from "./NoMatch";
import User from "./User";

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Link to="/">Home</Link>
        </div>
        {Array(10)
          .fill()
          .map((ignoredValue, index) => index + 1)
          .map((id) => (
            <div key={id}>
              <Link to={`/users/${id}`}>User {id}</Link>
            </div>
          ))}
        {/* switch only renders first match, searches child components in order */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/users/:userId">
            <User />
          </Route>

          <NoMatch />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
