import React from "react";
import users from "./data";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";

const Users = () => {
  return (
    <div>
      <h1>Users</h1>
      
      {/* overflowX: auto creates a scroll bar on table */}
      <div style={{ overflowX: "auto" }}>
        <Table striped hover>
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
                  <Link to={`/users/${user.id}`}>View Profile</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Users;
