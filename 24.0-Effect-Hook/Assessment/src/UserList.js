import React from "react";

function UserList({ users, setCurrentUser, loading }) {
  return (
    <div>
    {loading && <h3>Loading users...</h3>}
      <ul className="user-list">
        {users.map((user) => (
          <li key={user.id}>
            <button type="button" onClick={() => setCurrentUser(user)}>
              {user.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
