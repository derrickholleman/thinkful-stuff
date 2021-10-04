import React, { useState, useEffect } from "react";
import "./App.css";

import AlbumList from "./AlbumList";
import UserList from "./UserList";

function App() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const abortController = new AbortController();
    setLoading(true);
    async function getUsers() {
      try {
        const usersResponse = await fetch(
          `https://jsonplaceholder.typicode.com/users`,
          { signal: abortController.signal }
        );
        const usersJSON = await usersResponse.json();
        setUsers(usersJSON);
        setLoading(false);
      } catch (err) {
        throw err;
      }
    }

    getUsers();

    return () => {
      abortController.abort();
    };
  }, []);

  useEffect(() => {
    const originalTitle = document.title;
    document.title = "Awesome Album App";
    return () => document.title = originalTitle;
  }, []);

  return (
    <div className="App">
      <div className="left column">
        <UserList
          users={users}
          setCurrentUser={setCurrentUser}
          loading={loading}
        />
      </div>
      <div className="right column">
        <AlbumList user={currentUser} albums={albums} setAlbums={setAlbums} />
      </div>
    </div>
  );
}

export default App;
