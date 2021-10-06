import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router";

const UserProfile = () => {
  const [user, setUser] = useState({});

  const userId = useParams().userId;
  // sets userId as the userId from the URL (which is in the useParams object)
  useEffect(() => {
    async function loadUser() {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );
      const userFromAPI = await response.json();
      setUser(userFromAPI);
    }
    loadUser();
  }, [userId]);

  // No need to change anything below here
  if (user.id) {
    return Object.entries(user).map(([key, value]) => (
      <div key={key}>
        <label>{key}</label>: {JSON.stringify(value)}
        <hr />
      </div>
    ));
  }
  return "Loading...";
};

export default UserProfile;
