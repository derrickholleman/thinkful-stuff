import React from "react";
import Post from './Post'

function PostList({ posts, deletePost }) {

  return (<div className="post-list">
    {
      posts.map((post, index) => (
        <Post 
        key={index}
        deletePost={() => deletePost(index)}
        post={post}/>
      ))
    }
  </div>);
}

export default PostList;
