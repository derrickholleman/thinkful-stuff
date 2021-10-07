import React from "react";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import Resource from "./Resource";

const Topic = ({ topics }) => {

  const { topicId } = useParams();
  const { url, path } = useRouteMatch();
  console.log("Path:", path);
  console.log("url:", url);

  const topic = topics.find((topic) => topic.id === topicId);

  return (
    <div>
      <h2>{topic.name}</h2>
      <p>{topic.description}</p>

      <ul>
        {topic.resources.map((resource) => (
          <li key={resource.id}>
            <Link to={`${url}/${resource.id}`}>{resource.name}</Link>
          </li>
        ))}
      </ul>

      <hr />

      <Route path={`${path}/:resourceId`}>
        <Resource topics={topics}/>
      </Route>
    </div>
  );
};

export default Topic;
