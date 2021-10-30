import React from "react";
import users from "./data";
import { useParams, Link } from "react-router-dom";

const Posts = () => {
  const { userId } = useParams();
  const user = users.find((user) => `${user.id}` === userId);

  return (
    <div>
      <Link to="/">Back to Users</Link>
      <h1 className="page-title">{user.name}</h1>

      <ul>
        <li>
          <Link to={`/users/${user.id}`}>Profile</Link>
        </li>
        <li>
          <Link to={`/users/${user.id}/posts`}>Posts</Link>
        </li>
      </ul>
      <ul>
        {user.posts.map((post) => (
          <li key={post.id}>
            <Link to={`/users/${userId}/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
