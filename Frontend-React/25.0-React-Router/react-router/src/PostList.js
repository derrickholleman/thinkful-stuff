import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";

export const PostList = () => {
  const { path } = useRouteMatch();

  return (
    <div>
      <Switch>
        <Route exact path={path}>
          <p>Here are a list of the user’s posts</p>
        </Route>
        <Route path={`$(path}/:postId`}>
          <p>Here is a single post</p>
        </Route>
      </Switch>
    </div>
  );
};

export default PostList;
