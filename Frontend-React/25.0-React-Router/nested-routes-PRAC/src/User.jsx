import React from "react";
import { useParams, Link } from "react-router-dom";
import users from "./data";

const User = () => {
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

      <h2>User Name</h2>
      <p>{user.username}</p>
      <hr />

      <h2>Email</h2>
      <p>{user.email}</p>
      <hr />

      <h2>Phone</h2>
      <p>{user.phone}</p>
      <hr />

      <h2>Company</h2>
      <p>{user.company.name}</p>
      <hr />

      <h2>Website</h2>
      <p>{user.website}</p>
      <hr />
    </div>
  );
};

export default User;
