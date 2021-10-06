import React from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import UserPost from "./UserPost";

export const UserPosts = ({ posts = [] }) => {
  const { url } = useRouteMatch(); // /user/2/posts

  const postLinks = posts.map((post) => (
    <li key={post.id}>
      {/* dynamically render links to the different posts */}
      <Link to={`${url}/${post.id}`}>{post.title}</Link>
    </li>
  ));

  return (
    <div>
      <ul>{postLinks}</ul>
      <div>
        <Switch>
          {/* if no post id, render this message */}
          <Route exact path={url}>
            <p>No post selected...</p>
          </Route>
          {/* specify URL where each user post should be found at */}
          <Route path={`${url}/:postId`}>
            <UserPost posts={posts} />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default UserPosts;
