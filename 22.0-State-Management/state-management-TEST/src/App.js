import React, { useState } from "react";
import "./App.css";
import PostCreate from "./PostCreate";
import PostList from "./PostList";

function App() {
  const [posts, setPosts] = useState([]);

  const createPost = (newPost) => setPosts((posts) => [newPost, ...posts]);

  const deletePost = (indexToDelete) =>
    setPosts((posts) =>
      posts.filter((placeholder, index) => index !== indexToDelete)
    );

  return (
    <div className="App">
      <PostCreate createPost={createPost} />
      <PostList posts={posts} deletePost={deletePost} />
    </div>
  );
}

export default App;
