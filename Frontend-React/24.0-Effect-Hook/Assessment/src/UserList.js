import React, { useEffect } from "react";

function UserList({ users, setCurrentUser, setUsers, setLoading }) {
  useEffect(() => {
    const abortController = new AbortController();
    async function getUsers() {
      try {
        const usersResponse = await fetch(
          `https://jsonplaceholder.typicode.com/users`,
          { signal: abortController.signal }
        );
        const usersJSON = await usersResponse.json();
        setUsers(usersJSON);
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("Aborted");
        } else {
          throw err;
        }
      }
    }

    getUsers();

    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <div>
      <ul className="user-list">
        {users.map((user) => (
          <li key={user.id}>
            <button
              type="button"
              onClick={() => {
                setCurrentUser(user);
                setLoading(true);
              }}
            >
              {user.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
