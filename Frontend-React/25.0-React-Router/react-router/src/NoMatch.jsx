import React from "react";
import { useLocation, Link } from "react-router-dom";

const NoMatch = () => {
  const location = useLocation();

  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default NoMatch;
