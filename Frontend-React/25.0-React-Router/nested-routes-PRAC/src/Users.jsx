import React from "react";
import { Link } from "react-router-dom";

const Users = ({ users }) => {
  return (
    <div>
      <h1>Users</h1>
      <table>
        <thead>
          <tr>
            <th>User Name</th>
            <th>Name</th>
            <th>Email</th>
            <th>View</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.username}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <Link to={`/users/${user.id}`}>View</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
