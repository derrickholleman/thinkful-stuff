import React from "react";
import { useParams } from "react-router-dom";

const Resource = ({ topics }) => {
  const { topicId, resourceId } = useParams();

  const resource = topics
    .find((topic) => topic.id === topicId)
    .resources.find((resource) => resource.id === resourceId);
  return (
    <div>
      <h3>{resource.name}</h3>
      <p>{resource.description}</p>
      <a href={resource.url}>More info.</a>
    </div>
  );
};

export default Resource;
