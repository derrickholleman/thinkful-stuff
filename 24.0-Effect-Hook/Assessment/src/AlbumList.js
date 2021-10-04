import React, { useEffect } from "react";

function AlbumList({ user, albums, setAlbums }) {

  useEffect(() => {
    const abortController = new AbortController();

    async function getAlbums() {
      try {
        const albumsResponse = await fetch(
          `https://jsonplaceholder.typicode.com/albums?userId=${user.id}`,
          { signal: abortController.signal }
        );
        const albumsJSON = await albumsResponse.json();
        setAlbums(albumsJSON);
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("Aborted", user.id);
        } else {
          throw err;
        }
      }
    }

    getAlbums();

    return () => {
      abortController.abort();
    };
  }, [user]);

  return (
    <div>
      {!user.name && <p>Please click on a user name to the left</p>}
      <h2>{user.name}</h2>
      {albums.map((album) => (
        <p key={album.id}>
          {album.id} - {album.title}
        </p>
      ))}
    </div>
  );
}

export default AlbumList;
