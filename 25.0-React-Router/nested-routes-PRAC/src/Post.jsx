import React from "react";
import { useParams } from "react-router-dom";

const Post = ({ user }) => {
  const { postId } = useParams();

  const post = user.posts.find((post) => `${post.id}` === postId);

  return (
    <div>
      <p>{post.body}</p>
    </div>
  );
};

export default Post;
