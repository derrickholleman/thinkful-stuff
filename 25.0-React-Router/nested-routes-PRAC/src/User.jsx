import React from "react";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import Posts from "./Posts";
import UserProfile from "./UserProfile";

const User = ({ users }) => {
  const { url, path } = useRouteMatch();
  const { userId } = useParams();

  const user = users.find((user) => `${user.id}` === userId);

  return (
    <div>
      <Link to="/">Back to User List</Link>
      <h1>{user.name}</h1>

      {/* LINKS */}
      <ul>
        <li>
          <Link to={url}>Profile</Link>
        </li>
        <li>
          <Link to={`${url}/posts`}>Posts</Link>
        </li>
      </ul>


      {/* ROUTES */}
      <Route exact path={path}>
        <UserProfile user={user}/>
      </Route>
      <Route path={`${path}/posts`}>
        <Posts users={users}/>
      </Route>
    </div>
  );
};

export default User;
