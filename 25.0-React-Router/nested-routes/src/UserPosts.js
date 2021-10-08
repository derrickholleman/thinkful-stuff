import React from "react";
import { Link, Route, useRouteMatch } from "react-router-dom";
import UserPost from "./UserPost";

export const UserPosts = ({ posts = [] }) => {
  const { path, url } = useRouteMatch();

  const postLinks = posts.map((post) => (
    <li key={post.id}>
      {/* dynamically render links to the different posts */}
      <Link to={`${url}/${post.id}`} data-testid={`user-post-${post.id}`}>
        {post.title}
      </Link>
    </li>
  ));

  return (
    <div>
      <ul>{postLinks}</ul>
      <div>
        {/* if no post id, render this message */}
        <Route exact path={path}>
          <p>No post selected...</p>
        </Route>
        {/* specify path where each user post should be found at */}
        <Route path={`${path}/:postId`}>
          <UserPost posts={posts} />
        </Route>
      </div>
    </div>
  );
};

export default UserPosts;
