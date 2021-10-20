import React from "react";
import {
  Link,
  NavLink,
  Route,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import UserPosts from "./UserPosts";
import UserProfile from "./UserProfile";

export const User = ({ users = [] }) => {
  const { userId } = useParams();
  const { url, path } = useRouteMatch();

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
          {/* NAV LINKS */}
          <ul>
            <li>
              <NavLink to={url} data-testid="user-profile">
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink to={`${url}/posts`} data-testid="user-posts">
                Posts
              </NavLink>
            </li>
          </ul>

          {/* ROUTES FOR PROFILE AND POSTS */}
          <Route exact path={path}>
            <UserProfile user={user} />
          </Route>
          <Route path={`${path}/posts`}>
            <UserPosts posts={user.posts} />
          </Route>
        </div>
      </section>
    );
  }
  return <p>User not found</p>;
};

export default User;
