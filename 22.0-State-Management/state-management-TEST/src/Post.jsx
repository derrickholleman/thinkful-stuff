import React from "react";

const Post = ({ deletePost, post }) => {
  return (
    <div>
      <p className="post">{post}</p>
      <button name="delete" onClick={deletePost}>
        Delete
      </button>
    </div>
  );
};

export default Post;
