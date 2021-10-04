import React, { useState, useEffect } from "react";
import "./App.css";

import AlbumList from "./AlbumList";
import UserList from "./UserList";

function App() {
  const originalTitle = document.title;
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    document.title = "Awesome Album App";
    return () => (document.title = originalTitle);
  }, []);

  return (
    <div className="App">
      <div className="left column">
        <UserList
          users={users}
          setCurrentUser={setCurrentUser}
          setUsers={setUsers}
          setLoading={setLoading}
        />
      </div>
      <div className="right column">
        <AlbumList user={currentUser} albums={albums} setAlbums={setAlbums} loading={loading} setLoading={setLoading}/>
      </div>
    </div>
  );
}

export default App;
