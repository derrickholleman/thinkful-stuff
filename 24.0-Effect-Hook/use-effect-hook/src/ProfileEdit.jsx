import { useState, useEffect } from "react";

const ProfileEdit = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  const changeHandler = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
    console.log(user)
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

  useEffect(() => {
    setLoading(true);
    async function getUsers() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      const userFromAPI = await response.json();
      setUser(userFromAPI);
      setLoading(false);
    }
    getUsers();
  }, []);

  useEffect(() => {
    if (user.username) {
      document.title = `${user.username} : Edit Profile`;
    } else {
      document.title = "Edit Profile";
    }
  }, [user]);

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
