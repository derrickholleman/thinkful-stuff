import React from "react";
import Topic from "./Topic";
import { Route, useRouteMatch, Link } from "react-router-dom";

const Topics = ({ topics }) => {
  const { url, path } = useRouteMatch();

  // const topic = topics.find((topic) => topic.id === topicId)
  return (
    <div>
      <h1>TOPICS</h1>

      {/* NAV LINKS */}
      <ul>
        {topics.map((topic) => (
          <li key={topic.id}>
            <Link to={`${url}/${topic.id}`}>{topic.name}</Link>
          </li>
        ))}
      </ul>

      <hr />

      <Route path={`${path}/:topicId`}>
        <Topic topics={topics} />
      </Route>
    </div>
  );
};

export default Topics;
