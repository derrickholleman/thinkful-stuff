import React from "react";
import { Route, Switch } from "react-router-dom";
import UserProfile from "./UserProfile";
import PostList from "./PostList";

export const User = () => {
  return (
    <section>
      <Switch>
        <Route path={"/users/:userId/posts"}>
          <PostList />
        </Route>
        <Route path={"/users/:userId"}>
          <UserProfile />
        </Route>
      </Switch>
    </section>
  );
};

export default User;