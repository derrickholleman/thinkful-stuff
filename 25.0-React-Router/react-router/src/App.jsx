import "./App.css";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import NoMatch from "./NoMatch";

function App() {
  return (
    <Router>
      <div className="App">
        {/* switch only renders first match, searches child components in order */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <NoMatch />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
