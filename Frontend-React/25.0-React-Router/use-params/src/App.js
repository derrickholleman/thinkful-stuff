import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import User from "./User";
import Lesson from "./Lesson";

function App() {
  const users = [
    { name: "Derrick", username: "myfriendoatmeal" },
    { name: "Stef", username: "dreamy-lover" },
    { name: "Keegan", username: "thepumpkinmuffin" },
  ];

  const courses = [
    {
      course: "Biology",
      lesson: "Frogs and Humans",
    },
    {
      course: "Music",
      lesson: "Writing a Concerto",
    },
  ];

  return (
    <Router>
      <div className="App">
        <div className="links">
          {users.map((user, index) => (
            <Link key={index} to={`/users/${user.username}`}>
              {user.name}
            </Link>
          ))}
          {courses.map((course, index) => (
            <Link key={index} to={`/${course.course}/${course.lesson}`}>
              {course.course}
            </Link>
          ))}
        </div>
        <Switch>
          <Route exact path="/users/:username">
            <User />
          </Route>
          <Route exact path="/:course/:lesson">
            <Lesson />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
