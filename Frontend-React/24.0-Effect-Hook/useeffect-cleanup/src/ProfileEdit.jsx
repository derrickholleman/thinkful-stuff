import { useState, useEffect } from "react";

const ProfileEdit = ({ userID }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  // using Abort controller because each button click causes a new fetch/load to occur so you have to wait for the current fetch to finish before displaying results
  useEffect(() => {
    setLoading(true);
    const abortController = new AbortController();

    async function getUsers() {
      try {
        console.log("fetching", userID);
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userID}`,
          { signal: abortController.signal } // pass abort controller to fetch
        );
        const userFromAPI = await response.json();
        setUser(userFromAPI);
        setLoading(false);
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("Aborted", userID);
        } else {
          throw err;
        }
      }
    }
    getUsers();

    // clean up
    return () => {
      console.log("cleanup", userID);
      abortController.abort(); // cancels any pending requests
    };
  }, [userID]);

  useEffect(() => {
    if (user.username) {
      document.title = `${user.username} : Edit Profile`;
    } else {
      document.title = "Edit Profile";
    }
  }, [user]);

  const changeHandler = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
    console.log(user);
  };
  const submitHandler = async (event) => {
    event.preventDefault();
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${user.id}`,
      {
        method: "PUT",
        body: JSON.stringify(user),
      }
    );
    const savedData = await response.json();
    console.log("Saved user!", savedData);
  };

  return (
    <div>
      {user && (
        <form name="profileEdit" onSubmit={submitHandler}>
          <div>
            <label htmlFor="username">User Name:</label>
            <input
              id="username"
              name="username"
              type="text"
              value={user.username}
              onChange={changeHandler}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              name="email"
              type="email"
              value={user.email}
              onChange={changeHandler}
            />
          </div>
          <button type="submit">Save</button>
        </form>
      )}

      {loading && <p>Loading...</p>}
    </div>
  );
};

export default ProfileEdit;
