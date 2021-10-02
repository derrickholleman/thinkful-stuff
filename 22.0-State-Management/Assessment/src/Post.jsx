import React from "react";

const Post = ({ deletePost, post }) => {
  return (
    <div>
      {post.textContent && (
        <div className="post">
          <p>{post.textContent}</p>
          <button name="delete" onClick={deletePost}>
            Delete
          </button>
        </div>
      )}
      {post.imageContent && (
        <div className="post">
          <img src={post.imageContent} alt="" />
          <button name="delete" onClick={deletePost}>
            Delete
          </button>
        </div>
      )}
      </div>
  );
};

export default Post;
