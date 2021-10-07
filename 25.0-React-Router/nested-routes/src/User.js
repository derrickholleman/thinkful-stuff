import React from "react";
import {
  Link,
  NavLink,
  Route,
  Switch,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import UserPosts from "./UserPosts";
import UserProfile from "./UserProfile";

export const User = ({ users = [] }) => {
  const { userId } = useParams();
  const { url } = useRouteMatch(); // /user/2

  if (!userId) {
    throw new Error("No URL parameter for userId");
  }

  const user = users.find((user) => `${user.id}` === userId);

  if (user) {
    return (
      <section>
        <Link to="/"> &lt;- Users</Link>
        <div>
          <h2>{user.name}</h2>
          {/* each user has a link to their profile and posts with a specified url path */}
          <ul>
            <li>
              <NavLink to={`${url}`}>Profile</NavLink>
            </li>
            <li>
              <NavLink to={`${url}/posts`}>Posts</NavLink>
            </li>
          </ul>

          <Switch>
            {/* here the components within each user are rendered and their path is specified */}
            <Route exact path={url}>
              <UserProfile user={user} />
            </Route>
            <Route path={`${url}/posts`}>
              <UserPosts posts={user.posts} />
            </Route>
          </Switch>
        </div>
      </section>
    );
  }
  return <p>User not found</p>;
};

export default User;
