import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

const UserProfile = () => {
  const [user, setUser] = useState({});

  // sets userId as the userId from the URL (which is in the useParams object)
  console.log(useParams());
  const { userId } = useParams();

  useEffect(() => {
    async function loadUser() {
      // fetch user by params id
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );
      const userFromAPI = await response.json();
      // set user as response object
      setUser(userFromAPI);
    }
    loadUser();
  }, [userId]);

  // if there was a valid user fetched
  if (user.id) {
    return Object.entries(user).map(([key, value]) => (
      <div key={key}>
        <label>{key}</label>: {JSON.stringify(value)}
        <hr />
      </div>
    ));
  }
  return "User not found!";
};

export default UserProfile;
