import React, { useEffect } from "react";

function AlbumList({ user, albums, setAlbums, loading, setLoading }) {

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
        setLoading(false)
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("Aborted");
        } else {
          throw err;
        }
      }
    }
    if (user.name) {
      getAlbums();
    } 

    return () => {
      abortController.abort();
    };
  }, [user]);

  return (
    <div>
      {!user.name && <p>Please click on a user name to the left</p>}
      {loading && <h3 style={{"color":"red"}}>Loading {user.name} albums...</h3>}
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
