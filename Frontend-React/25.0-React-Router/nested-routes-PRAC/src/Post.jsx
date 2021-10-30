import React from "react";
import users from "./data";
import { useParams, Link } from "react-router-dom";

const Post = () => {
  const { userId, postId } = useParams();
  const user = users.find((user) => `${user.id}` === userId);
  const post = user.posts.find((post) => `${post.id}` === postId);
  return (
    <div>
      <Link to={`/users/${userId}/posts`}>Back to posts</Link>

      {post && (
        <div>
          <h1 className="page-title">{post.title}</h1>
          <p>{post.body}</p>
        </div>
      )}
    </div>
  );
};

export default Post;
