import React from "react";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import Post from "./Post";

const Posts = ({ users }) => {
  const { url, path } = useRouteMatch();
  const { userId } = useParams();

  const user = users.find((user) => `${user.id}` === userId);

  return (
    <div>
      <ul>
        {user.posts.map((post) => (
          <li key={`${post.id}`}>
            <Link to={`${url}/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>

      <Route exact path={path}>
        <p>No post selected...</p>
      </Route>
      <Route path={`${path}/:postId`}>
        <Post user={user} />
      </Route>
    </div>
  );
};

export default Posts;
