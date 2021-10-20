import React from "react";
import { topics } from "./data";
import Topic from "./Topic";
import { Link, Route, useRouteMatch } from "react-router-dom";

const Topics = () => {
  const { url, path } = useRouteMatch();
  console.log("Path:", path);
  console.log("url:", url);

  return (
    <div>
      <h1>TOPICS</h1>
      <ul>
        {topics.map((topic) => (
          <li key={topic.id}>
            <Link to={`${url}/${topic.id}`}>{topic.name}</Link>
          </li>
        ))}
      </ul>

      <Route path={`${path}/:topicId`}>
        <Topic topics={topics} />
      </Route>
    </div>
  );
};

export default Topics;
